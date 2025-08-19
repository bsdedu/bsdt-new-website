import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const IndustryFaculty: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background/50 to-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              FACULTY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-6">
              Learn From Industry Leaders
            </h2>
            <p className="text-lg text-foreground/70">
              Our Master Diploma faculty consists of senior industry professionals, successful design entrepreneurs, and recognized experts who bring real-world expertise to advanced interior design education.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/faculty-placeholder.jpg" 
                    alt="Dr. Priya Sharma" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Priya Sharma</h3>
                <p className="text-bsd-orange font-medium mb-3">Master Faculty & Design Director</p>
                <p className="text-sm text-foreground/70">
                  20+ years of experience leading luxury residential and commercial projects. Former Design Director at top international firms, with expertise in advanced space planning and sustainable design leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/faculty-placeholder.jpg" 
                    alt="Arjun Malhotra" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Arjun Malhotra</h3>
                <p className="text-bsd-orange font-medium mb-3">Project Management Expert</p>
                <p className="text-sm text-foreground/70">
                  Industry veteran with 18+ years managing large-scale interior projects. Specialist in BIM coordination, team leadership, and client relationship management for high-end hospitality and corporate projects.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/faculty-placeholder.jpg" 
                    alt="Neha Agarwal" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Neha Agarwal</h3>
                <p className="text-bsd-orange font-medium mb-3">Technology & Innovation Lead</p>
                <p className="text-sm text-foreground/70">
                  Pioneer in VR/AR applications for interior design with 15+ years of experience. Expert in emerging technologies, smart home integration, and sustainable design innovation for modern interior practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};