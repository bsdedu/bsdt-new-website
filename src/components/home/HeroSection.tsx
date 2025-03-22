
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";

export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Images for the student showcase carousel
  const studentImages = ["/lovable-uploads/fc9c4875-4b4b-44a9-b8ad-3eb5db1ed2cc.png", "/lovable-uploads/0ae77c0c-8ef4-404c-abf0-bb90598dfbf4.png", "/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png"];
  const imageDescriptions = ["Students celebrating at BSDT annual showcase event", "International Mentors engaging with students on design projects", "Innovative learning at BSDT"];

  // Handle auto-play functionality manually
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);
  }, [api]);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to #${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Found section #${sectionId}, scrolling to it`);
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header
        behavior: 'smooth',
      });
    } else {
      console.log(`Section #${sectionId} not found`);
    }
  };

  // Setup auto-play when the carousel api is available
  useEffect(() => {
    if (!api) return;
    startAutoPlay();

    // Add event listeners to pause/resume auto-play on user interaction
    api.on("pointerDown", () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    });
    api.on("pointerUp", () => {
      startAutoPlay();
    });
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, startAutoPlay]);
  
  useEffect(() => {
    setIsLoaded(true);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return <section className="relative min-h-screen flex items-center overflow-hidden pt-10 pb-30 py-0">
      {/* Background Elements with Images */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/80 z-10"></div>
        <img src="/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png" alt="Background pattern" className="absolute w-full h-full object-cover opacity-10 blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 py-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-4 max-w-2xl">
            <div className={cn("transition-all duration-700 transform", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              <Badge variant="bsdOrange" className="mb-4">
                Admissions Open for 2025-26
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
                <span className="text-gradient block my-0 py-[4px]">Design Your Future</span>
                <span className="block mt-2 text-bsd-orange">Innovate with Technology</span>
              </h1>
              <p className="mt-6 text-lg text-foreground/70 max-w-xl">
                Join a community of designers, innovators, and technologists who are shaping the future through creativity and technical excellence.
              </p>
            </div>

            <div className={cn("flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-300", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              <AnimatedButton 
                size="lg" 
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
              </AnimatedButton>
              <AnimatedButton 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('about')}
              >
                Take a Virtual Tour
              </AnimatedButton>
            </div>

            <div className={cn("pt-8 transition-all duration-700 delay-500", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              <p className="text-sm text-bsd-gray mb-2">Affiliations & Academic Partnerships</p>
              <div className="flex items-center gap-6 lg:gap-10 w-full overflow-x-auto pb-3 no-scrollbar">
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/b6c8d2f5-ebe8-45b6-98da-bacea2355570.png" alt="Bengaluru North University Logo" className="h-12 object-contain" />
                  <p className="text-xs text-bsd-gray mt-1">Bengaluru North University</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/afbe5d7f-0f77-458a-a6ab-59ecf5a77828.png" alt="University of Mysore Logo" className="h-12 object-contain" />
                  <p className="text-xs text-bsd-gray mt-1">University of Mysore</p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img src="/lovable-uploads/f284706f-8b61-4bc4-a155-140c043df786.png" alt="College de Paris Logo" className="h-10 object-contain" />
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img src="/lovable-uploads/c1b6a8e1-981e-4ce5-b0b1-cab0978b0556.png" alt="CRESTA Logo" className="h-8 object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className={cn("relative transition-all duration-1000 delay-300", isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
            {/* Using Carousel component for better image display */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Carousel className="w-full" opts={{
              loop: true,
              duration: 50
            }} setApi={setApi}>
                <CarouselContent>
                  {studentImages.map((image, index) => <CarouselItem key={index}>
                      <div className="relative">
                        <div className="aspect-[4/3] w-full">
                          <img src={image} alt={imageDescriptions[index]} className="w-full h-full object-cover" />
                        </div>
                        
                        {/* Caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-bsd-gray/80 to-transparent text-white">
                          <p className="text-lg md:text-xl font-medium drop-shadow-md">{imageDescriptions[index]}</p>
                        </div>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-foreground" />
                <CarouselNext className="right-4 bg-white/80 hover:bg-white text-foreground" />
              </Carousel>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-bsd-orange/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-bsd-gray/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
