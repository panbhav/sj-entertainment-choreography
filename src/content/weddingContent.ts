export const weddingContentFormats = [
  {
    id: 'reels', title: 'Reels & creator-led moments', service: 'wedding-reels',
    description: 'Short vertical stories built around your entry, outfit reveals, favourite dance hooks or a trend you love. A creator helps with the concept, framing and simple on-camera direction.',
    output: 'Edited vertical reels for your own Instagram, Stories or Shorts.',
    bestFor: 'Couples, bridal squads and anyone who enjoys a little on-camera direction.',
    moments: ['Outfit reveals & getting-ready transitions', 'Entry hooks & couple moments', 'Dance trends with friends or family'],
  },
  {
    id: 'functions', title: 'Function & celebration coverage', service: 'wedding-function-content',
    description: 'Capture the atmosphere across Haldi, Mehendi, Sangeet, wedding entries and reception: the setup, the people, the performances and the little transitions that connect it all.',
    output: 'Function highlights and short clips, curated around the events you choose.',
    bestFor: 'A single function or a connected story across your wedding celebrations.',
    moments: ['Haldi & Mehendi atmosphere', 'Sangeet performances & family reactions', 'Wedding entries & reception highlights'],
  },
  {
    id: 'candid', title: 'Candid & behind-the-scenes', service: 'wedding-candid-content',
    description: 'The rehearsal laughter, getting-ready excitement, family reactions and unplanned dance-floor moments. Natural coverage that gives couples, families and guests something personal to share.',
    output: 'Candid clips and behind-the-scenes edits with a relaxed, personal feel.',
    bestFor: 'People who prefer natural moments and minimal posing.',
    moments: ['Rehearsals & getting ready', 'Family reactions & conversations', 'Unplanned dance-floor moments'],
  },
  {
    id: 'cinematic', title: 'Cinematic social edits', service: 'wedding-cinematic-content',
    description: 'A short, expressive story with considered framing, detail shots and musical pacing. Shape an entry, couple moment or celebration highlight into a cinematic edit for your social pages.',
    output: 'A polished short highlight in the orientation and edit style agreed with you.',
    bestFor: 'A carefully paced couple, entry or celebration story for your social pages.',
    moments: ['Couple portraits in motion', 'Venue, outfit & celebration details', 'A musical story around your favourite moment'],
  },
];

export const weddingContentFaqs = [
  { question: 'Can we book a creator for just one function?', answer: 'You can enquire for one function or several wedding days. Share the city, date, event timings and moments you want covered so the team can discuss availability and a suitable scope.' },
  { question: 'How soon can we post the content?', answer: 'Delivery timing is agreed before booking, along with the number of edits, their length and any review rounds. Tell us if you have a particular posting deadline so the team can confirm what is practical.' },
  { question: 'How does this work with our photographer and videographer?', answer: 'Share your existing coverage plans when you enquire. The creator brief, shooting windows and priority moments can then be coordinated with your photography, film and event teams.' },
  { question: 'Who posts the reels on social media?', answer: 'The agreed files are prepared for you to review and share on your own pages. Posting through your account, creator collaborations or sharing by SJ are separate arrangements to discuss and approve first.' },
];

export const weddingContentServiceOptions = [
  { value: 'wedding-content', label: 'Wedding Content Creators & Social Reels' },
  ...weddingContentFormats.map(format => ({ value: format.service, label: format.title })),
];
