
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { DesktopNav } from './navbar/DesktopNav';
import { MobileNav } from './navbar/MobileNav';
import { navStructure } from './navbar/navData';

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
      isScrolled ? "py-2 glassmorphism shadow-sm" : "py-3 bg-transparent")}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo as homepage link with increased size */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png" 
              alt="Bangalore School of Design & Technology Logo" 
              className="h-16 md:h-20 object-fill" 
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav navStructure={navStructure} />

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
      <MobileNav 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navStructure={navStructure}
      />
    </header>
  );
};
