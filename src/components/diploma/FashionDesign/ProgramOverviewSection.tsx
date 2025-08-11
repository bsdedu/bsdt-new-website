import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { CurriculumTab } from './overview-tabs/CurriculumTab';
import { LearningOutcomesTab } from './overview-tabs/LearningOutcomesTab';
import { CareerPathsTab } from './overview-tabs/CareerPathsTab';
import { SoftwareToolsTab } from './overview-tabs/SoftwareToolsTab';

export const ProgramOverviewSection: React.FC = () => {
  const highlights = [
    "Industry-focused curriculum designed by fashion professionals",
    "Hands-on garment construction and pattern making experience",
    "Fashion illustration and digital design mastery",
    "Textile knowledge and sustainable fashion practices",
    "Portfolio development for fashion industry entry",
    "Collaboration with fashion brands and designers"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              PROGRAM OVERVIEW
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Master Fashion Design in 6 Months
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our intensive Professional Diploma in Fashion Design combines creative expression 
              with technical expertise, preparing you for a successful career in the fashion industry.
            </p>
            
            {/* Program Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
              <TabsTrigger value="careers">Career Paths</TabsTrigger>
              <TabsTrigger value="tools">Design Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum">
              <CurriculumTab />
            </TabsContent>
            
            <TabsContent value="outcomes">
              <LearningOutcomesTab />
            </TabsContent>
            
            <TabsContent value="careers">
              <CareerPathsTab />
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