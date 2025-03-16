'use client';

import { motion } from 'framer-motion';

export type ExperienceProps = {
  position: string;
  company: string;
  duration?: string;
  highlights?: string[];
}

export const Experience = ({ position, company, duration, highlights }: ExperienceProps) => (
  <motion.div 
    className="space-y-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{position}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-gray-700 dark:text-gray-300">{company}</span>
        {duration && <span className="text-gray-500 text-sm">• {duration}</span>}
      </div>
    </div>
    {highlights && (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
        {highlights.map((item, index) => (
          <li key={index} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    )}
  </motion.div>
);