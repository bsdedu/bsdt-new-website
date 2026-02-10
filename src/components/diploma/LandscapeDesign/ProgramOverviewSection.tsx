
import React from 'react';
import { PenTool, Leaf, Mountain } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCard } from './overview/OverviewCard';
import { CurriculumTabContent } from './overview/CurriculumTabContent';
import { LearningOutcomesTabContent } from './overview/LearningOutcomesTabContent';
import { CareerPathsTabContent } from './overview/CareerPathsTabContent';

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Professional Post Graduate Diploma in Landscape Design
            </h2>
            <p className="mt-4 text-foreground/70">
              This 12-month hybrid program blends live online classes with offline, real-world learning at our Bangalore campus or Satellite Partner Centres in Chhattisgarh, Hyderabad, Delhi & Coimbatore. Online sessions cover core areas including design fundamentals, planting design, ecological planning, site planning, material applications, and cost estimation.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <OverviewCard
              icon={<PenTool className="w-6 h-6 text-bsd-orange" />}
              title="Design Fundamentals"
              description="Master the core areas of landscape design including design fundamentals, planting design, ecological planning, site planning, and material applications."
            />
            <OverviewCard
              icon={<Leaf className="w-6 h-6 text-bsd-orange" />}
              title="Software Proficiency"
              description="Build strong technical proficiency through hands-on training in AutoCAD, SketchUp, and other digital tools essential to professional landscape practice."
            />
            <OverviewCard
              icon={<Mountain className="w-6 h-6 text-bsd-orange" />}
              title="Studio Projects"
              description="Develop landscape solutions for residential, public, and commercial environments through Design Studio projects, supported by critiques and structured feedback."
            />
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              </TabsList>
            </div>

            <CurriculumTabContent />
            <LearningOutcomesTabContent />
            <CareerPathsTabContent />
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
