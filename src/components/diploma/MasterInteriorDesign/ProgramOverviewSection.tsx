import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from 'lucide-react';
import { CurriculumTab } from './overview-tabs/CurriculumTab';
import { LearningOutcomesTab } from './overview-tabs/LearningOutcomesTab';
import { CareerPathsTab } from './overview-tabs/CareerPathsTab';
import { SoftwareToolsTab } from './overview-tabs/SoftwareToolsTab';

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              Program Overview
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-6">
              Master Advanced Interior Design & Leadership
            </h2>
            <p className="text-lg text-foreground/70">
              Our Master Diploma in Interior Design is an advanced program designed for design professionals and graduates seeking to elevate their expertise in interior design, project management, and design leadership.
            </p>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <RevealSection delay={100}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-bsd-gray">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Advanced curriculum covering contemporary interior design theories and practices</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Focus on project management and design leadership skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Integration of cutting-edge technology and sustainable design practices</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Real-world projects with industry mentorship</p>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-bsd-gray">What You'll Learn</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Advanced space planning and design methodology</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Project management and client relationship management</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Sustainable design principles and material innovation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Advanced visualization and presentation techniques</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={300}>
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
              <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              <TabsTrigger value="software-tools">Software & Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum" className="mt-8">
              <CurriculumTab />
            </TabsContent>
            
            <TabsContent value="learning-outcomes" className="mt-8">
              <LearningOutcomesTab />
            </TabsContent>
            
            <TabsContent value="career-paths" className="mt-8">
              <CareerPathsTab />
            </TabsContent>
            
            <TabsContent value="software-tools" className="mt-8">
              <SoftwareToolsTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};