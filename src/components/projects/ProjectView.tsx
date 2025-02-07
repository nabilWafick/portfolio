import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import Link from "next/link";

interface ProjectViewProps {
  project: Project;
}

export function ProjectView({ project }: ProjectViewProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0a192f] text-foreground">
      {/* Left Section - Media */}
      <div className="lg:w-1/2 lg:fixed lg:left-0 lg:top-0 lg:bottom-0 bg-lightNavy p-6">
        <Link
          href="/archive"
          className="inline-flex items-center text-sm text-secondary hover:text-secondary/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Archive
        </Link>

        <Tabs defaultValue="video" className="w-full">
          <TabsList className="w-full bg-[#0a192f]/50">
            <TabsTrigger value="video" className="flex-1">
              Video Demo
            </TabsTrigger>
            <TabsTrigger value="screenshots" className="flex-1">
              Screenshots
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="mt-4">
            <div className="aspect-video bg-[#0a192f]/50 rounded-lg flex items-center justify-center">
              <Play className="w-12 h-12 text-secondary" />
            </div>
          </TabsContent>

          <TabsContent value="screenshots" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-[#0a192f]/50 rounded-lg"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right Section - Content */}
      <div className="lg:w-1/2 lg:ml-[50%] p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-lightestSlate mb-4">
            {project.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-secondary">
              {new Date(project.date).getFullYear()}
            </span>
            <span className="text-foreground">{project.company}</span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-secondary/80"
              >
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-lightestSlate mb-4">
              Overview
            </h2>
            <p className="text-foreground leading-relaxed">
              A comprehensive project that demonstrates the implementation of
              modern web technologies and best practices. Built with scalability
              and performance in mind.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-lightestSlate mb-4">
              Implementation Details
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                The project was built using a modern tech stack, focusing on
                maintainability, scalability, and developer experience. Key
                technical decisions were made to ensure optimal performance and
                user experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-lightestSlate mb-6">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Performance",
                  description:
                    "Optimized for fast load times and smooth interactions",
                },
                {
                  title: "Scalability",
                  description: "Built with growth in mind, easily extensible",
                },
                {
                  title: "Security",
                  description: "Implements best practices for data protection",
                },
                {
                  title: "User Experience",
                  description: "Intuitive interface with responsive design",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-lightNavy border-[#233554]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-lightestSlate mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
