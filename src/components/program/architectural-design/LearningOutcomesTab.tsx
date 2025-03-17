
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { BookOpen, PencilRuler, Building2, Users, Settings, Lightbulb, LineChart, FileBadge } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Learning Outcomes</h3>
        <p className="text-foreground/70">
          The B.Des in Architectural Construction Design program develops a comprehensive skill set that prepares graduates to excel in the architectural design industry.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <PencilRuler className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Design Proficiency</h4>
                <p className="text-sm text-foreground/70">
                  Create innovative and functional architectural designs that respond to user needs, site contexts, and environmental considerations using appropriate methodologies and tools.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Technical Knowledge</h4>
                <p className="text-sm text-foreground/70">
                  Apply construction principles, building systems, materials knowledge, and structural concepts to transform design concepts into buildable solutions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Historical & Theoretical Understanding</h4>
                <p className="text-sm text-foreground/70">
                  Interpret architectural precedents and theoretical frameworks to inform design decisions and develop a personal design philosophy.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Collaboration & Communication</h4>
                <p className="text-sm text-foreground/70">
                  Work effectively within interdisciplinary teams and articulate design concepts through verbal, written, and visual means to diverse audiences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Digital Competency</h4>
                <p className="text-sm text-foreground/70">
                  Utilize industry-standard software for 2D drafting, 3D modeling, BIM, and visualization to develop and communicate architectural solutions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Sustainable Design</h4>
                <p className="text-sm text-foreground/70">
                  Integrate environmental, social, and economic sustainability principles into architectural design solutions at various scales.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <LineChart className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Critical Thinking</h4>
                <p className="text-sm text-foreground/70">
                  Analyze complex design problems through evidence-based research and develop innovative solutions that address multiple criteria and constraints.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <FileBadge className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-1">Professional Practice</h4>
                <p className="text-sm text-foreground/70">
                  Demonstrate understanding of architectural practice, project management, ethical considerations, and the regulatory environment in which buildings are designed and constructed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
