import React, { useState } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface StudentWorkGalleryProps {
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    alt: "Interior design student project",
    caption: "Space Planning & Concept Development"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
    alt: "Fashion design studio work",
    caption: "Studio Workshop Sessions"
  },
  {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    alt: "UI/UX design prototype",
    caption: "Digital Prototyping & User Testing"
  },
  {
    src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    alt: "Graphic design project",
    caption: "Visual Communication Projects"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    alt: "Collaborative design session",
    caption: "Collaborative Learning Environment"
  },
  {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    alt: "Design thinking workshop",
    caption: "Hands-on Design Workshops"
  },
];

export const StudentWorkGallerySection: React.FC<StudentWorkGalleryProps> = ({
  title = "Students in Action",
  subtitle = "Glimpses from our classrooms, workshops, and student projects",
  images = defaultImages,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </RevealSection>

        {/* Masonry-style Grid */}
        <RevealSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => {
              // Vary heights for visual interest
              const isLarge = index === 0 || index === 3;
              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer rounded-xl overflow-hidden ${
                    isLarge ? 'row-span-2 h-[300px] md:h-[420px]' : 'h-[180px] md:h-[200px]'
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </RevealSection>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-none">
          <div className="relative">
            <img
              src={images[activeIndex]?.src}
              alt={images[activeIndex]?.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            {images[activeIndex]?.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-center">{images[activeIndex].caption}</p>
              </div>
            )}
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
