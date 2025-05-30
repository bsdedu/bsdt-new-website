
import React from 'react';
import { Card } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { placementData } from './placementData';

export const AlumniSuccessStories: React.FC = () => {
  return (
    <div className="space-y-8">
      {Object.entries(placementData).map(([year, alumni]) => (
        <div key={year} className="space-y-4">
          <h3 className="text-2xl font-bold text-bsd-gray">Class of {year}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((person, index) => (
              <Card key={index} className="p-6 border-bsd-orange/20 shadow-sm">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-bsd-gray text-lg">{person.name}</h4>
                    <Badge variant="outline" className="bg-bsd-orange/5 text-bsd-orange border-bsd-orange/30">
                      {year}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-foreground/70 mb-2">
                    {person.program}
                  </p>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-gray-50 rounded-md flex items-center justify-center mr-3 overflow-hidden">
                      <img 
                        src={person.companyLogo} 
                        alt={`${person.company} logo`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-bsd-gray">{person.company}</div>
                      <div className="text-bsd-orange font-bold">{person.salary}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
