import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/baby-names',
    '/business-name-generator',
    '/username-generator',
    '/gamertag-generator',
    '/fantasy-name-generator',
    '/pet-name-generator',
    '/wifi-name-generator',
    '/team-name-generator',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
