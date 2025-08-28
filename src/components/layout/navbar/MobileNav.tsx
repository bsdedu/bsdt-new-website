import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { AnimatedButton } from '../../ui-elements/AnimatedButton';
import { MobileNavItem } from './MobileNavItem';
import { NavStructure } from './navData';
import { X } from "lucide-react";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navStructure: NavStructure[];
};

export const MobileNav: React.FC<MobileNavProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  navStructure 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isModalOpen]);

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6",
        "transition-all duration-300 transform overflow-hidden",
        isMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
      )}>
        <ul className="space-y-2">
          {navStructure.map((item) => (
            <MobileNavItem 
              key={item.name} 
              item={item} 
              onItemClick={handleItemClick} 
            />
          ))}
          <li className="pt-3">
            <AnimatedButton 
              className="w-full bg-bsd-orange text-white hover:bg-bsd-orange/90"
              href="https://apply.bsd.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </AnimatedButton>
          </li>
        </ul>
      </div>

      {/* Apply Now Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[99998] flex items-center justify-center">
          <div className="bg-white p-6 shadow-lg w-96 rounded-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold text-bsd-gray mb-4">Apply Now</h3>
            <div
              className="npf_wgts"
              data-height="400px"
              data-w="adff9b077808c1fcb8e77a017693b6b9"
            ></div>
          </div>
        </div>
      )}
    </>
  );
};
