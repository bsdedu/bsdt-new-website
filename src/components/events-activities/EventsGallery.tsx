
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
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
  imageSrc: string | string[];
  registerLink: string;
  featured?: boolean;
}

export const EventsGallery: React.FC = () => {
  const upcomingEvents: Event[] = [
    {
      id: "1",
      title: "OPEN DAY",
      type: "open-day",
      date: "Coming Soon...",
      time: "",
      description: "Experience our campus, meet faculty & explore programs. Join us for this special occasion designed for prospective students and their families.",
      imageSrc: "/lovable-uploads/4e0c1fb9-f311-4f95-a90f-cc833365c95c.png",
      registerLink: "https://www.bsd.edu.in/open-day",
      featured: true
    },
    {
      id: "2", 
      title: "Teachers Day",
      type: "open-day",
      date: "5th September, 2025",
      time: "9:00 AM - 6:00 PM",
      description: "Celebrate and honor our dedicated faculty members who shape the future designers. Join us for special presentations, appreciation events, and faculty showcases.",
      imageSrc: [
        "/lovable-uploads/2c70e2d5-549c-43bd-bd5f-ef047b51dc10.png",
        "/lovable-uploads/teachers-day-1.jpg",
        "/lovable-uploads/teachers-day-2.jpg",
        "/lovable-uploads/teachers-day-3.jpg",
        "/lovable-uploads/teachers-day-4.jpg",
        "/lovable-uploads/teachers-day-5.jpg",
        "/lovable-uploads/teachers-day-6.jpg",
        "/lovable-uploads/teachers-day-7.jpg",
        "/lovable-uploads/teachers-day-8.jpg",
        "/lovable-uploads/teachers-day-9.jpg",
        "/lovable-uploads/teachers-day-10.jpg"
      ],
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

  return (
    <section id="events-gallery" className="bg-[#F6F6F7] py-[30px]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-12">
            <Badge variant="bsdOrange" className="mb-2">
              Join Us
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              Moments from Our Events
            </h2>
            <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
              Explore our upcoming open days and webinars to learn more about our programs, meet our faculty, and experience the BSDT difference.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <a 
                key={event.id} 
                href={event.registerLink}
                target={event.registerLink.startsWith('http') ? '_blank' : '_self'}
                rel={event.registerLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <Card isHoverable className={`overflow-hidden ${event.featured ? 'border-bsd-orange/20 shadow' : ''}`}>
                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                      <img src={Array.isArray(event.imageSrc) ? event.imageSrc[0] : event.imageSrc} alt={event.title} className="w-full h-full object-cover object-right transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{event.title}</h3>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
