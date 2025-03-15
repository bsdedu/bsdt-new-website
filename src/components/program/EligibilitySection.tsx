
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const EligibilitySection = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ADMISSIONS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Eligibility & Application Process
            </h2>
            <p className="mt-4 text-foreground/70">
              Join our BVA Animation & Game Design program and start your journey toward a creative and fulfilling career in animation and game development.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-bsd-gray">Eligibility Criteria</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-bsd-gray">Academic Qualification</h4>
                      <p className="text-sm text-foreground/70">10+2 (Higher Secondary) or equivalent with a minimum of 50% aggregate marks from any recognized board</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
