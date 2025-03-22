
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
            description="Create comprehensive landscape designs that integrate aesthetics, function, and sustainability principles."
          />
          <LearningOutcome
            title="Plant Knowledge"
            description="Select and apply appropriate plant materials based on site conditions, design intent, and ecological considerations."
          />
          <LearningOutcome
            title="Technical Expertise"
            description="Develop technical documentation including grading plans, planting plans, and construction details."
          />
        </div>

        <div className="space-y-6">
          <LearningOutcome
            title="Visual Communication"
            description="Express design ideas effectively through hand drawing, digital rendering, and 3D visualization techniques."
          />
          <LearningOutcome
            title="Sustainable Design Approach"
            description="Apply ecological principles and sustainable strategies to create environmentally responsible landscapes."
          />
          <LearningOutcome
            title="Professional Portfolio"
            description="Create a professional design portfolio showcasing a range of landscape design projects and skills."
          />
        </div>
      </div>
    </TabsContent>
  );
};
