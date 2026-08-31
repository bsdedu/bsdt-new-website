import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const careerPaths = [
  {
    category: 'Interior Project Management',
    positions: [
      { title: 'Interior Project Coordinator', experience: '0-2 years', salary: '₹4-7 LPA' },
      { title: 'Interior Project Executive', experience: '1-3 years', salary: '₹5-8 LPA' },
      { title: 'Junior Project Manager', experience: '3-5 years', salary: '₹7-12 LPA' },
      { title: 'Interior Site Coordinator', experience: '1-3 years', salary: '₹4-8 LPA' },
    ],
  },
  {
    category: 'Site Execution & Quality',
    positions: [
      { title: 'Site Supervisor', experience: '0-2 years', salary: '₹3.5-6 LPA' },
      { title: 'Interior Execution Coordinator', experience: '1-3 years', salary: '₹5-8 LPA' },
      { title: 'Fit-Out Coordinator', experience: '2-4 years', salary: '₹6-10 LPA' },
      { title: 'QA/QC Executive', experience: '2-4 years', salary: '₹5-9 LPA' },
    ],
  },
  {
    category: 'Costing, Billing & Procurement',
    positions: [
      { title: 'Quantity Surveyor', experience: '1-3 years', salary: '₹4-8 LPA' },
      { title: 'Estimation Executive', experience: '1-3 years', salary: '₹4-8 LPA' },
      { title: 'BOQ / Billing Executive', experience: '1-3 years', salary: '₹4-7 LPA' },
      { title: 'Procurement / Vendor Coordinator', experience: '2-4 years', salary: '₹5-9 LPA' },
    ],
  },
];

const employers = [
  'Interior Design Firms',
  'Interior Construction Companies',
  'Turnkey Design & Build Companies',
  'Architecture Firms',
  'Interior Architecture Studios',
  'Fit-Out Contractors',
  'Project Management Consultancies',
  'Real Estate Developers',
  'Residential & Commercial Fit-Out Companies',
  'Modular Interior Companies',
  'Construction Companies',
  'Independent Project Management / Execution Practice',
];

export const CareerPathsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Job Opportunities</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Career pathways across interior firms, turnkey companies, contractors, developers, and project management practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {careerPaths.map((path) => (
            <Card key={path.category} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{path.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {path.positions.map((p) => (
                  <div key={p.title} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-sm text-bsd-gray">{p.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-[10px]">{p.experience}</Badge>
                      <span className="text-xs text-bsd-orange font-medium">{p.salary}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Potential Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {employers.map((e) => (
                <Badge key={e} variant="outline" className="text-xs">{e}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};
