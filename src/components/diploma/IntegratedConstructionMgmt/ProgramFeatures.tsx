import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Cog, Layers, ClipboardCheck, HardHat, Calendar } from 'lucide-react';

export const ProgramFeatures: React.FC = () => {
  const items = [
    { icon: Cog, title: 'MEP & Building Services', text: 'Hands-on training in mechanical, electrical, plumbing, HVAC, and fire safety system coordination.' },
    { icon: Layers, title: 'BIM-Led Workflows', text: 'Revit, Navisworks and BIM processes for intelligent modelling, clash detection, and coordination.' },
    { icon: ClipboardCheck, title: 'Documentation & Standards', text: 'BIM standards, digital project delivery, and professional documentation practices.' },
    { icon: HardHat, title: 'Site Execution Focus', text: 'Practical exposure to construction operations, quality checks, and site supervision.' },
    { icon: Building2, title: 'Industry Internship', text: '4-month internship across residential, commercial, and infrastructure projects.' },
    { icon: Calendar, title: 'Working-Friendly Schedule', text: '3 days a week, structured for focused learning alongside professional commitments.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM HIGHLIGHTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-6">
              What Makes This Program Exceptional
            </h2>
            <p className="text-lg text-foreground/70">
              An industry-focused program that integrates technical construction knowledge with BIM technology, site operations, and project delivery.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
