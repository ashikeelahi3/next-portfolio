import { MetadataRoute } from 'next';
import { siteUrl } from '@/data/portfolio-data';

// App Router file convention: generates /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
