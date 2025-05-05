import * as React from 'react';
import { format } from 'date-fns';
import { DateSelectionProps } from './types';

export const DateSelection: React.FC<DateSelectionProps> = ({ date, onDateSelect }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-bsd-gray mb-2">Step 1: Select a Date</h3>
        <p className="text-sm text-foreground/70 mb-4">
          Choose a date for your campus visit. Campus tours are available on weekdays (Monday-Friday).
        </p>
      </div>
      
      <div className="flex justify-center my-6">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/admissions-bsd/campus_visit"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </div>
  );
};
