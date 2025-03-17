
import React from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

type SubItem = {
  name: string;
  href: string;
};

type NavItemProps = {
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
};

export const NavItem: React.FC<NavItemProps> = ({ item }) => {
  if (item.type === 'link') {
    return (
      <NavigationMenuItem>
        <a 
          href={item.href} 
          className={cn(
            "relative text-sm font-medium text-bsd-gray hover:text-bsd-orange transition-colors",
            "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-bsd-orange after:transition-all after:duration-300",
            "hover:after:w-full"
          )}
        >
          {item.name}
        </a>
      </NavigationMenuItem>
    );
  } 
  
  if (item.type === 'megamenu' && item.categories) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger 
          className="bg-transparent text-bsd-gray hover:text-bsd-orange hover:bg-transparent focus:bg-transparent"
        >
          {item.name}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white shadow-lg rounded-md z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-[800px] max-w-screen-lg">
            {item.categories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-sm font-bold text-bsd-gray border-b pb-1">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((subItem) => (
                    <li key={subItem.name}>
                      <NavigationMenuLink asChild>
                        {subItem.href.startsWith('/') ? (
                          <Link
                            to={subItem.href}
                            className="block select-none rounded-md py-1.5 text-sm leading-none text-bsd-gray hover:text-bsd-orange"
                          >
                            {subItem.name}
                          </Link>
                        ) : (
                          <a
                            href={subItem.href}
                            className="block select-none rounded-md py-1.5 text-sm leading-none text-bsd-gray hover:text-bsd-orange"
                          >
                            {subItem.name}
                          </a>
                        )}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className="bg-transparent text-bsd-gray hover:text-bsd-orange hover:bg-transparent focus:bg-transparent"
      >
        {item.name}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white shadow-lg rounded-md z-50">
        <ul className="grid w-[250px] gap-1 p-2">
          {item.items?.map((subItem) => (
            <li key={subItem.name}>
              <NavigationMenuLink asChild>
                {subItem.href.startsWith('/') ? (
                  <Link
                    to={subItem.href}
                    className="block select-none rounded-md p-2 text-sm leading-none text-bsd-gray hover:text-bsd-orange hover:bg-bsd-light-gray"
                  >
                    {subItem.name}
                  </Link>
                ) : (
                  <a
                    href={subItem.href}
                    className="block select-none rounded-md p-2 text-sm leading-none text-bsd-gray hover:text-bsd-orange hover:bg-bsd-light-gray"
                  >
                    {subItem.name}
                  </a>
                )}
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
