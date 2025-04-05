
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ProjectCard } from './ProjectCard';
import { Project } from './types';

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  // Handle cases where projects might be undefined or empty
  if (!projects || projects.length === 0) {
    console.log("No projects available for carousel");
    return (
      <div className="text-center p-8 bg-muted/20 rounded-lg">
        <p>No projects available to display</p>
      </div>
    );
  }

  return (
    <div className="relative px-4 md:px-10">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map(project => (
            <CarouselItem key={project.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 md:left-0" />
        <CarouselNext className="right-1 md:right-0" />
      </Carousel>
    </div>
  );
};
