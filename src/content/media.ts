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
    title: 'Dhruv & Meenu — Signature Sangeet Choreography',
    mediaType: 'video',
    sourceUrl: '/media/hero-main.mp4',
    posterUrl: '/media/hero-main-poster.jpg',
    alt: 'Signature wedding sangeet choreography by Sajid & Joya',
    aspectRatio: '16/9',
    category: 'hero',
    caption: 'Dhruv & Meenu — Sangeet Celebration Highlight',
    published: true,
    expectedFilename: 'sj-hero-cinematic.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'home-signature-choreography': {
    id: 'home-signature-choreography',
    title: 'Wedding Choreography Showcase',
    mediaType: 'image',
    sourceUrl: '/media/choreography-showcase-poster.jpg',
    posterUrl: '/media/choreography-showcase-poster.jpg',
    alt: 'Celebration Haldi and Sangeet choreography performance',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Bespoke Haldi & Sangeet choreography performances',
    published: true,
    expectedFilename: 'sj-choreography-signature.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'home-signature-entries': {
    id: 'home-signature-entries',
    title: 'Grand Couple Entries & Entertainment',
    mediaType: 'image',
    sourceUrl: '/media/entries-showcase-poster.jpg',
    posterUrl: '/media/entries-showcase-poster.jpg',
    alt: 'Spectacular couple entries and live artist performances',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'Grand couple entries, theatrical effects & live artists',
    published: true,
    expectedFilename: 'sj-couple-entries-grand.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'home-slot-couple': {
    id: 'home-slot-couple',
    title: 'Couple Choreography Film',
    mediaType: 'video',
    sourceUrl: '/media/slot-couple.mp4',
    posterUrl: '/media/slot-couple-poster.jpg',
    alt: 'Romantic couple first dance choreography',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Bespoke couple first dance routine',
    published: true,
    expectedFilename: 'sj-showcase-couple-dance.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'home-slot-family': {
    id: 'home-slot-family',
    title: 'Family Celebration Highlight',
    mediaType: 'video',
    sourceUrl: '/media/slot-family.mp4',
    posterUrl: '/media/slot-family-poster.jpg',
    alt: 'Family and group sangeet celebration highlight reel',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'Multi-generational family sangeet performance',
    published: true,
    expectedFilename: 'sj-showcase-family-sangeet.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'home-slot-entry': {
    id: 'home-slot-entry',
    title: 'Spectacular Couple Entry',
    mediaType: 'video',
    sourceUrl: '/media/slot-entry.mp4',
    posterUrl: '/media/slot-entry-poster.jpg',
    alt: 'Grand couple entry with cold pyrotechnics and stage production',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'Royal couple stage arrival and reveal',
    published: true,
    expectedFilename: 'sj-showcase-couple-entry.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // About Page Portraits
  'portrait-sajid-joya': {
    id: 'portrait-sajid-joya',
    title: 'Sajid & Joya',
    mediaType: 'image',
    sourceUrl: '/media/sajid-joya-founders.jpg',
    posterUrl: '/media/sajid-joya-founders.jpg',
    alt: 'Founders and lead choreographers Sajid & Joya with over 10 years of wedding experience',
    aspectRatio: '4/5',
    category: 'portrait',
    caption: 'Sajid & Joya — Over 10 Years of Choreographing Unforgettable Celebrations Across India',
    published: true,
    expectedFilename: 'sajid-joya-founders.jpg',
    recommendedDimensions: '1440x1800 (4:5)',
  },
  'portrait-sajid': {
    id: 'portrait-sajid',
    title: 'Sajid — Choreographer & Creative Director',
    mediaType: 'image',
    sourceUrl: '/media/sajid-portrait.jpg',
    posterUrl: '/media/sajid-portrait.jpg',
    alt: 'Sajid — Choreographer & Creative Director',
    aspectRatio: '16/9',
    category: 'portrait',
    caption: 'Sajid',
    published: true,
    expectedFilename: 'sajid-portrait.jpg',
    recommendedDimensions: '900x1200 (3:4)',
  },
  'portrait-joya': {
    id: 'portrait-joya',
    title: 'Joya — Choreographer & Performance Stylist',
    mediaType: 'image',
    sourceUrl: '/media/joya-portrait.jpg',
    posterUrl: '/media/joya-portrait.jpg',
    alt: 'Joya — Choreographer & Performance Stylist',
    aspectRatio: '16/9',
    category: 'portrait',
    caption: 'Joya',
    published: true,
    expectedFilename: 'joya-portrait.jpg',
    recommendedDimensions: '900x1200 (3:4)',
  },
  'about-bts-rehearsal': {
    id: 'about-bts-rehearsal',
    title: 'Rehearsal Studio Moments with Sajid & Joya',
    mediaType: 'video',
    sourceUrl: '/media/bts-rehearsal.mp4',
    posterUrl: '/media/bts-rehearsal-poster.jpg',
    alt: 'Behind the scenes rehearsal and choreography crafting',
    aspectRatio: '16/9',
    category: 'behind-the-scenes',
    caption: 'Crafting effortless routines in rehearsal sessions with Agarwal family',
    published: true,
    expectedFilename: 'sj-rehearsal-bts.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'about-stage-production': {
    id: 'about-stage-production',
    title: 'Live Wedding Stage Coordination',
    mediaType: 'video',
    sourceUrl: '/media/stage-production.mp4',
    posterUrl: '/media/stage-production-poster.jpg',
    alt: 'Behind the scenes stage and cue coordination at celebration',
    aspectRatio: '16/9',
    category: 'behind-the-scenes',
    caption: 'On-ground staging, lighting and cue direction by Sajid',
    published: true,
    expectedFilename: 'sj-stage-coordination.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },

  // Wedding Choreography Page
  'choreography-hero': {
    id: 'choreography-hero',
    title: 'Wedding Choreography Overview',
    mediaType: 'video',
    sourceUrl: '/media/choreography-showcase.mp4',
    posterUrl: '/media/choreography-showcase-poster.jpg',
    alt: 'Visual celebration choreography across traditions',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Tailored wedding celebrations from Haldi to Reception',
    published: true,
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
    mediaType: 'video',
    sourceUrl: '/media/entries-showcase.mp4',
    posterUrl: '/media/entries-showcase-poster.jpg',
    alt: 'Couple entries and live entertainment production showcase',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'Bespoke entry concepts tailored to your wedding venue and mood',
    published: true,
    expectedFilename: 'sj-couple-entries-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // Packages Hero
  'packages-hero': {
    id: 'packages-hero',
    title: 'Experiences & Tailored Combinations',
    mediaType: 'image',
    sourceUrl: '/media/sj-brand-wallpaper.jpg',
    posterUrl: '/media/sj-brand-wallpaper.jpg',
    alt: 'Bespoke wedding entertainment combinations brand visual',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'Thoughtfully combined choreography and entry experiences',
    published: true,
    expectedFilename: 'sj-experiences-packages-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // Contact Hero
  'contact-hero': {
    id: 'contact-hero',
    title: 'Plan Your Celebration',
    mediaType: 'image',
    sourceUrl: '/media/sj-brand-wallpaper.jpg',
    posterUrl: '/media/sj-brand-wallpaper.jpg',
    alt: 'Planning and wedding choreography enquiry visual',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'Begin crafting your celebration with Sajid & Joya',
    published: true,
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

