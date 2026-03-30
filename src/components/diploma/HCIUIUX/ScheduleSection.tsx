import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Wifi } from "lucide-react";

export const ScheduleSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM SCHEDULE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Weekend Learning, Real-World Skills
            </h2>
            <p className="mt-4 text-foreground/70">
              A compact 6-month program with classes every Saturday—delivered through a hybrid model combining online learning with hands-on offline sessions.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-bsd-orange/5 border-bsd-orange/20 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-bsd-orange" />
                </div>
                <h3 className="text-lg font-semibold text-bsd-gray mb-2">6-Month Duration</h3>
                <p className="text-sm text-foreground/70">Intensive, focused curriculum completed in just six months</p>
              </CardContent>
            </Card>

            <Card className="bg-bsd-orange/5 border-bsd-orange/20 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-bsd-orange" />
                </div>
                <h3 className="text-lg font-semibold text-bsd-gray mb-2">Saturdays Only</h3>
                <p className="text-sm text-foreground/70">Classes held every Saturday so your weekdays remain free</p>
              </CardContent>
            </Card>

            <Card className="bg-bsd-orange/5 border-bsd-orange/20 text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-7 h-7 text-bsd-orange" />
                </div>
                <h3 className="text-lg font-semibold text-bsd-gray mb-2">Hybrid Learning</h3>
                <p className="text-sm text-foreground/70">Online & offline sessions at our Bangalore campus</p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
