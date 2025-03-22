
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const IndustryFaculty: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From Industry Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our HCI for UI/UX program is led by professionals with extensive industry experience who are passionate about creating user-centered digital experiences.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Anika Patel" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Anika Patel</h3>
                  <p className="text-sm text-bsd-orange">UX Research Lead</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A UX research specialist with over 10 years of experience working with global tech companies. Anika specializes in user behavior analysis, interview techniques, and translating research insights into actionable design recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Rahul Sharma" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Rahul Sharma</h3>
                  <p className="text-sm text-bsd-orange">UI/UX Design Director</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With 15+ years in digital product design, Rahul brings expertise from leading design teams at major tech companies. His focus on design systems, interaction design, and creating scalable UI solutions provides students with valuable industry insights.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Nisha Kapoor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Nisha Kapoor</h3>
                  <p className="text-sm text-bsd-orange">Cognitive Psychology Expert</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A cognitive psychologist with 12+ years of experience in applying psychological principles to digital design. Nisha brings unique insights into human perception, attention, and decision-making processes that form the foundation of effective UI/UX design.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
