import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Briefcase, TrendingUp, DollarSign, MapPin } from "lucide-react";

export const CareerOpportunitiesTab: React.FC = () => {
  const careerPaths = [
    {
      title: "Fashion Designer",
      description: "Create original clothing designs and oversee the development of fashion collections.",
      salary: "₹3-8 LPA",
      growth: "High"
    },
    {
      title: "Fashion Illustrator",
      description: "Specialize in creating detailed fashion sketches and technical drawings.",
      salary: "₹2.5-6 LPA",
      growth: "Medium"
    },
    {
      title: "Pattern Maker",
      description: "Develop and create patterns for garment production and manufacturing.",
      salary: "₹3-7 LPA",
      growth: "High"
    },
    {
      title: "Fashion Stylist",
      description: "Work with clients, brands, or media to create compelling fashion looks.",
      salary: "₹2-8 LPA",
      growth: "High"
    },
    {
      title: "Textile Designer",
      description: "Design fabrics, prints, and surface patterns for fashion and home textiles.",
      salary: "₹3-6 LPA",
      growth: "Medium"
    },
    {
      title: "Fashion Merchandiser",
      description: "Manage product planning, buying, and retail strategy for fashion brands.",
      salary: "₹4-10 LPA",
      growth: "High"
    },
    {
      title: "Fashion Entrepreneur",
      description: "Start your own fashion label or fashion-related business venture.",
      salary: "₹5-20+ LPA",
      growth: "Very High"
    },
    {
      title: "Costume Designer",
      description: "Design costumes for theater, film, television, and entertainment industry.",
      salary: "₹3-12 LPA",
      growth: "High"
    }
  ];

  const topEmployers = [
    "Myntra", "Flipkart Fashion", "Ajio", "H&M", "Zara", "Fabindia",
    "Raymond", "Aditya Birla Fashion", "Reliance Trends", "Lifestyle",
    "Pantaloons", "Forever 21", "Max Fashion", "Westside"
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Career Opportunities</h3>
        <p className="text-foreground/70">
          The fashion industry offers diverse career paths from creative design roles to business and technology positions. Our graduates are equipped to excel in various sectors of this dynamic industry.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careerPaths.map((career, index) => (
          <Card key={index} className="border-0 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-bsd-gray">{career.title}</h4>
                <div className="flex items-center gap-1 text-sm text-bsd-orange">
                  <TrendingUp className="w-4 h-4" />
                  <span>{career.growth}</span>
                </div>
              </div>
              <p className="text-foreground/70 text-sm mb-4">{career.description}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-green-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{career.salary}</span>
                </div>
                <div className="flex items-center gap-1 text-foreground/60">
                  <Briefcase className="w-4 h-4" />
                  <span>Full-time</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-bsd-light-gray p-8 rounded-lg">
        <h4 className="text-xl font-semibold text-bsd-gray mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-bsd-orange" />
          Top Fashion Employers
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {topEmployers.map((employer, index) => (
            <div key={index} className="bg-white p-3 rounded text-center text-sm font-medium text-bsd-gray hover:shadow-md transition-shadow">
              {employer}
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-bsd-gray">100%</h4>
            <p className="text-foreground/70">Placement Assistance</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-bsd-gray">₹2-4L</h4>
            <p className="text-foreground/70">Starting Salary Range</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-2xl font-bold text-bsd-gray">50+</h4>
            <p className="text-foreground/70">Hiring Partners</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};