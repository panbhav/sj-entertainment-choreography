export interface Testimonial {
  id: string;
  clientNames: string;
  eventCity?: string;
  eventType: string;
  quote: string;
  year?: string;
  isPublished: boolean;
}

/**
 * Testimonial Registry.
 * 
 * In strict adherence to brand guidelines:
 * - Do NOT invent client names, reviews, ratings, or stories.
 * - Testimonial sections check getPublishedTestimonials().
 * - When empty or isPublished is false, testimonial components hide automatically.
 */
export const testimonials: Testimonial[] = [];

export function getPublishedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.isPublished);
}
