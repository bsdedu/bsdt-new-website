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
              Launch Your Fashion Design Career
            </h2>
            <p className="mt-4 text-foreground/70">
              Our comprehensive B.Sc Fashion Design program combines creative expression with technical expertise, preparing you for a dynamic career in the global fashion industry.
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
                        <h4 className="font-medium text-bsd-gray">Fashion Design Fundamentals</h4>
                        <p className="text-foreground/70 text-sm">Master the principles of design, color theory, and fashion illustration techniques.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Garment Construction</h4>
                        <p className="text-foreground/70 text-sm">Learn pattern making, draping, and advanced sewing techniques for professional garments.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Textile Science</h4>
                        <p className="text-foreground/70 text-sm">Understand fabric properties, textile production, and sustainable fashion practices.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Fashion Business</h4>
                        <p className="text-foreground/70 text-sm">Explore fashion marketing, merchandising, and entrepreneurship in the fashion industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-bsd-gray">Curriculum Structure</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-bsd-orange pl-4">
                      <h4 className="font-medium text-bsd-gray">Year 1: Foundation</h4>
                      <p className="text-foreground/70 text-sm">Design fundamentals, fashion history, and basic construction techniques</p>
                    </div>
                    <div className="border-l-4 border-bsd-orange pl-4">
                      <h4 className="font-medium text-bsd-gray">Year 2: Specialization</h4>
                      <p className="text-foreground/70 text-sm">Advanced design concepts, pattern making, and textile science</p>
                    </div>
                    <div className="border-l-4 border-bsd-orange pl-4">
                      <h4 className="font-medium text-bsd-gray">Year 3: Professional Practice</h4>
                      <p className="text-foreground/70 text-sm">Portfolio development, industry internships, and fashion business</p>
                    </div>
                  </div>
                  
                  <div className="bg-bsd-light-gray p-6 rounded-lg">
                    <h4 className="font-medium text-bsd-gray mb-2">Key Features</h4>
                    <ul className="space-y-1 text-sm text-foreground/70">
                      <li>• Industry-standard design studios</li>
                      <li>• Expert faculty from fashion industry</li>
                      <li>• Regular fashion shows and exhibitions</li>
                      <li>• International internship opportunities</li>
                      <li>• Sustainable fashion focus</li>
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