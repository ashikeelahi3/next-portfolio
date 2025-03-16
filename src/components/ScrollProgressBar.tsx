'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Dynamically change the fill color from blue to purple to teal as you scroll
  const progressColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#3B82F6', '#4F46E5', '#10B981']
  );
  
  // Position indicator from bottom to top based on scroll progress
  // Modified to position the indicator lower relative to the scroll progress
  const indicatorPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '0%'] 
  );

  // The fill height from 0% to 100%
  const heightProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  useEffect(() => {
    // Hide default scrollbars
    document.documentElement.style.scrollbarWidth = 'none'; // Firefox
    (document.documentElement.style as any).msOverflowStyle = 'none'; // IE/Edge

    // Hide webkit scrollbar
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
    `;
    document.head.appendChild(style);

    setIsMounted(true);

    // Calculate scroll percentage on each scroll
    const updateScrollPercentage = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollPercentage(Math.max(0, Math.min(100, Math.round(scrollPercent * 100))));
    };

    window.addEventListener('scroll', updateScrollPercentage);
    updateScrollPercentage(); // Initial calculation

    return () => {
      // Cleanup
      document.documentElement.style.scrollbarWidth = '';
      (document.documentElement.style as any).msOverflowStyle = '';
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-30">
      <div className="relative h-[70vh] flex items-center">
        <div className="relative h-full flex items-center">
          {/* The Track */}
          <div className="h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            {/* The Fill */}
            <motion.div
              className="absolute bottom-0 left-0 w-full rounded-full"
              style={{
                height: heightProgress,
                backgroundColor: progressColor,
              }}
            />
          </div>
          
          {/* Percentage Indicator - Modified to position it at the top of the filled portion */}
          <motion.div
            className="absolute left-3 min-w-[40px] text-center bg-white dark:bg-gray-800 shadow-md rounded-md px-2 py-0.5 text-xs font-semibold border border-gray-100 dark:border-gray-700 select-none pointer-events-none"
            initial={{ top: 'calc(100% - 24px)', opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ top: indicatorPosition }}
            transition={{ 
              delay: 0.2,
              type: "spring", 
              stiffness: 300,
              damping: 30 
            }}
          >
            <motion.span 
              className="font-semibold"
              style={{ color: progressColor }}
            >
              {scrollPercentage}%
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}