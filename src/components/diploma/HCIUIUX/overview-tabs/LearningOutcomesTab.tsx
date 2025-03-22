
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { BrainCircuit, Users, PenTool, Lightbulb, LayoutGrid, SearchCheck, EyeCheck, Palette } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <BrainCircuit className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Human-Centered Thinking</h3>
            <p className="text-sm text-foreground/70">
              Apply principles of human cognition and psychology to design digital products that align with how users think, perceive, and make decisions.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Users className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">User Research Expertise</h3>
            <p className="text-sm text-foreground/70">
              Plan and conduct effective user research using various methodologies, analyze findings, and translate insights into actionable design recommendations.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <LayoutGrid className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Information Architecture</h3>
            <p className="text-sm text-foreground/70">
              Create logical information hierarchies and navigation systems that help users find information easily and complete tasks efficiently.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <PenTool className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Prototyping Skills</h3>
            <p className="text-sm text-foreground/70">
              Develop both low and high-fidelity prototypes using industry-standard tools to communicate design concepts and test with users before development.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Palette className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Visual Design Fluency</h3>
            <p className="text-sm text-foreground/70">
              Apply visual design principles to create aesthetically pleasing interfaces that reinforce brand identity while enhancing usability and accessibility.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <SearchCheck className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Usability Evaluation</h3>
            <p className="text-sm text-foreground/70">
              Design and conduct various types of usability tests, interpret results, and apply findings to iterate and improve digital products.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <EyeCheck className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Accessibility Standards</h3>
            <p className="text-sm text-foreground/70">
              Implement inclusive design practices and ensure digital products meet international accessibility standards for users with diverse abilities.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Lightbulb className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Design Portfolio</h3>
            <p className="text-sm text-foreground/70">
              Create a professional portfolio that effectively showcases your design process, problem-solving abilities, and final solutions to potential employers.
            </p>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};
