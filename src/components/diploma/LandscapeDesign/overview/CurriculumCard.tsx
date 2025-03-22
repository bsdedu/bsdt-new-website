
import React from 'react';
import { Card } from "@/components/ui-elements/Card";
import { CheckCircle2 } from "lucide-react";

interface CurriculumCardProps {
  title: string;
  modules: string[];
  moduleNumber: number;
}

export const CurriculumCard: React.FC<CurriculumCardProps> = ({ title, modules, moduleNumber }) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">{moduleNumber}</span>
        {title}
      </h3>
      <ul className="space-y-3">
        {modules.map((module, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
            <span>{module}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
