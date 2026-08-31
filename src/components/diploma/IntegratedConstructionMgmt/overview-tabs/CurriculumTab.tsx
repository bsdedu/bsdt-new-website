import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const semesters = [
  {
    title: 'Semester 1: Foundations of Interior Construction and Technical Understanding',
    modules: [
      { name: 'Construction Technology & Materials', desc: 'Understanding interior construction systems, building materials, construction methods, specifications, finishes, and material applications.' },
      { name: 'Architectural & Structural Drawings', desc: 'Learning to read and interpret architectural, interior, structural, electrical, plumbing, MEP drawings, details, dimensions, scales, and drawing conventions.' },
      { name: 'Introduction to Project Management', desc: 'Understanding project lifecycle, stakeholders, client requirements, contractors, consultants, vendors, project scope, documentation, coordination, and professional workflows.' },
      { name: 'Workshop: Detailing & Drafting', desc: 'Practical understanding of plans, sections, elevations, construction details, joinery, material junctions, and drawing-based construction interpretation.' },
    ],
  },
  {
    title: 'Semester 2: Planning, Quantification & Costing',
    modules: [
      { name: 'Estimating, Costing & BOQ', desc: 'Learning quantity take-off, measurement, rate analysis, material and labour costing, BOQ preparation, budgeting, specifications, and cost control.' },
      { name: 'Construction Planning & Scheduling', desc: 'Understanding work breakdown structures, sequencing, dependencies, resource planning, procurement planning, project schedules, CPM/PERT, progress tracking, and delay management.' },
      { name: 'Contracts & Billing', desc: 'Understanding construction contracts, tendering, work orders, contractor bills, measurements, payment processes, variations, claims, and commercial documentation.' },
      { name: 'Workshop: Site Layout & Planning', desc: 'Practical learning in site mobilisation, site layout, material storage, logistics, work sequencing, site planning, and project scheduling.' },
    ],
  },
  {
    title: 'Semester 3: Management, Coordination & Project Delivery',
    modules: [
      { name: 'Site Operations & Quality Management', desc: 'Learning site supervision, quality control, inspection processes, site reporting, workmanship, change orders, snagging, defect identification, and project completion.' },
      { name: 'Safety Management', desc: 'Understanding construction safety, occupational health, risk identification, electrical and fire safety, working at height, material handling, PPE, and site safety procedures.' },
      { name: 'Leadership & Communication', desc: 'Developing skills in team coordination, contractor and vendor communication, client communication, site meetings, conflict resolution, reporting, and stakeholder management.' },
      { name: 'Capstone Project: Real-World Interior Construction Project', desc: 'A comprehensive project integrating drawing interpretation, BOQ, costing, procurement, scheduling, site planning, coordination, quality, billing, and project delivery.' },
    ],
  },
];

const outcomes = [
  'Technical construction understanding and drawing interpretation skills',
  'BOQ, estimation, costing, billing and scheduling knowledge',
  'Procurement, contractor and vendor coordination skills',
  'Site management exposure with quality-control and safety awareness',
  'Professional communication and project documentation skills',
  'Industry internship and a comprehensive project-management capstone',
];

export const CurriculumTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <Badge variant="bsdOrange" className="mb-4">Course Structure</Badge>
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Professional Diploma Curriculum Structure</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A 16-month programme (12 months coursework + 4 months internship, 3 days a week) delivered across three
            progressive semesters that take students from drawings to site execution and project completion.
          </p>
        </div>

        <div className="space-y-6">
          {semesters.map((sem) => (
            <Card key={sem.title}>
              <CardHeader>
                <CardTitle className="text-xl text-bsd-gray">{sem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {sem.modules.map((m) => (
                    <div key={m.name} className="space-y-1">
                      <h4 className="font-semibold text-bsd-gray">{m.name}</h4>
                      <p className="text-sm text-foreground/70">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Programme Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{o}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};
