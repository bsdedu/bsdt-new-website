
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Building2, Ruler, Users, BriefcaseBusiness, Palette, Lightbulb } from "lucide-react";
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
              Building the Future Through Design
            </h2>
            <p className="mt-4 text-foreground/70">
              Our B.Des in Architectural Construction Design program balances creative vision with technical expertise, preparing students to design innovative and sustainable spaces for tomorrow's world.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="software">Software Tools</TabsTrigger>
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
                        The B.Des in Architectural Construction Design is a 4-year full-time undergraduate program divided into 8 semesters. The curriculum integrates design theory, technical skills, and practical applications to prepare students for diverse roles in the architectural and construction industry.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Fundamentals & Visual Communication</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Architectural Drawing & Representation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>History of Architecture & Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Basic Construction Materials & Technology</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Second Year: Core Principles</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Architectural Design Studio</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Building Construction & Materials</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Digital Design & CAD Applications</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Environmental Design & Building Physics</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Third Year: Advanced Applications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Advanced Architectural Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Building Information Modeling (BIM)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Structural Systems & Analysis</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Sustainable Design & Green Buildings</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Fourth Year: Specialization & Thesis</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Professional Practice & Project Management</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Urban Design & Planning</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Capstone Project & Thesis Development</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Industry Internship & Portfolio Development</span>
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
                          <Building2 className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">State-of-the-Art Design Studios</h4>
                          <p className="text-sm text-foreground/70">Modern design labs and model-making workshops</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Ruler className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Technical Expertise</h4>
                          <p className="text-sm text-foreground/70">Focus on both design and construction technology</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry-Experienced Faculty</h4>
                          <p className="text-sm text-foreground/70">Learn from working architects and designers</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Real-World Projects</h4>
                          <p className="text-sm text-foreground/70">Collaborate with actual clients and stakeholders</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Palette className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Interdisciplinary Approach</h4>
                          <p className="text-sm text-foreground/70">Integration with interior design and visual arts</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lightbulb className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Sustainability Focus</h4>
                          <p className="text-sm text-foreground/70">Emphasis on eco-friendly design principles</p>
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
