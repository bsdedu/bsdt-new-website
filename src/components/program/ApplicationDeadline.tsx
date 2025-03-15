
import React from 'react';
import { Card } from "@/components/ui-elements/Card";
import { Clock, Users } from "lucide-react";

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
    <Card className="p-4 border-l-4 border-l-bsd-orange bg-bsd-orange/5 mt-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-bsd-orange" />
          <div>
            <p className="text-sm font-medium text-bsd-gray">Application Window</p>
            <p className="text-sm text-foreground/70">{startDate} - {lastDate}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-bsd-orange" />
          <div>
            <p className="text-sm font-medium text-bsd-gray">Available Seats</p>
            <p className="text-sm text-foreground/70">{seatsAvailable} seats remaining</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
