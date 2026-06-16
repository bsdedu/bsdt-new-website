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
            A comprehensive 16-month program structured into three progressive semesters of 4 months each, plus 3 months internship and 1 month portfolio development, building advanced expertise in residential design, construction, and project management.
          </p>
        </div>

        <div className="space-y-8">
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
                  <h4 className="font-semibold text-bsd-gray mb-3">Residential Design Studio I – Fundamentals</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Design principles in housing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Space planning: living, bedrooms, kitchens, circulation cores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Ergonomics, anthropometry, daylight, ventilation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Introduction to Indian housing typologies (apartments, bungalows, duplexes)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Building Materials & Construction Systems</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Bricks, blocks, stone, concrete, steel, wood, glass, eco-materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Residential construction techniques: load-bearing vs. RCC frame</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Indian material sourcing & costing basics</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Architectural Representation & Communication</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Freehand sketching & perspectives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>AutoCAD for 2D drafting (plans, sections, elevations)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>SketchUp + V-Ray for massing & basic rendering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Client communication methods (presentations, quick visuals)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Climate, Site & Professional Practice I</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Site analysis, orientation, zoning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Climate-responsive housing design in Indian contexts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Development control regulations (FAR/FSI, setbacks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>NBC (National Building Code) basics & RERA overview</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Semester 2: Advanced Residential Design and Technical Integration</CardTitle>
                <Badge variant="outline">4 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Residential Design Studio II – Complex Housing</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>High-rise housing, group housing, gated communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Luxury housing vs. affordable housing approaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Circulation, services core, and parking integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Sustainable housing models</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Construction Detailing & Working Drawings</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Staircases, kitchens, bathrooms, balconies, terraces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Doors, windows, joinery, modular furniture integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Full GFC (Good For Construction) drawing set</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Structural & Building Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Structural basics (RCC framing, foundations, slabs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Plumbing & water supply systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Electrical layouts & load distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>HVAC basics in luxury housing projects</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-bsd-gray mb-3">Digital Tools & Professional Practice II</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>BIM for residences (Revit workflows)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Lumion/Enscape for walkthroughs & visualizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>Contracts & agreements in residential projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span>BOQ preparation, estimation & site management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Semester 3: Specialization and residential thesis</CardTitle>
                <Badge variant="outline">4 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold text-bsd-gray mb-3">Phase 1: Specialization Tracks (Months 1–4)</h4>
                <p className="text-sm text-foreground/70 mb-4">Choose from four specialized tracks to tailor expertise:</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-bsd-gray mb-2">Track A: Sustainable & Affordable Housing</h5>
                  <ul className="space-y-1 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Cost-effective construction techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Eco-materials, IGBC standards for green homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Low-cost housing prototypes</span>
                    </li>
                  </ul>
                  
                  <h5 className="font-medium text-bsd-gray mb-2">Track B: Luxury & Contemporary Housing</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Smart homes, home automation integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Premium materials, lighting, modular kitchen systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Lifestyle-oriented design strategies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-bsd-gray mb-2">Track C: Heritage & Adaptive Residential Reuse</h5>
                  <ul className="space-y-1 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Restoration of old residences, adaptive reuse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Vernacular techniques in modern contexts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Cultural aesthetics in Indian housing</span>
                    </li>
                  </ul>
                  
                  <h5 className="font-medium text-bsd-gray mb-2">Track D: Furniture & Interior Architecture</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Customized furniture design for residences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Built-in storage solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-bsd-orange mt-1 flex-shrink-0" />
                      <span>Integration of interiors & architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-bsd-orange/5 rounded-lg">
                <h4 className="font-semibold text-bsd-gray mb-3">Phase 2: Dissertation Project (Months 5–6)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Independent Residential Thesis/Dissertation - self-directed major project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Deliverables: design proposal, full working drawings, BOQ, renders, feasibility report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Viva + jury evaluation with practicing architects and industry experts</span>
                  </li>
                </ul>
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
                By the end of the 16 months, graduates will be able to:
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