import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CurriculumTab } from './overview-tabs/CurriculumTab';
import { CareerPathsTab } from './overview-tabs/CareerPathsTab';
import { LearningOutcomesTab } from './overview-tabs/LearningOutcomesTab';
import { SoftwareToolsTab } from './overview-tabs/SoftwareToolsTab';

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              PROGRAM OVERVIEW
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive AI & Service Design Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our program combines cutting-edge AI technologies with human-centered design principles 
              to prepare you for the future of service design and digital transformation.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="careers">Career Paths</TabsTrigger>
              <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
              <TabsTrigger value="tools">Software & Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum">
              <CurriculumTab />
            </TabsContent>

            <TabsContent value="careers">
              <CareerPathsTab />
            </TabsContent>

            <TabsContent value="outcomes">
              <LearningOutcomesTab />
            </TabsContent>

            <TabsContent value="tools">
              <SoftwareToolsTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};