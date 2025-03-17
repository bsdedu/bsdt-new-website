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
  const isInteriorDesignProgram = location.pathname.includes('interior-design');
  const isAnimationGameProgram = location.pathname.includes('animation-game-design');
  
  // Categories based on program type
  let projectCategories = [
    { id: "branding", name: "Branding Projects" },
    { id: "digital", name: "Digital Design" },
    { id: "print", name: "Print & Editorial" },
  ];
  
  if (isInteriorDesignProgram) {
    projectCategories = [
      { id: "residential", name: "Residential Spaces" },
      { id: "commercial", name: "Commercial Projects" },
      { id: "conceptual", name: "Conceptual Designs" },
    ];
  } else if (isAnimationGameProgram) {
    projectCategories = [
      { id: "animation", name: "3D Animation" },
      { id: "game", name: "Game Design" },
      { id: "character", name: "Character Design" },
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
      { id: 3, title: "Retail Store Design", student: "Maya Joshi", year: "2022", image: "/lovable-uploads/bd80ca6d-217b-4c7b-aa96-351c6bd06122.png" },
      { id: 4, title: "Restaurant Interior Design", student: "Karan Mehta", year: "2022", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop" },
    ],
    conceptual: [
      { id: 1, title: "Sustainable Living Space", student: "Divya Sharma", year: "2023", image: "/lovable-uploads/a9c8ce1e-1529-470a-8999-acff7698cf4f.png" },
      { id: 2, title: "Future Home Concept", student: "Rohan Kumar", year: "2023", image: "/lovable-uploads/34b0c2a2-04a5-4ea4-a255-4c1741233792.png" },
      { id: 3, title: "Biophilic Design Home", student: "Ananya Desai", year: "2022", image: "/lovable-uploads/eae8547f-d58b-4033-9238-f06feb28240f.png" },
      { id: 4, title: "Adaptive Reuse Project", student: "Sanjay Varma", year: "2022", image: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800&auto=format&fit=crop" },
    ],
  };
  
  const graphicProjects = {
    branding: [
      { id: 1, title: "Eco-friendly Brand Identity", student: "Priya Sharma", year: "2023", image: "/lovable-uploads/9e5f0918-e471-4105-8926-6e066cea868e.png" },
      { id: 2, title: "Tech Startup Branding", student: "Arjun Mehta", year: "2023", image: "/lovable-uploads/e50eadd7-d31e-4b3e-a69a-e005ba9bd014.png" },
      { id: 3, title: "Restaurant Chain Rebrand", student: "Meera Patel", year: "2022", image: "/lovable-uploads/12afaa33-a164-4018-8397-4f5e550f4203.png" },
      { id: 4, title: "Artisanal Coffee Branding", student: "Vikram Reddy", year: "2022", image: "https://images.unsplash.com/photo-1579438428425-67f2a4d83827?w=800&auto=format&fit=crop" },
    ],
    digital: [
      { id: 1, title: "Mobile App UI Design", student: "Kiran Kumar", year: "2023", image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop" },
      { id: 2, title: "E-commerce Website Redesign", student: "Aisha Khan", year: "2023", image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format&fit=crop" },
      { id: 3, title: "Social Media Campaign", student: "Rahul Joshi", year: "2022", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop" },
      { id: 4, title: "Interactive Infographics", student: "Divya Menon", year: "2022", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
    ],
    print: [
      { id: 1, title: "Magazine Layout Design", student: "Sanjay Varma", year: "2023", image: "/lovable-uploads/e147a9c5-a509-4f9d-9992-3a51afe37d7a.png" },
      { id: 2, title: "Annual Report Design", student: "Ananya Desai", year: "2023", image: "/lovable-uploads/3c658cbb-3091-4a72-bdd8-a2d236cb1511.png" },
      { id: 3, title: "Book Cover Series", student: "Rohan Murthy", year: "2022", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop" },
      { id: 4, title: "Packaging Design Collection", student: "Neha Gupta", year: "2022", image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&auto=format&fit=crop" },
    ],
  };
  
  // Animation & Game Design specific projects
  const animationProjects = {
    animation: [
      { id: 1, title: "Fantasy World Animation", student: "Arjun Kumar", year: "2023", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop" },
      { id: 2, title: "Animated Short Film", student: "Priya Singh", year: "2023", image: "https://images.unsplash.com/photo-1572177215132-5d7c8191f55f?w=800&auto=format&fit=crop" },
      { id: 3, title: "3D Character Animation", student: "Rohit Sharma", year: "2022", image: "https://images.unsplash.com/photo-1633355444132-695d5876cd00?w=800&auto=format&fit=crop" },
      { id: 4, title: "Motion Graphics Showreel", student: "Meera Joshi", year: "2022", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop" },
    ],
    game: [
      { id: 1, title: "Adventure Game Prototype", student: "Vikram Reddy", year: "2023", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop" },
      { id: 2, title: "Mobile Game UI Design", student: "Ananya Gupta", year: "2023", image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop" },
      { id: 3, title: "2D Platformer Game", student: "Karan Mehta", year: "2022", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop" },
      { id: 4, title: "VR Experience Design", student: "Tanya Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop" },
    ],
    character: [
      { id: 1, title: "Fantasy Character Design", student: "Rahul Verma", year: "2023", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop" },
      { id: 2, title: "Game Avatar Collection", student: "Sanjana Patel", year: "2023", image: "https://images.unsplash.com/photo-1634029466991-43a9d8635376?w=800&auto=format&fit=crop" },
      { id: 3, title: "Stylized Character Models", student: "Aditya Raj", year: "2022", image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?w=800&auto=format&fit=crop" },
      { id: 4, title: "Concept Art Series", student: "Nisha Kamdar", year: "2022", image: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?w=800&auto=format&fit=crop" },
    ],
  };
  
  // Choose projects based on program type
  let projects = graphicProjects;
  if (isInteriorDesignProgram) {
    projects = interiorProjects;
  } else if (isAnimationGameProgram) {
    projects = animationProjects;
  }
  
  // Choose default tab based on program type
  let defaultTabValue = "branding";
  if (isInteriorDesignProgram) {
    defaultTabValue = "residential";
  } else if (isAnimationGameProgram) {
    defaultTabValue = "animation";
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
