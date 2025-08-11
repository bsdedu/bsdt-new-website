import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Award, Download, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="w-fit">
              PROFESSIONAL DIPLOMA PROGRAM
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Diploma in{' '}
                <span className="text-primary">Fashion Design</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Master the art of fashion design with our intensive professional diploma program. 
                Learn garment construction, fashion illustration, textile design, and industry trends 
                from experienced fashion professionals.
              </p>
            </div>
            
            {/* Program Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-4 bg-background/50 rounded-lg border">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">6 Months</p>
                  <p className="text-sm text-muted-foreground">Duration</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-4 bg-background/50 rounded-lg border">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Aug/Dec/Apr</p>
                  <p className="text-sm text-muted-foreground">Intakes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-4 bg-background/50 rounded-lg border">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Professional</p>
                  <p className="text-sm text-muted-foreground">Certificate</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </Button>
              <Button variant="outline" size="lg" className="group">
                Apply Now
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              
              {/* Fashion Design Visual */}
              <div className="relative z-10 text-center space-y-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                      <path d="M8 8h8v8H8z" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Fashion Design Excellence</h3>
                  <p className="text-muted-foreground">Creative Innovation & Technical Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};