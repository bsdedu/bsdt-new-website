import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { CheckCircle, Target, Lightbulb, Users, Briefcase, Award } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  const coreSkills = [
    "Develop ability to conceptualize, plan, design, and detail functional interior spaces",
    "Integrate technical aspects like structural systems, materials, and construction",
    "Understand electrical and mechanical systems in interior design",
    "Interpret local and global cultural contexts in design solutions",
    "Master spatial planning and human-space relationship dynamics",
    "Develop expertise in furniture design and space optimization"
  ];

  const technicalCompetencies = [
    "Proficiency in industry-standard design software (AutoCAD, SketchUp, 3Ds Max)",
    "Advanced skills in BIM software (Revit) and rendering tools (V-Ray)",
    "Understanding of construction materials and their applications",
    "Technical drawing and working drawing development",
    "Project estimation and management capabilities",
    "Workshop skills in wood and metal construction"
  ];

  const professionalSkills = [
    "Client consultation and needs assessment",
    "Design research and information gathering",
    "Project presentation and communication skills",
    "Team collaboration with designers, consultants, and contractors",
    "Understanding of professional practice and ethics",
    "Business development and entrepreneurial skills"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-bsd-gray">Core Design Skills</h3>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {coreSkills.map((skill, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-bsd-gray">Technical Competencies</h3>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {technicalCompetencies.map((skill, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-bsd-gray">Professional Skills</h3>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {professionalSkills.map((skill, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};