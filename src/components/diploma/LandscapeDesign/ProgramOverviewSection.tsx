
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
              Post Graduate Diploma in Landscape Design
            </h2>
            <p className="mt-4 text-foreground/70">
              A comprehensive program that equips students with the knowledge and skills to design sustainable, functional, and aesthetically pleasing outdoor spaces across various scales and contexts.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <OverviewCard
              icon={<PenTool className="w-6 h-6 text-bsd-orange" />}
              title="Design Principles"
              description="Master the fundamental principles of landscape architecture, spatial composition, and visual aesthetics essential for creating harmonious outdoor environments."
            />
            <OverviewCard
              icon={<Leaf className="w-6 h-6 text-bsd-orange" />}
              title="Ecological Knowledge"
              description="Develop understanding of plant materials, ecosystems, and sustainable practices for environmentally responsible landscape design solutions."
            />
            <OverviewCard
              icon={<Mountain className="w-6 h-6 text-bsd-orange" />}
              title="Technical Skills"
              description="Learn site analysis, grading, drainage, construction methods, and digital visualization tools used in professional landscape design practice."
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
