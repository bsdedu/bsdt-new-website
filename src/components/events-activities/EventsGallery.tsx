
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui-elements/Card';

export const EventsGallery: React.FC = () => {
  const eventImages = [
    {
      id: "1",
      title: "Design Workshop 2024",
      image: "/lovable-uploads/741db2ef-80d9-44dd-b7f0-cb1942734763.png",
      category: "Workshop"
    },
    {
      id: "2",
      title: "Industry Expert Session",
      image: "/lovable-uploads/5798432f-82b3-43e6-a5be-03af3cc31ea4.png",
      category: "Seminar"
    },
    {
      id: "3",
      title: "Student Exhibition",
      image: "/lovable-uploads/7ac4f67b-92cc-42db-832a-c85d36f5b39c.png",
      category: "Exhibition"
    },
    {
      id: "4",
      title: "Creative Competition",
      image: "/lovable-uploads/741db2ef-80d9-44dd-b7f0-cb1942734763.png",
      category: "Competition"
    }
  ];

  return (
    <section id="events-gallery" className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center mb-12">
            <Badge variant="bsdOrange" className="mb-4">
              Gallery
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bsd-gray mb-4">
              Moments from Our Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a glimpse into the exciting events and activities that make BSD a vibrant 
              community of creative minds.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventImages.map((event) => (
              <Card key={event.id} isHoverable className="overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <Badge variant="bsdOrange" className="mb-2 w-fit">
                      {event.category}
                    </Badge>
                    <h3 className="text-white font-semibold">{event.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
