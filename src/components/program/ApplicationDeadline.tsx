
import React from 'react';
import { Card } from "@/components/ui-elements/Card";
import { Clock, Users, Calendar } from "lucide-react";

interface ApplicationDeadlineDate {
  session: string;
  deadline: string;
}

interface ApplicationDeadlineProps {
  lastDate?: string;
  startDate?: string;
  seatsAvailable?: number;
  sessionStart?: string;
  dates?: ApplicationDeadlineDate[];
}

export const ApplicationDeadline: React.FC<ApplicationDeadlineProps> = ({
  lastDate = "August 15, 2023",
  startDate = "January 15, 2023",
  seatsAvailable = 60,
  sessionStart = "September 2023",
  dates
}) => {
  return (
    <Card className="p-4 border-l-4 border-l-bsd-orange relative overflow-hidden mt-6 group">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-bsd-orange/5 via-bsd-orange/10 to-bsd-orange/5 bg-gradient-animate -z-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 particles-bg opacity-30 -z-10"></div>
      
      {/* Content */}
      {dates ? (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-bsd-gray mb-2">Application Deadlines</h3>
          {dates.map((date, index) => (
            <div key={index} className="flex justify-between items-center p-2 border-b border-dashed border-gray-200 last:border-0">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-bsd-orange" />
                <span className="text-sm font-medium">{date.session}</span>
              </div>
              <span className="text-sm text-foreground/70">{date.deadline}</span>
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </Card>
  );
};
