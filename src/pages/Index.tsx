
import React, { useEffect, useState, useRef } from 'react';
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

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const timersRef = useRef<number[]>([]);

  // Mark component as hydrated after initial render
  useEffect(() => {
    console.log("Index component hydrating");
    setIsHydrated(true);
    
    return () => {
      console.log("Index hydration cleanup");
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    console.log("Index useEffect running");
    
    // Page load animation with delay to ensure hydration
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      console.log("Index marked as loaded");
    }, 300);
    timersRef.current.push(loadTimer);

    // Smooth scroll behavior for anchor links
    const anchorElements = document.querySelectorAll('a[href^="#"]');
    const anchorClickListeners: (() => void)[] = [];
    
    anchorElements.forEach(anchor => {
      const clickHandler = function(e: Event) {
        e.preventDefault();
        const targetId = (this as HTMLAnchorElement).getAttribute('href') || '';
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      };
      
      anchor.addEventListener('click', clickHandler);
      anchorClickListeners.push(() => anchor.removeEventListener('click', clickHandler));
    });

    // Scroll event listener with throttling for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add page transition
    document.body.classList.add('fadeIn');

    return () => {
      // Clear all timers
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      
      // Remove event listeners
      window.removeEventListener('scroll', handleScroll);
      anchorClickListeners.forEach(removeListener => removeListener());
      
      // Remove observers
      observersRef.current.forEach(observer => observer.disconnect());
      observersRef.current = [];
      
      // Remove classes
      document.body.classList.remove('fadeIn');
      
      console.log("Index cleanup function executed");
    };
  }, [isHydrated]);

  // Calculate the parallax styles for background elements
  const getParallaxStyle = (factor = 0.1) => ({
    transform: `translateY(${scrollY * factor}px)`,
  });

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <main>
        {/* Background parallax elements */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bsd-orange/5 blur-3xl opacity-60" 
            style={getParallaxStyle(-0.05)}
          />
          <div 
            className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"
            style={getParallaxStyle(0.08)}
          />
          <div 
            className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-bsd-orange/10 blur-3xl opacity-30"
            style={getParallaxStyle(0.12)}
          />
        </div>
        
        <HeroSection />
        <ProgramsSection />
        <InfoGraphicsSection />
        <UpcomingEventsSection />
        <AboutSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CollaborationsSection />
        <EnquiryFormSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
