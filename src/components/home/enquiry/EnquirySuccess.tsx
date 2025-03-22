
import React from 'react';
import { Check } from "lucide-react";

export const EnquirySuccess: React.FC = () => {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-green-600" />
      </div>
      <h4 className="text-lg font-medium text-bsd-gray mb-2">Thank You for Your Enquiry!</h4>
      <p className="text-foreground/70 mb-6">
        Our admissions team will contact you shortly. You now have access to our brochures and placement reports.
      </p>
    </div>
  );
};
