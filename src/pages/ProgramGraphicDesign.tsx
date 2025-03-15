import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, BookOpen, Calendar, GraduationCap, Award, BriefcaseBusiness, Building2, Lightbulb, Users, Paintbrush2, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { ApplicationDeadline } from "@/components/program/ApplicationDeadline";
import { FacultySection } from "@/components/program/FacultySection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";

const ProgramGraphicDesign = () => {
  return (
    <>
      <Helmet>
        <title>B.Sc Graphic Design | BSDT</title>
        <meta name="description" content="Study Graphic Design with a B.Sc degree program at Bangalore School of Design & Technology (BSDT). Learn visual communication, branding, and digital design." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-bsd-light-gray">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bsd-orange/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-bsd-gray/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <RevealSection>
              <div className="space-y-6">
                <Badge variant="bsdOrange" className="mb-2">3-YEAR UNDERGRADUATE PROGRAM</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray leading-tight">
                  B.Sc Graphic Design
                </h1>
                <p className="text-lg text-foreground/80">
                  Develop your creative skills in visual communication, branding, and digital design with our comprehensive Graphic Design program.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <AnimatedButton asChild>
                    <a href="#enquiry-form" className="hover:no-underline">Apply Now</a>
                  </AnimatedButton>
                  <AnimatedButton variant="outline" asChild>
                    <a href="#enquiry-form" className="hover:no-underline">
                      Download Brochure
                    </a>
                  </AnimatedButton>
                  <Link to="/admissions" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-10 px-4 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                    Learn About Admissions
                  </Link>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-bsd-orange" />
                    <span>3 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-bsd-orange" />
                    <span>Bengaluru North University</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-bsd-orange" />
                    <span>Next Batch: June 2024</span>
                  </div>
                </div>
                
                {/* Application Deadline Component */}
                <ApplicationDeadline 
                  lastDate="August 15, 2024" 
                  startDate="January 15, 2024" 
                  seatsAvailable={60}
                />
              </div>
            </RevealSection>

            <RevealSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-464ef5284de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                  alt="Graphic Design Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Master Visual Communication and Digital Design</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Quick stats */}
          <RevealSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              <Card className="border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">60+</h3>
                  <p className="text-sm text-foreground/70">Annual Intake</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">95%</h3>
                  <p className="text-sm text-foreground/70">Placement Rate</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">15+</h3>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Building2 className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">40+</h3>
                  <p className="text-sm text-foreground/70">Industry Partners</p>
                </CardContent>
              </Card>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Comprehensive Graphic Design Education
              </h2>
              <p className="mt-4 text-foreground/70">
                Our B.Sc Graphic Design program combines design principles with the latest digital tools, preparing you to excel in the creative industry.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <Tabs defaultValue="curriculum" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                  <TabsTrigger value="career">Career Opportunities</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="curriculum" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader>
                      <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <p className="text-foreground/70">
                          The B.Sc Graphic Design program is a 3-year full-time undergraduate course divided into 6 semesters, with core design subjects and specialized electives.
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Design Principles & Visual Communication</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Typography Fundamentals</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Digital Illustration</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Introduction to Graphic Design Software</span>
                            </li>
                          </ul>

                          <h4 className="font-medium text-bsd-gray">Second Year: Core Concepts</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Branding & Identity Design</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Layout Design & Editorial Graphics</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Web Design Fundamentals</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Motion Graphics</span>
                            </li>
                          </ul>

                          <h4 className="font-medium text-bsd-gray">Third Year: Specialization</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Advanced Branding Strategies</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>UI/UX Design for Web & Mobile</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Packaging Design</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Advertising Design</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-bsd-orange/5 border-bsd-orange/20">
                    <CardHeader>
                      <h3 className="text-xl font-semibold text-bsd-gray">Program Highlights</h3>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Paintbrush2 className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Creative Studio Environment</h4>
                            <p className="text-sm text-foreground/70">Work in a collaborative studio setting that fosters creativity and innovation</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <LayoutDashboard className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry-Standard Software</h4>
                            <p className="text-sm text-foreground/70">Gain hands-on experience with Adobe Creative Suite and other leading design tools</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Users className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Expert Faculty</h4>
                            <p className="text-sm text-foreground/70">Learn from experienced design professionals and industry experts</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry Internships</h4>
                            <p className="text-sm text-foreground/70">Gain real-world experience through internships with leading design agencies and brands</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Portfolio Development</h4>
                            <p className="text-sm text-foreground/70">Build a professional portfolio showcasing your best design work</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="outcomes" className="mt-0">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Learning Outcomes</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Knowledge & Understanding</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Comprehensive understanding of design principles and visual communication</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Knowledge of typography, color theory, and layout design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of branding, advertising, and marketing concepts</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Familiarity with industry-standard design software and tools</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Skills & Abilities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Proficiency in creating visual designs for various media</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ability to develop brand identities and marketing campaigns</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Expertise in using design software such as Adobe Creative Suite</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Competence in project management and problem-solving</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4 md:col-span-2">
                        <h4 className="font-medium text-bsd-gray">Professional Development</h4>
                        <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Portfolio development showcasing design projects</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of design industry ethics and professional practices</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ability to work in cross-functional creative teams</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Critical thinking and creative problem-solving</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="career" className="mt-0">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-bsd-gray">Career Opportunities</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Design Roles</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Graphic Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Web Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>UI/UX Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Brand Identity Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Packaging Designer</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Creative Industry</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Advertising Art Director</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Marketing Specialist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Social Media Manager</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Content Creator</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Illustrator</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Freelance & Entrepreneurship</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Freelance Graphic Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Consultant</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Creative Director</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Studio Owner</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-bsd-light-gray rounded-xl">
                      <h4 className="font-medium text-bsd-gray mb-4">Industry Insights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">₹3-10L</h5>
                          <p className="text-sm text-foreground/70">Average Starting Salary</p>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">25%</h5>
                          <p className="text-sm text-foreground/70">Design Industry Growth Rate</p>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">1.5M+</h5>
                          <p className="text-sm text-foreground/70">Global Design Job Openings</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </RevealSection>
        </div>
      </section>

      {/* Student Works Gallery */}
      
<StudentWorksGallery 
  title="Graphic Design Student Projects"
  subtitle="Explore the creative works and design solutions from our graphic design students"
  projects={[
    {
      title: "Brand Identity System",
      description: "Complete brand identity including logo, typography, and application guidelines",
      imageUrl: "https://images.unsplash.com/photo-1545670723-196ed0954986?fit=crop&w=600&h=400",
      category: "Branding"
    },
    {
      title: "Editorial Design",
      description: "Magazine layout and typographic design showcasing visual hierarchy",
      imageUrl: "https://images.unsplash.com/photo-1574492543179-135638a28ecf?fit=crop&w=600&h=400",
      category: "Editorial"
    },
    {
      title: "Packaging Design",
      description: "Sustainable packaging solution with innovative structural design",
      imageUrl: "https://images.unsplash.com/photo-1541613569553-332a2574a508?fit=crop&w=600&h=400",
      category: "Packaging"
    },
    {
      title: "Digital Illustration Series",
      description: "Set of conceptual illustrations for social awareness campaign",
      imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?fit=crop&w=600&h=400",
      category: "Illustration"
    }
  ]}
/>


      {/* Faculty Section */}
      <FacultySection />
      
      {/* Design Studio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">UNIQUE ADVANTAGE</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Design Studio: Hands-on Learning
              </h2>
              <p className="mt-4 text-foreground/70">
                Experience real-world design challenges in our state-of-the-art design studio.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1586773860418-d372a6344c94?w=800&auto=format&fit=crop" 
                  alt="Design Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">Design Studio</h3>
                    <p className="text-white/80">Students working on collaborative design projects</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-bsd-gray">A Unique Learning Experience</h3>
                <p className="text-foreground/70">
                  Our Design Studio provides students with access to professional-grade equipment and software used in the industry. Students work on real client projects, gaining valuable practical experience.
                </p>
                
                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Work on Real Client Projects</h4>
                      <p className="text-sm text-foreground/70">Experience the entire design process from concept to delivery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Mentorship from Industry Professionals</h4>
                      <p className="text-sm text-foreground/70">Learn directly from experienced designers and creative directors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Build a Professional Portfolio</h4>
                      <p className="text-sm text-foreground/70">Graduate with a portfolio of actual client projects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Network with Industry Partners</h4>
                      <p className="text-sm text-foreground/70">Develop connections with potential employers while still studying</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <AnimatedButton asChild>
                    <a href="#enquiry-form" className="hover:no-underline">Apply Now</a>
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Eligibility & Admission Section */}
      <section className="py-16 bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="
