import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Monitor, Hammer, Palette, Ruler, Building, Users } from "lucide-react";

export const StudioSection: React.FC = () => {
  const studioFeatures = [
    {
      icon: Monitor,
      title: "Digital Design Lab",
      description: "High-performance workstations with professional software suite including AutoCAD, SketchUp, 3Ds Max, and Revit"
    },
    {
      icon: Hammer,
      title: "Material Workshop",
      description: "Hands-on facility for wood and metal construction, learning material properties and fabrication techniques"
    },
    {
      icon: Palette,
      title: "Color & Texture Studio",
      description: "Dedicated space for exploring color theory, material samples, and finish selections for interior projects"
    },
    {
      icon: Ruler,
      title: "Technical Drawing Lab",
      description: "Traditional drafting tables and modern CAD stations for developing technical drawing and documentation skills"
    },
    {
      icon: Building,
      title: "Model Making Studio",
      description: "Equipped with tools and materials for creating scale models and 3D prototypes of spatial designs"
    },
    {
      icon: Users,
      title: "Collaborative Design Space",
      description: "Open studio environment for team projects, critiques, and interdisciplinary collaboration"
    }
  ];

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STUDIO FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              State-of-the-Art Interior & Spatial Design Studios
            </h2>
            <p className="mt-4 text-foreground/70">
              Our specialized studios provide the perfect environment for hands-on learning, creative exploration, and professional development in interior and spatial design.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {studioFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4 group-hover:bg-bsd-orange/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 bg-white overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Interior Design Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">Professional Design Environment</h3>
                  <p className="text-white/90 text-sm">Industry-standard tools and software</p>
                </div>
              </div>
            </Card>

            <Card className="border-0 bg-white overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Material Workshop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">Hands-on Learning</h3>
                  <p className="text-white/90 text-sm">Material workshops and construction techniques</p>
                </div>
              </div>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};