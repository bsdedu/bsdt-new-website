
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { BrainCircuit, BriefcaseBusiness, Award, Building2 } from "lucide-react";

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <BrainCircuit className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">AI+</h3>
                <p className="text-sm text-foreground/70">AI Empowered Curriculum</p>
              </CardContent>
            </Card>
        
            <Card className="border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-3">
                  <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-3xl font-bold text-bsd-gray">90%</h3>
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
                <h3 className="text-3xl font-bold text-bsd-gray">25+</h3>
                <p className="text-sm text-foreground/70">Industry Partners</p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
