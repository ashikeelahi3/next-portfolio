'use client';

import { motion } from 'framer-motion';

export type EducationItemProps = {
  degree: string;
  institution: string;
  details?: string;
  year?: string;
}

export const EducationItem = ({ degree, institution, details, year }: EducationItemProps) => (
  <motion.div 
    className="mb-6 relative pl-6 border-l-2 border-blue-200 dark:border-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="absolute w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full -left-[7px] top-2" />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{degree}</h3>
    <p className="text-gray-700 dark:text-gray-300 mt-1">{institution}</p>
    {details && <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{details}</p>}
    {year && <span className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-sm rounded-full">{year}</span>}
  </motion.div>
);