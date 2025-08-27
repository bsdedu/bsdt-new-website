import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const FloatingScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className={cn("fixed bottom-8 z-[99999]", isMobile ? "right-4" : "right-5")} >
      <button
        onClick={scrollToTop}
        className={cn(
          "bg-bsd-orange text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all"
        )}
        
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};
