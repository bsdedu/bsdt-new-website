import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const whatsappNumber = "919620204693";
  const whatsappMessage = "Hello! I'm interested in learning more about BSDT programs.";
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    // Stop pulsing after 10 seconds
    const pulseTimer = setTimeout(() => {
      setIsPulsing(false);
    }, 10000);
    return () => clearTimeout(pulseTimer);
  }, []);
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  if (!isVisible) return null;
  return <button onClick={handleClick} className={cn("fixed bottom-6 left-4 md:left-8 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")} aria-label="Chat on WhatsApp">
      {/* Pulse animation ring */}
      {isPulsing && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />}
      
      
      
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-3 py-1.5 bg-foreground text-background text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity hidden md:block">
        Chat with us
      </span>
    </button>;
};