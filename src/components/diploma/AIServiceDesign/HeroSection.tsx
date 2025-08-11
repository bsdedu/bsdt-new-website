import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Award, Download, ExternalLink } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                AI & SERVICE DESIGN PROGRAM
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Diploma in{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  AI & Integrated Service Design
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Master the intersection of artificial intelligence and service design to create intelligent, 
                user-centered experiences that transform how businesses deliver value in the digital age.
              </p>
            </div>

            {/* Program highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card/50">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Duration</p>
                  <p className="text-xs text-muted-foreground">12 Months</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card/50">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Next Intake</p>
                  <p className="text-xs text-muted-foreground">January 2025</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card/50">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Recognition</p>
                  <p className="text-xs text-muted-foreground">Industry Certified</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download Brochure
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Apply Now
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/api/placeholder/600/400"
                alt="AI Service Design Illustration"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};