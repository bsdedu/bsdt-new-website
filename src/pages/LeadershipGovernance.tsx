import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui-elements/Card';
import { UserIcon, GraduationCap, Users, Shield, Award, Flag, Briefcase, HandshakeIcon } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LeadershipGovernance = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Leadership team data - updated with new images
  const leadershipTeam = [
    {
      name: "Dineshwar S",
      position: "Chairman",
      bio: "A seasoned design professional with over 30 years of experience, Dineshwar S is the guiding force behind BSDT's academic and industry-driven vision. As Co-founder of BSD Educational Trust and Chairman of BSDT, he ensures that the institution remains cutting-edge, globally competitive, and deeply rooted in design excellence.",
      image: "/lovable-uploads/5d5629b1-de30-46f9-8bef-ebefcac909c5.png"
    },
    {
      name: "Praveen Nandakumar",
      position: "Co-Chairman",
      bio: "As Co-Chairman of BSDT, Praveen Nandakumar is the driving force behind its vision and expansion. He leads the institution across academics, strategy, operations, marketing, and industry collaborations, ensuring BSDT remains at the forefront of design and technology education.",
      image: "/lovable-uploads/d1e69b3a-6ece-40bb-ba92-363b7d0f3758.png"
    },
    {
      name: "Karthik Nandakumar",
      position: "Secretary & Treasurer",
      bio: "Karthik Nandakumar oversees BSDT's daily operations, financial planning, and long-term strategy. With a Master's in Finance & Management from the University of Exeter, he ensures efficient resource allocation, institutional growth, and operational excellence.",
      image: "/lovable-uploads/66c6a931-8ba1-4c13-8f59-bcb925328891.png"
    },
    {
      name: "Ar. Preethi Dineshwar",
      position: "Director of Academics",
      bio: "An accomplished architect and academician, Ar. Preethi Dineshwar has been at BSDT since its inception. With over 25 years of experience in architecture and nearly a decade in education, she plays a pivotal role in curriculum development, faculty mentorship, and student engagement.",
      image: "/lovable-uploads/0d8d1a0c-c39b-4ddf-baa2-5736fc824c3d.png"
    },
    {
      name: "Sharan Desai",
      position: "Principal",
      bio: "A specialist in Urban Design & City Planning, Sharan Desai is committed to fostering design innovation that impacts society. His leadership in academic excellence, events, and industry collaborations strengthens BSDT's position as a premier institution in Design & Tech education.",
      image: "/lovable-uploads/4683ed3e-a48d-4e31-a73d-8ad155b2ae4f.png"
    }
  ];

  // Academic Council data
  const academicCouncil = [
    {
      name: "Mr Sharan Desai",
      position: "Chairperson"
    },
    {
      name: "Ar Preethi Dineshwar",
      position: "Member"
    },
    {
      name: "Ar Dipti Dineshwar",
      position: "Member"
    },
    {
      name: "Mr Ritesh L",
      position: "Member"
    },
    {
      name: "Ar Adhitha Raja Varma",
      position: "Member"
    }
  ];

  // Board of Governing Council data
  const governingCouncil = [
    {
      name: "Ar S Dineshwar",
      position: "Chairman"
    },
    {
      name: "Mr. Praveen Kumar Nandakumar",
      position: "Co-Chairman"
    },
    {
      name: "Mr. Sharan Desai",
      position: "Principal & Ex-officio Member"
    },
    {
      name: "Ar Preethi Dineshwar",
      position: "Director – Academics"
    },
    {
      name: "Mr. Karthik Nandakumar",
      position: "Secretary"
    },
    {
      name: "Ar Dipti Dineshwar",
      position: "Head Academics"
    },
    {
      name: "Mrs. Monisha Reddy T",
      position: "Head Marketing"
    },
    {
      name: "Mr. Vinod Kumar",
      position: "Head HR & Administrator"
    },
    {
      name: "Ar Aditha Varma Raja",
      position: "Asst Professor"
    },
    {
      name: "Advocate N Jaiprakash Rao",
      position: "Member"
    },
    {
      name: "Advocate Veena Jayaprakash",
      position: "Member"
    },
    {
      name: "Mr. Prathapan Manickam",
      position: "Member from Industry"
    },
    {
      name: "Mr. Manjunath",
      position: "(Ex Syndicate member), Bangalore University"
    },
    {
      name: "Dr Dilip Krishna",
      position: "Syndicate Member (BNU Appointed Member)"
    },
    {
      name: "Mr Aravind R Chanjeri",
      position: "Member of Vidyavishak Parishad (BNU Appointed Member)"
    }
  ];

  // Core Values Section - Updated
  const coreValues = [
    {
      icon: <Award className="h-8 w-8 text-bsd-orange" />,
      title: "Excellence",
      description: "We strive for the highest standards in education, research, and administration."
    },
    {
      icon: <UserIcon className="h-8 w-8 text-bsd-orange" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our actions and decisions."
    },
    {
      icon: <Users className="h-8 w-8 text-bsd-orange" />,
      title: "Inclusivity",
      description: "We create an environment where diverse perspectives are valued and welcomed."
    },
    {
      icon: <Flag className="h-8 w-8 text-bsd-orange" />,
      title: "Leadership",
      description: "We develop leaders who will make positive impacts in their communities and professions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Leadership & Governance | Bangalore School of Design & Technology</title>
        <meta name="description" content="Meet the visionary leaders and governing council of BSDT. Learn about our governance structure, academic council, and the experts guiding our institution toward excellence." />
        <meta name="keywords" content="BSDT leadership, governance structure, academic council, design school management, institutional leadership" />
        <meta property="og:title" content="Leadership & Governance | Bangalore School of Design & Technology" />
        <meta property="og:description" content="Meet the visionary leaders and governing council of BSDT. Learn about our governance structure, academic council, and the experts guiding our institution toward excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsdt.ac.in/leadership" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leadership & Governance | Bangalore School of Design & Technology" />
        <meta name="twitter:description" content="Meet the visionary leaders and governing council of BSDT. Learn about our governance structure, academic council, and the experts guiding our institution toward excellence." />
        <link rel="canonical" href="https://bsdt.ac.in/leadership" />
      </Helmet>
      
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

          {/* Leadership Team Section - Updated with new images */}
          <RevealSection>
            <div className="container mx-auto px-6 md:px-8 py-16">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-6 w-6 text-bsd-orange" />
                <h2 className="text-3xl font-bold text-bsd-gray">Our Leadership Team</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {leadershipTeam.map((leader, index) => (
                  <Card key={index} isHoverable className="overflow-hidden border-0">
                    <div className="flex flex-col md:flex-row gap-6 p-6">
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
                  </Card>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Governing Bodies Tabs Section */}
          <RevealSection>
            <div className="bg-gray-50 py-16">
              <div className="container mx-auto px-6 md:px-8">
                <div className="flex items-center gap-3 mb-12">
                  <Shield className="h-6 w-6 text-bsd-orange" />
                  <h2 className="text-3xl font-bold text-bsd-gray">Governing Bodies & Councils</h2>
                </div>
                
                <div className="flex flex-col items-center">
                  <Tabs defaultValue="governing" className="w-full max-w-4xl">
                    <TabsList className="w-full grid grid-cols-2 mb-8">
                      <TabsTrigger value="governing" className="text-base">Board of Governing Council</TabsTrigger>
                      <TabsTrigger value="academic" className="text-base">Academic Council</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="governing" className="w-full">
                      <p className="text-bsd-gray/80 mb-8 max-w-3xl">
                        Our Board of Governing Council carries our mission forward by supporting an institution where collaboration, discovery, rigorous scholarship and creativity infuse everything we do. This team guides the strategic planning of the university with a core commitment to providing exceptional service to students, faculty, and staff.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {governingCouncil.map((member, index) => (
                          <Card key={index} isHoverable className="border-0">
                            <CardHeader>
                              <div className="flex items-center gap-3 mb-1">
                                <Avatar className="h-10 w-10 bg-bsd-orange/10">
                                  <AvatarFallback className="text-bsd-orange">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold text-bsd-gray">{member.name}</h3>
                                  <p className="text-sm text-bsd-gray/70">{member.position}</p>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="academic" className="w-full">
                      <p className="text-bsd-gray/80 mb-8 max-w-3xl">
                        Since our foundation, we have always been a nontraditional institution that challenges the status quo. Our academic leaders meet regularly to explore and examine how the institution can continue to grow and fulfill its mission as a creative, innovative, and socially engaged institution.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {academicCouncil.map((member, index) => (
                          <Card key={index} isHoverable className="border-0">
                            <CardHeader>
                              <div className="flex items-center gap-3 mb-1">
                                <Avatar className="h-10 w-10 bg-bsd-orange/10">
                                  <AvatarFallback className="text-bsd-orange">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold text-bsd-gray">{member.name}</h3>
                                  <p className="text-sm text-bsd-gray/70">{member.position}</p>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Core Values Section */}
          <RevealSection>
            <div className="container mx-auto px-6 md:px-8 py-16">
              <div className="flex items-center gap-3 mb-12">
                <GraduationCap className="h-6 w-6 text-bsd-orange" />
                <h2 className="text-3xl font-bold text-bsd-gray">Our Guiding Principles</h2>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {coreValues.map((value, index) => (
                  <Card key={index} isHoverable className="border-0">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-bsd-gray mb-2 text-center">{value.title}</h3>
                      <p className="text-bsd-gray/80 text-center">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Governance FAQs Section */}
          <RevealSection>
            <div className="bg-bsd-orange/5 py-16">
              <div className="container mx-auto px-6 md:px-8">
                <div className="flex items-center gap-3 mb-12">
                  <HandshakeIcon className="h-6 w-6 text-bsd-orange" />
                  <h2 className="text-3xl font-bold text-bsd-gray">Governance Framework</h2>
                </div>
                
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">Decision Making Process</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-bsd-gray/80 mb-4">
                          At BSDT, our decision-making process is transparent and inclusive. Strategic decisions go through a structured process involving relevant stakeholders, ensuring that all perspectives are considered.
                        </p>
                        <p className="text-bsd-gray/80">
                          Governance committees meet regularly to review policies, academic standards, and institutional initiatives, ensuring alignment with our mission and vision.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">Quality Assurance</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-bsd-gray/80 mb-4">
                          Our quality assurance framework ensures rigorous standards in education, research, and administration. Regular internal and external audits help maintain excellence in all aspects of our operations.
                        </p>
                        <p className="text-bsd-gray/80">
                          Faculty and staff undergo continuous professional development to stay at the forefront of their fields, ensuring that our students receive the highest quality education.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">Community Engagement</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-bsd-gray/80 mb-4">
                          BSDT actively engages with the broader community through various initiatives, including public lectures, exhibitions, and collaborative projects with local organizations.
                        </p>
                        <p className="text-bsd-gray/80">
                          Our students and faculty are encouraged to participate in community service and social impact projects, applying their skills and knowledge to address real-world challenges.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-medium">Ethical Framework</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-bsd-gray/80 mb-4">
                          BSDT is committed to maintaining the highest ethical standards in all aspects of our operations. Our code of conduct guides the behavior of students, faculty, and staff, ensuring integrity and professionalism.
                        </p>
                        <p className="text-bsd-gray/80">
                          We have established robust policies and procedures to address ethical issues, including academic integrity, research ethics, and professional conduct.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
    </>
  );
};

export default LeadershipGovernance;
