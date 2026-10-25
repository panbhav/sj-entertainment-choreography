'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { serviceOptions, resolveEnquiryService } from '@/content/enquiryOptions';
import { withBasePath } from '@/lib/basePath';
import { siteConfig } from '@/content/siteConfig';
import { formEmailEndpoint, sendFormEmail } from '@/lib/form-email';
import { getSelectedCelebrationConcept } from '@/content/celebrations';
import ServiceMultiSelect from './ServiceMultiSelect';
import { Sparkles, Send, CheckCircle2, AlertCircle } from 'lucide-react';


export default function EnquiryForm({ deliveryAvailable: serverDeliveryAvailable = false }: { deliveryAvailable?: boolean }) {
  const deliveryAvailable = serverDeliveryAvailable || Boolean(formEmailEndpoint);
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const requestedConcept = getSelectedCelebrationConcept(searchParams.get('concept') || '', preselectedService);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventCity: '',
    eventDate: '',
    dateNotFinalised: false,

    budgetRange: '',
    message: '',
    honeypot: '', // Spam bot honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success' | 'backend_unconfigured' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const feedbackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (submissionStatus === 'idle') return;
    feedbackRef.current?.focus({ preventScroll: true });
    feedbackRef.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  }, [submissionStatus]);

  const [serviceSelection, setServiceSelection] = useState<{ query: string; values: string[] } | null>(null);
  const resolvedService = resolveEnquiryService(preselectedService);
  const serviceInterests = serviceSelection?.query === preselectedService
    ? serviceSelection.values
    : serviceOptions.some(option => option.value && option.value === resolvedService) ? [resolvedService] : [];
  const selectedConcept = serviceInterests.includes(resolvedService) ? requestedConcept : undefined;
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name.';
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanedPhone || !/^\+?[0-9]{7,15}$/.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (formData.eventCity.trim().length < 2) {
      newErrors.eventCity = 'Please enter your wedding city or celebration destination.';
    }

    if (!serviceInterests.length) {
      newErrors.serviceInterest = 'Please select at least one service interest.';
    }

    setErrors(newErrors);
    const fields: Record<string, string> = { name: 'name', phone: 'phone', email: 'email', eventCity: 'city', serviceInterest: 'service' };
    const firstError = Object.keys(newErrors)[0];
    if (firstError) document.getElementById(`enquiry-${fields[firstError]}`)?.focus();
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('idle');

    if (!validate()) {
      return;
    }

    if (!deliveryAvailable) {
      setSubmissionStatus('backend_unconfigured');
      setStatusMessage('Automatic submissions are not connected yet. Your details have not been sent. Please contact Sajid directly.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (!serverDeliveryAvailable) {
        const data = await sendFormEmail('enquiry', {
          Name: formData.name.trim(), Phone: formData.phone.trim(), email: formData.email.trim(),
          'Event city': formData.eventCity.trim(),
          Services: serviceOptions.filter(option => serviceInterests.includes(option.value)).map(option => option.label).join(', '),
          'Event date': formData.dateNotFinalised ? 'Not finalised' : formData.eventDate || 'To be discussed',
          Budget: formData.budgetRange || 'To be discussed',
          'Choreography type': selectedConcept ? `${selectedConcept.chapter.shortName} — ${selectedConcept.concept.title}` : 'To be discussed',
          Message: formData.message.trim() || 'Not supplied',
        }, formData.honeypot);
        setSubmissionStatus(data.success ? 'success' : 'error');
        setStatusMessage(data.message);
        return;
      }
      const res = await fetch(withBasePath('/api/enquire'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(30000),
        body: JSON.stringify({
          ...formData,
          serviceInterests,
          serviceInterest: serviceInterests[0],
          message: [
            selectedConcept ? `Choreography type: ${selectedConcept.chapter.shortName} — ${selectedConcept.concept.title}.` : '',
            formData.message,
          ].filter(Boolean).join('\n\n'),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionStatus('success');
        setStatusMessage(
          data.message ||
            'Your enquiry has been received. Sajid & Joya will review your requirements and connect with you shortly.'
        );
      } else if (res.status === 503 || data.backendConfigured === false) {
        // Backend not configured yet
        setSubmissionStatus('backend_unconfigured');
        setStatusMessage(
          data.message || 'Online submissions are not connected yet. Please contact Sajid directly.'
        );
      } else {
        setSubmissionStatus('error');
        setStatusMessage(data.message || 'Please check your inputs and try again.');
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setSubmissionStatus('error');
      setStatusMessage('Unable to connect to submission server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E8DFD5] shadow-xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
          <span>Celebration Enquiry</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C0713]">
          Tell Us About Your Celebration
        </h2>
        <p className="text-sm text-[#575253] mt-2">
          Share your dates and vision. We will discuss song sequences, rehearsal formats, and tailored combinations.
        </p>
      </div>

      {selectedConcept && (
        <div className="mb-6 p-4 rounded-xl bg-[#F7EDF1] border border-[#DFCBB0] text-sm text-[#4A1525] leading-relaxed">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#967443]">Your chosen choreography type</p>
          <p className="font-semibold mt-1">{selectedConcept.chapter.shortName} — {selectedConcept.concept.title}</p>
          <p className="text-xs mt-1">This type will be included with your enquiry. You can add songs and other preferences below.</p>
        </div>
      )}

      {!deliveryAvailable && submissionStatus !== 'backend_unconfigured' && <p role="status" className="mb-6 p-4 rounded-xl bg-[#FAF6EF] border border-[#DFCBB0] text-sm text-[#6F5438]">Online submissions are not connected yet. Please use the direct contact details to reach Sajid.</p>}
      {/* Submission Feedback Notices */}
      {submissionStatus === 'success' && (
        <div ref={feedbackRef} tabIndex={-1} role="status" className="mb-8 p-5 rounded-2xl bg-[#FAF6EF] border border-[#BD954E] flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#8C6A2E] shrink-0 mt-0.5" />
          <div className="text-sm text-[#2C0713]">
            <p className="font-semibold text-[#4A1525]">Celebration Enquiry Received</p>
            <p className="mt-1">{statusMessage}</p>
          </div>
        </div>
      )}

      {submissionStatus === 'backend_unconfigured' && (
        <div ref={feedbackRef} tabIndex={-1} role="alert" className="mb-8 p-5 rounded-2xl bg-[#FFFDF9] border border-[#D4AF67] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#BA9248] shrink-0 mt-0.5" />
          <div className="text-sm text-[#2C0713]">
            <p className="font-semibold text-[#4A1525]">Online submissions unavailable</p>
            <p className="mt-1 text-[#575253] leading-relaxed">
              Your details have not been sent. Contact Sajid & Joya
              using the direct contact details. Your details remain in this form.
            </p>
          </div>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div ref={feedbackRef} tabIndex={-1} role="alert" className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Unable to Send</p>
            <p>{statusMessage}</p>
          </div>
        </div>
      )}

      {submissionStatus !== 'success' && (
        <form onSubmit={handleSubmit} aria-label="Celebration enquiry" noValidate className="space-y-6">
          {/* Honeypot field for bot spam prevention */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website-trap">Leave this blank</label>
            <input
              type="text"
              id="website-trap" name="_honey"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="enquiry-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Your Name <span className="text-[#8C6A2E]">*</span>
              </label>
              <input
                type="text"
                maxLength={150} id="enquiry-name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "error-name" : undefined}
                required
                placeholder="e.g. Ananya Sharma"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#292526] bg-[#FAF7F2] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E] ${
                  errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E8DFD5]'
                }`}
              />
              {errors.name && <p id="error-name" className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label
                htmlFor="enquiry-phone"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Phone / WhatsApp <span className="text-[#8C6A2E]">*</span>
              </label>
              <input
                type="tel" inputMode="tel" maxLength={24}
                id="enquiry-phone" name="Phone / WhatsApp" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "error-phone" : undefined}
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#292526] bg-[#FAF7F2] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E] ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E8DFD5]'
                }`}
              />
              {errors.phone && <p id="error-phone" className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email (Optional) */}
            <div>
              <label
                htmlFor="enquiry-email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Email Address <span className="text-[#70656A] font-normal normal-case">(Optional)</span>
              </label>
              <input
                type="email"
                maxLength={254} id="enquiry-email" name="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "error-email" : undefined}
                placeholder="e.g. ananya@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#292526] bg-[#FAF7F2] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E] ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E8DFD5]'
                }`}
              />
              {errors.email && <p id="error-email" className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Event City */}
            <div>
              <label
                htmlFor="enquiry-city"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Event City / Destination <span className="text-[#8C6A2E]">*</span>
              </label>
              <input
                type="text"
                maxLength={150} id="enquiry-city" name="Event city / destination" autoComplete="address-level2" aria-invalid={Boolean(errors.eventCity)} aria-describedby={errors.eventCity ? "error-city" : undefined}
                required
                placeholder="e.g. Udaipur, Mumbai, Delhi, Jaipur"
                value={formData.eventCity}
                onChange={(e) => {
                  setFormData({ ...formData, eventCity: e.target.value });
                  if (errors.eventCity) setErrors({ ...errors, eventCity: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#292526] bg-[#FAF7F2] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E] ${
                  errors.eventCity ? 'border-red-400 bg-red-50/20' : 'border-[#E8DFD5]'
                }`}
              />
              {errors.eventCity && <p id="error-city" className="text-xs text-red-600 mt-1">{errors.eventCity}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Event Date */}
            <div>
              <label
                htmlFor="enquiry-date"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Event Date <span className="text-[#70656A] font-normal normal-case">(Optional)</span>
              </label>
              <input
                type="date"
                id="enquiry-date" name="Proposed event date"
                disabled={formData.dateNotFinalised}
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#292526] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E] ${
                  formData.dateNotFinalised
                    ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#FAF7F2] border-[#E8DFD5]'
                }`}
              />

              <div className="mt-2.5 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="date-not-finalised"
                  checked={formData.dateNotFinalised}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setFormData({
                      ...formData,
                      dateNotFinalised: checked,
                      eventDate: checked ? '' : formData.eventDate,
                    });
                  }}
                  className="rounded border-[#E8DFD5] text-[#4A1525] focus:ring-[#BD954E]"
                />
                <label
                  htmlFor="date-not-finalised"
                  className="text-xs text-[#575253] cursor-pointer select-none"
                >
                  Dates not finalised yet (Exploring availability)
                </label>
              </div>
            </div>

            <ServiceMultiSelect selected={serviceInterests} onChange={values => {
              setServiceSelection({ query: preselectedService, values });
              if (errors.serviceInterest) setErrors({ ...errors, serviceInterest: '' });
            }} error={errors.serviceInterest} />
          </div>

          {/* Budget Range (Hidden until configured by owners) */}
          {siteConfig.budgetRangesConfigured && (
            <div>
              <label
                htmlFor="enquiry-budget"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Envisioned Budget Range <span className="text-[#70656A] font-normal normal-case">(Optional)</span>
              </label>
              <select
                id="enquiry-budget" name="Budget range"
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] text-sm text-[#292526] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E]"
              >
                <option value="">Select budget range...</option>
                {siteConfig.budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Message / Details */}
          <div>
            <label
              htmlFor="enquiry-message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
            >
              Celebration Details & Song Preferences{' '}
              <span className="text-[#70656A] font-normal normal-case">(Optional)</span>
            </label>
            <textarea
              maxLength={4500} id="enquiry-message" name="message"
              rows={4}
              placeholder="Tell us about your wedding ceremonies, envisioned songs, family branches, or preferred rehearsal format..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] text-sm text-[#292526] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E]"
            />
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending enquiry…</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#D4B272]" />
                  <span>Send Celebration Enquiry</span>
                </>
              )}
            </button>
          </div>

          {/* Non-binding disclaimer */}
          <p className="text-xs text-[#70656A] leading-relaxed pt-2 border-t border-[#F4ECE1]">
            {deliveryAvailable ? 'Submit directly to the SJ team without opening another app.' : 'Online submission is unavailable. Contact Sajid directly to discuss your plans.'} A booking is confirmed only after the schedule and arrangements are agreed.
          </p>
        </form>
      )}
    </div>
  );
}


