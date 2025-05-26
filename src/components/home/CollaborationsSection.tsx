
import * as React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const CollaborationsSection: React.FC = () => {
  const partners: Partner[] = [
    { id: "1", name: "Twiggr", logo: "/lovable-uploads/ac1f506a-4d85-4320-843d-26861564a52c.png" },
    { id: "2", name: "Adithya Lamps", logo: "/lovable-uploads/e6cf28b5-a946-481a-bc77-6264ec56950a.png" },
    { id: "3", name: "Aura", logo: "/lovable-uploads/fb0f9a42-b665-42ed-a4f5-50557f6a5093.png" },
    { id: "4", name: "HMG Stones", logo: "/lovable-uploads/6810afa6-c47c-452d-9f55-a60ec77b7382.png" },
    { id: "5", name: "Le Roma Gardenia", logo: "/lovable-uploads/4618c0c6-c363-42fa-95d6-876943724e39.png" },
    { id: "6", name: "DEFA", logo: "/lovable-uploads/8b983b3f-fd59-44d3-b5cc-152eeffe62cd.png" },
    { id: "7", name: "Chhabria Tiles", logo: "/lovable-uploads/2e795579-a635-4a82-aad6-cd87ba1f0232.png" },
    { id: "8", name: "IIID", logo: "/lovable-uploads/eab37b09-9b31-4fe2-b26c-92bdf0d74782.png" },
    { id: "9", name: "Design Studio", logo: "/lovable-uploads/4816c26c-074c-48c3-a97f-1e9c7d5a02ca.png" },
    { id: "10", name: "Slate", logo: "/lovable-uploads/e717df8a-d41c-41e2-aead-5ec816cebd6e.png" },
    { id: "11", name: "Checkered Spaces", logo: "/lovable-uploads/d71fbd34-89ed-4cbd-a417-f5c33e220758.png" },
    { id: "12", name: "Pepperfry", logo: "/lovable-uploads/0e886da8-b0e1-4dbb-8363-0b9e4d393baf.png" },
    { id: "13", name: "Square Yards", logo: "/lovable-uploads/597a29dd-9caa-4efb-9cbe-f7d06d3104cc.png" },
    { id: "14", name: "Cognizant", logo: "/lovable-uploads/9c640781-a1d2-49e1-a459-0cce96593567.png" },
    { id: "15", name: "Everything Design", logo: "/lovable-uploads/9447a478-d6e3-4734-b52f-f61370534088.png" },
    { id: "16", name: "Thence", logo: "/lovable-uploads/19d9240e-3fb4-4ad7-9d67-26e04d384d74.png" },
    { id: "17", name: "Lollypop Design", logo: "/lovable-uploads/9c2c1fa3-d5a1-4a00-964d-96697da1bbeb.png" },
    { id: "18", name: "Studio Tale", logo: "/lovable-uploads/95442d0d-92a2-407b-8bf3-691152ab5174.png" },
    { id: "19", name: "Parallel Studios", logo: "/lovable-uploads/1cb9ba0e-e43a-41a3-be10-2df87a94d509.png" },
  ];

  return (
    <section id="collaborations" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-12">
            <Badge variant="bsdOrange" className="mb-2">
              Our Network
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              Collaborations, Placements & Internships
            </h2>
            <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
              We work with leading industry partners to provide our students with real-world experience and opportunities.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          {/* Mobile carousel (1 logo at a time) */}
          <div className="md:hidden">
            <Carousel 
              opts={{ loop: true, align: "center" }} 
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false }) as any]}
              className="w-full"
            >
              <CarouselContent>
                {partners.map((partner) => (
                  <CarouselItem key={partner.id} className="basis-full">
                    <div className="flex items-center justify-center h-28 p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-full w-auto object-contain max-h-24" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          {/* Desktop carousel (multiple logos at a time) */}
          <div className="hidden md:block">
            <Carousel 
              opts={{ loop: true, align: "center" }} 
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false }) as any]}
              className="w-full"
            >
              <CarouselContent>
                {partners.map((partner) => (
                  <CarouselItem key={partner.id} className="basis-1/5 md:basis-1/5 lg:basis-1/6">
                    <div className="flex items-center justify-center h-28 p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-full w-auto object-contain max-h-24" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
