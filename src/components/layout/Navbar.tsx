
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatedButton } from '../ui-elements/AnimatedButton';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Main navigation structure with nested menus
const navStructure = [
  {
    name: 'About',
    href: '#about',
    type: 'dropdown',
    items: [
      { name: 'About BSD', href: '#about' },
      { name: 'Vision & Mission', href: '#vision-mission' },
      { name: 'Leadership', href: '#leadership' },
      { name: 'Infrastructure', href: '#infrastructure' },
      { name: 'Campus', href: '#campus' }
    ]
  },
  {
    name: 'Programs',
    href: '#programs',
    type: 'dropdown',
    items: [
      { name: 'Design Programs', href: '#design-programs' },
      { name: 'Technology Programs', href: '#technology-programs' },
      { name: 'Professional Certificate Courses', href: '#certificate-courses' },
      { name: 'Executive Education', href: '#executive-education' }
    ]
  },
  {
    name: 'Admissions',
    href: '#admissions',
    type: 'dropdown',
    items: [
      { name: 'Application Process', href: '#application-process' },
      { name: 'Eligibility', href: '#eligibility' },
      { name: 'Fees & Scholarships', href: '#fees-scholarships' },
      { name: 'FAQs', href: '#faqs' }
    ]
  },
  {
    name: 'Campus Life',
    href: '#campus-life',
    type: 'dropdown',
    items: [
      { name: 'Student Experience', href: '#student-experience' },
      { name: 'Facilities', href: '#facilities' },
      { name: 'Events & Activities', href: '#events' },
      { name: 'Accommodation', href: '#accommodation' }
    ]
  },
  {
    name: 'Gallery',
    href: '#gallery',
    type: 'link'
  },
  {
    name: 'Contact',
    href: '#contact',
    type: 'link'
  }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
      isScrolled ? "py-4 glassmorphism shadow-sm" : "py-8 bg-transparent")}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo as homepage link */}
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/15af7636-fa32-410b-9b74-b4e58b0fa90b.png" 
              alt="Bangalore School of Design & Technology Logo" 
              className="h-10 md:h-12 object-fill" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navStructure.map((item) => {
                  if (item.type === 'link') {
                    return (
                      <NavigationMenuItem key={item.name}>
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
                  } else {
                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger 
                          className="bg-transparent text-bsd-gray hover:text-bsd-orange hover:bg-transparent focus:bg-transparent"
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-1 p-2">
                            {item.items?.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={subItem.href}
                                    className="block select-none rounded-md p-2 text-sm leading-none text-bsd-gray hover:bg-accent hover:text-bsd-orange"
                                  >
                                    {subItem.name}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <AnimatedButton size="sm" className="bg-bsd-orange text-white hover:bg-bsd-orange/90">
              Apply Now
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-bsd-gray p-2" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6",
        "transition-all duration-300 transform overflow-hidden",
        isMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
      )}>
        <ul className="space-y-2">
          {navStructure.map((item) => {
            if (item.type === 'link') {
              return (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="block py-2 text-bsd-gray hover:text-bsd-orange transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            } else {
              return (
                <li key={item.name} className="py-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 text-bsd-gray hover:text-bsd-orange">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <a 
                            href={subItem.href} 
                            className="w-full cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              );
            }
          })}
          <li className="pt-3">
            <AnimatedButton className="w-full bg-bsd-orange text-white hover:bg-bsd-orange/90">
              Apply Now
            </AnimatedButton>
          </li>
        </ul>
      </div>
    </header>
  );
};
