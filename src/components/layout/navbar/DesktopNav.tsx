import React, { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { AnimatedButton } from '../../ui-elements/AnimatedButton';
import { NavItem } from './NavItem';
import { NavStructure } from './navData';
import { X } from "lucide-react";

type DesktopNavProps = {
  navStructure: NavStructure[];
};

export const DesktopNav: React.FC<DesktopNavProps> = ({ navStructure }) => {
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

  return (
    <>
      <div className="hidden md:flex items-center space-x-6">
 

        <NavigationMenu className="z-50 relative">
          <NavigationMenuList className="space-x-2 flex">
            {navStructure.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <AnimatedButton
          size="sm"
          className="bg-bsd-orange text-white hover:bg-bsd-orange/90 ml-2"
          href="/plan-a-visit"
        >
          Schedule Visit
        </AnimatedButton>
        <AnimatedButton 
          size="sm" 
          className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </AnimatedButton>
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