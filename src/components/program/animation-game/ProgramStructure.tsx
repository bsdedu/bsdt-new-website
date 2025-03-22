
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check } from "lucide-react";

export const ProgramStructure: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-foreground/70">
            The BVA Animation & Game Design program is a 4-year full-time undergraduate course divided into 8 semesters. Each semester builds upon the last, developing both artistic skills and technical expertise.
          </p>
          
          <div className="space-y-4">
            <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Drawing & Visual Fundamentals</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Digital Art & Imaging Principles</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Principles of Animation & Movement</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Introduction to Game Design & Storytelling</span>
              </li>
            </ul>

            <h4 className="font-medium text-bsd-gray">Second Year: Core Skills</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>2D Character Design & Animation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>3D Modeling & Texturing Fundamentals</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Game Mechanics & Level Design</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Sound Design & Integration</span>
              </li>
            </ul>

            <h4 className="font-medium text-bsd-gray">Third Year: Advanced Applications</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>3D Character Animation & Rigging</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Visual Effects & Compositing</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Game Engine Scripting & Prototyping</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Multiplayer Game Design & User Experience</span>
              </li>
            </ul>

            <h4 className="font-medium text-bsd-gray">Fourth Year: Specialization & Portfolio</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Professional Practice & Project Management</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Specialized Studio (Animation/Games/VFX)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Capstone Project & Portfolio Development</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Industry Internship & Professional Networking</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
