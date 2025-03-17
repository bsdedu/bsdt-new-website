
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const StudioSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STUDIO FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              State-of-the-Art Design Studios
            </h2>
            <p className="mt-4 text-foreground/70">
              Our specialized studios provide the tools, technology, and workspace needed to bring architectural designs from concept to reality.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <RevealSection delay={100}>
            <Card>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/public/lovable-uploads/22d341bf-212e-47be-b781-4ffdee0d9881.png" 
                  alt="Digital Design Lab" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Digital Design Lab</h3>
                <p className="text-foreground/70">
                  Our digital design lab features high-performance workstations equipped with the latest architectural design software. Students have access to advanced computing resources for complex 3D modeling, rendering, and BIM projects.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">30+ Design Workstations</h4>
                  </div>
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">BIM Software Suite</h4>
                  </div>
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">VR Visualization Setup</h4>
                  </div>
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">Large Format Displays</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={200}>
            <Card>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/public/lovable-uploads/cdcb8556-cfb5-4124-be04-f0f32a8ce017.png" 
                  alt="Model Making Workshop" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Model Making Workshop</h3>
                <p className="text-foreground/70">
                  Our model making workshop combines traditional craftsmanship with digital fabrication technologies. Students can physically materialize their designs using a range of materials and techniques, from hand-cut models to 3D printed prototypes.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">Laser Cutting Systems</h4>
                  </div>
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">3D Printing Lab</h4>
                  </div>
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">CNC Milling Machine</h4>
                  </div>
                  <div className="bg-bsd-orange/5 p-3 rounded-lg">
                    <h4 className="font-medium text-bsd-gray text-sm">Material Library</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealSection>
        </div>

        <RevealSection delay={300}>
          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-border/40 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 md:col-span-2">
                <h3 className="text-xl font-semibold text-bsd-gray mb-4">Materials Resource Center</h3>
                <p className="text-foreground/70 mb-4">
                  Our materials resource center houses an extensive collection of building materials, finishes, and sustainable products. Students can explore tactile samples and learn about material properties, applications, and environmental impacts.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-bsd-orange mr-2"></span>
                    <span className="text-sm">Material sample library</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-bsd-orange mr-2"></span>
                    <span className="text-sm">Manufacturer catalogs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-bsd-orange mr-2"></span>
                    <span className="text-sm">Sustainable materials database</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-bsd-orange mr-2"></span>
                    <span className="text-sm">Material testing equipment</span>
                  </li>
                </ul>
                <p className="text-sm text-foreground/70 italic">
                  "The materials resource center has been invaluable for understanding how different materials behave and interact. Being able to physically handle samples helped me make more informed design decisions."
                </p>
                <p className="text-sm font-medium mt-2">— Sneha K., Architectural Design Graduate</p>
              </div>
              <div className="md:h-auto">
                <img 
                  src="/public/lovable-uploads/bd80ca6d-217b-4c7b-aa96-351c6bd06122.png" 
                  alt="Materials Resource Center" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
