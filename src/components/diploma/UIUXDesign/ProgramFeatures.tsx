
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui-elements/Card";
import { CheckCircle2, Lightbulb, Layers, Zap, Cpu, Users } from "lucide-react";

export const ProgramFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM HIGHLIGHTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Key Features of Our UI/UX Design Program
            </h2>
            <p className="mt-4 text-foreground/70">
              Our program is designed to equip you with industry-relevant skills, practical experience, and a strong foundation in UI/UX design principles.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-none shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry-Aligned Curriculum</h3>
              <p className="text-foreground/70 mb-4">
                Curriculum developed with input from industry leaders to ensure you learn relevant and current skills used in top design firms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regularly updated content reflecting industry trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-world case studies and design challenges</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-3">Project-Based Learning</h3>
              <p className="text-foreground/70 mb-4">
                Build a professional portfolio through hands-on projects, simulating real-world design challenges and client requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete portfolio of UI/UX projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Individual and collaborative group projects</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-3">Career Support</h3>
              <p className="text-foreground/70 mb-4">
                Dedicated career support including resume building, interview preparation, and networking opportunities with industry connections.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Portfolio reviews by industry professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Job placement assistance for qualified students</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-3">Advanced Tools & Technology</h3>
              <p className="text-foreground/70 mb-4">
                Gain expertise in industry-standard design tools and emerging technologies including AI-assisted design workflows.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Training on Figma, Adobe XD, and prototyping tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Introduction to AI tools for UX research and design</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-3">Expert Faculty</h3>
              <p className="text-foreground/70 mb-4">
                Learn from industry professionals with extensive experience in UI/UX design across various domains and industries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Instructors from leading design companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Guest lectures from UX industry leaders</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-3">Flexible Learning</h3>
              <p className="text-foreground/70 mb-4">
                Choose between on-campus, online, or hybrid learning options to fit your schedule and learning preferences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekend and weekday batches available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>Recorded sessions for self-paced learning</span>
                </li>
              </ul>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
