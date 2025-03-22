
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Program Learning Outcomes</h3>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-bsd-gray">Knowledge & Understanding</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Understanding of spatial design principles and interior architecture</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Knowledge of materials, finishes, lighting, and color theory</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Awareness of building systems, codes, and regulatory requirements</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Understanding of sustainability principles in interior design</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-bsd-gray">Skills & Abilities</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Proficiency in spatial planning and organization</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Ability to develop creative design solutions for diverse spaces</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Expertise in visualization, modeling, and technical documentation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Competence in project management and client communication</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-medium text-bsd-gray">Professional Development</h4>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Portfolio development and professional presentation skills</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Understanding of design ethics and professional practice</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Ability to work collaboratively in multidisciplinary teams</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Critical thinking and problem-solving for complex design challenges</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
