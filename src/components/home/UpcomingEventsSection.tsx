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
      title: "Freshers Day",
      type: "open-day",
      date: "16th August, 2025",
      time: "10AM to 2PM",
      description: "Welcome new students to BSD with fun activities, orientation sessions, and networking opportunities. Start your design journey with your fellow freshers!",
      imageSrc: "/lovable-uploads/4e0c1fb9-f311-4f95-a90f-cc833365c95c.png",
      registerLink: "/register-freshers",
      featured: true
    },
    {
      id: "2", 
      title: "Teachers Day",
      type: "open-day",
      date: "5th September, 2025",
      time: "9:00 AM - 6:00 PM",
      description: "Celebrate and honor our dedicated faculty members who shape the future designers. Join us for special presentations, appreciation events, and faculty showcases.",
      imageSrc: "/lovable-uploads/2c70e2d5-549c-43bd-bd5f-ef047b51dc10.png",
      registerLink: "/register-teachers-day"
    },
    {
      id: "3",
      title: "Mozaic",
      type: "open-day", 
      date: "12th October, 2025",
      time: "11:00 AM - 8:00 PM",
      description: "Our annual design festival showcasing student creativity through exhibitions, competitions, workshops, and cultural performances. Experience the vibrant design community at BSD.",
      imageSrc: "/lovable-uploads/8405d26f-8d85-4e74-80b6-0ebc8ae470d3.png",
      registerLink: "/register-mozaic"
    }
  ];
  return <section id="events" className="bg-[#F6F6F7] py-[30px]">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => <Card key={event.id} isHoverable className={`overflow-hidden ${event.featured ? 'border-bsd-orange/20 shadow' : ''}`}>
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img src={event.imageSrc} alt={event.title} className="w-full h-full object-cover object-right transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{event.date} | {event.time}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{event.title}</h3>
                    <Badge variant={event.type === 'open-day' ? 'bsdOrange' : 'secondary'} className="mt-2 w-fit">
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
              </Card>)}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-bsd-orange/30 text-bsd-gray hover:bg-bsd-orange/10">
              View All Events
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>;
};