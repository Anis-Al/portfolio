import Image from 'next/image';
import data from '@/app/data.json';
import { ProjectCard } from './ui/project-card';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  images: Array<{
    name: string;
    src: string;
    description: string;
  }>;
  repo: string;
  demo?: string; // Make demo link optional
}

export default function Projects() {
  const { projects } = data as { projects: Project[] };

  return (
    <div>
      <section
        id="projects"
        className="relative py-16 md:py-24 font-fira-mono text-white w-full mt-12"
      >
        <div className="absolute inset-0 -z-10 opacity-20">
          <div
            className="absolute inset-0 w-full bg-[url('/images/topographic2.svg')] bg-center 
          [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-fira-mono">
              Projects
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto w-full">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
