
import React, { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
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

    // Add page transition
    document.body.classList.add('fadeIn');

    return () => {
      document.body.classList.remove('fadeIn');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramsSection />
        <UpcomingEventsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CollaborationsSection />
        <EnquiryFormSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
