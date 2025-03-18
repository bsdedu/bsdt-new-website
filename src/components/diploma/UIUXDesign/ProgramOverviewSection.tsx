
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui-elements/Card";
import { CheckCircle2, Monitor, PenTool, Layers, MousePointer, Brain, Users, Layout } from "lucide-react";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Professional Diploma in UI/UX Design
            </h2>
            <p className="mt-4 text-foreground/70">
              A comprehensive program that focuses on user-centered design principles, interaction design methodologies, and creating exceptional digital experiences.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">User-Centered Design</h3>
                <p className="text-foreground/70">
                  Learn to research, analyze, and design for user needs, creating interfaces that are intuitive and accessible.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <MousePointer className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Interaction Design</h3>
                <p className="text-foreground/70">
                  Master the principles of interaction design to create engaging and seamless user experiences across digital platforms.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Design Systems</h3>
                <p className="text-foreground/70">
                  Develop skills in creating consistent design systems and component libraries for scalable product development.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="software">Software & AI</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">1</span>
                    UX Design Modules
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>User Research & Methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Information Architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>User Personas & Empathy Mapping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Usability Testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>UX Strategy & Planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Design Thinking Process</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">2</span>
                    UI Design Modules
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Visual Design Principles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>UI Components & Patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wireframing & Prototyping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Responsive & Adaptive Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Design Systems Creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Interaction Design & Micro-animations</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="software" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4">Design & Prototyping Tools</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Monitor className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">Figma</h4>
                        <p className="text-sm text-foreground/70">UI design, prototyping, and collaboration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Monitor className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">Adobe XD</h4>
                        <p className="text-sm text-foreground/70">UI/UX design and prototyping</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <PenTool className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">Sketch</h4>
                        <p className="text-sm text-foreground/70">Vector-based UI design</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Layers className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">InVision</h4>
                        <p className="text-sm text-foreground/70">Prototyping and collaboration</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4">AI & Research Tools</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Brain className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">Maze</h4>
                        <p className="text-sm text-foreground/70">User testing platform</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Users className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">Hotjar</h4>
                        <p className="text-sm text-foreground/70">User behavior analytics</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Brain className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">Midjourney</h4>
                        <p className="text-sm text-foreground/70">AI image generation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Brain className="w-5 h-5 text-bsd-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bsd-gray">UXPin</h4>
                        <p className="text-sm text-foreground/70">AI-assisted prototyping</p>
                      </div>
                    </div>
                  </div>
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
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">User Research Expertise</h3>
                      <p className="text-foreground/70">Ability to conduct user research, create personas, and translate insights into effective design solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Interface Design Skills</h3>
                      <p className="text-foreground/70">Mastery of visual design principles and the ability to create aesthetically pleasing, functional interfaces.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Prototyping & Testing</h3>
                      <p className="text-foreground/70">Skills in creating interactive prototypes and conducting usability tests to validate design decisions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Design Systems Creation</h3>
                      <p className="text-foreground/70">Ability to develop and maintain consistent design systems and component libraries.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Industry Tool Proficiency</h3>
                      <p className="text-foreground/70">Expertise in professional UI/UX design tools like Figma, Adobe XD, and prototyping platforms.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Professional Portfolio</h3>
                      <p className="text-foreground/70">Creation of a comprehensive UI/UX design portfolio showcasing your problem-solving approach and design skills.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="career-paths" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <MousePointer className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">UX Designer</h3>
                  <p className="text-foreground/70 mb-4">Research user needs and design experiences that solve problems and create intuitive digital products.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹8-15 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Layout className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">UI Designer</h3>
                  <p className="text-foreground/70 mb-4">Create visually appealing and functional user interfaces for websites, applications, and digital products.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹6-12 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Product Designer</h3>
                  <p className="text-foreground/70 mb-4">Combine UI/UX skills with product strategy to create end-to-end design solutions for digital products.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹10-20 LPA
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
