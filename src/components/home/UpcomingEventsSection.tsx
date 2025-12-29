import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
export const UpcomingEventsSection: React.FC = () => {
  const allEvents: Event[] = [{
    id: "1",
    title: "OPEN DAY",
    type: "open-day",
    date: "24th January, 2026",
    time: "10AM to 4PM",
    description: "Experience our campus, meet faculty & explore programs.",
    imageSrc: "/lovable-uploads/open-day-event.png",
    registerLink: "/open-day",
    featured: true
  }, {
    id: "2",
    title: "Designuru 2025",
    type: "open-day",
    date: "11th - 14th December, 2025",
    time: "10:00 AM - 6:00 PM",
    description: "Bangalore's premier design conference with industry experts and workshops.",
    imageSrc: ["/lovable-uploads/designuru-1.jpg", "/lovable-uploads/designuru-2.jpg", "/lovable-uploads/designuru-3.jpg", "/lovable-uploads/designuru-4.jpg", "/lovable-uploads/designuru-5.jpg", "/lovable-uploads/designuru-6.jpg", "/lovable-uploads/designuru-7.jpg", "/lovable-uploads/designuru-8.jpg"],
    registerLink: "/designuru-2025"
  }, {
    id: "3",
    title: "End-Sem Jury",
    type: "open-day",
    date: "November 2025",
    time: "9:00 AM - 4:00 PM",
    description: "Semester-end jury presentations showcasing student projects.",
    imageSrc: ["/lovable-uploads/end-sem-jury-1.jpg", "/lovable-uploads/end-sem-jury-2.jpg", "/lovable-uploads/end-sem-jury-3.jpg", "/lovable-uploads/end-sem-jury-4.jpg", "/lovable-uploads/end-sem-jury-5.jpg", "/lovable-uploads/end-sem-jury-6.jpg", "/lovable-uploads/end-sem-jury-7.jpg", "/lovable-uploads/end-sem-jury-8.jpg", "/lovable-uploads/end-sem-jury-9.jpg", "/lovable-uploads/end-sem-jury-10.jpg"],
    registerLink: "/end-sem-jury"
  }];
  const ImageCarousel = ({
    images,
    alt
  }: {
    images: string[];
    alt: string;
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);
    const goToPrev = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    };
    const goToNext = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex(prev => (prev + 1) % images.length);
    };
    return <div className="relative w-full h-full group">
        <img src={images[currentIndex]} alt={`${alt} ${currentIndex + 1}`} className="w-full h-full object-cover object-center transition-all duration-500" />
        <button onClick={goToPrev} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={goToNext} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, idx) => <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`} />)}
        </div>
      </div>;
  };
  const renderEventCard = (event: Event) => {
    const isCarousel = Array.isArray(event.imageSrc);
    return <a key={event.id} href={event.registerLink} target={event.registerLink.startsWith('http') ? '_blank' : '_self'} rel={event.registerLink.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
        <Card isHoverable className={`overflow-hidden ${event.featured ? 'border-bsd-orange/20 shadow' : ''}`}>
          <div className="relative h-40 sm:h-48 overflow-hidden">
            {isCarousel ? <ImageCarousel images={event.imageSrc as string[]} alt={event.title} /> : <img src={event.imageSrc as string} alt={event.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 pointer-events-none">
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
      </a>;
  };
  return <section id="events" className="bg-[#F6F6F7] py-[30px]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-8">
            <Badge variant="bsdOrange" className="mb-2">
              Join Us
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              Experience BSDT
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
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="group">
              <Link to="/campus-life/events-activities#campus-events">
                View More Events
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>;
};