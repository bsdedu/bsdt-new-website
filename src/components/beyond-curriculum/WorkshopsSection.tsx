
import React, { useState } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const workshopGalleries = [
  {
    title: "Bamboo Workshop",
    photos: [
      { src: "/images/workshops/bamboo-1.jpg", alt: "Bamboo Workshop - instructor demonstrating bamboo selection" },
      { src: "/images/workshops/bamboo-2.jpg", alt: "Bamboo Workshop - student lifting bamboo pole" },
      { src: "/images/workshops/bamboo-3.jpg", alt: "Bamboo Workshop - numbered bamboo pieces laid out" },
      { src: "/images/workshops/bamboo-4.jpg", alt: "Bamboo Workshop - students crafting bamboo planter" },
      { src: "/images/workshops/bamboo-5.jpg", alt: "Bamboo Workshop - student wrapping coir rope on bamboo" },
      { src: "/images/workshops/bamboo-6.jpg", alt: "Bamboo Workshop - team tying bamboo pieces together" },
      { src: "/images/workshops/bamboo-7.jpg", alt: "Bamboo Workshop - students learning rope knotting techniques" },
      { src: "/images/workshops/bamboo-8.jpg", alt: "Bamboo Workshop - group assembling bamboo structure on floor" },
      { src: "/images/workshops/bamboo-9.jpg", alt: "Bamboo Workshop - collaborative bamboo construction" },
      { src: "/images/workshops/bamboo-10.jpg", alt: "Bamboo Workshop - installing bamboo panel on scaffolding" },
      { src: "/images/workshops/bamboo-11.jpg", alt: "Bamboo Workshop - mounting bamboo installation on wall" },
      { src: "/images/workshops/bamboo-12.jpg", alt: "Bamboo Workshop - students tying bamboo with coir rope outdoors" },
      { src: "/images/workshops/bamboo-13.jpg", alt: "Bamboo Workshop - assembled bamboo panel with rope binding" },
    ],
  },
  {
    title: "Bamboo Applications",
    photos: [
      { src: "/images/workshops/bamboo-app-1.jpg", alt: "Bamboo Applications - instructor presenting with bamboo products display" },
      { src: "/images/workshops/bamboo-app-2.jpg", alt: "Bamboo Applications - masterclass on bamboo applications with craft samples" },
      { src: "/images/workshops/bamboo-app-3.jpg", alt: "Bamboo Applications - classroom session with students" },
      { src: "/images/workshops/bamboo-app-4.jpg", alt: "Bamboo Applications - instructor interacting with students" },
      { src: "/images/workshops/bamboo-app-5.jpg", alt: "Bamboo Applications - students examining bamboo craft products" },
      { src: "/images/workshops/bamboo-app-6.jpg", alt: "Bamboo Applications - group viewing bamboo art pieces" },
    ],
  },
  {
    title: "Bonsai Dorjee Workshop",
    photos: [
      { src: "/images/workshops/bonsai-1.jpg", alt: "Bonsai Dorjee Workshop - students planting bonsai in ceramic pot" },
      { src: "/images/workshops/bonsai-2.jpg", alt: "Bonsai Dorjee Workshop - students working with plants and tools" },
      { src: "/images/workshops/bonsai-3.jpg", alt: "Bonsai Dorjee Workshop - full class session with bonsai plants" },
      { src: "/images/workshops/bonsai-4.jpg", alt: "Bonsai Dorjee Workshop - instructor Dorjee explaining techniques" },
      { src: "/images/workshops/bonsai-5.jpg", alt: "Bonsai Dorjee Workshop - Dorjee demonstrating bonsai shaping" },
      { src: "/images/workshops/bonsai-6.jpg", alt: "Bonsai Dorjee Workshop - finished bonsai tree with wire shaping" },
    ],
  },
  {
    title: "Bridge Building",
    photos: [
      { src: "/images/workshops/bridge-1.jpg", alt: "Bridge Building - popsicle stick truss structure" },
      { src: "/images/workshops/bridge-2.jpg", alt: "Bridge Building - students assembling bridge model" },
      { src: "/images/workshops/bridge-3.jpg", alt: "Bridge Building - testing bridge strength" },
      { src: "/images/workshops/bridge-4.jpg", alt: "Bridge Building - load testing with stone weight" },
      { src: "/images/workshops/bridge-5.jpg", alt: "Bridge Building - group load test with heavy stone" },
      { src: "/images/workshops/bridge-6.jpg", alt: "Bridge Building - class observing bridge stress test" },
      { src: "/images/workshops/bridge-7.jpg", alt: "Bridge Building - bridge holding concrete block" },
      { src: "/images/workshops/bridge-8.jpg", alt: "Bridge Building - bridge supporting brick and stone" },
      { src: "/images/workshops/bridge-9.jpg", alt: "Bridge Building - final load test with full class" },
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
