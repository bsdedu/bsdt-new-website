import React from 'react';
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  const openCalendlyPopup = () => {
    // Calculate centered position for the popup
    const width = 600;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`;
    
    // Try to open as popup first
    const popup = window.open(
      'https://calendly.com/admissions-bsd/campus_visit',
      'calendly_popup',
      windowFeatures
    );
    
    // Check if popup was blocked
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      // Fallback 1: Try without position features
      const fallbackPopup = window.open(
        'https://calendly.com/admissions-bsd/campus_visit',
        '_blank',
        `width=${width},height=${height}`
      );
      
      // Final fallback: regular new tab
      if (!fallbackPopup || fallbackPopup.closed) {
        window.open('https://calendly.com/admissions-bsd/campus_visit', '_blank');
      }
    }
  };

  
  return <footer className="bg-[#333333] text-white py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold tracking-tight">
              Bangalore School of Design & <span className="text-bsd-orange">Technology</span>
            </h3>
            <p className="text-sm text-white/80 max-w-xs">Empowering future designers and technologists with cutting-edge education and innovation since 2017.</p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/bsid.co" icon={<Facebook className="w-4 h-4" />} />
              <SocialLink href="https://www.instagram.com/bangaloreschoolofdesignandtech" icon={<Instagram className="w-4 h-4" />} />
              <SocialLink href="https://www.linkedin.com/company/bangalore-school-of-design" icon={<Linkedin className="w-4 h-4" />} />
              <SocialLink href="http://www.youtube.com/@bangaloreschoolofdesignandtech" icon={<Youtube className="w-4 h-4" />} />
            </div>
          </div>

          {/* Column 2: Quick Links - New Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bsd-orange">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics/b-des-interaction-and-experience-design" className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Popular Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions/application-process" className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Admissions
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/admissions/fees-scholarships" className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Fees & Scholarships
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Our Faculty
                </Link>
              </li>
              <li>
              <button 
                onClick={openCalendlyPopup}
                className="text-sm text-white/80 hover:text-white transition-colors flex items-center w-full text-left"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Schedule a Visit
              </button>
            </li>
            </ul>
          </div>

          {/* Column 3: Contact - Enhanced with all contact information */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bsd-orange">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
No.4/3, Opposite B.D.S Nagar, Devanna Compound, K.Narayanapura, Kothanur Post, Bangalore – 560077                <MapPin className="w-5 h-5 text-bsd-orange mt-0.5" />
                <span className="text-sm text-white/80"></span>
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

          {/* Column 4: Campus Map */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bsd-orange">Campus Location</h4>
            <p className="text-sm text-white/80">
              Visit our campus to experience our world-class facilities and vibrant learning environment.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden h-58">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.531860116302!2d77.64088777532129!3d13.065443187258602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19fca05a7085%3A0x32d325d7452e1509!2sBangalore%20School%20of%20Design%20%26%20Technology!5e0!3m2!1sen!2sin!4v1741951831100!5m2!1sen!2sin" width="100%" height="100%" style={{
              border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer" title="BSDT Campus Map" className="w-full h-full" sandbox="allow-same-origin allow-scripts allow-popups allow-top-navigation" />
            </div>
            <a href="https://goo.gl/maps/HEWypUEL8RdSy61u6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-bsd-orange hover:text-bsd-orange/80 transition-colors">
              <span className="border-b border-current">Get Directions</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Bangalore School of Design & Technology. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy-policy" className="text-xs text-white/60 hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>
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
    </footer>;
};

const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
}> = ({
  href,
  icon
}) => {
  return <a href={href} className={cn("w-8 h-8 rounded-full flex items-center justify-center", "bg-white/10 text-white hover:bg-bsd-orange hover:text-white", "transition-colors duration-300")} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>;
};
