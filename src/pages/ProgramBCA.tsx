
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, BookOpen, Calendar, GraduationCap, Award, BriefcaseBusiness, Building2, Lightbulb, Users, Shield, Database, Cpu, Code, PenTool, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { ApplicationDeadline } from "@/components/program/ApplicationDeadline";
import { FacultySection } from "@/components/program/FacultySection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { BCAFacilitiesSection } from "@/components/program/BCAFacilitiesSection";

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
                  {programName}
                </h1>
                <p className="text-lg text-foreground/80">
                  A comprehensive program developing skills in application development, UI/UX design, and artificial intelligence & machine learning
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
                  src="/lovable-uploads/95442d0d-92a2-407b-8bf3-691152ab5174.png" 
                  alt="BCA Program - UI/UX and AI/ML" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Specialize in UI/UX Design or AI & Machine Learning</p>
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
                Comprehensive BCA Education
              </h2>
              <p className="mt-4 text-foreground/70">
                Our Bachelor of Computer Applications program with specializations in UI/UX Design or AI & Machine Learning combines technical development skills with creative design solutions, preparing you for the rapidly evolving digital landscape.
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
                          The Bachelor of Computer Applications program is a 3-year full-time undergraduate course divided into 6 semesters, with core computing subjects and specialized tracks in UI/UX Design or AI & Machine Learning.
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Introduction to Computer Systems</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Programming Fundamentals</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Mathematics for Computing</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Digital Design Basics</span>
                            </li>
                          </ul>

                          <h4 className="font-medium text-bsd-gray">Second Year: Core Concepts</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Object-Oriented Programming</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Web Technologies</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Database Management Systems</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Human-Computer Interaction</span>
                            </li>
                          </ul>

                          <h4 className="font-medium text-bsd-gray">Third Year: Specialization</h4>
                          <ul className="space-y-2">
                            <li className="font-medium text-bsd-orange">UI/UX Design Track:</li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>User Research & Testing</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Interaction Design & Prototyping</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>UI Systems & Design Systems</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Accessibility & Inclusive Design</span>
                            </li>
                            
                            <li className="font-medium text-bsd-orange mt-4">AI & Machine Learning Track:</li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Machine Learning Algorithms</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Deep Learning & Neural Networks</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Natural Language Processing</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Computer Vision</span>
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
                            <PenTool className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Specialized Tracks</h4>
                            <p className="text-sm text-foreground/70">Choose between UI/UX Design or AI & Machine Learning specialization</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Code className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Hands-on Project Work</h4>
                            <p className="text-sm text-foreground/70">Build real applications with modern frameworks and tools</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Users className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry Expert Faculty</h4>
                            <p className="text-sm text-foreground/70">Learn from experienced professionals in UI/UX and AI/ML fields</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry Internships</h4>
                            <p className="text-sm text-foreground/70">Guaranteed internship placements with leading tech companies</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">AI Lab</h4>
                            <p className="text-sm text-foreground/70">State-of-the-art AI and machine learning laboratory with specialized hardware</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry-Relevant Projects</h4>
                            <p className="text-sm text-foreground/70">Work on real-world UI/UX challenges and AI applications</p>
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
                            <span>Comprehensive understanding of programming and software development</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Knowledge of UI/UX principles and design methodologies</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of artificial intelligence and machine learning algorithms</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Familiarity with industry-standard tools and frameworks</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Skills & Abilities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Proficiency in multiple programming languages</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ability to design intuitive user experiences or develop AI applications</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Expertise in creating wireframes, prototypes, or training ML models</span>
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
                            <span>Portfolio development showcasing UI/UX projects or AI applications</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of tech industry ethics and professional practices</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ability to work in cross-functional product development teams</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Critical thinking and analytical problem-solving</span>
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
                        <h4 className="font-medium text-bsd-gray">UI/UX Design Track</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>UI/UX Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Front-End Developer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>UX Researcher</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Interaction Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Product Designer</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">AI & ML Track</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Machine Learning Engineer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>AI Application Developer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Data Scientist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>NLP Engineer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Computer Vision Specialist</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Common Opportunities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Software Developer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Web Application Developer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Mobile App Developer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Technology Consultant</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>IT Project Manager</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-bsd-light-gray rounded-xl">
                      <h4 className="font-medium text-bsd-gray mb-4">Industry Insights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">₹4-12L</h5>
                          <p className="text-sm text-foreground/70">Average Starting Salary</p>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">40%</h5>
                          <p className="text-sm text-foreground/70">UI/UX Industry Growth Rate</p>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">2.5M+</h5>
                          <p className="text-sm text-foreground/70">Global Tech Job Openings</p>
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
      <section className="py-16 bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">ADMISSIONS</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Eligibility & Application Process
              </h2>
              <p className="mt-4 text-foreground/70">
                Join our BCA program and start your journey toward a successful career in UI/UX design or AI & machine learning.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-bsd-gray">Eligibility Criteria</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-bsd-orange" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-bsd-gray">Academic Qualification</h4>
                        <p className="text-sm text-foreground/70">10+2 (Higher Secondary) or equivalent with a minimum of 50% aggregate marks from any recognized board. Mathematics as a subject in 10+2 is preferred but not mandatory.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-bsd-orange" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-bsd-gray">Selection Process</h4>
                        <p className="text-sm text-foreground/70">Selection through BSDT Entrance Test and Personal Interview. Students with creative portfolios or coding projects will be given preference.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-bsd-gray">Application Process</h3>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Online Application:</span>
                      <p className="text-sm text-foreground/70 mt-1">Complete the online application form and pay the application fee.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Entrance Examination:</span>
                      <p className="text-sm text-foreground/70 mt-1">Take the BSDT entrance test which assesses aptitude, logical reasoning, and basic computing knowledge.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Personal Interview:</span>
                      <p className="text-sm text-foreground/70 mt-1">Shortlisted candidates are invited for a personal interview to assess their motivation and career goals.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Final Selection:</span>
                      <p className="text-sm text-foreground/70 mt-1">Admission offers are made based on entrance test performance, interview, and academic records.</p>
                    </li>
                  </ol>

                  <div className="mt-6">
                    <AnimatedButton asChild>
                      <a href="#enquiry-form" className="hover:no-underline">Apply Now</a>
                    </AnimatedButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Enquiry Form Section with id for scroll target */}
      <div id="enquiry-form">
        <EnquiryFormSection />
      </div>
      
      <Footer />
    </>
  );
};

export default ProgramBCA;
