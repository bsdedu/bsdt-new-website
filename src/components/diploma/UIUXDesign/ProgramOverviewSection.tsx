
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgramHighlights } from './ProgramHighlights';
import { CurriculumTab } from './tabs/CurriculumTab';
import { SoftwareAITab } from './tabs/SoftwareAITab';
import { LearningOutcomesTab } from './tabs/LearningOutcomesTab';
import { CareerPathsTab } from './tabs/CareerPathsTab';

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Professional Diploma in UI/UX Design
            </h2>
            <p className="mt-4 text-foreground/70">
              A comprehensive program that focuses on user-centered design principles, interaction design methodologies, and creating exceptional digital experiences.
            </p>
          </div>
        </RevealSection>

        <ProgramHighlights />

        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="software">Software & AI</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <CurriculumTab />
            </TabsContent>
            
            <TabsContent value="software" className="mt-0">
              <SoftwareAITab />
            </TabsContent>
            
            <TabsContent value="learning-outcomes" className="mt-0">
              <LearningOutcomesTab />
            </TabsContent>
            
            <TabsContent value="career-paths" className="mt-0">
              <CareerPathsTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
