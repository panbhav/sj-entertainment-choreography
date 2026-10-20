export interface SocialLink {
  platform: 'instagram' | 'youtube' | 'facebook' | 'x' | 'spotify';
  label: string;
  url: string;
  isConfigured: boolean;
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
  enquiryDeliveryConfigured: boolean;
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
    // Left unconfigured until genuine business details are provided by Sajid & Joya
    phone: undefined,
    whatsapp: undefined,
    email: undefined,
    availableAcrossIndia: true,
    coverageNote: "Destination and local wedding celebrations across India.",
  },

  // Configured social profiles. Only platforms with isConfigured: true and non-empty URLs are displayed.
  socials: [
    {
      platform: 'instagram',
      label: 'Instagram',
      url: '',
      isConfigured: false,
    },
    {
      platform: 'youtube',
      label: 'YouTube',
      url: '',
      isConfigured: false,
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
      url: '',
      isConfigured: false,
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

  // Set to true once a real backend provider (e.g. Resend, SendGrid, Webhook) is integrated
  enquiryDeliveryConfigured: process.env.ENQUIRY_DELIVERY_ENABLED === 'true' && Boolean(process.env.ENQUIRY_WEBHOOK_URL?.startsWith('https://')),
};

/**
 * Returns only the social links that have been genuinely configured.
 */
export function getConfiguredSocials(): SocialLink[] {
  return siteConfig.socials.filter((s) => s.isConfigured && s.url.trim().length > 0);
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

