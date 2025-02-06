"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUpVariants } from "@/lib/utils";
import Link from "next/link";
import { Github, Linkedin, GitBranch } from "lucide-react";

export default function About() {
  const technologies = [
    "Flutter",
    "Dart",
    "Next.js",
    "React",
    "Javascript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Nestjs",
    "Prisma",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nabil-soumanou/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/nabilWafick",
      icon: Github,
    },

    {
      name: "GitLab",
      url: "https://gitlab.com/NabilWafick",
      icon: GitBranch,
    },
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
        <h2 className="flex items-center whitespace-nowrap text-2xl font-bold text-lightestSlate mb-10 sm:text-3xl">
          <span className="font-mono text-secondary text-xl mr-2">01.</span>
          A propos
          <span className="relative ml-6 w-full h-[1px] bg-[#233554]" />
        </h2>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-[2fr,1fr] md:gap-16">
        <motion.div variants={fadeUpVariants}>
          <div className="space-y-4 text-foreground">
            <p>
              Développeur full stack polyvalent avec une compétence technique
              solide et une passion pour la création de solutions web et mobiles
              complètes et performantes, je suis capable de transformer des
              idées complexes en applications intuitives et élégantes. Je suis
              performant dans le développement frontend que backend
            </p>
            <p>
              J'ai eu le privilège de concevoir des applications mobiles, des
              sites web et des logiciels.
            </p>
            <p>
              Voici quelques technologies avec lesquelles j'ai travaillé
              récemment:
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2 font-mono text-sm sm:grid-cols-3">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center text-foreground">
                <span className="mr-2 text-secondary">▹</span>
                <span
                  //  href={`/#${tech.toLowerCase()}`}
                  className="hover:text-secondary transition-colors"
                >
                  {tech}
                </span>
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
                      className="text-foreground hover:text-secondary transition-colors"
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

        {/* <motion.div
          variants={fadeUpVariants}
          className="relative mx-auto w-[70%] md:w-full"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 z-10 rounded border-2 border-secondary translate-x-5 translate-y-5" />
            <div className="absolute inset-0 rounded bg-secondary mix-blend-multiply" />
            <div className="relative aspect-square overflow-hidden rounded">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Portrait"
                fill
                className="object-cover object-center grayscale"
              />
            </div>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
}
