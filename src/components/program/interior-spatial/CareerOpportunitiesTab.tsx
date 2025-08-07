import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Building, Home, Store, Hotel, ArrowRight } from "lucide-react";

export const CareerOpportunitiesTab: React.FC = () => {
  const careerPaths = [
    {
      title: "Interior Spatial Designer",
      description: "Design and renovate internal spaces, from structural alterations to furnishings and lighting schemes",
      icon: Home,
      opportunities: ["Residential Interior Designer", "Commercial Space Designer", "Furniture Designer", "Lighting Designer"]
    },
    {
      title: "Architectural Design Consultant", 
      description: "Bridge interior design and architecture, focusing on spatial innovation and sustainable settings",
      icon: Building,
      opportunities: ["Architectural Design Consultant", "Spatial Planning Specialist", "Construction Design Manager", "Building Information Modeling (BIM) Specialist"]
    },
    {
      title: "Commercial Design Specialist",
      description: "Specialize in retail, hospitality, and corporate interior design with focus on user experience",
      icon: Store,
      opportunities: ["Retail Space Designer", "Exhibition Designer", "Corporate Interior Designer", "Hospitality Designer"]
    },
    {
      title: "Design Entrepreneur",
      description: "Start your own interior design practice or consultation firm with comprehensive business skills",
      icon: Hotel,
      opportunities: ["Interior Design Studio Owner", "Design Consultant", "Project Management Consultant", "Materials & Construction Advisor"]
    }
  ];

  const industryPartners = [
    "Architecture Firms", "Interior Design Studios", "Real Estate Development Companies", 
    "Furniture Manufacturing Companies", "Construction Companies", "Design Consultancies",
    "Hospitality & Retail Chains", "Government Planning Departments"
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careerPaths.map((path, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center">
                  <path.icon className="w-5 h-5 text-bsd-orange" />
                </div>
                <h3 className="text-lg font-semibold text-bsd-gray">{path.title}</h3>
              </div>
              <p className="text-foreground/70 text-sm mt-2">{path.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-medium text-bsd-gray text-sm">Career Opportunities:</h4>
                <ul className="space-y-2">
                  {path.opportunities.map((opportunity, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-bsd-orange" />
                      <span className="text-sm text-foreground/80">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Industry Connections</h3>
          <p className="text-foreground/70">Sectors where our graduates excel</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industryPartners.map((partner, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <span className="text-sm text-foreground/80">{partner}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};