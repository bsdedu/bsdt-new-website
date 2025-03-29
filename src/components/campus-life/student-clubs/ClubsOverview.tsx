
import React from 'react';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Users, Award, Globe, Heart } from 'lucide-react';

export const ClubsOverview: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bsd-gray mb-4">Why Join a Student Club?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our student clubs offer unique opportunities to develop skills, make connections, 
            and enhance your college experience beyond academics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card isHoverable>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-bsd-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded peers who share your interests and passions
              </p>
            </CardContent>
          </Card>
          
          <Card isHoverable>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600">
                Develop leadership skills through organizing events and managing teams
              </p>
            </CardContent>
          </Card>
          
          <Card isHoverable>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">
                Gain real-world experience that will enhance your portfolio and resume
              </p>
            </CardContent>
          </Card>
          
          <Card isHoverable>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Well-being</h3>
              <p className="text-gray-600">
                Balance academic studies with fun activities that promote mental well-being
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
