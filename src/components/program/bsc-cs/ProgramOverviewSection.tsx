import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Code, Layers, Shield, Database, Sparkles, Lock, BarChart } from "lucide-react";
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
              Technology Meets Security & Analytics
            </h2>
            <p className="mt-4 text-foreground/70">
              Our BCA program with specializations in Data Analytics or Cyber Security prepares students to excel in the rapidly evolving tech landscape, combining strong technical foundations with specialized expertise in data science and cybersecurity.
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
                        The BCA program is a 3-year full-time undergraduate course divided into 6 semesters. Students choose their specialization in the third year, focusing on either Data Analytics or Cyber Security.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">First & Second Year: Core Computer Applications</h4>
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
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Object-Oriented Programming</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Software Engineering Principles</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Computer Networks</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Operating Systems</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Third Year: Specialization (Choose One)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-bsd-orange mb-2">Data Analytics Track</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Statistical Methods & Data Science</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Python for Data Analytics</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Machine Learning Fundamentals</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Data Visualization & Reporting</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Big Data Technologies</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Business Intelligence & Analytics</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Predictive Analytics</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Data Analytics Capstone Project</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-bsd-orange mb-2">Cyber Security Track</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Network Security Fundamentals</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Cryptography & Data Protection</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Ethical Hacking & Penetration Testing</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Digital Forensics</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Security Operations & Incident Response</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Malware Analysis & Detection</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Cybersecurity Governance & Risk</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span>Cybersecurity Capstone Project</span>
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
                          <h4 className="font-medium text-bsd-gray">Specialization Options</h4>
                          <p className="text-sm text-foreground/70">Choose between Data Analytics or Cyber Security pathways</p>
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
                          <BarChart className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Data-Driven Learning</h4>
                          <p className="text-sm text-foreground/70">Analytics-powered curriculum and personalized learning</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Shield className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Security-First Approach</h4>
                          <p className="text-sm text-foreground/70">Cybersecurity principles integrated throughout the curriculum</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lock className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Hackathons & CTF Competitions</h4>
                          <p className="text-sm text-foreground/70">Regular security challenges and data science competitions</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Database className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Certifications</h4>
                          <p className="text-sm text-foreground/70">Integrated preparation for AWS, CompTIA, and data science certifications</p>
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