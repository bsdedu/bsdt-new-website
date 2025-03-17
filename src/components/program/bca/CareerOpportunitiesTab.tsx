
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Briefcase, Building, LineChart } from "lucide-react";

export const CareerOpportunitiesTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Career Opportunities</h3>
        <p className="text-foreground/70">
          Our BCA graduates are well-equipped for diverse roles in the tech industry, with specialized skills in either UI/UX Design or AI/ML.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-bsd-gray flex items-center">
              <Briefcase className="w-5 h-5 text-bsd-orange mr-2" />
              UI/UX Design Careers
            </h4>
            <ul className="space-y-3">
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">UI/UX Designer</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Design intuitive interfaces and experiences for websites and applications, focusing on user needs and business goals.
                </p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">Interaction Designer</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Create engaging interactive elements and animations that enhance user experiences across digital products.
                </p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">Front-End Developer</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Implement designs using modern front-end technologies, bridging the gap between design and development.
                </p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">Product Designer</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Lead end-to-end design processes for digital products, from research to implementation and testing.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-bsd-gray flex items-center">
              <LineChart className="w-5 h-5 text-bsd-orange mr-2" />
              AI/ML Careers
            </h4>
            <ul className="space-y-3">
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">Machine Learning Engineer</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Design and implement machine learning systems and applications to solve complex problems.
                </p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">Data Scientist</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Analyze complex datasets to extract insights and build predictive models that drive business decisions.
                </p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">AI Application Developer</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Build applications that leverage AI capabilities such as natural language processing, computer vision, or recommendation systems.
                </p>
              </li>
              <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h5 className="font-medium text-bsd-gray">AI Research Assistant</h5>
                <p className="text-sm text-foreground/70 mt-1">
                  Support AI research teams in developing and testing new algorithms and methodologies.
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10">
          <h4 className="text-lg font-medium text-bsd-gray flex items-center mb-6">
            <Building className="w-5 h-5 text-bsd-orange mr-2" />
            Industry Partners & Employers
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <h5 className="font-medium text-bsd-gray">Tech Giants</h5>
              <p className="text-sm text-center text-foreground/70 mt-1">Google, Microsoft, Amazon</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <h5 className="font-medium text-bsd-gray">Startups</h5>
              <p className="text-sm text-center text-foreground/70 mt-1">Innovative tech startups in Bangalore</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <h5 className="font-medium text-bsd-gray">Product Companies</h5>
              <p className="text-sm text-center text-foreground/70 mt-1">Flipkart, PhonePe, Swiggy</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <h5 className="font-medium text-bsd-gray">Design Studios</h5>
              <p className="text-sm text-center text-foreground/70 mt-1">Leading design firms and creative agencies</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 p-6 bg-bsd-orange/5 rounded-xl">
          <h4 className="text-lg font-medium text-bsd-gray mb-4">Career Support</h4>
          <p className="mb-4">Our dedicated placement cell provides comprehensive career guidance and connects students with leading employers in the tech industry.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3">
              <h5 className="text-xl font-semibold text-bsd-orange">98%</h5>
              <p className="text-sm text-foreground/70">Placement rate for BCA graduates</p>
            </div>
            <div className="p-3">
              <h5 className="text-xl font-semibold text-bsd-orange">40+</h5>
              <p className="text-sm text-foreground/70">Annual recruiting companies</p>
            </div>
            <div className="p-3">
              <h5 className="text-xl font-semibold text-bsd-orange">7.5L</h5>
              <p className="text-sm text-foreground/70">Average starting salary (per annum)</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
