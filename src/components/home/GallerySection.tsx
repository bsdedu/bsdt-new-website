
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Gallery images with real content
const galleryItems = [
  { 
    category: "Sports Events", 
    image: "/lovable-uploads/fb6e3221-85ce-4641-97b4-0be26d1e5f1b.png",
    caption: "Football team celebration with faculty members"
  },
  { 
    category: "Sports Events", 
    image: "/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png",
    caption: "Basketball match between students"
  },
  { 
    category: "Campus Life", 
    image: "/lovable-uploads/17f4f011-541d-4476-bbb2-0a9bbc508f0a.png",
    caption: "Students enjoying campus activities"
  },
  { 
    category: "Campus Life", 
    image: "/lovable-uploads/9fcd3f44-3088-4f3c-a35c-176f9392e127.png",
    caption: "Students relaxing between classes"
  },
  { 
    category: "Student Work", 
    image: "/lovable-uploads/3baec177-d6ff-4f52-8cb8-1d0ba1fcdaa7.png",
    caption: "Design exhibition walkthrough"
  },
  { 
    category: "Events", 
    image: "/lovable-uploads/6e8f285e-a6c2-4dba-9059-ca5b191bd897.png",
    caption: "Live music performance at campus event"
  },
  { 
    category: "Sports Events", 
    image: "/lovable-uploads/fb4bedc7-ed6b-470b-82fe-e714ed5d7d6a.png",
    caption: "Team huddle during sports day"
  }
];

const categories = ["All", "Sports Events", "Campus Life", "Student Work", "Events"];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // For mobile view, show a carousel
  const isMobileView = () => {
    return window.innerWidth < 768;
  };

  return (
    <section id="campus-life" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              Campus Life
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
              Experience Our Vibrant Campus
            </h2>
            <p className="mt-4 text-foreground/70">
              From sports events to creative showcases, our campus life offers a perfect blend of academics and extracurricular activities.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-300",
                  activeCategory === category
                    ? "bg-bsd-orange text-white shadow-sm"
                    : "bg-bsd-light-gray hover:bg-bsd-orange/20 text-bsd-gray hover:text-bsd-gray"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealSection>

        {/* Mobile View: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredItems.map((item, index) => (
                <CarouselItem key={index}>
                  <RevealSection delay={index * 80}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <img 
                        src={item.image} 
                        alt={item.caption} 
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="inline-block px-2 py-1 text-xs bg-bsd-orange/80 text-white rounded-full mb-2">
                            {item.category}
                          </span>
                          <p className="text-white text-sm font-medium">{item.caption}</p>
                        </div>
                      </div>
                    </div>
                  </RevealSection>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80" />
            <CarouselNext className="right-2 bg-white/80" />
          </Carousel>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <RevealSection key={index} delay={index * 80}>
              <div 
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-border/50"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                )}>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-2 py-1 text-xs bg-bsd-orange/80 text-white rounded-full mb-2">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-medium">{item.caption}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={300}>
          <div className="mt-16 text-center">
            <a 
              href="#" 
              className="inline-flex items-center text-sm font-medium text-bsd-orange hover:text-bsd-orange/80 transition-colors"
            >
              <span className="border-b border-current transition-all duration-300 hover:pb-1">
                View Full Gallery
              </span>
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
