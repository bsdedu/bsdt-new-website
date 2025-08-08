import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Monitor, Scissors, Palette, Ruler, Camera, Users, Shirt, Lightbulb } from "lucide-react";

export const FashionStudioSection: React.FC = () => {
  const studioFeatures = [
    {
      icon: Scissors,
      title: "Pattern Making Lab",
      description: "Professional pattern making tables, cutting tools, and digitizing equipment for accurate pattern development"
    },
    {
      icon: Shirt,
      title: "Garment Construction Studio",
      description: "Industrial sewing machines, sergers, and specialized equipment for professional garment assembly"
    },
    {
      icon: Palette,
      title: "Design Studio",
      description: "Creative workspace with design tables, fashion illustration materials, and inspiration boards"
    },
    {
      icon: Monitor,
      title: "Digital Design Lab",
      description: "High-end computers with Adobe Creative Suite, CLO 3D, and other fashion design software"
    },
    {
      icon: Camera,
      title: "Photography Studio",
      description: "Professional lighting, cameras, and backgrounds for fashion photography and portfolio creation"
    },
    {
      icon: Ruler,
      title: "Draping Lab",
      description: "Professional dress forms, draping tools, and materials for 3D design development"
    },
    {
      icon: Lightbulb,
      title: "Innovation Lab",
      description: "3D printers, laser cutters, and smart textiles for experimental fashion design"
    },
    {
      icon: Users,
      title: "Runway Space",
      description: "Professional catwalk and presentation area for fashion shows and collection presentations"
    }
  ];

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STUDIO FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              World-Class Fashion Design Studios
            </h2>
            <p className="mt-4 text-foreground/70">
              Our state-of-the-art fashion studios provide the perfect environment for creative exploration, technical skill development, and professional fashion design practice.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 bg-white overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Fashion Design Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">Professional Design Environment</h3>
                  <p className="text-white/90 text-sm">Industry-standard equipment and software</p>
                </div>
              </div>
            </Card>

            <Card className="border-0 bg-white overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Garment Construction Lab" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">Hands-on Learning</h3>
                  <p className="text-white/90 text-sm">Pattern making and garment construction</p>
                </div>
              </div>
            </Card>
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          <Card className="bg-white border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-bsd-gray mb-6">Equipment & Technology</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Industrial Sewing Machines</h4>
                        <p className="text-foreground/70 text-sm">Brother, Juki, and Singer industrial machines for professional garment construction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">CAD Software</h4>
                        <p className="text-foreground/70 text-sm">Gerber AccuMark, CLO 3D, and Adobe Creative Suite for digital design</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                      <div>
                        <h4 className="font-medium text-bsd-gray">Photography Equipment</h4>
                        <p className="text-foreground/70 text-sm">Professional cameras, lighting, and backdrop systems for fashion photography</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-bsd-gray mb-6">Studio Access</h3>
                  <div className="bg-bsd-light-gray p-6 rounded-lg">
                    <ul className="space-y-2 text-foreground/70">
                      <li>• 24/7 studio access for final year students</li>
                      <li>• Extended hours during project weeks</li>
                      <li>• Personal storage space for work-in-progress</li>
                      <li>• Material library and fabric samples</li>
                      <li>• Equipment booking system</li>
                      <li>• Technical support staff available</li>
                      <li>• Regular equipment maintenance and updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealSection>
      </div>
    </section>
  );
};