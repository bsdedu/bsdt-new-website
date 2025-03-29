
import React from 'react';
import { clubsData } from './clubsData';
import { Card, CardContent, CardHeader } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';

export const ClubsList: React.FC = () => {
  return (
    <section id="clubs-list" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bsd-gray mb-4">Our Student Clubs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of clubs available at BSD, each fostering creativity, 
            teamwork, and professional development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubsData.map((club) => (
            <Card key={club.id} isHoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={club.image} 
                  alt={club.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{club.name}</h3>
                  <Badge variant="bsdOrange" className="text-xs">
                    {club.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{club.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {club.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
