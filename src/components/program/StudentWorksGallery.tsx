
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "../ui-elements/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const StudentWorksGallery: React.FC = () => {
  const projectCategories = [
    { id: "residential", name: "Residential Designs" },
    { id: "commercial", name: "Commercial Spaces" },
    { id: "thesis", name: "Thesis Projects" },
  ];
  
  // Sample project data - in a real app this would come from a database
  const projects = {
    residential: [
      { id: 1, title: "Modern Apartment Redesign", student: "Akshay Sharma", year: "2023", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop" },
      { id: 2, title: "Villa Interior Concept", student: "Priya Patel", year: "2023", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop" },
      { id: 3, title: "Minimalist Home Design", student: "Rohan Murthy", year: "2022", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop" },
      { id: 4, title: "Contemporary Living Space", student: "Isha Gupta", year: "2022", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop" },
    ],
    commercial: [
      { id: 1, title: "Boutique Hotel Lobby", student: "Vikram Reddy", year: "2023", image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop" },
      { id: 2, title: "Organic Cafe Design", student: "Divya Menon", year: "2023", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop" },
      { id: 3, title: "Co-working Space Concept", student: "Ajay Kumar", year: "2022", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop" },
      { id: 4, title: "Retail Store Design", student: "Shreya Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=800&auto=format&fit=crop" },
    ],
    thesis: [
      { id: 1, title: "Sustainable Urban Housing", student: "Nisha Verma", year: "2023", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" },
      { id: 2, title: "Adaptive Reuse of Industrial Spaces", student: "Arjun Desai", year: "2023", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop" },
      { id: 3, title: "Biophilic Design in Healthcare", student: "Tanvi Shah", year: "2022", image: "https://images.unsplash.com/photo-1542089363-bba089ffaa25?w=800&auto=format&fit=crop" },
      { id: 4, title: "Smart Home Innovations", student: "Karan Singh", year: "2022", image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800&auto=format&fit=crop" },
    ],
  };

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
              Explore outstanding projects created by our talented students, showcasing their creativity, technical skills, and design thinking.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="residential" className="w-full">
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
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryProjects.map(project => (
                    <Card key={project.id} className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-bsd-gray">{project.title}</h3>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-sm text-foreground/70">{project.student}</p>
                          <Badge variant="outline" className="text-xs">{project.year}</Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
