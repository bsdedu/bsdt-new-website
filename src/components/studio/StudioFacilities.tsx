
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const StudioFacilities: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STATE-OF-THE-ART FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Equipped for Professional Excellence
            </h2>
            <p className="mt-4 text-foreground/70">
              Studio BSD provides students with access to industry-standard equipment, software, and workspaces that mirror professional design studios.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="design" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger value="design">Design Studio</TabsTrigger>
                <TabsTrigger value="digital">Digital Lab</TabsTrigger>
                <TabsTrigger value="maker">Maker Space</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="design" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden h-[400px]">
                  <img 
                    src="/lovable-uploads/a9c8ce1e-1529-470a-8999-acff7698cf4f.png" 
                    alt="Design Studio at BSD" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-bsd-gray">Professional Design Studio</h3>
                  <p className="text-foreground/80">
                    Our design studio features ergonomic workstations, collaborative spaces, and presentation areas that simulate professional environments. Students work on drafting tables, color-accurate monitors, and have access to materials libraries.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Professional drafting and design workstations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Color-calibrated displays and printing facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Materials and textile libraries for interior and product design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Client presentation and critique spaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Photography and documentation area</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="digital" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden h-[400px]">
                  <img 
                    src="/lovable-uploads/412105e5-1bdd-40a1-9059-91164700052e.png" 
                    alt="Digital Lab at BSD" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-bsd-gray">Digital Creative Lab</h3>
                  <p className="text-foreground/80">
                    Our digital lab is equipped with high-performance workstations, tablets, and specialized software for graphic design, UI/UX, animation, game design, and web development. Motion capture facilities and VR/AR equipment provide cutting-edge capabilities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>High-performance computing workstations with GPU acceleration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Drawing tablets and touch-enabled displays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Virtual reality and augmented reality development kits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Motion capture equipment for animation projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Audio recording booth for multimedia projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="maker" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden h-[400px]">
                  <img 
                    src="/lovable-uploads/741db2ef-80d9-44dd-b7f0-cb1942734763.png" 
                    alt="Maker Space at BSD" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-bsd-gray">Fabrication & Maker Space</h3>
                  <p className="text-foreground/80">
                    Our maker space allows students to bring their designs into the physical world using advanced fabrication equipment. From architectural models to product prototypes, students can test and iterate on their ideas.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>3D printers and scanners for rapid prototyping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Laser cutters for precision fabrication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>CNC routing and milling machines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Woodworking and model-making equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span>Electronics and IoT prototyping tools</span>
                    </li>
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
