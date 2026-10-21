import { AspectRatio } from './media';

export type PortfolioCategory = 'all' | 'choreography' | 'couple-entry' | 'artists';

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
  category: 'choreography' | 'couple-entry' | 'artists';
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
    id: 'slot-couple-waltz',
    title: 'Couple Dance Cinematic Showcase',
    category: 'choreography',
    categoryLabel: 'Choreography',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Cinematic first dance & emotional couple sequence choreographed by Sajid & Joya',
    label: 'Couple Choreography Film',
    note: 'Watch celebration film',
    sourceUrl: '/media/slot-couple.mp4',
    posterUrl: '/media/slot-couple-poster.jpg',
    isAvailable: true,
  },
  {
    id: 'slot-sangeet-ensemble',
    title: 'Grand Family Sangeet Ensemble',
    category: 'choreography',
    categoryLabel: 'Choreography',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Multi-generational family choreography and finale highlight',
    label: 'Family Sangeet Film',
    note: 'Watch celebration film',
    sourceUrl: '/media/hero-main.mp4',
    posterUrl: '/media/hero-main-poster.jpg',
    isAvailable: true,
  },
  {
    id: 'slot-royal-entry',
    title: 'Royal Procession Couple Entry',
    category: 'couple-entry',
    categoryLabel: 'Couple Entries',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Palace courtyard royal entry featuring cold pyrotechnics and stage production',
    label: 'Royal Couple Entry Film',
    note: 'Watch celebration film',
    sourceUrl: '/media/entries-showcase.mp4',
    posterUrl: '/media/entries-showcase-poster.jpg',
    isAvailable: true,
  },
  {
    id: 'slot-dance-along-session',
    title: 'Haldi & Sangeet Group Celebration',
    category: 'choreography',
    categoryLabel: 'Choreography',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Vibrant group and family wedding celebration dances across ceremonies',
    label: 'Group Choreography Film',
    note: 'Watch celebration film',
    sourceUrl: '/media/choreography-showcase.mp4',
    posterUrl: '/media/choreography-showcase-poster.jpg',
    isAvailable: true,
  },
  {
    id: 'slot-dhol-symphony',
    title: 'Live Wedding Stage Coordination & Show',
    category: 'artists',
    categoryLabel: 'Artists & Entertainment',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'On-ground live production, sound coordination and stage energy',
    label: 'Live Stage Highlight',
    note: 'Watch stage production film',
    sourceUrl: '/media/stage-production.mp4',
    posterUrl: '/media/stage-production-poster.jpg',
    isAvailable: true,
  },
  {
    id: 'slot-floral-walk',
    title: 'Theatrical Couple Entry & Stage Reveal',
    category: 'couple-entry',
    categoryLabel: 'Couple Entries',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Spectacular arrival and couple reveal with stage effects',
    label: 'Couple Entry Showcase',
    note: 'Watch couple entry film',
    sourceUrl: '/media/slot-entry.mp4',
    posterUrl: '/media/slot-entry-poster.jpg',
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
