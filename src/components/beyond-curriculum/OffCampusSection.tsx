
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Award, Map, Clock, Briefcase } from 'lucide-react';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative rounded-2xl overflow-hidden h-[450px]">
              <img 
                src="/lovable-uploads/afbe5d7f-0f77-458a-a6ab-59ecf5a77828.png" 
                alt="Students at industry visit" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium text-lg">Students gain hands-on experience through industry immersion programs</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
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
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-bsd-gray">Learning Outcomes</h3>
              <p className="text-foreground/70 mt-2">
                Off-campus learning experiences provide unique benefits that cannot be replicated in traditional classroom settings
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/10">
                <CardContent className="p-6">
                  <h4 className="font-medium text-bsd-gray mb-2">Contextual Understanding</h4>
                  <p className="text-sm text-foreground/70">
                    Students develop a deeper understanding of how their fields operate in real-world contexts, bridging the gap between theory and practice.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border/10">
                <CardContent className="p-6">
                  <h4 className="font-medium text-bsd-gray mb-2">Professional Adaptability</h4>
                  <p className="text-sm text-foreground/70">
                    Exposure to different environments helps students develop adaptability and resilience, preparing them for the dynamic nature of professional settings.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-border/10">
                <CardContent className="p-6">
                  <h4 className="font-medium text-bsd-gray mb-2">Cultural Awareness</h4>
                  <p className="text-sm text-foreground/70">
                    Off-campus experiences broaden students' perspectives, helping them understand how design and technology interact with different cultural and social contexts.
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
