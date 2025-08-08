import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Palette, Scissors, Shirt, TrendingUp, Globe, Lightbulb, Users, Award } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  const learningOutcomes = [
    {
      icon: Palette,
      title: "Design Excellence",
      description: "Master fashion illustration, color theory, and creative design principles for innovative fashion concepts."
    },
    {
      icon: Scissors,
      title: "Technical Skills",
      description: "Develop expertise in pattern making, draping, garment construction, and professional sewing techniques."
    },
    {
      icon: Shirt,
      title: "Garment Technology",
      description: "Understand textile science, fabric properties, and advanced manufacturing processes in fashion."
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Learn to research, analyze, and predict fashion trends while understanding consumer behavior."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Explore international fashion markets, cultural influences, and sustainable fashion practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Develop creative problem-solving skills and innovative approaches to fashion design challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work effectively in teams, understanding the collaborative nature of the fashion industry."
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "Meet industry standards for quality, presentation, and professional fashion design practices."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Learning Outcomes</h3>
        <p className="text-foreground/70">
          Upon completion of the B.Sc Fashion Design program, students will possess the knowledge, skills, and creative vision necessary to excel in the dynamic fashion industry.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningOutcomes.map((outcome, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-bsd-light-gray">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-bsd-orange/20 transition-colors">
                <outcome.icon className="w-8 h-8 text-bsd-orange" />
              </div>
              <h4 className="text-lg font-semibold text-bsd-gray mb-3">{outcome.title}</h4>
              <p className="text-foreground/70 text-sm">{outcome.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h4 className="text-xl font-semibold text-bsd-gray mb-4">Portfolio Development</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-bsd-gray mb-2">Technical Portfolio</h5>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>• Fashion illustrations and design sketches</li>
              <li>• Pattern making and draping samples</li>
              <li>• Constructed garments and prototypes</li>
              <li>• Textile and fabric research projects</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-bsd-gray mb-2">Creative Portfolio</h5>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>• Fashion collection concepts</li>
              <li>• Trend forecasting presentations</li>
              <li>• Brand development projects</li>
              <li>• Sustainable design initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};