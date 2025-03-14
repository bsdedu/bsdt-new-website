
import React from 'react';
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold tracking-tight">
              BSD <span className="text-muted-foreground">Design & Tech</span>
            </h3>
            <p className="text-sm text-foreground/70 max-w-xs">
              Empowering future designers and technologists with cutting-edge education and innovation since 2007.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Instagram className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Twitter className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Linkedin className="w-4 h-4" />} />
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Programs</h4>
            <ul className="space-y-3">
              {['Design', 'Engineering', 'Technology', 'Fine Arts', 'Architecture'].map((program) => (
                <li key={program}>
                  <a 
                    href="#" 
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors hover-lift inline-block"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Resources</h4>
            <ul className="space-y-3">
              {['Admissions', 'Scholarships', 'Student Life', 'Campus Map', 'Alumni'].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors hover-lift inline-block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-foreground/70 mt-0.5" />
                <span className="text-sm text-foreground/80">123 Design Street, Tech City, 123456, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-foreground/70" />
                <a href="tel:+919876543210" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-foreground/70" />
                <a href="mailto:info@bsd.edu.in" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  info@bsd.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} BSD Design & Tech. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center",
        "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground",
        "transition-colors duration-300"
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
