
import React from 'react';
import { Card } from "@/components/ui-elements/Card";
import { Monitor, PenTool, Layers, Brain, Users } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const SoftwareAITab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-bsd-gray mb-4">Design & Prototyping Tools</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Monitor className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Figma</h4>
                <p className="text-sm text-foreground/70">UI design, prototyping, and collaboration</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Monitor className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Adobe XD</h4>
                <p className="text-sm text-foreground/70">UI/UX design and prototyping</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <PenTool className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Sketch</h4>
                <p className="text-sm text-foreground/70">Vector-based UI design</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Layers className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">InVision</h4>
                <p className="text-sm text-foreground/70">Prototyping and collaboration</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold text-bsd-gray mb-4">AI & Research Tools</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Brain className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Maze</h4>
                <p className="text-sm text-foreground/70">User testing platform</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Users className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Hotjar</h4>
                <p className="text-sm text-foreground/70">User behavior analytics</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Brain className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Midjourney</h4>
                <p className="text-sm text-foreground/70">AI image generation</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Brain className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">UXPin</h4>
                <p className="text-sm text-foreground/70">AI-assisted prototyping</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </RevealSection>
  );
};
