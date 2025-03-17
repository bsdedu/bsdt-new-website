import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';
import { motion } from "framer-motion";
import { Book, Award, Lightbulb, GraduationCap, Globe, Leaf, Users, PenTool, CheckCircle, BrainCircuit, Play, BadgeCheck, Building, BookOpen, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from '../components/ui-elements/Card';

const AboutBSDT = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  return <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />

      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-6">About BSDT</h1>
              <p className="text-lg md:text-xl text-bsd-gray/80 mb-8">
                India's pioneer in Design and Technology education, bridging creativity and innovation
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Introduction Section */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="bsdOrange" className="mb-4">About Us</Badge>
                <h2 className="text-3xl font-bold text-bsd-gray mb-6">Bangalore School of Design & Technology</h2>
                <p className="text-bsd-gray/80 mb-4">
                  Bangalore School of Design & Technology (BSDT) is India's pioneer in Design and Tech education, bridging the gap between creativity and innovation. Our programs span Interior Design, Interior Architecture, Graphic Design, Brand Strategy, UI/UX, Design Thinking, Furniture Design, Digital Architecture, Product Design, and Media Studies.
                </p>
                <p className="text-bsd-gray/80 mb-4">
                  BSDT has been a catalyst for student success across creative and technological industries. As an institution under BSD Educational Trust, BSDT is committed to fostering a new generation of designers and tech innovators who can shape the future through meaningful, responsible, and cutting-edge solutions.
                </p>
              </div>
              <div className="relative">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.7,
                delay: 0.2
              }} className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/lovable-uploads/9ff3e25b-a93f-40fb-87ff-cd765e063b61.png" alt="BSDT Campus" className="w-full h-auto rounded-lg" />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bsd-orange rounded-full opacity-20 z-0"></div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Mission, Vision & Values Section */}
        <RevealSection>
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <Badge variant="bsdOrange" className="mb-3">Our Foundation</Badge>
                <h2 className="text-3xl font-bold text-bsd-gray">Mission, Vision & Core Values</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Mission Card */}
                <Card isHoverable className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-bsd-gray">Our Mission</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-bsd-gray/80">
                      BSDT prepares aspiring designers and working professionals to be leaders in the field by providing an immersive education that integrates expert faculty, innovative methodologies, and strong industry partnerships.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Vision Card */}
                <Card isHoverable className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="h-8 w-8 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-bsd-gray">Our Vision</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-bsd-gray/80">
                      To be a global leader in Design and Tech education, shaping the future of industries through transformative curricula, strategic collaborations, and graduates who make a lasting impact.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Core Values Card */}
                <Card isHoverable className="h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-bsd-gray text-center">Core Values</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[{
                      icon: <BrainCircuit className="h-5 w-5" />,
                      text: "Innovation & Technology"
                    }, {
                      icon: <PenTool className="h-5 w-5" />,
                      text: "Creativity & Collaboration"
                    }, {
                      icon: <Leaf className="h-5 w-5" />,
                      text: "Sustainability & Responsibility"
                    }, {
                      icon: <Book className="h-5 w-5" />,
                      text: "Experiential Learning"
                    }, {
                      icon: <Globe className="h-5 w-5" />,
                      text: "Global Perspective"
                    }].map((value, index) => <li key={index} className="flex items-start space-x-3">
                          <div className="text-bsd-orange mt-0.5">{value.icon}</div>
                          <span className="text-bsd-gray/80">{value.text}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Our Story Section */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="bsdOrange" className="mb-3">Our Journey</Badge>
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
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.7,
                delay: 0.2
              }} className="rounded-lg overflow-hidden shadow-xl">
                  <img alt="BSDT Campus" src="/lovable-uploads/84bf2665-5492-457f-8295-f739efb5d307.png" className="w-full h-auto rounded-lg object-contain" />
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

        {/* Academic & Industry Partnerships */}
        <RevealSection>
          <div className="container mx-auto px-6 md:px-8 py-16">
            <div className="text-center mb-12">
              <Badge variant="bsdOrange" className="mb-3">Collaborations</Badge>
              <h2 className="text-3xl font-bold text-bsd-gray mb-4">Academic & Industry Partnerships</h2>
              <p className="text-bsd-gray/80 max-w-3xl mx-auto">
                At BSDT, we believe in the power of collaboration to shape the future of Design & Tech education. 
                Our affiliations and partnerships ensure our students receive globally recognized credentials, 
                cutting-edge knowledge, and real-world exposure.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Academic Affiliations */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-bsd-orange/20 flex items-center justify-center rounded-full mr-4">
                    <Building className="h-6 w-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-2xl font-semibold text-bsd-gray">Academic Affiliations</h3>
                </div>
                
                <Card isHoverable className="mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <img src="/lovable-uploads/294f5e6e-f3dc-462d-b5e0-13a1bf147bf7.png" alt="BNU Logo" className="w-16 h-16 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-bsd-gray mb-2">Bengaluru North University (BNU)</h4>
                        <p className="text-bsd-gray/80">
                          BSDT is affiliated with Bengaluru North University, ensuring our degree programs meet the highest academic standards. 
                          This affiliation provides students with government-recognized qualifications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card isHoverable>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <img src="/lovable-uploads/97b89cbf-3490-4189-ab5a-1029c18072ef.png" alt="Mysore University Logo" className="w-16 h-16 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-bsd-gray mb-2">Mysore University – via Cresta BSD</h4>
                        <p className="text-bsd-gray/80">
                          BSDT's specialized Bachelor of Design (B.Des) programs receive recognition from Mysore University 
                          through our partnership with Cresta School of Management, Science & Arts.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Academic Partnerships */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-bsd-orange/20 flex items-center justify-center rounded-full mr-4">
                    <Handshake className="h-6 w-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-2xl font-semibold text-bsd-gray">Academic Partnerships</h3>
                </div>
                
                <Card isHoverable className="mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <img src="/lovable-uploads/0ca4c838-d02a-47df-a1ad-43d00ef48c8f.png" alt="Cresta BSD Logo" className="w-16 h-16 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-bsd-gray mb-2">Cresta School of Management, Science & Arts</h4>
                        <p className="text-bsd-gray/80">
                          Our collaboration with Cresta BSD allows students to pursue specialized B.Des programs 
                          recognized by Mysore University, integrating business acumen with design thinking.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card isHoverable>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <img src="/lovable-uploads/8c54bc32-e626-4a4b-ba4a-e75e84612ca8.png" alt="College De Paris Logo" className="w-16 h-16 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-bsd-gray mb-2">College De Paris – École Conte</h4>
                        <p className="text-bsd-gray/80">
                          Our international academic partnership with École Conte, part of College De Paris, 
                          offers international faculty, student exchange programs, and exposure to global design trends.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Industry Partnerships */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-bsd-orange/20 flex items-center justify-center rounded-full mr-4">
                  <Building className="h-6 w-6 text-bsd-orange" />
                </div>
                <h3 className="text-2xl font-semibold text-bsd-gray">Industry Partnerships</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card isHoverable>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <img src="/lovable-uploads/8b983b3f-fd59-44d3-b5cc-152eeffe62cd.png" alt="IIID Logo" className="w-16 h-16 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-bsd-gray mb-2">Indian Institute of Interior Designers (IIID)</h4>
                        <p className="text-bsd-gray/80">
                          BSDT is a proud partner of IIID, India's leading professional body for interior designers, 
                          providing students with access to industry experts and networking opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card isHoverable>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <img src="/lovable-uploads/8b983b3f-fd59-44d3-b5cc-152eeffe62cd.png" alt="ADI Logo" className="w-16 h-16 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-bsd-gray mb-2">Association of Designers of India (ADI)</h4>
                        <p className="text-bsd-gray/80">
                          As a recognized member of ADI, BSDT aligns its curriculum with emerging industry trends 
                          and professional standards, providing mentorship and industry-driven projects.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Why Our Partnerships Matter */}
            <div>
              <h3 className="text-2xl font-semibold text-bsd-gray mb-6 text-center">Why Our Partnerships Matter</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                icon: <GraduationCap className="h-6 w-6" />,
                title: "Recognized Degrees",
                description: "Accredited by Bengaluru North University and Mysore University"
              }, {
                icon: <Globe className="h-6 w-6" />,
                title: "Global Exposure",
                description: "Access to international faculty, exchange programs, and networking events"
              }, {
                icon: <Handshake className="h-6 w-6" />,
                title: "Industry Integration",
                description: "Direct engagement with professional associations and mentorship from experts"
              }, {
                icon: <Award className="h-6 w-6" />,
                title: "Career Advancement",
                description: "Internship and placement opportunities with leading design firms"
              }].map((item, index) => <Card key={index} isHoverable className="text-center">
                    <CardContent className="pt-6">
                      <div className="mx-auto w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                        <div className="text-bsd-orange">{item.icon}</div>
                      </div>
                      <h4 className="text-lg font-semibold text-bsd-gray mb-2">{item.title}</h4>
                      <p className="text-bsd-gray/80 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            
            {/* Logo Carousel */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-bsd-gray mb-8 text-center">Our Esteemed Partners</h3>
              <Carousel opts={{
              align: "start",
              loop: true
            }} className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {Array.from({
                  length: 6
                }).map((_, index) => <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                        <Card className="border-0 shadow-none">
                          <CardContent className="flex items-center justify-center p-6">
                            <img 
                              src={index === 0 ? "/lovable-uploads/294f5e6e-f3dc-462d-b5e0-13a1bf147bf7.png" : 
                                  index === 1 ? "/lovable-uploads/97b89cbf-3490-4189-ab5a-1029c18072ef.png" :
                                  index === 2 ? "/lovable-uploads/0ca4c838-d02a-47df-a1ad-43d00ef48c8f.png" :
                                  index === 3 ? "/lovable-uploads/8c54bc32-e626-4a4b-ba4a-e75e84612ca8.png" :
                                  `/lovable-uploads/8b983b3f-fd59-44d3-b5cc-152eeffe62cd.png`} 
                              alt={`Partner logo ${index + 1}`} 
                              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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
                  <img src="/lovable-uploads/fb0f9a42-b665-42ed-a4f5-50557f6a5093.png" alt="Design Studio" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">State-of-the-Art Design Studios</h3>
                <p className="text-bsd-gray/80">
                  Our spacious design studios are equipped with the latest tools and technologies, providing an optimal environment for creativity and collaboration.
                </p>
              </div>
              
              <div>
                <div className="overflow-hidden rounded-lg mb-8">
                  <img src="/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png" alt="Computer Lab" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500" />
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
    </div>;
};
export default AboutBSDT;
