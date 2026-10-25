// Public endpoint: FormSubmit verifies the recipient once by email.
// Works on static hosting as well as the Next.js server, without opening another app.
export const formEmailEndpoint = 'https://formsubmit.co/ajax/sjentertainmentch@gmail.com';

export async function sendFormEmail(
  kind: 'enquiry' | 'team',
  fields: Record<string, string>,
  honeypot = '',
  transport: typeof fetch = fetch,
) {
  if (honeypot) return { success: false, message: 'Unable to send. Please contact Sajid directly.' };
  const body: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (!key.startsWith('_')) body[key] = value;
  }
  const response = await transport(formEmailEndpoint, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    signal: AbortSignal.timeout(30000),
    body: JSON.stringify({ ...body, _subject: kind === 'enquiry' ? 'SJ Website — New celebration enquiry' : 'SJ Website — New team introduction', _template: 'table', _honey: honeypot }),
  });
  const result = await response.json();
  // FormSubmit returns string booleans; "false" must never be treated as success.
  if (response.ok && (result.success === true || result.success === 'true')) {
    return { success: true, message: 'Thank you. Your details have been accepted for email delivery to the SJ team.' };
  }
  const activation = typeof result.message === 'string' && /activat/i.test(result.message);
  return { success: false, message: activation
    ? 'Email delivery is awaiting activation by the SJ team. Your details have not been confirmed as delivered. Please contact Sajid directly.'
    : 'Your details could not be sent. Please try again or contact Sajid directly.' };
}
