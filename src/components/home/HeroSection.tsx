
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { ArrowDown } from "lucide-react";

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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-sm text-foreground/60 mb-4">Campus Image Placeholder</p>
                  <div className="w-16 h-1 bg-foreground/10 mx-auto"></div>
                </div>
              </div>
            </div>
            
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
