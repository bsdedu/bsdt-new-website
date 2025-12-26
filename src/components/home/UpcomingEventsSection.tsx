import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Calendar } from "lucide-react";

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
  const allEvents: Event[] = [
    {
      id: "1",
      title: "OPEN DAY",
      type: "open-day",
      date: "7th February, 2026",
      time: "10AM to 4PM",
      description: "Experience our campus, meet faculty & explore programs.",
      imageSrc: "/lovable-uploads/open-day-event.png",
      registerLink: "/open-day",
      featured: true
    },
    {
      id: "2",
      title: "Designuru 2025",
      type: "open-day",
      date: "11th - 14th December, 2025",
      time: "10:00 AM - 6:00 PM",
      description: "Bangalore's premier design conference with industry experts and workshops.",
      imageSrc: "/lovable-uploads/designuru-2025.jpg",
      registerLink: "/register-designuru"
    },
    {
      id: "3",
      title: "End-Sem Jury",
      type: "open-day",
      date: "November 2025",
      time: "9:00 AM - 4:00 PM",
      description: "Semester-end jury presentations showcasing student projects.",
      imageSrc: "/lovable-uploads/end-sem-jury.jpg",
      registerLink: "/register-end-sem-jury"
    },
    {
      id: "4",
      title: "Sports Day",
      type: "open-day",
      date: "7th & 8th November, 2025",
      time: "8:00 AM - 5:00 PM",
      description: "Annual sports day celebrating athletic excellence and team spirit.",
      imageSrc: "/lovable-uploads/sports-day.jpg",
      registerLink: "/register-sports-day"
    },
    {
      id: "5", 
      title: "Teachers Day",
      type: "open-day",
      date: "5th September, 2025",
      time: "9:00 AM - 6:00 PM",
      description: "Celebrate and honor our dedicated faculty members.",
      imageSrc: "/lovable-uploads/2c70e2d5-549c-43bd-bd5f-ef047b51dc10.png",
      registerLink: "/register-teachers-day"
    },
    {
      id: "6",
      title: "Mozaic",
      type: "open-day", 
      date: "12th October, 2025",
      time: "11:00 AM - 8:00 PM",
      description: "Our annual design festival with exhibitions and performances.",
      imageSrc: "/lovable-uploads/8405d26f-8d85-4e74-80b6-0ebc8ae470d3.png",
      registerLink: "/register-mozaic"
    }
  ];

  const renderEventCard = (event: Event) => (
    <a 
      key={event.id}
      href={event.registerLink}
      target={event.registerLink.startsWith('http') ? '_blank' : '_self'}
      rel={event.registerLink.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="block"
    >
      <Card isHoverable className={`overflow-hidden ${event.featured ? 'border-bsd-orange/20 shadow' : ''}`}>
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img src={event.imageSrc} alt={event.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-base md:text-lg font-semibold text-white mb-1">{event.title}</h3>
            <div className="flex items-center gap-1.5 text-white">
              <Calendar className="w-3 h-3" />
              <span className="text-xs font-medium">{event.date}</span>
            </div>
          </div>
        </div>
        
        <CardContent className="p-4">
          <p className="text-sm text-bsd-gray/80 line-clamp-2">{event.description}</p>
        </CardContent>
      </Card>
    </a>
  );

  return <section id="events" className="bg-[#F6F6F7] py-[30px]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-8">
            <Badge variant="bsdOrange" className="mb-2">
              Join Us
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              Events at BSDT
            </h2>
            <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
              Explore our upcoming open days and webinars to learn more about our programs, meet our faculty, and experience the BSDT difference.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map(renderEventCard)}
          </div>
        </RevealSection>
      </div>
    </section>;
};