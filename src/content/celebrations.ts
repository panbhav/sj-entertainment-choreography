import { weddingCelebrations } from './services';

export interface CelebrationConcept {
  id: string;
  title: string;
  mood: string;
  description: string;
  choreography: string;
  bestFor: string;
}

export interface CelebrationChapter {
  slug: string;
  shortName: string;
  imageUrl: string;
  introduction: string;
  guidance: string;
  concepts: CelebrationConcept[];
}

function concept(id: string, title: string, mood: string, description: string, choreography: string, bestFor: string): CelebrationConcept {
  return { id, title, mood, description, choreography, bestFor };
}

/** Creative choreography formats, rather than a classification of wedding rituals. */
export const celebrationChapters: CelebrationChapter[] = [
  {
    slug: 'destination-weddings',
    shortName: 'Destination weddings',
    imageUrl: '/images/celebrations/destination-weddings.jpg',
    introduction: 'Bring your people together through dance, wherever you celebrate. Explore entry and performance formats designed around the venue, travel schedule and time you have to rehearse.',
    guidance: 'We adapt formations to the actual dance area and plan rehearsals around travelling guests. Venue access, floor conditions and production arrangements are discussed before choreography is finalised.',
    concepts: [
      concept('destination-welcome', 'Welcome dance choreography', 'Warm / social / easy to join', 'A relaxed opening routine that introduces both families and turns the first gathering into a shared celebration.', 'Short family introductions, simple mirrored steps and a closing formation that brings everyone together.', 'Welcome dinners and guests meeting for the first time.'),
      concept('destination-couple-entry', 'Couple entry with friends', 'Cinematic / personal / coordinated', 'An entrance built around the couple, with friends creating the opening and a short duet completing the arrival.', 'A clear entry pathway, timed group reveal and a couple sequence adapted to the venue floor.', 'A standout arrival at your main destination celebration.'),
      concept('destination-sundowner', 'Sundowner group dance', 'Playful / breezy / informal', 'A light-hearted couple-and-friends performance that suits an outdoor gathering before the evening gets underway.', 'Easy footwork, compact group formations and short musical sections that keep the performance relaxed.', 'Outdoor cocktail gatherings and sunset celebrations.'),
      concept('destination-finale', 'All-family finale', 'Together / joyful / celebratory', 'A destination-wedding closing number that gives each family a small moment before everyone joins the couple.', 'Separate family sections, easy transitions and one shared chorus that guests can learn in advance.', 'Bringing relatives from different cities together for one final performance.'),
    ],
  },
  {
    slug: 'sangeet',
    shortName: 'Sangeet',
    imageUrl: '/images/celebrations/sangeet.jpg',
    introduction: 'Choose how your sangeet story unfolds: an expressive couple duet, a squad spotlight or a finale with everyone you love. These concepts can be combined into one flowing show.',
    guidance: 'The running order, track edits and rehearsal pace are shaped around your performers. We match movement to confidence, outfits and available stage space.',
    concepts: [
      concept('sangeet-couple', 'Couple love-story dance', 'Romantic / expressive / personal', 'Your relationship told through a couple performance, from a gentle opening to a joyful final refrain.', 'Partner connections, comfortable turns, expression coaching and meaningful musical transitions.', 'Couples who want a performance that feels like their own story.'),
      concept('sangeet-bridal-squad', 'Bride & bridesmaids routine', 'Confident / playful / expressive', 'A bride-led routine with sisters and friends, giving the bride a spotlight while the group adds personality and energy.', 'An opening solo phrase, matching group hooks and formations that keep the bride visible.', 'Brides, sisters and close friends who want a shared stage moment.'),
      concept('sangeet-groom-squad', 'Groom & groomsmen routine', 'Bold / upbeat / full of character', 'A groom-led group performance built around favourite songs, friendly banter and steps the whole crew can own.', 'Simple signature hooks, staggered entrances and coordinated group hits with room for individual expression.', 'The groom, brothers, cousins and friends.'),
      concept('sangeet-family-finale', 'Family finale choreography', 'Inclusive / high-energy / together', 'Each family gets its moment before the couple and all performers come together for the closing number.', 'Short family chapters, planned stage transitions and an accessible shared finale chorus.', 'A full-family sangeet closing with performers of different experience levels.'),
    ],
  },
  {
    slug: 'haldi',
    shortName: 'Haldi',
    imageUrl: '/images/celebrations/haldi.jpg',
    introduction: 'Haldi choreography can be much more than one group dance. Discover entrances, family routines and guest participation formats that bring movement to your daytime celebration.',
    guidance: 'We keep steps comfortable for daytime outfits and adapt formations to a dry, clear dance area. Your family customs and ceremony timings come first.',
    concepts: [
      concept('haldi-couple-entry', 'Couple dance entry', 'Playful / bright / together', 'The couple arrives with a short, joyful dance while friends frame the pathway and join the closing hook.', 'Walking choreography, a simple partner phrase and a group finish that flows into the celebration.', 'Couples who want a lively Haldi arrival without a long stage performance.'),
      concept('haldi-squad-entry', 'Bride / groom squad entry', 'Cheeky / energetic / full of personality', 'Friends and siblings open the floor, then bring the bride or groom into a coordinated entry routine.', 'A squad opening, a clear reveal cue and catchy group steps around the person entering.', 'A bride or groom arriving with their closest friends and siblings.'),
      concept('haldi-family-folk', 'Family folk choreography', 'Warm / familiar / inclusive', 'A folk-inspired dance with family members sharing easy, expressive steps and a gentle circle formation.', 'Simple footwork, claps and hand gestures arranged around songs your family enjoys.', 'Family groups, elders and people who prefer a relaxed performance.'),
      concept('haldi-dance-along', 'Guest dance-along', 'Interactive / spontaneous / joyful', 'An instructor leads a short set of easy dance hooks so guests can join straight from the celebration.', 'Repeatable steps, call-and-response movement and a group chorus taught live on the floor.', 'Getting both families and guests dancing with minimal rehearsal.'),
    ],
  },
  {
    slug: 'mehendi',
    shortName: 'Mehendi',
    imageUrl: '/images/celebrations/mehendi.jpg',
    introduction: 'Choose a bridal squad moment, a folk circle, a graceful fusion performance or a playful couple routine. Every format is designed around comfortable movement and the flow of your gathering.',
    guidance: 'Routines can use gentle footwork and expressive upper-body movement. We discuss henna appointments, clothing and available rehearsal time before planning the performance.',
    concepts: [
      concept('mehendi-bridal-squad', 'Bridal squad choreography', 'Expressive / intimate / joyful', 'A bride-and-friends routine with graceful turns, familiar songs and small personal moments between the performers.', 'Matching hooks, soft transitions and formations that keep the bride comfortably at the centre.', 'The bride, sisters and close friends.'),
      concept('mehendi-folk-circle', 'Folk circle dance', 'Traditional-inspired / relaxed / together', 'A welcoming circle dance with familiar folk rhythms and easy steps that relatives can learn together.', 'Gentle travelling steps, clapping patterns and short repeated phrases suited to a shared floor.', 'Intergenerational groups and intimate family gatherings.'),
      concept('mehendi-sufi-fusion', 'Sufi-inspired fusion dance', 'Flowing / graceful / atmospheric', 'An expressive performance with flowing movement and lyrical phrasing, shaped around the dancer’s comfort and musical taste.', 'Soft turns, expressive gestures and a carefully paced musical edit; technique is adapted to the performer.', 'A bride solo, sisters’ duet or small expressive group.'),
      concept('mehendi-couple', 'Playful couple duet', 'Light-hearted / personal / easy-going', 'A short duet with playful exchanges and shared dance hooks that lets the couple enjoy a relaxed spotlight.', 'Simple partner interaction, mirrored steps and an upbeat ending with friends joining if desired.', 'Couples who want an informal performance at their Mehendi.'),
    ],
  },
  {
    slug: 'bhaat-mayra',
    shortName: 'Bhaat / Mayra',
    imageUrl: '/images/celebrations/bhaat-mayra.jpg',
    introduction: 'Explore choreography that gives maternal relatives and family generations a meaningful place in the celebration, from a warm dance welcome to an emotional tribute performance.',
    guidance: 'Bhaat and Mayra customs vary between families and regions. These are optional dance concepts, planned around your family’s traditions rather than a replacement for any ritual.',
    concepts: [
      concept('bhaat-family-entry', 'Maternal-family dance entry', 'Welcoming / joyful / respectful', 'Maternal relatives arrive together through a short, coordinated dance welcome that sets a warm tone for the gathering.', 'Gentle walking steps, family group formations and a simple closing greeting phrase.', 'A shared arrival for maternal relatives and the welcoming family.'),
      concept('bhaat-folk', 'Regional folk choreography', 'Folk-inspired / familiar / dignified', 'An easy family performance using regional songs selected with you and movement that feels familiar to the performers.', 'Small steps, expressive gestures and repeated group phrases adapted to the family’s preferred music.', 'Family members who enjoy traditional or regional music.'),
      concept('bhaat-tribute', 'Family tribute dance', 'Emotional / expressive / personal', 'A thoughtful dedication from maternal relatives to the bride, groom or parents, built around a meaningful song.', 'Expressive storytelling, simple formations and a clear musical moment for the family being honoured.', 'Relatives who want to share a personal dedication through performance.'),
      concept('bhaat-generations', 'Multi-generation group dance', 'Inclusive / relaxed / connected', 'Grandparents, parents and cousins share one gentle routine, with movement tailored to different comfort levels.', 'Accessible claps, small steps and seated participation where preferred, with no need for difficult turns.', 'Bringing multiple family generations into one performance.'),
    ],
  },
  {
    slug: 'wedding-day',
    shortName: 'Wedding day',
    imageUrl: '/images/celebrations/wedding-day.jpg',
    introduction: 'From a dancing baraat welcome to a poised bridal walk, plan the choreography around your arrival. Focused movement and musical cues help each entrance feel natural and confident.',
    guidance: 'Entry timing is coordinated around the ceremony schedule, outfits and venue layout. Sacred proceedings follow your family’s and officiant’s preferences; choreography supports the surrounding arrivals.',
    concepts: [
      concept('wedding-baraat', 'Baraat group choreography', 'Energetic / celebratory / communal', 'A groom-and-family dance sequence with familiar hooks that the group can repeat during the arrival.', 'Short travelling phrases, dhol-friendly movement and a clear group finish at the welcome point.', 'The groom, friends and relatives joining the baraat.'),
      concept('wedding-bridal-entry', 'Expressive bridal entry', 'Poised / emotional / personal', 'A bridal arrival combining a graceful walk with a few expressive gestures or a short dance phrase.', 'Pace, posture, pauses and simple movement rehearsed with the outfit and accompanying siblings in mind.', 'A bride who wants a composed entrance with a personal dance touch.'),
      concept('wedding-couple-reveal', 'Couple reveal choreography', 'Together / cinematic / composed', 'The couple approaches the ceremony area through a short entrance sequence, ending in a shared pose before proceedings begin.', 'Matched walking pace, a simple partner interaction and a timed final formation for the arrival.', 'A joint couple arrival before the varmala or main ceremony.'),
      concept('wedding-welcome', 'Family welcome dance', 'Warm / playful / welcoming', 'The welcoming family greets arriving relatives through a short performance, with an optional shared closing hook.', 'Mirrored family formations, simple greeting gestures and a compact musical edit.', 'A friendly dance exchange between both families at the entrance.'),
    ],
  },
  {
    slug: 'reception',
    shortName: 'Reception',
    imageUrl: '/images/celebrations/reception.jpg',
    introduction: 'Celebrate as newlyweds with a first dance, a coordinated arrival, a parent duet or an upbeat party opener. Choose an intimate moment or bring your guests onto the floor.',
    guidance: 'We adapt partner steps to your comfort, attire and floor surface. Lifts and advanced turns are optional, discussed individually and included only when appropriate for the performers.',
    concepts: [
      concept('reception-first-dance', 'Newlywed first dance', 'Romantic / connected / timeless', 'A personal duet that lets you settle into the moment together, with a favourite song and movement that feels comfortable.', 'Partner connection, gentle turns, musical pauses and a polished final pose.', 'Couples who want a romantic reception spotlight.'),
      concept('reception-couple-entry', 'Dancing couple entrance', 'Confident / upbeat / celebratory', 'A lively reception arrival that begins at the entrance and flows straight into a short couple routine.', 'Matched entry steps, a musical reveal and an easy duet phrase to open the evening.', 'Couples who want their arrival to start the celebration.'),
      concept('reception-parent-duet', 'Parent & child duet', 'Heartfelt / gentle / expressive', 'A shared dance for a bride or groom and a parent, built around a meaningful song and simple connected movement.', 'Comfortable partner steps, small turns where suitable and pauses for natural family emotion.', 'A father–daughter, mother–son or other parent-and-child spotlight.'),
      concept('reception-party-opener', 'Party-opening group dance', 'Upbeat / inclusive / energetic', 'The couple and friends lead a short performance that invites guests to join the last section and open the dance floor.', 'Catchy group hooks, clear invitation cues and a repeatable chorus that new dancers can follow.', 'Transitioning from formal reception moments into an open dance floor.'),
    ],
  },
];

