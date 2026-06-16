import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const semesters = [
  {
    title: 'Semester 1: Building Systems and Construction Coordination',
    modules: [
      { name: 'Building Services and MEP Systems', desc: 'Understanding mechanical, electrical, and plumbing systems used in modern construction projects.' },
      { name: 'HVAC Fundamentals', desc: 'Learning heating, ventilation, and air-conditioning principles, system components, and practical building applications.' },
      { name: 'Electrical Systems Integration', desc: 'Understanding electrical layouts, power distribution, lighting systems, and coordination requirements.' },
      { name: 'Plumbing and Fire Safety Systems', desc: 'Exploring water supply, drainage systems, firefighting systems, safety standards, and service coordination.' },
      { name: 'Building Services Coordination', desc: 'Learning how architectural, structural, and MEP systems are integrated for successful project execution.' },
    ],
  },
  {
    title: 'Semester 2: BIM and Digital Construction Workflows',
    modules: [
      { name: 'Autodesk Revit and BIM Modelling', desc: 'Developing skills in creating intelligent building models, documentation, and construction information management.' },
      { name: 'Navisworks and Project Coordination', desc: 'Learning model coordination, review processes, and collaborative BIM workflows.' },
      { name: 'Clash Detection and Resolution', desc: 'Understanding interdisciplinary coordination, identifying conflicts, and solving construction challenges before execution.' },
      { name: 'BIM Processes and Industry Workflows', desc: 'Exploring BIM standards, digital project delivery methods, documentation systems, and professional practices.' },
    ],
  },
  {
    title: 'Semester 3: Construction Management and Project Execution',
    modules: [
      { name: 'Construction Planning and Scheduling', desc: 'Learning project planning methods, timelines, resource allocation, and construction sequencing.' },
      { name: 'Cost Estimation and BOQ Preparation', desc: 'Understanding quantity estimation, budgeting, tender documents, and cost control processes.' },
      { name: 'Site Execution and Management', desc: 'Developing practical knowledge of construction operations, quality checks, coordination, and site supervision.' },
      { name: 'Project Lifecycle Management', desc: 'Understanding complete project stages from planning and design coordination to execution and handover.' },
    ],
  },
];

export const CurriculumTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Course Structure</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A 16-month (12 + 4) program delivered three days a week, structured across progressive learning modules in building services, BIM technology, construction planning, site operations, and professional project coordination, followed by a four-month industry internship.
          </p>
        </div>

        <div className="space-y-8">
          {semesters.map((sem) => (
            <Card key={sem.title}>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-xl">{sem.title}</CardTitle>
                  <Badge variant="outline">4 months</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {sem.modules.map((m) => (
                    <div key={m.name}>
                      <h4 className="font-semibold text-bsd-gray mb-2 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                        <span>{m.name}</span>
                      </h4>
                      <p className="text-sm text-foreground/70 pl-6">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-xl">Industry Internship</CardTitle>
                <Badge variant="outline">4 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                A four-month on-site industry internship gives students hands-on exposure to real construction projects, BIM coordination workflows, MEP integration, and project management practices across residential, commercial, and infrastructure projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </RevealSection>
  );
};
