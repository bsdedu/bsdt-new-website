
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "../ui-elements/RevealSection";

interface ProgramHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const ProgramHero: React.FC<ProgramHeroProps> = ({ 
  title, 
  subtitle,
  backgroundImage
}) => {
  return (
    <section className="relative py-32 flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <RevealSection>
          <div className="max-w-3xl">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/90">
              {subtitle}
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
