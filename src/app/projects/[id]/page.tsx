"use client";

import { projects } from "@/data/projects";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useCallback } from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (carouselApi) carouselApi.scrollPrev();
  }, [carouselApi]);

  const scrollNext = useCallback(() => {
    if (carouselApi) carouselApi.scrollNext();
  }, [carouselApi]);

  // Combine videos and screenshots into a single media array
  const mediaItems = [
    ...(project?.media?.video
      ? [{ type: "video", url: project.media.video }]
      : []),
    ...(project?.media?.screenshots?.map((url) => ({ type: "image", url })) ||
      []),
  ];

  if (!project) {
    notFound();
  }

  return (
    <div className="h-full lg:h-[calc(100vh-7rem)] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 ">
      {/* Fixed left section */}
      <div className=" overflow-hidden h-[75vh] lg:h-full">
        <div className="h-full flex flex-col p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-lightestSlate mb-6">
              {project.title}
            </h1>

            <div className="flex space-x-3 text-secondary hover:text-secondary/10 items-center">
              {project.playStore && (
                <Link
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:font-semibold hover:cursor-pointer"
                >
                  Play Store
                </Link>
              )}

              {project.appleStore && (
                <Link
                  href={project.appleStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:font-semibold hover:cursor-pointer"
                >
                  Apple Store
                </Link>
              )}

              {project.gitFrontEnd && (
                <Link
                  href={project.gitFrontEnd}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:font-semibold hover:cursor-pointer"
                >
                  Code Front
                </Link>
              )}
              {project.gitBackEnd && (
                <Link
                  href={project.gitBackEnd}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:font-semibold hover:cursor-pointer"
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
                    className="text-sm hover:cursor-pointer hover:scale-125 transition-transform"
                    size={15}
                  />
                </Link>
              )}
            </div>
          </div>

          {/* Media carousel */}
          <div className="relative flex-1">
            {mediaItems.length > 0 ? (
              <div className="h-full">
                <div className="embla h-full" ref={carouselRef}>
                  <div className="embla__container h-full">
                    {mediaItems.map((item, index) => (
                      <div key={index} className="embla__slide h-full relative">
                        {item.type === "video" ? (
                          <video
                            src={
                              item.url

                              /*"https://assets.mixkit.co/videos/41648/41648-720.mp4" */
                            }
                            controls
                            className="absolute inset-0 w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <img
                            src={item.url}
                            alt={`Screenshot ${index}`}
                            className="absolute inset-0 w-full h-full object-contain rounded-lg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {mediaItems.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0a192f]/50 text-white hover:bg-[#0a192f]/70 transition-colors z-10"
                      onClick={scrollPrev}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0a192f]/50 text-white hover:bg-[#0a192f]/70 transition-colors z-10"
                      onClick={scrollNext}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full bg-zinc-900/50 rounded-lg">
                <p className="text-zinc-500">No media available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable right section */}
      <div className=" overflow-y-auto">
        <div className="p-8 space-y-8">
          {/* Implementation section */}
          <section>
            <h2 className="text-xl font-semibold text-lightestSlate mb-4">
              Projet
            </h2>
            <p className="text-foreground leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Tech Stack section */}
          <section>
            <h2 className="text-xl font-semibold text-lightestSlate mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded bg-secondary/10 text-secondary text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Overview section */}
          <section>
            <h2 className="text-xl font-semibold text-lightestSlate mb-4">
              Description
            </h2>
            <p className="text-foreground leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Features section */}
          {project.features && (
            <section>
              <h2 className="text-xl font-semibold text-lightestSlate mb-4">
                Fonctionnalités
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="rounded-lg p-4">
                    <h3 className="text-lg font-medium text-secondary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-foreground">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Links section */}
          {/* {project.url && (
            <section>
              <h2 className="text-xl font-semibold text-lightestSlate mb-4">
                Links
              </h2>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              >
                View Project
              </a>
            </section>
          )} */}
        </div>
      </div>
    </div>
  );
}
