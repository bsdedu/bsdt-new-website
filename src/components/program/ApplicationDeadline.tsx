
import { useEffect, useState } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { format, differenceInDays, differenceInHours, differenceInMinutes, isAfter } from 'date-fns';

export const ApplicationDeadline = () => {
  const [deadline, setDeadline] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  // Calculate the next deadline date (15th or last day of current month)
  const calculateNextDeadline = () => {
    const today = new Date();
    let nextDeadline = new Date();
    
    // If before 15th of the month, set to 15th
    if (today.getDate() < 15) {
      nextDeadline.setDate(15);
      return nextDeadline;
    }
    
    // If after 15th, set to last day of the month
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    nextDeadline.setDate(lastDayOfMonth);
    
    // If we're already past the last day, go to the 15th of next month
    if (today.getDate() >= lastDayOfMonth) {
      nextDeadline = new Date(today.getFullYear(), today.getMonth() + 1, 15);
    }
    
    // Don't go beyond August 15th
    const augustDeadline = new Date(today.getFullYear(), 7, 15); // August is month 7 (zero-indexed)
    if (isAfter(nextDeadline, augustDeadline)) {
      return augustDeadline;
    }
    
    return nextDeadline;
  };

  // Update time remaining
  const updateTimeRemaining = () => {
    const now = new Date();
    
    // Calculate differences
    const days = differenceInDays(deadline, now);
    const hours = differenceInHours(deadline, now) % 24;
    const minutes = differenceInMinutes(deadline, now) % 60;
    
    setTimeRemaining({ days, hours, minutes });
    
    // If deadline has passed, set new deadline
    if (days < 0 || (days === 0 && hours < 0) || (days === 0 && hours === 0 && minutes < 0)) {
      const newDeadline = calculateNextDeadline();
      setDeadline(newDeadline);
    }
  };

  useEffect(() => {
    // Set initial deadline
    const initialDeadline = calculateNextDeadline();
    setDeadline(initialDeadline);
    
    // Update time remaining immediately and then every minute
    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 p-4 bg-bsd-orange/10 rounded-lg border border-bsd-orange/20">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center">
          <CalendarDays className="w-5 h-5 text-bsd-orange mr-2" />
          <span className="font-medium">Application Deadline: {format(deadline, 'MMM d, yyyy')}</span>
        </div>
        
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-bsd-orange mr-2" />
          <span className="font-medium">Time Remaining: </span>
          <div className="ml-2 flex space-x-2">
            <div className="px-2 py-1 bg-bsd-gray text-white rounded">
              {timeRemaining.days}d
            </div>
            <div className="px-2 py-1 bg-bsd-gray text-white rounded">
              {timeRemaining.hours}h
            </div>
            <div className="px-2 py-1 bg-bsd-gray text-white rounded">
              {timeRemaining.minutes}m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
