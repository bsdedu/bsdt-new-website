
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Sparkles, Palette, Robot, BrainCircuit, Lightbulb, Shapes, Laptop, Rocket } from "lucide-react";

export const AIEmpoweredSection: React.FC = () => {
  const aiFeatures = [
    {
      icon: <Palette className="w-7 h-7 text-bsd-orange" />,
      title: "AI-Assisted Design",
      description: "Learn to use AI tools for enhancing creativity and speeding up design workflows."
    },
    {
      icon: <BrainCircuit className="w-7 h-7 text-bsd-orange" />,
      title: "Generative Design",
      description: "Master prompt engineering to create unique visual concepts and expand creative possibilities."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-bsd-orange" />,
      title: "Creative Automation",
      description: "Automate repetitive design tasks while focusing on high-value creative decision making."
    },
    {
      icon: <Robot className="w-7 h-7 text-bsd-orange" />,
      title: "AI Collaboration",
      description: "Develop skills to effectively collaborate with AI as a creative partner in design processes."
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-bsd-orange" />,
      title: "Conceptual Innovation",
      description: "Use AI to explore new concepts and push the boundaries of traditional design thinking."
    },
    {
      icon: <Shapes className="w-7 h-7 text-bsd-orange" />,
      title: "Smart Layout Systems",
      description: "Leverage AI for responsive layouts and dynamic composition that adapt to various formats."
    },
    {
      icon: <Laptop className="w-7 h-7 text-bsd-orange" />,
      title: "Future-Ready Skills",
      description: "Prepare for evolving industry demands with cutting-edge AI-enhanced design practices."
    },
    {
      icon: <Rocket className="w-7 h-7 text-bsd-orange" />,
      title: "Career Acceleration",
      description: "Gain competitive advantage in the job market with specialized AI+design expertise."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center mb-12">
            <h6 className="text-bsd-orange font-medium mb-3">FUTURE-READY EDUCATION</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
              AI-Empowered Design Curriculum
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Our curriculum integrates cutting-edge AI tools and methodologies, preparing you to lead in an industry 
              being transformed by artificial intelligence.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="border border-muted/30 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-bsd-orange/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">{feature.title}</h3>
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
