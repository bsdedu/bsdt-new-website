
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { CurriculumCard } from './CurriculumCard';

export const CurriculumTabContent: React.FC = () => {
  return (
    <TabsContent value="curriculum" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CurriculumCard
          title="Semester 1: Foundation"
          moduleNumber={1}
          modules={[
            "Design Fundamentals & Spatial Composition",
            "Plant Materials & Ecological Planning",
            "Site Analysis & Planning",
            "AutoCAD for Landscape Design",
            "Drawing & Visual Communication",
            "Design Studio Projects I",
          ]}
        />
        <CurriculumCard
          title="Semester 2: Advanced"
          moduleNumber={2}
          modules={[
            "SketchUp & 3D Visualization",
            "Planting Design & Material Applications",
            "Cost Estimation & Project Management",
            "Residential, Public & Commercial Landscapes",
            "Portfolio Development",
            "Final Design Projects & Presentations",
          ]}
        />
      </div>
    </TabsContent>
  );
};
