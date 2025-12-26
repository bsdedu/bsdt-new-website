import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Palette, Lightbulb, Award, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  { src: "/lovable-uploads/designuru-1.jpg", alt: "Student presenting design project at Designuru 2025" },
  { src: "/lovable-uploads/designuru-2.jpg", alt: "Art installation with architectural drawings at Designuru 2025" },
  { src: "/lovable-uploads/designuru-3.jpg", alt: "BSDT students and faculty at Designuru 2025" },
  { src: "/lovable-uploads/designuru-4.jpg", alt: "Team photo at Designuru 2025 evening event" },
  { src: "/lovable-uploads/designuru-5.jpg", alt: "Panel discussion at Designuru 2025" },
  { src: "/lovable-uploads/designuru-6.jpg", alt: "Group photo at exhibition booth" },
  { src: "/lovable-uploads/designuru-7.jpg", alt: "Design presentation with bubble diagrams" },
  { src: "/lovable-uploads/designuru-8.jpg", alt: "Students posing with project displays" },
];

const Designuru2025 = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  const goToNext = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);

  return (
    <>
      <Helmet>
        <title>Designuru 2025 | Bangalore School of Design & Technology</title>
        <meta name="description" content="Explore BSDT's participation in Designuru 2025 - Bangalore's premier design conference featuring industry experts, workshops, and student exhibitions. December 11-14, 2025." />
        <meta name="keywords" content="Designuru 2025, Bangalore design conference, BSDT, design exhibition, interior design, architecture" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-purple-700 text-white py-20 md:py-32">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-xl font-medium mb-4 opacity-90">BSDT at</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  DESIGNURU <br />
                  <span className="text-white/90">2025</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  25th Edition
                </p>
                <p className="text-lg md:text-xl opacity-90 mb-2">
                  11th - 14th December, 2025
                </p>
                <p className="text-base md:text-lg opacity-80">
                  Bangalore, Karnataka
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
                    About <span className="text-bsd-orange">Designuru 2025</span>
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Designuru is Bangalore's premier design conference, bringing together architects, interior designers, product designers, and creative professionals from across the country. The 25th edition celebrated the evolution of design in India with a focus on sustainable practices, innovative materials, and human-centered design.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    BSDT students and faculty participated actively in this prestigious event, showcasing student projects, attending masterclasses by industry leaders, and networking with design professionals. Our students presented their residential and commercial design projects, receiving valuable feedback from jury members and peers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This annual participation reinforces BSDT's commitment to connecting students with the real-world design industry and providing exposure to the latest trends and practices.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-rose-100 to-purple-100 dark:from-rose-900/20 dark:to-purple-900/20 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Palette className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">DESIGNURU</h3>
                    <p className="text-lg font-semibold text-muted-foreground">25th Edition</p>
                  </div>
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
                  <div className="w-14 h-14 bg-rose-500/10 rounded-full flex items-center justify-center mb-4">
                    <Palette className="w-7 h-7 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Student Exhibitions</h3>
                  <p className="text-muted-foreground text-sm">
                    BSDT students showcased their interior design and architecture projects to industry professionals and peers.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Panel Discussions</h3>
                  <p className="text-muted-foreground text-sm">
                    Engaging sessions with renowned architects and designers discussing the future of design in India.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-pink-500/10 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-7 h-7 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Workshops</h3>
                  <p className="text-muted-foreground text-sm">
                    Hands-on learning experiences covering sustainable design, material innovation, and digital tools.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Networking</h3>
                  <p className="text-muted-foreground text-sm">
                    Students connected with industry leaders, potential employers, and fellow design enthusiasts.
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
                Moments from BSDT's participation at Designuru 2025 - exhibitions, presentations, and celebrations.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
          <section className="py-16 md:py-24 bg-gradient-to-br from-rose-600 to-purple-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Event Details
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">11th - 14th December, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">Bangalore, Karnataka</span>
                </div>
              </div>

              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Interested in learning more about BSDT's design programs and industry exposure opportunities?
              </p>
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-white/90 font-semibold px-8 py-6 text-lg"
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

export default Designuru2025;