export function getCelebrationChapter(slug: string): CelebrationChapter | undefined {
  return celebrationChapters.find((c) => c.slug === slug);
}

export function getCelebrationService(chapter: CelebrationChapter) {
  const service = weddingCelebrations.find((s) => s.id === chapter.slug);
  if (!service) {
    return {
      name: chapter.shortName,
      queryParam: chapter.slug,
    };
  }
  return service;
}

export function celebrationConceptHref(chapter: CelebrationChapter, concept: CelebrationConcept) {
  const service = getCelebrationService(chapter);
  return `/contact?service=${encodeURIComponent(service.queryParam)}&concept=${encodeURIComponent(concept.id)}`;
}

export function getSelectedCelebrationConcept(conceptId: string, serviceQuery?: string) {
  if (!conceptId) return null;
  for (const chapter of celebrationChapters) {
    if (serviceQuery && chapter.slug !== serviceQuery && getCelebrationService(chapter).queryParam !== serviceQuery) {
      continue;
    }
    const found = chapter.concepts.find((c) => c.id === conceptId);
    if (found) {
      return {
        concept: found,
        chapter,
        service: getCelebrationService(chapter),
      };
    }
  }
  for (const chapter of celebrationChapters) {
    const found = chapter.concepts.find((c) => c.id === conceptId);
    if (found) {
      return {
        concept: found,
        chapter,
        service: getCelebrationService(chapter),
      };
    }
  }
  return null;
}
