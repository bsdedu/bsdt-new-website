
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award } from 'lucide-react';

export const JoinEventsSection: React.FC = () => {
  return (
    <section id="join-events" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center mb-12">
            <Badge variant="bsdOrange" className="mb-4">
              Get Involved
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bsd-gray mb-4">
              Ready to Join the Creative Community?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Become part of our vibrant campus life and unlock opportunities for growth, 
              networking, and creative expression.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-2">Stay Updated</h3>
              <p className="text-gray-600">Get notified about upcoming events and workshops</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-2">Network & Connect</h3>
              <p className="text-gray-600">Build lasting relationships with peers and industry experts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-bold text-bsd-gray mb-2">Showcase Your Talent</h3>
              <p className="text-gray-600">Participate in competitions and exhibitions</p>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="text-center">
            <AnimatedButton 
              href="https://apply.bsd.edu.in/" 
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
              hoverEffect="glow"
            >
              Apply Now to Join Us
            </AnimatedButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
