
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { CareerCard } from './CareerCard';
import { TreeDeciduous, PenTool, Leaf } from "lucide-react";

export const CareerPathsTabContent: React.FC = () => {
  return (
    <TabsContent value="career-paths" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CareerCard
          title="Landscape Designer"
          description="Create functional and aesthetically pleasing outdoor spaces for residential, commercial, or public projects."
          icon={<TreeDeciduous className="w-6 h-6 text-bsd-orange" />}
          salary="₹5-10 LPA"
        />
        <CareerCard
          title="Urban Designer"
          description="Plan and design public spaces, streetscapes, and urban environments with focus on community needs."
          icon={<PenTool className="w-6 h-6 text-bsd-orange" />}
          salary="₹6-12 LPA"
        />
        <CareerCard
          title="Landscape Consultant"
          description="Provide specialized expertise on plant selection, sustainable landscaping, and ecological restoration projects."
          icon={<Leaf className="w-6 h-6 text-bsd-orange" />}
          salary="₹7-15 LPA"
        />
      </div>
    </TabsContent>
  );
};
