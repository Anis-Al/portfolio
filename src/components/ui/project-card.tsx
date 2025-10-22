'use client';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './card';
import { ProjectCarousel } from './project-carousel';

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    technologies: string[];
    images: Array<{
      name: string;
      src: string;
      description: string;
    }>;
    repo?: string;
    demo?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col h-full border-2 border-gray-700 hover:border-blue-400 
    transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 bg-gray-900 w-full overflow-hidden">
      <ProjectCarousel images={project.images} />
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">
            {project.name}
          </h3>
          <div className="flex space-x-2">
            {project.repo && (
              <Link 
                href={project.repo} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {project.demo && (
              <Link 
                href={project.demo} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-gray-300 text-sm mb-4">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-800 rounded-full text-sm text-white font-medium hover:bg-blue-400 
              hover:text-black transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
