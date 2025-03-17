
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

type SubItem = {
  name: string;
  href: string;
};

type MobileNavItemProps = {
  item: {
    name: string;
    href: string;
    type: 'dropdown' | 'link' | 'megamenu';
    items?: SubItem[];
    categories?: {
      title: string;
      items: SubItem[];
    }[];
  };
  onItemClick: () => void;
};

export const MobileNavItem: React.FC<MobileNavItemProps> = ({ item, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

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
  
  if (item.type === 'megamenu' && item.categories) {
    return (
      <li className="py-1">
        <button 
          onClick={toggleOpen}
          className="flex items-center justify-between w-full py-2 text-bsd-gray hover:text-bsd-orange"
        >
          <span>{item.name}</span>
          {isOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
        </button>
        
        {isOpen && (
          <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-4">
            {item.categories.map((category, index) => (
              <div key={index} className="mb-3">
                <button 
                  onClick={() => toggleCategory(category.title)}
                  className="flex items-center justify-between w-full py-1 text-sm font-bold text-bsd-gray hover:text-bsd-orange"
                >
                  <span>{category.title}</span>
                  {openCategory === category.title ? 
                    <ChevronUp className="h-3 w-3 ml-1" /> : 
                    <ChevronDown className="h-3 w-3 ml-1" />
                  }
                </button>
                
                <ul className={cn(
                  "space-y-1 mt-1 ml-2 overflow-hidden transition-all duration-300",
                  openCategory === category.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  {category.items.map((subItem) => (
                    <li key={subItem.name}>
                      {subItem.href.startsWith('/') ? (
                        <Link
                          to={subItem.href}
                          className="block py-1 text-sm text-bsd-gray hover:text-bsd-orange hover:bg-transparent"
                          onClick={onItemClick}
                        >
                          {subItem.name}
                        </Link>
                      ) : (
                        <a
                          href={subItem.href}
                          className="block py-1 text-sm text-bsd-gray hover:text-bsd-orange hover:bg-transparent"
                          onClick={onItemClick}
                        >
                          {subItem.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </li>
    );
  }
  
  return (
    <li className="py-1">
      <button 
        onClick={toggleOpen}
        className="flex items-center justify-between w-full py-2 text-bsd-gray hover:text-bsd-orange"
      >
        <span>{item.name}</span>
        {isOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
      </button>
      
      {isOpen && (
        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
          {item.items?.map((subItem) => (
            <li key={subItem.name}>
              {subItem.href.startsWith('/') ? (
                <Link
                  to={subItem.href}
                  className="block py-1 text-sm text-bsd-gray hover:text-bsd-orange hover:bg-transparent"
                  onClick={onItemClick}
                >
                  {subItem.name}
                </Link>
              ) : (
                <a
                  href={subItem.href}
                  className="block py-1 text-sm text-bsd-gray hover:text-bsd-orange hover:bg-transparent"
                  onClick={onItemClick}
                >
                  {subItem.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
