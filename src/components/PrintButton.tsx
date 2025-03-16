'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PrintButton() {
  const [showLabel, setShowLabel] = useState(false);

  const handlePrint = () => {
    // Apply print-friendly styles
    const originalStyles = document.body.style.cssText;
    
    // Create a style tag for print-specific CSS
    const styleTag = document.createElement('style');
    styleTag.id = 'print-styles';
    styleTag.innerHTML = `
      @media print {
        /* Hide non-essential elements when printing */
        header nav, footer, .fixed, button, form, 
        [role="navigation"], [role="search"], 
        iframe:not([title="resume"]),
        .no-print {
          display: none !important;
        }
        
        /* Print-specific layout adjustments */
        body {
          font-size: 12pt;
          color: black !important;
          background: white !important;
        }
        
        /* Ensure content is properly sized for paper */
        .container, main, section {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Improve text readability for print */
        h1, h2, h3, h4, h5, h6 {
          page-break-after: avoid;
          page-break-inside: avoid;
        }
        
        p, blockquote, ul, ol, dl, table, figure {
          page-break-inside: avoid;
        }
        
        /* Ensure good contrast for print */
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
          color: black !important;
          background: transparent !important;
          box-shadow: none !important;
        }
        
        /* Remove background colors and adjust text */
        .text-gray-600, .text-gray-700, .text-gray-800, .dark\\:text-gray-400, 
        .dark\\:text-gray-300, .dark\\:text-gray-200, .dark\\:text-gray-100 {
          color: black !important;
        }
        
        /* Show URLs for links when printing */
        a[href]:after {
          content: " (" attr(href) ")";
          font-size: 90%;
          color: #333 !important;
        }
        
        /* Don't show URLs for internal, anchor or javascript links */
        a[href^="#"]:after,
        a[href^="javascript:"]:after,
        a[href^="/"]:after {
          content: "";
        }
      }
    `;
    
    // Add the style tag to the document head
    document.head.appendChild(styleTag);
    
    // Trigger print dialog
    window.print();
    
    // Clean up: Remove print styles and restore original styles
    setTimeout(() => {
      const printStyles = document.getElementById('print-styles');
      if (printStyles) {
        printStyles.remove();
      }
      document.body.style.cssText = originalStyles;
    }, 100);
  };

  return (
    <div className="fixed top-20 right-6 z-40 flex items-center"
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      {/* Label that appears on hover */}
      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: showLabel ? 1 : 0, x: showLabel ? 0 : 10 }}
        className="mr-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 text-sm rounded-md shadow-md"
      >
        Print Resume
      </motion.div>
      
      <button
        onClick={handlePrint}
        className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
        aria-label="Print resume as PDF"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}