import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Home, Monitor, Users, BriefcaseBusiness, PenTool, Layout } from "lucide-react";
import { LearningOutcomesTab } from "./LearningOutcomesTab";
import { CareerOpportunitiesTab } from "./CareerOpportunitiesTab";
import { SoftwareToolsTab } from "./SoftwareToolsTab";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Harmonious Fusion of Interior Design and Architecture
            </h2>
            <p className="mt-4 text-foreground/70">
              A spatial artistic discipline that aims to upgrade existing human habitats by the development of innovative and sustainable settings through the exploration of human-space relationships.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="software">Software & AI Tools</TabsTrigger>
                <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career">Career Opportunities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-foreground/70">
                        The BVA Interior & Spatial Design program is a 4-year full-time undergraduate course that develops the ability to conceptualize, plan, design, and detail highly functional, aesthetically pleasing interior spaces while integrating technical aspects.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Fundamentals I & II</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Language I & II</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Drawing Fundamentals I & II</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Digital Fluency & Health and Wellness</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Second Year: Core Design</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Form and Space - Furniture Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Interior Design Materials I & II</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Technical Drawing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Architectural Elements and Services</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Third Year: Advanced Applications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Interior Design Studio II - Inhabitations</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Lifestyle and Accessories Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Workshop - Wood & Metal Construction</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Advanced AutoCAD & Digital Methods</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Fourth Year: Specialization & Portfolio</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Professional Practice & Project Management</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Interior Design Studio IV</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Interior Design: Landscape</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Thesis & Project Internship</span>
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
                          <Home className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Spatial Design Focus</h4>
                          <p className="text-sm text-foreground/70">Explore human-space relationships through innovative design solutions</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Monitor className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Advanced Design Software</h4>
                          <p className="text-sm text-foreground/70">AutoCAD, SketchUp, 3Ds Max, Revit, and AI-powered tools</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Expert Faculty</h4>
                          <p className="text-sm text-foreground/70">Learn from practicing interior designers and architects</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Real Project Experience</h4>
                          <p className="text-sm text-foreground/70">Work on live interior design and renovation projects</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <PenTool className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Material & Construction Focus</h4>
                          <p className="text-sm text-foreground/70">Hands-on workshops in wood and metal construction</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Layout className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Sustainable Design Approach</h4>
                          <p className="text-sm text-foreground/70">Focus on innovative and sustainable design solutions</p>
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
      </div>
    </section>
  );
};