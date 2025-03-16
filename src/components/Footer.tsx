'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLink } from './AnimatedLink';
import { FacebookIcon, YouTubeIcon, GitHubIcon, LinkedInIcon } from './Icons';

type FooterProps = {
  personalInfo: {
    name: string;
    contact: {
      github: string;
      githubUrl: string;
      linkedin: string;
      linkedinUrl: string;
      facebook?: string;
      facebookUrl?: string;
      youtube?: string;
      youtubeUrl?: string;
    }
  }
}

export const Footer = ({ personalInfo }: FooterProps) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="mt-16 pt-8 pb-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Social Links */}
        <div className="flex justify-center space-x-5 mb-6">
          <SocialLink 
            href={personalInfo.contact.githubUrl}
            icon={<GitHubIcon className="w-5 h-5" />}
            label="GitHub"
          />
          
          <SocialLink 
            href={personalInfo.contact.linkedinUrl}
            icon={<LinkedInIcon className="w-5 h-5" />}
            label="LinkedIn"
          />
          
          {personalInfo.contact.facebookUrl && (
            <SocialLink 
              href={personalInfo.contact.facebookUrl}
              icon={<FacebookIcon className="w-5 h-5" />}
              label="Facebook"
            />
          )}
          
          {personalInfo.contact.youtubeUrl && (
            <SocialLink 
              href={personalInfo.contact.youtubeUrl}
              icon={<YouTubeIcon className="w-5 h-5" />}
              label="YouTube"
            />
          )}
        </div>
        
                
        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="fixed bottom-6 right-6 p-2 rounded-full bg-gray-800/80 dark:bg-gray-700/80 text-white shadow-md hover:bg-blue-600/90 dark:hover:bg-blue-600/90 transition-all duration-200 z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

const SocialLink = ({ 
  href, 
  icon,
  label
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <AnimatedLink
    href={href}
    isExternal={true}
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    {icon}
  </AnimatedLink>
);