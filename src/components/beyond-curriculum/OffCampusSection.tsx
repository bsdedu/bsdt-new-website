
import React, { useState } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Map, Briefcase, Clock, Award, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const siteVisitGalleries = [
  {
    title: "Bachelor's Pad",
    photos: [
      { src: "/images/site-visits/bachelors-pad-1.jpg", alt: "Bachelor's Pad site visit - living room walkthrough" },
      { src: "/images/site-visits/bachelors-pad-2.jpg", alt: "Bachelor's Pad site visit - design elements discussion" },
      { src: "/images/site-visits/bachelors-pad-3.jpg", alt: "Bachelor's Pad site visit - bedroom design review" },
      { src: "/images/site-visits/bachelors-pad-4.jpg", alt: "Bachelor's Pad site visit - outdoor area tour" },
    ],
  },
  {
    title: "Bodycraft Case Study",
    photos: [
      { src: "/images/site-visits/bodycraft-1.jpg", alt: "Bodycraft case study - salon station area" },
      { src: "/images/site-visits/bodycraft-2.jpg", alt: "Bodycraft case study - interior lounge and decor" },
      { src: "/images/site-visits/bodycraft-3.jpg", alt: "Bodycraft case study - treatment room design" },
      { src: "/images/site-visits/bodycraft-4.jpg", alt: "Bodycraft case study - reception and lobby" },
    ],
  },
  {
    title: "Brick & Timber Factory Visit",
    photos: [
      { src: "/images/site-visits/brick-factory-1.jpg", alt: "Brick & timber factory visit - group photo" },
      { src: "/images/site-visits/brick-factory-2.jpg", alt: "Brick & timber factory visit - brick making process" },
      { src: "/images/site-visits/brick-factory-3.jpg", alt: "Brick & timber factory visit - outdoor discussion" },
      { src: "/images/site-visits/brick-factory-4.jpg", alt: "Brick & timber factory visit - handmade brick crafting" },
      { src: "/images/site-visits/brick-factory-5.jpg", alt: "Brick & timber factory visit - timber planing machine" },
      { src: "/images/site-visits/brick-factory-6.jpg", alt: "Brick & timber factory visit - factory floor tour" },
      { src: "/images/site-visits/brick-factory-7.jpg", alt: "Brick & timber factory visit - wood processing" },
      { src: "/images/site-visits/brick-factory-8.jpg", alt: "Brick & timber factory visit - warehouse walkthrough" },
    ],
  },
  {
    title: "Canara Prints",
    photos: [
      { src: "/images/site-visits/canara-prints-1.jpg", alt: "Canara Prints visit - print production review" },
      { src: "/images/site-visits/canara-prints-2.jpg", alt: "Canara Prints visit - pre-press briefing" },
      { src: "/images/site-visits/canara-prints-3.jpg", alt: "Canara Prints visit - offset printing machines" },
      { src: "/images/site-visits/canara-prints-4.jpg", alt: "Canara Prints visit - post-press finishing" },
    ],
  },
  {
    title: "Sublime Art Gallery",
    photos: [
      { src: "/images/site-visits/sublime-art-gallery-1.jpg", alt: "Sublime Art Gallery visit - guided tour of artwork exhibitions" },
      { src: "/images/site-visits/sublime-art-gallery-2.jpg", alt: "Sublime Art Gallery visit - students studying framed artwork" },
      { src: "/images/site-visits/sublime-art-gallery-3.jpg", alt: "Sublime Art Gallery visit - observing portrait paintings" },
      { src: "/images/site-visits/sublime-art-gallery-4.jpg", alt: "Sublime Art Gallery visit - exploring mixed media art collection" },
      { src: "/images/site-visits/sublime-art-gallery-5.jpg", alt: "Sublime Art Gallery visit - discussion with gallery curator" },
    ],
  },
  {
    title: "Cane Showroom",
    photos: [
      { src: "/images/site-visits/cane-showroom-1.jpg", alt: "Cane Showroom visit - artisan demonstrating cane weaving" },
      { src: "/images/site-visits/cane-showroom-2.jpg", alt: "Cane Showroom visit - students examining cane craftsmanship" },
      { src: "/images/site-visits/cane-showroom-3.jpg", alt: "Cane Showroom visit - handcrafted cane furniture display" },
      { src: "/images/site-visits/cane-showroom-4.jpg", alt: "Cane Showroom visit - group photo with cane furniture collection" },
      { src: "/images/site-visits/cane-showroom-5.jpg", alt: "Cane Showroom visit - students studying cane weaving techniques" },
    ],
  },
  {
    title: "Carpentry Studio",
    photos: [
      { src: "/images/site-visits/carpentry-studio-1.jpg", alt: "Carpentry studio visit - craftsman demonstrating wood joinery" },
      { src: "/images/site-visits/carpentry-studio-2.jpg", alt: "Carpentry studio visit - students learning from master carpenter" },
      { src: "/images/site-visits/carpentry-studio-3.jpg", alt: "Carpentry studio visit - workshop floor tour" },
      { src: "/images/site-visits/carpentry-studio-4.jpg", alt: "Carpentry studio visit - group photo with carpenter" },
    ],
  },
  {
    title: "Presidency Cafeteria",
    photos: [
      { src: "/images/site-visits/presidency-cafeteria-1.jpg", alt: "Presidency Cafeteria visit - group photo in cafeteria space" },
      { src: "/images/site-visits/presidency-cafeteria-2.jpg", alt: "Presidency Cafeteria visit - students studying furniture design" },
      { src: "/images/site-visits/presidency-cafeteria-3.jpg", alt: "Presidency Cafeteria visit - measuring seating structure" },
      { src: "/images/site-visits/presidency-cafeteria-4.jpg", alt: "Presidency Cafeteria visit - interior ceiling and seating layout" },
      { src: "/images/site-visits/presidency-cafeteria-5.jpg", alt: "Presidency Cafeteria visit - documenting metal framework details" },
    ],
  },
  {
    title: "Residential Site Visit",
    photos: [
      { src: "/images/site-visits/residential-1.jpg", alt: "Residential site visit - group photo at construction site" },
      { src: "/images/site-visits/residential-2.jpg", alt: "Residential site visit - interior work in progress" },
      { src: "/images/site-visits/residential-3.jpg", alt: "Residential site visit - contractor briefing" },
      { src: "/images/site-visits/residential-4.jpg", alt: "Residential site visit - material discussion" },
    ],
  },
  {
    title: "Residential Site Visit 2",
    photos: [
      { src: "/images/site-visits/residential-2-1.jpg", alt: "Residential site visit 2 - inspecting staircase stonework" },
      { src: "/images/site-visits/residential-2-2.jpg", alt: "Residential site visit 2 - wall tile installation review" },
      { src: "/images/site-visits/residential-2-3.jpg", alt: "Residential site visit 2 - exterior facade discussion" },
      { src: "/images/site-visits/residential-2-4.jpg", alt: "Residential site visit 2 - staircase construction walkthrough" },
      { src: "/images/site-visits/residential-2-5.jpg", alt: "Residential site visit 2 - terrace flooring inspection" },
    ],
  },
];

// Flatten all photos for lightbox navigation
const allPhotos = siteVisitGalleries.flatMap(g => g.photos);

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

        <RevealSection delay={200}>
          <div className="mb-8">
            
            
            {activeGallery === null ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(showAll ? siteVisitGalleries : siteVisitGalleries.slice(0, 3)).map((gallery, gIndex) => {
                    const actualIndex = showAll ? gIndex : gIndex;
                    return (
                      <div
                        key={gIndex}
                        className="relative rounded-2xl overflow-hidden cursor-pointer group h-64"
                        onClick={() => setActiveGallery(showAll ? gIndex : gIndex)}
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
                    );
                  })}
                </div>
                {!showAll && siteVisitGalleries.length > 3 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAll(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-bsd-orange text-white rounded-full font-medium hover:bg-bsd-orange/90 transition-colors"
                    >
                      View More ({siteVisitGalleries.length - 3} more)
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
                  Back to all visits
                </button>
                <h4 className="text-xl font-semibold text-bsd-gray mb-4">{siteVisitGalleries[activeGallery].title}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {siteVisitGalleries[activeGallery].photos.map((photo, index) => {
                    const globalOffset = siteVisitGalleries.slice(0, activeGallery).reduce((acc, g) => acc + g.photos.length, 0);
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
