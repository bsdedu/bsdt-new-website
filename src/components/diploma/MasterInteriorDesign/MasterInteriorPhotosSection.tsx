import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import masterInteriorLearning1 from "@/assets/master-interior-learning-1.png";
import masterInteriorLearning2 from "@/assets/master-interior-learning-2.png";

export const MasterInteriorPhotosSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={masterInteriorLearning1} 
                alt="Residential design planning and architectural blueprints"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={masterInteriorLearning2} 
                alt="Master diploma residential design students working on projects" 
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
                src="/lovable-uploads/graphic-students-4.jpg" 
                alt="Faculty conducting design lecture session" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
