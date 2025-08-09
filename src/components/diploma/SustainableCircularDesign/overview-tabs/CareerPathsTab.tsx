import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Leaf, Building, Package, Recycle, TreePine, Lightbulb, Calculator, Factory } from "lucide-react";

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
  const coreCareers = [
    {
      title: "Sustainable Design Consultant",
      description: "Advise organizations on implementing sustainable design practices and circular economy principles.",
      icon: <Leaf className="w-5 h-5 text-bsd-orange" />,
      salary: "₹7L - ₹18L per annum"
    },
    {
      title: "Environmental Product Designer",
      description: "Design eco-friendly products with minimal environmental impact throughout their lifecycle.",
      icon: <Package className="w-5 h-5 text-bsd-orange" />,
      salary: "₹6L - ₹15L per annum"
    },
    {
      title: "Circular Economy Specialist",
      description: "Develop and implement circular business models that eliminate waste and maximize resource efficiency.",
      icon: <Recycle className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹20L per annum"
    },
    {
      title: "Green Building Designer",
      description: "Design sustainable buildings and spaces that minimize environmental impact and maximize energy efficiency.",
      icon: <Building className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹22L per annum"
    }
  ];

  const specializedCareers = [
    {
      title: "Life Cycle Assessment Analyst",
      description: "Conduct comprehensive environmental impact assessments for products, services, and systems.",
      icon: <Calculator className="w-5 h-5 text-bsd-orange" />,
      salary: "₹9L - ₹25L per annum"
    },
    {
      title: "Biomimicry Innovation Designer",
      description: "Develop innovative solutions inspired by nature's designs and processes for sustainable applications.",
      icon: <Lightbulb className="w-5 h-5 text-bsd-orange" />,
      salary: "₹10L - ₹28L per annum"
    },
    {
      title: "Sustainable Materials Researcher",
      description: "Research and develop new sustainable materials and manufacturing processes for various industries.",
      icon: <TreePine className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹24L per annum"
    },
    {
      title: "Corporate Sustainability Manager",
      description: "Lead organizational sustainability initiatives and implement environmental management systems.",
      icon: <Factory className="w-5 h-5 text-bsd-orange" />,
      salary: "₹12L - ₹35L per annum"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Core Sustainable Design Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCareers.map((career, index) => (
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
              <h5 className="text-3xl font-bold text-bsd-orange">45%</h5>
              <p className="text-sm text-foreground/70">Growth in Green Jobs</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">₹15L+</h5>
              <p className="text-sm text-foreground/70">Average Annual Salary</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">12k+</h5>
              <p className="text-sm text-foreground/70">Sustainability Job Openings</p>
            </div>
          </div>
          <p className="text-foreground/70">
            The sustainable design field is experiencing unprecedented growth as organizations worldwide prioritize environmental responsibility. From startups developing bio-based materials to multinational corporations implementing circular economy strategies, there's a growing demand for professionals who can bridge design expertise with environmental consciousness. This intersection of creativity and sustainability offers both meaningful work and competitive compensation.
          </p>
        </div>
      </div>
    </RevealSection>
  );
};