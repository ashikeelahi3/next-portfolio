'use client';

import { motion } from 'framer-motion';
import { AnimatedLink } from './AnimatedLink';

export type ProjectProps = {
  title: string;
  tech: string;
  description: string;
  link?: string;
}

export const Project = ({ title, tech, description, link }: ProjectProps) => (
  <motion.div 
    className="mb-6 group"
    whileHover={{ translateX: 5 }}
  >
    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {link ? (
          <AnimatedLink href={link} isExternal>
            {title} ↗
          </AnimatedLink>
        ) : title}
      </h3>
      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{tech}</p>
      <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);