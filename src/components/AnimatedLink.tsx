// components/AnimatedLink.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type AnimatedLinkProps = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
} & Pick<
  React.ComponentPropsWithoutRef<'a'>,
  'aria-label' | 'aria-hidden' | 'id' | 'title' | 'download'
>;

// Created outside the component so a new component type isn't generated on every render.
const MotionAnchor = motion.a;
const MotionNextLink = motion.create(Link) as unknown as typeof motion.a;

export const AnimatedLink = ({
  href,
  children,
  isExternal = false,
  className = '',
  ...rest
}: AnimatedLinkProps) => {
  const MotionComponent = isExternal ? MotionAnchor : MotionNextLink;

  return (
    <MotionComponent
      {...rest}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`group relative inline-flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {/* Underline grows on hover of the link itself, or of any ancestor marked as `group`. */}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
    </MotionComponent>
  );
};
