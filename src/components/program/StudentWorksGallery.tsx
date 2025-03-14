
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "../ui-elements/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

export const StudentWorksGallery: React.FC = () => {
  const projectCategories = [
    { id: "branding", name: "Branding Projects" },
    { id: "digital", name: "Digital Design" },
    { id: "print", name: "Print & Editorial" },
  ];
  
  // Updated project data with more topic-relevant images
  const projects = {
    branding: [
      { id: 1, title: "Eco-friendly Brand Identity", student: "Priya Sharma", year: "2023", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop" },
      { id: 2, title: "Tech Startup Branding", student: "Arjun Mehta", year: "2023", image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&auto=format&fit=crop" },
      { id: 3, title: "Restaurant Chain Rebrand", student: "Meera Patel", year: "2022", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop" },
      { id: 4, title: "Artisanal Coffee Branding", student: "Vikram Reddy", year: "2022", image: "https://images.unsplash.com/photo-1579438428425-67f2a4d83827?w=800&auto=format&fit=crop" },
    ],
    digital: [
      { id: 1, title: "Mobile App UI Design", student: "Kiran Kumar", year: "2023", image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop" },
      { id: 2, title: "E-commerce Website Redesign", student: "Aisha Khan", year: "2023", image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format&fit=crop" },
      { id: 3, title: "Social Media Campaign", student: "Rahul Joshi", year: "2022", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop" },
      { id: 4, title: "Interactive Infographics", student: "Divya Menon", year: "2022", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
    ],
    print: [
      { id: 1, title: "Magazine Layout Design", student: "Sanjay Varma", year: "2023", image: "https://images.unsplash.com/photo-1576615278693-f8e095e37e01?w=800&auto=format&fit=crop" },
      { id: 2, title: "Annual Report Design", student: "Ananya Desai", year: "2023", image: "https://images.unsplash.com/photo-1593588332594-094065ab5d19?w=800&auto=format&fit=crop" },
      { id: 3, title: "Book Cover Series", student: "Rohan Murthy", year: "2022", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop" },
      { id: 4, title: "Packaging Design Collection", student: "Neha Gupta", year: "2022", image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&auto=format&fit=crop" },
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
              Explore outstanding graphic design projects created by our talented students, showcasing their creativity, technical skills, and design thinking.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="branding" className="w-full">
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
                <div className="relative px-4 md:px-10">
                  <Carousel 
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {categoryProjects.map(project => (
                        <CarouselItem key={project.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                          <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl h-full">
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
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 md:left-0" />
                    <CarouselNext className="right-1 md:right-0" />
                  </Carousel>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
