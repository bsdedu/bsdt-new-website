
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";

export const AnimationStudioSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">UNIQUE ADVANTAGE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Animation & Game Lab: Learn by Creating
            </h2>
            <p className="mt-4 text-foreground/70">
              Experience real-world animation and game development projects in our specialized labs.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&auto=format&fit=crop" 
                alt="Animation & Game Design Lab" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Animation & Game Lab</h3>
                  <p className="text-white/80">Students working on commercial animation and game projects</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-bsd-gray">A Unique Learning Experience</h3>
              <p className="text-foreground/70">
                Our specialized Animation & Game Lab provides students with access to professional-grade equipment and software used in the industry. Students work on real projects with industry clients, gaining valuable practical experience.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-bsd-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bsd-gray">Work on Real Client Projects</h4>
                    <p className="text-sm text-foreground/70">Experience the entire production pipeline from concept to final delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-bsd-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bsd-gray">Mentorship from Industry Professionals</h4>
                    <p className="text-sm text-foreground/70">Learn directly from experienced animators and game developers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-bsd-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bsd-gray">Build a Professional Demo Reel</h4>
                    <p className="text-sm text-foreground/70">Graduate with a portfolio of actual commercial projects</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-bsd-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bsd-gray">Network with Industry Clients</h4>
                    <p className="text-sm text-foreground/70">Develop connections with potential employers while still studying</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <AnimatedButton asChild>
                  <a href="#enquiry-form" className="hover:no-underline">Apply Now</a>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
