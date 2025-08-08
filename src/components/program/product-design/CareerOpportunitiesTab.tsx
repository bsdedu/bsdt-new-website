import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Briefcase, TrendingUp, DollarSign, MapPin } from "lucide-react";

export const CareerOpportunitiesTab: React.FC = () => {
  const careerPaths = [
    {
      title: "Product Designer",
      description: "Create innovative product concepts and designs for consumer, industrial, and tech companies.",
      salary: "₹4-12 LPA",
      growth: "Very High"
    },
    {
      title: "UX/UI Designer",
      description: "Focus on digital product interfaces and user experience design for apps and websites.",
      salary: "₹5-15 LPA",
      growth: "Very High"
    },
    {
      title: "Industrial Designer",
      description: "Design consumer products, appliances, and manufacturing equipment for mass production.",
      salary: "₹4-10 LPA",
      growth: "High"
    },
    {
      title: "Design Engineer",
      description: "Bridge design and engineering to develop technically feasible and manufacturable products.",
      salary: "₹5-12 LPA",
      growth: "High"
    },
    {
      title: "Design Consultant",
      description: "Provide design expertise to multiple clients across various industries and product categories.",
      salary: "₹6-20 LPA",
      growth: "Very High"
    },
    {
      title: "Innovation Manager",
      description: "Lead product innovation initiatives and design thinking processes in organizations.",
      salary: "₹8-25 LPA",
      growth: "Very High"
    },
    {
      title: "Design Entrepreneur",
      description: "Start your own design studio, product company, or design technology venture.",
      salary: "₹10-50+ LPA",
      growth: "Unlimited"
    },
    {
      title: "Design Researcher",
      description: "Conduct user research, market analysis, and design trend forecasting for product development.",
      salary: "₹4-8 LPA",
      growth: "High"
    }
  ];

  const topEmployers = [
    "Apple", "Google", "Microsoft", "Samsung", "Flipkart", "Amazon",
    "Ola", "Swiggy", "Zomato", "Paytm", "Byju's", "Unacademy",
    "Tata Motors", "Mahindra", "Bajaj Auto", "Hero MotoCorp"
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Career Opportunities</h3>
        <p className="text-foreground/70">
          Product design offers diverse career paths across technology, manufacturing, consulting, and entrepreneurship. Our graduates excel in creating innovative solutions that enhance user experiences and business outcomes.
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
          Top Product Design Employers
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
            <h4 className="text-2xl font-bold text-bsd-gray">95%</h4>
            <p className="text-foreground/70">Placement Rate</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-bsd-gray">₹4-8L</h4>
            <p className="text-foreground/70">Starting Salary Range</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-white">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-2xl font-bold text-bsd-gray">60+</h4>
            <p className="text-foreground/70">Hiring Partners</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};