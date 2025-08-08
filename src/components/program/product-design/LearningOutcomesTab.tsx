import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Lightbulb, Users, Cog, Palette, Globe, Target, Package, Award } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  const learningOutcomes = [
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Develop innovative solutions to complex design challenges using design thinking methodologies."
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Master user research, empathy mapping, and usability testing for human-centered products."
    },
    {
      icon: Cog,
      title: "Technical Proficiency",
      description: "Gain expertise in 3D modeling, prototyping, and manufacturing processes."
    },
    {
      icon: Palette,
      title: "Aesthetic Excellence",
      description: "Understand form, function, color theory, and visual communication in product design."
    },
    {
      icon: Globe,
      title: "Sustainability Awareness",
      description: "Learn eco-friendly design principles, material selection, and circular economy concepts."
    },
    {
      icon: Target,
      title: "Market Understanding",
      description: "Analyze market trends, consumer behavior, and business requirements for product success."
    },
    {
      icon: Package,
      title: "Product Development",
      description: "Master the complete product development lifecycle from concept to market launch."
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "Meet industry standards for quality, presentation, and professional design practices."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Learning Outcomes</h3>
        <p className="text-foreground/70">
          Upon completion of the BVA Product Design program, students will possess comprehensive skills in design thinking, technical execution, and professional practice necessary for successful product design careers.
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
            <h5 className="font-medium text-bsd-gray mb-2">Design Portfolio</h5>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>• Concept sketches and ideation processes</li>
              <li>• 3D renderings and technical drawings</li>
              <li>• Physical prototypes and mock-ups</li>
              <li>• User research and testing documentation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-bsd-gray mb-2">Professional Projects</h5>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>• Market-ready product designs</li>
              <li>• Sustainable design initiatives</li>
              <li>• Technology integration projects</li>
              <li>• Brand collaboration works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};