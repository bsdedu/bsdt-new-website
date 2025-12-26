import React, { useState, useRef } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
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
  const [showAllEvents, setShowAllEvents] = useState(false);
  const moreEventsRef = useRef<HTMLDivElement>(null);

  const upcomingEvents: Event[] = [
    {
      id: "1",
      title: "OPEN DAY",
      type: "open-day",
      date: "7th February, 2026",
      time: "10AM to 4PM",
      description: "Experience our campus, meet faculty & explore programs. Join us for this special occasion designed for prospective students and their families.",
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
      description: "Bangalore's premier design conference bringing together industry experts, alumni, and students for inspiring talks, workshops, and networking opportunities.",
      imageSrc: "/lovable-uploads/designuru-2025.jpg",
      registerLink: "/register-designuru"
    },
    {
      id: "3",
      title: "End-Sem Jury",
      type: "open-day",
      date: "November 2025",
      time: "9:00 AM - 4:00 PM",
      description: "Semester-end jury presentations showcasing student projects across all programs. An opportunity to witness creative excellence and innovative design solutions.",
      imageSrc: "/lovable-uploads/end-sem-jury.jpg",
      registerLink: "/register-end-sem-jury"
    }
  ];

  const additionalEvents: Event[] = [
    {
      id: "4",
      title: "Sports Day",
      type: "open-day",
      date: "7th & 8th November, 2025",
      time: "8:00 AM - 5:00 PM",
      description: "Annual sports day celebrating athletic excellence and team spirit. Featuring inter-batch competitions, fun games, and awards ceremony.",
      imageSrc: "/lovable-uploads/sports-day.jpg",
      registerLink: "/register-sports-day"
    },
    {
      id: "5", 
      title: "Teachers Day",
      type: "open-day",
      date: "5th September, 2025",
      time: "9:00 AM - 6:00 PM",
      description: "Celebrate and honor our dedicated faculty members who shape the future designers. Join us for special presentations, appreciation events, and faculty showcases.",
      imageSrc: "/lovable-uploads/2c70e2d5-549c-43bd-bd5f-ef047b51dc10.png",
      registerLink: "/register-teachers-day"
    },
    {
      id: "6",
      title: "Mozaic",
      type: "open-day", 
      date: "12th October, 2025",
      time: "11:00 AM - 8:00 PM",
      description: "Our annual design festival showcasing student creativity through exhibitions, competitions, workshops, and cultural performances. Experience the vibrant design community at BSD.",
      imageSrc: "/lovable-uploads/8405d26f-8d85-4e74-80b6-0ebc8ae470d3.png",
      registerLink: "/register-mozaic"
    }
  ];

  const handleViewAllEvents = () => {
    setShowAllEvents(!showAllEvents);
    if (!showAllEvents) {
      setTimeout(() => {
        moreEventsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const renderEventCard = (event: Event) => (
    <a 
      key={event.id}
      href={event.registerLink}
      target={event.registerLink.startsWith('http') ? '_blank' : '_self'}
      rel={event.registerLink.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="block"
    >
      <Card isHoverable className={`overflow-hidden ${event.featured ? 'border-bsd-orange/20 shadow' : ''}`}>
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img src={event.imageSrc} alt={event.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{event.date} | {event.time}</span>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <p className="text-bsd-gray/80">{event.description}</p>
        </CardContent>
      </Card>
    </a>
  );

  return <section id="events" className="bg-[#F6F6F7] py-[30px]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(renderEventCard)}
          </div>

          {showAllEvents && (
            <div ref={moreEventsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {additionalEvents.map(renderEventCard)}
            </div>
          )}

          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              className="border-bsd-orange/30 text-bsd-gray hover:bg-bsd-orange/10"
              onClick={handleViewAllEvents}
            >
              {showAllEvents ? (
                <>
                  Show Less <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  View All Events <ChevronDown className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>;
};