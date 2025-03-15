
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Users, BriefcaseBusiness, Award, Building2 } from "lucide-react";

export const BCAStatsSection = () => {
  return (
    <section className="pb-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">60+</h3>
                <p className="text-sm text-foreground/70">Annual Intake</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">95%</h3>
                <p className="text-sm text-foreground/70">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">15+</h3>
                <p className="text-sm text-foreground/70">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">40+</h3>
                <p className="text-sm text-foreground/70">Industry Partners</p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
