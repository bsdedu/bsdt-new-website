
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Gamepad, Film, Sparkles, Code, Monitor, Headset } from "lucide-react";
import { ProgramStructure } from './ProgramStructure';
import { ProgramHighlights } from './ProgramHighlights';

export const CurriculumTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProgramStructure />
      <ProgramHighlights />
    </div>
  );
};
