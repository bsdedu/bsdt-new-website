
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';
import useEmblaCarousel from 'embla-carousel-react';

export const StudioHero: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false });

  const carouselImages = [
    {
      src: "/lovable-uploads/b543134a-e3bc-4567-8770-039c079c477b.png",
      alt: "Studio BSD Professional Workspace",
      caption: "A professional-grade studio environment that prepares students for industry success"
    },
    {
      src: "/lovable-uploads/918ba3b8-127b-49f0-b63b-6ef8a1ab1a92.png",
      alt: "Le Roma Residential Project",
      caption: "Contemporary architectural excellence showcased through our professional projects"
    },
    {
      src: "/lovable-uploads/cac01043-f439-47a5-b149-4f3671523b24.png",
      alt: "Mr. Shankar Prasad Residence",
      caption: "Innovative residential design combining traditional and contemporary elements"
    },
    {
      src: "/lovable-uploads/f123a461-0061-4939-b7ba-0d09d696b98c.png",
      alt: "Ranipet Residence",
      caption: "Sustainable design principles meeting modern living requirements"
    }
  ];

  return (
    <section className="relative pt-24 pb-16 md:pb-20 bg-bsd-light-gray overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bsd-orange/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-bsd-gray/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <RevealSection>
            <div className="space-y-6">
              <Badge variant="bsdOrange" className="mb-2">THE CREATIVE POWERHOUSE</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray leading-tight">
                Studio BSD: Where Education Meets Professional Experience
              </h1>
              <p className="text-lg text-foreground/80">
                A professional design studio nestled within our campus that offers students hands-on industry experience, mentorship from professionals, and opportunities to work on real-world projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <AnimatedButton asChild>
                  <a href="#enquiry-form" className="hover:no-underline">Schedule a Visit</a>
                </AnimatedButton>
                <AnimatedButton variant="outline" asChild>
                  <a href="#studio-projects" className="hover:no-underline">View Projects</a>
                </AnimatedButton>
              </div>
            </div>
          </RevealSection>

          <RevealSection direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                      <div className="relative w-full h-[500px]">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-0 left-0 p-6">
                            <p className="text-white font-medium text-lg">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Carousel indicators */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <div key={index} className="w-2 h-2 rounded-full bg-white/50"></div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
