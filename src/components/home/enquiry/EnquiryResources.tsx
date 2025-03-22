
import React from 'react';
import { Download, Lock } from "lucide-react";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface EnquiryResourcesProps {
  formSubmitted: boolean;
}

export const EnquiryResources: React.FC<EnquiryResourcesProps> = ({ formSubmitted }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDownloadBrochure = () => {
    // In a real application, this would download an actual PDF
    // For now, we'll just show a toast message
    toast({
      title: "Brochure Downloaded",
      description: "The program brochure with fee details has been downloaded."
    });
  };

  const handleViewPlacementReport = () => {
    navigate('/placement-report');
  };

  return (
    <div className="mt-6 p-5 border border-dashed border-bsd-orange/30 rounded-xl bg-white/50">
      <div className="flex items-center mb-4">
        {formSubmitted ? (
          <>
            <Download className="w-8 h-8 text-bsd-orange flex-shrink-0" />
            <div className="ml-4">
              <h4 className="font-medium text-bsd-gray">Program Brochure with Fee Details</h4>
              <p className="text-sm text-foreground/70 mb-2">Complete information about the program, curriculum, and fee structure</p>
              <AnimatedButton size="sm" onClick={handleDownloadBrochure}>
                <Download className="w-4 h-4 mr-2" /> Download Now
              </AnimatedButton>
            </div>
          </>
        ) : (
          <>
            <Lock className="w-8 h-8 text-bsd-gray/40 flex-shrink-0" />
            <div className="ml-4">
              <h4 className="font-medium text-bsd-gray">Program Brochure with Fee Details</h4>
              <p className="text-sm text-foreground/70">Submit the enquiry form to unlock the detailed program brochure with fee structure</p>
            </div>
          </>
        )}
      </div>
      
      {/* Placement Report Section */}
      <div className="flex items-center pt-4 border-t border-dashed border-bsd-orange/20">
        {formSubmitted ? (
          <>
            <Download className="w-8 h-8 text-bsd-orange flex-shrink-0" />
            <div className="ml-4">
              <h4 className="font-medium text-bsd-gray">Placement Report</h4>
              <p className="text-sm text-foreground/70 mb-2">Detailed information about placements, top recruiters, and salary packages</p>
              <AnimatedButton size="sm" onClick={handleViewPlacementReport}>
                <Download className="w-4 h-4 mr-2" /> View Report
              </AnimatedButton>
            </div>
          </>
        ) : (
          <>
            <Lock className="w-8 h-8 text-bsd-gray/40 flex-shrink-0" />
            <div className="ml-4">
              <h4 className="font-medium text-bsd-gray">Placement Report</h4>
              <p className="text-sm text-foreground/70">Submit the enquiry form to access our detailed placement report</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
