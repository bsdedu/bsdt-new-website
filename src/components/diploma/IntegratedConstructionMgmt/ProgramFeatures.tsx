import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Cog, Layers, ClipboardCheck, HardHat, Calendar } from 'lucide-react';

export const ProgramFeatures: React.FC = () => {
  const items = [
    { icon: Layers, title: 'Drawings to Completion', text: 'Complete interior project execution training covering the full design-to-execution gap.' },
    { icon: ClipboardCheck, title: 'BOQ, Costing & Billing', text: 'Professional training in quantity estimation, BOQ, costing, billing, and contracts.' },
    { icon: Cog, title: 'Planning & Procurement', text: 'Construction planning, scheduling, procurement, and resource coordination.' },
    { icon: HardHat, title: 'Site Operations & Safety', text: 'Hands-on understanding of site operations, quality control, and construction safety.' },
    { icon: Building2, title: '3-Month Professional Internship', text: 'Dedicated industry internship plus a capstone simulating a complete interior construction project.' },
    { icon: Calendar, title: 'Working-Friendly Schedule', text: '16 months (12+4), three days a week — structured for students and working professionals.' },
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
              This is not another interior design course. ICPM teaches you how interior projects actually get built.
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
