
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Smartphone, MonitorSmartphone, Globe, Layout, Braces, Brain, Users, DollarSign } from "lucide-react";

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

export const CareerPathsTab: React.FC = () => {
  const uiuxCareers = [
    {
      title: "UX Designer",
      description: "Research user needs, create user flows, wireframes, and prototypes to design intuitive experiences.",
      icon: <Users className="w-5 h-5 text-bsd-orange" />,
      salary: "₹6L - ₹15L per annum"
    },
    {
      title: "UI Designer",
      description: "Create visually appealing interfaces with focus on typography, color theory, and visual hierarchy.",
      icon: <Layout className="w-5 h-5 text-bsd-orange" />,
      salary: "₹5L - ₹14L per annum"
    },
    {
      title: "Product Designer",
      description: "Combine UX and UI skills to guide product development from concept to launch with user-centered approach.",
      icon: <Smartphone className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹20L per annum"
    },
    {
      title: "Interaction Designer",
      description: "Focus on creating engaging interactive elements and micro-interactions for digital products.",
      icon: <MonitorSmartphone className="w-5 h-5 text-bsd-orange" />,
      salary: "₹7L - ₹16L per annum"
    }
  ];

  const specializedCareers = [
    {
      title: "UX Researcher",
      description: "Specialize in user research methods to gather insights that drive design decisions.",
      icon: <Brain className="w-5 h-5 text-bsd-orange" />,
      salary: "₹7L - ₹18L per annum"
    },
    {
      title: "Information Architect",
      description: "Structure and organize content and data to improve navigation and findability in complex systems.",
      icon: <Globe className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹18L per annum"
    },
    {
      title: "UX Engineer",
      description: "Bridge the gap between design and development by implementing UI/UX designs with front-end code.",
      icon: <Braces className="w-5 h-5 text-bsd-orange" />,
      salary: "₹9L - ₹22L per annum"
    },
    {
      title: "Design Systems Specialist",
      description: "Create and maintain design systems that ensure consistency across products and improve workflow.",
      icon: <DollarSign className="w-5 h-5 text-bsd-orange" />,
      salary: "₹10L - ₹25L per annum"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Core UI/UX Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uiuxCareers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Specialized Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedCareers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-bsd-gray mb-2">Industry Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">30%</h5>
              <p className="text-sm text-foreground/70">Growth in UI/UX Jobs</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">₹12L+</h5>
              <p className="text-sm text-foreground/70">Average Annual Salary</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">9.8k+</h5>
              <p className="text-sm text-foreground/70">Job Openings in India</p>
            </div>
          </div>
          <p className="text-foreground/70">
            The UI/UX design field continues to grow rapidly as companies increasingly recognize the value of user-centered design. With the rise of digital products and services across all industries, skilled UI/UX professionals who understand human-computer interaction principles are in high demand, commanding competitive salaries and enjoying diverse career opportunities.
          </p>
        </div>
      </div>
    </RevealSection>
  );
};
