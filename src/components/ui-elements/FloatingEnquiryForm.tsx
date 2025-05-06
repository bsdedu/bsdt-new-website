import React, { useState,useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { X, MessageSquare } from "lucide-react";

export const FloatingEnquiryForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const onSubmit = () => {
    toast({
      title: "Thanks for your enquiry!",
      description: "We'll get back to you soon.",
    });
    setIsExpanded(false);
  };

  // Initialize the widget when the component mounts
  useEffect(() => {
    if (isExpanded) {
      // Create the widget container
      const widgetContainer = document.createElement('div');
      widgetContainer.className = 'npf_wgts';
      widgetContainer.setAttribute('data-height', '400px');
      widgetContainer.setAttribute('data-w', 'adff9b077808c1fcb8e77a017693b6b9');
      
      // Create the script element
      const script = document.createElement('script');
      script.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
      script.async = true;
      
      // Add the container and script to the body
      document.body.appendChild(widgetContainer);
      document.body.appendChild(script);

      // Clean up when the component unmounts or when expanded state changes
      return () => {
        document.body.removeChild(widgetContainer);
        document.body.removeChild(script);
      };
    }
  }, [isExpanded]);

  return (
    <div className={cn(
      "fixed right-0 top-1/2 -translate-y-1/2 z-[99999]",
      isExpanded ? "translate-x-0" : "translate-x-[calc(100%-2rem)]"
    )}>
      <div className="relative flex items-start">
        {/* Trigger button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "bg-bsd-orange text-white px-2 py-4 rounded-l-lg writing-vertical transform rotate-180 whitespace-nowrap text-sm sticky top-0",
            "hover:bg-bsd-orange/90 transition-colors flex items-center gap-1"
          )}
          style={{ writingMode: 'vertical-rl' }}
        >
          {isExpanded ? (
            <>
              <X className="w-3 h-3" />
              Close
            </>
          ) : (
            <>
              <MessageSquare className="w-3 h-3" />
              Enquire Nows
            </>
          )}
        </button>

        {/* Form panel */}
        <div className={cn(
          "bg-white p-6 shadow-lg w-80 border-l border-t border-b border-gray-200 sticky top-0",
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <h3 className="text-lg font-semibold text-bsd-gray mb-4">Quick Enquiry</h3>
          <div className="npf_wgts" data-height="400px" data-w="adff9b077808c1fcb8e77a017693b6b9" />
        </div>
      </div>
    </div>
  );
};