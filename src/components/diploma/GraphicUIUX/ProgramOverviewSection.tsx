
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui-elements/Card";
import { Monitor, PenTool, Layers, MousePointer, CheckCircle2 } from "lucide-react";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Professional Diploma in Graphic Design + UI/UX
            </h2>
            <p className="mt-4 text-foreground/70">
              A specialized diploma program that integrates traditional graphic design principles with modern UI/UX practices, preparing students for the evolving digital design landscape.
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
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Graphic Design Fundamentals</h3>
                <p className="text-foreground/70">
                  Master visual communication principles, typography, color theory, and composition techniques essential for effective graphic design.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Digital Design Tools</h3>
                <p className="text-foreground/70">
                  Learn industry-standard software including Adobe Creative Suite (Photoshop, Illustrator, InDesign) and digital prototyping tools.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <MousePointer className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">UI/UX Design</h3>
                <p className="text-foreground/70">
                  Develop skills in user interface design, user experience principles, wireframing, prototyping, and user-centered design methodologies.
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
                    Graphic Design Modules
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Typography & Visual Communication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Color Theory & Composition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital Illustration & Vector Graphics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Brand Identity Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Print & Publication Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">2</span>
                    UI/UX Design Modules
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>UI Design Principles & Elements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wireframing & Prototyping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>User Research & Testing Methods</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Responsive Web Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mobile App Interface Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Figma, Adobe XD & Prototyping Tools</span>
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
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Visual Communication Skills</h3>
                      <p className="text-foreground/70">Ability to communicate ideas effectively through visual design elements and principles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Technical Software Proficiency</h3>
                      <p className="text-foreground/70">Mastery of industry-standard design tools and software applications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Brand Identity Development</h3>
                      <p className="text-foreground/70">Create cohesive brand systems including logos, typography, and visual languages.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">UI Design Expertise</h3>
                      <p className="text-foreground/70">Craft visually appealing, functional user interfaces for digital products.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">User-Centered Design Approach</h3>
                      <p className="text-foreground/70">Apply UX research methods and user-centered design principles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Portfolio Development</h3>
                      <p className="text-foreground/70">Create a professional design portfolio showcasing skills across graphic and UI/UX design.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="career-paths" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">UI/UX Designer</h3>
                  <p className="text-foreground/70 mb-4">Create user-friendly interfaces and enhance user experiences for websites and applications.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹5-12 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <PenTool className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Graphic Designer</h3>
                  <p className="text-foreground/70 mb-4">Design visual communications for print and digital media, including marketing materials and brand assets.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹3.5-8 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Web Designer</h3>
                  <p className="text-foreground/70 mb-4">Design visually appealing and functional websites that meet client requirements and user needs.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹4-9 LPA
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
