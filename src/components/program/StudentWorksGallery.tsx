
import React, { useState } from 'react';
import { RevealSection } from '../ui-elements/RevealSection';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface StudentWorksGalleryProps {
  title: string;
  subtitle: string;
  projects: Project[];
}

export const StudentWorksGallery: React.FC<StudentWorksGalleryProps> = ({
  title = "Student Works Gallery",
  subtitle = "Explore the creative projects developed by our talented students",
  projects = []
}) => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects by category
  const filterProjects = (category: string) => {
    return category === 'All' 
      ? projects 
      : projects.filter(project => project.category === category);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STUDENT SHOWCASE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              {title}
            </h2>
            <p className="mt-4 text-foreground/70">
              {subtitle}
            </p>
          </div>
        </RevealSection>
        
        <RevealSection delay={100}>
          <Tabs defaultValue="All" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterProjects(category).slice(0, visibleProjects).map((project, index) => (
                    <div 
                      key={index} 
                      className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <Badge variant="outline" className="mb-2">{project.category}</Badge>
                        <h3 className="font-bold text-lg text-bsd-gray mb-2">{project.title}</h3>
                        <p className="text-sm text-foreground/70">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {filterProjects(category).length > visibleProjects && (
                  <div className="text-center mt-8">
                    <Button 
                      variant="outline" 
                      className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10"
                      onClick={() => setVisibleProjects(prev => prev + 6)}
                    >
                      Load More Projects
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
