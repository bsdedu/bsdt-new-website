import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { HeroImageCarousel } from "@/components/ui-elements/HeroImageCarousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Calendar, GraduationCap, BookOpen, Shield, Database, Network, Cpu, LockKeyhole } from "lucide-react";

export const HeroSection: React.FC = () => {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      alt: "BCA Data Analytics Lab",
      caption: "Applied learning in Computer Applications with Data Analytics & Cyber Security"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
      alt: "Cyber Security Operations Center",
      caption: "Advanced cybersecurity training and threat detection"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      alt: "Data Analytics Visualization",
      caption: "Transform data into actionable business insights"
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      alt: "Modern Computer Lab",
      caption: "State-of-the-art computing facilities and technology"
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
                BCA with Data Analytics & Cyber Security
              </h1>
              <p className="text-lg text-foreground/80">
                Master computer applications with specialized focus on Data Analytics and Cyber Security. Develop practical skills in software development, data analysis, cybersecurity protocols, and modern application frameworks.
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
                  <span>Next Batch: June 2025</span>
                </div>
              </div>
            </div>
          </RevealSection>

          <HeroImageCarousel images={heroImages} />
        </div>

        
        <RevealSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">100%</h3>
                <p className="text-sm text-foreground/70">Placement Support</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Database className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">24+</h3>
                <p className="text-sm text-foreground/70">Data Analytics Tools</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Network className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">60+</h3>
                <p className="text-sm text-foreground/70">Industry Partners</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <LockKeyhole className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">12+</h3>
                <p className="text-sm text-foreground/70">Tech Certifications</p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
