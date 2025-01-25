'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface Job {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export default function Experience() {
  const jobs: Job[] = [
    {
      company: 'Upstatement',
      title: 'Lead Engineer',
      period: 'May 2018 - Present',
      responsibilities: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, WordPress, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
        'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'WordPress', 'AWS', 'Docker']
    },
    {
      company: 'Scout Studio',
      title: 'Studio Developer',
      period: 'January 2017 - April 2018',
      responsibilities: [
        'Worked with a team of developers to build websites and digital experiences for clients and internal projects',
        'Collaborated with designers to ensure high-quality, responsive implementations',
        'Mentored junior developers and provided technical guidance',
        'Managed project timelines and deliverables for multiple concurrent projects'
      ],
      technologies: ['JavaScript', 'React', 'PHP', 'Laravel', 'MySQL', 'AWS']
    },
    {
      company: 'Apple',
      title: 'UI Engineer Co-op',
      period: 'July 2016 - December 2016',
      responsibilities: [
        'Developed and maintained code for internal tools using React and Ruby',
        'Collaborated with designers and other developers to create intuitive user interfaces',
        'Participated in code reviews and provided constructive feedback',
        'Implemented responsive designs and ensured cross-browser compatibility'
      ],
      technologies: ['React', 'Ruby', 'Rails', 'PostgreSQL', 'Redis', 'AWS']
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.section
      id="experience"
      className="py-24 sm:py-32"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeUpVariants}>
        <h2 className="flex items-center whitespace-nowrap text-2xl font-bold text-[#ccd6f6] mb-10 sm:text-3xl">
          <span className="font-mono text-[#64ffda] text-xl mr-2">02.</span>
          Where I've Worked
          <span className="relative ml-6 w-full h-[1px] bg-[#233554]" />
        </h2>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        {/* Tab List */}
        <motion.div 
          className="flex sm:flex-col overflow-x-auto sm:overflow-x-visible sm:min-w-[140px] 
                     border-b sm:border-b-0 sm:border-l border-[#233554]"
          variants={fadeUpVariants}
        >
          {jobs.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={cn(
                'px-4 py-3 font-mono text-sm text-left whitespace-nowrap hover:bg-[#172a45]/50 hover:text-[#64ffda] transition-colors',
                'focus:outline-none focus:bg-[#172a45]/50 focus:text-[#64ffda]',
                'sm:-ml-[2px] sm:border-l-2',
                activeTab === index 
                  ? 'text-[#64ffda] border-[#64ffda] bg-[#172a45]/50' 
                  : 'text-[#8892b0] border-transparent'
              )}
            >
              {job.company}
            </button>
          ))}
        </motion.div>

        {/* Tab Panels */}
        <motion.div 
          className="min-h-[320px] sm:min-w-[540px]"
          variants={fadeUpVariants}
        >
          <div className="space-y-4">
            <h3 className="text-xl text-[#ccd6f6]">
              {jobs[activeTab].title}{' '}
              <span className="text-[#64ffda]">@ {jobs[activeTab].company}</span>
            </h3>
            <p className="font-mono text-sm text-[#8892b0]">
              {jobs[activeTab].period}
            </p>
            <ul className="space-y-4">
              {jobs[activeTab].responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start text-[#8892b0]">
                  <span className="text-[#64ffda] mr-2 mt-1.5">▹</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <ul className="flex flex-wrap gap-2.5">
                {jobs[activeTab].technologies.map((tech, index) => (
                  <li 
                    key={index}
                    className="text-xs font-mono text-[#64ffda]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
