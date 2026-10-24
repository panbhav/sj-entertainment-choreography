'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { weddingCelebrations, signaturePerformances } from '@/content/services';
import { coupleEntryConcepts, artistCategories } from '@/content/entriesAndArtists';
import { experienceCombinations } from '@/content/packages';
import { siteConfig } from '@/content/siteConfig';
import { Sparkles, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const baseServiceOptions = [
  { value: '', label: 'Select celebration service...' },
  { value: 'destination-weddings', label: 'Destination Wedding Choreography (Pan-India & Global)' },
  { value: 'sangeet-spectacular', label: 'Sangeet Night Spectacular (Family & Couple)' },
  { value: 'couple-dance', label: 'Bespoke Couple Dance Choreography' },
  { value: 'dance-along-with-sj', label: 'Dance Along with SJ (Interactive Floor Session)' },
  { value: 'haldi-celebration', label: 'Haldi & Daytime Revelry Choreography' },
  { value: 'mehendi-soiree', label: 'Mehendi Soiree & Bridal Squad' },
  { value: 'bhaat-mayra', label: 'Bhaat / Mayra Heritage Sequences' },
  { value: 'wedding-day-ceremonies', label: 'Wedding Day & Varmala Direction' },
  { value: 'reception-showcase', label: 'Wedding Reception Showcase' },
  { value: 'bride-solo', label: 'Bride Solo Spotlight Routine' },
  { value: 'groom-solo', label: 'Groom Solo / Squad Routine' },
  { value: 'grand-entry-experience', label: 'Grand Couple or Bridal Entry Concept' },
  { value: 'complete-celebration', label: 'Complete Multi-Day Celebration Curation' },
  { value: 'artists-entertainment', label: 'Live Artists, Dhol & Entertainment' },
  { value: 'custom-combination', label: 'Custom Combination / Inquire Generally' },
];

const additionalServices = [...weddingCelebrations, ...signaturePerformances, ...coupleEntryConcepts.filter(item => item.isPublished), ...artistCategories.filter(item => item.isPublished), ...experienceCombinations];
const serviceOptions = [...baseServiceOptions, ...additionalServices.filter(item => !baseServiceOptions.some(option => option.value === item.queryParam)).map(item => ({ value: item.queryParam, label: item.name }))];
const categoryServices: Record<string, string> = { choreography: 'sangeet-spectacular', 'couple-entry': 'grand-entry-experience', artists: 'artists-entertainment' };

export default function EnquiryForm({ deliveryAvailable = false }: { deliveryAvailable?: boolean }) {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

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

  const [serviceSelection, setServiceSelection] = useState<{ query: string; value: string } | null>(null);
  const resolvedService = categoryServices[preselectedService] || preselectedService;
  const serviceInterest = serviceSelection?.query === preselectedService
    ? serviceSelection.value
    : serviceOptions.find(option => option.value === resolvedService)?.value || '';
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

    if (!formData.eventCity.trim()) {
      newErrors.eventCity = 'Please enter your wedding city or celebration destination.';
    }

    if (!serviceInterest) {
      newErrors.serviceInterest = 'Please select a service interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('idle');
    if (!deliveryAvailable) { setSubmissionStatus('backend_unconfigured'); return; }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, serviceInterest }),
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
          data.message ||
            'Online submission is currently being finalized. Please reach out via our direct contact channels or try again soon.'
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

      {!deliveryAvailable && submissionStatus !== 'backend_unconfigured' && <div role="status" className="mb-8 p-4 rounded-xl bg-[#FAF6EF] border border-[#DFCBB0] text-sm text-[#6F5438] leading-relaxed">Online enquiries are opening soon. You can explore the options below while we prepare to welcome your celebration.</div>}
      {/* Submission Feedback Notices */}
      {submissionStatus === 'success' && (
        <div className="mb-8 p-5 rounded-2xl bg-[#FAF6EF] border border-[#BD954E] flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#8C6A2E] shrink-0 mt-0.5" />
          <div className="text-sm text-[#2C0713]">
            <p className="font-semibold text-[#4A1525]">Celebration Enquiry Received</p>
            <p className="mt-1">{statusMessage}</p>
          </div>
        </div>
      )}

      {submissionStatus === 'backend_unconfigured' && (
        <div className="mb-8 p-5 rounded-2xl bg-[#FFFDF9] border border-[#D4AF67] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#BA9248] shrink-0 mt-0.5" />
          <div className="text-sm text-[#2C0713]">
            <p className="font-semibold text-[#4A1525]">Online enquiries opening soon</p>
            <p className="mt-1 text-[#575253] leading-relaxed">
              Online enquiries are not open yet. Your details have not been sent. Contact Sajid & Joya
              through a direct contact option if available, or return when bookings open. Your details remain in this form.
            </p>
          </div>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2">
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
              id="website-trap"
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
                Your Name <span className="text-[#A6803B]">*</span>
              </label>
              <input
                type="text"
                id="enquiry-name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "error-name" : undefined}
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
                Phone / WhatsApp <span className="text-[#A6803B]">*</span>
              </label>
              <input
                type="tel"
                id="enquiry-phone" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "error-phone" : undefined}
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
                Email Address <span className="text-[#888182] font-normal normal-case">(Optional)</span>
              </label>
              <input
                type="email"
                id="enquiry-email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "error-email" : undefined}
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
                Event City / Destination <span className="text-[#A6803B]">*</span>
              </label>
              <input
                type="text"
                id="enquiry-city" autoComplete="address-level2" aria-invalid={Boolean(errors.eventCity)} aria-describedby={errors.eventCity ? "error-city" : undefined}
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
                Event Date <span className="text-[#888182] font-normal normal-case">(Optional)</span>
              </label>
              <input
                type="date"
                id="enquiry-date"
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

            {/* Service Interest */}
            <div>
              <label
                htmlFor="enquiry-service"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Primary Service Interest <span className="text-[#A6803B]">*</span>
              </label>
              <select
                id="enquiry-service"
                required
                value={serviceInterest}
                onChange={(e) => {
                  setServiceSelection({ query: preselectedService, value: e.target.value });
                  if (errors.serviceInterest) setErrors({ ...errors, serviceInterest: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#292526] bg-[#FAF7F2] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BD954E] ${
                  errors.serviceInterest ? 'border-red-400 bg-red-50/20' : 'border-[#E8DFD5]'
                }`}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.serviceInterest && (
                <p className="text-xs text-red-600 mt-1">{errors.serviceInterest}</p>
              )}
            </div>
          </div>

          {/* Budget Range (Hidden until configured by owners) */}
          {siteConfig.budgetRangesConfigured && (
            <div>
              <label
                htmlFor="enquiry-budget"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2"
              >
                Envisioned Budget Range <span className="text-[#888182] font-normal normal-case">(Optional)</span>
              </label>
              <select
                id="enquiry-budget"
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
              <span className="text-[#888182] font-normal normal-case">(Optional)</span>
            </label>
            <textarea
              id="enquiry-message"
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
              disabled={isSubmitting || !deliveryAvailable}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Details...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#D4B272]" />
                  <span>{deliveryAvailable ? 'Send Celebration Enquiry' : 'Online enquiries opening soon'}</span>
                </>
              )}
            </button>
          </div>

          {/* Non-binding disclaimer */}
          <p className="text-xs text-[#888182] leading-relaxed pt-2 border-t border-[#F4ECE1]">
            <span className="font-semibold text-[#575253]">Notice:</span> Submitting this enquiry
            initiates planning and checks date availability. It does not imply a confirmed booking
            or calendar reservation until contracts and schedules are formally aligned.
          </p>
        </form>
      )}
    </div>
  );
}


