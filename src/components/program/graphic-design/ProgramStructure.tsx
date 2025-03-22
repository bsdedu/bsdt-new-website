
import React from 'react';
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";

export const ProgramStructure: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-foreground/70">
            The BVA Graphic & Communication Design program is a 4-year full-time undergraduate course divided into 8 semesters. Each semester builds upon the last, developing both theoretical knowledge and practical design skills.
          </p>
          
          <div className="space-y-4">
            <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Design Fundamentals & Visual Language</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Typography & Color Theory</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>History of Graphic Design & Visual Arts</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Drawing & Illustration Fundamentals</span>
              </li>
            </ul>

            <h4 className="font-medium text-bsd-gray">Second Year: Core Design</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Corporate Identity & Branding</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Digital Design & UI Fundamentals</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Publication Design & Editorial Layout</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Photography & Image Manipulation</span>
              </li>
            </ul>

            <h4 className="font-medium text-bsd-gray">Third Year: Advanced Applications</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Motion Graphics & Animation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>UX Design & Interactive Media</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Packaging Design & 3D Applications</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Advertising & Campaign Design</span>
              </li>
            </ul>

            <h4 className="font-medium text-bsd-gray">Fourth Year: Specialization & Portfolio</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Professional Practice & Design Management</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Specialized Design Studio (Print/Digital/Branding)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Capstone Project & Thesis Development</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Portfolio Development & Industry Internship</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
