import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Cog, Layers, ClipboardCheck, HardHat, BarChart3 } from 'lucide-react';

const outcomes = [
  { icon: <Layers className="w-6 h-6 text-bsd-orange" />, title: 'Technical Construction Understanding', description: 'Understand interior construction systems, materials, finishes, and construction methods used on real projects.' },
  { icon: <ClipboardCheck className="w-6 h-6 text-bsd-orange" />, title: 'Drawing Interpretation', description: 'Read and interpret architectural, interior, structural, electrical, plumbing and MEP drawings with confidence.' },
  { icon: <BarChart3 className="w-6 h-6 text-bsd-orange" />, title: 'BOQ, Costing & Billing', description: 'Carry out quantity take-off, rate analysis, BOQ preparation, budgeting, billing, and cost control.' },
  { icon: <Cog className="w-6 h-6 text-bsd-orange" />, title: 'Planning & Procurement', description: 'Plan work breakdown, sequencing, schedules, procurement, contracts, and resource coordination.' },
  { icon: <HardHat className="w-6 h-6 text-bsd-orange" />, title: 'Site Execution & Safety', description: 'Manage site operations, supervision, quality control, snagging, and construction safety procedures.' },
  { icon: <Building2 className="w-6 h-6 text-bsd-orange" />, title: 'Professional Project Delivery', description: 'Coordinate contractors, vendors and clients, and deliver interior projects from drawings to completion.' },
];

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Learning Outcomes</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Graduates of the Professional Diploma in Interior Construction &amp; Project Management (PD in ICPM) are
            prepared to understand, coordinate, manage, and deliver interior projects across design firms, turnkey
            companies, contractors, and project management practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <Card key={o.title} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  {o.icon}
                </div>
                <CardTitle className="text-lg">{o.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{o.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};
