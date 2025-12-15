
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { LearningOutcome } from './LearningOutcome';

export const LearningOutcomesTabContent: React.FC = () => {
  return (
    <TabsContent value="learning-outcomes" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <LearningOutcome
            title="Design Proficiency"
            description="Develop landscape solutions for residential, public, and commercial environments through studio-style projects."
          />
          <LearningOutcome
            title="Plant & Ecological Knowledge"
            description="Master planting design, ecological planning, and site-responsive design practices through field-based learning."
          />
          <LearningOutcome
            title="Software Proficiency"
            description="Build strong technical skills in AutoCAD, SketchUp, and other digital tools essential to professional practice."
          />
        </div>

        <div className="space-y-6">
          <LearningOutcome
            title="Field-Based Learning"
            description="Gain hands-on experience through site studies, plant nursery visits, material yard visits, and ecological studies."
          />
          <LearningOutcome
            title="Cost Estimation"
            description="Learn material applications and cost estimation techniques for professional landscape project management."
          />
          <LearningOutcome
            title="Professional Portfolio"
            description="Continuous portfolio development throughout the year with guided critiques and presentations."
          />
        </div>
      </div>
    </TabsContent>
  );
};
