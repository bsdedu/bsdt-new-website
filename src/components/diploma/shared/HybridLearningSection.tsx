import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { Monitor, MapPin, Wifi, Users, Video, BookOpen } from 'lucide-react';

export const HybridLearningSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-bsd-light-gray/50">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">HYBRID LEARNING MODEL</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn Anywhere, Experience Everywhere
            </h2>
            <p className="mt-4 text-foreground/70">
              Our hybrid learning model blends live online classes with real-world offline experiences, giving you the flexibility to learn from anywhere while gaining hands-on exposure at our campus and satellite centres.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {/* Online Learning */}
            <Card className="bg-bsd-orange/5 border-bsd-orange/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/20 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray">Online Learning</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Video className="w-4 h-4 text-bsd-orange mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Live interactive sessions with industry faculty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Monitor className="w-4 h-4 text-bsd-orange mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Real-time design critiques and feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-bsd-orange mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Access to recorded lectures and digital resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Offline Learning */}
            <Card className="bg-bsd-gray/5 border-bsd-gray/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bsd-gray/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-bsd-gray" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray">Offline Experience</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-bsd-gray mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Hands-on workshops at Bangalore campus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-bsd-gray mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Satellite centres in Chhattisgarh, Hyderabad, Delhi & Coimbatore</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-bsd-gray mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Site visits, studio sessions, and portfolio reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="bg-gradient-to-r from-bsd-orange/10 to-bsd-gray/10 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto border border-bsd-orange/10">
            <p className="text-foreground/80 text-sm md:text-base">
              <span className="font-semibold text-bsd-gray">Join from anywhere in India.</span>{' '}
              Our hybrid model is designed for working professionals and students across the country, combining the convenience of online learning with the depth of in-person experiences.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
