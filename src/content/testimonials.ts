export interface Testimonial {
  id: string;
  clientNames: string;
  eventCity?: string;
  eventType: string;
  quote: string;
  excerpt: string;
  rating: number;
  source: 'Google';
  sourceScreenshot: string;
  isPublished: boolean;
}

/** Transcribed from the seven Google review screenshots supplied by the owner.
 * Preserve reviewers' wording; excerpts are verbatim selections, not rewrites.
 * No aggregate rating, total Google review count or exact posting date is inferred.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'tanya-agarwal', clientNames: 'tanya agarwal', eventType: 'Sangeet', eventCity: 'Alwar, Rajasthan',
    excerpt: 'Amazing dance couple who give you a fantastic Sangeet with lots of cherishable memories!!!',
    quote: 'Amazing dance couple who give you a fantastic Sangeet with lots of cherishable memories!!!\nThankyou Sajid and Zoya\nWe had our sangeet in December in Alwar, Rajasthan',
    rating: 5, source: 'Google', sourceScreenshot: 'Screenshot_20261025_211224_Maps.jpg.jpeg', isPublished: true,
  },
  {
    id: 'astha-chawla', clientNames: 'Astha Chawla', eventType: 'Choreography',
    excerpt: 'I love how they teach and makes it so easy to learn. Love their choreography.',
    quote: 'They are truly amazing. Works so hard to give the desired result. I love how they teach and makes it so easy to learn. Love their choreography.',
    rating: 5, source: 'Google', sourceScreenshot: 'Screenshot_20261025_211137_Maps.jpg.jpeg', isPublished: true,
  },
  {
    id: 'shalu-gupta', clientNames: 'shalu gupta', eventType: 'Sangeet', eventCity: 'Alwar, Rajasthan',
    excerpt: 'My sangeet night was no less than an IIFA award event, all thanks to SJ choreography.',
    quote: 'My sangeet night was no less than an IIFA award event, all thanks to SJ choreography. All the hardwork, your passion to make it the best of all had paid off really well. The preparations, libdub video, surprise dance of Groom, and finally the sangeet night - all were best. Enjoyed & loved my day ..Thank you so much for all you effort❤️\n@Alwar ,Rajasthan',
    rating: 5, source: 'Google', sourceScreenshot: 'Screenshot_20261025_211100_Maps.jpg.jpeg', isPublished: true,
  },
  {
    id: 'sakshi-jain', clientNames: 'Sakshi Jain', eventType: 'Sangeet', eventCity: 'Alwar, Rajasthan',
    excerpt: 'Best decision of my wedding prep was choosing SJ choreography.',
    quote: 'Best decision of my wedding prep was choosing SJ choreography. You guys just not made my sangeet happening but also the preparations. Enjoyed a lot ..Thank you so much for all you effort❤️\n@Alwar ,Rajasthan',
    rating: 5, source: 'Google', sourceScreenshot: 'Screenshot_20261025_211107_Maps.jpg.jpeg', isPublished: true,
  },
  {
    id: 'rishbha-jain', clientNames: 'Rishbha Jain', eventType: 'Sangeet', eventCity: 'Alwar, Rajasthan',
    excerpt: 'I enjoyed the practice sessions and the sangeet event was a hit with his efforts.',
    quote: 'Amazing experience with SJ Entertainment..Rocking dance choreography by sajid bhaia...I enjoyed the practice sessions and the sangeet event was a hit with his efforts.\n@Alwar, Rajasthan.',
    rating: 5, source: 'Google', sourceScreenshot: 'Screenshot_20261025_211129_Maps.jpg.jpeg', isPublished: true,
  },
  {
    id: 'kashyap-shikha', clientNames: 'kashyap shikha', eventType: 'Wedding dance',
    excerpt: 'The choreography was fun, elegant, and perfectly suited to the flow of the music.',
    quote: 'I recently had the pleasure of working with SJ Entertainment for our wedding dance choreography, and I couldn’t be happier with the experience! From the very first consultation, the team was professional, personable, and made us feel at ease. They took the time to understand our vision and tailored the choreography to match our skill level, preferences, and the song we had chosen.\n\nOur instructor mrsajid and Mrs zoya was incredibly patient and encouraging, helping us break down each step and ensuring we were confident with every move. The choreography was fun, elegant, and perfectly suited to the flow of the music. They also provided helpful tips on timing, posture, and presentation, making sure we felt prepared for the big day.\n\nOn the wedding day, our first dance went off without a hitch, and our guests were so impressed with how smooth and well-coordinated it looked. The whole experience was stress-free and enjoyable, and I felt so much more confident having had such great preparation.\n\nI highly recommend SJ Entertainment for anyone looking to make their wedding dance a memorable moment. They offer great value, expert guidance, and a personalized touch that truly sets them apart!',
    rating: 5, source: 'Google', sourceScreenshot: 'Screenshot_20261025_211027_Maps.jpg.jpeg', isPublished: true,
  },
  {
    id: 'tanya-khandelwal', clientNames: 'Tanya Khandelwal', eventType: 'Choreography',
    excerpt: 'They are really helpful and fun to work with with their easygoing and understanding personalities:)',
    quote: "SJ Entertainment, based in Alwar, Rajasthan, is a prominent dance choreography company specializing in wedding and event performances. SJ Entertainment's commitment to excellence is evident in their well-executed choreographies and the positive experiences. They stand out as a reliable and talented choice for you as they tailor dances to suit you and the vibe you are going for. They make sure you are perfect and can execute the dance with elegance despite being on a tight schedule. They are really helpful and fun to work with with their easygoing and understanding personalities:)",
    rating: 5, source: 'Google', sourceScreenshot: 'Screenshot_20261025_211036_Maps.jpg.jpeg', isPublished: true,
  },
];

export function getPublishedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.isPublished);
}
