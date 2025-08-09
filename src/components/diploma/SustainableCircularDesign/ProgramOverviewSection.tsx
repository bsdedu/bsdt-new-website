import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LearningOutcomesTab } from './overview-tabs/LearningOutcomesTab';
import { CurriculumTab } from './overview-tabs/CurriculumTab';
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
              Master Sustainable Design & Circular Economy
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Professional Diploma in Sustainable System & Circular Design equips you with knowledge and skills to create environmentally responsible design solutions that contribute to a sustainable future.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-bsd-gray">Program Highlights</h3>
              <div className="space-y-4">
                <p className="text-foreground/70">
                  The Professional Diploma in Sustainable System & Circular Design is a comprehensive 12-month program that combines theoretical knowledge with practical application of sustainable design principles. You'll learn to integrate environmental considerations into every aspect of the design process.
                </p>
                <p className="text-foreground/70">
                  With a focus on circular economy principles, life cycle assessment, and sustainable materials, this program prepares you for a career in the growing field of sustainable design, where environmental responsibility meets innovative creativity.
                </p>
                <p className="text-foreground/70">
                  The curriculum covers emerging trends in sustainable technology, renewable energy integration, and biomimicry, ensuring that graduates are equipped with cutting-edge knowledge for the green economy.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-bsd-gray">What You Will Learn</h3>
              <ul className="space-y-3 list-disc pl-5 text-foreground/70">
                <li>Principles of sustainable design and circular economy</li>
                <li>Life cycle assessment and environmental impact analysis</li>
                <li>Sustainable materials selection and sourcing</li>
                <li>Renewable energy systems and green technology</li>
                <li>Waste reduction and recycling strategies</li>
                <li>Biomimicry and nature-inspired design</li>
                <li>Sustainable packaging and product design</li>
                <li>Green building and eco-architecture principles</li>
                <li>Carbon footprint calculation and reduction</li>
                <li>Portfolio development for sustainable design careers</li>
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xl grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
                <TabsTrigger value="software-tools">Software & Tools</TabsTrigger>
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
            
            <TabsContent value="software-tools" className="mt-0">
              <SoftwareToolsTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};