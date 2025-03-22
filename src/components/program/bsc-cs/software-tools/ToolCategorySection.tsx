
import React from 'react';
import { ToolCard, ToolCardProps } from './ToolCard';

interface ToolCategorySectionProps {
  title: string;
  tools: ToolCardProps[];
}

export const ToolCategorySection: React.FC<ToolCategorySectionProps> = ({ title, tools }) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl font-semibold text-bsd-gray mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};
