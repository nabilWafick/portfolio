"use client";

import { projects } from "@/data/projects";
import { fadeUpVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Projects() {
  const searchParams = useSearchParams();
  const techFilter = searchParams?.get("tech");

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
