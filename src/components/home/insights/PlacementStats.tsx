
import React from 'react';
import { TrendingUp } from "lucide-react";
import { AnimatedButton } from "../../ui-elements/AnimatedButton";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const PlacementStats: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleViewPlacementReport = () => {
    // Check if user has filled the form (using localStorage)
    const hasFilledForm = localStorage.getItem('enquiryFormSubmitted') === 'true';
    
    if (hasFilledForm) {
      navigate('/placement-report');
    } else {
      toast({
        title: "Access Restricted",
        description: "Please fill the enquiry form to view the placement report.",
        variant: "destructive"
      });
      
      // Scroll to enquiry form
      const enquiryForm = document.getElementById('enquiry-form');
      if (enquiryForm) {
        enquiryForm.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-bsd-orange/10 to-bsd-gray/5 rounded-2xl p-6 md:p-8">
        <div className="flex items-center mb-6">
          <TrendingUp className="w-8 h-8 text-bsd-orange mr-3" />
          <h3 className="text-xl md:text-2xl font-display font-bold text-bsd-gray">
            Placement Success
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-bsd-gray">Average Starting Salary</span>
            <span className="font-bold text-bsd-gray">₹5.2 LPA</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-bsd-gray">Highest Package</span>
            <span className="font-bold text-bsd-gray">₹12.8 LPA</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-bsd-gray">Internship Conversion Rate</span>
            <span className="font-bold text-bsd-gray">78%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-bsd-gray">Students with Multiple Offers</span>
            <span className="font-bold text-bsd-gray">65%</span>
          </div>
        </div>
        <div className="mt-8">
          <AnimatedButton 
            variant="outline" 
            className="w-full border-bsd-orange/30 text-bsd-gray hover:bg-bsd-orange/10 hover:text-bsd-orange"
            hoverEffect="scale"
            onClick={handleViewPlacementReport}
          >
            View Placement Report
          </AnimatedButton>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-bsd-orange/10 rounded-full blur-lg"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-bsd-gray/10 rounded-full blur-lg"></div>
    </div>
  );
};
