'use client';

import { motion } from 'framer-motion';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Section = ({ title, children, icon }: SectionProps) => (
  <motion.section 
    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="p-2 bg-blue-100 dark:bg-gray-700 rounded-lg text-blue-600 dark:text-blue-400">
        {icon}
      </span>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
    </div>
    {children}
  </motion.section>
);