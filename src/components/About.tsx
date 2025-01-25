'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUpVariants } from '@/lib/utils';
import Link from 'next/link';
import { Github, Linkedin, GitBranch } from 'lucide-react';

export default function About() {
  const technologies = [
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'GraphQL',
    'AWS'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin
    },
    {
      name: 'GitLab',
      url: 'https://gitlab.com/yourusername',
      icon: GitBranch
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-48 sm:py-64"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeUpVariants}>
        <h2 className="flex items-center whitespace-nowrap text-2xl font-bold text-[#ccd6f6] mb-10 sm:text-3xl">
          <span className="font-mono text-[#64ffda] text-xl mr-2">02.</span>
          About Me
          <span className="relative ml-6 w-full h-[1px] bg-[#233554]" />
        </h2>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-[2fr,1fr] md:gap-16">
        <motion.div variants={fadeUpVariants}>
          <div className="space-y-4 text-[#8892b0]">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2 font-mono text-sm sm:grid-cols-3">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center text-[#8892b0]">
                <span className="mr-2 text-[#64ffda]">▹</span>
                <Link 
                  href={`/#${tech.toLowerCase()}`}
                  className="hover:text-[#64ffda] transition-colors"
                >
                  {tech}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <ul className="flex items-center gap-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="relative mx-auto w-[70%] md:w-full"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 z-10 rounded border-2 border-[#64ffda] translate-x-5 translate-y-5" />
            <div className="absolute inset-0 rounded bg-[#64ffda] mix-blend-multiply" />
            <div className="relative aspect-square overflow-hidden rounded">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Portrait"
                fill
                className="object-cover object-center grayscale"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
