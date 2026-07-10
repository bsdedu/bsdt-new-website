
import React, { useState, useEffect } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { Card } from "../ui-elements/Card";
import { EnquiryBenefits } from "./enquiry/EnquiryBenefits";
import { EnquiryResources } from "./enquiry/EnquiryResources";
import { EnquiryForm } from "./enquiry/EnquiryForm";
import { EnquirySuccess } from "./enquiry/EnquirySuccess";

export const EnquiryFormSection: React.FC<{ programSpecific?: boolean; useNativeForm?: boolean }> = ({
  programSpecific = false,
  useNativeForm = false,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Check if form was previously submitted
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
    document.body.appendChild(script);
    
    const hasSubmitted = localStorage.getItem('enquiryFormSubmitted') === 'true';
    if (hasSubmitted) {
      setFormSubmitted(true);
    }

    return () => {
      const scripts = document.querySelectorAll('script[src="https://widgets.in5.nopaperforms.com/emwgts.js"]');
      scripts.forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, []);
  
  const handleFormSubmitSuccess = () => {
    setFormSubmitted(true);
  };

  return <section className="py-16 bg-bsd-light-gray relative overflow-hidden md:py-[50px]" id="enquiry-form">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bsd-orange/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-bsd-gray/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* CTA Content */}
          <RevealSection direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <Badge variant="bsdOrange" className="mb-2">Start Your Journey Today</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Take the First Step Towards Your Creative Career
              </h2>
              <p className="text-foreground/70">
                Our admissions team is ready to guide you through the application process. Fill out the form and begin your journey with BSDT.
              </p>
              
              <EnquiryBenefits />
              
              {/* Brochure & Placement Report Section */}
              <EnquiryResources formSubmitted={formSubmitted} />
            </div>
          </RevealSection>
          
          {/* Enquiry Form */}
          <RevealSection direction="left" className="lg:col-span-3">
            {useNativeForm ? (
              <Card className="p-6 md:p-8">
                {formSubmitted ? (
                  <EnquirySuccess />
                ) : (
                  <EnquiryForm programSpecific={programSpecific} onSubmitSuccess={handleFormSubmitSuccess} />
                )}
              </Card>
            ) : (
              <div className="npf_wgts" data-height="500px" data-w="14fe90258f1849328c9ebb3adc9782bb"></div>
            )}
           
          </RevealSection>
        </div>
      </div>
    </section>;
};
