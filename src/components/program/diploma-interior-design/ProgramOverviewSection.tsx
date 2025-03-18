
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              Our 1-year Professional Diploma program prepares you for a successful career in interior design through a comprehensive curriculum covering both practical and theoretical aspects.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="career">Career Opportunities</TabsTrigger>
              <TabsTrigger value="software">Software & Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum" className="bg-bsd-light-gray/30 p-6 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Foundation Modules</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>Interior Design Principles & Elements</li>
                    <li>Color Theory & Material Science</li>
                    <li>Space Planning & Anthropometrics</li>
                    <li>Manual Drafting & Technical Drawing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Core Technical Modules</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>AutoCAD for Interior Design</li>
                    <li>3D Visualization (SketchUp/3ds Max)</li>
                    <li>Furniture Design & Detailing</li>
                    <li>Lighting Design for Interiors</li>
                    <li>Material Selection & Finishes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Application & Project Modules</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>Residential Interior Design</li>
                    <li>Commercial & Retail Design</li>
                    <li>Exhibition & Display Design</li>
                    <li>Kitchen & Bathroom Design</li>
                    <li>Professional Practice & Project Management</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Practical Training</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>Site Visits & Material Market Exposure</li>
                    <li>Industry-Led Workshops</li>
                    <li>Portfolio Development</li>
                    <li>Capstone Project with Client Presentation</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="career" className="bg-bsd-light-gray/30 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Career Paths</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>Interior Designer</li>
                    <li>Space Planner</li>
                    <li>Kitchen & Bath Designer</li>
                    <li>Visual Merchandiser</li>
                    <li>Furniture Designer</li>
                    <li>Design Consultant</li>
                    <li>Staging Specialist</li>
                    <li>CAD Technician</li>
                    <li>Self-employed Design Professional</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Industry Sectors</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>Residential Design Firms</li>
                    <li>Commercial Design Companies</li>
                    <li>Retail Design Agencies</li>
                    <li>Architectural Practices</li>
                    <li>Exhibition & Event Companies</li>
                    <li>Real Estate & Property Development</li>
                    <li>Hospitality Industry</li>
                    <li>Furniture Manufacturing</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="software" className="bg-bsd-light-gray/30 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Design & Drafting</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>AutoCAD</li>
                    <li>SketchUp</li>
                    <li>3ds Max</li>
                    <li>Revit</li>
                    <li>Archicad</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Visualization & Presentation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>V-Ray</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe InDesign</li>
                    <li>Adobe Illustrator</li>
                    <li>Lumion</li>
                  </ul>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-3 text-bsd-gray">Project Management & Collaboration</h3>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    <li>Microsoft Office Suite</li>
                    <li>Project Management Tools (MS Project, Asana)</li>
                    <li>Cloud Collaboration Platforms</li>
                    <li>Cost Estimation Software</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
