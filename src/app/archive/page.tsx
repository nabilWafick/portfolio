import React from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Archive() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#ccd6f6] mb-8">
        Archive
      </h1>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="py-2 text-left text-sm text-zinc-400">Year</th>
              <th className="py-2 text-left text-sm text-zinc-400">Project</th>
              <th className="py-2 text-left text-sm text-zinc-400 hidden md:table-cell">Made at</th>
              <th className="py-2 text-left text-sm text-zinc-400 hidden lg:table-cell">Built with</th>
              <th className="py-2 text-left text-sm text-zinc-400">Link</th>
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
                    className="text-[#ccd6f6] hover:text-[#64ffda]"
                  >
                    {project.title}
                  </Link>
                </td>
                <td className="py-4 hidden md:table-cell text-zinc-400">
                  {project.company || '—'}
                </td>
                <td className="py-4 hidden lg:table-cell">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded bg-[#64ffda]/10 text-[#64ffda]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:text-[#64ffda]/80"
                    >
                      Visit
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
