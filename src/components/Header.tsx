'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedLink } from './AnimatedLink';
import { EnvelopeIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from './Icons';

type HeaderProps = {
  personalInfo: {
    name: string;
    photo: string;
    title?: string;
    contact: {
      email: string;
      phone: string;
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

export const Header = ({ personalInfo }: HeaderProps) => {
  return (
    <header className="mb-12">
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 200,
          damping: 10 
        }}
      >
        {/* Profile Picture */}
        <ProfilePicture 
          src={personalInfo.photo} 
          alt={`${personalInfo.name} Portrait`} 
        />

        {/* Name and Contact Info */}
        <div className="text-center md:text-left w-full">
          <NameDisplay name={personalInfo.name} title={personalInfo.title} />
          
          {/* Contact Links in two columns */}
          <ContactLinksGrid contact={personalInfo.contact} />
        </div>
      </motion.div>
    </header>
  );
};

const ProfilePicture = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    className="relative aspect-square w-32 md:w-48 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden"
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 8rem, 12rem"
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-white/10" />
  </motion.div>
);

const NameDisplay = ({ name, title }: { name: string; title?: string }) => (
  <div className="mb-5">
    <div className="relative group">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
        {name}
      </h1>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300" />
    </div>
    {title && (
      <h2 className="text-xl text-gray-600 dark:text-gray-400 mt-1">
        {title}
      </h2>
    )}
  </div>
);

const ContactLinksGrid = ({ contact }: { contact: HeaderProps['personalInfo']['contact'] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-6">
    {/* First Column */}
    <div className="space-y-4">
      <ContactLink 
        href={`mailto:${contact.email}`}
        icon={<EnvelopeIcon className="w-6 h-6" />}
        text={contact.email}
        delay={0.2}
      />
      
      <ContactLink 
        href={`tel:${contact.phone}`}
        icon={<PhoneIcon className="w-6 h-6" />}
        text={contact.phone}
        delay={0.3}
      />
    </div>
    
    {/* Second Column */}
    <div className="space-y-4">  
      <ContactLink 
        href={contact.githubUrl}
        icon={<GitHubIcon className="w-6 h-6" />}
        text={contact.github}
        isExternal
        delay={0.4}
      />
      
      <ContactLink 
        href={contact.linkedinUrl}
        icon={<LinkedInIcon className="w-6 h-6" />}
        text={contact.linkedin}
        isExternal
        delay={0.5}
      />
    </div>
  </div>
);

const ContactLink = ({ 
  href, 
  icon, 
  text, 
  isExternal = false,
  delay = 0,
}: { 
  href: string; 
  icon: React.ReactNode; 
  text: string;
  isExternal?: boolean;
  delay?: number;
}) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay }}
  >
    <AnimatedLink
      href={href}
      isExternal={isExternal}
      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {icon}
      <span className="truncate">{text}</span>
    </AnimatedLink>
  </motion.div>
);