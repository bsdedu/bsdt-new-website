
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Clock, Users, Award, Briefcase, Laptop, Lightbulb, BookOpen } from "lucide-react";

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
              Our Professional Diploma in Generative AI for Design Practice is built around real production workflows—giving you a measurable edge in speed, scalability, and creative output.
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
                <h3 className="text-xl font-bold text-bsd-gray mb-3">6-Month Focused Format</h3>
                <p className="text-foreground/70">
                  Complete the diploma in just 6 months with Saturday-only classes—designed for working professionals and design graduates.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">AI Tools Across the Stack</h3>
                <p className="text-foreground/70">
                  Hands-on training with Midjourney, DALL·E, Adobe Photoshop, SketchUp, and Autodesk Revit—integrated into real production workflows.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Production-First Approach</h3>
                <p className="text-foreground/70">
                  Rather than isolated tools, you learn how AI plugs into actual design production systems—from concept to client delivery.
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
                  Limited class sizes ensure personalized attention from instructors, creating an optimal learning environment for skill development.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Domain-Focused Tracks</h3>
                <p className="text-foreground/70">
                  Choose a specialised application track—interiors & architecture, branding, UI/UX, or product & furniture—and build a focused portfolio.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry Connections</h3>
                <p className="text-foreground/70">
                  Regular interactions with industry professionals through guest lectures, mentorship sessions, and networking events to build valuable connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
