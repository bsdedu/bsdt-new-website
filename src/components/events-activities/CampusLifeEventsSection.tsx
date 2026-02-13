import React, { useState, useEffect } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Event {
  id: string;
  title: string;
  type: 'open-day' | 'webinar';
  date: string;
  time: string;
  description: string;
  imageSrc: string | string[];
  registerLink?: string;
  featured?: boolean;
  viewOnly?: boolean;
}

export const CampusLifeEventsSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (images: string | string[], title: string, startIndex = 0) => {
    const imageArray = Array.isArray(images) ? images : [images];
    setLightboxImages(imageArray);
    setLightboxTitle(title);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const allEvents: Event[] = [
    {
      id: "1",
      title: "OPEN DAY",
      type: "open-day",
      date: "Coming Soon...",
      time: "",
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
      imageSrc: [
        "/lovable-uploads/designuru-1.jpg",
        "/lovable-uploads/designuru-2.jpg",
        "/lovable-uploads/designuru-3.jpg",
        "/lovable-uploads/designuru-4.jpg",
        "/lovable-uploads/designuru-5.jpg",
        "/lovable-uploads/designuru-6.jpg",
        "/lovable-uploads/designuru-7.jpg",
        "/lovable-uploads/designuru-8.jpg"
      ],
      registerLink: "/designuru-2025"
    },
    {
      id: "3",
      title: "End-Sem Jury",
      type: "open-day",
      date: "November 2025",
      time: "9:00 AM - 4:00 PM",
      description: "Semester-end jury presentations showcasing student projects.",
      imageSrc: [
        "/lovable-uploads/end-sem-jury-1.jpg",
        "/lovable-uploads/end-sem-jury-2.jpg",
        "/lovable-uploads/end-sem-jury-3.jpg",
        "/lovable-uploads/end-sem-jury-4.jpg",
        "/lovable-uploads/end-sem-jury-5.jpg",
        "/lovable-uploads/end-sem-jury-6.jpg",
        "/lovable-uploads/end-sem-jury-7.jpg",
        "/lovable-uploads/end-sem-jury-8.jpg",
        "/lovable-uploads/end-sem-jury-9.jpg",
        "/lovable-uploads/end-sem-jury-10.jpg"
      ],
      registerLink: "/end-sem-jury"
    },
    {
      id: "4",
      title: "Sports Day",
      type: "open-day",
      date: "7th & 8th November, 2025",
      time: "8:00 AM - 5:00 PM",
      description: "Annual sports day celebrating athletic excellence and team spirit.",
      imageSrc: [
        "/lovable-uploads/sports-day-1.jpg",
        "/lovable-uploads/sports-day-2.jpg",
        "/lovable-uploads/sports-day-3.jpg",
        "/lovable-uploads/sports-day-4.jpg",
        "/lovable-uploads/sports-day-5.jpg",
        "/lovable-uploads/sports-day-6.jpg",
        "/lovable-uploads/sports-day-7.jpg",
        "/lovable-uploads/sports-day-8.jpg",
        "/lovable-uploads/sports-day-9.jpg"
      ],
      registerLink: "/sports-day"
    },
    {
      id: "5",
      title: "Teachers Day",
      type: "open-day",
      date: "5th September, 2025",
      time: "9:00 AM - 6:00 PM",
      description: "Celebrate and honor our dedicated faculty members.",
      imageSrc: "/lovable-uploads/2c70e2d5-549c-43bd-bd5f-ef047b51dc10.png",
      viewOnly: true
    },
    {
      id: "6",
      title: "Mozaic",
      type: "open-day",
      date: "12th October, 2025",
      time: "11:00 AM - 8:00 PM",
      description: "Our annual design festival with exhibitions and performances.",
      imageSrc: "/lovable-uploads/8405d26f-8d85-4e74-80b6-0ebc8ae470d3.png",
      viewOnly: true
    },
    {
      id: "7",
      title: "BDS Frames",
      type: "open-day",
      date: "8th May, 2024",
      time: "10:00 AM - 5:00 PM",
      description: "An immersive showcase of student creativity featuring art exhibitions, craft stalls, interactive games, and project displays.",
      imageSrc: [
        "/lovable-uploads/bds-frames-1.jpg",
        "/lovable-uploads/bds-frames-2.jpg",
        "/lovable-uploads/bds-frames-3.jpg",
        "/lovable-uploads/bds-frames-4.jpg",
        "/lovable-uploads/bds-frames-5.jpg",
        "/lovable-uploads/bds-frames-6.jpg",
        "/lovable-uploads/bds-frames-7.jpg",
        "/lovable-uploads/bds-frames-8.jpg",
        "/lovable-uploads/bds-frames-9.jpg",
        "/lovable-uploads/bds-frames-10.jpg",
        "/lovable-uploads/bds-frames-11.jpg",
        "/lovable-uploads/bds-frames-12.jpg"
      ],
      viewOnly: true
    }
  ];

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

    return (
      <div className="relative w-full h-full group">
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-500"
        />
        <button
          onClick={goToPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderEventCard = (event: Event) => {
    const isCarousel = Array.isArray(event.imageSrc);

    const cardContent = (
      <Card
        isHoverable
        className={`overflow-hidden ${event.featured ? 'border-bsd-orange/20 shadow' : ''}`}
      >
        <div className="relative h-40 sm:h-48 overflow-hidden">
          {isCarousel ? (
            <ImageCarousel images={event.imageSrc as string[]} alt={event.title} />
          ) : (
            <img
              src={event.imageSrc as string}
              alt={event.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 pointer-events-none">
            <h3 className="text-base md:text-lg font-semibold text-white mb-1">
              {event.title}
            </h3>
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
    );

    if (event.viewOnly) {
      return (
        <div 
          key={event.id} 
          className="block cursor-pointer"
          onClick={() => openLightbox(event.imageSrc, event.title)}
        >
          {cardContent}
        </div>
      );
    }

    return (
      <a
        key={event.id}
        href={event.registerLink}
        target={event.registerLink?.startsWith('http') ? '_blank' : '_self'}
        rel={event.registerLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {cardContent}
      </a>
    );
  };

  return (
    <>
      <section id="campus-events" className="bg-[#F6F6F7] py-[30px]">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <RevealSection>
            <div className="text-center mb-8">
              <Badge variant="bsdOrange" className="mb-2">
                Campus Life
              </Badge>
              <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
                Events & Celebrations
              </h2>
              <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
                Discover the vibrant campus culture at BSDT through our events, festivals, and celebrations that bring our community together.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents.map(renderEventCard)}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-[100] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full h-[85vh] flex items-center justify-center">
            <img
              src={lightboxImages[lightboxIndex]}
              alt={`${lightboxTitle} ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {lightboxImages.length > 1 && (
              <>
                <button
                  onClick={() => setLightboxIndex(prev => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-[100]"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={() => setLightboxIndex(prev => (prev + 1) % lightboxImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-[100]"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>
          
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {lightboxImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === lightboxIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
          
          <div className="absolute top-4 left-4 text-white">
            <h3 className="text-lg font-semibold">{lightboxTitle}</h3>
            {lightboxImages.length > 1 && (
              <span className="text-sm text-white/70">{lightboxIndex + 1} / {lightboxImages.length}</span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
