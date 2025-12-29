
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const AboutSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section id="about" className="bg-bsd-light-gray relative overflow-hidden py-0">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-bsd-orange/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 my-[20px]">
        <div className="max-w-3xl mx-auto">
          <RevealSection direction="up" scale={true}>
            <div className="space-y-6 text-center">
              <Badge variant="bsdOrange">
                About BSD
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
                A Legacy of Excellence in Design & Technology Education
              </h2>
              <p className="text-foreground/70">For over 8 years, BSDT has been at the forefront of design and technology education in India. Our innovative curriculum, industry partnerships, and state-of-the-art facilities create an environment where creativity and technical skills flourish.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-2xl mx-auto">
                {["Industry-experienced faculty", "State-of-the-art labs and studios", "Strong industry connections", "Hands-on project-based learning"].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 p-2 rounded-md transition-all duration-300 ${activeFeature === index ? 'bg-white shadow-sm' : ''}`}
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-300 ${activeFeature === index ? 'text-bsd-orange' : 'text-bsd-orange/70'}`} />
                    <span className={`transition-colors duration-300 ${activeFeature === index ? 'text-foreground' : 'text-foreground/70'}`}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <AnimatedButton hoverEffect="glow">
                  Learn More About Us
                </AnimatedButton>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
