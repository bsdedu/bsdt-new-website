
import React from 'react';
import { Card } from "@/components/ui-elements/Card";
import { MousePointer, Layout, Brain, Smartphone, Lightbulb } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const CareerPathsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
            <MousePointer className="w-6 h-6 text-bsd-orange" />
          </div>
          <h3 className="text-xl font-bold text-bsd-gray mb-2">UX Designer</h3>
          <p className="text-foreground/70 mb-4">Conduct user research, create personas, user flows, and wireframes to design intuitive digital experiences that solve real problems.</p>
          <div className="text-sm text-bsd-orange font-medium">
            Average Salary: ₹8-15 LPA
          </div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
            <Layout className="w-6 h-6 text-bsd-orange" />
          </div>
          <h3 className="text-xl font-bold text-bsd-gray mb-2">UI Designer</h3>
          <p className="text-foreground/70 mb-4">Craft visually stunning interfaces with consistent design systems and responsive layouts for websites, apps, and digital products.</p>
          <div className="text-sm text-bsd-orange font-medium">
            Average Salary: ₹6-12 LPA
          </div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-bsd-orange" />
          </div>
          <h3 className="text-xl font-bold text-bsd-gray mb-2">Product Designer</h3>
          <p className="text-foreground/70 mb-4">Blend UX research, UI design, and product strategy to create cohesive experiences that align business goals with user needs.</p>
          <div className="text-sm text-bsd-orange font-medium">
            Average Salary: ₹10-20 LPA
          </div>
        </Card>
      </div>
    </RevealSection>
  );
};
