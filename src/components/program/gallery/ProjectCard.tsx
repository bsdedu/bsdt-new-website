
import React from 'react';
import { Card } from "../../ui-elements/Card";
import { Badge } from "@/components/ui/badge";
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl h-full">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-bsd-gray">{project.title}</h3>
        {project.description && (
          <p className="text-xs text-foreground/60 mt-1 line-clamp-2">{project.description}</p>
        )}
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-foreground/70">{project.student}</p>
          <Badge variant="outline" className="text-xs">{project.year}</Badge>
        </div>
        {project.semester && (
          <p className="text-xs text-foreground/60 mt-1">{project.semester}</p>
        )}
      </div>
    </Card>
  );
};
