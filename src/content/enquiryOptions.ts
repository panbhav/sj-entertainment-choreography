import { weddingCelebrations, signaturePerformances } from './services';
import { coupleEntryConcepts, artistCategories } from './entriesAndArtists';
import { experienceCombinations } from './packages';

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
export const serviceOptions = [...baseServiceOptions, ...additionalServices.filter(item => !baseServiceOptions.some(option => option.value === item.queryParam)).map(item => ({ value: item.queryParam, label: item.name }))];
const categoryServices: Record<string, string> = { choreography: 'sangeet-spectacular', 'couple-entry': 'grand-entry-experience', artists: 'artists-entertainment', 'artists-live-entertainment': 'artists-entertainment' };

export const resolveEnquiryService = (value: string) => Object.hasOwn(categoryServices, value) ? categoryServices[value] : value;

