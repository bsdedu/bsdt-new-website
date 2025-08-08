
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { HeroImageCarousel } from "@/components/ui-elements/HeroImageCarousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { Calendar, GraduationCap, BookOpen, Users, Trophy, Gamepad, Monitor, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Animation Studio",
      caption: "Animation, game design, and interactive media expertise"
    },
    {
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
      alt: "3D Animation Workspace",
      caption: "Master 3D modeling, rigging, and character animation"
    },
    {
      src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&auto=format&fit=crop",
      alt: "Game Development Lab",
      caption: "Create immersive gaming experiences and interactive stories"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
      alt: "Motion Graphics Studio",
      caption: "Explore motion graphics, VFX, and digital storytelling"
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
              <Badge variant="bsdOrange" className="mb-2">4-YEAR UNDERGRADUATE PROGRAM</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray leading-tight">
                BVA Animation & Game Design
              </h1>
              <p className="text-lg text-foreground/80">
                Master 2D/3D animation, game development, and interactive storytelling. Create immersive digital experiences that entertain, educate, and inspire audiences worldwide.
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
                  <span>4 Years Duration</span>
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

        {/* Quick stats */}
        <RevealSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">AI+</h3>
                <p className="text-sm text-foreground/70">AI Empowered Curriculum</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Gamepad className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">95%</h3>
                <p className="text-sm text-foreground/70">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Trophy className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">15+</h3>
                <p className="text-sm text-foreground/70">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Monitor className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">50+</h3>
                <p className="text-sm text-foreground/70">Industry Partners</p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
