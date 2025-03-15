
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { AboutSection } from '../components/home/AboutSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { GallerySection } from '../components/home/GallerySection';
import { ContactSection } from '../components/home/ContactSection';
import { EnquiryFormSection } from '../components/home/EnquiryFormSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { UpcomingEventsSection } from '../components/home/UpcomingEventsSection';
import { CollaborationsSection } from '../components/home/CollaborationsSection';
import { InfoGraphicsSection } from '../components/home/InfoGraphicsSection';
import { DynamicBackground } from '@/components/ui-elements/DynamicBackground';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Scroll event listener for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add page transition
    document.body.classList.add('fadeIn');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('fadeIn');
    };
  }, []);

  // Calculate the parallax styles for background elements
  const getParallaxStyle = (factor = 0.1) => ({
    transform: `translateY(${scrollY * factor}px)`,
  });

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <main>
        {/* Dynamic background with blobs instead of static elements */}
        <DynamicBackground 
          type="blobs" 
          className="fixed inset-0 -z-50 overflow-hidden pointer-events-none"
          colors={['bg-bsd-orange/10', 'bg-bsd-gray/10']}
        />
        
        <HeroSection />
        
        <DynamicBackground type="gradient" className="py-16">
          <ProgramsSection />
        </DynamicBackground>
        
        <InfoGraphicsSection />
        
        <DynamicBackground type="particles" className="py-16">
          <UpcomingEventsSection />
        </DynamicBackground>
        
        <WhyChooseSection />
        
        <DynamicBackground type="gradient" className="py-16">
          <TestimonialsSection />
        </DynamicBackground>
        
        <CollaborationsSection />
        <EnquiryFormSection />
        
        <DynamicBackground type="waves" className="py-16">
          <AboutSection />
        </DynamicBackground>
        
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
