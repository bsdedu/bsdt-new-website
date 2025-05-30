
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui-elements/Card';

export const EventsOverview: React.FC = () => {
  const eventTypes = [
    {
      icon: <Calendar className="w-8 h-8 text-bsd-orange" />,
      title: "Workshops & Masterclasses",
      description: "Hands-on learning sessions with industry experts covering latest design trends and technologies."
    },
    {
      icon: <Award className="w-8 h-8 text-bsd-orange" />,
      title: "Design Competitions",
      description: "Showcase your creativity in various design challenges and win exciting prizes."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-bsd-orange" />,
      title: "Industry Talks & Seminars",
      description: "Learn from successful professionals and get insights into the design industry."
    },
    {
      icon: <Users className="w-8 h-8 text-bsd-orange" />,
      title: "Cultural Events",
      description: "Celebrate creativity through festivals, exhibitions, and collaborative projects."
    }
  ];

  return (
    <section id="events-overview" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center mb-12">
            <Badge variant="bsdOrange" className="mb-4">
              Campus Life
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bsd-gray mb-4">
              A Vibrant Community of Creators
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At BSD, learning extends beyond the classroom. Our diverse range of events and activities 
              foster creativity, build networks, and prepare you for a successful design career.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <Card key={index} isHoverable className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center">
                      {event.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray">{event.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
