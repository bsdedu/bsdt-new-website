
import React from 'react';
import { CheckCircle2 } from "lucide-react";

interface LearningOutcomeProps {
  title: string;
  description: string;
}

export const LearningOutcome: React.FC<LearningOutcomeProps> = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
        <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-bsd-gray mb-1">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};
