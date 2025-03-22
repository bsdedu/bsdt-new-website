
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui-elements/Card";
import { TreeDeciduous, PenTool, Leaf, Mountains, CheckCircle2 } from "lucide-react";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Post Graduate Diploma in Landscape Design
            </h2>
            <p className="mt-4 text-foreground/70">
              A comprehensive program that equips students with the knowledge and skills to design sustainable, functional, and aesthetically pleasing outdoor spaces across various scales and contexts.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Design Principles</h3>
                <p className="text-foreground/70">
                  Master the fundamental principles of landscape architecture, spatial composition, and visual aesthetics essential for creating harmonious outdoor environments.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Ecological Knowledge</h3>
                <p className="text-foreground/70">
                  Develop understanding of plant materials, ecosystems, and sustainable practices for environmentally responsible landscape design solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Mountains className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Technical Skills</h3>
                <p className="text-foreground/70">
                  Learn site analysis, grading, drainage, construction methods, and digital visualization tools used in professional landscape design practice.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">1</span>
                    Foundation Modules
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>History & Theory of Landscape Architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plant Materials & Ecology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Landscape Design Fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Site Analysis & Planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Drawing & Visual Communication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital Tools for Landscape Design</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">2</span>
                    Advanced Modules
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Urban Landscape Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sustainable Landscape Practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Landscape Construction & Materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Grading, Drainage & Stormwater Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional Practice & Project Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capstone Design Project</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="learning-outcomes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Design Proficiency</h3>
                      <p className="text-foreground/70">Create comprehensive landscape designs that integrate aesthetics, function, and sustainability principles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Plant Knowledge</h3>
                      <p className="text-foreground/70">Select and apply appropriate plant materials based on site conditions, design intent, and ecological considerations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Technical Expertise</h3>
                      <p className="text-foreground/70">Develop technical documentation including grading plans, planting plans, and construction details.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Visual Communication</h3>
                      <p className="text-foreground/70">Express design ideas effectively through hand drawing, digital rendering, and 3D visualization techniques.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Sustainable Design Approach</h3>
                      <p className="text-foreground/70">Apply ecological principles and sustainable strategies to create environmentally responsible landscapes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Professional Portfolio</h3>
                      <p className="text-foreground/70">Create a professional design portfolio showcasing a range of landscape design projects and skills.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="career-paths" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <TreeDeciduous className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Landscape Designer</h3>
                  <p className="text-foreground/70 mb-4">Create functional and aesthetically pleasing outdoor spaces for residential, commercial, or public projects.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹5-10 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <PenTool className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Urban Designer</h3>
                  <p className="text-foreground/70 mb-4">Plan and design public spaces, streetscapes, and urban environments with focus on community needs.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹6-12 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Landscape Consultant</h3>
                  <p className="text-foreground/70 mb-4">Provide specialized expertise on plant selection, sustainable landscaping, and ecological restoration projects.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹7-15 LPA
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
