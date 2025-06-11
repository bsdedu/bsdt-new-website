import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils"; 
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWhatsAppCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Show CTA after 3 seconds (slightly after call button)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(
      "fixed bottom-40 z-[99999] transition-all duration-300 ease-in-out", 
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
            <p className="text-sm font-medium text-bsd-gray mb-3">Chat with us on WhatsApp!</p>
            <a 
              href="https://wa.me/917204006339" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors w-full"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className={cn(
            "bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all",
            "animate-pulse hover:animate-none"
          )}
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};
