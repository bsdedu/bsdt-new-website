
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
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Accelerated Learning</h3>
                <p className="text-foreground/70">
                  Complete a comprehensive professional diploma in just 12 months, with focused, intensive coursework in interior design.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Practical Studio Experience</h3>
                <p className="text-foreground/70">
                  Work in professionally equipped design studios with the latest software and resources for interior design projects.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry Collaborations</h3>
                <p className="text-foreground/70">
                  Work on real projects with industry partners and gain practical experience through internships with design firms.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Small Batch Sizes</h3>
                <p className="text-foreground/70">
                  Benefit from personalized attention with small class sizes, allowing for individualized feedback and mentoring.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Project-Based Learning</h3>
                <p className="text-foreground/70">
                  Complete comprehensive interior design projects for various spaces, building a professional portfolio throughout the course.
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
                  Graduate with a professional diploma recognized by the interior design industry, plus additional software certifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
