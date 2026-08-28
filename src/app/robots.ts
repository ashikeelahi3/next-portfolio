import { MetadataRoute } from 'next';
import { siteUrl } from '@/data/portfolio-data';

// App Router file convention: generates /robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
