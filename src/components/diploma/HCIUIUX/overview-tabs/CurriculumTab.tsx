
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, GraduationCap, BookOpen, Code } from "lucide-react";

export const CurriculumTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-foreground/70">
              The Professional Diploma in HCI for UI/UX is a 6-month comprehensive program divided into modules that build upon each other. Each module combines theoretical knowledge with practical applications to ensure a well-rounded skill set.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-medium text-bsd-gray flex items-center">
                <GraduationCap className="w-5 h-5 text-bsd-orange mr-2" />
                Module 1: Foundations of User Experience
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Introduction to UX Design and Human-Computer Interaction</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cognitive Psychology for Designers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Design Thinking Methodology</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>User Research Methods and Analysis</span>
                </li>
              </ul>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <BookOpen className="w-5 h-5 text-bsd-orange mr-2" />
                Module 2: Information Architecture & Interaction Design
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Information Architecture Principles</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Content Strategy and User Flows</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Wireframing and Low-Fidelity Prototyping</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Interaction Design Patterns and Best Practices</span>
                </li>
              </ul>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <Code className="w-5 h-5 text-bsd-orange mr-2" />
                Module 3: UI Design & Visual Communication
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Visual Design Fundamentals for Interfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Typography, Color Theory, and Composition for Digital Products</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Design Systems and Component Libraries</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>High-Fidelity Prototyping and Micro-interactions</span>
                </li>
              </ul>
              
              <h4 className="font-medium text-bsd-gray flex items-center">
                <Code className="w-5 h-5 text-bsd-orange mr-2" />
                Module 4: User Testing & Design Implementation
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Usability Testing Methods and Analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Accessibility Standards and Inclusive Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Design Handoff and Developer Collaboration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Portfolio Development and Professional Presentation</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Capstone Project</h3>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70 mb-4">
            Throughout the program, you'll work on a comprehensive capstone project that demonstrates your ability to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Conduct user research and identify key user needs</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Create information architecture and user flows</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Design wireframes and prototypes</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Develop a cohesive visual design system</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Conduct usability testing and iterate based on feedback</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Present your design process and final solution</span>
            </li>
          </ul>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm text-bsd-gray font-medium">
              The capstone project will be a valuable addition to your professional portfolio, demonstrating your end-to-end UI/UX design skills to potential employers.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
