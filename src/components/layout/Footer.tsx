
import React from 'react';
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bsd-gray text-white py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold tracking-tight">
              BSD <span className="text-bsd-orange">Design & Tech</span>
            </h3>
            <p className="text-sm text-white/80 max-w-xs">
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bsd-orange">Programs</h4>
            <ul className="space-y-3">
              {['Design', 'Engineering', 'Technology', 'Fine Arts', 'Architecture'].map((program) => (
                <li key={program}>
                  <a 
                    href="#" 
                    className="text-sm text-white/80 hover:text-white transition-colors hover-lift inline-block"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bsd-orange">Resources</h4>
            <ul className="space-y-3">
              {['Admissions', 'Scholarships', 'Student Life', 'Campus Map', 'Alumni'].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-sm text-white/80 hover:text-white transition-colors hover-lift inline-block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact - Enhanced with all contact information */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bsd-orange">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bsd-orange mt-0.5" />
                <span className="text-sm text-white/80">No.4/3, Opposite B.D.S Nagar, Devanna Compound, K.Narayanapura, Kothanur Post, Bangalore – 560077</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bsd-orange" />
                <a href="tel:+919620202871" className="text-sm text-white/80 hover:text-white transition-colors">
                  +91 9620202871 | +91 9845779000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bsd-orange" />
                <a href="mailto:enquiry@bsd.edu.in" className="text-sm text-white/80 hover:text-white transition-colors">
                  enquiry@bsd.edu.in | admissions@bsd.edu.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-bsd-orange" />
                <span className="text-sm text-white/80">Monday—Saturday: 9:00AM – 5:00PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Campus Map */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bsd-orange">Campus Location</h4>
            <p className="text-sm text-white/80">
              Visit our campus to experience our world-class facilities and vibrant learning environment.
            </p>
            <a
              href="https://goo.gl/maps/HEWypUEL8RdSy61u6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-bsd-orange hover:text-bsd-orange/80 transition-colors"
            >
              <span className="border-b border-current">Get Directions</span>
            </a>
          </div>
          <div className="md:col-span-2 aspect-video rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.531860116302!2d77.64088777532129!3d13.065443187258602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19fca05a7085%3A0x32d325d7452e1509!2sBangalore%20School%20of%20Design%20%26%20Technology!5e0!3m2!1sen!2sin!4v1741951831100!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BSDT Campus Map"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} BSD Design & Tech. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
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
        "bg-white/10 text-white hover:bg-bsd-orange hover:text-white",
        "transition-colors duration-300"
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
