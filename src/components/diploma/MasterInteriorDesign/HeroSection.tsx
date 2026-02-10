import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Award, Building2 } from 'lucide-react';
import masterResidentialHero from '@/assets/master-residential-design-hero.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background/95 to-background/90 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div className="space-y-6">
              <Badge variant="bsdOrange" className="mb-4">
                Hybrid Master Diploma Program
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bsd-gray leading-tight">
                Master Diploma in <br />
                <span className="text-bsd-orange">Advanced Residential Design</span>
              </h1>
              
              <p className="text-lg text-foreground/70 max-w-xl">
                An advanced 18-month program that develops comprehensive expertise in residential design, combining advanced space planning, construction detailing, building systems, and project management for creating innovative residential environments and housing solutions.
              </p>
              
              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-bsd-orange" />
                  <span className="text-sm font-medium">18 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-bsd-orange" />
                  <span className="text-sm font-medium">Aug/Dec/Apr Intakes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-bsd-orange" />
                  <span className="text-sm font-medium">Master Diploma Certificate</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-bsd-orange hover:bg-bsd-orange/90 text-white">
                  Download Brochure
                </Button>
                <Button size="lg" variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange hover:text-white">
                  Apply Now
                </Button>
              </div>
            </div>
          </RevealSection>
          
          <RevealSection delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bsd-orange/20 to-transparent blur-3xl rounded-full"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-bsd-orange/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-bsd-orange/20 rounded-full blur-xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <img 
                  src={masterResidentialHero} 
                  alt="Master Diploma in Advanced Residential Design Program" 
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="flex justify-center -mt-6">
                  <div className="bg-white rounded-full p-4 shadow-lg border-4 border-white">
                    <Building2 className="w-8 h-8 text-bsd-orange" />
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};