"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Props) {
  // const project = projects.find((p) => p.id === params.id);
  const project = projects[0];
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
    <div className="h-[calc(100vh-7rem)] flex">
      {/* Fixed left section */}
      <div className="w-1/2 border-r border-zinc-800 overflow-hidden">
        <div className="h-full flex flex-col p-8">
          <h1 className="text-3xl font-bold text-[#ccd6f6] mb-6">
            {project.title}
          </h1>

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
                              /*item.url*/ "https://assets.mixkit.co/videos/41648/41648-720.mp4"
                            }
                            controls
                            className="absolute inset-0 w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <img
                            src={
                              /*item.url*/ "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D"
                            }
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                      onClick={scrollPrev}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
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
      <div className="w-1/2 overflow-y-auto">
        <div className="p-8 space-y-8">
          {/* Overview section */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ccd6f6] mb-4">
              Overview
            </h2>
            <p className="text-[#8892b0] leading-relaxed">{project.overview}</p>
          </section>

          {/* Implementation section */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ccd6f6] mb-4">
              Implementation
            </h2>
            <p className="text-[#8892b0] leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Features section */}
          {project.features && (
            <section>
              <h2 className="text-2xl font-semibold text-[#ccd6f6] mb-4">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="bg-zinc-900/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-[#64ffda] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#8892b0]">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack section */}
          <section>
            <h2 className="text-2xl font-semibold text-[#ccd6f6] mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded bg-[#64ffda]/10 text-[#64ffda]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links section */}
          {project.url && (
            <section>
              <h2 className="text-2xl font-semibold text-[#ccd6f6] mb-4">
                Links
              </h2>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20 transition-colors"
              >
                View Project
              </a>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
