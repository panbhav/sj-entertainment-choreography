/** Curated visual references for celebration formats. */
const visuals: Record<string, { src: string; caption: string }> = {
  // Destination Weddings
  'destination-welcome': { src: '/images/celebrations/subtypes/destination-welcome.webp', caption: 'Group welcome dance — performance reference' },
  'destination-couple-entry': { src: '/images/celebrations/subtypes/destination-couple-entry.webp', caption: 'Couple entry with friends — performance reference' },
  'destination-sundowner': { src: '/images/celebrations/subtypes/destination-sundowner.webp', caption: 'Sunset sundowner dance — performance reference' },
  'destination-finale': { src: '/images/celebrations/subtypes/destination-finale.webp', caption: 'All-family destination finale — performance reference' },

  // Sangeet
  'sangeet-couple': { src: '/images/celebrations/subtypes/sangeet-couple.webp', caption: 'Couple duet — performance reference' },
  'sangeet-bridal-squad': { src: '/images/celebrations/subtypes/sangeet-bridal-squad.webp', caption: 'Bridal group — performance reference' },
  'sangeet-groom-squad': { src: '/images/celebrations/subtypes/sangeet-groom-squad.webp', caption: 'Groom squad — choreography reference' },
  'sangeet-family-finale': { src: '/images/celebrations/subtypes/sangeet-family-finale.webp', caption: 'Family group finale — performance reference' },

  // Haldi
  'haldi-couple-entry': { src: '/images/celebrations/subtypes/haldi-couple-entry.webp', caption: 'Daytime dance — choreography reference' },
  'haldi-squad-entry': { src: '/images/celebrations/subtypes/haldi-squad-entry.webp', caption: 'Daytime squad entry — choreography reference' },
  'haldi-family-folk': { src: '/images/celebrations/subtypes/haldi-family-folk.webp', caption: 'Family folk movement — performance reference' },
  'haldi-dance-along': { src: '/images/celebrations/subtypes/haldi-dance-along.webp', caption: 'Shared dance steps — performance reference' },

  // Mehendi
  'mehendi-bridal-squad': { src: '/images/celebrations/subtypes/mehendi-bridal-squad.webp', caption: 'Bridal squad — choreography reference' },
  'mehendi-folk-circle': { src: '/images/celebrations/subtypes/mehendi-folk-circle.webp', caption: 'Folk circle dance — performance reference' },
  'mehendi-sufi-fusion': { src: '/images/celebrations/subtypes/mehendi-sufi-fusion.webp', caption: 'Graceful sufi fusion — choreography reference' },
  'mehendi-couple': { src: '/images/celebrations/subtypes/mehendi-couple.webp', caption: 'Playful couple duet — choreography reference' },

  // Bhaat / Mayra
  'bhaat-family-entry': { src: '/media/portfolio/family-celebration.webp', caption: 'Family group dance — performance reference' },
  'bhaat-folk': { src: '/images/celebrations/subtypes/bhaat-folk.webp', caption: 'Folk-inspired steps — performance reference' },
  'bhaat-tribute': { src: '/images/celebrations/subtypes/bhaat-tribute.webp', caption: 'Family tribute dance — performance reference' },
  'bhaat-generations': { src: '/images/celebrations/subtypes/bhaat-generations.webp', caption: 'Multi-generation routine — performance reference' },

  // Wedding Day
  'wedding-baraat': { src: '/images/celebrations/subtypes/sangeet-groom-squad.webp', caption: 'Energetic group dance — movement reference' },
  'wedding-bridal-entry': { src: '/images/celebrations/subtypes/wedding-bridal-entry.webp', caption: 'Bridal aisle walk — concept inspiration' },
  'wedding-couple-reveal': { src: '/images/celebrations/subtypes/wedding-couple-reveal.webp', caption: 'Couple reveal — concept inspiration' },
  'wedding-welcome': { src: '/images/celebrations/subtypes/wedding-welcome.webp', caption: 'Wedding welcome arrival — concept inspiration' },

  // Reception
  'reception-first-dance': { src: '/images/celebrations/subtypes/reception-first-dance.webp', caption: 'Couple dance — performance reference' },
  'reception-couple-entry': { src: '/images/celebrations/subtypes/reception-couple-entry.webp', caption: 'Newlywed arrival — concept inspiration' },
  'reception-parent-duet': { src: '/images/celebrations/subtypes/reception-parent-duet.webp', caption: 'Parent duet — performance reference' },
  'reception-party-opener': { src: '/images/artists/background-reception.webp', caption: 'AI concept: reception dance ensemble' },
};

export const getConceptVisual = (id: string) => Object.hasOwn(visuals, id) ? visuals[id] : undefined;
