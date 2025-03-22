
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Palette, Monitor, Users, BriefcaseBusiness, PenTool, Layout, Ruler, Lightbulb, Warehouse, Building, Wrench, Layers, Cog } from "lucide-react";
import { LearningOutcomesTab } from "./LearningOutcomesTab";
import { CareerOpportunitiesTab } from "./CareerOpportunitiesTab";
import { SoftwareToolsTab } from "./SoftwareToolsTab";
import { ProjectCategoryTabs } from "./ProjectCategoryTabs";
import { useIsMobile } from "@/hooks/use-mobile";

export const ProgramOverviewSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Transform Spaces and Create Experiences
            </h2>
            <p className="mt-4 text-foreground/70">
              Our B.Sc Interior Design program focuses on creating functional, aesthetic, and innovative interior spaces that enhance the quality of life while addressing environmental and social challenges.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className={`${isMobile ? 'flex flex-col space-y-2' : 'grid grid-cols-4'} w-full max-w-3xl`}>
                <TabsTrigger value="curriculum" className="w-full">Curriculum</TabsTrigger>
                <TabsTrigger value="software" className="w-full">Software & Tools</TabsTrigger>
                <TabsTrigger value="outcomes" className="w-full">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career" className="w-full">Career Opportunities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              {/* Curriculum content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-foreground/70">
                        The B.Sc Interior Design program is a 3-year full-time undergraduate course divided into 6 semesters. Each semester builds upon the last, developing both artistic vision and technical expertise.
                      </p>
                      
                      <div className="space-y-4">
                        {/* Year-wise curriculum details */}
                        <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Fundamentals & Visual Language</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Drawing & Spatial Representation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Materials & Construction Basics</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>History of Interior Design & Architecture</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Second Year: Core Design</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Residential Design Studio</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Furniture Design & Ergonomics</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Digital Modeling & Visualization</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Building Systems & Services</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Third Year: Specialization</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Commercial & Retail Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Hospitality & Exhibition Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Professional Practice & Project Management</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Capstone Project & Portfolio Development</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-bsd-orange/5 border-bsd-orange/20">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Highlights</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Ruler className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Design Studios</h4>
                          <p className="text-sm text-foreground/70">Fully equipped studios with drafting facilities</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Monitor className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Digital Labs</h4>
                          <p className="text-sm text-foreground/70">Advanced software for modeling and visualization</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Wrench className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Materials Workshop</h4>
                          <p className="text-sm text-foreground/70">Hands-on experience with materials and fabrication</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Layers className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Material Library</h4>
                          <p className="text-sm text-foreground/70">Access to various material samples and resources</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Building className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Site Visits</h4>
                          <p className="text-sm text-foreground/70">Regular industry visits and on-site learning</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Mentorship</h4>
                          <p className="text-sm text-foreground/70">Learn from practicing interior designers</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
        
        <RevealSection delay={200}>
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray">
                Student Work & Projects
              </h3>
              <p className="mt-4 text-foreground/70">
                Explore our students' creative interior design projects across various categories
              </p>
            </div>
            
            <ProjectCategoryTabs />
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
