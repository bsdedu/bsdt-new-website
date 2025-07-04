import React from 'react';
import { Cpu, Database, Shield } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CareerOpportunitiesTab } from './CareerOpportunitiesTab';
import { LearningOutcomesTab } from './LearningOutcomesTab';
import { SoftwareToolsTab } from './SoftwareToolsTab';
import { CurriculumTab } from './CurriculumTab';

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              B.Sc Computer Science with Data Analytics, Cyber Security & AI/ML
            </h2>
            <p className="mt-4 text-foreground/70">
              A comprehensive 3-year undergraduate program that combines core computer science principles with specialized tracks in data analytics, cybersecurity, and AI/ML, preparing students for the digital future.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Computer Science Foundation</h3>
                <p className="text-foreground/70">
                  Master programming fundamentals, data structures, algorithms, and software development methodologies that form the backbone of computer science education.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Data Analytics & AI/ML</h3>
                <p className="text-foreground/70">
                  Learn to analyze complex datasets, apply statistical methods, implement machine learning algorithms, and create intelligent solutions using industry-standard tools.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Cyber Security</h3>
                <p className="text-foreground/70">
                  Develop skills to protect digital assets, identify vulnerabilities, respond to security incidents, and implement robust security measures against evolving cyber threats.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xl grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="software-tools">Software Tools</TabsTrigger>
                <TabsTrigger value="career-opportunities">Career Opportunities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <CurriculumTab />
            </TabsContent>
            
            <TabsContent value="learning-outcomes" className="mt-0">
              <LearningOutcomesTab />
            </TabsContent>
            
            <TabsContent value="software-tools" className="mt-0">
              <SoftwareToolsTab />
            </TabsContent>
            
            <TabsContent value="career-opportunities" className="mt-0">
              <CareerOpportunitiesTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
