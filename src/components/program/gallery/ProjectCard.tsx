
import React, { useState } from 'react';
import { Card } from "../../ui-elements/Card";
import { Badge } from "@/components/ui/badge";
import { Project } from './types';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use images array if available, otherwise use single image
  const allImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div 
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl h-full">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
              onError={(e) => {
                console.log(`Failed to load image for project: ${project.title}`);
                e.currentTarget.src = '/placeholder.svg';
              }}
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
            {allImages.length > 1 && (
              <p className="text-xs text-foreground/50 mt-1">{allImages.length} pages</p>
            )}
          </div>
        </Card>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-none">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="relative">
            <img 
              src={allImages[currentImageIndex]} 
              alt={`${project.title} - Page ${currentImageIndex + 1}`} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Navigation arrows for multi-image projects */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-white/80 mt-1">{project.student} • {project.year}</p>
              {project.semester && (
                <p className="text-white/60 text-sm">{project.semester}</p>
              )}
              {project.description && (
                <p className="text-white/70 mt-2">{project.description}</p>
              )}
              {allImages.length > 1 && (
                <p className="text-white/60 text-sm mt-2">
                  Page {currentImageIndex + 1} of {allImages.length}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
