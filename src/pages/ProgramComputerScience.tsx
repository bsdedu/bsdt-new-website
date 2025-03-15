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
import { Check, BookOpen, Calendar, GraduationCap, Award, BriefcaseBusiness, Building2, Lightbulb, Users, Shield, Database, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { ApplicationDeadline } from "@/components/program/ApplicationDeadline";
import { FacultySection } from "@/components/program/FacultySection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";

const ProgramComputerScience = () => {
  return (
    <>
      <Helmet>
        <title>B.Sc Computer Science | BSDT</title>
        <meta name="description" content="Learn Computer Science with a B.Sc degree program at Bangalore School of Design & Technology (BSDT). Specialize in Data Analytics or Cyber Security and build a successful career in technology." />
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
                  B.Sc Computer Science
                </h1>
                <p className="text-lg text-foreground/80">
                  Specialize in Data Analytics or Cyber Security with our comprehensive Computer Science program. Build the skills needed to address evolving technological challenges in today's digital world.
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
                  lastDate="August 15, 2025" 
                  startDate="January 15, 2025" 
                  seatsAvailable={60}
                />
              </div>
            </RevealSection>

            <RevealSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                  alt="Computer Science Lab" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Specialize in Data Analytics or Cyber Security</p>
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
                  <h3 className="text-3xl font-bold text-bsd-gray">98%</h3>
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
                Comprehensive Computer Science Education
              </h2>
              <p className="mt-4 text-foreground/70">
                Our B.Sc Computer Science program with specializations in Data Analytics and Cyber Security combines theoretical knowledge with practical skills, preparing you to excel in the rapidly evolving tech landscape.
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
                          The B.Sc Computer Science program is a 3-year full-time undergraduate course divided into 6 semesters, with core computer science subjects and specialized tracks in Data Analytics or Cyber Security.
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Introduction to Programming & Data Structures</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Computer Organization & Architecture</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Mathematics for Computer Science</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Digital Logic & System Design</span>
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
                              <span>Database Management Systems</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Operating Systems</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Web Technologies</span>
                            </li>
                          </ul>

                          <h4 className="font-medium text-bsd-gray">Third Year: Specialization</h4>
                          <ul className="space-y-2">
                            <li className="font-medium text-bsd-orange">Data Analytics Track:</li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Big Data Analytics</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Machine Learning & AI</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Data Visualization</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Statistical Methods for Data Science</span>
                            </li>
                            
                            <li className="font-medium text-bsd-orange mt-4">Cyber Security Track:</li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Network Security</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Information Security</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Cryptography & Data Protection</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Ethical Hacking & Penetration Testing</span>
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
                            <Cpu className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Specialized Tracks</h4>
                            <p className="text-sm text-foreground/70">Choose between Data Analytics or Cyber Security specialization</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Database className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Advanced Computing Labs</h4>
                            <p className="text-sm text-foreground/70">State-of-the-art facilities with latest hardware and software</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Users className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry Expert Faculty</h4>
                            <p className="text-sm text-foreground/70">Learn from experienced professionals in data science and cyber security</p>
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
                            <Shield className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Cyber Security Lab</h4>
                            <p className="text-sm text-foreground/70">Dedicated facility for practical security training and simulations</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry-Relevant Projects</h4>
                            <p className="text-sm text-foreground/70">Work on real-world data and security challenges</p>
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
                            <span>Comprehensive understanding of computer science principles</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Knowledge of data structures, algorithms, and system architecture</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of data analytics or cyber security concepts</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Familiarity with industry-standard tools and practices</span>
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
                            <span>Ability to analyze complex data or security challenges</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Expertise in developing data-driven or secure applications</span>
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
                            <span>Technical portfolio development and certification preparation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of IT ethics and professional practices</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ability to work in cross-functional technical teams</span>
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
                        <h4 className="font-medium text-bsd-gray">Data Analytics Track</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Data Analyst</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Business Intelligence Analyst</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Data Visualization Specialist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Machine Learning Engineer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Data Science Associate</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Cyber Security Track</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Security Analyst</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Network Security Specialist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Penetration Tester</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Security Operations Analyst</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Cyber Security Consultant</span>
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
                            <span>Systems Analyst</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Database Administrator</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>IT Project Manager</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Technology Consultant</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-bsd-light-gray rounded-xl">
                      <h4 className="font-medium text-bsd-gray mb-4">Industry Insights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">₹4-15L</h5>
                          <p className="text-sm text-foreground/70">Average Starting Salary</p>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">34%</h5>
                          <p className="text-sm text-foreground/70">Industry Growth Rate</p>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">3.5M+</h5>
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
  title="Computer Science Student Projects"
  subtitle="Explore innovative projects in data analytics and cyber security from our computer science students"
  projects={[
    {
      title: "Network Security Analysis Tool",
      description: "Tool for identifying and visualizing network vulnerabilities and potential threats",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=600&h=400",
      category: "Cyber Security"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Interactive visualization platform for business intelligence and forecasting",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=600&h=400",
      category: "Data Analytics"
    },
    {
      title: "Intrusion Detection System",
      description: "Real-time monitoring system that identifies suspicious patterns in network traffic",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?fit=crop&w=600&h=400",
      category: "Cyber Security"
    },
    {
      title: "Consumer Behavior Analysis Platform",
      description: "Big data solution that processes and analyzes customer interaction patterns",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=600&h=400",
      category: "Data Analytics"
    }
  ]}
/>

      {/* Faculty Section */}
      <FacultySection />
      
      {/* Technology Labs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">UNIQUE ADVANTAGE</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Technology Labs: Hands-on Learning
              </h2>
              <p className="mt-4 text-foreground/70">
                Experience real-world data analysis and cyber security challenges in our specialized labs.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&auto=format&fit=crop" 
                  alt="Technology Lab" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">Technology Labs</h3>
                    <p className="text-white/80">Students working on advanced data and security projects</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-bsd-gray">A Unique Learning Experience</h3>
                <p className="text-foreground/70">
                  Our specialized Technology Labs provide students with access to professional-grade equipment and software used in the industry. Students work on real data sets and security challenges with industry clients, gaining valuable practical experience.
                </p>
                
                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Work on Real Industry Projects</h4>
                      <p className="text-sm text-foreground/70">Experience the entire project lifecycle from planning to implementation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h
