
import React from 'react';
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { AnimatedButton } from '../../ui-elements/AnimatedButton';
import { NavItem } from './NavItem';
import { NavStructure } from './navData';

type DesktopNavProps = {
  navStructure: NavStructure[];
};

export const DesktopNav: React.FC<DesktopNavProps> = ({ navStructure }) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavigationMenu className="z-50">
        <NavigationMenuList className="space-x-2 flex">
          {navStructure.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <AnimatedButton size="sm" className="bg-bsd-orange text-white hover:bg-bsd-orange/90">
        Apply Now
      </AnimatedButton>
    </div>
  );
};
