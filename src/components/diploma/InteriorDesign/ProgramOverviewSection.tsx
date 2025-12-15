
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui-elements/Card";
import { Home, Ruler, Palette, CheckCircle2, Building, Briefcase } from "lucide-react";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Professional Diploma in Interior Design
            </h2>
            <p className="mt-4 text-foreground/70">
              This one-year hybrid programme blends live online learning with essential real-world exposure through our Bangalore campus and Satellite Partner Centres in Chhattisgarh, Hyderabad, Delhi, and Coimbatore.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Design Fundamentals</h3>
                <p className="text-foreground/70">
                  Master design fundamentals, colour theory, space planning, materials and finishes, along with residential topics like kitchens, bathrooms, and home offices.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Ruler className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Technical Skills</h3>
                <p className="text-foreground/70">
                  Develop strong technical skills through hands-on training in AutoCAD, SketchUp, and other professional tools used in the industry.
                </p>
              </div>
            </div>
            
            <div className="bg-bsd-light-gray rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Hybrid Learning</h3>
                <p className="text-foreground/70">
                  Experience comprehensive online learning plus practical on-ground exposure through site visits, industry walkthroughs, and in-person reviews.
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
                    Semester 1: Foundation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Design Fundamentals & Colour Theory</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Space Planning & Furniture Layout</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Materials & Finishes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>AutoCAD for Interior Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Residential Design: Kitchens & Bathrooms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Design Studio Projects</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">2</span>
                    Semester 2: Advanced
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>SketchUp & 3D Visualization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Residential Design: Wardrobes & Home Offices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Commercial Interior Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Industry & Vendor Walkthroughs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Portfolio Development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span>Final Design Projects & Presentations</span>
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
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Space Planning Skills</h3>
                      <p className="text-foreground/70">Ability to analyze spatial requirements and create functional, aesthetically pleasing layouts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Technical Software Proficiency</h3>
                      <p className="text-foreground/70">Mastery of industry-standard design tools and software applications for interior design.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Material Selection Expertise</h3>
                      <p className="text-foreground/70">Ability to select appropriate materials, finishes, and furnishings for various design projects.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Visual Presentation Skills</h3>
                      <p className="text-foreground/70">Create professional presentations and visualizations to communicate design concepts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Client-Focused Design Approach</h3>
                      <p className="text-foreground/70">Apply user-centered design principles to create spaces that meet client needs and preferences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">Portfolio Development</h3>
                      <p className="text-foreground/70">Create a professional design portfolio showcasing residential and commercial interior design projects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="career-paths" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Interior Designer</h3>
                  <p className="text-foreground/70 mb-4">Create functional and aesthetic interior spaces for residential and commercial clients.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹4-10 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Space Planner</h3>
                  <p className="text-foreground/70 mb-4">Design optimal layouts for commercial spaces, offices, and retail environments.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹5-9 LPA
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">Design Consultant</h3>
                  <p className="text-foreground/70 mb-4">Provide expert advice on interior design projects, material selection, and furnishings.</p>
                  <div className="text-sm text-bsd-orange font-medium">
                    Average Salary: ₹4-8 LPA
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
