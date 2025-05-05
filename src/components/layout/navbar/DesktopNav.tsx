import React from 'react';
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { AnimatedButton } from '../../ui-elements/AnimatedButton';
import { NavItem } from './NavItem';
import { NavStructure } from './navData';

type DesktopNavProps = {
  navStructure: NavStructure[];
};

export const DesktopNav: React.FC<DesktopNavProps> = ({ navStructure }) => {
  const openCalendlyPopup = () => {
    // Calculate centered position for the popup
    const width = 600;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`;
    
    // Try to open as popup first
    const popup = window.open(
      'https://calendly.com/admissions-bsd/campus_visit',
      'calendly_popup',
      windowFeatures
    );
    
    // Check if popup was blocked
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      // Fallback 1: Try without position features
      const fallbackPopup = window.open(
        'https://calendly.com/admissions-bsd/campus_visit',
        '_blank',
        `width=${width},height=${height}`
      );
      
      // Final fallback: regular new tab
      if (!fallbackPopup || fallbackPopup.closed) {
        window.open('https://calendly.com/admissions-bsd/campus_visit', '_blank');
      }
    }
  };

  return (
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
        onClick={openCalendlyPopup}
      >
        Schedule Visit
      </AnimatedButton>
      <AnimatedButton 
        size="sm" 
        className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
        href="https://apply.bsd.edu.in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </AnimatedButton>
    </div>
  );
};