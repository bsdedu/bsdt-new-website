
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Calendar, GraduationCap, BookOpen, Users, BriefcaseBusiness, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { FacultySection } from "@/components/program/FacultySection";
import { StudentWorksGallery } from "@/components/program/StudentWorksGallery";
import { AnimationCurriculumSection } from "@/components/program/AnimationCurriculumSection";
import { AnimationStudioSection } from "@/components/program/AnimationStudioSection";
import { EligibilitySection } from "@/components/program/EligibilitySection";
import { DynamicBackground } from "@/components/ui-elements/DynamicBackground";

const ProgramAnimationGameDesign = () => {
  return (
    <>
      <Helmet>
        <title>BVA Animation & Game Design | BSDT</title>
        <meta name="description" content="Learn Animation & Game Design with a BVA degree program at Bangalore School of Design & Technology (BSDT). Master 2D/3D animation, game mechanics, and interactive storytelling." />
      </Helmet>

      <Navbar />

      {/* Hero Section with dynamic background */}
      <DynamicBackground type="blobs" className="pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <RevealSection>
              <div className="space-y-6">
                <Badge variant="bsdOrange" className="mb-2">4-YEAR UNDERGRADUATE PROGRAM</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray leading-tight">
                  BVA Animation & Game Design
                </h1>
                <p className="text-lg text-foreground/80">
                  Master the art of animation and game design with our comprehensive program. Learn 2D/3D animation, game mechanics, and interactive storytelling using industry-standard tools and cutting-edge technologies.
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
                    <span>4 Years Duration</span>
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
              </div>
            </RevealSection>

            <RevealSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                  alt="Animation and Game Design Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Create captivating animations and immersive game experiences</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Quick stats with animated cards */}
          <RevealSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              <Card className="border-0 bg-white/80 backdrop-blur group hover:bg-white/90 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">60+</h3>
                  <p className="text-sm text-foreground/70">Annual Intake</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-white/80 backdrop-blur group hover:bg-white/90 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">92%</h3>
                  <p className="text-sm text-foreground/70">Placement Rate</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-white/80 backdrop-blur group hover:bg-white/90 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">15+</h3>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-white/80 backdrop-blur group hover:bg-white/90 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-bsd-gray">25+</h3>
                  <p className="text-sm text-foreground/70">Industry Partners</p>
                </CardContent>
              </Card>
            </div>
          </RevealSection>
        </div>
      </DynamicBackground>

      {/* Program Overview with particles background */}
      <DynamicBackground type="particles">
        <AnimationCurriculumSection />
      </DynamicBackground>

      {/* Student Works Gallery */}
      <StudentWorksGallery />

      {/* Faculty Section with gradient background */}
      <DynamicBackground type="gradient">
        <FacultySection />
      </DynamicBackground>
      
      {/* BSD Studio Section */}
      <DynamicBackground type="waves">
        <AnimationStudioSection />
      </DynamicBackground>

      {/* Eligibility & Admission Section */}
      <EligibilitySection />

      {/* Enquiry Form Section */}
      <DynamicBackground type="blobs" colors={['bg-bsd-gray/10', 'bg-bsd-orange/10']}>
        <EnquiryFormSection />
      </DynamicBackground>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProgramAnimationGameDesign;
