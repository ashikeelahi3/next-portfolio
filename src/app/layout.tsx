// src/app/layout.tsx
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}