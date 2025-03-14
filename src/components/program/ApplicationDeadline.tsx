
import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export const ApplicationDeadline: React.FC = () => {
  const [deadline, setDeadline] = useState<Date>(new Date());
  const [daysRemaining, setDaysRemaining] = useState<number>(0);
  
  useEffect(() => {
    // Function to calculate next deadline
    const calculateNextDeadline = () => {
      const today = new Date();
      let nextDeadline: Date;
      
      // Start with March 15th
      if (today.getMonth() < 2 || (today.getMonth() === 2 && today.getDate() < 15)) {
        nextDeadline = new Date(today.getFullYear(), 2, 15); // March 15
      } 
      // Then March 30th
      else if (today.getMonth() === 2 && today.getDate() < 30) {
        nextDeadline = new Date(today.getFullYear(), 2, 30); // March 30
      } 
      // Then April 15th
      else if (today.getMonth() < 3 || (today.getMonth() === 3 && today.getDate() < 15)) {
        nextDeadline = new Date(today.getFullYear(), 3, 15); // April 15
      }
      // Then April 30th
      else if (today.getMonth() === 3 && today.getDate() < 30) {
        nextDeadline = new Date(today.getFullYear(), 3, 30); // April 30
      }
      // Then May 15th
      else if (today.getMonth() < 4 || (today.getMonth() === 4 && today.getDate() < 15)) {
        nextDeadline = new Date(today.getFullYear(), 4, 15); // May 15
      }
      // Then May 30th
      else if (today.getMonth() === 4 && today.getDate() < 30) {
        nextDeadline = new Date(today.getFullYear(), 4, 30); // May 30
      }
      // Then June 15th
      else if (today.getMonth() < 5 || (today.getMonth() === 5 && today.getDate() < 15)) {
        nextDeadline = new Date(today.getFullYear(), 5, 15); // June 15
      }
      // Then June 30th
      else if (today.getMonth() === 5 && today.getDate() < 30) {
        nextDeadline = new Date(today.getFullYear(), 5, 30); // June 30
      }
      // Then July 15th
      else if (today.getMonth() < 6 || (today.getMonth() === 6 && today.getDate() < 15)) {
        nextDeadline = new Date(today.getFullYear(), 6, 15); // July 15
      }
      // Then July 30th
      else if (today.getMonth() === 6 && today.getDate() < 30) {
        nextDeadline = new Date(today.getFullYear(), 6, 30); // July 30
      }
      // Then August 15th (final deadline)
      else if (today.getMonth() < 7 || (today.getMonth() === 7 && today.getDate() < 15)) {
        nextDeadline = new Date(today.getFullYear(), 7, 15); // August 15
      }
      // After Aug 15, we reset to next year March 15
      else {
        nextDeadline = new Date(today.getFullYear() + 1, 2, 15); // Next year March 15
      }
      
      return nextDeadline;
    };
    
    // Calculate days remaining
    const calculateDaysRemaining = (deadline: Date) => {
      const today = new Date();
      const diffTime = deadline.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    };
    
    // Set initial deadline
    const nextDeadline = calculateNextDeadline();
    setDeadline(nextDeadline);
    setDaysRemaining(calculateDaysRemaining(nextDeadline));
    
    // Update days remaining every day
    const interval = setInterval(() => {
      setDaysRemaining(calculateDaysRemaining(deadline));
      
      // If deadline has passed, recalculate next deadline
      if (calculateDaysRemaining(deadline) <= 0) {
        const newDeadline = calculateNextDeadline();
        setDeadline(newDeadline);
        setDaysRemaining(calculateDaysRemaining(newDeadline));
      }
    }, 86400000); // 24 hours
    
    return () => clearInterval(interval);
  }, [deadline]);
  
  // Format the deadline date
  const formattedDeadline = deadline.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
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
