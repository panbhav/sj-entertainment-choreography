export type Notification = {
  id: string; kind: 'enquiry' | 'team'; name: string; phone: string; city: string;
  email?: string; details: string;
};
export type NotificationConfig = {
  resendKey: string; emailFrom: string; emailTo: string;
  twilioAccount: string; twilioKey: string; twilioSecret: string;
  messagingService: string; contentSid: string; whatsappTo: string;
};
export type DeliveryResult = { email: 'accepted' | 'failed'; whatsapp: 'accepted' | 'failed' };

/** Server callers supply credentials; this module never reads public/client configuration. */
export async function deliverNotification(item: Notification, config: NotificationConfig, request: typeof fetch = fetch): Promise<DeliveryResult> {
  const title = item.kind === 'team' ? 'Team introduction' : 'Celebration enquiry';
  const oneLine = (text: string, limit: number) => text.replace(/\s+/g, ' ').trim().slice(0, limit) || 'Not supplied';
  const variables = { '1': title, '2': oneLine(item.name, 80), '3': oneLine(item.phone, 25), '4': oneLine(item.city, 100), '5': oneLine(item.details, 600) };
  const text = `${title}\nReference: ${item.id}\nName: ${item.name}\nPhone: ${item.phone}\nCity: ${item.city}${item.email ? `\nEmail: ${item.email}` : ''}\n\n${item.details}`;
  const options = { signal: AbortSignal.timeout(12000), redirect: 'error' as const, cache: 'no-store' as const };
  const email = async () => {
    const response = await request('https://api.resend.com/emails', {
      ...options, method: 'POST', headers: { Authorization: `Bearer ${config.resendKey}`, 'Content-Type': 'application/json', 'Idempotency-Key': `sj-${item.kind}-${item.id}` },
      body: JSON.stringify({ from: config.emailFrom, to: [config.emailTo], subject: `SJ ${title} — ${item.id}`, text, ...(item.email ? { reply_to: item.email } : {}) }),
    });
    if (!response.ok) throw new Error('Email provider rejected request');
    const result = await response.json();
    if (typeof result.id !== 'string' || !result.id) throw new Error('Email provider did not acknowledge request');
  };
  const whatsapp = async () => {
    const response = await request(`https://api.twilio.com/2010-04-01/Accounts/${config.twilioAccount}/Messages.json`, {
      ...options, method: 'POST', headers: { Authorization: `Basic ${btoa(`${config.twilioKey}:${config.twilioSecret}`)}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ To: `whatsapp:${config.whatsappTo}`, MessagingServiceSid: config.messagingService, ContentSid: config.contentSid, ContentVariables: JSON.stringify(variables) }),
    });
    if (!response.ok) throw new Error('WhatsApp provider rejected request');
    const result = await response.json();
    if (typeof result.sid !== 'string' || !result.sid || ['failed', 'undelivered', 'canceled'].includes(result.status)) throw new Error('WhatsApp provider did not accept request');
  };
  const outcomes = await Promise.allSettled([email(), whatsapp()]);
  return { email: outcomes[0].status === 'fulfilled' ? 'accepted' : 'failed', whatsapp: outcomes[1].status === 'fulfilled' ? 'accepted' : 'failed' };
}
