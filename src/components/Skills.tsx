'use client';

import { motion } from 'framer-motion';

export type SkillCategoryProps = {
  title: string;
  items: string[];
  color?: string;
}

export const SkillCategory = ({ title, items, color }: SkillCategoryProps) => (
  <motion.div 
    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
    whileHover={{ scale: 1.02 }}
  >
    <h3 className={`font-semibold mb-3 ${color || "text-gray-900 dark:text-gray-200"}`}>{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span 
          key={item} 
          className="px-3 py-1.5 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);