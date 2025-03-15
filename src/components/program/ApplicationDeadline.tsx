
import React from 'react';
import { Card } from "@/components/ui-elements/Card";
import { Clock, Users, Calendar } from "lucide-react";

interface ApplicationDeadlineProps {
  lastDate: string;
  startDate: string;
  seatsAvailable: number;
  sessionStart?: string;
}

export const ApplicationDeadline: React.FC<ApplicationDeadlineProps> = ({
  lastDate,
  startDate,
  seatsAvailable,
  sessionStart
}) => {
  return (
    <Card className="p-4 border-l-4 border-l-bsd-orange relative overflow-hidden mt-6 group">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-bsd-orange/5 via-bsd-orange/10 to-bsd-orange/5 bg-gradient-animate -z-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 particles-bg opacity-30 -z-10"></div>
      
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4 justify-between relative z-10">
        <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-y-[-2px]">
          <div className="relative">
            <div className="absolute inset-0 bg-bsd-orange/20 rounded-full animate-ping opacity-70"></div>
            <Clock className="w-5 h-5 text-bsd-orange relative" />
          </div>
          <div>
            <p className="text-sm font-medium text-bsd-gray">Application Window</p>
            <p className="text-sm text-foreground/70">{startDate} - {lastDate}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-y-[-2px]">
          <div className="relative">
            <div className="absolute inset-0 bg-bsd-orange/20 rounded-full animate-pulse opacity-70"></div>
            <Users className="w-5 h-5 text-bsd-orange relative" />
          </div>
          <div>
            <p className="text-sm font-medium text-bsd-gray">Available Seats</p>
            <p className="text-sm text-foreground/70">{seatsAvailable} seats remaining</p>
          </div>
        </div>
        
        {sessionStart && (
          <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-y-[-2px]">
            <div className="relative">
              <div className="absolute inset-0 bg-bsd-orange/20 rounded-full animate-pulse opacity-70"></div>
              <Calendar className="w-5 h-5 text-bsd-orange relative" />
            </div>
            <div>
              <p className="text-sm font-medium text-bsd-gray">Session Starts</p>
              <p className="text-sm text-foreground/70">{sessionStart}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
