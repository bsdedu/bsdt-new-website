import React, { useState } from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LearningOutcomesTab } from './LearningOutcomesTab';
import { CareerOpportunitiesTab } from './CareerOpportunitiesTab';
import { SoftwareToolsTab } from './SoftwareToolsTab';

export const ProgramOverviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Innovate Through Product Design
            </h2>
            <p className="mt-4 text-foreground/70">
              Our comprehensive BVA Product Design program combines creativity with technical expertise, preparing you to design products that enhance human experience and solve real-world challenges.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-bsd-gray">Program Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Design Thinking</h4>
                        <p className="text-foreground/70 text-sm">Master human-centered design methodologies and creative problem-solving approaches.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Prototyping & Manufacturing</h4>
                        <p className="text-foreground/70 text-sm">Learn rapid prototyping, 3D modeling, and manufacturing processes for product development.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">User Experience</h4>
                        <p className="text-foreground/70 text-sm">Understand user research, ergonomics, and usability testing for product optimization.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Sustainable Design</h4>
                        <p className="text-foreground/70 text-sm">Explore eco-friendly materials, circular design principles, and sustainable manufacturing.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-bsd-gray">Curriculum Structure</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-bsd-orange pl-4">
                      <h4 className="font-medium text-bsd-gray">Year 1: Foundation</h4>
                      <p className="text-foreground/70 text-sm">Design fundamentals, sketching, materials, and basic 3D modeling</p>
                    </div>
                    <div className="border-l-4 border-bsd-orange pl-4">
                      <h4 className="font-medium text-bsd-gray">Year 2: Development</h4>
                      <p className="text-foreground/70 text-sm">User research, ergonomics, prototyping, and manufacturing processes</p>
                    </div>
                    <div className="border-l-4 border-bsd-orange pl-4">
                      <h4 className="font-medium text-bsd-gray">Year 3: Specialization</h4>
                      <p className="text-foreground/70 text-sm">Advanced design methods, sustainability, and technology integration</p>
                    </div>
                    <div className="border-l-4 border-bsd-orange pl-4">
                      <h4 className="font-medium text-bsd-gray">Year 4: Professional Practice</h4>
                      <p className="text-foreground/70 text-sm">Capstone projects, industry internships, and portfolio development</p>
                    </div>
                  </div>
                  
                  <div className="bg-bsd-light-gray p-6 rounded-lg">
                    <h4 className="font-medium text-bsd-gray mb-2">Key Features</h4>
                    <ul className="space-y-1 text-sm text-foreground/70">
                      <li>• State-of-the-art design labs and workshops</li>
                      <li>• Industry mentorship and guest lectures</li>
                      <li>• Regular design exhibitions and competitions</li>
                      <li>• International design study tours</li>
                      <li>• Collaboration with tech companies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="learning" className="mt-8">
              <LearningOutcomesTab />
            </TabsContent>
            
            <TabsContent value="careers" className="mt-8">
              <CareerOpportunitiesTab />
            </TabsContent>
            
            <TabsContent value="tools" className="mt-8">
              <SoftwareToolsTab />
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};