import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export const CurriculumTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Post Graduate Diploma Curriculum Structure</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A comprehensive 20-month (16+4) program (3 days a week) structured into four progressive semesters of 4 months each, plus 3 months internship and 1 month portfolio development, building advanced expertise in residential design, construction, and project management.
          </p>
        </div>

        <div className="space-y-8">
          {/* Semester 1 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Semester 1: Foundations of Residential Design and Architectural Development</CardTitle>
                <Badge variant="outline">4 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Residential Architecture Design Studio I</h4>
                  <p className="text-sm text-foreground/80">
                    Studio-based learning focused on design thinking, human-centered spaces, residential planning principles, spatial organization, housing typologies, and the development of functional residential design concepts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Architectural Representation and Digital Communication I</h4>
                  <p className="text-sm text-foreground/80">
                    Learning architectural sketching, manual drafting, digital drawings, technical representation, 3D visualization, presentation methods, and effective communication of design ideas.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Building Materials, Construction Technology and Structural Principles I</h4>
                  <p className="text-sm text-foreground/80">
                    Understanding residential construction materials, building systems, construction techniques, structural fundamentals, RCC systems, and practical applications in residential projects.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Climate, Context and Residential Architecture Studies</h4>
                  <p className="text-sm text-foreground/80">
                    Exploring site analysis, climate-responsive design, passive strategies, Indian residential architecture, vernacular influences, and contextual approaches to designing homes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Semester 2 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Semester 2: Residential Design Development and Technical Integration</CardTitle>
                <Badge variant="outline">4 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Residential Architecture Design Studio II</h4>
                  <p className="text-sm text-foreground/80">
                    Advanced studio learning focused on independent houses, villas, luxury residences, multi-level homes, site planning, spatial experience, and integration of architecture with interiors.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Construction Technology II and Architectural Detailing</h4>
                  <p className="text-sm text-foreground/80">
                    Learning advanced construction systems, architectural detailing, material applications, construction assemblies, specifications, and technical solutions required for residential execution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Structural Systems and Building Services Integration</h4>
                  <p className="text-sm text-foreground/80">
                    Understanding residential structural coordination, structural drawings, electrical systems, plumbing, HVAC, smart home systems, and integration of services within architectural design.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Interior Architecture, Furniture Systems and Materials</h4>
                  <p className="text-sm text-foreground/80">
                    Exploring residential interiors, furniture systems, modular solutions, joinery detailing, finishes, hardware selection, material palettes, and vendor-based execution processes.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">BIM and Advanced Visualization Tools</h4>
                  <p className="text-sm text-foreground/80">
                    Developing industry-relevant digital skills through BIM workflows, 3D modelling, visualization tools, rendering techniques, walkthrough creation, and professional project presentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Semester 3 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Semester 3: Professional Residential Practice and Project Execution</CardTitle>
                <Badge variant="outline">4 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Advanced Residential Architecture Studio III</h4>
                  <p className="text-sm text-foreground/80">
                    Studio-based exploration of complex residential projects including apartments, row housing, gated communities, affordable housing, luxury developments, and large-scale residential planning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Working Drawings and Construction Documentation</h4>
                  <p className="text-sm text-foreground/80">
                    Learning professional documentation processes including GFC drawings, construction drawings, technical detailing, schedules, consultant coordination, and execution-ready drawing packages.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Regulations, Approvals and Professional Practice</h4>
                  <p className="text-sm text-foreground/80">
                    Understanding Indian residential practice through building bye-laws, NBC guidelines, approval processes, RERA basics, client relationships, contracts, and professional workflows.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Estimation, BOQ and Project Management</h4>
                  <p className="text-sm text-foreground/80">
                    Learning residential project costing, quantity estimation, BOQ preparation, tender processes, contractor coordination, site management, timelines, and quality control.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Residential Practice Portfolio and Industry Studio</h4>
                  <p className="text-sm text-foreground/80">
                    Developing professional readiness through portfolio creation, client presentations, communication skills, design proposals, freelancing approaches, and residential practice management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Semester 4 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Semester 4: Residential Thesis and Sustainable Future Housing</CardTitle>
                <Badge variant="outline">4 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Residential Thesis Project</h4>
                  <p className="text-sm text-foreground/80">
                    Independent studio-based capstone project focused on developing a complete residential architecture proposal through research, site analysis, concept development, design resolution, technical documentation, services coordination, visualization, and professional portfolio presentation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Advanced Sustainable Residential Design and Emerging Technologies</h4>
                  <p className="text-sm text-foreground/80">
                    Exploring future-focused residential architecture through sustainable design strategies, climate-responsive planning, energy-efficient systems, alternative materials, smart home technologies, modular construction methods, and emerging innovations in housing design.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">Program Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-foreground/70">
                By the end of the 20 months, graduates will be able to:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Design independent houses, villas, and apartment complexes with professional detailing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Produce complete residential drawing packages (plans, sections, elevations, GFCs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Integrate structural and service systems into housing designs</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Manage Indian regulatory frameworks (NBC, RERA, local bye-laws)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Handle site execution, vendor management, BOQs, and budgets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Specialize in affordable, luxury, sustainable, or heritage housing sectors</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};
