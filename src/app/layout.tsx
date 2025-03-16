// src/app/layout.tsx
import PrintButton from '@/components/PrintButton';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgressBar from '@/components/ScrollProgressBar';

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