import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurriculumTab } from './overview-tabs/CurriculumTab';
import { LearningOutcomesTab } from './overview-tabs/LearningOutcomesTab';
import { CareerPathsTab } from './overview-tabs/CareerPathsTab';
import { SoftwareToolsTab } from './overview-tabs/SoftwareToolsTab';

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Master Fashion Design in 8 Months
            </h2>
            <p className="mt-4 text-foreground/70">
              Our intensive Professional Diploma in Fashion Design combines creative expression 
              with technical expertise, preparing you for a successful career in the fashion industry.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xl grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="careers">Career Paths</TabsTrigger>
                <TabsTrigger value="tools">Design Tools</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <CurriculumTab />
            </TabsContent>
            
            <TabsContent value="outcomes" className="mt-0">
              <LearningOutcomesTab />
            </TabsContent>
            
            <TabsContent value="careers" className="mt-0">
              <CareerPathsTab />
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <SoftwareToolsTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
