import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { connection } from 'next/server';
import { Sparkles, MapPin, Phone, Mail, Music } from 'lucide-react';
import { siteConfig, getConfiguredSocials, hasDirectContactInfo } from '@/content/siteConfig';
import SocialIcon from '@/components/common/SocialIcons';
import { notificationsConfigured } from '@/lib/server-notifications';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import Locations from '@/components/contact/Locations';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Plan Your Celebration | Enquiry & Booking',
  description:
    'Contact Sajid & Joya in Alwar, Rajasthan and Lokhandwala, Mumbai for wedding choreography, couple entries and entertainment across India.',
};

export default async function ContactPage() {
  if (process.env.GITHUB_PAGES !== 'true') await connection();
  const configuredSocials = getConfiguredSocials();
  const directContact = hasDirectContactInfo();

  return (
    <div className="interior-page py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Coverage, and Configured Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
                <span>Begin Planning</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2C0713] leading-tight">
                Plan Your Celebration
              </h1>

              <p className="text-base text-[#575253] leading-relaxed">
                Whether you have an exact vision for your couple dance or are just exploring dates
                and concepts, Sajid & Joya would love to hear from you.
              </p>
            </div>

            <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center text-sm font-semibold text-[#4A1525] underline underline-offset-4">Discuss your celebration on WhatsApp →</a>

            {/* Nationwide Coverage Notice */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#4A1525]">
                <MapPin className="w-4 h-4 text-[#BD954E] shrink-0" />
                <span>Celebration Coverage Across India</span>
              </div>
              <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                {siteConfig.contact.coverageNote}
              </p>
              <a href="#locations" className="inline-flex items-center min-h-11 text-xs font-semibold text-[#4A1525] underline underline-offset-4">Find us in Alwar &amp; Mumbai →</a>
            </div>

            {/* Direct Contact Details (Shown ONLY if configured; otherwise gracefully omitted) */}
            {directContact && (
              <div className="space-y-4 p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                <h2 className="font-serif text-base font-bold text-[#2C0713]">
                  Speak with Sajid
                </h2>
                <div className="space-y-3 text-sm">
                  {siteConfig.contact.phone && (
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center gap-3 text-[#575253] hover:text-[#4A1525] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#8C6A2E]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>{siteConfig.contact.phone}</span>
                    </a>
                  )}

                  {siteConfig.contact.email && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-3 text-[#575253] hover:text-[#4A1525] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#8C6A2E]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="break-all min-w-0">{siteConfig.contact.email}</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Configured Social Profiles */}
            {configuredSocials.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#70656A]">
                  Connect on Social
                </h2>
                <p className="text-xs text-[#70656A]">Profile links coming soon. These previews open the platforms.</p>
                <div className="flex items-center gap-3">
                  {configuredSocials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white hover:bg-[#F7EDF1] text-[#4A1525] border border-[#E8DFD5] transition-colors shadow-xs"
                      aria-label={`${social.label}${social.isPlaceholder ? ' — placeholder platform link' : ''}`}
                    >
                      <SocialIcon platform={social.platform} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Curated Spotify Wedding Playlist (Only shown if real URL is configured) */}
            {siteConfig.spotifyPlaylistUrl && (
              <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2C0713]">
                  <Music className="w-4 h-4 text-[#BD954E]" />
                  <span>Curated Wedding Playlist</span>
                </div>
                <p className="text-xs text-[#575253]">
                  Listen to our curated collection of romantic couple tracks and high-energy sangeet anthems.
                </p>
                <a
                  href={siteConfig.spotifyPlaylistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A1525] hover:text-[#641C32]"
                >
                  <span>Open Spotify Playlist</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Accessible Enquiry Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="bg-white rounded-3xl p-10 border border-[#E8DFD5] text-center text-sm text-[#70656A]">
                  Loading celebration enquiry form...
                </div>
              }
            >
              <EnquiryForm deliveryAvailable={notificationsConfigured()} />
            </Suspense>
          </div>
        </div>
        <Locations />
      </div>
    </div>
  );
}


