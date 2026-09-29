
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui-elements/Card";
import { CheckCircle2 } from "lucide-react";

export const CurriculumTabContent: React.FC = () => {
  return (
    <TabsContent value="curriculum" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">1</span>
            Semester 1: Foundations of Landscape Design and Ecological Planning
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Landscape Design Studio-I</span>
                <p className="text-sm text-foreground/70">Studio-based learning focused on landscape concepts, site planning, spatial organization, outdoor environments, and design development.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Theory of Landscape Design</span>
                <p className="text-sm text-foreground/70">Understanding landscape history, design principles, environmental influences, landscape movements, and theoretical approaches.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Plant Ecology &amp; Horticulture Practices</span>
                <p className="text-sm text-foreground/70">Learning plant systems, ecological relationships, soil conditions, climate response, plant selection, and horticulture techniques.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Advanced Planting Design</span>
                <p className="text-sm text-foreground/70">Exploring planting strategies, vegetation planning, seasonal design, plant combinations, and landscape aesthetics.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Digital Design-I</span>
                <p className="text-sm text-foreground/70">Introduction to digital tools, landscape representation techniques, drafting, visualization, and presentation workflows.</p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">2</span>
            Semester 2: Advanced Landscape Design and Professional Integration
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Landscape Design Studio-II</span>
                <p className="text-sm text-foreground/70">Advanced studio projects focused on residential landscapes, commercial landscapes, public spaces, and complex site-based design solutions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Cost &amp; Estimation</span>
                <p className="text-sm text-foreground/70">Learning BOQ preparation, landscape budgeting, quantity estimation, project costing, and professional documentation.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Landscape Engineering</span>
                <p className="text-sm text-foreground/70">Understanding grading, drainage, irrigation systems, hardscape construction, outdoor services, and technical execution methods.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-bsd-gray">Digital Design-II</span>
                <p className="text-sm text-foreground/70">Advanced training in landscape visualization, 3D modelling, rendering, digital presentations, and professional portfolio development.</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </TabsContent>
  );
};
