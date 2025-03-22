
import React from 'react';
import { Palette, Monitor, Users, BriefcaseBusiness, PenTool, Layout } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";

export const ProgramHighlights: React.FC = () => {
  return (
    <Card className="bg-bsd-orange/5 border-bsd-orange/20">
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Program Highlights</h3>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Palette className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Industry-Standard Design Studios</h4>
              <p className="text-sm text-foreground/70">Fully equipped Mac labs with professional design software</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Monitor className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Adobe Creative Cloud Expertise</h4>
              <p className="text-sm text-foreground/70">Photoshop, Illustrator, InDesign, After Effects, and more</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Users className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Working Designer Faculty</h4>
              <p className="text-sm text-foreground/70">Learn from professionals with active industry careers</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Real Client Projects</h4>
              <p className="text-sm text-foreground/70">Work with actual businesses and organizations</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <PenTool className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Design Thinking Approach</h4>
              <p className="text-sm text-foreground/70">Learn problem-solving methodologies beyond software skills</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Layout className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Multi-disciplinary Exposure</h4>
              <p className="text-sm text-foreground/70">Collaborate with students from other design disciplines</p>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
