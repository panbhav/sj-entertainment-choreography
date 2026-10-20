import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === 'production' && Boolean(process.env.NEXT_PUBLIC_SITE_URL);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sjentertainmentchoreography.com';

  if (!isProduction) {
    // Keep development and staging environments unindexed
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
