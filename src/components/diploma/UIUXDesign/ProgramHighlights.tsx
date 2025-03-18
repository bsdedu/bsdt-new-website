
import React from 'react';
import { Brain, MousePointer, Layout, Lightbulb } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const ProgramHighlights: React.FC = () => {
  return (
    <RevealSection delay={100}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-bsd-light-gray rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-3">User-Centered Design</h3>
            <p className="text-foreground/70">
              Master research methodologies, persona development, and design principles that put user needs at the forefront of every digital solution.
            </p>
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
              <MousePointer className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-3">Interaction Design</h3>
            <p className="text-foreground/70">
              Learn to create intuitive, engaging, and responsive interactions that guide users naturally through digital experiences across platforms.
            </p>
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
              <Layout className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-3">Design Systems</h3>
            <p className="text-foreground/70">
              Develop comprehensive design frameworks with reusable components that ensure consistency, scalability, and efficient collaboration.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
