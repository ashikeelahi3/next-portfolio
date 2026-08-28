import { MetadataRoute } from 'next';
import { personalInfo } from '@/data/portfolio-data';

// App Router file convention: generates /manifest.webmanifest and Next.js
// automatically adds <link rel="manifest"> to the document head.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - Portfolio`,
    short_name: personalInfo.name,
    description: 'Portfolio of Ashik Elahi, Statistician and Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        // Files in /public are served from the site root, so the path is /fav.png (not /public/fav.png).
        src: '/fav.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
