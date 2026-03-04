
import React, { useState } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ihsImg1 from '@/assets/guest-lecture-ihs-1.jpg';
import ihsImg2 from '@/assets/guest-lecture-ihs-2.jpg';
import ihsImg3 from '@/assets/guest-lecture-ihs-3.jpg';
import bambooImg1 from '@/assets/guest-lecture-bamboo-1.jpg';
import bambooImg2 from '@/assets/guest-lecture-bamboo-2.jpg';
import bambooImg3 from '@/assets/guest-lecture-bamboo-3.jpg';
import bambooImg4 from '@/assets/guest-lecture-bamboo-4.jpg';
import bambooImg5 from '@/assets/guest-lecture-bamboo-5.jpg';
import bambooImg6 from '@/assets/guest-lecture-bamboo-6.jpg';
import bambooImg7 from '@/assets/guest-lecture-bamboo-7.jpg';
import bambooImg8 from '@/assets/guest-lecture-bamboo-8.jpg';
import bambooImg9 from '@/assets/guest-lecture-bamboo-9.jpg';
import bambooImg10 from '@/assets/guest-lecture-bamboo-10.jpg';
import landscapeImg1 from '@/assets/guest-lecture-landscape-1.jpg';
import landscapeImg2 from '@/assets/guest-lecture-landscape-2.jpg';
import landscapeImg3 from '@/assets/guest-lecture-landscape-3.jpg';
import landscapeImg4 from '@/assets/guest-lecture-landscape-4.jpg';
import landscapeImg5 from '@/assets/guest-lecture-landscape-5.jpg';
import landscapeImg6 from '@/assets/guest-lecture-landscape-6.jpg';
import landscapeImg7 from '@/assets/guest-lecture-landscape-7.jpg';
import landscapeImg8 from '@/assets/guest-lecture-landscape-8.jpg';
import lightingImg1 from '@/assets/guest-lecture-lighting-1.jpg';
import lightingImg2 from '@/assets/guest-lecture-lighting-2.jpg';
import lightingImg3 from '@/assets/guest-lecture-lighting-3.jpg';
import lightingImg4 from '@/assets/guest-lecture-lighting-4.jpg';
import lightingImg5 from '@/assets/guest-lecture-lighting-5.jpg';
import lightingImg6 from '@/assets/guest-lecture-lighting-6.jpg';

interface GuestLectureGallery {
  title: string;
  speaker: string;
  organization: string;
  date: string;
  photos: { src: string; alt: string }[];
}

const guestLectureGalleries: GuestLectureGallery[] = [
  {
    title: "Home Automation & Lighting Management Systems",
    speaker: "IHS Team",
    organization: "Legrand (IHS)",
    date: "July 29, 2022",
    photos: [
      { src: ihsImg1, alt: "IHS guest lecture - home automation presentation" },
      { src: ihsImg2, alt: "IHS guest lecture - lighting management demo" },
      { src: ihsImg3, alt: "IHS guest lecture - student interaction" },
    ],
  },
  {
    title: "Applications of Bamboo – Master Class",
    speaker: "Neelam Manjunath",
    organization: "Bamboo Design Expert",
    date: "August 13, 2022",
    photos: [
      { src: bambooImg1, alt: "Bamboo master class - session 1" },
      { src: bambooImg2, alt: "Bamboo master class - session 2" },
      { src: bambooImg3, alt: "Bamboo master class - session 3" },
      { src: bambooImg4, alt: "Bamboo master class - session 4" },
      { src: bambooImg5, alt: "Bamboo master class - session 5" },
      { src: bambooImg6, alt: "Bamboo master class - session 6" },
      { src: bambooImg7, alt: "Bamboo master class - session 7" },
      { src: bambooImg8, alt: "Bamboo master class - session 8" },
      { src: bambooImg9, alt: "Bamboo master class - session 9" },
      { src: bambooImg10, alt: "Bamboo master class - session 10" },
    ],
  },
  {
    title: "Interior Landscape – Outside as an Extension of the Home",
    speaker: "Dambol",
    organization: "Landscape Design Expert",
    date: "January 30, 2019",
    photos: [
      { src: landscapeImg1, alt: "Interior landscape lecture - session 1" },
      { src: landscapeImg2, alt: "Interior landscape lecture - session 2" },
      { src: landscapeImg3, alt: "Interior landscape lecture - session 3" },
      { src: landscapeImg4, alt: "Interior landscape lecture - session 4" },
      { src: landscapeImg5, alt: "Interior landscape lecture - session 5" },
      { src: landscapeImg6, alt: "Interior landscape lecture - session 6" },
      { src: landscapeImg7, alt: "Interior landscape lecture - session 7" },
      { src: landscapeImg8, alt: "Interior landscape lecture - session 8" },
    ],
  },
  {
    title: "Lighting Design & Technology",
    speaker: "Mr. Prabhu",
    organization: "ENDO Lighting",
    date: "January 22, 2020",
    photos: [
      { src: lightingImg1, alt: "Lighting design lecture - speaker interaction" },
      { src: lightingImg2, alt: "Lighting design lecture - ENDO presentation" },
      { src: lightingImg3, alt: "Lighting design lecture - students attending" },
      { src: lightingImg4, alt: "Lighting design lecture - classroom session" },
      { src: lightingImg5, alt: "Lighting design lecture - product showcase" },
      { src: lightingImg6, alt: "Lighting design lecture - ENDO LED overview" },
    ],
  },
];

const allPhotos = guestLectureGalleries.flatMap(g => g.photos);

export const GuestLecturesSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null);
  const goToNext = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % allPhotos.length : null);

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
          <div className="mb-8">
            {activeGallery === null ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(showAll ? guestLectureGalleries : guestLectureGalleries.slice(0, 3)).map((gallery, gIndex) => (
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
                        <p className="text-white/80 text-sm mt-1">{gallery.speaker}, {gallery.organization}</p>
                        <p className="text-white/60 text-xs mt-0.5">{gallery.date} · {gallery.photos.length} Photos</p>
                      </div>
                    </div>
                  ))}
                </div>
                {!showAll && guestLectureGalleries.length > 3 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAll(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-bsd-orange text-white rounded-full font-medium hover:bg-bsd-orange/90 transition-colors"
                    >
                      View More ({guestLectureGalleries.length - 3} more)
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
                  Back to all lectures
                </button>
                <h4 className="text-xl font-semibold text-bsd-gray mb-1">{guestLectureGalleries[activeGallery].title}</h4>
                <p className="text-sm text-foreground/60 mb-4">
                  {guestLectureGalleries[activeGallery].speaker}, {guestLectureGalleries[activeGallery].organization} · {guestLectureGalleries[activeGallery].date}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {guestLectureGalleries[activeGallery].photos.map((photo, index) => {
                    const globalOffset = guestLectureGalleries.slice(0, activeGallery).reduce((acc, g) => acc + g.photos.length, 0);
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
