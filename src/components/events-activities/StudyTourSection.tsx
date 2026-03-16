
import React, { useState, useEffect } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface StudyTour {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  images: string[];
}

const studyTours: StudyTour[] = [
  {
    id: "kochi-2026",
    title: "Kochi Biennale Study Tour",
    location: "Kochi, Kerala",
    year: "2026",
    description: "Students explored the Kochi-Muziris Biennale 2025-26, experiencing contemporary art installations, gallery exhibitions, and cultural immersion in Kerala.",
    images: [
      "/lovable-uploads/kochi-tour-5.jpg",
      "/lovable-uploads/kochi-tour-1.jpg",
      "/lovable-uploads/kochi-tour-3.jpg",
      "/lovable-uploads/kochi-tour-4.jpg",
      "/lovable-uploads/kochi-tour-2.jpg",
      "/lovable-uploads/kochi-tour-6.jpg",
      "/lovable-uploads/kochi-tour-7.jpg",
      "/lovable-uploads/kochi-tour-8.jpg",
      "/lovable-uploads/kochi-tour-9.jpg",
      "/lovable-uploads/kochi-tour-10.jpg",
      "/lovable-uploads/kochi-tour-11.jpg",
      "/lovable-uploads/kochi-tour-12.jpg",
      "/lovable-uploads/kochi-tour-13.jpg",
      "/lovable-uploads/kochi-tour-14.jpg",
      "/lovable-uploads/kochi-tour-15.jpg",
      "/lovable-uploads/kochi-tour-16.jpg",
      "/lovable-uploads/kochi-tour-17.jpg",
      "/lovable-uploads/kochi-tour-18.jpg",
      "/lovable-uploads/kochi-tour-19.jpg",
      "/lovable-uploads/kochi-tour-20.jpg",
      "/lovable-uploads/kochi-tour-21.jpg",
      "/lovable-uploads/kochi-tour-22.jpg",
      "/lovable-uploads/kochi-tour-23.png",
    ],
  },
  {
    id: "goa-2024",
    title: "Goa Study Tour",
    location: "Goa",
    year: "2024",
    description: "Students explored Goa's rich colonial architecture, vibrant art galleries, heritage churches, and street art murals as part of an immersive cultural study tour.",
    images: [
      "/lovable-uploads/goa-tour-1.jpg",
      "/lovable-uploads/goa-tour-2.jpg",
      "/lovable-uploads/goa-tour-3.jpg",
      "/lovable-uploads/goa-tour-4.jpg",
      "/lovable-uploads/goa-tour-5.jpg",
      "/lovable-uploads/goa-tour-6.jpg",
      "/lovable-uploads/goa-tour-7.jpg",
      "/lovable-uploads/goa-tour-8.jpg",
      "/lovable-uploads/goa-tour-9.jpg",
      "/lovable-uploads/goa-tour-10.jpg",
      "/lovable-uploads/goa-tour-11.jpg",
    ],
  },
  {
    id: "pondicherry-2022",
    title: "Pondicherry Study Tour",
    location: "Pondicherry",
    year: "2022",
    description: "Students visited key cultural, architectural, and experiential learning sites across Pondicherry and Auroville as part of an immersive study tour.",
    images: [
      "/lovable-uploads/pondicherry-tour-1.jpg",
      "/lovable-uploads/pondicherry-tour-2.jpg",
      "/lovable-uploads/pondicherry-tour-3.jpg",
      "/lovable-uploads/pondicherry-tour-4.jpg",
      "/lovable-uploads/pondicherry-tour-5.jpg",
      "/lovable-uploads/pondicherry-tour-6.jpg",
      "/lovable-uploads/pondicherry-tour-7.jpg",
      "/lovable-uploads/pondicherry-tour-8.jpg",
      "/lovable-uploads/pondicherry-tour-9.jpg",
    ],
  },
];

export const StudyTourSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (images: string[], title: string, startIndex = 0) => {
    setLightboxImages(images);
    setLightboxTitle(title);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
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

  return (
    <>
      <section className="bg-white py-[30px]">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <RevealSection>
            <div className="text-center mb-8">
              <Badge variant="bsdOrange" className="mb-2">
                Study Tours
              </Badge>
              <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
                Study Tours
              </h2>
              <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
                Expanding horizons through immersive study tours to leading design destinations, art biennales, and creative hubs across India.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyTours.map(tour => (
                <div
                  key={tour.id}
                  className="block cursor-pointer"
                  onClick={() => openLightbox(tour.images, tour.title)}
                >
                  <Card isHoverable className="overflow-hidden">
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <ImageCarousel images={tour.images} alt={tour.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 pointer-events-none">
                        <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                          {tour.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-white">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs font-medium">{tour.location} • {tour.year}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-bsd-gray/80 line-clamp-2">{tour.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

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
