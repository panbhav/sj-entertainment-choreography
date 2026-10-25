export interface SocialLink {
  platform: 'instagram' | 'youtube' | 'facebook' | 'x' | 'spotify';
  label: string;
  url: string;
  isConfigured: boolean;
  isPlaceholder?: boolean;
}

export interface ContactConfig {
  phone?: string;
  whatsapp?: string;
  email?: string;
  availableAcrossIndia: boolean;
  coverageNote: string;
}

export interface SiteConfig {
  name: string;
  compactName: string;
  tagline: string;
  owners: string;
  ownerNames: [string, string];
  coverage: string;
  copyrightYear: number;
  contact: ContactConfig;
  socials: SocialLink[];
  spotifyPlaylistUrl?: string; // Hidden until real link provided
  budgetRangesConfigured: boolean;
  budgetRanges: string[];
}

/**
 * Centralised Brand and Site Configuration.
 * 
 * IMPORTANT: In accordance with brand integrity guidelines:
 * - Do NOT invent phone numbers, email addresses, or physical office addresses.
 * - If unconfigured, contact actions hide gracefully or display structured enquiry pathways.
 */
export const siteConfig: SiteConfig = {
  name: "SJ Entertainment Choreography",
  compactName: "SJ Entertainment",
  tagline: "Your love story. Beautifully choreographed.",
  owners: "Sajid & Joya",
  ownerNames: ["Sajid", "Joya"],
  coverage: "Across India",
  copyrightYear: 2026,

  contact: {
    // Sajid's business contact details, supplied by the owner.
    phone: '+918233277258',
    whatsapp: '918233277258',
    email: 'sjentertainmentch@gmail.com',
    availableAcrossIndia: true,
    coverageNote: "Based in Alwar, Rajasthan and Mumbai. Available for destination and local wedding celebrations across India.",
  },

  // Real profiles are enabled as supplied; remaining generic destinations are labelled previews.
  socials: [
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/sj_entertainment_choreography/',
      isConfigured: true,
      isPlaceholder: false,
    },
    {
      platform: 'youtube',
      label: 'YouTube',
      url: 'https://www.youtube.com/',
      isConfigured: true,
      isPlaceholder: true,
    },
    {
      platform: 'facebook',
      label: 'Facebook',
      url: '',
      isConfigured: false,
    },
    {
      platform: 'x',
      label: 'X (Twitter)',
      url: '',
      isConfigured: false,
    },
    {
      platform: 'spotify',
      label: 'Spotify Wedding Playlist',
      url: 'https://open.spotify.com/',
      isConfigured: true,
      isPlaceholder: true,
    },
  ],

  // Spotify playlist embed section is hidden until genuine curated playlist URL is provided
  spotifyPlaylistUrl: undefined,

  // Budget ranges are hidden until pricing framework is finalized by the owners
  budgetRangesConfigured: false,
  budgetRanges: [
    "Under ₹1,00,000",
    "₹1,00,000 – ₹2,50,000",
    "₹2,50,000 – ₹5,00,000",
    "₹5,00,000+",
  ],

};

/**
 * Returns enabled social destinations, including clearly labelled preview links.
 */
export function getConfiguredSocials(): SocialLink[] {
  return siteConfig.socials.filter((s) => s.isConfigured && s.url.trim().length > 0);
}

export function getSocialPreviewNote(): string {
  const names = getConfiguredSocials().filter(social => social.isPlaceholder)
    .map(social => social.platform === 'spotify' ? 'Spotify' : social.label);
  if (!names.length) return '';
  if (names.length === 1) return `${names[0]} is a platform preview; the profile link is coming soon.`;
  return `${names.slice(0, -1).join(', ')} and ${names.at(-1)} links are platform previews.`;
}

/**
 * Returns portfolio priority socials (Instagram & YouTube) if configured.
 */
export function getPortfolioSocials(): SocialLink[] {
  return getConfiguredSocials().filter((s) => s.platform === 'instagram' || s.platform === 'youtube');
}

/**
 * Helper to check whether any direct phone/whatsapp/email is available.
 */
export function hasDirectContactInfo(): boolean {
  return Boolean(
    siteConfig.contact.phone ||
    siteConfig.contact.whatsapp ||
    siteConfig.contact.email
  );
}

