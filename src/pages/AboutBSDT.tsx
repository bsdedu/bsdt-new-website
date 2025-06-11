
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';
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
        {/* Hero Section */}
        <RevealSection direction="up" className="py-20 bg-gradient-to-br from-bsd-orange/5 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-bsd-gray mb-6">
                About BSDT
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Bangalore School of Design & Technology is a premier institution dedicated to fostering 
                creativity, innovation, and excellence in design and technology education.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Mission Section */}
        <RevealSection direction="up" className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-bsd-gray mb-8 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                At BSDT, we are committed to nurturing the next generation of creative professionals 
                by providing world-class education in design and technology. Our mission is to bridge 
                the gap between traditional design principles and cutting-edge technology.
              </p>
              <p className="text-lg text-foreground/70">
                We believe in empowering students with the skills, knowledge, and creative thinking 
                necessary to excel in today's rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Values Section */}
        <RevealSection direction="up" className="py-16 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-bsd-gray mb-12 text-center">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4">Innovation</h3>
                  <p className="text-foreground/70">
                    We foster a culture of innovation, encouraging students to think creatively 
                    and push the boundaries of design and technology.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4">Excellence</h3>
                  <p className="text-foreground/70">
                    We are committed to maintaining the highest standards of education and 
                    ensuring our students achieve excellence in their chosen fields.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4">Collaboration</h3>
                  <p className="text-foreground/70">
                    We believe in the power of collaboration, bringing together diverse 
                    perspectives to create meaningful and impactful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutBSDT;
