import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Users, Clock, Globe } from 'lucide-react';
import { RevealSection } from '@/components/ui-elements/RevealSection';

export const FutureSchoolHero: React.FC = () => {
  const handleEnrollClick = () => {
    const enquirySection = document.getElementById('enquiry-form');
    enquirySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    const programsSection = document.getElementById('programs-section');
    programsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealSection>
            <Badge variant="bsdOrange" className="mb-6 text-sm font-medium">
              FUTURE SCHOOL
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Master the Future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
                of Design & Tech
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join India's fastest-growing design & technology bootcamp. Learn from industry experts, 
              build real projects, and land your dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={handleEnrollClick}
                className="group"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleExploreClick}
                className="group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Explore Programs
              </Button>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>Live Interactive Online Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Industry Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Flexible Duration Options</span>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Stats Section */}
        <RevealSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">3000+</div>
              <div className="text-sm text-foreground/60">Students Upskilled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-foreground/60">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-foreground/60">Specialized Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-foreground/60">Learning Support</div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};