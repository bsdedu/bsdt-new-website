
import React from 'react';

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-bsd-light-gray rounded-xl p-6">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-bsd-gray mb-3">{title}</h3>
        <p className="text-foreground/70">
          {description}
        </p>
      </div>
    </div>
  );
};
