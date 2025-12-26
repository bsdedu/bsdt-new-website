import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Trophy, Users, Target, Medal, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  { src: "/lovable-uploads/sports-day-1.jpg", alt: "Coach briefing students before sports activities" },
  { src: "/lovable-uploads/sports-day-2.jpg", alt: "Football match action shot" },
  { src: "/lovable-uploads/sports-day-3.jpg", alt: "Team players in yellow jerseys" },
  { src: "/lovable-uploads/sports-day-4.jpg", alt: "Wide view of the sports field during match" },
  { src: "/lovable-uploads/sports-day-5.jpg", alt: "Students playing carrom board game" },
  { src: "/lovable-uploads/sports-day-6.jpg", alt: "Cricket team discussion with coaches" },
  { src: "/lovable-uploads/sports-day-7.jpg", alt: "Students walking on the sports field" },
  { src: "/lovable-uploads/sports-day-8.jpg", alt: "Cricket batsmen during a match" },
  { src: "/lovable-uploads/sports-day-9.jpg", alt: "Group photo of all participants celebrating" },
  { src: "/lovable-uploads/sports-day-10.jpg", alt: "Sports day crowd and activities" },
  { src: "/lovable-uploads/sports-day-11.jpg", alt: "Winners group photo with medals" },
  { src: "/lovable-uploads/sports-day-12.jpg", alt: "Team celebration on the field" },
  { src: "/lovable-uploads/sports-day-13.jpg", alt: "Students during sports activities" },
  { src: "/lovable-uploads/sports-day-14.jpg", alt: "Cricket team with bat and jersey" },
  { src: "/lovable-uploads/sports-day-15.jpg", alt: "Participants posing together" },
];

const SportsDay = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  const goToNext = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);

  return (
    <>
      <Helmet>
        <title>Sports Day 2025 | Bangalore School of Design & Technology</title>
        <meta name="description" content="BSDT's Annual Sports Day 2025 - Two days of athletic excellence, team spirit, and competitive fun. November 7-8, 2025." />
        <meta name="keywords" content="BSDT Sports Day, annual sports event, college athletics, team sports, cricket, football, carrom" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20 md:py-32">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-xl font-medium mb-4 opacity-90">BSDT Annual</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  SPORTS DAY <br />
                  <span className="text-white/90">2025</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Celebrating Athletic Excellence
                </p>
                <p className="text-lg md:text-xl opacity-90 mb-2">
                  7th & 8th November, 2025
                </p>
                <p className="text-base md:text-lg opacity-80">
                  BSDT Campus Grounds
                </p>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    About <span className="text-bsd-orange">Sports Day 2025</span>
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    BSDT's Annual Sports Day is a two-day extravaganza celebrating athletic excellence, teamwork, and the competitive spirit of our students. This event brings together all departments and batches to compete in various sports and games.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    From high-energy football and cricket matches to strategic indoor games like carrom, Sports Day offers something for every type of athlete. Students form teams, wear their house colors with pride, and compete for trophies and glory.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond competition, Sports Day fosters camaraderie, builds lasting friendships across programs, and promotes a healthy, active lifestyle among our design community.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/sports-day-9.jpg" 
                    alt="Sports Day group celebration" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Highlights Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Event Highlights
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Football Tournament</h3>
                  <p className="text-muted-foreground text-sm">
                    Intense inter-department football matches with skilled players showcasing their talents on the turf.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Cricket Matches</h3>
                  <p className="text-muted-foreground text-sm">
                    Exciting cricket tournaments with teams competing for the championship title.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Indoor Games</h3>
                  <p className="text-muted-foreground text-sm">
                    Carrom, chess, and other indoor games for students who prefer strategic competitions.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                    <Medal className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Awards Ceremony</h3>
                  <p className="text-muted-foreground text-sm">
                    Recognition of winners with trophies, medals, and certificates for outstanding performances.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Photo Gallery Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
                Photo Gallery
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Moments of triumph, teamwork, and joy from BSDT Sports Day 2025.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lightbox Dialog */}
          <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
            <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={goToPrev}
                  className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {selectedImage !== null && (
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                )}

                {selectedImage !== null && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === selectedImage ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Event Details Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-cyan-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Event Details
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">7th & 8th November, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">BSDT Campus Grounds</span>
                </div>
              </div>

              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Want to be part of our vibrant campus community? Schedule a visit to experience BSDT life firsthand.
              </p>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <a href="/plan-a-visit">Schedule a Campus Visit</a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SportsDay;
