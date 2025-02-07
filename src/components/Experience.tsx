"use client";

import { cn, fadeUpVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

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
      company: "CodeLab",
      title: "Développeur Flutter",
      period: "Septembre 2024 - Janvier 2025",
      responsibilities: [
        " A maintenu et implémenté de nouvelles fonctionnalités de l'application mobile Minfo",
        "A effectué les déploiements de l’application Minfo sur Google Play Store et Apple store",
        "A maintenu et amélioré le dashboard de Minfo",
        "A commencé le développement de Pal Learning, une plateforme éducative pour faciliter l’enseignement et l’apprentissage en ligne",
      ],
      technologies: ["Flutter", "Dart", "NextJs", "React", "TypeScript"],
    },
    {
      company: "Caisse Codes",
      title: "Stagiaire en génie logiciel",
      period: "Janvier 2024 - Juillet 2024",
      responsibilities: [
        "A développé RST, un logiciel basé sur Flutter, améliorant la gestion et le suivi de l'activité secondaire de l'entreprise (Activité d’épargne)",
        "A augmenté l'efficacité de l'analyse des données de plus de 90% grâce à l'intégration d'un outil de filtrage basé sur Flutter dans RST, utilisant le processus de filtrage de Prisma",
        "A conçu un serveur NestJS avec des systèmes robustes d'authentification et d'autorisation améliorant significativement la sécurité des données pour le logiciel RST",
        "A implémenté un module de prévision basé sur SQL pour prédire les besoins d'achat de produits en fonction des niveaux d'activité des clients",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "NestJS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      company: "HERIS Afrique",
      title: "Stagiaire en génie logiciel",
      period: "Juillet 2023 - Septembre 2023",
      responsibilities: [
        "A conçu et développé AuscuRoute, un logiciel basée sur Flutter pour visualiser et stocker les données de dégradation routière traitées par IA",
        "A collaboré avec l'équipe IA pour assurer une intégration fluide des données traitées dans l'application",
      ],
      technologies: ["Flutter", "Dart"],
    },
    {
      company: "Jackie Sarl",
      title: "Freelance",
      period: "Juillet 2023 - Septembre 2023",
      responsibilities: [
        "A construit JakieSarl un site web de gestion locale, améliorant le suivi des ventes et la productivité des employés",
        "A développé un serveur Node.js avec des systèmes d'authentification et d'autorisation, assurant la sécurité des données",
        "A implémenté des principes de design responsive pour une expérience utilisateur optimale sur tous les appareils",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "NodeJs", "MySQL"],
    },
    {
      company: "Astra Horizon",
      title: "Stagiaire en génie logiciel",
      period: "Juillet 2022 - Septembre 2022",
      responsibilities: [
        "A contribué au développement de Clean4City, accélérant le progrès du développement de l'application de 40%",
        " A collaboré avec des développeurs seniors pour implémenter de nouvelles fonctionnalités et résoudre des bugs",
      ],
      technologies: ["Flutter", "Dart"],
    },
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
        <h2 className="flex items-center whitespace-nowrap text-2xl font-bold text-lightestSlate mb-10 sm:text-3xl">
          <span className="font-mono text-secondary text-xl mr-2">02.</span>
          Expérience
          <span className="relative ml-6 w-full h-[1px] bg-[#233554]" />
        </h2>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        {/* Tab List */}
        <motion.div
          className="flex sm:flex-col overflow-x-auto  sm:overflow-x-visible   sm:min-w-[140px] border-b sm:border-b-0 sm:border-l border-[#233554] exp-scrollbar  "
          variants={fadeUpVariants}
        >
          {jobs.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-3 font-mono text-sm text-left whitespace-nowrap hover:bg-[#172a45]/50 hover:text-secondary transition-colors",
                "focus:outline-none focus:bg-[#172a45]/50 focus:text-secondary",
                "sm:-ml-[2px] sm:border-l-2",
                activeTab === index
                  ? "text-secondary border-secondary bg-[#172a45]/50"
                  : "text-foreground border-transparent"
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
            <h3 className="text-xl text-lightestSlate">
              {jobs[activeTab].title}{" "}
              <span className="text-secondary">
                @ {jobs[activeTab].company}
              </span>
            </h3>
            <p className="font-mono text-sm text-foreground">
              {jobs[activeTab].period}
            </p>
            <ul className="space-y-4">
              {jobs[activeTab].responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start text-foreground">
                  <span className="text-secondary mr-2 mt-1.5">▹</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <ul className="flex flex-wrap gap-2.5">
                {jobs[activeTab].technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="text-xs font-medium font-mono text-secondary"
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
