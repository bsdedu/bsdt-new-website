
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Link } from "react-router-dom";
import { Calendar, GraduationCap, BookOpen } from "lucide-react";
import { ApplicationDeadline } from "@/components/program/ApplicationDeadline";

export const BCAHeroSection = () => {
  const programName = "BCA with UI/UX & AI/ML";
  
  return (
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
      </div>
    </section>
  );
};
