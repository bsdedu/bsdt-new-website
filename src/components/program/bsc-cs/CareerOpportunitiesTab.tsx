
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Database, ChartBar, UserCheck, Network, ShieldCheck, Lock, Search, BarChart4 } from "lucide-react";

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
  const dataAnalyticsCareers = [
    {
      title: "Data Analyst",
      description: "Collect, process, and analyze datasets to identify patterns and insights that drive business decisions.",
      icon: <Database className="w-5 h-5 text-bsd-orange" />,
      salary: "₹6L - ₹12L per annum"
    },
    {
      title: "Business Intelligence Analyst",
      description: "Analyze complex data to develop insights and implement data-driven strategies for businesses.",
      icon: <ChartBar className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹15L per annum"
    },
    {
      title: "Data Visualization Specialist",
      description: "Create clear, engaging visualizations that communicate complex data insights to stakeholders.",
      icon: <BarChart4 className="w-5 h-5 text-bsd-orange" />,
      salary: "₹7L - ₹14L per annum"
    },
    {
      title: "Market Research Analyst",
      description: "Study market conditions to examine potential sales of products or services and forecast trends.",
      icon: <Search className="w-5 h-5 text-bsd-orange" />,
      salary: "₹5L - ₹10L per annum"
    }
  ];

  const cyberSecurityCareers = [
    {
      title: "Security Analyst",
      description: "Monitor networks for security breaches and investigate violations when they occur.",
      icon: <ShieldCheck className="w-5 h-5 text-bsd-orange" />,
      salary: "₹7L - ₹15L per annum"
    },
    {
      title: "Penetration Tester",
      description: "Attempt to breach computer systems, networks, and applications to find security vulnerabilities.",
      icon: <Lock className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹17L per annum"
    },
    {
      title: "Network Security Engineer",
      description: "Design and implement security measures to protect computer networks and systems.",
      icon: <Network className="w-5 h-5 text-bsd-orange" />,
      salary: "₹9L - ₹18L per annum"
    },
    {
      title: "Incident Response Analyst",
      description: "Identify, analyze, and respond to cyber threats and security incidents to minimize damage.",
      icon: <UserCheck className="w-5 h-5 text-bsd-orange" />,
      salary: "₹8L - ₹16L per annum"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Data Analytics Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataAnalyticsCareers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Cyber Security Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cyberSecurityCareers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
        
        <div className="bg-bsd-light-gray rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-bsd-gray mb-2">Industry Demand</h3>
          <p className="text-foreground/70">
            The demand for data analytics and cybersecurity professionals is projected to grow by 33% by 2030, significantly higher than average across all occupations. As organizations continue to expand their digital footprint, the need for skilled professionals who can analyze data and protect digital assets becomes crucial.
          </p>
        </div>
      </div>
    </RevealSection>
  );
};
