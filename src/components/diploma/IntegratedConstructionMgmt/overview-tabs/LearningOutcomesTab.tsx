import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Cog, Layers, ClipboardCheck, HardHat, BarChart3 } from 'lucide-react';

const outcomes = [
  { icon: <Cog className="w-6 h-6 text-bsd-orange" />, title: 'Building Services Expertise', description: 'Understand MEP systems, HVAC, electrical, plumbing, and fire safety, and their coordination in modern construction.' },
  { icon: <Layers className="w-6 h-6 text-bsd-orange" />, title: 'BIM and Digital Workflows', description: 'Develop proficiency in Revit and Navisworks for intelligent modelling, clash detection, and digital project delivery.' },
  { icon: <ClipboardCheck className="w-6 h-6 text-bsd-orange" />, title: 'Documentation & Standards', description: 'Produce BIM-led construction documentation aligned with industry standards and professional practices.' },
  { icon: <BarChart3 className="w-6 h-6 text-bsd-orange" />, title: 'Cost & Quantity Management', description: 'Carry out quantity estimation, BOQ preparation, budgeting, tendering, and cost control.' },
  { icon: <HardHat className="w-6 h-6 text-bsd-orange" />, title: 'Site Execution & Quality', description: 'Lead site operations, quality checks, coordination, and supervision across project stages.' },
  { icon: <Building2 className="w-6 h-6 text-bsd-orange" />, title: 'Project Lifecycle Management', description: 'Manage projects from planning and design coordination to execution and successful handover.' },
];

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Learning Outcomes</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Graduates of the PGD in Integrated Construction Management will be prepared to contribute effectively across residential, commercial, and infrastructure projects with strong technical, digital, and managerial capabilities.
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
