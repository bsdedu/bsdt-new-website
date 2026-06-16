import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Sparkles, Lightbulb, Layers, Rocket, Compass, GraduationCap, Wand2, Brush } from "lucide-react";

const outcomes = [
  { icon: Sparkles, title: "AI Fluency for Design", desc: "Understand AI capabilities in design and apply prompt strategies for controlled, repeatable outputs." },
  { icon: Lightbulb, title: "Concept Exploration", desc: "Generate rapid concepts, moodboards, and style variations for interiors, architecture, branding, and products." },
  { icon: Layers, title: "Software Integration", desc: "Integrate AI workflows with Adobe Photoshop, SketchUp, and Autodesk Revit environments." },
  { icon: Wand2, title: "Asset Conversion", desc: "Convert AI-generated concepts into usable, production-ready design assets." },
  { icon: Rocket, title: "Production Efficiency", desc: "Use batch generation, variation systems, and automation to reduce project timelines." },
  { icon: Compass, title: "Domain Specialisation", desc: "Build deep workflows in one chosen track: interiors, branding, UI/UX, or product design." },
  { icon: Brush, title: "Visual Storytelling", desc: "Translate AI outputs into structured design ideas and compelling presentations for clients." },
  { icon: GraduationCap, title: "AI-enabled Positioning", desc: "Build a portfolio of AI-integrated projects and position yourself as an AI-enabled designer." },
];

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomes.map((o, i) => {
          const Icon = o.icon;
          return (
            <Card key={i} className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
                  <Icon className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-lg font-semibold text-bsd-gray mb-2">{o.title}</h3>
                <p className="text-sm text-foreground/70">{o.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </RevealSection>
  );
};
