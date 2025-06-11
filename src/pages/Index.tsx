import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { AIEnhancedLearningSection } from '../components/home/AIEnhancedLearningSection';
import { ContactSection } from '../components/home/ContactSection';
import { EnquiryFormSection } from '../components/home/EnquiryFormSection';
import { CollaborationsSection } from '../components/home/CollaborationsSection';
import { InfoGraphicsSection } from '../components/home/InfoGraphicsSection';
import { GallerySection } from '../components/home/GallerySection';
import { FloatingEnquiryForm } from '../components/ui-elements/FloatingEnquiryForm';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setIsHydrated(true);
    return () => {};
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    timersRef.current.push(loadTimer);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHydrated]);

  const getParallaxStyle = (factor = 0.1) => ({
    transform: `translateY(${scrollY * factor}px)`,
  });

  return (
    <>
      <Helmet>
        <title>Bangalore School of Design & Technology | Premier Design & Tech Education</title>
        <meta name="description" content="Leading design and technology education in Bangalore. Offering undergraduate programs in Interior Design, Graphic Design, Animation, BCA, Computer Science, and professional diplomas." />
        <meta name="keywords" content="design school Bangalore, technology education, interior design course, graphic design, animation, BCA, computer science, BSDT" />
        <meta property="og:title" content="Bangalore School of Design & Technology | Premier Design & Tech Education" />
        <meta property="og:description" content="Leading design and technology education in Bangalore. Offering undergraduate programs in Interior Design, Graphic Design, Animation, BCA, Computer Science, and professional diplomas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsdt.ac.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bangalore School of Design & Technology | Premier Design & Tech Education" />
        <meta name="twitter:description" content="Leading design and technology education in Bangalore. Offering undergraduate programs in Interior Design, Graphic Design, Animation, BCA, Computer Science, and professional diplomas." />
        <link rel="canonical" href="https://bsdt.ac.in/" />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        
        <main>
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
          <WhyChooseSection />
          <AIEnhancedLearningSection />
          <GallerySection />
          <CollaborationsSection />
          <EnquiryFormSection />
          <ContactSection />
          <FloatingEnquiryForm />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
