
import React from 'react';
import { Brain, MousePointer, Layout } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const ProgramHighlights: React.FC = () => {
  return (
    <RevealSection delay={100}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-bsd-light-gray rounded-xl p-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-3">User-Centered Design</h3>
            <p className="text-foreground/70">
              Learn to research, analyze, and design for user needs, creating interfaces that are intuitive and accessible.
            </p>
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
              <MousePointer className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-3">Interaction Design</h3>
            <p className="text-foreground/70">
              Master the principles of interaction design to create engaging and seamless user experiences across digital platforms.
            </p>
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
              <Layout className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-3">Design Systems</h3>
            <p className="text-foreground/70">
              Develop skills in creating consistent design systems and component libraries for scalable product development.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
