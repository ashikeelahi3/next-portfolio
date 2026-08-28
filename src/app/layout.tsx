// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import PrintButton from '@/components/PrintButton';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { metaDescription, personalInfo, siteUrl } from '@/data/portfolio-data';

const siteTitle = `${personalInfo.name} — ${personalInfo.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description: metaDescription,
  keywords: [
    'Ashik E Elahi',
    'Ashik Elahi',
    'Data Scientist',
    'Statistics',
    'R',
    'Python',
    'Web Development',
    'Next.js',
    'React',
    'Data Visualization',
    'Portfolio',
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: `${personalInfo.name} — Portfolio`,
    title: siteTitle,
    description: metaDescription,
    locale: 'en_US',
    images: [
      {
        url: personalInfo.photo,
        alt: `${personalInfo.name} — ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: metaDescription,
    images: [personalInfo.photo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/fav.png',
    apple: '/fav.png',
  },
};

// themeColor belongs in the viewport export (Next.js 14+), not in metadata.
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeToggle />
        <PrintButton />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}