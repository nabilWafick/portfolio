import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Archive() {
  return (
    <div className="max-w-6xl sm:px-6 lg:px-8 container mx-auto px-4 py-16 ">
      <h1 className="text-3xl font-bold text-lightestSlate mb-8 mt-20">
        Archive
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="py-2 text-left text-sm text-zinc-400">Année</th>
              <th className="py-2 text-left text-sm text-zinc-400">Projet</th>
              <th className="py-2 text-left text-sm text-zinc-400 hidden md:table-cell">
                Développé à
              </th>
              <th className="py-2 text-left text-sm text-zinc-400 hidden lg:table-cell">
                Construit avec
              </th>
              <th className="py-2 text-left text-sm text-zinc-400">Aperçu</th>
              <th className="py-2 text-left text-sm text-zinc-400">Lien</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-zinc-800">
                <td className="py-4 text-zinc-500">
                  {new Date(project.date).getFullYear()}
                </td>
                <td className="py-4">
                  <Link
                    href={`/projects/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightestSlate hover:text-secondary"
                  >
                    {project.title}
                  </Link>
                </td>
                <td className="py-4 hidden md:table-cell text-zinc-400">
                  {project.company || "—"}
                </td>
                <td className="py-4 hidden lg:table-cell">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded bg-secondary/10 text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  <Link
                    href={`/projects/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightestSlate hover:text-secondary"
                  >
                    {project.title}
                  </Link>
                </td>
                <td className="py-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80"
                    >
                      <ExternalLink />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
