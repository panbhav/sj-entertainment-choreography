import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { experienceCombinations, quotationFactors } from '@/content/packages';
import SectionHeading from '@/components/common/SectionHeading';
import EnquiryCTA from '@/components/common/EnquiryCTA';

export const metadata: Metadata = {
  title: 'Experiences & Tailored Combinations',
  description:
    'Curated wedding choreography combinations, grand couple entries, and complete celebration entertainment by Sajid & Joya.',
};

export default function PackagesPage() {
  return (
    <div className="interior-page flex flex-col space-y-24 md:space-y-32">
      {/* =========================================================================
          HERO & INTRODUCTION
          ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
            <span>Curated Combinations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C0713] leading-tight">
            Celebration Experiences & Packages
          </h1>

          <p className="text-base sm:text-lg text-[#575253] leading-relaxed mt-4 max-w-2xl mx-auto">
            Every wedding is uniquely personal. Rather than rigid, one-size-fits-all packages,
            we offer thoughtfully designed combinations tailored to your celebration timeline,
            number of performances, and destination.
          </p>
        </div>
      </section>

      {/* =========================================================================
          THREE EDITABLE SERVICE COMBINATIONS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {experienceCombinations.map((combo) => (
            <div
              key={combo.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                combo.featured
                  ? 'bg-gradient-to-b from-white to-[#FDFBF7] border-2 border-[#BD954E] shadow-xl hover:-translate-y-1'
                  : 'bg-white border border-[#E8DFD5] shadow-sm hover:shadow-xl hover:border-[#BD954E]/50'
              }`}
            >
              {combo.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#4A1525] text-[#FAF7F2] border border-[#BD954E]/40 shadow-sm">
                  Comprehensive Curation
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h2 className="font-serif text-2xl font-bold text-[#2C0713]">
                    {combo.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#BD954E] font-medium mt-1">
                    {combo.tagline}
                  </p>
                </div>

                <div className="mb-6 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5]">
                  <span className="text-[11px] font-semibold text-[#4A1525] uppercase tracking-wider block mb-1">
                    Who It Suits Best
                  </span>
                  <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                    {combo.idealFor}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed mb-6">
                  {combo.summary}
                </p>

                {/* Combinable Services */}
                <div className="space-y-3 mb-6 pt-4 border-t border-[#F4ECE1]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2C0713]">
                    Possible Inclusions & Combinations
                  </h3>
                  <ul className="space-y-2">
                    {combo.combinableServices.map((serv, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#575253]">
                        <CheckCircle2 className="w-4 h-4 text-[#BD954E] shrink-0 mt-0.5" />
                        <span>{serv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What We Discuss */}
                <div className="space-y-2 mb-8 pt-4 border-t border-[#F4ECE1]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#888182]">
                    What We Discuss During Planning
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#575253]">
                    {combo.planningFocus.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#BD954E]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#F4ECE1]">
                <Link
                  href={`/contact?service=${encodeURIComponent(combo.queryParam)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs ${
                    combo.featured
                      ? 'bg-[#4A1525] hover:bg-[#641C32] text-white shadow-md'
                      : 'bg-[#FAF7F2] hover:bg-[#F4ECE1] text-[#2C0713] border border-[#DFCBB0]'
                  }`}
                >
                  <span>Request a Personalised Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#BD954E]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FACTORS THAT INFLUENCE QUOTATIONS
          ========================================================================= */}
      <section className="bg-[#F5EFEB] py-20 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transparent & Fair"
            title="How Quotes Are Tailored"
            description="We do not impose arbitrary pricing. Each proposal is transparently estimated based on the practical requirements of your celebration."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {quotationFactors.map((factor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD5] shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BD954E]" />
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2C0713]">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-[#888182] max-w-xl mx-auto">
            All destination wedding quotes include open discussions regarding travel, stay,
            and on-site preparation timelines to ensure seamless production.
          </div>
        </div>
      </section>

      {/* =========================================================================
          OTHER DEDICATED CELEBRATION PAGES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[#E8DFD5] pt-16">
        <SectionHeading
          eyebrow="Explore More"
          title="Other Celebration Categories"
          description="Explore our dedicated pages for wedding choreography and theatrical entry concepts."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/wedding-choreography"
            className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#BD954E]/60 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#BD954E] block mb-2">
                Dedicated Page 01
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors mb-2">
                Wedding Choreography
              </h3>
              <p className="text-sm text-[#575253] leading-relaxed">
                Sangeet routines, couple dance, bride & groom solos, and our signature “Dance Along with SJ” guest session.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#F4ECE1] flex items-center justify-between text-xs font-semibold text-[#4A1525]">
              <span>Open Wedding Choreography page</span>
              <ArrowRight className="w-4 h-4 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/couple-entries-entertainment"
            className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#BD954E]/60 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#BD954E] block mb-2">
                Dedicated Page 02
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors mb-2">
                Couple Entries & Live Entertainment
              </h3>
              <p className="text-sm text-[#575253] leading-relaxed">
                Theatrical arrival concepts, live dhol ensembles, folk troupes, and spectacular ceremony reveals across India.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#F4ECE1] flex items-center justify-between text-xs font-semibold text-[#4A1525]">
              <span>Open Entries & Entertainment page</span>
              <ArrowRight className="w-4 h-4 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL ENQUIRY CTA
          ========================================================================= */}
      <EnquiryCTA
        title="Ready for your tailored celebration quote?"
        description="Share your wedding dates, destination, and envisioned sequence. Sajid & Joya will prepare a personalized proposal."
        buttonText="Request Your Quote"
      />
    </div>
  );
}


