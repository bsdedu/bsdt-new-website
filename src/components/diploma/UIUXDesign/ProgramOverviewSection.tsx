
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Master the Art of Digital Experience Design
            </h2>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="prose prose-lg max-w-4xl mx-auto text-foreground/70">
            <p>
              Our Professional Diploma in UI/UX Design is a comprehensive program that combines theoretical knowledge with practical skills in user interface and user experience design. This program is designed for individuals who want to pursue a career in digital product design, focusing on creating intuitive and engaging user experiences.
            </p>
            
            <h3 className="text-xl font-bold text-bsd-gray mt-8 mb-4">Key Learning Areas</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>User-Centered Design Principles and Methodologies</li>
              <li>Information Architecture and User Research</li>
              <li>Wireframing and Prototyping</li>
              <li>Visual Design and Interface Design</li>
              <li>Usability Testing and Design Iteration</li>
              <li>Design Systems and Component Libraries</li>
              <li>Mobile and Responsive Design</li>
              <li>Design Tools (Figma, Adobe XD, Sketch)</li>
            </ul>

            <h3 className="text-xl font-bold text-bsd-gray mt-8 mb-4">Career Opportunities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>UI/UX Designer</li>
              <li>Product Designer</li>
              <li>Interaction Designer</li>
              <li>User Experience Researcher</li>
              <li>Information Architect</li>
              <li>Mobile App Designer</li>
            </ul>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
