
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Lightbulb, Target } from 'lucide-react';

export const BeyondCurriculumOverview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">BEYOND TRADITIONAL LEARNING</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Developing industry-ready skills through experiential learning opportunities
            </h2>
            <p className="mt-4 text-foreground/70">
              One day each week is dedicated to activities that enhance practical skills, foster creativity, 
              and build professional networks through real-world exposure and hands-on experiences.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-bsd-light-gray rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Weekly Schedule</h3>
                  <p className="text-foreground/70 text-sm">
                    Every Friday is dedicated to beyond-curriculum activities, ensuring consistent skill development.
                  </p>
                </div>
                
                <div className="bg-bsd-light-gray rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Industry Experts</h3>
                  <p className="text-foreground/70 text-sm">
                    Learn from practicing professionals who bring real-world insights to your education.
                  </p>
                </div>
                
                <div className="bg-bsd-light-gray rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Creative Projects</h3>
                  <p className="text-foreground/70 text-sm">
                    Work on innovative projects that challenge conventional thinking and foster creativity.
                  </p>
                </div>
                
                <div className="bg-bsd-light-gray rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">Skill Focus</h3>
                  <p className="text-foreground/70 text-sm">
                    Targeted activities designed to develop specific competencies required in your field.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/f1d92903-6482-44dc-ad21-e40b8f539cc3.png" 
                  alt="Students engaging in experiential learning activities" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-bsd-orange/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bsd-gray">Hands-On Learning</h3>
                    <p className="text-sm text-foreground/70">Direct engagement with professional tools and methodologies</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-bsd-orange/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bsd-gray">Collaborative Environment</h3>
                    <p className="text-sm text-foreground/70">Work together on real projects and build professional networks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="bg-bsd-light-gray rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Our Beyond Curriculum Activities</h3>
              <p className="text-foreground/70">
                Each activity is carefully designed to complement your academic learning and prepare you for professional success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray mb-2">Design Studios</h4>
                <p className="text-sm text-foreground/70">Intensive design sessions with professional guidance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray mb-2">Workshops</h4>
                <p className="text-sm text-foreground/70">Skill-building sessions on cutting-edge tools and techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray mb-2">Guest Lectures</h4>
                <p className="text-sm text-foreground/70">Industry leaders share insights and experiences</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray mb-2">Off-Campus Learning</h4>
                <p className="text-sm text-foreground/70">Real-world exposure through field trips and partnerships</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bsd-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray mb-2">Site Visits</h4>
                <p className="text-sm text-foreground/70">Educational visits to architectural landmarks and studios</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
