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
import { Check, BookOpen, Calendar, GraduationCap, Award, BriefcaseBusiness, Building2, Lightbulb, Users, Shield, Database, Cpu, Film, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { ApplicationDeadline } from "@/components/program/ApplicationDeadline";
import { FacultySection } from "@/components/program/FacultySection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { AnimationGameDesignFacilitiesSection } from "@/components/program/AnimationGameDesignFacilitiesSection";

const ProgramAnimationGameDesign = () => {
  const programName = "B.Sc Animation & Game Design";

  return (
    <>
      <Helmet>
        <title>{programName} | BSDT</title>
        <meta name="description" content="Study Animation and Game Design with a B.Sc degree program at Bangalore School of Design & Technology (BSDT). Learn 3D animation, game development, and interactive storytelling." />
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
                  A comprehensive program developing skills in 3D animation, game development, and interactive storytelling.
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
                  seatsAvailable={40}
                />
              </div>
            </RevealSection>

            <RevealSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1588702547951-e3ade3c57545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Animation & Game Design Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Create Immersive Worlds and Engaging Characters</p>
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
                  <h3 className="text-3xl font-bold text-bsd-gray">40+</h3>
                  <p className="text-sm text-foreground/70">Annual Intake</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">92%</h3>
                  <p className="text-sm text-foreground/70">Placement Rate</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">10+</h3>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Building2 className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">25+</h3>
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
                Unleash Your Creative Potential
              </h2>
              <p className="mt-4 text-foreground/70">
                Our B.Sc Animation & Game Design program combines artistic vision with technical skills, preparing you to excel in the dynamic world of animation and game development.
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
                          The B.Sc Animation & Game Design program is a 3-year full-time undergraduate course divided into 6 semesters, with core animation and game design subjects.
                        </p>

                        <div className="space-y-4">
                          <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Introduction to Animation</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Game Design Principles</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Digital Art & Design</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Storytelling & Narrative Design</span>
                            </li>
                          </ul>

                          <h4 className="font-medium text-bsd-gray">Second Year: Core Concepts</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>3D Modeling & Texturing</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Character Animation</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Game Development with Unity</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Level Design</span>
                            </li>
                          </ul>

                          <h4 className="font-medium text-bsd-gray">Third Year: Specialization</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Advanced Animation Techniques</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Motion Capture & Rigging</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Advanced Game Development</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                              <span>Virtual Reality Game Design</span>
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
                            <Film className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry-Relevant Curriculum</h4>
                            <p className="text-sm text-foreground/70">Learn the latest animation and game design techniques</p>
                          </div>
                        </li>

                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Gamepad2 className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Hands-on Project Work</h4>
                            <p className="text-sm text-foreground/70">Build a professional portfolio with real-world projects</p>
                          </div>
                        </li>

                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Users className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry Expert Faculty</h4>
                            <p className="text-sm text-foreground/70">Learn from experienced professionals in animation and game development</p>
                          </div>
                        </li>

                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">Industry Internships</h4>
                            <p className="text-sm text-foreground/70">Gain real-world experience with leading animation and game companies</p>
                          </div>
                        </li>

                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-bsd-orange" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-bsd-gray">State-of-the-Art Facilities</h4>
                            <p className="text-sm text-foreground/70">Access to the latest animation and game development software and hardware</p>
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
                            <span>Comprehensive understanding of animation and game design principles</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Knowledge of 3D modeling, texturing, and animation techniques</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of game development processes and tools</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Familiarity with industry-standard software and hardware</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Skills & Abilities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Proficiency in 3D modeling, texturing, and animation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ability to design and develop interactive games</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Expertise in creating compelling characters and environments</span>
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
                            <span>Portfolio development showcasing animation and game design projects</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understanding of industry ethics and professional practices</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ability to work in cross-functional creative teams</span>
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
                        <h4 className="font-medium text-bsd-gray">Animation Roles</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>3D Animator</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Character Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Motion Graphics Artist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Visual Effects Artist</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Game Design Roles</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Game Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Level Designer</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Technical Artist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>VR/AR Developer</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">Common Opportunities</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>3D Modeler</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Texture Artist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Concept Artist</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Storyboard Artist</span>
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
                          <p className="text-sm text-foreground/70">Industry Growth Rate</p>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="text-3xl font-bold text-bsd-orange">1.5M+</h5>
                          <p className="text-sm text-foreground/70">Global Creative Job Openings</p>
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
        title="Animation & Game Design Student Showcase"
        subtitle="Explore the creative projects from our animation and game design students"
        projects={[
          {
            title: "3D Character Animation",
            description: "Animated short film featuring custom character rigging and motion design",
            imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?fit=crop&w=600&h=400",
            category: "Animation"
          },
          {
            title: "Mobile Game Development",
            description: "Casual mobile game with custom art assets and game mechanics",
            imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=600&h=400",
            category: "Game Design"
          },
          {
            title: "Environment Concept Art",
            description: "Digital paintings of game environments with lighting and atmospheric effects",
            imageUrl: "https://images.unsplash.com/photo-1518643657730-7f8863206944?fit=crop&w=600&h=400",
            category: "Concept Art"
          },
          {
            title: "Interactive Storytelling Game",
            description: "Narrative-driven game with branching storylines and character development",
            imageUrl: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?fit=crop&w=600&h=400",
            category: "Game Design"
          }
        ]}
      />

      {/* Faculty Section */}
      <FacultySection />

      {/* Animation and Game Design Facilities Section */}
      <AnimationGameDesignFacilitiesSection />

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
                Join our B.Sc Animation & Game Design program and start your journey toward a creative career.
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
                        <p className="text-sm text-foreground/70">10+2 (Higher Secondary) or equivalent with a minimum of 50% aggregate marks from any recognized board.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-bsd-orange" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-bsd-gray">Creative Portfolio</h4>
                        <p className="text-sm text-foreground/70">Submission of a creative portfolio showcasing artistic skills is recommended but not mandatory.</p>
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
                      <span className="font-medium text-bsd-gray">Portfolio Submission (Optional):</span>
                      <p className="text-sm text-foreground/70 mt-1">Submit a creative portfolio showcasing your artistic skills and design abilities.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Personal Interview:</span>
                      <p className="text-sm text-foreground/70 mt-1">Shortlisted candidates are invited for a personal interview to assess their motivation and creative potential.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Final Selection:</span>
                      <p className="text-sm text-foreground/70 mt-1">Admission offers are made based on academic records, portfolio (if submitted), and interview performance.</p>
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

export default ProgramAnimationGameDesign;
