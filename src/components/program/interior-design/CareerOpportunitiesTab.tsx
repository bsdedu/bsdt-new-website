
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Lamp, Ruler, Building2, PenTool, Layout, Home, Users, Brush, ShoppingBag } from "lucide-react";

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
  const residentialCareers = [
    {
      title: "Residential Interior Designer",
      description: "Design aesthetic and functional living spaces for homes, apartments, and private residences.",
      icon: <Home className="w-5 h-5 text-bsd-orange" />,
      salary: "₹5L - ₹15L per annum"
    },
    {
      title: "Kitchen & Bath Designer",
      description: "Specialize in designing ergonomic and beautiful kitchen and bathroom spaces.",
      icon: <Lamp className="w-5 h-5 text-bsd-orange" />,
      salary: "₹4L - ₹12L per annum"
    },
    {
      title: "Furniture Designer",
      description: "Create custom furniture pieces that combine functionality, aesthetics, and client requirements.",
      icon: <PenTool className="w-5 h-5 text-bsd-orange" />,
      salary: "₹4L - ₹10L per annum"
    },
    {
      title: "Home Staging Consultant",
      description: "Prepare residential spaces for sale by enhancing their appeal to potential buyers.",
      icon: <Ruler className="w-5 h-5 text-bsd-orange" />,
      salary: "₹3L - ₹9L per annum"
    }
  ];

  const commercialCareers = [
    {
      title: "Commercial Interior Designer",
      description: "Design functional and branded spaces for offices, retail stores, and hospitality venues.",
      icon: <Building2 className="w-5 h-5 text-bsd-orange" />,
      salary: "₹6L - ₹18L per annum"
    },
    {
      title: "Retail Space Designer",
      description: "Create shopping environments that enhance customer experience and drive sales.",
      icon: <ShoppingBag className="w-5 h-5 text-bsd-orange" />,
      salary: "₹5L - ₹15L per annum"
    },
    {
      title: "Exhibition Designer",
      description: "Design temporary and permanent installations for museums, galleries, and trade shows.",
      icon: <Layout className="w-5 h-5 text-bsd-orange" />,
      salary: "₹5L - ₹16L per annum"
    },
    {
      title: "Hospitality Designer",
      description: "Create memorable experiences through the design of hotels, restaurants, and entertainment venues.",
      icon: <Users className="w-5 h-5 text-bsd-orange" />,
      salary: "₹6L - ₹20L per annum"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Residential Design Careers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {residentialCareers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Commercial Design Careers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercialCareers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-bsd-gray mb-2">Industry Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">₹4-18L</h5>
              <p className="text-sm text-foreground/70">Average Annual Salary</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">23%</h5>
              <p className="text-sm text-foreground/70">Industry Growth Rate</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-3xl font-bold text-bsd-orange">12L+</h5>
              <p className="text-sm text-foreground/70">Jobs by 2026</p>
            </div>
          </div>
          <p className="text-foreground/70">
            The interior design industry in India is projected to grow at a rapid pace due to increased urbanization, rising disposable incomes, and growing awareness about aesthetically pleasing and functional spaces. With the integration of digital tools and sustainable practices, interior designers who specialize in both residential and commercial sectors have excellent opportunities for career advancement.
          </p>
        </div>
      </div>
    </RevealSection>
  );
};
