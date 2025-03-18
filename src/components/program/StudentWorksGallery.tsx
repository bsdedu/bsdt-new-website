
import React from 'react';
import { Card } from "../ui-elements/Card";
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "../ui-elements/RevealSection";
import { ProjectCarousel } from "./gallery/ProjectCarousel";
import { Project } from './gallery/types';
import { projectCategories } from './gallery/projectCategories';

interface StudentWorksGalleryProps {
  title: string;
  description: string;
  category: string;
}

export const StudentWorksGallery: React.FC<StudentWorksGalleryProps> = ({ 
  title, 
  description,
  category 
}) => {
  // Find projects that match the specified category
  const projects: Project[] = projectCategories[category] || [];

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STUDENT WORK</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              {title}
            </h2>
            <p className="mt-4 text-foreground/70">
              {description}
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          {projects.length > 0 ? (
            <ProjectCarousel projects={projects} />
          ) : (
            <div className="text-center p-8">
              <p className="text-foreground/70">No projects available in this category.</p>
            </div>
          )}
        </RevealSection>
      </div>
    </section>
  );
};
