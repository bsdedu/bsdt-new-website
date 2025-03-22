
import React from 'react';
import { Card } from "@/components/ui-elements/Card";

interface CareerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  salary: string;
}

export const CareerCard: React.FC<CareerCardProps> = ({ title, description, icon, salary }) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
      <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-bsd-gray mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <div className="text-sm text-bsd-orange font-medium">
        Average Salary: {salary}
      </div>
    </Card>
  );
};
