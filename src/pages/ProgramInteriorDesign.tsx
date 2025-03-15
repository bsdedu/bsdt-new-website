import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { ProgramHero } from "@/components/program/ProgramHero";
import { CareerOutcomes } from "@/components/program/CareerOutcomes";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { FacultySection } from "@/components/program/FacultySection";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Check, BookOpen, Calendar, GraduationCap, Award, BriefcaseBusiness, Building2, Lightbulb, Users, Shield, Ruler, Paintbrush } from "lucide-react";

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ApplicationDeadline } from "@/components/program/ApplicationDeadline";

const ProgramInteriorDesign = () => {
  const programName = "B.Sc. Interior Design";

  return (
    <>
      <Helmet>
        <title>{programName} | Bangalore School of Design & Technology</title>
        <meta name="description" content="Study B.Sc. Interior Design at Bangalore School of Design & Technology. Develop skills in space planning, design principles, and sustainable design practices." />
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
                  A comprehensive program developing skills in space planning, design principles, and sustainable design practices.
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
                  src="/lovable-uploads/09999799-e964-4091-894d-699959382af0.png"
                  alt="B.Sc. Interior Design Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Transform Spaces with Creative Design</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Quick stats */}
          <RevealSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              <div className="border-0 bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">40+</h3>
                  <p className="text-sm text-foreground/70">Annual Intake</p>
                </div>
              </div>

              <div className="border-0 bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">90%</h3>
                  <p className="text-sm text-foreground/70">Placement Rate</p>
                </div>
              </div>

              <div className="border-0 bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">10+</h3>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </div>
              </div>

              <div className="border-0 bg-white/80 backdrop-blur rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                    <Building2 className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">30+</h3>
                  <p className="text-sm text-foreground/70">Industry Partners</p>
                </div>
              </div>
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
                Transforming Spaces, Shaping Futures
              </h2>
              <p className="mt-4 text-foreground/70">
                Our B.Sc. Interior Design program is designed to equip you with the creative and technical skills needed to excel in the dynamic field of interior design.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-bsd-gray mb-6">Curriculum Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Space Planning and Layout Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design Principles and Elements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sustainable Design Practices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>3D Modeling and Visualization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Materials and Finishes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lighting Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Furniture Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Building Systems and Codes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-bsd-gray mb-6">Program Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hands-on studio projects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Industry-experienced faculty</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Internship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Career guidance and placement assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access to design software and resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Networking opportunities with industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Portfolio development</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Career Outcomes Section */}
      <CareerOutcomes
        title="Career Opportunities"
        subtitle="Graduates of our B.Sc. Interior Design program can pursue a variety of exciting career paths in the field of interior design."
        careers={[
          "Interior Designer",
          "Space Planner",
          "Design Consultant",
          "3D Visualizer",
          "Furniture Designer",
          "Lighting Designer",
          "Project Manager",
          "Sustainable Design Specialist"
        ]}
      />

      {/* Student Works Gallery */}
      <StudentWorksGallery
        title="Interior Design Student Projects"
        subtitle="Explore the innovative and creative projects designed by our talented interior design students."
        projects={[
          {
            title: "Modern Living Room Design",
            description: "A contemporary living room design with a focus on comfort and style.",
            imageUrl: "https://images.unsplash.com/photo-1567016546063-3334bb652e6b?fit=crop&w=600&h=400",
            category: "Residential Design"
          },
          {
            title: "Sustainable Office Space",
            description: "An eco-friendly office space design with sustainable materials and energy-efficient lighting.",
            imageUrl: "https://images.unsplash.com/photo-1519710164239-da1231503ef4?fit=crop&w=600&h=400",
            category: "Commercial Design"
          },
          {
            title: "Cozy Bedroom Retreat",
            description: "A relaxing bedroom design with soft colors and natural textures.",
            imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?fit=crop&w=600&h=400",
            category: "Residential Design"
          },
          {
            title: "Innovative Restaurant Interior",
            description: "A unique restaurant interior design with creative lighting and furniture arrangements.",
            imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?fit=crop&w=600&h=400",
            category: "Commercial Design"
          },
          {
            title: "Minimalist Kitchen Design",
            description: "A clean and functional kitchen design with minimalist aesthetics.",
            imageUrl: "https://images.unsplash.com/photo-1543328694-c9428680a587?fit=crop&w=600&h=400",
            category: "Residential Design"
          },
          {
            title: "Creative Workspace Design",
            description: "An inspiring workspace design with ergonomic furniture and creative decor.",
            imageUrl: "https://images.unsplash.com/photo-1505031441968-73a14026ea15?fit=crop&w=600&h=400",
            category: "Commercial Design"
          }
        ]}
      />

      {/* Faculty Section */}
      <FacultySection />

      {/* Interior Design Facilities Section */}
      <section className="py-16 bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">FACILITIES</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                State-of-the-Art Design Studios
              </h2>
              <p className="mt-4 text-foreground/70">
                Our campus features modern design studios equipped with the latest tools and technologies to support your creative journey.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <RevealSection delay={100}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40 transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1 hover:border-bsd-orange/20">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Ruler className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Design Studio</h3>
                  <p className="text-foreground/70">
                    Spacious studio with drafting tables, ergonomic chairs, and natural lighting for hands-on design work.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40 transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1 hover:border-bsd-orange/20">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Paintbrush className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Materials Library</h3>
                  <p className="text-foreground/70">
                    Extensive collection of fabric swatches, material samples, and finish options for creating mood boards and material palettes.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40 transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1 hover:border-bsd-orange/20">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Digital Design Lab</h3>
                  <p className="text-foreground/70">
                    High-performance computers with industry-standard design software for 3D modeling, rendering, and visualization.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">ADMISSIONS</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Eligibility & Application Process
              </h2>
              <p className="mt-4 text-foreground/70">
                Join our B.Sc. Interior Design program and start your journey toward a rewarding career in interior design.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40 transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1 hover:border-bsd-orange/20">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-bsd-gray">Eligibility Criteria</h3>
                  <ul className="space-y-4 mt-4">
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
                        <h4 className="font-medium text-bsd-gray">Selection Process</h4>
                        <p className="text-sm text-foreground/70">Selection through BSDT Entrance Test and Personal Interview. Students with creative portfolios will be given preference.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-border/40 transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1 hover:border-bsd-orange/20">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-bsd-gray">Application Process</h3>
                  <ol className="space-y-4 list-decimal list-inside mt-4">
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Online Application:</span>
                      <p className="text-sm text-foreground/70 mt-1">Complete the online application form and pay the application fee.</p>
                    </li>
                    <li className="pl-2">
                      <span className="font-medium text-bsd-gray">Entrance Examination:</span>
                      <p className="text-sm text-foreground/70 mt-1">Take the BSDT entrance test which assesses aptitude, logical reasoning, and design knowledge.</p>
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
                </div>
              </div>
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

export default ProgramInteriorDesign;
