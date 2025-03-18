
import React from 'react';
import { Card } from "@/components/ui-elements/Card";
import { CheckCircle2 } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const CurriculumTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">1</span>
            UX Design Modules
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>User Research & Methodologies</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Information Architecture</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>User Personas & Empathy Mapping</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Usability Testing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>UX Strategy & Planning</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Design Thinking Process</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">2</span>
            UI Design Modules
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Visual Design Principles</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>UI Components & Patterns</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Wireframing & Prototyping</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Responsive & Adaptive Design</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Design Systems Creation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <span>Interaction Design & Micro-animations</span>
            </li>
          </ul>
        </Card>
      </div>
    </RevealSection>
  );
};
