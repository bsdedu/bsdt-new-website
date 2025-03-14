
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';
import { Separator } from '@/components/ui/separator';

const LeadershipGovernance = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Leadership team data
  const leadershipTeam = [
    {
      name: "Dr. Arun Kumar",
      position: "Founder & Chairman",
      bio: "Dr. Kumar brings over 25 years of experience in design education and industry practice. Prior to founding BSDT, he served as the Head of Design at a leading multinational corporation and held faculty positions at prestigious design institutions.",
      image: "/lovable-uploads/e0344460-76de-492d-b4fc-2b7557c96db5.png"
    },
    {
      name: "Prof. Meera Nair",
      position: "Academic Director",
      bio: "Prof. Nair oversees academic affairs and curriculum development. With a PhD in Design Education and extensive teaching experience, she ensures BSDT's educational offerings remain cutting-edge and aligned with industry needs.",
      image: "/lovable-uploads/b0bd1350-1b3d-44a7-a043-b876650c169d.png"
    },
    {
      name: "Mr. Suresh Patel",
      position: "Chief Technology Officer",
      bio: "Mr. Patel leads BSDT's technology initiatives and digital transformation efforts. His background in both technology development and design thinking helps bridge these disciplines across our programs.",
      image: "/lovable-uploads/7d078e54-32f9-4dcf-9af6-9717145d71b7.png"
    },
    {
      name: "Dr. Lakshmi Subramanian",
      position: "Director of Research",
      bio: "Dr. Subramanian drives BSDT's research agenda, fostering innovation and academic excellence. Her work has been published in leading international journals and she maintains strong connections with research institutions worldwide.",
      image: "/lovable-uploads/cf7871df-3c22-4504-ae9f-824fd6ec7804.png"
    }
  ];

  // Advisory board data
  const advisoryBoard = [
    {
      name: "Mr. Vikram Mehta",
      position: "CEO, DesignFirst Solutions",
      expertise: "Product Design & Innovation"
    },
    {
      name: "Ms. Ananya Singh",
      position: "Creative Director, Global Design Co.",
      expertise: "Visual Communication & Branding"
    },
    {
      name: "Dr. Rajiv Menon",
      position: "Former Dean, National Institute of Design",
      expertise: "Design Education & Policy"
    },
    {
      name: "Ms. Priya Narayan",
      position: "Founder, Tech Innovators Hub",
      expertise: "Technology Integration & Entrepreneurship"
    },
    {
      name: "Mr. Thomas Chen",
      position: "Global UX Lead, TechGiant Inc.",
      expertise: "User Experience & Digital Products"
    }
  ];

  // Governance structure data
  const governanceStructure = [
    {
      name: "Board of Trustees",
      description: "The highest governing body of BSDT, responsible for strategic direction, major policy decisions, and institutional oversight."
    },
    {
      name: "Executive Committee",
      description: "Handles operational management and implementation of policies set by the Board of Trustees."
    },
    {
      name: "Academic Council",
      description: "Oversees curriculum development, academic standards, and faculty affairs to ensure educational excellence."
    },
    {
      name: "Student Affairs Committee",
      description: "Focuses on student welfare, extracurricular activities, and campus life enhancement."
    },
    {
      name: "Industry Advisory Panel",
      description: "Provides insights on industry trends and helps align academic programs with market needs."
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />

      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-6">Leadership & Governance</h1>
              <p className="text-lg md:text-xl text-bsd-gray/80 mb-8">
                Meet the visionaries and experts guiding Bangalore School of Design & Technology toward excellence
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Leadership Team Section */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-16">
            <h2 className="text-3xl font-bold text-bsd-gray mb-12 text-center">Our Leadership Team</h2>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/3">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-auto aspect-square object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-semibold text-bsd-gray">{leader.name}</h3>
                    <p className="text-bsd-orange font-medium mb-3">{leader.position}</p>
                    <p className="text-bsd-gray/80">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Governance Structure Section */}
        <RevealSection>
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="text-3xl font-bold text-bsd-gray mb-12 text-center">Governance Structure</h2>
              
              <div className="max-w-3xl mx-auto">
                {governanceStructure.map((item, index) => (
                  <div key={index}>
                    <div className="py-4">
                      <h3 className="text-xl font-semibold text-bsd-gray mb-2">{item.name}</h3>
                      <p className="text-bsd-gray/80">{item.description}</p>
                    </div>
                    {index < governanceStructure.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Advisory Board Section */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-16">
            <h2 className="text-3xl font-bold text-bsd-gray mb-12 text-center">Advisory Board</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {advisoryBoard.map((advisor, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <h3 className="text-xl font-semibold text-bsd-gray">{advisor.name}</h3>
                  <p className="text-bsd-orange mb-3">{advisor.position}</p>
                  <div className="inline-block bg-bsd-orange/10 px-3 py-1 rounded-full text-sm text-bsd-orange">
                    {advisor.expertise}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Core Values Section */}
        <RevealSection>
          <div className="bg-bsd-orange/10 py-16">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="text-3xl font-bold text-bsd-gray mb-12 text-center">Our Guiding Principles</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-bsd-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Integrity</h3>
                  <p className="text-bsd-gray/80">We uphold the highest ethical standards in all our actions and decisions.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-bsd-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Innovation</h3>
                  <p className="text-bsd-gray/80">We foster creativity and embrace change to stay at the forefront of education.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-bsd-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Inclusivity</h3>
                  <p className="text-bsd-gray/80">We create an environment where diverse perspectives are valued and welcomed.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-bsd-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Excellence</h3>
                  <p className="text-bsd-gray/80">We strive for the highest standards in education, research, and administration.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Contact CTA */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-bsd-gray mb-6">Connect With Our Leadership</h2>
            <p className="text-lg text-bsd-gray/80 max-w-2xl mx-auto mb-8">
              Have questions for our leadership team or interested in potential collaborations? We'd be happy to hear from you.
            </p>
            <button className="bg-bsd-orange hover:bg-bsd-orange/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
};

export default LeadershipGovernance;
