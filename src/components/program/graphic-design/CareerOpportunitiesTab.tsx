
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check } from "lucide-react";

export const CareerOpportunitiesTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Career Opportunities</h3>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-bsd-gray">Design Studios & Agencies</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Graphic Designer</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Brand Identity Designer</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Art Director</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Creative Director</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-bsd-gray">Digital & Technology</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>UI Designer</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Web Designer</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Motion Graphics Designer</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Social Media Designer</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-bsd-gray">Corporate & Publishing</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Brand Manager</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Editorial Designer</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Packaging Designer</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>Design Researcher</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-bsd-light-gray rounded-xl">
          <h4 className="font-medium text-bsd-gray mb-4">Industry Insights</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h5 className="text-3xl font-bold text-bsd-orange">₹4-12L</h5>
              <p className="text-sm text-foreground/70">Average Starting Salary</p>
            </div>
            <div className="text-center p-4">
              <h5 className="text-3xl font-bold text-bsd-orange">25%</h5>
              <p className="text-sm text-foreground/70">Industry Growth Rate</p>
            </div>
            <div className="text-center p-4">
              <h5 className="text-3xl font-bold text-bsd-orange">15L+</h5>
              <p className="text-sm text-foreground/70">Jobs by 2025</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
