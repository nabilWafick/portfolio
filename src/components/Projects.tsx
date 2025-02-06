"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/utils";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  external?: string;
}

interface TechnologySection {
  id: string;
  title: string;
  projects: Project[];
}

export default function Projects() {
  const searchParams = useSearchParams();
  const techFilter = searchParams?.get("tech");

  const technologySections: TechnologySection[] = [
    {
      id: "typescript",
      title: "TypeScript",
      projects: [
        {
          title: "Project Management Dashboard",
          description:
            "A comprehensive project management tool with TypeScript and Next.js, featuring real-time updates and team collaboration.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
          tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
          github: "https://github.com/example/project-dashboard",
          external: "https://dashboard.example.com",
        },
        {
          title: "TypeScript Component Library",
          description:
            "A modern UI component library built with TypeScript and React, featuring fully typed props and comprehensive documentation.",
          image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
          tech: ["TypeScript", "React", "Storybook", "Jest"],
          github: "https://github.com/example/component-library",
          external: "https://components.example.com",
        },
        {
          title: "Analytics Platform",
          description:
            "An analytics platform built with TypeScript, providing real-time data visualization and custom reporting features.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda1b704d3?q=80&w=2070&auto=format&fit=crop",
          tech: ["TypeScript", "D3.js", "Node.js", "MongoDB"],
          github: "https://github.com/example/analytics-platform",
          external: "https://analytics.example.com",
        },
      ],
    },
    {
      id: "react",
      title: "React",
      projects: [
        {
          title: "Spotify Profile",
          description:
            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, and detailed audio information.",
          image:
            "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop",
          tech: ["React", "Express", "Spotify API", "Node.js"],
          github: "https://github.com/example/spotify-profile",
          external: "https://spotify-profile.example.com",
        },
        {
          title: "React Weather App",
          description:
            "A beautiful weather application built with React that shows current weather and forecasts for any location worldwide.",
          image:
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2070&auto=format&fit=crop",
          tech: ["React", "OpenWeather API", "Styled Components"],
          github: "https://github.com/example/weather-app",
          external: "https://weather-app.example.com",
        },
        {
          title: "Task Manager Pro",
          description:
            "A comprehensive task management application with features like drag-and-drop, categories, and real-time updates.",
          image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
          tech: ["React", "Firebase", "Material-UI"],
          github: "https://github.com/example/task-manager",
          external: "https://taskmanager.example.com",
        },
      ],
    },
    {
      id: "nodejs",
      title: "Node.js",
      projects: [
        {
          title: "API Gateway Service",
          description:
            "A robust API gateway service that handles authentication, rate limiting, and request routing for microservices architecture.",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
          tech: ["Node.js", "Express", "Redis", "JWT"],
          github: "https://github.com/example/api-gateway",
        },
        {
          title: "Real-time Chat System",
          description:
            "A scalable real-time chat system built with Node.js and Socket.io, supporting private messages and group chats.",
          image:
            "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop",
          tech: ["Node.js", "Socket.io", "MongoDB"],
          github: "https://github.com/example/chat-system",
          external: "https://chat.example.com",
        },
        {
          title: "E-commerce Backend",
          description:
            "A complete e-commerce backend system with product management, user authentication, and order processing.",
          image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
          tech: ["Node.js", "Express", "MongoDB", "Stripe"],
          github: "https://github.com/example/ecommerce-backend",
        },
      ],
    },
    {
      id: "nextjs",
      title: "Next.js",
      projects: [
        {
          title: "E-learning Platform",
          description:
            "A modern e-learning platform with course management, video streaming, and interactive quizzes.",
          image:
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
          tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          github: "https://github.com/example/elearning",
          external: "https://elearning.example.com",
        },
        {
          title: "Blog Platform",
          description:
            "A full-featured blog platform with MDX support, comments, and social sharing.",
          image:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
          tech: ["Next.js", "MDX", "Tailwind CSS"],
          github: "https://github.com/example/blog-platform",
          external: "https://blog.example.com",
        },
        {
          title: "Portfolio Generator",
          description:
            "A tool for developers to create beautiful portfolios with custom themes and content management.",
          image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
          tech: ["Next.js", "React", "Tailwind CSS"],
          github: "https://github.com/example/portfolio-generator",
          external: "https://portfolio.example.com",
        },
      ],
    },
  ];

  useEffect(() => {
    if (techFilter) {
      const element = document.getElementById(techFilter.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [techFilter]);

  return (
    <motion.section
      id="work"
      className="py-48 sm:py-64"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeUpVariants}>
        <h2 className="flex items-center whitespace-nowrap text-2xl font-bold text-lightestSlate mb-10 sm:text-3xl">
          <span className="font-mono text-secondary text-xl mr-2">03.</span>
          Projets
          <span className="relative ml-6 w-full h-[1px] bg-[#233554]" />
        </h2>
      </motion.div>

      <div className="space-y-48">
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isRight = (index + 1) % 2 !== 0;

            return (
              <motion.div
                key={project.title}
                variants={fadeUpVariants}
                className="relative"
              >
                <div
                  className={`md:grid md:grid-cols-12 md:gap-8 items-center 
                                  ${isRight ? "" : "text-right"}`}
                >
                  <div
                    className={`relative md:col-span-7 mb-8 md:mb-0
                                    ${isRight ? "md:col-start-6" : ""}`}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded shadow-lg">
                        {project.media?.screenshots &&
                          project.media?.screenshots?.length > 0 && (
                            <Image
                              src={project.media.screenshots[0]}
                              alt={project.title}
                              fill
                              className="object-contain object-center transition-all duration-300
                                       group-hover:scale-105 group-hover:brightness-50"
                            />
                          )}
                      </div>
                    </Link>
                  </div>

                  <div
                    className={`relative md:col-span-7 
                                    ${
                                      isRight
                                        ? "md:col-start-6"
                                        : "md:col-start-1"
                                    }`}
                  >
                    <div>
                      <h3
                        className={`text-2xl font-bold text-lightestSlate mb-6 
                                      ${!isRight ? "text-right" : ""}`}
                      >
                        <Link
                          href={`/projects/${project.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-secondary transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p
                        className={`text-foreground mb-6 
                                      ${!isRight ? "text-right" : ""}`}
                      >
                        {project.description}
                      </p>

                      <ul
                        className={`flex flex-wrap gap-2.5 mb-4 font-mono text-sm 
                                       ${!isRight ? "justify-end" : ""}`}
                      >
                        {project.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="text-xs font-semibold text-secondary"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`flex items-center gap-4 
                                        ${!isRight ? "justify-end" : ""}`}
                      >
                        {project.playStore && (
                          <Link
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:font-semibold 
                            hover:text-secondary
                            hover:cursor-pointer"
                          >
                            Play Store
                          </Link>
                        )}
                        {project.appleStore && (
                          <Link
                            href={project.appleStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:font-semibold 
                             hover:text-secondary
                            hover:cursor-pointer"
                          >
                            Apple Store
                          </Link>
                        )}
                        {project.gitFrontEnd && (
                          <Link
                            href={project.gitFrontEnd}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:font-semibold 
                             hover:text-secondary
                            hover:cursor-pointer"
                          >
                            Code Front
                          </Link>
                        )}
                        {project.gitBackEnd && (
                          <Link
                            href={project.gitBackEnd}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:font-semibold 
                             hover:text-secondary
                            hover:cursor-pointer"
                          >
                            Code Back
                          </Link>
                        )}
                        {project.url && (
                          <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink
                              className="text-sm hover:cursor-pointer 
                               hover:text-secondary
                              hover:scale-125 transition-transform"
                              size={15}
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
