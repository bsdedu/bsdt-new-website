
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgramHeader } from './ProgramHeader';
import { CurriculumTab } from './CurriculumTab';
import { LearningOutcomesTab } from './LearningOutcomesTab';
import { CareerOpportunitiesTab } from './CareerOpportunitiesTab';
import { SoftwareToolsTab } from './SoftwareToolsTab';
import { useIsMobile } from "@/hooks/use-mobile";

export const ProgramOverviewSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <ProgramHeader />

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className={`${isMobile ? 'flex flex-col space-y-2' : 'grid grid-cols-4'} w-full max-w-3xl`}>
                <TabsTrigger value="curriculum" className="w-full">Curriculum</TabsTrigger>
                <TabsTrigger value="software" className="w-full">Software & AI Tools</TabsTrigger>
                <TabsTrigger value="outcomes" className="w-full">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career" className="w-full">Career Opportunities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <CurriculumTab />
            </TabsContent>
            
            <TabsContent value="software" className="mt-0">
              <SoftwareToolsTab />
            </TabsContent>
            
            <TabsContent value="outcomes" className="mt-0">
              <LearningOutcomesTab />
            </TabsContent>
            
            <TabsContent value="career" className="mt-0">
              <CareerOpportunitiesTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
