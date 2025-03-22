
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
              Our Diploma in HCI for UI/UX offers unique advantages designed to fast-track your career in the user experience and interface design industry.
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
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Focused Learning</h3>
                <p className="text-foreground/70">
                  Complete a specialized HCI for UI/UX diploma in just 6 months, with intensive coursework that prepares you for industry roles quickly.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry-Aligned Curriculum</h3>
                <p className="text-foreground/70">
                  Curriculum developed with input from UX professionals to ensure you learn the most relevant and in-demand skills for today's digital product market.
                </p>
              </CardContent>
            </Card>
            
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Psychological Foundation</h3>
                <p className="text-foreground/70">
                  Strong focus on cognitive psychology and human behavior principles that underpin successful user experience design.
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
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Project-Based Learning</h3>
                <p className="text-foreground/70">
                  Complete real-world UX/UI projects throughout the course to build a professional portfolio that demonstrates your abilities to potential employers.
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
