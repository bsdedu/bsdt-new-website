
import React from 'react';
import { useLocation } from 'react-router-dom';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCarousel } from './gallery/ProjectCarousel';
import { 
  getProjectCategories, 
  getProjectsForProgram, 
  getDefaultTabValue 
} from './gallery/projectsData';

export const StudentWorksGallery: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const isInteriorDesignProgram = pathName.includes('interior-design');
  const isAnimationGameProgram = pathName.includes('animation-game-design');
  
  // Get program-specific data
  const projectCategories = getProjectCategories(pathName);
  const projects = getProjectsForProgram(pathName);
  const defaultTabValue = getDefaultTabValue(pathName);

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STUDENT SHOWCASE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Award-Winning Student Works
            </h2>
            <p className="mt-4 text-foreground/70">
              {isInteriorDesignProgram 
                ? "Explore outstanding interior design projects created by our talented students, showcasing their creativity, technical skills, and spatial thinking."
                : isAnimationGameProgram
                ? "Explore remarkable animation and game design projects created by our talented students, showcasing their storytelling, technical skills, and digital creativity."
                : "Explore outstanding graphic design projects created by our talented students, showcasing their creativity, technical skills, and design thinking."}
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue={defaultTabValue} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                {projectCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {Object.entries(projects).map(([category, categoryProjects]) => (
              // Only render tabs for categories that have projects and are in the current program
              projectCategories.some(pc => pc.id === category) && categoryProjects.length > 0 ? (
                <TabsContent key={category} value={category} className="mt-0">
                  <ProjectCarousel projects={categoryProjects} />
                </TabsContent>
              ) : null
            ))}
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
