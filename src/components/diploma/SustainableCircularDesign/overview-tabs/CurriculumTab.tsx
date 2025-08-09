import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, GraduationCap, BookOpen, Leaf, Recycle } from "lucide-react";

export const CurriculumTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-foreground/70">
              The Professional Diploma in Sustainable System & Circular Design is a comprehensive 12-month program divided into modules that build foundational knowledge in sustainability while developing practical skills for creating environmentally responsible design solutions.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-medium text-bsd-gray flex items-center">
                <GraduationCap className="w-5 h-5 text-bsd-orange mr-2" />
                Module 1: Foundations of Sustainability
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Introduction to Sustainable Design Principles</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Environmental Science for Designers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Climate Change and Design Impact</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Systems Thinking and Holistic Design</span>
                </li>
              </ul>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <Recycle className="w-5 h-5 text-bsd-orange mr-2" />
                Module 2: Circular Economy & Material Systems
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Circular Economy Models and Applications</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sustainable Materials and Resource Selection</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Waste Reduction and Recycling Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bio-based Materials and Bioplastics</span>
                </li>
              </ul>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <Leaf className="w-5 h-5 text-bsd-orange mr-2" />
                Module 3: Life Cycle Assessment & Green Design
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Life Cycle Assessment (LCA) Methodology</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Carbon Footprint Calculation and Reduction</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Renewable Energy Integration in Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Green Building and Eco-Architecture</span>
                </li>
              </ul>
              
              <h4 className="font-medium text-bsd-gray flex items-center">
                <BookOpen className="w-5 h-5 text-bsd-orange mr-2" />
                Module 4: Applied Sustainable Design & Innovation
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Biomimicry and Nature-Inspired Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sustainable Packaging and Product Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Innovation in Sustainable Technologies</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Portfolio Development and Presentation</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Sustainability Project</h3>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70 mb-4">
            Throughout the program, you'll work on a comprehensive sustainability project that demonstrates your ability to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Conduct environmental impact assessments</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Design circular economy solutions</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Select and specify sustainable materials</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Calculate carbon footprint and propose reductions</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Develop innovative eco-friendly design solutions</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Present comprehensive sustainability report</span>
            </li>
          </ul>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm text-bsd-gray font-medium">
              The sustainability project will serve as a centerpiece of your professional portfolio, demonstrating your comprehensive understanding of sustainable design principles to potential employers in the green economy.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};