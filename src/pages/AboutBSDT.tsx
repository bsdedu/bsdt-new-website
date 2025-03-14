
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';
import { motion } from "framer-motion";

const AboutBSDT = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />

      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-6">About BSDT</h1>
              <p className="text-lg md:text-xl text-bsd-gray/80 mb-8">
                Discover the story, mission, and vision that drives Bangalore School of Design & Technology
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Our Story Section */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-bsd-gray mb-6">Our Story</h2>
                <p className="text-bsd-gray/80 mb-4">
                  Founded in 2018, Bangalore School of Design & Technology (BSDT) emerged from a vision to bridge the gap between traditional education and the rapidly evolving demands of the design and technology industries.
                </p>
                <p className="text-bsd-gray/80 mb-4">
                  What began as a small institute offering specialized courses has grown into a comprehensive educational hub that nurtures the next generation of creative problem-solvers and innovators.
                </p>
                <p className="text-bsd-gray/80">
                  Our journey has been marked by a commitment to excellence, innovation, and student success – values that continue to guide our growth and evolution.
                </p>
              </div>
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <img 
                    src="/lovable-uploads/9ff3e25b-a93f-40fb-87ff-cd765e063b61.png" 
                    alt="BSDT Campus" 
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bsd-orange rounded-full opacity-20 z-0"></div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Our Approach Section */}
        <RevealSection>
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="text-3xl font-bold text-bsd-gray mb-12 text-center">Our Educational Approach</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-bsd-orange/20 flex items-center justify-center rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-3">Innovation-Centered</h3>
                  <p className="text-bsd-gray/80">
                    We embrace cutting-edge methodologies and technologies, ensuring our students are at the forefront of design and technological advancement.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-bsd-orange/20 flex items-center justify-center rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-3">Industry-Integrated</h3>
                  <p className="text-bsd-gray/80">
                    Our curriculum is developed in partnership with industry leaders, providing students with practical, relevant skills valued in the workplace.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-bsd-orange/20 flex items-center justify-center rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-3">Holistic Learning</h3>
                  <p className="text-bsd-gray/80">
                    We believe in nurturing not just technical skills, but also creativity, critical thinking, and leadership abilities for well-rounded graduates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Campus Facilities */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-16">
            <h2 className="text-3xl font-bold text-bsd-gray mb-12 text-center">Campus Facilities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="overflow-hidden rounded-lg mb-8">
                  <img 
                    src="/lovable-uploads/fb0f9a42-b665-42ed-a4f5-50557f6a5093.png" 
                    alt="Design Studio" 
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">State-of-the-Art Design Studios</h3>
                <p className="text-bsd-gray/80">
                  Our spacious design studios are equipped with the latest tools and technologies, providing an optimal environment for creativity and collaboration.
                </p>
              </div>
              
              <div>
                <div className="overflow-hidden rounded-lg mb-8">
                  <img 
                    src="/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png" 
                    alt="Computer Lab" 
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Advanced Technology Labs</h3>
                <p className="text-bsd-gray/80">
                  Our computer labs feature high-performance workstations with industry-standard software, enabling students to bring their creative visions to life.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Vision & Values CTA */}
        <RevealSection>
          <div className="bg-bsd-orange/10 py-16">
            <div className="container mx-auto px-6 md:px-8 text-center">
              <h2 className="text-3xl font-bold text-bsd-gray mb-6">Join Our Community</h2>
              <p className="text-lg text-bsd-gray/80 max-w-2xl mx-auto mb-8">
                At BSDT, we're building more than an educational institution – we're creating a community of creative thinkers and problem-solvers who will shape the future of design and technology.
              </p>
              <button className="bg-bsd-orange hover:bg-bsd-orange/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
};

export default AboutBSDT;
