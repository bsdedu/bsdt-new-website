
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";

export const ProgramHeader: React.FC = () => {
  return (
    <RevealSection>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
          Creating Interactive Digital Experiences
        </h2>
        <p className="mt-4 text-foreground/70">
          Our BVA in Animation & Game Design program combines artistry with technology, preparing students to create compelling characters, worlds, and stories across animation, games, and interactive media.
        </p>
      </div>
    </RevealSection>
  );
};
