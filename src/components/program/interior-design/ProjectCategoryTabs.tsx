
import React from 'react';
import { interiorProjects } from '../gallery/interiorProjects';
import { ProjectCarousel } from '../gallery/ProjectCarousel';

export const ProjectCategoryTabs: React.FC = () => {
  // Combine all interior design projects into a single array
  const allProjects = [
    ...interiorProjects.residential,
    ...interiorProjects.commercial,
    ...interiorProjects.conceptual
  ];
  
  return (
    <div className="w-full">
      <ProjectCarousel projects={allProjects} />
    </div>
  );
};
