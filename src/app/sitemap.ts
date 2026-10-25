import { MetadataRoute } from 'next';
import { getPublishedProjects } from '@/content/portfolio';
import { celebrationChapters } from '@/content/celebrations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sjentertainmentchoreography.com';

  const routes = [
    '',
    '/wedding-choreography',
    '/couple-entries-entertainment',
    '/couple-entries-entertainment/couple-bridal-entries',
    '/couple-entries-entertainment/stage-procession-acts-live-entertainment',
    '/our-work',
    '/packages',
    '/about',
    '/contact',
    '/join-our-team',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic published project routes
  const projectRoutes = getPublishedProjects().map((project) => ({
    url: `${baseUrl}/our-work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const celebrationRoutes = celebrationChapters.map((chapter) => ({
    url: `${baseUrl}/wedding-choreography/${chapter.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes, ...celebrationRoutes];
}
