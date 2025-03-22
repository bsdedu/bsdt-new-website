
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';

export const BeyondCurriculumOverview: React.FC = () => {
  return (
    <section id="beyond-overview" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">OUR APPROACH</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              One Day a Week for Skill Development
            </h2>
            <p className="mt-4 text-foreground/70">
              We dedicate an entire day each week to activities that transcend traditional academics, fostering practical skills and real-world experience that prepare our students for professional success.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="/lovable-uploads/66c6a931-8ba1-4c13-8f59-bcb925328891.png" 
                alt="Beyond Curriculum Activities" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium text-lg">Building professional competencies through experiential learning</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">The Skills-First Philosophy</h3>
                <p className="text-foreground/70">
                  In today's rapidly evolving industries, practical skills and adaptability have become more valuable than academic credentials alone. Our "Beyond Curriculum" approach ensures students develop the competencies that employers truly value.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">The Weekly Structure</h3>
                <p className="text-foreground/70">
                  Every Wednesday is dedicated to Beyond Curriculum activities. This consistent schedule allows students to immerse themselves in experiential learning while maintaining focus on their core academic subjects on other days.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">The Professional Edge</h3>
                <p className="text-foreground/70">
                  BSDT graduates enter the workforce with a significant advantage: they've already experienced professional environments, worked with industry tools, connected with leaders in their field, and built impressive portfolios showcasing real-world skills.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-bsd-gray">Five Pillars of Beyond Curriculum</h3>
              <p className="text-foreground/70 mt-2">
                Our comprehensive approach is built on five key components that work together to provide a well-rounded professional education
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card className="border border-border/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-bsd-orange">1</span>
                  </div>
                  <h4 className="font-medium text-bsd-gray mb-2">Design Studio Classes</h4>
                  <p className="text-sm text-foreground/70">
                    Collaborative project-based learning in a studio environment that simulates professional practice
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-bsd-orange">2</span>
                  </div>
                  <h4 className="font-medium text-bsd-gray mb-2">Specialized Workshops</h4>
                  <p className="text-sm text-foreground/70">
                    Intensive skill-building sessions led by industry experts focusing on specific techniques and tools
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-bsd-orange">3</span>
                  </div>
                  <h4 className="font-medium text-bsd-gray mb-2">Guest Lectures</h4>
                  <p className="text-sm text-foreground/70">
                    Industry leaders sharing insights, trends, and professional wisdom with our student community
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-bsd-orange">4</span>
                  </div>
                  <h4 className="font-medium text-bsd-gray mb-2">Off-Campus Learning</h4>
                  <p className="text-sm text-foreground/70">
                    Immersive experiences in professional environments that connect theory with practice
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-bsd-orange">5</span>
                  </div>
                  <h4 className="font-medium text-bsd-gray mb-2">Site Visits</h4>
                  <p className="text-sm text-foreground/70">
                    Educational tours of professional sites that demonstrate industry practices and standards
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <a href="#design-studio" className="text-bsd-orange hover:text-bsd-orange/80 font-medium inline-flex items-center">
                Explore Each Component
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
