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

import { UpcomingEventsSection } from '../components/home/UpcomingEventsSection';
import { FloatingEnquiryForm } from '../components/ui-elements/FloatingEnquiryForm';
import { AdmissionsBanner } from '../components/home/AdmissionsBanner';
import { OpenDayPopup } from '../components/home/OpenDayPopup';



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
        <title>Bangalore School of Design & Technology | Best Design College in Bangalore</title>
        <meta name="description" content="BSDT is Bangalore's leading design & technology college. Offering BBA Interior Design, BVA Visual Communication, BCA UI/UX, BSc Animation & Game Design. Industry-focused curriculum, 95% placement rate. Apply now!" />
        <meta name="keywords" content="best design college Bangalore, interior design course Bangalore, graphic design college, animation course, BCA UI UX, visual communication, game design, BSDT, design school India, technology education Bangalore" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="BSDT - Best Design & Technology College in Bangalore" />
        <meta property="og:description" content="Transform your creative passion into a successful career. Explore our industry-focused programs in Interior Design, Visual Communication, Animation, Game Design & Computer Applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsdt.ac.in/" />
        <meta property="og:image" content="https://bsdt.ac.in/og-image.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BSDT - Best Design & Technology College in Bangalore" />
        <meta name="twitter:description" content="Transform your creative passion into a successful career. Industry-focused design & technology programs with 95% placement rate." />
        <meta name="twitter:image" content="https://bsdt.ac.in/og-image.png" />
        <link rel="canonical" href="https://bsdt.ac.in/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Bangalore School of Design & Technology",
            "alternateName": "BSDT",
            "url": "https://bsdt.ac.in",
            "logo": "https://bsdt.ac.in/favicon.png",
            "description": "Premier design and technology education institution in Bangalore offering undergraduate and diploma programs.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/bsdtindia",
              "https://www.instagram.com/bsdt_india",
              "https://www.linkedin.com/school/bsdt"
            ]
          })}
        </script>
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
          <UpcomingEventsSection />
          
          <CollaborationsSection />
          <EnquiryFormSection /> 
          <FloatingEnquiryForm />
          
          
          <OpenDayPopup />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
