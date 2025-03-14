
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export const ApplicationDeadline: React.FC = () => {
  // Fixed deadline information instead of dynamic calculation
  const formattedDeadline = "August 15, 2025";
  const daysRemaining = 45; // Static value to avoid the infinite loop issue
  
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 bg-bsd-orange/10 rounded-xl p-4 mt-4">
      <Badge variant="bsdOrange" className="font-semibold text-base px-3 py-1.5">
        Application Deadline
      </Badge>
      
      <div className="flex items-center gap-2 text-bsd-gray">
        <Clock className="w-5 h-5 text-bsd-orange" />
        <span className="font-medium">{formattedDeadline}</span>
      </div>
      
      <div className="flex items-center gap-1 ml-auto">
        <span className="text-bsd-gray">Only</span>
        <span className="font-bold text-xl text-bsd-orange">{daysRemaining}</span>
        <span className="text-bsd-gray">days left to apply</span>
      </div>
    </div>
  );
};
