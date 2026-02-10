import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Brain, Users, Lightbulb, Target, Rocket, Award } from "lucide-react";

export const ProgramFeatures: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-bsd-orange" />,
      title: "AI-Powered Design",
      description: "Learn to integrate machine learning and AI technologies into service design processes for intelligent user experiences."
    },
    {
      icon: <Users className="w-6 h-6 text-bsd-orange" />,
      title: "Human-Centered Approach",
      description: "Master the balance between AI capabilities and human needs to create meaningful, ethical service solutions."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-bsd-orange" />,
      title: "Innovation Framework",
      description: "Develop systematic approaches to identify opportunities and create breakthrough service innovations using AI."
    },
    {
      icon: <Target className="w-6 h-6 text-bsd-orange" />,
      title: "Strategic Thinking",
      description: "Gain skills in service strategy, business model innovation, and digital transformation leadership."
    },
    {
      icon: <Rocket className="w-6 h-6 text-bsd-orange" />,
      title: "Practical Application",
      description: "Work on real industry projects applying AI tools and service design methodologies to solve complex challenges."
    },
    {
      icon: <Award className="w-6 h-6 text-bsd-orange" />,
      title: "Industry Recognition",
      description: "Earn a professional credential recognized by leading tech companies and design organizations globally."
    }
  ];

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
              Discover the unique features that set our AI & Service Design program apart and prepare you 
              for leadership roles in the digital transformation era.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} isHoverable className="bg-white border-bsd-orange/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
