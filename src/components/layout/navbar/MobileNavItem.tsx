
import React from 'react';
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

type SubItem = {
  name: string;
  href: string;
};

type MobileNavItemProps = {
  item: {
    name: string;
    href: string;
    type: 'dropdown' | 'link';
    items?: SubItem[];
  };
  onItemClick: () => void;
};

export const MobileNavItem: React.FC<MobileNavItemProps> = ({ item, onItemClick }) => {
  if (item.type === 'link') {
    return (
      <li>
        <a 
          href={item.href} 
          className="block py-2 text-bsd-gray hover:text-bsd-orange transition-colors" 
          onClick={onItemClick}
        >
          {item.name}
        </a>
      </li>
    );
  } 
  
  return (
    <li className="py-1">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 text-bsd-gray hover:text-bsd-orange">
          <span>{item.name}</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {item.items?.map((subItem) => (
            <DropdownMenuItem key={subItem.name} asChild>
              {subItem.href.startsWith('/') ? (
                <Link 
                  to={subItem.href} 
                  className="w-full cursor-pointer"
                  onClick={onItemClick}
                >
                  {subItem.name}
                </Link>
              ) : (
                <a 
                  href={subItem.href} 
                  className="w-full cursor-pointer"
                  onClick={onItemClick}
                >
                  {subItem.name}
                </a>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
};
