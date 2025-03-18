
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Ruler, PenTool, Monitor, Lightbulb, Palette, Home, Box } from "lucide-react";

export const StudioSection: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STUDIO FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              State-of-the-Art Design Studios
            </h2>
            <p className="mt-4 text-foreground/70">
              Our program features dedicated spaces that simulate professional work environments while providing all the tools and resources students need to bring their creative visions to life.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png" 
                alt="Interior Design Studio" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Learning By Doing</h3>
              <p className="text-foreground/70 mb-6">
                Our hands-on approach to interior design education focuses on practical skills development alongside theoretical knowledge. Students work in professional-grade studios with access to cutting-edge resources and equipment.
              </p>
              <p className="text-foreground/70">
                Through immersive studio experiences, students develop a comprehensive understanding of materials, techniques, and industry standards that prepare them for successful careers in interior design.
              </p>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/90">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Box className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Material Library</h3>
                <p className="text-foreground/70">
                  Access to a vast collection of material samples to explore texture, color, and sustainability in design.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Model Making Workshop</h3>
                <p className="text-foreground/70">
                  Fully equipped studio for creating physical models and prototypes of interior design concepts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Design Lab</h3>
                <p className="text-foreground/70">
                  State-of-the-art computers with the latest interior design software and rendering tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lighting Studio</h3>
                <p className="text-foreground/70">
                  Experimental space to test different lighting designs and effects on interior spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
