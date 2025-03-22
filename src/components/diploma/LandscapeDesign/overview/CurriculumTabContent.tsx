
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { CurriculumCard } from './CurriculumCard';

export const CurriculumTabContent: React.FC = () => {
  return (
    <TabsContent value="curriculum" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CurriculumCard
          title="Foundation Modules"
          moduleNumber={1}
          modules={[
            "History & Theory of Landscape Architecture",
            "Plant Materials & Ecology",
            "Landscape Design Fundamentals",
            "Site Analysis & Planning",
            "Drawing & Visual Communication",
            "Digital Tools for Landscape Design",
          ]}
        />
        <CurriculumCard
          title="Advanced Modules"
          moduleNumber={2}
          modules={[
            "Urban Landscape Design",
            "Sustainable Landscape Practices",
            "Landscape Construction & Materials",
            "Grading, Drainage & Stormwater Management",
            "Professional Practice & Project Management",
            "Capstone Design Project",
          ]}
        />
      </div>
    </TabsContent>
  );
};
