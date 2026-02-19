
import React, { useState } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Map, Briefcase, Clock, Award, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const offCampusGalleries = [
  {
    title: "Bangalore Palace Visit",
    photos: [
      { src: "/images/off-campus/bangalore-palace-1.jpg", alt: "Bangalore Palace visit - students exploring gothic archway interior" },
      { src: "/images/off-campus/bangalore-palace-2.jpg", alt: "Bangalore Palace visit - guided tour of ornate wooden doorways" },
      { src: "/images/off-campus/bangalore-palace-3.jpg", alt: "Bangalore Palace visit - studying heritage architecture and artwork" },
      { src: "/images/off-campus/bangalore-palace-4.jpg", alt: "Bangalore Palace visit - group photo at the palace courtyard" },
      { src: "/images/off-campus/bangalore-palace-5.jpg", alt: "Bangalore Palace visit - walking through decorated corridors" },
      { src: "/images/off-campus/bangalore-palace-6.jpg", alt: "Bangalore Palace visit - examining intricate wall patterns and chandeliers" },
      { src: "/images/off-campus/bangalore-palace-7.jpg", alt: "Bangalore Palace visit - group photo in front of the palace" },
    ],
  },
  {
    title: "Bangalore Circus",
    photos: [
      { src: "/images/off-campus/bangalore-circus-1.jpg", alt: "Bangalore Circus visit - students gathering in colorful creative space" },
      { src: "/images/off-campus/bangalore-circus-2.jpg", alt: "Bangalore Circus visit - group photo with metal sculpture installation" },
      { src: "/images/off-campus/bangalore-circus-3.jpg", alt: "Bangalore Circus visit - exploring upcycled interior design elements" },
      { src: "/images/off-campus/bangalore-circus-4.jpg", alt: "Bangalore Circus visit - students viewing recycled art installations" },
      { src: "/images/off-campus/bangalore-circus-5.jpg", alt: "Bangalore Circus visit - touring eclectic seating and decor area" },
      { src: "/images/off-campus/bangalore-circus-6.jpg", alt: "Bangalore Circus visit - guided presentation in creative warehouse" },
      { src: "/images/off-campus/bangalore-circus-7.jpg", alt: "Bangalore Circus visit - exploring repurposed furniture and fixtures" },
      { src: "/images/off-campus/bangalore-circus-8.jpg", alt: "Bangalore Circus visit - studying retro-themed upcycled interiors" },
    ],
  },
  {
    title: "Channapatna Toy Factory",
    photos: [
      { src: "/images/off-campus/channapatna-toy-1.jpg", alt: "Channapatna Toy Factory visit - students interacting with artisans at the workshop" },
      { src: "/images/off-campus/channapatna-toy-2.jpg", alt: "Channapatna Toy Factory visit - examining lacquerware turning process" },
      { src: "/images/off-campus/channapatna-toy-3.jpg", alt: "Channapatna Toy Factory visit - student trying wood turning on lathe" },
      { src: "/images/off-campus/channapatna-toy-4.jpg", alt: "Channapatna Toy Factory visit - student showcasing handcrafted lacquer bead" },
      { src: "/images/off-campus/channapatna-toy-5.jpg", alt: "Channapatna Toy Factory visit - guided tour of factory machinery" },
      { src: "/images/off-campus/channapatna-toy-6.jpg", alt: "Channapatna Toy Factory visit - observing artisans at wood turning stations" },
      { src: "/images/off-campus/channapatna-toy-7.jpg", alt: "Channapatna Toy Factory visit - students documenting craft demonstration" },
    ],
  },
];

const allPhotos = offCampusGalleries.flatMap(g => g.photos);

export const OffCampusSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null);
  const goToNext = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % allPhotos.length : null);

  return (
    <section id="off-campus" className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">REAL-WORLD EDUCATION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Off-Campus Learning Experiences
            </h2>
            <p className="mt-4 text-foreground/70">
              We take education beyond the classroom through immersive off-campus learning experiences that connect theory with real-world applications.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Map className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Industry Immersion Programs</h3>
                  <p className="text-foreground/70">
                    Students spend time in professional settings, observing workflows, understanding organizational structures, and experiencing industry environments firsthand.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Briefcase className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Design Exhibitions & Conferences</h3>
                  <p className="text-foreground/70">
                    Regular visits to professional exhibitions, trade shows, and conferences expose students to current industry trends, innovations, and networking opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Clock className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">Community Engagement Projects</h3>
                  <p className="text-foreground/70">
                    Students work on real projects for non-profits and community organizations, applying their skills to create meaningful solutions while developing social responsibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                  <Award className="w-5 h-5 text-bsd-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-2">International Design Tours</h3>
                  <p className="text-foreground/70">
                    Select opportunities for international exposure through guided tours to global design hubs, providing cross-cultural perspectives and global industry insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Off-Campus Gallery */}
        <RevealSection delay={200}>
          <div className="mb-8">
            {activeGallery === null ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(showAll ? offCampusGalleries : offCampusGalleries.slice(0, 3)).map((gallery, gIndex) => (
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
                {!showAll && offCampusGalleries.length > 3 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAll(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-bsd-orange text-white rounded-full font-medium hover:bg-bsd-orange/90 transition-colors"
                    >
                      View More ({offCampusGalleries.length - 3} more)
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
                  Back to all experiences
                </button>
                <h4 className="text-xl font-semibold text-bsd-gray mb-4">{offCampusGalleries[activeGallery].title}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {offCampusGalleries[activeGallery].photos.map((photo, index) => {
                    const globalOffset = offCampusGalleries.slice(0, activeGallery).reduce((acc, g) => acc + g.photos.length, 0);
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
