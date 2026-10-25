import { NextRequest, NextResponse } from 'next/server';
import { resolveEnquiryService, serviceOptions } from '@/content/enquiryOptions';
export interface EnquiryPayload {
  name: string; phone: string; email?: string; eventCity: string; eventDate?: string;
  dateNotFinalised?: boolean; serviceInterest: string; serviceInterests: string[]; budgetRange?: string; message?: string; honeypot?: string;
}
export async function POST(req: NextRequest) {
  if (!req.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return NextResponse.json({ success: false, message: 'Please send JSON enquiry details.' }, { status: 415 });
  const origin = req.headers.get('origin');
  // Next.js may normalize req.url to its internal hostname. The browser's Host
  // header identifies the public address receiving this request.
  const requestOrigin = new URL(req.url);
  const publicHost = req.headers.get('host');
  if (publicHost) requestOrigin.host = publicHost;
  if (origin && origin !== requestOrigin.origin) return NextResponse.json({ success: false, message: 'Please submit the enquiry from this website.' }, { status: 403 });
  let input: unknown;
  try {
    const reader = req.body?.getReader();
    const decoder = new TextDecoder();
    let text = '';
    let bytes = 0;
    if (reader) {
      while (true) {
        const chunk = await reader.read();
        if (chunk.done) break;
        bytes += chunk.value.byteLength;
        if (bytes > 65536) { await reader.cancel(); throw new RangeError('Enquiry too large'); }
        text += decoder.decode(chunk.value, { stream: true });
      }
      text += decoder.decode();
    }
    input = JSON.parse(text);
  } catch (error) {
    return NextResponse.json({ success: false, message: error instanceof RangeError ? 'Please keep your enquiry under 64 KB.' : 'Please send valid enquiry details.' }, { status: error instanceof RangeError ? 413 : 400 });
  }
  if (!input || typeof input !== 'object' || Array.isArray(input)) return NextResponse.json({ success: false, message: 'Please send valid enquiry details.' }, { status: 400 });
  const body = input as Record<string, unknown>;
  const value = (key: string) => typeof body[key] === 'string' ? (body[key] as string).trim() : '';
  if (value('honeypot')) return NextResponse.json({ success: true, message: 'Received' });
  const errors: Record<string, string> = {};
  if (value('name').length < 2 || value('name').length > 150) errors.name = 'Please provide your full name (2–150 characters).';
  if (!/^\+?[0-9]{7,15}$/.test(value('phone').replace(/[\s\-()]/g, ''))) errors.phone = 'Please provide a valid phone or WhatsApp number.';
  if (value('eventCity').length < 2 || value('eventCity').length > 150) errors.eventCity = 'Please specify the celebration city or destination.';
  const requestedServices = body.serviceInterests === undefined ? [value('serviceInterest')] : body.serviceInterests;
  const serviceInterests = Array.isArray(requestedServices) && requestedServices.every(item => typeof item === 'string')
    ? [...new Set(requestedServices.map(item => resolveEnquiryService(item.trim())))] : [];
  if (!serviceInterests.length || serviceInterests.length > serviceOptions.length || serviceInterests.some(item => !item || !serviceOptions.some(option => option.value === item))) errors.serviceInterest = 'Please select one or more valid service interests.';
  const serviceInterest = serviceInterests[0];
  if (value('email') && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email')) || value('email').length > 254)) errors.email = 'Please provide a valid email address.';
  if (value('message').length > 5000) errors.message = 'Please keep celebration details under 5,000 characters.';
  const eventDate = value('eventDate');
  if (eventDate && (!/^\d{4}-\d{2}-\d{2}$/.test(eventDate) || Number.isNaN(Date.parse(eventDate)) || new Date(eventDate).toISOString().slice(0, 10) !== eventDate)) errors.eventDate = 'Please provide a valid event date.';
  if (Object.keys(errors).length) return NextResponse.json({ success: false, errors }, { status: 400 });
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (process.env.ENQUIRY_DELIVERY_ENABLED !== 'true' || !webhook) return NextResponse.json({ success: false, backendConfigured: false, message: 'Online enquiries are not open yet. Your details have not been sent. Please use a direct contact option if one is available.' }, { status: 503 });
  try {
    const endpoint = new URL(webhook);
    if (endpoint.protocol !== 'https:') throw new Error('HTTPS required');
    const payload: EnquiryPayload = { name: value('name'), phone: value('phone'), email: value('email'), eventCity: value('eventCity'), eventDate: value('eventDate'), dateNotFinalised: body.dateNotFinalised === true, serviceInterest, serviceInterests, budgetRange: value('budgetRange'), message: value('message') };
    const result = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(process.env.ENQUIRY_DELIVERY_KEY ? { Authorization: `Bearer ${process.env.ENQUIRY_DELIVERY_KEY}` } : {}) }, body: JSON.stringify(payload), signal: AbortSignal.timeout(10000), redirect: 'error' });
    if (!result.ok) throw new Error('Delivery rejected');
    return NextResponse.json({ success: true, backendConfigured: true, message: 'Thank you. Your enquiry has been sent to Sajid & Joya.' });
  } catch {
    return NextResponse.json({ success: false, message: 'Your enquiry could not be delivered. Your details are still in the form; please try again.' }, { status: 502 });
  }
}
