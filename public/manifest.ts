import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ashik Elahi - Portfolio',
    short_name: 'Ashik Portfolio',
    description: 'Portfolio of Ashik Elahi, Statistician and Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/public/fav.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  }
}