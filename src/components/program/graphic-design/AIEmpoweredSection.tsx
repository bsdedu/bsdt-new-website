
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Palette, Bot, BrainCircuit, Lightbulb, Shapes, Laptop, Rocket } from "lucide-react";

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
      icon: <Bot className="w-7 h-7 text-bsd-orange" />,
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

  return null; // Return null to render nothing
};
