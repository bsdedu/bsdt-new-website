
import React, { useState } from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Building, Hammer, PenTool, Cpu, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface SiteVisitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const SiteVisitCard: React.FC<SiteVisitCardProps> = ({ title, description, icon, image }) => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="aspect-video w-full relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-2">{title}</h3>
            <p className="text-foreground/70 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

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
  {
    title: "Ceramique Tile Showroom",
    photos: [
      { src: "/images/site-visits/ceramique-tile-1.jpg", alt: "Ceramique Tile Showroom visit - students learning about tile varieties" },
      { src: "/images/site-visits/ceramique-tile-2.jpg", alt: "Ceramique Tile Showroom visit - studying decorative tile patterns" },
      { src: "/images/site-visits/ceramique-tile-3.jpg", alt: "Ceramique Tile Showroom visit - showroom tour with guide" },
      { src: "/images/site-visits/ceramique-tile-4.jpg", alt: "Ceramique Tile Showroom visit - exploring mosaic and artisan tiles" },
      { src: "/images/site-visits/ceramique-tile-5.jpg", alt: "Ceramique Tile Showroom visit - group photo at showroom" },
    ],
  },
  {
    title: "Outdoor Connections",
    photos: [
      { src: "/images/site-visits/outdoor-connections-1.jpg", alt: "Outdoor Connections visit - group photo at tropical outdoor furniture showroom" },
      { src: "/images/site-visits/outdoor-connections-2.jpg", alt: "Outdoor Connections visit - students exploring staircase and interior decor" },
      { src: "/images/site-visits/outdoor-connections-3.jpg", alt: "Outdoor Connections visit - outdoor dining and lounge area tour" },
      { src: "/images/site-visits/outdoor-connections-4.jpg", alt: "Outdoor Connections visit - indoor presentation and discussion" },
      { src: "/images/site-visits/outdoor-connections-5.jpg", alt: "Outdoor Connections visit - outdoor living space walkthrough" },
    ],
  },
];

const allPhotos = siteVisitGalleries.flatMap(g => g.photos);

export const SiteVisitsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const siteVisits: SiteVisitCardProps[] = [
    {
      title: "Architectural Landmarks",
      description: "Visits to significant architectural sites where students analyze design principles, structural solutions, and contextual integration of buildings.",
      icon: <Building className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/architectural-landmarks-visit.jpg"
    },
    {
      title: "Manufacturing Facilities",
      description: "Exploration of production facilities to understand materials, manufacturing processes, and quality control systems for product design.",
      icon: <Hammer className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/manufacturing-facilities-visit.jpg"
    },
    {
      title: "Design Studios",
      description: "Tours of professional design studios where students observe workflow organization, client interaction, and creative collaboration in action.",
      icon: <PenTool className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/design-studios-visit.jpg"
    },
    {
      title: "Technology Hubs",
      description: "Visits to technology centers and innovation hubs where students witness cutting-edge applications of digital design and development.",
      icon: <Cpu className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/technology-hubs-visit.jpg"
    }
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null);
  const goToNext = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % allPhotos.length : null);

  return (
    <section id="site-visits" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FIELD LEARNING</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Educational Site Visits
            </h2>
            <p className="mt-4 text-foreground/70">
              Our carefully curated site visits provide students with direct exposure to professional environments, innovative projects, and industry best practices.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteVisits.map((visit, index) => (
              <SiteVisitCard key={index} {...visit} />
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-bsd-light-gray rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Site Visit Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Pre-Visit Preparation</h4>
                      <p className="text-sm text-foreground/70 mt-1">Students research the site and prepare specific learning objectives and questions to maximize the educational value of the visit.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Guided Exploration</h4>
                      <p className="text-sm text-foreground/70 mt-1">Faculty members and industry experts guide students through the site, highlighting key features and explaining relevant processes and principles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Interactive Sessions</h4>
                      <p className="text-sm text-foreground/70 mt-1">Q&A sessions with professionals at the site allow students to gain deeper insights and understand practical applications of their studies.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Reflective Analysis</h4>
                      <p className="text-sm text-foreground/70 mt-1">Following the visit, students document their observations, analyze what they've learned, and apply these insights to their coursework.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src="/lovable-uploads/site-visit-process.jpg" 
                  alt="Students on site visit" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Learning through direct observation and professional interaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Site Visit Gallery */}
        <RevealSection delay={300}>
          <div className="mt-12">
            {activeGallery === null ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(showAll ? siteVisitGalleries : siteVisitGalleries.slice(0, 3)).map((gallery, gIndex) => (
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
