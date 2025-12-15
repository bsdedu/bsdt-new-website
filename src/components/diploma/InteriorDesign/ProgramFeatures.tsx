
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Clock, Users, Award, Briefcase, Home, Lightbulb } from "lucide-react";

export const ProgramFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM HIGHLIGHTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              What Makes This Program Special
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Professional Diploma in Interior Design offers unique advantages designed to fast-track your career in the interior design industry.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Hybrid Learning Model</h3>
                <p className="text-foreground/70">
                  Blend online flexibility with on-ground experience. Access offline learning in Bangalore or through Satellite Centres in 4 cities.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Real Site Exposure</h3>
                <p className="text-foreground/70">
                  Site visits, industry walkthroughs, practical demonstrations, and in-person reviews facilitated by professional designers.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry-Standard Software</h3>
                <p className="text-foreground/70">
                  Hands-on training in AutoCAD, SketchUp, and other professional tools used in the interior design industry.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Expert Faculty</h3>
                <p className="text-foreground/70">
                  Learn from experienced architects, interior designers, and engineers who guide you through technical and creative aspects.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Studio-Style Projects</h3>
                <p className="text-foreground/70">
                  Design Studio projects help convert ideas into fully developed design solutions with guided critiques and structured feedback.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry Certification</h3>
                <p className="text-foreground/70">
                  Receive a Certificate in Interior Design from Futr School in collaboration with BSDT and ATMOS Design Labs.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
