
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Smartphone, Layout, MousePointer, Users, PenTool, Box, Lightbulb, BrainCircuit } from "lucide-react";

interface CareerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  salary: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, description, icon, salary }) => {
  return (
    <Card className="border-0 shadow-sm bg-white overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5 mt-1">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-bsd-gray">{title}</h3>
              <p className="text-sm text-foreground/70 mt-1">{description}</p>
            </div>
          </div>
          <div className="border-t border-border/50 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-bsd-gray">Average Salary</span>
              <span className="text-sm text-bsd-orange font-semibold">{salary}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const CareerOpportunitiesTab: React.FC = () => {
  const careers = [
    {
      title: "UX Designer",
      description: "Research user needs, create personas, user flows, wireframes, and conduct usability testing to ensure intuitive digital experiences.",
      icon: <Users className="w-5 h-5 text-bsd-orange" />,
      salary: "₹6L - ₹20L per annum"
    },
    {
      title: "UI Designer",
      description: "Create visually engaging interfaces, design systems, and ensure consistent brand experiences across digital products.",
      icon: <Layout className="w-5 h-5 text-bsd-orange" />,
      salary: "₹5L - ₹18L per annum"
    },
    {
      title: "Interaction Designer",
      description: "Focus on how users interact with digital products, creating micro-interactions and motion design that enhance user experience.",
      icon: <MousePointer className="w-5 h-5 text-bsd-orange" />,
      salary: "₹7L - ₹22L per annum"
    },
    {
      title: "Product Designer",
      description: "Combine UX/UI skills with strategic thinking to shape digital products from conception to launch and iteration.",
      icon: <Box className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹25L per annum"
    },
    {
      title: "Mobile App Designer",
      description: "Specialize in creating user-friendly and visually appealing experiences for iOS and Android applications.",
      icon: <Smartphone className="w-5 h-5 text-bsd-orange" />,
      salary: "₹6L - ₹20L per annum"
    },
    {
      title: "UX Researcher",
      description: "Conduct user research through interviews, surveys, and usability tests to inform design decisions based on user needs.",
      icon: <Lightbulb className="w-5 h-5 text-bsd-orange" />,
      salary: "₹7L - ₹24L per annum"
    },
    {
      title: "Design Systems Specialist",
      description: "Create and maintain comprehensive design systems that ensure consistency across large digital products and platforms.",
      icon: <PenTool className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹25L per annum"
    },
    {
      title: "UX/UI Team Lead",
      description: "Lead design teams, set design direction, and bridge communication between designers, developers, and stakeholders.",
      icon: <BrainCircuit className="w-5 h-5 text-bsd-orange" />,
      salary: "₹15L - ₹35L per annum"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Design Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careers.slice(0, 4).map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Specialized Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careers.slice(4, 8).map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-bsd-gray mb-2">Industry Demand</h3>
          <p className="text-foreground/70">
            The demand for interaction and experience designers is projected to grow by 22% over the next decade, significantly higher than average. As companies increasingly prioritize digital transformation, UX/UI designers have become essential for ensuring competitive advantage through intuitive and engaging user experiences.
          </p>
        </div>
      </div>
    </RevealSection>
  );
};
