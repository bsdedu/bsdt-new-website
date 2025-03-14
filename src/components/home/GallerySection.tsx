
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
import { Card } from "../ui-elements/Card";
import { Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Gallery items with both images and videos
const galleryItems = [
  { 
    type: "image",
    category: "Sports Events", 
    image: "/lovable-uploads/fb6e3221-85ce-4641-97b4-0be26d1e5f1b.png",
    caption: "Football team celebration with faculty members"
  },
  { 
    type: "video",
    category: "Campus Tour", 
    videoId: "dQw4w9WgXcQ", // Example YouTube video ID
    thumbnail: "/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png",
    caption: "Virtual tour of our campus facilities"
  },
  { 
    type: "image",
    category: "Campus Life", 
    image: "/lovable-uploads/17f4f011-541d-4476-bbb2-0a9bbc508f0a.png",
    caption: "Students enjoying campus activities"
  },
  { 
    type: "video",
    category: "Student Interviews", 
    videoId: "jNQXAC9IVRw", // Example YouTube video ID
    thumbnail: "/lovable-uploads/9fcd3f44-3088-4f3c-a35c-176f9392e127.png",
    caption: "Student testimonials and experiences"
  },
  { 
    type: "image",
    category: "Student Work", 
    image: "/lovable-uploads/3baec177-d6ff-4f52-8cb8-1d0ba1fcdaa7.png",
    caption: "Design exhibition walkthrough"
  },
  { 
    type: "image",
    category: "Events", 
    image: "/lovable-uploads/6e8f285e-a6c2-4dba-9059-ca5b191bd897.png",
    caption: "Live music performance at campus event"
  },
  { 
    type: "image",
    category: "Sports Events", 
    image: "/lovable-uploads/fb4bedc7-ed6b-470b-82fe-e714ed5d7d6a.png",
    caption: "Team huddle during sports day"
  }
];

// Updated categories including new video categories
const categories = ["All", "Sports Events", "Campus Life", "Student Work", "Events", "Campus Tour", "Student Interviews"];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // For mobile view, show a carousel
  const isMobileView = () => {
    return window.innerWidth < 768;
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
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
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="flex flex-wrap justify-center gap-1 mb-12 bg-transparent h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="px-4 py-2 rounded-full text-sm data-[state=active]:bg-bsd-orange data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:bg-bsd-light-gray data-[state=inactive]:text-bsd-gray hover:bg-bsd-orange/20"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              {/* Mobile View: Carousel */}
              <div className="md:hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {filteredItems.map((item, index) => (
                      <CarouselItem key={index}>
                        <RevealSection delay={index * 80}>
                          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            {item.type === "image" ? (
                              <img 
                                src={item.image} 
                                alt={item.caption} 
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                              />
                            ) : (
                              <div 
                                className="relative w-full h-full cursor-pointer"
                                onClick={() => handleVideoClick(item.videoId)}
                              >
                                <img 
                                  src={item.thumbnail} 
                                  alt={item.caption} 
                                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-bsd-orange/90 rounded-full p-4 shadow-lg">
                                    <Play className="h-8 w-8 text-white" />
                                  </div>
                                </div>
                              </div>
                            )}
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
                      {item.type === "image" ? (
                        <img 
                          src={item.image} 
                          alt={item.caption} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div 
                          className="relative w-full h-full cursor-pointer"
                          onClick={() => handleVideoClick(item.videoId)}
                        >
                          <img 
                            src={item.thumbnail} 
                            alt={item.caption} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-bsd-orange/90 rounded-full p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                              <Play className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
                        hoveredIndex === index || item.type === "video" ? "opacity-100" : "opacity-0"
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
            </TabsContent>
          </Tabs>
        </RevealSection>

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

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <iframe 
              className="w-full h-full rounded-lg shadow-2xl"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              className="absolute -top-10 right-0 text-white hover:text-bsd-orange"
              onClick={closeVideoModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
