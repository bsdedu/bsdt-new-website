
import * as React from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { DateSelectionProps } from './types';

export const DateSelection: React.FC<DateSelectionProps> = ({ date, onDateSelect }) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-bsd-gray mb-2">Step 1: Select a Date</h3>
        <p className="text-sm text-foreground/70 mb-4">
          Choose a date for your campus visit. Campus tours are available on weekdays (Monday-Friday).
        </p>
      </div>
      
      <div className="flex justify-center my-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateSelect}
          disabled={(date) => {
            // Disable weekends and past dates
            const day = date.getDay();
            return date < new Date() || day === 0 || day === 6;
          }}
          className="rounded-md border pointer-events-auto"
        />
      </div>
    </div>
  );
};
