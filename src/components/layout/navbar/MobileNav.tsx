
import React from 'react';
import { cn } from "@/lib/utils";
import { AnimatedButton } from '../../ui-elements/AnimatedButton';
import { MobileNavItem } from './MobileNavItem';
import { NavStructure } from './navData';

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
  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
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
          <AnimatedButton className="w-full bg-bsd-orange text-white hover:bg-bsd-orange/90">
            Apply Now
          </AnimatedButton>
        </li>
      </ul>
    </div>
  );
};
