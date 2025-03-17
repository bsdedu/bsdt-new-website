
import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Check, Eye, Brain, Target, Lightbulb, Puzzle, FileCode } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-bsd-gray">Key Learning Outcomes</h3>
        <p className="text-foreground/70">
          Upon successful completion of the BVA Animation & Game Design program, students will have acquired the following skills and competencies:
        </p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Eye className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Visual Storytelling</h4>
              <p className="text-sm text-foreground/70">Create compelling narratives through visual media and interactive experiences</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Brain className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Technical Proficiency</h4>
              <p className="text-sm text-foreground/70">Master industry-standard animation, modeling, and game development tools</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Puzzle className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Game Design</h4>
              <p className="text-sm text-foreground/70">Develop engaging gameplay systems, mechanics, and level designs</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <FileCode className="w-4 h-4 text-bsd-orange" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-bsd-gray">Technical Implementation</h4>
              <p className="text-sm text-foreground/70">Apply programming concepts to bring creative ideas to life in interactive media</p>
            </div>
          </li>
        </ul>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Industry-Relevant Skills</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-bsd-gray">Animation Expertise</h4>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">2D & 3D character animation techniques</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Motion capture & performance animation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Rigging & character setup</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-bsd-gray">Game Development</h4>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Game engine implementation (Unity, Unreal)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Gameplay programming & mechanics design</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">UI/UX design for interactive experiences</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-bsd-gray">Technical Art</h4>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">3D modeling & sculpting</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Texturing & materials creation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Lighting & rendering techniques</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-bsd-gray">Professional Skills</h4>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Project management & production pipelines</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Team collaboration & communication</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-bsd-orange mr-2" />
                  <span className="text-sm">Portfolio development & presentation</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
