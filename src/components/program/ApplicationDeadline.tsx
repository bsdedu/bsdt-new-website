
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface ApplicationDeadlineProps {
  lastDate: string;
  startDate: string;
  seatsAvailable: number;
}

export const ApplicationDeadline: React.FC<ApplicationDeadlineProps> = ({
  lastDate,
  startDate,
  seatsAvailable
}) => {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
      <div className="flex items-center">
        <Badge variant="outline" className="bg-white text-bsd-orange border-bsd-orange px-3 py-1.5">
          Application Open
        </Badge>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-1.5 text-bsd-orange" />
            <span>Last Date: {lastDate}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-1.5 text-bsd-orange" />
            <span>Starts: {startDate}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-foreground/70">
          <span className="font-semibold text-bsd-gray">{seatsAvailable}</span> seats available for upcoming batch
        </div>
        <button className="bg-bsd-orange hover:bg-bsd-orange/90 text-white text-sm font-medium py-1.5 px-4 rounded transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};
