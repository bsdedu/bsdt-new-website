
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Users, Briefcase, Award, Lightbulb } from 'lucide-react';

export const StudioOverview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">UNIQUE ADVANTAGE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              The Most Unique Part of Our Institution
            </h2>
            <p className="mt-4 text-foreground/70">
              Studio BSD is a professional-grade design and technology studio that bridges the gap between academic learning and professional practice, providing students with unparalleled opportunities for growth.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80">
                Studio BSD is what sets us apart from other design and technology schools. It's a fully functional professional studio where students work alongside industry professionals on real client projects, gaining invaluable experience before they graduate.
              </p>
              
              <p className="text-lg text-foreground/80">
                The studio environment mirrors professional workplaces, with industry-standard equipment, workflows, and client interaction opportunities. This creates a seamless transition from education to employment.
              </p>
              
              <div className="border-l-4 border-bsd-orange pl-6 py-2 my-8">
                <p className="text-xl font-medium text-bsd-gray italic">
                  "Studio BSD has transformed how we approach design education – blending classroom learning with professional practice to create graduates who are job-ready from day one."
                </p>
                <p className="mt-2 text-bsd-orange">- Prof. Sanjay Jain, Director</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Real Client Projects</h3>
                  <p className="text-foreground/70">
                    Work on actual commercial projects for businesses, gaining portfolio-worthy professional experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Professional Mentoring</h3>
                  <p className="text-foreground/70">
                    Learn directly from industry practitioners who guide students through professional workflows.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Industry Recognition</h3>
                  <p className="text-foreground/70">
                    Studio projects have won national awards and recognition from industry partners and clients.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Innovation Hub</h3>
                  <p className="text-foreground/70">
                    A collaborative environment that fosters creativity, innovation, and interdisciplinary approaches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
