
import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-bsd-gray mb-1">User Research Expertise</h3>
              <p className="text-foreground/70">Ability to conduct user research, create personas, and translate insights into effective design solutions.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-bsd-gray mb-1">Interface Design Skills</h3>
              <p className="text-foreground/70">Mastery of visual design principles and the ability to create aesthetically pleasing, functional interfaces.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-bsd-gray mb-1">Prototyping & Testing</h3>
              <p className="text-foreground/70">Skills in creating interactive prototypes and conducting usability tests to validate design decisions.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-bsd-gray mb-1">Design Systems Creation</h3>
              <p className="text-foreground/70">Ability to develop and maintain consistent design systems and component libraries.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-bsd-gray mb-1">Industry Tool Proficiency</h3>
              <p className="text-foreground/70">Expertise in professional UI/UX design tools like Figma, Adobe XD, and prototyping platforms.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-bsd-gray mb-1">Professional Portfolio</h3>
              <p className="text-foreground/70">Creation of a comprehensive UI/UX design portfolio showcasing your problem-solving approach and design skills.</p>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
