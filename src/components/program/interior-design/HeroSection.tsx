import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { HeroImageCarousel } from "@/components/ui-elements/HeroImageCarousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Calendar, GraduationCap, BookOpen, Users, BriefcaseBusiness, Award, Building2, BrainCircuit } from "lucide-react";

export const HeroSection: React.FC = () => {
  const heroImages = [
    {
      src: "/lovable-uploads/8c6af2d4-79fa-42a5-8f81-fecc0d4bbee6.png",
      alt: "Modern Retail Interior Design",
      caption: "Design innovative retail and commercial spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
      alt: "Residential Interior Design",
      caption: "Create beautiful and functional living spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
      alt: "Office Interior Design",
      caption: "Transform workspace environments for productivity"
    },
    {
      src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&auto=format&fit=crop",
      alt: "Hospitality Interior Design",
      caption: "Design exceptional hospitality and dining experiences"
    }
  ];

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
                B.Sc Interior Design
              </h1>
              <p className="text-lg text-foreground/80">
                Transform spaces into functional, aesthetic environments. Our B.Sc. Interior Design program develops creative professionals who combine artistic vision with technical expertise to design innovative interior spaces.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <AnimatedButton 
                  asChild
                  href="https://apply.bsd.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a className="hover:no-underline">Apply Now</a>
                </AnimatedButton>
                <AnimatedButton variant="outline" asChild>
                  <a href="#enquiry-form" className="hover:no-underline">
                    Download Brochure
                  </a>
                </AnimatedButton>
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
                  <span>Next Batch: July 2025</span>
                </div>
              </div>
            </div>
          </RevealSection>

          <HeroImageCarousel images={heroImages} />
        </div>

        {/* Quick stats */}
        <RevealSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <BrainCircuit className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">AI+</h3>
                <p className="text-sm text-foreground/70">Empowered Curriculum</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">90%</h3>
                <p className="text-sm text-foreground/70">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">1:5</h3>
                <p className="text-sm text-foreground/70">Faculty to Student Ratio</p>
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
  );
};
