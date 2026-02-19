
import React, { useState } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const workshopGalleries = [
  {
    title: "Digital Illustration Masterclass",
    photos: [
      { src: "/lovable-uploads/digital-illustration-masterclass.jpg", alt: "Digital Illustration Masterclass - workshop session" },
    ],
  },
  {
    title: "Architectural Model Making",
    photos: [
      { src: "/lovable-uploads/architectural-model-making.jpg", alt: "Architectural Model Making - hands-on workshop" },
    ],
  },
  {
    title: "UI/UX Design Principles",
    photos: [
      { src: "/lovable-uploads/326dbcf6-d2e7-4a16-b000-bbee15c0156c.png", alt: "UI/UX Design Principles - interactive session" },
    ],
  },
  {
    title: "3D Animation Fundamentals",
    photos: [
      { src: "/lovable-uploads/3d-animation-fundamentals.jpg", alt: "3D Animation Fundamentals - workshop demo" },
    ],
  },
];

const allPhotos = workshopGalleries.flatMap(g => g.photos);

export const WorkshopsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null);
  const goToNext = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % allPhotos.length : null);

  return (
    <section id="workshops" className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">SPECIALIZED WORKSHOPS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Industry-Led Workshops
            </h2>
            <p className="mt-4 text-foreground/70">
              Our specialized workshops bring in industry experts to teach practical skills and cutting-edge techniques that complement theoretical knowledge.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="mb-8">
            {activeGallery === null ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(showAll ? workshopGalleries : workshopGalleries.slice(0, 3)).map((gallery, gIndex) => (
                    <div
                      key={gIndex}
                      className="relative rounded-2xl overflow-hidden cursor-pointer group h-64"
                      onClick={() => setActiveGallery(gIndex)}
                    >
                      <img
                        src={gallery.photos[0].src}
                        alt={gallery.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h4 className="text-white font-semibold text-lg">{gallery.title}</h4>
                        <p className="text-white/70 text-sm mt-1">{gallery.photos.length} Photos</p>
                      </div>
                    </div>
                  ))}
                </div>
                {!showAll && workshopGalleries.length > 3 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAll(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-bsd-orange text-white rounded-full font-medium hover:bg-bsd-orange/90 transition-colors"
                    >
                      View More ({workshopGalleries.length - 3} more)
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setActiveGallery(null)}
                  className="flex items-center gap-2 text-bsd-orange font-medium mb-6 hover:underline"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to all workshops
                </button>
                <h4 className="text-xl font-semibold text-bsd-gray mb-4">{workshopGalleries[activeGallery].title}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {workshopGalleries[activeGallery].photos.map((photo, index) => {
                    const globalOffset = workshopGalleries.slice(0, activeGallery).reduce((acc, g) => acc + g.photos.length, 0);
                    return (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                        onClick={() => openLightbox(globalOffset + index)}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Workshop Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium text-bsd-gray">Skill Enhancement</h4>
                <p className="text-sm text-foreground/70">
                  Students develop specialized technical skills that are directly applicable to their future careers, making them more competitive in the job market.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-bsd-gray">Network Building</h4>
                <p className="text-sm text-foreground/70">
                  Workshops provide valuable opportunities to connect with industry professionals, creating networks that can lead to internships and employment.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-bsd-gray">Portfolio Development</h4>
                <p className="text-sm text-foreground/70">
                  Workshop projects contribute to students' portfolios, showcasing their ability to apply specialized skills to real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <div className="relative w-full h-[80vh] flex items-center justify-center">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {allPhotos.length > 1 && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {selectedImage !== null && (
                <img
                  src={allPhotos[selectedImage].src}
                  alt={allPhotos[selectedImage].alt}
                  className="max-w-full max-h-full object-contain p-4"
                />
              )}

              {allPhotos.length > 1 && selectedImage !== null && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allPhotos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === selectedImage ? 'bg-white' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
