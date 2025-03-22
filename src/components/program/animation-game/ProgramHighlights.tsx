
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Gamepad, Film, Monitor, Headset, Code, Tv } from "lucide-react";

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
              <Gamepad className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">State-of-the-Art Game Lab</h4>
              <p className="text-sm text-foreground/70">High-end gaming PCs and the latest development tools</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Film className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Animation Studio</h4>
              <p className="text-sm text-foreground/70">Professional-grade animation and rendering equipment</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Monitor className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Industry Partnerships</h4>
              <p className="text-sm text-foreground/70">Collaborate with gaming and animation studios</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Headset className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">AR/VR Lab</h4>
              <p className="text-sm text-foreground/70">Experiment with the latest in immersive technology</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Code className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Game Programming</h4>
              <p className="text-sm text-foreground/70">Learn essential coding concepts for game development</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Tv className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Multimedia Lab</h4>
              <p className="text-sm text-foreground/70">Create and edit high-quality digital content</p>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
