'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedLink } from '@/components/AnimatedLink';
import { PageTransition } from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
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
              <motion.div
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/Ashik.jpg" // Create public/images folder and add your photo
                  alt="Ashik Elahi Portrait"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-white/10" />
              </motion.div>

              {/* Name and Contact Info */}
              <div className="text-center md:text-left">
                <div className="relative group">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                    Ashik Elahi
                  </h1>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </div>
                
                {/* Contact Links */}
                <div className="space-y-4">
                  {/* Email */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <AnimatedLink
                      href="mailto:ashikeelahi3@gmail.com"
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <EnvelopeIcon className="w-6 h-6" />
                      <span>ashikeelahi3@gmail.com</span>
                    </AnimatedLink>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <AnimatedLink
                      href="tel:+8801714491867"
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <PhoneIcon className="w-6 h-6" />
                      <span>+880 1714 491867</span>
                    </AnimatedLink>
                  </motion.div>

                  {/* GitHub */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <AnimatedLink
                      href="https://github.com/ashikeelahi3"
                      isExternal
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <GitHubIcon className="w-6 h-6" />
                      <span>github.com/ashikeelahi3</span>
                    </AnimatedLink>
                  </motion.div>

                  {/* LinkedIn */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <AnimatedLink
                      href="https://linkedin.com/in/ashikeelahi3"
                      isExternal
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <LinkedInIcon className="w-6 h-6" />
                      <span>linkedin.com/in/ashikeelahi3</span>
                    </AnimatedLink>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Summary Section */}
          <Section title="About Me" icon={<UserCircleIcon className="w-5 h-5" />}>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Aspiring Data Scientist with a strong foundation in statistical analysis and data analysis. Passionate about transforming raw data into meaningful insights through innovative solutions. Experienced in R, Python and JavaScript, with expertise in web development, data visualization.
            </motion.p>
          </Section>

          {/* Education Section */}
          <Section title="Education" icon={<AcademicCapIcon className="w-5 h-5" />}>
            <EducationItem
              degree="Bachelor's in Statistics (3rd Year)"
              institution="University of Rajshahi"
              details="Relevant Coursework: Probability Theory, Regression Analysis, Data Mining"
            />
            <EducationItem
              degree="Higher Secondary Certificate (HSC)"
              institution="Shah Makhdum College, Rajshahi"
              details="GPA: 5.00/5.00 | Science Division"
              year="2021"
            />
            <EducationItem
              degree="Secondary School Certificate (SSC)"
              institution="Dhamoirhat Sofia Pilot High School"
              details="GPA: 5.00/5.00 | Science Division"
              year="2019"
            />
          </Section>

          {/* Technical Skills Section */}
          <Section title="Technical Expertise" icon={<CodeBracketIcon className="w-5 h-5" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCategory 
                title="Data Science" 
                items={["R", "Web-R", "SPSS", "Tidyverse", "Python", "Pandas", "NumPy"]}
                color="text-purple-600 dark:text-purple-400"
              />
              <SkillCategory
                title="Web Development"
                items={["ReactJS", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"]}
                color="text-blue-600 dark:text-blue-400"
              />
              <SkillCategory
                title="Mobile Development"
                items={["React Native", "Expo"]}
                color="text-green-600 dark:text-green-400"
              />
              <SkillCategory
                title="Tools & Platforms"
                items={["Git/GitHub", "Excel", "PowerPoint", "Linux", "LaTeX"]}
                color="text-orange-600 dark:text-orange-400"
              />
            </div>
          </Section>

          {/* Projects Section */}
          <Section title="Featured Projects" icon={<CommandLineIcon className="w-5 h-5" />}>
            <Project
              title="VegitHat Analysis"
              tech="HTML · CSS · JavaScript · Web R"
              description="VegieHat Data Analysis is a web-based tool designed to process and analyze data related to the VegieHat project. It appears to provide a user-friendly interface where users can upload files, process data, and download the results. The platform likely utilizes WebR for statistical analysis and computations."
              link="https://github.com/ashikeelahi3/VegitHat-Analysis-WebR/"
            />
            <Project
              title="Plot Generator"
              tech="HTML · CSS · JavaScript · Web R"
              description="WebR Plot Generator is a web-based tool designed to generate plots using WebR, an interactive R environment for web-based statistical computing. The platform allows users to work with data and visualize results directly in the browser."
              link="https://ashikeelahi3.github.io/WebR-Plot-Generator/"
            />
            <Project
              title="Basic Calculator Project"
              tech="HTML · CSS · JavaScript"
              description="The Basic Calculator is a simple web-based arithmetic calculator with standard mathematical operations. It provides users with a minimalistic interface to perform basic calculations efficiently."
              link="https://ashikeelahi3.github.io/basic-calculator/"
            />
            <Project
              title="Social Buddy Project"
              tech="ReactJS"
              description="Social Buddy is a simple social media-like platform where users can browse and interact with posts. The project prioritizes basic functionality over design, making it a foundation for future improvements."
              link="https://ashik-social-buddy.netlify.app/"
            />
            <Project
              title="2nd Year Practicals"
              tech="HTML · CSS · JS · R · Python · Firebase"
              description="Programming 2H is an educational platform designed to help learners explore various programming topics, with a focus on R programming, Python, and Order Statistics. The site provides useful resources, including tutorials, playlists, and practical coding sessions."
              link="https://ashikeelahi3.github.io/programming_2h/"
            />
            
          </Section>

          {/* Work Experience Section */}
          <Section title="Professional Experience" icon={<BriefcaseIcon className="w-5 h-5" />}>
            <Experience
              position="Educational Content Developer"
              company="Rajshahi Coaching Center"
              duration="2022 - Present"
              highlights={[
                "Designed 50+ interactive PowerPoint modules for STEM subjects",
                "Automated exam paper generation using LaTeX templates",
                "Implemented digital assessment system using Testmoz"
              ]}
            />
          </Section>
        </div>
      </main>
    </PageTransition>
  );
}

// Reusable Components
const Section = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) => (
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

const EducationItem = ({ degree, institution, details, year }: { degree: string; institution: string; details?: string; year?: string }) => (
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

const SkillCategory = ({ title, items, color }: { title: string; items: string[]; color?: string }) => (
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

const Project = ({ title, tech, description, link }: { title: string; tech: string; description: string; link?: string }) => (
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

const Experience = ({ position, company, duration, highlights }: { position: string; company: string; duration?: string; highlights?: string[] }) => (
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

// Icons
const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

// const GlobeAltIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
//   </svg>
// );

const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const AcademicCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11A55.964 55.964 0 0012 20.884a55.898 55.898 0 007.007-4.42m0 0A55.94 55.94 0 0012 13.713m-5.007 2.723A55.952 55.952 0 0112 13.713" />
  </svg>
);

const CodeBracketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const CommandLineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);

// Add new icons at the bottom of the file
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);