
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background Elements with Images */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/80 z-10"></div>
        <img src="/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png" alt="Background pattern" className="absolute w-full h-full object-cover opacity-10 blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-6 max-w-2xl">
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
              <AnimatedButton size="lg" withArrow>
                Explore Programs
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Take a Virtual Tour
              </AnimatedButton>
            </div>

            <div className={cn("pt-12 transition-all duration-700 delay-500", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              <p className="text-sm text-bsd-gray mb-2">Recognized By</p>
              <div className="flex flex-wrap items-center gap-8">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-8 w-20 bg-bsd-light-gray rounded-md flex items-center justify-center">
                    <span className="text-xs text-bsd-gray/60">Partner {i}</span>
                  </div>)}
              </div>
            </div>
          </div>

          <div className={cn("relative transition-all duration-1000 delay-300", isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/30 shadow-xl">
              <img src="/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png" alt="Students at BSD Design & Tech College" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-bsd-gray/30 to-transparent"></div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bsd-gray/60 to-transparent text-white">
                <p className="text-sm font-medium">Innovative learning at BSD Design & Tech College</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-bsd-orange/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-bsd-gray/10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <a href="#programs" className="flex flex-col items-center justify-center text-bsd-gray/60 hover:text-bsd-orange transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>;
};
