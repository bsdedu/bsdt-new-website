
import React from 'react';
import { topRecruitersLogos } from './placementData';

export const TopRecruiters: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {topRecruitersLogos.map((company, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
      ))}
    </div>
  );
};
