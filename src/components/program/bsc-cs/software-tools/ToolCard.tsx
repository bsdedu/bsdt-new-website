
import React from 'react';

export interface ToolCardProps {
  name: string;
  category: string;
  purpose: string;
  logoUrl: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ name, category, purpose, logoUrl }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-bsd-light-gray rounded-xl">
      <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
        <img src={logoUrl} alt={name} className="w-8 h-8 object-contain" />
      </div>
      <div>
        <h3 className="font-semibold text-bsd-gray">{name}</h3>
        <p className="text-xs text-bsd-orange">{category}</p>
        <p className="text-sm text-foreground/70 mt-1">{purpose}</p>
      </div>
    </div>
  );
};
