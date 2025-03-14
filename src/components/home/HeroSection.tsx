
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { ArrowDown } from "lucide-react";
import { RevealSection } from "../ui-elements/RevealSection";

export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 blur-3xl animate-image-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-200 to-pink-200 blur-3xl animate-image-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-6 max-w-2xl">
            <div 
              className={cn(
                "transition-all duration-700 transform",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="inline-block mb-4">
                <span className="chip bg-black/5 border border-black/10 text-foreground/70">
                  Admissions Open for 2023-24
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
                <span className="text-gradient block">Design Your Future</span>
                <span className="block mt-2">Innovate with Technology</span>
              </h1>
              <p className="mt-6 text-lg text-foreground/70 max-w-xl">
                Join a community of designers, innovators, and technologists who are shaping the future through creativity and technical excellence.
              </p>
            </div>

            <div 
              className={cn(
                "flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-300",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <AnimatedButton size="lg" withArrow>
                Explore Programs
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Take a Virtual Tour
              </AnimatedButton>
            </div>

            <div 
              className={cn(
                "pt-12 transition-all duration-700 delay-500",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <p className="text-sm text-foreground/50 mb-2">Recognized By</p>
              <div className="flex flex-wrap items-center gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="h-8 w-20 bg-foreground/5 rounded-md flex items-center justify-center"
                  >
                    <span className="text-xs text-foreground/40">Partner {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div 
            className={cn(
              "relative transition-all duration-1000 delay-300",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/30 shadow-xl">
              <img 
                src="/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png" 
                alt="Students collaborating at BSD Design & Tech College" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="text-sm font-medium">Collaborative learning at BSD Design & Tech College</p>
              </div>
            </div>
            
            {/* Student project image decorative element */}
            <RevealSection 
              direction="left" 
              delay={600} 
              className="absolute -bottom-12 -right-12 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg z-10"
            >
              <img 
                src="/lovable-uploads/e0344460-76de-492d-b4fc-2b7557c96db5.png" 
                alt="Student project" 
                className="w-full h-full object-cover"
              />
            </RevealSection>
            
            {/* Design discussion image decorative element */}
            <RevealSection 
              direction="up" 
              delay={800} 
              className="absolute -top-8 -left-8 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-10"
            >
              <img 
                src="/lovable-uploads/131f247b-d139-4d13-9a35-257c01ccdb84.png" 
                alt="Design discussion" 
                className="w-full h-full object-cover"
              />
            </RevealSection>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <a 
            href="#programs" 
            className="flex flex-col items-center justify-center text-foreground/50 hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
