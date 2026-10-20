export interface OwnerBio {
  name: string;
  role: string;
  portraitMediaId: string;
  bioParagraphs: string[];
  focusAreas: string[];
  isPublished: boolean;
}

export interface BrandApproachPillar {
  title: string;
  description: string;
}

export const ownersData: {
  jointIntro: string;
  jointMediaId: string;
  owners: OwnerBio[];
  philosophyTitle: string;
  philosophyParagraphs: string[];
  approachPillars: BrandApproachPillar[];
  coverageStatement: string;
} = {
  jointIntro:
    "We are Sajid and Joya — the choreographers and creative partners behind SJ Entertainment Choreography. We believe wedding dance should be an authentic reflection of love, family warmth, and effortless celebration, rather than rigid steps or stressful drills.",
  jointMediaId: 'portrait-sajid-joya',
  owners: [
    {
      name: 'Sajid',
      role: 'Co-Founder & Choreographer',
      portraitMediaId: 'portrait-sajid',
      bioParagraphs: [
        'Sajid leads musical arrangement, dynamic staging, and high-energy choreography. His focus is on ensuring every groom, couple, and family squad feels completely natural, relaxed, and confident as they step into the spotlight.',
      ],
      focusAreas: ['Musicality & Flow', 'High-Energy Squad Formations', 'Stage Confidence'],
      isPublished: true,
    },
    {
      name: 'Joya',
      role: 'Co-Founder & Choreographer',
      portraitMediaId: 'portrait-joya',
      bioParagraphs: [
        'Joya specializes in graceful movement styling, emotive couple storytelling, and aesthetic posture suited for bridal lehengas and wedding attire. Her warm, patient rehearsal atmosphere puts beginners instantly at ease.',
      ],
      focusAreas: ['Bridal Elegance', 'Expressive Chemistry', 'Patient Step Breakdown'],
      isPublished: true,
    },
  ],
  philosophyTitle: 'Artistry Rooted in Celebration',
  philosophyParagraphs: [
    'A wedding is not a dance examination — it is a joyful gathering of generations celebrating two families coming together. Our choreography process is designed to be joyful from the very first rehearsal.',
    'Whether you have never danced before or love taking center stage, we adapt the movements to your comfort level, natural body language, and wedding outfits so you can enjoy every second of your celebration.',
  ],
  approachPillars: [
    {
      title: 'Comfort Over Complexity',
      description:
        'We never impose forced routines. We design clean, graceful choreography that looks polished from the audience while feeling comfortable and intuitive for you.',
    },
    {
      title: 'Family-First Inclusivity',
      description:
        'From grandparents taking gentle steps to enthusiastic cousins pulling off high-energy medleys, we ensure every generation feels valued and included.',
    },
    {
      title: 'Complete Musical Harmony',
      description:
        'Music sets the emotion. We custom-edit song medleys, pacing transitions, and sound cues so the performance tells a cohesive, uplifting story.',
    },
    {
      title: 'Calm Stage Readiness',
      description:
        'Beyond teaching steps, we guide you on eye contact, stage positioning, smile, and outfit handling so you feel composed and celebratory on the big day.',
    },
  ],
  coverageStatement:
    'Sajid & Joya travel for destination and local weddings across India. Whether your celebration is hosted in Rajasthan palaces, Goa coastal resorts, metro ballrooms, or intimate ancestral estates, our team coordinates seamlessly with your wedding planners and production crews.',
};
