import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import landscapeModel1 from "@/assets/landscape-model-1.jpg.asset.json";
import landscapeStudio2 from "@/assets/landscape-studio-2.jpg.asset.json";

export const LandscapePhotosSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={landscapeModel1.url} 
                alt="Architectural model of a residence with landscaped planting" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={landscapeStudio2.url} 
                alt="Students working together on a landscape design model" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/lovable-uploads/graphic-students-3.jpg" 
                alt="Student researching design inspiration" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/lovable-uploads/landscape-origami.jpg" 
                alt="Hand-crafted paper model of the Eiffel Tower with origami figures" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
