import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { Monitor, MapPin, Wifi, Users, Video, BookOpen, ClipboardCheck, GraduationCap } from 'lucide-react';

export const HybridLearningSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-bsd-light-gray/50">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">HYBRID LEARNING MODEL</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From Anywhere
            </h2>
            <p className="mt-4 text-foreground/70">
              BSDT's diploma programs follow a thoughtfully designed hybrid format that combines online academic delivery with guided offline engagement.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {/* Online Academic Delivery */}
            <Card className="bg-bsd-orange/5 border-bsd-orange/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/20 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray">Online Academic Delivery</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-bsd-orange mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Structured semesters with faculty-led modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Video className="w-4 h-4 text-bsd-orange mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Live interactive sessions and real-time critiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardCheck className="w-4 h-4 text-bsd-orange mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Continuous assessment and digital resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Guided Offline Engagement */}
            <Card className="bg-bsd-gray/5 border-bsd-gray/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bsd-gray/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-bsd-gray" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray">Guided Offline Engagement</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-bsd-gray mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">On-ground mentor sessions and hands-on activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-bsd-gray mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Site visits at Bangalore campus and satellite centres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-bsd-gray mt-1 shrink-0" />
                    <span className="text-sm text-foreground/70">Studio sessions and portfolio reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="bg-gradient-to-r from-bsd-orange/10 to-bsd-gray/10 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto border border-bsd-orange/10">
            <p className="text-foreground/80 text-sm md:text-base">
              Structured semesters, faculty-led modules, and continuous assessment are supported by on-ground mentor sessions, site visits, and hands-on activities— ensuring <span className="font-semibold text-bsd-gray">flexibility without compromising depth, discipline, or real-world exposure.</span>
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
