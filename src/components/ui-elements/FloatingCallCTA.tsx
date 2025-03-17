
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils"; 
import { useIsMobile } from "@/hooks/use-mobile";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingCallCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Show CTA after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(
      "fixed bottom-10 z-50 transition-all duration-300 ease-in-out", 
      isMobile ? "right-4" : "right-8"
    )}>
      {isExpanded ? (
        <div className="flex flex-col items-end">
          <Button
            variant="ghost"
            size="icon"
            className="mb-2 bg-white rounded-full shadow-md hover:bg-white/90"
            onClick={() => setIsExpanded(false)}
          >
            <X className="h-5 w-5 text-bsd-gray" />
          </Button>
          
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-[230px] animate-scale-in">
            <p className="text-sm font-medium text-bsd-gray mb-3">Have questions? Call us now!</p>
            <a 
              href="tel:+919620202871" 
              className="flex items-center justify-center gap-2 bg-bsd-orange text-white py-2 px-4 rounded-md hover:bg-bsd-orange/90 transition-colors w-full"
            >
              <Phone className="h-4 w-4" />
              +91 9620202871
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className={cn(
            "bg-bsd-orange text-white rounded-full p-3 shadow-lg hover:bg-bsd-orange/90 transition-all",
            "animate-bounce hover:animate-none"
          )}
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};
