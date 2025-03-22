
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { ToolCategorySection } from './software-tools/ToolCategorySection';
import { toolsCategories } from './software-tools/toolsData';

export const SoftwareToolsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        {toolsCategories.map((category, index) => (
          <ToolCategorySection 
            key={index}
            title={category.title}
            tools={category.tools}
          />
        ))}
      </div>
    </RevealSection>
  );
};
