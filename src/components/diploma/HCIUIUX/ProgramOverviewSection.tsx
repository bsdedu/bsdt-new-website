
import React from 'react';
import { Users, PenTool, Briefcase } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCard } from '@/components/diploma/LandscapeDesign/overview/OverviewCard';
import { LearningOutcomesTab } from './overview-tabs/LearningOutcomesTab';
import { CurriculumTab } from './overview-tabs/CurriculumTab';
import { CareerPathsTab } from './overview-tabs/CareerPathsTab';


export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Master Human-Computer Interaction for UI/UX Design
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Professional Diploma in HCI for UI/UX is designed to give you a deep understanding of human behavior and psychology in digital interactions, combined with practical skills in interface design and usability testing.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <OverviewCard
              icon={<Users className="w-6 h-6 text-bsd-orange" />}
              title="Human-Centered Foundations"
              description="Build a deep understanding of human behavior, cognitive psychology, and user research — the foundation of every great digital experience."
            />
            <OverviewCard
              icon={<PenTool className="w-6 h-6 text-bsd-orange" />}
              title="Practical UI/UX Skills"
              description="Learn wireframing, prototyping, interface design, and usability testing through hands-on, studio-style sessions held every Saturday."
            />
            <OverviewCard
              icon={<Briefcase className="w-6 h-6 text-bsd-orange" />}
              title="Portfolio & Career"
              description="Graduate with a professional portfolio, industry-ready design systems knowledge, and the confidence to step into a UI/UX career."
            />
          </div>
        </RevealSection>


        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xl grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <CurriculumTab />
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
