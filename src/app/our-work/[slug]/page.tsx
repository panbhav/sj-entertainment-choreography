import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Sparkles } from 'lucide-react';
import { getProjectBySlug, getPublishedProjects } from '@/content/portfolio';
import MediaPlaceholder from '@/components/media/MediaPlaceholder';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import EnquiryCTA from '@/components/common/EnquiryCTA';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const published = getPublishedProjects();
  // Next.js Cache Components requires at least one result during build-time validation
  if (published.length === 0) {
    return [{ slug: '_placeholder' }];
  }
  return published.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === '_placeholder') {
    return { title: 'Project Not Found | SJ Entertainment Choreography' };
  }
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | SJ Entertainment Choreography',
    };
  }

  return {
    title: `${project.title} | Our Work`,
    description: project.shortDescription,
    alternates: { canonical: `/our-work/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (slug === '_placeholder') {
    notFound();
  }

  const project = getProjectBySlug(slug);

  // If project is not found or not published, return 404
  if (!project) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A1525] hover:text-[#641C32] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#BD954E]" />
            <span>Back to Our Work</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
            <span>{project.categoryLabel}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C0713]">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#575253] pt-2">
            {project.city && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#BD954E]" />
                <span>
                  {project.venue ? `${project.venue}, ` : ''}
                  {project.city}
                </span>
              </div>
            )}
            {project.eventDate && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#BD954E]" />
                <span>{project.eventDate}</span>
              </div>
            )}
          </div>
        </header>

        {/* Main Cover / Video */}
        <div className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-xl">
          {project.coverImageUrl ? (
            <ResponsiveImage media={{ id: project.id, title: project.title, sourceUrl: project.coverImageUrl, alt: project.title, aspectRatio: "16/9", mediaType: "image", category: "celebration", published: true }} />
          ) : (
            <MediaPlaceholder
              aspectRatio="16/9"
              label={project.title}
              variant="wine"
            />
          )}
        </div>

        {/* Project Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8 space-y-4 text-base text-[#575253] leading-relaxed">
            <p className="text-lg font-medium text-[#2C0713]">
              {project.shortDescription}
            </p>
            {project.detailedDescription?.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Credits / Metadata Sidebar */}
          <div className="md:col-span-4 bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DFD5] space-y-4">
            <h3 className="font-serif text-base font-bold text-[#2C0713]">
              Celebration Details
            </h3>
            <div className="space-y-2 text-xs text-[#575253]">
              <div>
                <span className="font-semibold text-[#2C0713]">Choreography:</span>{' '}
                Sajid & Joya
              </div>
              <div>
                <span className="font-semibold text-[#2C0713]">Category:</span>{' '}
                {project.categoryLabel}
              </div>
              {project.credits?.map((credit, i) => (
                <div key={i}>
                  <span className="font-semibold text-[#2C0713]">{credit.role}:</span>{' '}
                  {credit.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Approved Testimonial */}
        {project.approvedTestimonial && (
          <div className="p-8 rounded-3xl bg-[#FAF6EF] border border-[#DFCBB0] text-center max-w-3xl mx-auto">
            <p className="italic text-[#575253] text-base leading-relaxed mb-4">
              “{project.approvedTestimonial.quote}”
            </p>
            <div className="font-serif font-bold text-sm text-[#2C0713]">
              {project.approvedTestimonial.author}
            </div>
            {project.approvedTestimonial.role && (
              <div className="text-xs text-[#70656A]">
                {project.approvedTestimonial.role}
              </div>
            )}
          </div>
        )}

        {/* Final CTA */}
        <EnquiryCTA
          title="Curate a similar celebration experience"
          buttonText="Enquire for Your Wedding"
          serviceQuery={project.serviceCategory}
        />
      </div>
    </article>
  );
}

