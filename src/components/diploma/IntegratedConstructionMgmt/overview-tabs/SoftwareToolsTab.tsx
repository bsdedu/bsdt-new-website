import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const tools = [
  { name: 'AutoCAD', desc: '2D drafting, detailing, and construction documentation.' },
  { name: 'Autodesk Revit', desc: 'Intelligent modelling, coordination, and documentation.' },
  { name: 'Microsoft Excel', desc: 'BOQ, quantity take-off, rate analysis, and cost tracking.' },
  { name: 'Microsoft Project', desc: 'Project scheduling, Gantt charts, and resource planning.' },
  { name: 'Primavera P6', desc: 'Advanced construction planning and scheduling.' },
  { name: 'BOQ & Estimation Tools', desc: 'Measurement, estimation, billing, and tender documentation.' },
  { name: 'Digital Documentation Tools', desc: 'Project documentation, site reporting, and progress tracking.' },
];

export const SoftwareToolsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Software</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Industry-relevant software exposure across drafting, modelling, estimation, scheduling, and project documentation.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tools You'll Master</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {tools.map((t) => (
                <div key={t.name} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{t.name}</h4>
                    <p className="text-xs text-foreground/70">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};
