import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import hciLearning1 from "@/assets/hci-uiux-learning-1.png";
import hciLearning2 from "@/assets/hci-uiux-learning-2.png";
import hciLearning3 from "@/assets/hci-uiux-learning-3.png";
import hciLearning4 from "@/assets/hci-uiux-learning-4.png";

export const GenerativeAIPhotosSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={hciLearning1} 
                alt="UX wireframing and interface sketching" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={hciLearning2} 
                alt="UI/UX wireframe layout sketch on desk" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={hciLearning3} 
                alt="Homepage wireframe and web design sketches" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={hciLearning4} 
                alt="Professional working on 3D design software" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
