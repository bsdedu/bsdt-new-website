
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';
import { AboutHero } from '../components/about/AboutHero';
import { AboutMission } from '../components/about/AboutMission';
import { AboutValues } from '../components/about/AboutValues';
import { AboutHistory } from '../components/about/AboutHistory';
import { AboutLeadership } from '../components/about/AboutLeadership';
import { EnquiryFormSection } from '../components/home/EnquiryFormSection';

const AboutBSDT = () => {
  return (
    <>
      <Helmet>
        <title>About BSDT | Bangalore School of Design & Technology</title>
        <meta name="description" content="Learn about Bangalore School of Design & Technology - a premier institution dedicated to design education, innovation, and creative excellence. Discover our mission, vision, and values." />
        <meta name="keywords" content="about BSDT, design school Bangalore, creative education, design institution, art school" />
        <meta property="og:title" content="About BSDT | Bangalore School of Design & Technology" />
        <meta property="og:description" content="Learn about Bangalore School of Design & Technology - a premier institution dedicated to design education, innovation, and creative excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsdt.ac.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About BSDT | Bangalore School of Design & Technology" />
        <meta name="twitter:description" content="Learn about Bangalore School of Design & Technology - a premier institution dedicated to design education, innovation, and creative excellence." />
        <link rel="canonical" href="https://bsdt.ac.in/about" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutHistory />
        <AboutLeadership />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutBSDT;
