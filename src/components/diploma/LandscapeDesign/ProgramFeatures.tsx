
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Clock, Users, Award, Briefcase, Mountain, Leaf } from "lucide-react";

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
              Our Post Graduate Diploma in Landscape Design offers unique advantages designed to prepare you for a successful career in landscape architecture and design.
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
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Accelerated Learning</h3>
                <p className="text-foreground/70">
                  Complete a comprehensive professional diploma in just 12 months, with focused, intensive coursework that prepares you for industry roles quickly.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Site-Based Learning</h3>
                <p className="text-foreground/70">
                  Gain hands-on experience through site visits, field studies, and real-world landscape projects across urban and natural environments.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry Partnerships</h3>
                <p className="text-foreground/70">
                  Work on real client projects through our network of industry partners, including landscape firms, urban planning agencies, and ecological consultancies.
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
                  Learn from practicing landscape architects, urban designers, and environmental specialists with extensive industry experience.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Ecological Focus</h3>
                <p className="text-foreground/70">
                  Develop a strong foundation in sustainable design principles, native plant species, and climate-responsive landscaping techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Professional Recognition</h3>
                <p className="text-foreground/70">
                  Graduate with a diploma recognized by industry professionals, plus additional certifications in specialized landscape design software tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

