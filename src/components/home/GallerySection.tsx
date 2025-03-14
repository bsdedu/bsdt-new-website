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

// Gallery items array with the sports events images
const galleryItems: {
  type: "image" | "video";
  category: string;
  image?: string;
  videoId?: string;
  thumbnail?: string;
  caption: string;
}[] = [
  {
    type: "image",
    category: "Sports Events",
    image: "/lovable-uploads/270f0f33-e625-4067-987a-39682c51de31.png",
    caption: "Football match on campus with students playing in yellow and blue jerseys"
  },
  {
    type: "image",
    category: "Sports Events",
    image: "/lovable-uploads/1cdeaa2b-5009-4a7d-b2fa-a912996acf79.png",
    caption: "Golden Claws team resting by the sidelines during a sports event"
  },
  {
    type: "image",
    category: "Sports Events",
    image: "/lovable-uploads/9ff3e25b-a93f-40fb-87ff-cd765e063b61.png",
    caption: "Sports team celebration with students and faculty after a victory"
  },
  {
    type: "image",
    category: "Sports Events",
    image: "/lovable-uploads/c0c5b503-eeb4-4331-ae7e-38ef5d9f2675.png",
    caption: "Basketball practice in the enclosed court with Crimson Blades players"
  },
  {
    type: "image",
    category: "Sports Events",
    image: "/lovable-uploads/c9727b90-962e-4b3e-be56-d9c05c7ddcbb.png",
    caption: "Students posing after a sports competition with medals"
  },
  {
    type: "image",
    category: "Sports Events",
    image: "/lovable-uploads/275a175a-0d92-43ee-b13d-136f76aa4f00.png",
    caption: "Basketball match between students in the outdoor court"
  }
];

// Keep the categories for tab structure
const categories = ["All", "Sports Events", "Campus Life", "Student Work", "Events", "Campus Tour", "Student Interviews"];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
              {filteredItems.length > 0 ? (
                <>
                  {/* Mobile View: Carousel */}
                  <div className="md:hidden">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {filteredItems.map((item, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card isHoverable className="overflow-hidden">
                                <div className="relative aspect-video overflow-hidden">
                                  {item.type === "image" ? (
                                    <img 
                                      src={item.image} 
                                      alt={item.caption} 
                                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                  ) : (
                                    <>
                                      <img 
                                        src={item.thumbnail} 
                                        alt={item.caption} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                      />
                                      <div 
                                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group"
                                        onClick={() => item.videoId && handleVideoClick(item.videoId)}
                                      >
                                        <div className="bg-white/90 rounded-full p-3 transition-transform duration-300 group-hover:scale-110">
                                          <Play className="h-8 w-8 text-bsd-orange" fill="currentColor" />
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                                <div className="p-4">
                                  <p className="text-sm text-gray-600">{item.caption}</p>
                                </div>
                              </Card>
                            </div>
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
                      <div 
                        key={index} 
                        className="group relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <Card isHoverable className="overflow-hidden h-full">
                          <div className="relative aspect-video overflow-hidden">
                            {item.type === "image" ? (
                              <img 
                                src={item.image} 
                                alt={item.caption} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <>
                                <img 
                                  src={item.thumbnail} 
                                  alt={item.caption} 
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div 
                                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                                  onClick={() => item.videoId && handleVideoClick(item.videoId)}
                                >
                                  <div className="bg-white/90 rounded-full p-3 transition-transform duration-300 group-hover:scale-110">
                                    <Play className="h-8 w-8 text-bsd-orange" fill="currentColor" />
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-600">{item.caption}</p>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Mobile View: Carousel - Show empty state */}
                  <div className="md:hidden">
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem>
                          <div className="flex items-center justify-center p-8 border border-dashed border-gray-300 rounded-lg h-64">
                            <p className="text-gray-500">No content available. Please upload new images.</p>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/80" />
                      <CarouselNext className="right-2 bg-white/80" />
                    </Carousel>
                  </div>

                  {/* Desktop View: Grid - Show empty state */}
                  <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="col-span-full flex items-center justify-center p-16 border border-dashed border-gray-300 rounded-lg">
                      <p className="text-gray-500">No content available. Please upload new images and videos for this section.</p>
                    </div>
                  </div>
                </>
              )}
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
