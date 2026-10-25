import { NextRequest, NextResponse } from 'next/server';
import { submissionBody } from '@/lib/submission-request';
import { notifyTeam } from '@/lib/server-notifications';
import { teamAreas, teamExperience, teamAvailability } from '@/content/teamOptions';

export async function POST(req: NextRequest) {
  const body = await submissionBody(req);
  if (body instanceof NextResponse) return body;
  const value = (key: string) => typeof body[key] === 'string' ? (body[key] as string).trim() : '';
  if (value('honeypot')) return NextResponse.json({ success: true, message: 'Received' });
  const errors: Record<string, string> = {};
  if (value('name').length < 2 || value('name').length > 100) errors.name = 'Please enter your name.';
  if (!/^\+?[0-9]{7,15}$/.test(value('phone').replace(/[\s()\-]/g, ''))) errors.phone = 'Please enter a valid phone number.';
  if (value('city').length < 2 || value('city').length > 150) errors.city = 'Please enter your current city.';
  if (!teamAreas.includes(value('area'))) errors.area = 'Please choose an area of interest.';
  if (!teamExperience.includes(value('experience'))) errors.experience = 'Please choose your experience.';
  if (!teamAvailability.includes(value('availability'))) errors.availability = 'Please choose your availability.';
  if (value('skills').length < 10 || value('skills').length > 1200) errors.skills = 'Please describe your skills in 10–1,200 characters.';
  if (value('portfolio')) try {
    if (value('portfolio').length > 500 || !['http:', 'https:'].includes(new URL(value('portfolio')).protocol)) throw new Error('Invalid link');
  } catch { errors.portfolio = 'Please enter a valid HTTP(S) portfolio link.'; }
  if (Object.keys(errors).length) return NextResponse.json({ success: false, errors, message: 'Please check your introduction details.' }, { status: 400 });
  return notifyTeam({ kind: 'team', name: value('name'), phone: value('phone'), city: value('city'), details: `Area: ${value('area')}\nExperience: ${value('experience')}\nAvailability: ${value('availability')}\nOpen to travel: ${body.travel === true ? 'Yes' : 'To be discussed'}\nPortfolio: ${value('portfolio') || 'Not supplied'}\nSkills: ${value('skills')}` });
}
