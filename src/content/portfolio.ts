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
}

/**
 * Curated preview gallery slots while genuine media is being prepared.
 * These clearly identify upcoming film & photo slots without fabricating
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
    caption: 'Cinematic first dance & emotional couple sequence',
    label: 'Couple Choreography Film',
    note: 'Upcoming film showcase',
  },
  {
    id: 'slot-sangeet-ensemble',
    title: 'Grand Family Sangeet Ensemble',
    category: 'choreography',
    categoryLabel: 'Choreography',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Multi-generational family choreography and finale',
    label: 'Family Sangeet Film',
    note: 'Upcoming celebration highlight',
  },
  {
    id: 'slot-royal-entry',
    title: 'Royal Procession Couple Entry',
    category: 'couple-entry',
    categoryLabel: 'Couple Entries',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Palace courtyard royal entry featuring ceremonial heralds',
    label: 'Royal Couple Entry Film',
    note: 'Upcoming entry concept showcase',
  },
  {
    id: 'slot-dance-along-session',
    title: 'Dance Along with SJ Live Session',
    category: 'choreography',
    categoryLabel: 'Choreography',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Interactive guest floor session led by Sajid & Joya',
    label: 'Guest Interactive Session',
    note: 'Upcoming party showcase',
  },
  {
    id: 'slot-dhol-symphony',
    title: 'Symphonic Dhol & Baraat Rhythm',
    category: 'artists',
    categoryLabel: 'Artists & Entertainment',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Live percussion performance and electric baraat energy',
    label: 'Live Artist Highlight',
    note: 'Upcoming artist showcase',
  },
  {
    id: 'slot-floral-walk',
    title: 'Botanical Floral Canopy Entry',
    category: 'couple-entry',
    categoryLabel: 'Couple Entries',
    aspectRatio: '16/9',
    mediaType: 'video',
    caption: 'Emotional bridal aisle walk under custom phoolon ki chaadar',
    label: 'Bridal Entry Showcase',
    note: 'Upcoming bridal feature',
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
