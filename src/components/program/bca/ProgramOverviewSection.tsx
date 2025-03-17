
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Code, Layers, Brain, Figma, Laptop, Database, Sparkles } from "lucide-react";
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
              Technology Meets Creativity
            </h2>
            <p className="mt-4 text-foreground/70">
              Our BCA program with dual specializations in UI/UX Design and AI/ML prepares students to excel in the rapidly evolving tech landscape, combining strong technical foundations with creative design thinking.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="software">Software & Tools</TabsTrigger>
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
                        The BCA program is a 3-year full-time undergraduate course divided into 6 semesters. Students choose their specialization at the end of the first year, with focused courses on either UI/UX Design or AI/ML in the second and third years.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">First Year: Fundamentals</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Introduction to Programming & Data Structures</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Computer Organization & Architecture</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Web Development Foundations</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Database Management Systems</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Second Year: Specialization Core</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-bsd-orange mb-2">UI/UX Design Track</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>User Research & Personas</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>UI Principles & Design Systems</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Interactive Prototyping</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Front-end Development</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-bsd-orange mb-2">AI/ML Track</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Python for Data Science</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Statistical Methods for ML</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Introduction to ML Algorithms</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Data Visualization</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h4 className="font-medium text-bsd-gray">Third Year: Advanced Applications</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-bsd-orange mb-2">UI/UX Design Track</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Advanced UI Frameworks</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>UX Testing & Analytics</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Responsive Design Systems</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>UI/UX Capstone Project</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-bsd-orange mb-2">AI/ML Track</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Deep Learning & Neural Networks</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Computer Vision & NLP</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>AI Ethics & Responsible Computing</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>AI/ML Capstone Project</span>
                              </li>
                            </ul>
                          </div>
                        </div>
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
                          <Code className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Dual Specialization</h4>
                          <p className="text-sm text-foreground/70">Focus on either UI/UX Design or AI/ML pathways</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Layers className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry-Focused Projects</h4>
                          <p className="text-sm text-foreground/70">Practical learning with real-world applications</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Brain className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">AI-Enhanced Learning</h4>
                          <p className="text-sm text-foreground/70">Personalized learning paths using AI technologies</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Figma className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Design Thinking</h4>
                          <p className="text-sm text-foreground/70">Creative problem-solving approach throughout the curriculum</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Laptop className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Hackathons & Competitions</h4>
                          <p className="text-sm text-foreground/70">Regular challenges to build competitive skills</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Database className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Certifications</h4>
                          <p className="text-sm text-foreground/70">Integrated preparation for professional certifications</p>
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
