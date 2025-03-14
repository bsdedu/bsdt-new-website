
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { Calendar } from "lucide-react";
import { Button } from "../ui/button";

interface Event {
  id: string;
  title: string;
  type: 'open-day' | 'webinar';
  date: string;
  time: string;
  description: string;
  imageSrc: string;
  registerLink: string;
  featured?: boolean;
}

export const UpcomingEventsSection: React.FC = () => {
  const upcomingEvents: Event[] = [
    {
      id: "1",
      title: "Open Day 2025",
      type: "open-day",
      date: "29th March, 2025",
      time: "09:30 AM - 4:00 PM",
      description: "Experience our creative campus, meet faculty and students, explore accommodations, engage with design experts, and join hands-on workshops at our Open Day!",
      imageSrc: "/lovable-uploads/741db2ef-80d9-44dd-b7f0-cb1942734763.png",
      registerLink: "https://bit.ly/3Fl6VkJ",
      featured: true
    },
    {
      id: "2",
      title: "Designing Tomorrow: The Opportunities in Architecture & Interior Design",
      type: "webinar",
      date: "5th April, 2025",
      time: "11:00 AM onwards",
      description: "Join our expert panel with Neha N Achar (Architect, AtkinsRealis) and Ar. Bhavna R (Assistant Professor) as they discuss career opportunities in design.",
      imageSrc: "/lovable-uploads/5798432f-82b3-43e6-a5be-03af3cc31ea4.png",
      registerLink: "/register-webinar"
    }
  ];

  return (
    <section id="events" className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-12">
            <Badge variant="bsdOrange" className="mb-2">
              Join Us
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              Upcoming Events
            </h2>
            <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
              Explore our upcoming open days and webinars to learn more about our programs, meet our faculty, and experience the BSDT difference.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                isHoverable 
                className={`overflow-hidden ${event.featured ? 'border-bsd-orange/20 shadow' : ''}`}
              >
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img 
                    src={event.imageSrc} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{event.date} | {event.time}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{event.title}</h3>
                    <Badge 
                      variant={event.type === 'open-day' ? 'bsdOrange' : 'secondary'} 
                      className="mt-2 w-fit"
                    >
                      {event.type === 'open-day' ? 'Open Day' : 'Webinar'}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-bsd-gray/80 mb-6">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <a href={event.registerLink} target="_blank" rel="noopener noreferrer">
                      <AnimatedButton>
                        Register Now
                      </AnimatedButton>
                    </a>
                    <Button variant="ghost" className="text-bsd-gray hover:text-bsd-orange">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-bsd-orange/30 text-bsd-gray hover:bg-bsd-orange/10">
              View All Events
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
