
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { FacultySection } from "@/components/program/FacultySection";
import { BCAFacilitiesSection } from "@/components/program/BCAFacilitiesSection";
import { BCAHeroSection } from "@/components/program/BCAHeroSection";
import { BCAStatsSection } from "@/components/program/BCAStatsSection";
import { BCAOverviewSection } from "@/components/program/BCAOverviewSection";
import { BCAAdmissionSection } from "@/components/program/BCAAdmissionSection";

const ProgramBCA = () => {
  const programName = "BCA with UI/UX & AI/ML";
  
  return (
    <>
      <Helmet>
        <title>{programName} | Bangalore School of Design & Technology</title>
        <meta name="description" content="Study Bachelor of Computer Applications (BCA) with specializations in UI/UX or AI/ML at Bangalore School of Design & Technology. Develop skills in application development, user experience design, and artificial intelligence." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <BCAHeroSection />

      {/* Quick stats section */}
      <BCAStatsSection />

      {/* Program Overview */}
      <BCAOverviewSection />

      {/* Student Works Gallery */}
      <StudentWorksGallery 
        title="BCA Student Projects"
        subtitle="Our students create innovative applications, interfaces, and AI solutions that showcase their technical and creative skills"
        projects={[
          {
            title: "Smart Home Interface",
            description: "A user-friendly UI/UX design for smart home control with accessibility features",
            imageUrl: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?fit=crop&w=600&h=400",
            category: "UI/UX Design"
          },
          {
            title: "AI-Powered Financial Assistant",
            description: "Machine learning application that provides personalized financial advice and investment recommendations",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=600&h=400",
            category: "AI/ML"
          },
          {
            title: "Healthcare Monitoring Dashboard",
            description: "Real-time health metrics visualization with intuitive navigation and data insights",
            imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?fit=crop&w=600&h=400",
            category: "UI/UX Design"
          },
          {
            title: "Image Recognition System",
            description: "Computer vision application that identifies objects and provides contextual information",
            imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?fit=crop&w=600&h=400",
            category: "AI/ML"
          },
          {
            title: "E-Learning Platform",
            description: "Comprehensive interface design with adaptive learning features and gamification elements",
            imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=600&h=400",
            category: "UI/UX Design"
          },
          {
            title: "Predictive Text Analysis Tool",
            description: "NLP-based application that analyzes sentiment and predicts text completion",
            imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fit=crop&w=600&h=400",
            category: "AI/ML"
          }
        ]}
      />

      {/* Faculty Section */}
      <FacultySection />
      
      {/* BCA Facilities Section */}
      <BCAFacilitiesSection />
      
      {/* Eligibility & Admission Section */}
      <BCAAdmissionSection />

      {/* Enquiry Form Section with id for scroll target */}
      <div id="enquiry-form">
        <EnquiryFormSection />
      </div>
      
      <Footer />
    </>
  );
};

export default ProgramBCA;
