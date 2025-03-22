
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const ProgramHeader: React.FC = () => {
  return (
    <RevealSection>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
          Visual Communication for Business and Society
        </h2>
        <p className="mt-4 text-foreground/70">
          Our BVA in Graphic & Communication Design program sits at the intersection of business needs and artistic expression, providing a holistic education that transforms students into agents of change.
        </p>
      </div>
    </RevealSection>
  );
};
