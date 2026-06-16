
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
              Integrate AI Into Real-World Design Production
            </h2>
            <p className="mt-4 text-foreground/70">
              The Professional Diploma in Generative AI for Design Practice (PD in Gen AI) is a 6-month Saturday program focused on how artificial intelligence is transforming design workflows across architecture, interiors, visual communication, and digital design.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-bsd-gray">Program Highlights</h3>
              <div className="space-y-4">
                <p className="text-foreground/70">
                  Rather than teaching isolated tools, the course is built around integrating AI into actual design production systems. Students learn how to generate ideas faster, refine them into usable outputs, and deliver projects efficiently in professional environments.
                </p>
                <p className="text-foreground/70">
                  The emphasis is on speed, scalability, and real-world application—enabling designers to increase productivity, improve client communication, and expand their earning potential.
                </p>
                <p className="text-foreground/70">
                  Classes are held every Saturday at our Bangalore campus through a hybrid model that combines online sessions with hands-on offline engagement.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-bsd-gray">What You Will Learn</h3>
              <ul className="space-y-3 list-disc pl-5 text-foreground/70">
                <li>AI capabilities in design and practical use cases</li>
                <li>Prompt strategy for controlled, repeatable outputs</li>
                <li>Generative tools such as Midjourney and DALL·E</li>
                <li>Rapid concept generation and moodboarding</li>
                <li>AI workflows integrated with Adobe Photoshop and SketchUp</li>
                <li>AI integration in Autodesk Revit environments</li>
                <li>Converting AI concepts into usable design assets</li>
                <li>Batch generation, variation systems, and automation</li>
                <li>Domain-focused application tracks (interiors, branding, UI/UX, product)</li>
                <li>Portfolio creation and positioning as an AI-enabled designer</li>
              </ul>
            </div>
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
