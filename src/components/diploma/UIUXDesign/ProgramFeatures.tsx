
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Check } from "lucide-react";

export const ProgramFeatures: React.FC = () => {
  const features = [
    {
      title: "Industry-Relevant Curriculum",
      description: "Our curriculum is crafted in collaboration with industry experts to ensure you learn what's relevant in the current UI/UX landscape."
    },
    {
      title: "Hands-on Project Work",
      description: "Apply your skills to real-world projects and build a portfolio that showcases your UI/UX capabilities to potential employers."
    },
    {
      title: "Professional Tools & Software",
      description: "Master industry-standard design tools including Figma, Adobe XD, Sketch, and various prototyping tools used by professionals."
    },
    {
      title: "User Research Methods",
      description: "Learn how to conduct effective user research, interviews, usability testing, and create user personas to inform your design decisions."
    },
    {
      title: "Design Thinking Process",
      description: "Develop a deep understanding of the design thinking methodology and apply it to solve complex UX problems effectively."
    },
    {
      title: "Career Support",
      description: "Receive placement assistance, interview preparation, and networking opportunities with potential employers in the UI/UX field."
    }
  ];
  
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM FEATURES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              What Makes Our UI/UX Design Program Special
            </h2>
          </div>
        </RevealSection>
        
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <Card key={index} isHoverable className="border-t-4 border-t-bsd-orange bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-2 flex-shrink-0">
                      <Check className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-bsd-gray">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
        
        <RevealSection delay={200}>
          <div className="mt-16 bg-white rounded-2xl p-6 md:p-8 border border-border/40 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-bsd-gray mb-4">Course Modules</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>Design Thinking & UX Fundamentals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>User Research & Information Architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>UI Design & Visual Communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>Responsive Design & Mobile UX</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-bsd-gray mb-4">Career Pathways</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>UI/UX Designer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>Product Designer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>Interaction Designer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>UX Researcher</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <span>Information Architect</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
