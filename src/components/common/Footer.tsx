import React from 'react';
import Link from 'next/link';
import Monogram from './Monogram';
import SocialIcon from './SocialIcons';
import { siteConfig, getConfiguredSocials, hasDirectContactInfo } from '@/content/siteConfig';
import { MapPin, Phone, Mail } from 'lucide-react';
import { businessLocations } from '@/content/locations';

export default function Footer() {
  const configuredSocials = getConfiguredSocials();
  const directContact = hasDirectContactInfo();

  return (
    <footer className="bg-[#2C0713] text-[#FAF7F2] border-t border-[#4A1525] pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#4A1525]/80">
          {/* Brand Introduction */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Monogram size={44} />
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2]">
                  SJ Entertainment Choreography
                </h2>
                <p className="text-xs tracking-wider uppercase text-[#D4B272] font-medium">
                  By {siteConfig.owners}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#EAD9B7]/90 leading-relaxed max-w-md pt-1">
              Bespoke wedding choreography, couple entries, and celebratory entertainment crafted
              with patience, elegance, and stage confidence.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4A1525]/60 border border-[#BD954E]/30 text-xs text-[#FAF7F2]/90">
              <MapPin className="w-3.5 h-3.5 text-[#D4B272] shrink-0" />
              <span>Available for wedding celebrations across India</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#EAD9B7]" aria-label="Our locations">
              {businessLocations.map(location => <Link key={location.id} href={`/contact#location-${location.id}`} className="inline-flex items-center gap-1.5 min-h-11 underline underline-offset-4 hover:text-white"><MapPin size={13} aria-hidden="true" />{location.city}, {location.region}</Link>)}
            </div>
          </div>

          {/* Experiences Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#D4B272]">
              Celebration Pages
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#wedding-content" className="text-[#EAD9B7]/80 hover:text-white transition-colors">Wedding Content &amp; Reels</Link></li>
              <li>
                <Link
                  href="/wedding-choreography"
                  className="text-[#EAD9B7]/80 hover:text-white transition-colors"
                >
                  01. Wedding Choreography
                </Link>
              </li>
              <li>
                <Link
                  href="/couple-entries-entertainment"
                  className="text-[#EAD9B7]/80 hover:text-white transition-colors"
                >
                  02. Entries & Entertainment
                </Link>
              </li>
              <li className="pl-3">
                <Link
                  href="/couple-entries-entertainment/couple-bridal-entries"
                  className="text-xs text-[#EAD9B7]/65 hover:text-[#D4B272] transition-colors"
                >
                  ↳ Couple & Bridal Entries
                </Link>
              </li>
              <li className="pl-3">
                <Link
                  href="/couple-entries-entertainment/stage-procession-acts-live-entertainment"
                  className="text-xs text-[#EAD9B7]/65 hover:text-[#D4B272] transition-colors"
                >
                  ↳ Stage & Live Artists
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-[#EAD9B7]/80 hover:text-white transition-colors"
                >
                  03. Experiences & Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/wedding-choreography#dance-along"
                  className="text-[#EAD9B7]/80 hover:text-white transition-colors"
                >
                  Dance Along with SJ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#D4B272]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#EAD9B7]/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="text-[#EAD9B7]/80 hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#EAD9B7]/80 hover:text-white transition-colors"
                >
                  About Sajid & Joya
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#EAD9B7]/80 hover:text-white transition-colors"
                >
                  Plan Your Celebration
                </Link>
              </li>
              <li><Link href="/join-our-team" className="text-[#EAD9B7]/80 hover:text-white transition-colors">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Connect & Enquire */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#D4B272]">
              Enquiries
            </h3>
            <p className="text-xs text-[#EAD9B7]/80 leading-relaxed">
              We coordinate destination & local weddings across all regions of India.
            </p>

            {/* Configured Contact Info (Hidden gracefully if missing) */}
            {directContact ? (
              <div className="space-y-2 pt-1 text-xs">
                {siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-2 text-[#FAF7F2] hover:text-[#D4B272] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4B272] shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                )}
                {siteConfig.contact.email && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-[#FAF7F2] hover:text-[#D4B272] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D4B272] shrink-0" />
                    <span className="break-all min-w-0">{siteConfig.contact.email}</span>
                  </a>
                )}
              </div>
            ) : (
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4A1525] hover:bg-[#641C32] text-xs font-medium text-white transition-colors border border-[#BD954E]/40"
                >
                  Submit Celebration Details
                </Link>
              </div>
            )}

            {/* Configured Socials */}
            {configuredSocials.length > 0 && (
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-[#D4B272] mb-2 font-medium">
                  Find our rhythm
                </div>
                {configuredSocials.some(social => social.isPlaceholder) && <p className="text-xs text-[#EAD9B7]/75 mb-3">Profile links coming soon · platform previews</p>}
                <div className="flex items-center gap-2">
                  {configuredSocials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] hover:text-[#D4B272] transition-colors"
                      aria-label={`${social.label}${social.isPlaceholder ? ' — placeholder platform link' : ''}`}
                    >
                      <SocialIcon platform={social.platform} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Draft Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAD9B7]/70">
          <div>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy (Draft)
            </Link>
            <span className="text-[#4A1525]">|</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service (Draft)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
