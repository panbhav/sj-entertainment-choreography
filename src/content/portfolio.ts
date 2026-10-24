import { AspectRatio } from './media';

export type PortfolioCategory = 'all' | 'choreography' | 'couple-entry' | 'rehearsals';

export interface ProjectPhoto {
  url: string;
  caption?: string;
  aspectRatio?: AspectRatio;
}

export interface ProjectRecord {
  id: string;
  slug: string;
  title: string;
  serviceCategory: 'choreography' | 'couple-entry' | 'artists';
  categoryLabel: string;
  city?: string; // Optional: Only when approved
  venue?: string; // Optional: Only when approved
  eventDate?: string; // Optional: Only when approved
  shortDescription: string;
  detailedDescription?: string[];
  coverMediaId: string;
  coverImageUrl?: string;
  videoUrl?: string; // HTML5 video or YouTube URL
  photos?: ProjectPhoto[];
  credits?: { role: string; name: string }[];
  approvedTestimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  isPublished: boolean; // Crucial: Only published projects generate public /our-work/[slug] routes
}

export interface PreviewSlot {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'all'>;
  duration: string;
  enquiryService: string;
  categoryLabel: string;
  aspectRatio: AspectRatio;
  mediaType: 'video' | 'image';
  caption: string;
  label: string;
  note: string;
  sourceUrl?: string;
  posterUrl?: string;
  isAvailable?: boolean;
}

/**
 * Curated preview gallery slots featuring real client video highlights.
 * These accurately showcase actual celebration routines without fabricating
 * fake client identities, dates, or venues.
 */
export const portfolioPreviewSlots: PreviewSlot[] = [
  {
    id: 'couple-dance',
    title: 'A dance for two',
    category: 'choreography',
    categoryLabel: 'Couple choreography',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'A flowing duet, shared expressions and a whole stage to themselves.',
    label: 'Couple choreography',
    note: 'Watch film',
    duration: '0:40',
    enquiryService: 'couple-dance',
    sourceUrl: '/media/portfolio/couple-dance.mp4',
    posterUrl: '/media/portfolio/couple-dance.webp',
    isAvailable: true,
  },
  {
    id: 'sangeet-highlights',
    title: 'The energy of a sangeet',
    category: 'choreography',
    categoryLabel: 'Sangeet highlights',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Solo moments, friends joining in and the excitement of a celebration in full swing.',
    label: 'Sangeet highlights',
    note: 'Watch film',
    duration: '0:18',
    enquiryService: 'sangeet-spectacular',
    sourceUrl: '/media/portfolio/sangeet-highlights.mp4',
    posterUrl: '/media/portfolio/sangeet-highlights.webp',
    isAvailable: true,
  },
  {
    id: 'family-celebration',
    title: 'Every generation, one celebration',
    category: 'choreography',
    categoryLabel: 'Family performance',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'A joyful family routine with the women of the family taking centre stage.',
    label: 'Family performance',
    note: 'Watch film',
    duration: '0:31',
    enquiryService: 'family-friends-group',
    sourceUrl: '/media/portfolio/family-celebration.mp4',
    posterUrl: '/media/portfolio/family-celebration.webp',
    isAvailable: true,
  },
  {
    id: 'couple-reveal',
    title: 'Their moment in the spotlight',
    category: 'couple-entry',
    categoryLabel: 'Couple stage reveal',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'A couple reveal framed by sparkling stage effects, followed by the celebration around them.',
    label: 'Couple stage reveal',
    note: 'Watch film',
    duration: '0:14',
    enquiryService: 'grand-entry-experience',
    sourceUrl: '/media/portfolio/couple-reveal.mp4',
    posterUrl: '/media/portfolio/couple-reveal.webp',
    isAvailable: true,
  },
  {
    id: 'friends-performance',
    title: 'The friends take over',
    category: 'choreography',
    categoryLabel: 'Friends performance',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'A coordinated group number filled with the energy only your friends can bring.',
    label: 'Friends performance',
    note: 'Watch film',
    duration: '0:38',
    enquiryService: 'family-friends-group',
    sourceUrl: '/media/portfolio/friends-performance.mp4',
    posterUrl: '/media/portfolio/friends-performance.webp',
    isAvailable: true,
  },
  {
    id: 'rehearsal',
    title: 'Where the celebration begins',
    category: 'rehearsals',
    categoryLabel: 'Rehearsals & BTS',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Inside a real practice session: learning the steps and finding confidence together.',
    label: 'Rehearsals & BTS',
    note: 'Watch film',
    duration: '0:32',
    enquiryService: 'sangeet-spectacular',
    sourceUrl: '/media/portfolio/rehearsal.mp4',
    posterUrl: '/media/portfolio/rehearsal.webp',
    isAvailable: true,
  },
];

/**
 * Genuine published project records.
 * 
 * Empty initially to comply with the directive:
 * "Do not invent base city, phone number, email address, social profile,
 * experience count, awards, prices, client names, reviews, or completed projects."
 * 
 * Once genuine projects are verified, add them here with isPublished: true.
 */
export const publishedProjects: ProjectRecord[] = [];

export function getPublishedProjects(): ProjectRecord[] {
  return publishedProjects.filter((p) => p.isPublished);
}

export function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return publishedProjects.find((p) => p.slug === slug && p.isPublished);
}
