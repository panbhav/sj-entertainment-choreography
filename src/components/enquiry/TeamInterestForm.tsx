'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Check, Send, Pencil } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import { teamAreas as areas, teamExperience as experienceOptions, teamAvailability as availabilityOptions } from '@/content/teamOptions';
import './Hire.css';

type Application = {
  area: string; name: string; phone: string; city: string; experience: string;
  availability: string; portfolio: string; skills: string; travel: boolean;
  honeypot: string;
};

export default function TeamInterestForm({ deliveryAvailable = false }: { deliveryAvailable?: boolean }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');
  const [area, setArea] = useState(areas[0]);
  const [application, setApplication] = useState<Application | null>(null);
  const [error, setError] = useState<{ field: string; message: string } | null>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function review(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (name: string) => String(form.get(name) || '').trim();
    let invalid: { field: string; message: string } | null = null;
    if (get('name').length < 2) invalid = { field: 'name', message: 'Please enter your name (at least two characters).' };
    else if (!/^\+?[0-9]{7,15}$/.test(get('phone').replace(/[\s()\-]/g, ''))) invalid = { field: 'phone', message: 'Please enter a valid phone number with 7–15 digits.' };
    else if (get('city').length < 2) invalid = { field: 'city', message: 'Please enter your current city.' };
    else if (get('skills').length < 10) invalid = { field: 'skills', message: 'Tell us a little about your skills (at least ten characters).' };
    if (!invalid && get('portfolio')) {
      try {
        const url = new URL(get('portfolio'));
        if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Unsupported link');
      } catch {
        invalid = { field: 'portfolio', message: 'Use a full https:// or http:// portfolio or showreel link.' };
      }
    }
    if (invalid) {
      setError(invalid);
      event.currentTarget.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${invalid.field}"]`)?.focus();
      return;
    }
    setError(null);
    setSendError('');
    setSent(false);
    setApplication({ area, name: get('name'), phone: get('phone'), city: get('city'), experience: get('experience'), availability: get('availability'), portfolio: get('portfolio'), skills: get('skills'), travel: form.get('travel') === 'on', honeypot: get('honeypot') });
    requestAnimationFrame(() => {
      reviewRef.current?.focus();
      reviewRef.current?.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
  }

  async function sendIntroduction() {
    if (!application || sending || sent) return;
    if (!deliveryAvailable) {
      setSendError('Online submissions are not connected yet. Your introduction has not been sent. Please contact Sajid directly.');
      return;
    }
    setSending(true);
    setSendError('');
    try {
      const response = await fetch(withBasePath('/api/team'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(30000), body: JSON.stringify(application) });
      const result = await response.json();
      if (response.ok && result.success) setSent(true);
      else setSendError(result.message || 'Your introduction could not be submitted. Please try again.');
    } catch {
      setSendError('Unable to submit your introduction. Please try again or contact Sajid directly.');
    } finally { setSending(false); }
  }
  const invalidProps = (field: string) => ({ 'aria-invalid': error?.field === field || undefined, 'aria-describedby': error?.field === field ? 'team-error' : undefined });

  return <div className="hire-form-shell" id="team-interest">
    <div className="hire-form-heading">
      <span className="hire-step">TELL US WHAT YOU BRING TO THE STAGE</span>
      <h2>Your talent.<br /><em>Our next chapter.</em></h2>
      <p>Introduce yourself for future project or team opportunities. These areas are expressions of interest, not confirmed vacancies.</p>
    </div>
    {!deliveryAvailable && <p className="hire-form-note mb-5">Online submissions are not connected yet. You can prepare your introduction here and contact Sajid directly.</p>}
    <form ref={formRef} onSubmit={review} hidden={!!application} className="hire-form">
      <div hidden aria-hidden="true"><label>Leave this blank<input name="honeypot" tabIndex={-1} autoComplete="off" /></label></div>
      <fieldset>
        <legend><span>01</span> Where do you find your rhythm?</legend>
        <div className="hire-intents">{areas.map(item => <label key={item} className={area === item ? 'is-selected' : ''}>
          <input type="radio" name="area" value={item} checked={area === item} onChange={() => setArea(item)} />
          <span>{item}</span>{area === item && <Check size={16} aria-hidden="true" />}
        </label>)}</div>
      </fieldset>
      <fieldset>
        <legend><span>02</span> A little about you.</legend>
        <div className="hire-fields">
          <label>Your name *<input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="What should we call you?" {...invalidProps('name')} /></label>
          <label>Phone / WhatsApp *<input name="phone" type="tel" autoComplete="tel" required maxLength={25} placeholder="Include your country code" {...invalidProps('phone')} /></label>
          <label>Current city *<input name="city" autoComplete="address-level2" required minLength={2} maxLength={150} placeholder="Where are you based?" {...invalidProps('city')} /></label>
          <label>Experience *<select name="experience" required defaultValue=""><option value="" disabled>Select your experience</option>{experienceOptions.map(item => <option key={item}>{item}</option>)}</select></label>
          <label className="hire-wide">Availability *<select name="availability" required defaultValue=""><option value="" disabled>How would you like to work?</option>{availabilityOptions.map(item => <option key={item}>{item}</option>)}</select></label>
          <label className="hire-wide">Portfolio / showreel link <span className="hire-optional">optional</span><input name="portfolio" type="url" maxLength={500} placeholder="https:// — your website, Instagram or YouTube" {...invalidProps('portfolio')} /></label>
          <label className="hire-wide">Skills & styles *<textarea name="skills" required minLength={10} maxLength={1200} rows={4} placeholder="Your dance styles, choreography work, production skills, or creative strengths. If you’re starting out, tell us what you’re learning." {...invalidProps('skills')} /></label>
        </div>
        <label className="team-travel"><input type="checkbox" name="travel" /> I’m open to travelling for projects.</label>
      </fieldset>
      {error && <p id="team-error" role="alert" className="hire-error">{error.message}</p>}
      <button type="submit" className="hire-submit">Review my introduction <ArrowRight size={18} /></button>
      <p className="hire-form-note">Fields marked * are required. {deliveryAvailable ? 'Review your details before submitting to the SJ team. No messaging app or email app opens.' : 'You can prepare and review your details here. Contact Sajid directly while online submissions are unavailable.'}</p>
    </form>
    <div ref={reviewRef} tabIndex={-1} hidden={!application} className="hire-review" aria-labelledby="team-review-title">
      <span className="hire-step">03 / MAKE YOUR INTRODUCTION</span>
      <h3 id="team-review-title">Ready to meet the SJ team?</h3>
      <p>{sent ? 'Your introduction has been submitted to the SJ team. We’ll discuss next steps if there is a suitable opportunity.' : 'Review your details, then submit your introduction directly from this page. Nothing has been sent yet.'}</p>
      {application && <dl>{[
        ['Interest', application.area], ['Name', application.name], ['Phone', application.phone], ['City', application.city],
        ['Experience', application.experience], ['Available', application.availability], ['Travel', application.travel ? 'Open to travel' : 'To be discussed'],
        ...(application.portfolio ? [['Portfolio', application.portfolio]] : []), ['Skills', application.skills],
      ].map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>}
      {sendError && <p role="alert" className="hire-error">{sendError}</p>}
      {sent ? <p role="status" className="hire-form-note">Thank you. Your introduction has been submitted.</p> : <>
        <div className="hire-send-actions"><button type="button" className="hire-submit disabled:opacity-60" disabled={sending} onClick={sendIntroduction}><Send size={17} /> {sending ? 'Submitting…' : 'Send introduction'}</button></div>
        <button type="button" disabled={sending} className="hire-edit" onClick={() => { setApplication(null); requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('[name="name"]')?.focus()); }}><Pencil size={14} /> Edit my introduction</button>
        <p className="hire-form-note">{deliveryAvailable ? 'Use Send introduction to submit these details to the SJ team.' : 'Your introduction has not been sent. Contact Sajid directly to discuss joining the team.'} Opportunities and next steps are discussed personally.</p>
      </>}
    </div>
  </div>;
}
