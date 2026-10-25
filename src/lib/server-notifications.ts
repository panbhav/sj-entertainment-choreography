import 'server-only';
import { NextResponse } from 'next/server';
import { deliverNotification, type Notification, type NotificationConfig } from './notification-delivery';

function config(): NotificationConfig | null {
  if (process.env.NOTIFICATIONS_ENABLED !== 'true' || process.env.GITHUB_PAGES === 'true') return null;
  const values: NotificationConfig = {
    resendKey: process.env.RESEND_API_KEY || '', emailFrom: process.env.NOTIFICATIONS_EMAIL_FROM || '', emailTo: 'sjentertainmentch@gmail.com',
    twilioAccount: process.env.TWILIO_ACCOUNT_SID || '', twilioKey: process.env.TWILIO_API_KEY || '', twilioSecret: process.env.TWILIO_API_SECRET || '',
    messagingService: process.env.TWILIO_MESSAGING_SERVICE_SID || '', contentSid: process.env.TWILIO_CONTENT_SID || '', whatsappTo: '+918233277258',
  };
  return Object.values(values).every(Boolean)
    && /^AC[a-f\d]{32}$/i.test(values.twilioAccount) && /^SK[a-f\d]{32}$/i.test(values.twilioKey)
    && /^MG[a-f\d]{32}$/i.test(values.messagingService) && /^HX[a-f\d]{32}$/i.test(values.contentSid)
    && !/[\r\n]/.test(values.emailFrom) ? values : null;
}
export const notificationsConfigured = () => config() !== null;

export async function notifyTeam(item: Omit<Notification, 'id'>) {
  const settings = config();
  if (!settings) return NextResponse.json({ success: false, backendConfigured: false, message: 'Online submissions are not connected yet. Please contact Sajid directly. Your details have not been sent.' }, { status: 503 });
  const id = crypto.randomUUID();
  const delivery = await deliverNotification({ ...item, id }, settings);
  const accepted = delivery.email === 'accepted' || delivery.whatsapp === 'accepted';
  // Never log applicant details, message contents or provider credentials.
  if (delivery.email !== 'accepted' || delivery.whatsapp !== 'accepted') console.error('SJ notification requires attention', { id, kind: item.kind, delivery });
  return NextResponse.json({ success: accepted, reference: id, delivery, message: accepted ? 'Thank you. Your details have been submitted to the SJ team.' : 'Your details could not be submitted. Please try again or contact Sajid directly.' }, { status: accepted ? delivery.email === 'accepted' && delivery.whatsapp === 'accepted' ? 200 : 202 : 502 });
}
