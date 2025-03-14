import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatedButton } from '../ui-elements/AnimatedButton';
const navItems = [{
  name: 'Home',
  href: '#'
}, {
  name: 'Programs',
  href: '#programs'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Gallery',
  href: '#gallery'
}, {
  name: 'Contact',
  href: '#contact'
}];
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
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "py-4 glassmorphism shadow-sm" : "py-8 bg-transparent")}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/lovable-uploads/15af7636-fa32-410b-9b74-b4e58b0fa90b.png" alt="Bangalore School of Design & Technology Logo" className="h-10 md:h-12 object-fill" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, i) => <li key={item.name}>
                  <a href={item.href} className={cn("relative text-sm font-medium text-bsd-gray hover:text-bsd-orange transition-colors", "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-bsd-orange after:transition-all after:duration-300", "hover:after:w-full")} style={{
                animationDelay: `${i * 100}ms`
              }}>
                    {item.name}
                  </a>
                </li>)}
            </ul>
            <AnimatedButton size="sm" withArrow className="bg-bsd-orange text-white hover:bg-bsd-orange/90">
              Apply Now
            </AnimatedButton>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-bsd-gray p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6", "transition-all duration-300 transform overflow-hidden", isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
        <ul className="space-y-4">
          {navItems.map(item => <li key={item.name}>
              <a href={item.href} className="block py-2 text-bsd-gray hover:text-bsd-orange transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            </li>)}
          <li className="pt-2">
            <AnimatedButton className="w-full bg-bsd-orange text-white hover:bg-bsd-orange/90" withArrow>
              Apply Now
            </AnimatedButton>
          </li>
        </ul>
      </div>
    </header>;
};