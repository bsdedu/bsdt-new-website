
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Map, Briefcase, Clock, Award } from 'lucide-react';

export const OffCampusSection: React.FC = () => {
  return (
    <section id="off-campus" className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">REAL-WORLD EDUCATION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Off-Campus Learning Experiences
            </h2>
            <p className="mt-4 text-foreground/70">
              We take education beyond the classroom through immersive off-campus learning experiences that connect theory with real-world applications.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Map className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Industry Immersion Programs</h3>
                  <p className="text-foreground/70">
                    Students spend time in professional settings, observing workflows, understanding organizational structures, and experiencing industry environments firsthand.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Briefcase className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Design Exhibitions & Conferences</h3>
                  <p className="text-foreground/70">
                    Regular visits to professional exhibitions, trade shows, and conferences expose students to current industry trends, innovations, and networking opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Clock className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Community Engagement Projects</h3>
                  <p className="text-foreground/70">
                    Students work on real projects for non-profits and community organizations, applying their skills to create meaningful solutions while developing social responsibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Award className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">International Design Tours</h3>
                  <p className="text-foreground/70">
                    Select opportunities for international exposure through guided tours to global design hubs, providing cross-cultural perspectives and global industry insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
