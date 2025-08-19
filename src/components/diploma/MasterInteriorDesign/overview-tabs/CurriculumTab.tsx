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
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Master Diploma Curriculum Structure</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A comprehensive 12-month program structured into progressive modules that build advanced expertise in interior design, leadership, and project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Module 1: Advanced Design Theory</CardTitle>
                <Badge variant="outline">3 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Contemporary Interior Design Theories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Advanced Space Planning Methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Cultural and Contextual Design Approaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Design Psychology and Human Behavior</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Module 2: Project Leadership</CardTitle>
                <Badge variant="outline">3 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Project Management Methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Client Relations and Communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Team Leadership and Collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Budget Management and Cost Control</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Module 3: Technology & Innovation</CardTitle>
                <Badge variant="outline">3 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Advanced BIM and 3D Modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Virtual Reality and Augmented Reality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Smart Home Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Sustainable Technology Solutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Module 4: Capstone Project</CardTitle>
                <Badge variant="outline">3 months</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Independent Design Project</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Industry Mentor Collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Professional Portfolio Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-bsd-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">Final Presentation and Defense</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">Master Diploma Project Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-bsd-gray mb-3">Advanced Technical Portfolio</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Complex space planning projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Advanced 3D visualizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Project management documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Sustainable design solutions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray mb-3">Leadership Portfolio</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Team collaboration projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Client presentation materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Innovation and research projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span>Industry partnership initiatives</span>
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