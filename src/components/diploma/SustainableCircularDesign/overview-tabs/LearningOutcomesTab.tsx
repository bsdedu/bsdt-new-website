import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Leaf, Recycle, Calculator, TreePine, Lightbulb, BookOpen, Target, Award } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Leaf className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Sustainable Design Mastery</h3>
            <p className="text-sm text-foreground/70">
              Apply sustainable design principles to create products and systems that minimize environmental impact while maximizing functionality and aesthetics.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Recycle className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Circular Economy Expertise</h3>
            <p className="text-sm text-foreground/70">
              Design and implement circular economy models that eliminate waste, extend product lifecycles, and create closed-loop systems for resource efficiency.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Calculator className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Life Cycle Assessment</h3>
            <p className="text-sm text-foreground/70">
              Conduct comprehensive life cycle assessments to evaluate environmental impacts and make data-driven decisions for sustainable design solutions.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <TreePine className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Material Innovation</h3>
            <p className="text-sm text-foreground/70">
              Select and specify sustainable materials, including bio-based alternatives, recycled content, and renewable resources for design applications.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Lightbulb className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Biomimicry Application</h3>
            <p className="text-sm text-foreground/70">
              Apply biomimicry principles to develop innovative design solutions inspired by nature's efficient and sustainable systems.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <BookOpen className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Systems Thinking</h3>
            <p className="text-sm text-foreground/70">
              Understand complex environmental and social systems to design holistic solutions that address interconnected sustainability challenges.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Target className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Carbon Impact Reduction</h3>
            <p className="text-sm text-foreground/70">
              Calculate carbon footprints and design strategies to minimize greenhouse gas emissions throughout product and system lifecycles.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Award className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Professional Portfolio</h3>
            <p className="text-sm text-foreground/70">
              Develop a comprehensive portfolio showcasing sustainable design projects, environmental impact assessments, and innovative green solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};