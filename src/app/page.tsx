'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { EducationItem } from '@/components/Education';
import { SkillCategory } from '@/components/Skills';
import { Project } from '@/components/Project';
// import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { 
  UserCircleIcon, 
  AcademicCapIcon, 
  CodeBracketIcon, 
  CommandLineIcon
  // BriefcaseIcon
} from '@/components/Icons';
import { 
  personalInfo, 
  aboutMe, 
  education, 
  skills, 
  projects 
  // experience 
} from '@/data/portfolio-data';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <Header personalInfo={personalInfo} />

          {/* Summary Section */}
          <Section title="About Me" icon={<UserCircleIcon className="w-5 h-5" />}>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {aboutMe}
            </motion.p>
          </Section>

          {/* Education Section */}
          <Section title="Education" icon={<AcademicCapIcon className="w-5 h-5" />}>
            {education.map((item, index) => (
              <EducationItem
                key={index}
                degree={item.degree}
                institution={item.institution}
                details={item.details}
                year={item.year}
              />
            ))}
          </Section>

          {/* Technical Skills Section */}
          <Section title="Technical Expertise" icon={<CodeBracketIcon className="w-5 h-5" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((category, index) => (
                <SkillCategory 
                  key={index}
                  title={category.category} 
                  items={category.items}
                  color={category.color}
                />
              ))}
            </div>
          </Section>

          {/* Projects Section */}
          <Section title="Featured Projects" icon={<CommandLineIcon className="w-5 h-5" />}>
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                tech={project.tech}
                description={project.description}
                link={project.link}
              />
            ))}
          </Section>

          {/* Work Experience Section - Commented out */}
          {/* <Section title="Professional Experience" icon={<BriefcaseIcon className="w-5 h-5" />}>
            {experience.map((exp, index) => (
              <Experience
                key={index}
                position={exp.position}
                company={exp.company}
                duration={exp.duration}
                highlights={exp.highlights}
              />
            ))}
          </Section> */}
          
          {/* Footer */}
          <Footer personalInfo={personalInfo} />
        </div>
      </main>
    </PageTransition>
  );
}