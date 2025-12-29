import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Presentation, Award, Users, Lightbulb, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  { src: "/lovable-uploads/end-sem-jury-1.jpg", alt: "Student presenting brand purpose and origin story" },
  { src: "/lovable-uploads/end-sem-jury-2.jpg", alt: "Logo sizing presentation for Woodys brand" },
  { src: "/lovable-uploads/end-sem-jury-3.jpg", alt: "Primary logo presentation for Dino Twist" },
  { src: "/lovable-uploads/end-sem-jury-4.jpg", alt: "Thematic poster presentation for Father, Son and Holywar" },
  { src: "/lovable-uploads/end-sem-jury-5.jpg", alt: "Title design presentation for Karnan" },
  { src: "/lovable-uploads/end-sem-jury-6.jpg", alt: "Case study overview presentation" },
  { src: "/lovable-uploads/end-sem-jury-7.jpg", alt: "The Living Kitchen project presentation" },
  { src: "/lovable-uploads/end-sem-jury-8.jpg", alt: "Architecture student presenting floor plans" },
  { src: "/lovable-uploads/end-sem-jury-9.jpg", alt: "Jury members reviewing architectural drawings" },
  { src: "/lovable-uploads/end-sem-jury-10.jpg", alt: "Students viewing project models and presentations" },
];

const EndSemJury = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  const goToNext = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);

  return (
    <>
      <Helmet>
        <title>End-Sem Jury 2025 | Bangalore School of Design & Technology</title>
        <meta name="description" content="BSDT's End Semester Jury 2025 - Students showcase their semester projects to industry experts and faculty. November 2025." />
        <meta name="keywords" content="BSDT End Sem Jury, design jury, student presentations, project showcase, design critique" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-20 md:py-32">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-xl font-medium mb-4 opacity-90">BSDT Academic</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  END-SEM JURY <br />
                  <span className="text-white/90">2025</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  Showcasing Student Excellence
                </p>
                <p className="text-lg md:text-xl opacity-90 mb-2">
                  November 2025
                </p>
                <p className="text-base md:text-lg opacity-80">
                  BSDT Campus
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
                    About <span className="text-bsd-orange">End-Sem Jury 2025</span>
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The End Semester Jury is a cornerstone of BSDT's academic calendar, where students present their semester-long projects to a panel of industry experts, visiting faculty, and internal mentors. It's a rigorous yet rewarding process that prepares students for real-world design critiques.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    From brand identity projects and UI/UX case studies to architectural floor plans and interior design models, students across all programs showcase their creative thinking, technical skills, and problem-solving abilities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The jury process emphasizes constructive feedback, professional presentation skills, and the ability to articulate design decisions - skills that are invaluable in any design career.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/end-sem-jury-10.jpg" 
                    alt="Students viewing project presentations" 
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
                Jury Highlights
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-violet-500/10 rounded-full flex items-center justify-center mb-4">
                    <Presentation className="w-7 h-7 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Project Presentations</h3>
                  <p className="text-muted-foreground text-sm">
                    Students present their work through digital slides, physical models, and live demonstrations.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Industry Jury</h3>
                  <p className="text-muted-foreground text-sm">
                    Expert panels from leading design firms provide professional feedback and industry insights.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-7 h-7 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Design Thinking</h3>
                  <p className="text-muted-foreground text-sm">
                    Projects demonstrate research, ideation, prototyping, and final execution across design disciplines.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Recognition</h3>
                  <p className="text-muted-foreground text-sm">
                    Outstanding projects receive special recognition and opportunities for portfolio showcases.
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
                Moments of creativity, presentation, and evaluation from BSDT End-Sem Jury 2025.
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
          <section className="py-16 md:py-24 bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Event Details
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">November 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">BSDT Campus</span>
                </div>
              </div>

              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Want to witness the creativity of our students? Schedule a visit to experience BSDT life firsthand.
              </p>
              <Button
                size="lg"
                className="bg-white text-violet-600 hover:bg-white/90 font-semibold px-8 py-6 text-lg"
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

export default EndSemJury;