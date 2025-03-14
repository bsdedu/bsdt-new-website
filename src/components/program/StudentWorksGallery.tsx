
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
import { useLocation } from 'react-router-dom';

export const StudentWorksGallery: React.FC = () => {
  const location = useLocation();
  const programPath = location.pathname;
  
  // Determine which program is active
  const isInteriorDesignProgram = programPath.includes('interior-design');
  const isGraphicDesignProgram = programPath.includes('graphic-design');
  const isAnimationGameDesignProgram = programPath.includes('animation-game-design');
  
  // Categories based on program type
  let projectCategories: { id: string; name: string }[] = [];
  
  if (isInteriorDesignProgram) {
    projectCategories = [
      { id: "residential", name: "Residential Spaces" },
      { id: "commercial", name: "Commercial Projects" },
      { id: "conceptual", name: "Conceptual Designs" },
    ];
  } else if (isGraphicDesignProgram) {
    projectCategories = [
      { id: "branding", name: "Branding Projects" },
      { id: "digital", name: "Digital Design" },
      { id: "print", name: "Print & Editorial" },
    ];
  } else if (isAnimationGameDesignProgram) {
    projectCategories = [
      { id: "3danimation", name: "3D Animation" },
      { id: "gamedesign", name: "Game Design" },
      { id: "vfx", name: "VFX & Compositing" },
    ];
  }
  
  // Program-specific projects data
  const interiorProjects = {
    residential: [
      { id: 1, title: "Modern Apartment Redesign", student: "Anika Patel", year: "2023", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop" },
      { id: 2, title: "Minimalist Villa Interior", student: "Raj Sharma", year: "2023", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop" },
      { id: 3, title: "Urban Loft Conversion", student: "Priya Malhotra", year: "2022", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop" },
      { id: 4, title: "Contemporary Home Design", student: "Arjun Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&auto=format&fit=crop" },
    ],
    commercial: [
      { id: 1, title: "Boutique Hotel Lobby", student: "Neha Reddy", year: "2023", image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop" },
      { id: 2, title: "Corporate Office Design", student: "Vikram Singh", year: "2023", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop" },
      { id: 3, title: "Retail Store Concept", student: "Maya Joshi", year: "2022", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop" },
      { id: 4, title: "Restaurant Interior Design", student: "Karan Mehta", year: "2022", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop" },
    ],
    conceptual: [
      { id: 1, title: "Sustainable Living Space", student: "Divya Sharma", year: "2023", image: "https://images.unsplash.com/photo-1600585154526-990dced4db3d?w=800&auto=format&fit=crop" },
      { id: 2, title: "Future Home Concept", student: "Rohan Kumar", year: "2023", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop" },
      { id: 3, title: "Biophilic Design Study", student: "Ananya Desai", year: "2022", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop" },
      { id: 4, title: "Adaptive Reuse Project", student: "Sanjay Varma", year: "2022", image: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800&auto=format&fit=crop" },
    ],
  };
  
  const graphicProjects = {
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
  
  const animationProjects = {
    "3danimation": [
      { id: 1, title: "Animated Short Film", student: "Aryan Sharma", year: "2023", image: "https://images.unsplash.com/photo-1600244283510-23cf9cfc7fbb?w=800&auto=format&fit=crop" },
      { id: 2, title: "Character Animation Reel", student: "Neha Singh", year: "2023", image: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?w=800&auto=format&fit=crop" },
      { id: 3, title: "Animated Commercial", student: "Rajiv Kumar", year: "2022", image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&auto=format&fit=crop" },
      { id: 4, title: "3D Character Design", student: "Priya Agarwal", year: "2022", image: "https://images.unsplash.com/photo-1580721716958-66025aa1d82d?w=800&auto=format&fit=crop" },
    ],
    gamedesign: [
      { id: 1, title: "Adventure Game Prototype", student: "Vikram Rao", year: "2023", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop" },
      { id: 2, title: "Mobile Game UI Design", student: "Anita Reddy", year: "2023", image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&auto=format&fit=crop" },
      { id: 3, title: "Game Environment Design", student: "Karan Shah", year: "2022", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop" },
      { id: 4, title: "Game Character Modeling", student: "Maya Mehta", year: "2022", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&auto=format&fit=crop" },
    ],
    vfx: [
      { id: 1, title: "Visual Effects Composition", student: "Arun Patel", year: "2023", image: "https://images.unsplash.com/photo-1626379801357-537572de4ad6?w=800&auto=format&fit=crop" },
      { id: 2, title: "Digital Compositing Project", student: "Leela Gupta", year: "2023", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop" },
      { id: 3, title: "Motion Graphics Portfolio", student: "Dhruv Malhotra", year: "2022", image: "https://images.unsplash.com/photo-1561059510-d8f1de631204?w=800&auto=format&fit=crop" },
      { id: 4, title: "Special Effects Reel", student: "Reshma Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1594022078633-47323a1e671e?w=800&auto=format&fit=crop" },
    ],
  };
  
  // Choose projects and default tab based on program type
  let projects: Record<string, any[]> = {};
  let defaultTabValue: string = "";
  let showcaseDescription: string = "";
  
  if (isInteriorDesignProgram) {
    projects = interiorProjects;
    defaultTabValue = "residential";
    showcaseDescription = "Explore outstanding interior design projects created by our talented students, showcasing their creativity, technical skills, and spatial thinking.";
  } else if (isGraphicDesignProgram) {
    projects = graphicProjects;
    defaultTabValue = "branding";
    showcaseDescription = "Explore outstanding graphic design projects created by our talented students, showcasing their creativity, technical skills, and design thinking.";
  } else if (isAnimationGameDesignProgram) {
    projects = animationProjects;
    defaultTabValue = "3danimation";
    showcaseDescription = "Explore outstanding animation and game design projects created by our talented students, showcasing their creativity, technical expertise, and storytelling abilities.";
  }

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
              {showcaseDescription}
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
