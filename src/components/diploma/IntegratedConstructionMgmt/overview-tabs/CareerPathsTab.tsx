import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const careerPaths = [
  {
    category: 'BIM & Digital Construction',
    positions: [
      { title: 'BIM Coordinator', experience: '1-3 years', salary: '₹5-9 LPA' },
      { title: 'BIM Modeller (Revit)', experience: '0-2 years', salary: '₹4-7 LPA' },
      { title: 'Clash Detection Engineer', experience: '2-4 years', salary: '₹6-10 LPA' },
      { title: 'BIM Manager', experience: '5-8 years', salary: '₹10-18 LPA' },
    ],
  },
  {
    category: 'Construction Management',
    positions: [
      { title: 'Site Engineer', experience: '0-3 years', salary: '₹4-7 LPA' },
      { title: 'Project Coordinator', experience: '2-5 years', salary: '₹6-10 LPA' },
      { title: 'Construction Manager', experience: '5-8 years', salary: '₹10-18 LPA' },
      { title: 'Planning & Scheduling Engineer', experience: '2-5 years', salary: '₹6-12 LPA' },
    ],
  },
  {
    category: 'MEP & Building Services',
    positions: [
      { title: 'MEP Coordinator', experience: '1-3 years', salary: '₹5-9 LPA' },
      { title: 'MEP Design Engineer', experience: '2-5 years', salary: '₹6-11 LPA' },
      { title: 'Services Integration Engineer', experience: '3-6 years', salary: '₹7-13 LPA' },
    ],
  },
  {
    category: 'Cost & Project Delivery',
    positions: [
      { title: 'Quantity Surveyor', experience: '1-4 years', salary: '₹5-9 LPA' },
      { title: 'Cost Estimator / BOQ Engineer', experience: '2-5 years', salary: '₹6-11 LPA' },
      { title: 'Project Manager', experience: '6-10 years', salary: '₹12-22 LPA' },
      { title: 'Contracts Manager', experience: '5-8 years', salary: '₹10-18 LPA' },
    ],
  },
];

export const CareerPathsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Career Opportunities</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Graduates work across residential, commercial, and infrastructure projects in roles spanning BIM coordination, MEP integration, construction management, cost management, and project delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {careerPaths.map((path) => (
            <Card key={path.category}>
              <CardHeader>
                <CardTitle className="text-lg text-bsd-gray">{path.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {path.positions.map((p) => (
                    <div key={p.title} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-sm">{p.title}</h4>
                        <p className="text-xs text-foreground/60">{p.experience}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{p.salary}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};
