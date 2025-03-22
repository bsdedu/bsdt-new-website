
import * as React from 'react';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TimeSlotSelectionProps } from './types';

export const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({ 
  date, 
  timeSlot, 
  timeSlots, 
  onTimeSlotSelect, 
  onBackClick 
}) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-bsd-gray mb-2">Step 2: Select a Time Slot</h3>
        <p className="text-sm text-foreground/70 mb-2">
          Choose a convenient time for your visit on {date ? format(date, 'PPPP') : ''}
        </p>
        <Button 
          variant="link" 
          className="p-0 text-bsd-orange" 
          onClick={onBackClick}
        >
          Change Date
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {timeSlots.map((slot) => (
          <div
            key={slot.id}
            className={cn(
              "border rounded-lg p-4 cursor-pointer transition-all duration-200",
              slot.available 
                ? timeSlot === slot.id 
                  ? "border-bsd-orange bg-bsd-orange/5" 
                  : "border-border/40 hover:border-bsd-orange/60 hover:bg-bsd-orange/5"
                : "border-border/20 bg-gray-100 opacity-60 cursor-not-allowed"
            )}
            onClick={() => slot.available && onTimeSlotSelect(slot.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-bsd-gray">{slot.label}</span>
              <Clock className="h-4 w-4 text-foreground/70" />
            </div>
            <p className="text-sm text-foreground/80">{slot.time}</p>
            <p className="text-xs mt-2 text-foreground/60">
              {slot.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
