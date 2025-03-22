
import React from 'react';
import { ArrowRight } from "lucide-react";

export const EnquiryBenefits: React.FC = () => {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <ArrowRight className="w-4 h-4 text-bsd-orange" />
        </div>
        <div>
          <h4 className="font-medium text-bsd-gray">Limited Seats Available</h4>
          <p className="text-sm text-foreground/70">Apply now to secure your place in our upcoming batch</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <ArrowRight className="w-4 h-4 text-bsd-orange" />
        </div>
        <div>
          <h4 className="font-medium text-bsd-gray">Scholarship Opportunities</h4>
          <p className="text-sm text-foreground/70">Merit-based scholarships for deserving candidates</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <ArrowRight className="w-4 h-4 text-bsd-orange" />
        </div>
        <div>
          <h4 className="font-medium text-bsd-gray">Personal Counseling</h4>
          <p className="text-sm text-foreground/70">Get personalized guidance from our academic counselors</p>
        </div>
      </div>
    </div>
  );
};
