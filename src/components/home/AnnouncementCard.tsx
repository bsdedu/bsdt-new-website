import React, { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Announcement {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export const AnnouncementCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements: Announcement[] = [
    {
      title: "Admissions Open 2025-26",
      description: "Apply now for BBA Interior Design, BVA Visual Communication, BCA UI/UX & more",
      link: "/apply",
      linkText: "Apply Now"
    },
    {
      title: "Open Day - January 2025",
      description: "Visit our campus, meet faculty, and explore our state-of-the-art facilities",
      link: "/events",
      linkText: "Register"
    },
    {
      title: "Scholarship Available",
      description: "Up to 50% scholarship for meritorious students. Limited seats available.",
      link: "/scholarships",
      linkText: "Learn More"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!isVisible) return null;

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div 
      className={cn(
        "fixed bottom-24 right-4 md:right-8 z-40 max-w-sm transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="bg-white rounded-lg shadow-2xl border border-border overflow-hidden">
        {/* Header with close button */}
        <div className="bg-bsd-orange px-4 py-2 flex items-center justify-between">
          <span className="text-white text-sm font-medium">Announcement</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-1">
            {currentAnnouncement.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {currentAnnouncement.description}
          </p>
          <Link
            to={currentAnnouncement.link}
            className="inline-flex items-center gap-1 text-sm font-medium text-bsd-orange hover:text-bsd-orange/80 transition-colors"
          >
            {currentAnnouncement.linkText}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dots indicator */}
        <div className="px-4 pb-3 flex gap-1.5 justify-center">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-bsd-orange w-4" : "bg-muted-foreground/30"
              )}
              aria-label={`Go to announcement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
