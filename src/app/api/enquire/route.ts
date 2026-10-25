import { NextRequest, NextResponse } from 'next/server';
import { submissionBody } from '@/lib/submission-request';
import { notifyTeam } from '@/lib/server-notifications';
import { resolveEnquiryService, serviceOptions } from '@/content/enquiryOptions';
export async function POST(req: NextRequest) {
  const body = await submissionBody(req);
  if (body instanceof NextResponse) return body;
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
  if (value('email') && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email')) || value('email').length > 254)) errors.email = 'Please provide a valid email address.';
  if (value('message').length > 5000) errors.message = 'Please keep celebration details under 5,000 characters.';
  const eventDate = value('eventDate');
  if (eventDate && (!/^\d{4}-\d{2}-\d{2}$/.test(eventDate) || Number.isNaN(Date.parse(eventDate)) || new Date(eventDate).toISOString().slice(0, 10) !== eventDate)) errors.eventDate = 'Please provide a valid event date.';
  if (Object.keys(errors).length) return NextResponse.json({ success: false, errors }, { status: 400 });
  const services = serviceOptions.filter(option => serviceInterests.includes(option.value)).map(option => option.label).join(', ');
  return notifyTeam({ kind: 'enquiry', name: value('name'), phone: value('phone'), email: value('email'), city: value('eventCity'), details: `Services: ${services}\nDate: ${body.dateNotFinalised === true ? 'Not finalised' : eventDate || 'To be discussed'}\nBudget: ${value('budgetRange').slice(0, 150) || 'To be discussed'}\nDetails: ${value('message') || 'Not supplied'}` });
}
