
import React, { useState, useEffect } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { User, Calendar, Map, ChevronLeft, ChevronRight } from 'lucide-react';
import ihsImg1 from '@/assets/guest-lecture-ihs-1.jpg';
import ihsImg2 from '@/assets/guest-lecture-ihs-2.jpg';
import ihsImg3 from '@/assets/guest-lecture-ihs-3.jpg';

interface LectureCardProps {
  speaker: string;
  title: string;
  organization: string;
  date: string;
  images: string[];
  location: string;
}

const ImageCarousel: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
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
      <img src={images[currentIndex]} alt={`${alt} ${currentIndex + 1}`} className="w-full h-full object-cover transition-all duration-500" style={{ minHeight: '200px' }} />
      {images.length > 1 && (
        <>
          <button onClick={goToPrev} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={goToNext} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, idx) => (
              <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const LectureCard: React.FC<LectureCardProps> = ({ speaker, title, organization, date, images, location }) => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="h-full relative">
            <ImageCarousel images={images} alt={speaker} />
          </div>
        </div>
        <div className="md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-bsd-gray mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-bsd-orange mb-4">
              <User className="h-4 w-4" />
              <p className="text-sm font-medium">{speaker}, {organization}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-bsd-orange" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Map className="h-4 w-4 text-bsd-orange" />
                <span>{location}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export const GuestLecturesSection: React.FC = () => {
  const lectures: LectureCardProps[] = [
    {
      speaker: "IHS Team",
      title: "Home Automation & Lighting Management Systems",
      organization: "Legrand (IHS)",
      date: "July 29, 2022",
      images: [ihsImg1, ihsImg2, ihsImg3],
      location: "BSDT Campus"
    }
  ];

  return (
    <section id="guest-lectures" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">INDUSTRY INSIGHTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Expert Guest Lectures
            </h2>
            <p className="mt-4 text-foreground/70">
              Industry leaders and visionaries share their expertise, insights, and experiences through our regular guest lecture series.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="space-y-6">
            {lectures.map((lecture, index) => (
              <LectureCard key={index} {...lecture} />
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-bsd-light-gray rounded-xl p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Guest Lecture Program Benefits</h3>
              <p className="text-foreground/70 mb-8">
                Our guest lectures expose students to diverse perspectives, industry trends, and professional insights that enhance their understanding of their chosen fields.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-bsd-gray mb-2">Industry Insights</h4>
                  <p className="text-sm text-foreground/70">
                    Students gain firsthand knowledge of current industry practices, challenges, and innovations directly from active professionals.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-bsd-gray mb-2">Career Guidance</h4>
                  <p className="text-sm text-foreground/70">
                    Guest speakers provide valuable career advice, sharing personal experiences and pathways to success in various design and technology fields.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-bsd-gray mb-2">Inspiration & Motivation</h4>
                  <p className="text-sm text-foreground/70">
                    Hearing from successful professionals inspires students to set ambitious goals and provides motivation to pursue excellence in their work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
