
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Professional Diploma in Interior Design
            </h2>
            <p className="mt-4 text-foreground/70">
              Our comprehensive program empowers you with both creative and technical skills needed to excel in the field of interior design, with flexible learning options to suit your lifestyle.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="tools">Software & Tools</TabsTrigger>
              <TabsTrigger value="careers">Career Paths</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="module1">
                    <AccordionTrigger className="text-lg font-medium">Module 1: Design Fundamentals</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                        <li>Elements and principles of design</li>
                        <li>Color theory and psychology in interior spaces</li>
                        <li>Spatial planning and organization</li>
                        <li>Anthropometrics and ergonomics</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="module2">
                    <AccordionTrigger className="text-lg font-medium">Module 2: Technical Drawing & Visualization</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                        <li>Manual drafting techniques</li>
                        <li>Technical drawing standards</li>
                        <li>Introduction to CAD software</li>
                        <li>3D modeling fundamentals</li>
                        <li>Rendering and visualization</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="module3">
                    <AccordionTrigger className="text-lg font-medium">Module 3: Materials & Finishes</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                        <li>Interior materials and their applications</li>
                        <li>Furniture styles and manufacturing</li>
                        <li>Textile selection for interiors</li>
                        <li>Sustainable material choices</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="module4">
                    <AccordionTrigger className="text-lg font-medium">Module 4: Residential Design</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                        <li>Space planning for residential projects</li>
                        <li>Kitchen and bathroom design</li>
                        <li>Lighting design for homes</li>
                        <li>Custom furniture design</li>
                        <li>Residential project management</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="module5">
                    <AccordionTrigger className="text-lg font-medium">Module 5: Commercial Design</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                        <li>Office and workspace planning</li>
                        <li>Retail design strategies</li>
                        <li>Hospitality design principles</li>
                        <li>Commercial lighting and acoustics</li>
                        <li>Building codes and regulations</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="module6">
                    <AccordionTrigger className="text-lg font-medium">Module 6: Professional Practice</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                        <li>Client communication and management</li>
                        <li>Design presentation techniques</li>
                        <li>Project estimation and budgeting</li>
                        <li>Professional ethics in design</li>
                        <li>Portfolio development</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="AutoCAD" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">AutoCAD</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="SketchUp" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">SketchUp</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="3ds Max" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">3ds Max</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="V-Ray" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">V-Ray</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Adobe Photoshop" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">Photoshop</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Adobe Illustrator" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">Illustrator</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Adobe InDesign" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">InDesign</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Revit" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">Revit</h4>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="careers" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Interior Designer</h3>
                  <p className="text-foreground/70">Design functional and aesthetically pleasing interior spaces for residential and commercial clients.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Design Consultant</h3>
                  <p className="text-foreground/70">Advise clients on interior design choices, material selection, and space planning solutions.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Kitchen & Bath Designer</h3>
                  <p className="text-foreground/70">Specialize in creating functional and beautiful kitchen and bathroom spaces.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Visual Merchandiser</h3>
                  <p className="text-foreground/70">Design retail spaces and window displays that enhance the customer experience and drive sales.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Furniture Designer</h3>
                  <p className="text-foreground/70">Create custom furniture pieces that complement interior spaces and meet specific client needs.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Design Entrepreneur</h3>
                  <p className="text-foreground/70">Start your own interior design firm or related business in the design industry.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
