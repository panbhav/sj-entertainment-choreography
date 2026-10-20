export type AspectRatio = '16/9' | '4/3' | '3/2' | '1/1' | '4/5' | '3/4' | '9/16' | '21/9';

export type MediaType = 'image' | 'video';

export type MediaCategory = 
  | 'hero'
  | 'choreography'
  | 'couple-entry'
  | 'artists'
  | 'portrait'
  | 'behind-the-scenes'
  | 'celebration';

export interface MediaItem {
  id: string;
  title: string;
  mediaType: MediaType;
  sourceUrl?: string; // Empty or undefined while real media is awaited
  posterUrl?: string;
  alt: string;
  aspectRatio: AspectRatio;
  category: MediaCategory;
  caption?: string;
  published: boolean;
  expectedFilename?: string; // Provided for owner asset checklist
  recommendedDimensions?: string;
}

/**
 * Centralised Media Registry.
 *
 * All media items are configured here. When media is not yet available,
 * published: false or missing sourceUrl triggers our bespoke, elegant
 * SVG/architectural placeholder without broken play controls or layout shifts.
 */
export const mediaRegistry: Record<string, MediaItem> = {
  // Home Page
  'hero-main': {
    id: 'hero-main',
    title: 'Your Love Story — Signature Choreography',
    mediaType: 'video',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Cinematic visual placeholder for Sajid & Joya signature wedding choreography',
    aspectRatio: '16/9',
    category: 'hero',
    caption: 'Cinematic wedding showcase loop (Coming soon)',
    published: false,
    expectedFilename: 'sj-hero-cinematic.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'home-signature-choreography': {
    id: 'home-signature-choreography',
    title: 'Wedding Choreography Showcase',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for bespoke couple and sangeet choreography',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Bespoke Sangeet & Couple choreography performances',
    published: false,
    expectedFilename: 'sj-choreography-signature.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'home-signature-entries': {
    id: 'home-signature-entries',
    title: 'Grand Couple Entries & Entertainment',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for spectacular couple entries and live artist performances',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'Grand couple entries, theatrical effects & live artists',
    published: false,
    expectedFilename: 'sj-couple-entries-grand.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'home-slot-couple': {
    id: 'home-slot-couple',
    title: 'Couple Choreography Film',
    mediaType: 'video',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Upcoming portfolio slot for couple first dance film',
    aspectRatio: '4/5',
    category: 'choreography',
    caption: 'Upcoming couple choreography showcase',
    published: false,
    expectedFilename: 'sj-showcase-couple-dance.mp4',
    recommendedDimensions: '1080x1350 (4:5)',
  },
  'home-slot-family': {
    id: 'home-slot-family',
    title: 'Family Celebration Highlight',
    mediaType: 'video',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Upcoming portfolio slot for family and sangeet celebration highlight',
    aspectRatio: '4/5',
    category: 'celebration',
    caption: 'Upcoming family & group sangeet celebration',
    published: false,
    expectedFilename: 'sj-showcase-family-sangeet.mp4',
    recommendedDimensions: '1080x1350 (4:5)',
  },
  'home-slot-entry': {
    id: 'home-slot-entry',
    title: 'Spectacular Couple Entry',
    mediaType: 'video',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Upcoming portfolio slot for grand couple entry production',
    aspectRatio: '4/5',
    category: 'couple-entry',
    caption: 'Upcoming royal couple entry performance',
    published: false,
    expectedFilename: 'sj-showcase-couple-entry.mp4',
    recommendedDimensions: '1080x1350 (4:5)',
  },

  // About Page Portraits
  'portrait-sajid-joya': {
    id: 'portrait-sajid-joya',
    title: 'Sajid & Joya Portrait',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Editorial portrait placeholder for founders Sajid & Joya',
    aspectRatio: '4/5',
    category: 'portrait',
    caption: 'Sajid & Joya — Founders & Choreographers',
    published: false,
    expectedFilename: 'sajid-joya-joint-portrait.jpg',
    recommendedDimensions: '1200x1500 (4:5)',
  },
  'portrait-sajid': {
    id: 'portrait-sajid',
    title: 'Sajid — Choreographer & Creative Director',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Portrait placeholder for Sajid',
    aspectRatio: '3/4', // standard portrait
    category: 'portrait',
    caption: 'Sajid',
    published: false,
    expectedFilename: 'sajid-portrait.jpg',
    recommendedDimensions: '900x1200 (3:4)',
  },
  'portrait-joya': {
    id: 'portrait-joya',
    title: 'Joya — Choreographer & Performance Stylist',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Portrait placeholder for Joya',
    aspectRatio: '3/4',
    category: 'portrait',
    caption: 'Joya',
    published: false,
    expectedFilename: 'joya-portrait.jpg',
    recommendedDimensions: '900x1200 (3:4)',
  },
  'about-bts-rehearsal': {
    id: 'about-bts-rehearsal',
    title: 'Rehearsal Studio Moments',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Behind the scenes rehearsal and choreography crafting',
    aspectRatio: '16/9',
    category: 'behind-the-scenes',
    caption: 'Crafting effortless routines in rehearsal sessions',
    published: false,
    expectedFilename: 'sj-rehearsal-bts.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'about-stage-production': {
    id: 'about-stage-production',
    title: 'Live Wedding Stage Coordination',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Behind the scenes stage and cue coordination at celebration',
    aspectRatio: '16/9',
    category: 'behind-the-scenes',
    caption: 'On-ground staging and cue direction',
    published: false,
    expectedFilename: 'sj-stage-coordination.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },

  // Wedding Choreography Page
  'choreography-hero': {
    id: 'choreography-hero',
    title: 'Wedding Choreography Overview',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for comprehensive wedding choreography across traditions',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Tailored wedding celebrations from Haldi to Reception',
    published: false,
    expectedFilename: 'sj-wedding-choreography-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'dance-along-session': {
    id: 'dance-along-session',
    title: 'Dance Along with SJ — Interactive Session',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for Dance Along with SJ interactive guest session',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Instructor-led wedding day session where all guests join in',
    published: false,
    expectedFilename: 'sj-dance-along-interactive.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },

  // Couple Entries Page
  'entries-hero': {
    id: 'entries-hero',
    title: 'Grand Couple Entries & Visual Spectacles',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for couple entries and live entertainment production',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'Bespoke entry concepts tailored to your wedding venue and mood',
    published: false,
    expectedFilename: 'sj-couple-entries-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // Packages Hero
  'packages-hero': {
    id: 'packages-hero',
    title: 'Experiences & Tailored Combinations',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for bespoke wedding entertainment combinations',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'Thoughtfully combined choreography and entry experiences',
    published: false,
    expectedFilename: 'sj-experiences-packages-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // Contact Hero
  'contact-hero': {
    id: 'contact-hero',
    title: 'Plan Your Celebration',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for planning and wedding choreography enquiry',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'Begin crafting your celebration with Sajid & Joya',
    published: false,
    expectedFilename: 'sj-plan-your-celebration.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },
};

export function getMedia(id: string): MediaItem {
  return (
    mediaRegistry[id] || {
      id,
      title: 'Celebration Visual',
      mediaType: 'image',
      alt: 'Celebration visual placeholder',
      aspectRatio: '16/9',
      category: 'celebration',
      published: false,
    }
  );
}

