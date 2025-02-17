// components/AnimatedLink.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const AnimatedLink = ({
  href,
  children,
  isExternal = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}) => {
  const MotionLink = motion(isExternal ? 'a' : Link);

  return (
    <MotionLink
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
    </MotionLink>
  );
};