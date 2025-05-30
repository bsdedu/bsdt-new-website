
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
import { Play, GalleryHorizontal, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Import testimonials data to use for Student Interviews
import { testimonials } from './TestimonialsSection';

// Events data from UpcomingEventsSection
const eventsData = [
  {
    type: "image" as const,
    category: "Events & Activities",
    image: "/lovable-uploads/741db2ef-80d9-44dd-b7f0-cb1942734763.png",
    caption: "Open Day 2025 - March 29th, 2025 | 09:30 AM - 4:00 PM - Experience our creative campus, meet faculty and students, explore accommodations, engage with design experts, and join hands-on workshops at our Open Day!"
  },
  {
    type: "image" as const,
    category: "Events & Activities",
    image: "/lovable-uploads/5798432f-82b3-43e6-a5be-03af3cc31ea4.png",
    caption: "Designing Tomorrow: The Opportunities in Architecture & Interior Design - April 5th, 2025 | 11:00 AM onwards - Join our expert panel with Neha N Achar (Architect, AtkinsRealis) and Ar. Bhavna R (Assistant Professor) as they discuss career opportunities in design."
  }
];

// Gallery items array with the sports events images
const galleryItems: {
  type: "image" | "video";
  category: string;
  image?: string;
  videoId?: string;
  thumbnail?: string;
  caption: string;
}[] = [
  // Events & Activities
  ...eventsData,
  
  // Sports Events images
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
  },
  
  // Campus Life images (existing)
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/cdcb8556-cfb5-4124-be04-f0f32a8ce017.png",
    caption: "Students working together on a sculpture project in the studio space"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/752c7065-abd8-4827-a55b-d3af73684dbf.png",
    caption: "Design presentation with students reviewing a project poster"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/b0bd1350-1b3d-44a7-a043-b876650c169d.png",
    caption: "Student using VR headset for an immersive learning experience"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/a14f6c87-51d9-46f6-a691-d097e9dd9d7a.png",
    caption: "Student exploring virtual reality technology in the design lab"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/cfb45146-ec9d-434c-9b60-ee146c328146.png",
    caption: "Student focusing on detailed art project with painting supplies"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/e5c57c3a-3200-49fc-a10d-80ac615c7c0d.png",
    caption: "Students collaborating on architecture models in the design studio"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/7d078e54-32f9-4dcf-9af6-9717145d71b7.png",
    caption: "Faculty explaining architectural concepts during a corridor exhibition"
  },
  
  // New Campus Life images
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/326dbcf6-d2e7-4a16-b000-bbee15c0156c.png",
    caption: "Students chatting on the staircase with vibrant geometric wall art in the background"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/7f0d8281-1217-4666-99bc-deef062d59fc.png",
    caption: "Group of students having a discussion session in the campus courtyard"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/cf7871df-3c22-4504-ae9f-824fd6ec7804.png",
    caption: "Faculty explaining architectural design concepts to attentive students in the corridor"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/5aa8966b-7287-46b3-9b20-024ae41e5048.png",
    caption: "Student proudly displaying her geometric model structure with campus exhibition in background"
  },
  {
    type: "image",
    category: "Campus Life",
    image: "/lovable-uploads/cd3d39f9-b653-4797-bdd2-ac99084ae0ec.png",
    caption: "Live music performance at campus event with visual projection and enthusiastic audience"
  },
  
  // Student Work images
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/8428c2d9-4558-45fb-a678-619ad02f979b.png",
    caption: "Miniature architectural model with wooden chairs and natural materials"
  },
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/56b5b272-5d55-41f6-b960-9e4ad3058430.png",
    caption: "Interior design student model of a garage workshop with detailed components"
  },
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/307e4b93-21bc-4e6b-9ee4-096750278ace.png",
    caption: "Scale model of a bistro terrace with wooden tables and railings"
  },
  
  // Student Work video
  {
    type: "video",
    category: "Student Work",
    videoId: "y9iyA-KGkAo",
    thumbnail: "https://img.youtube.com/vi/y9iyA-KGkAo/maxresdefault.jpg",
    caption: "Graphic Design Students Showcase Reel"
  }
];

// Student Interview videos from testimonials
const studentInterviewItems = testimonials.map(testimonial => ({
  type: "video" as const,
  category: "Student Interviews",
  videoId: testimonial.videoId,
  thumbnail: `https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`,
  caption: `${testimonial.name} - ${testimonial.course}`
}));

// Combine the gallery items with student interviews
const allGalleryItems = [...galleryItems, ...studentInterviewItems];

// Updated categories to include Events & Activities
const categories = ["All", "Events & Activities", "Sports Events", "Campus Life", "Student Work", "Student Interviews"];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Events & Activities"]);

  // Group items by category and take only the first item from each category for the "All" tab
  const previewItems: Record<string, typeof allGalleryItems[0]> = {};
  
  // Get one representative item from each category
  allGalleryItems.forEach(item => {
    if (!previewItems[item.category]) {
      previewItems[item.category] = item;
    }
  });

  // Filter items for non-All tabs
  const filteredItems = activeCategory === "All" 
    ? [] // We'll handle the "All" tab differently 
    : allGalleryItems.filter(item => item.category === activeCategory);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Helper function to render gallery items in a grid or carousel
  const renderGalleryItems = (items: typeof allGalleryItems, isMobile = false) => {
    if (items.length === 0) {
      return (
        <div className="flex items-center justify-center p-8 border border-dashed border-gray-300 rounded-lg h-64">
          <p className="text-gray-500">No content available. Please upload new images.</p>
        </div>
      );
    }

    if (isMobile) {
      return (
        <Carousel className="w-full">
          <CarouselContent>
            {items.map((item, index) => (
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
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
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
    );
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
              From upcoming events and sports activities to creative showcases and student experiences, our campus life offers a perfect blend of academics and extracurricular activities.
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
            
            {/* Content for All tab - One item per category in a single row */}
            <TabsContent value="All" className="mt-0">
              {/* Mobile View - Carousel */}
              <div className="md:hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {Object.entries(previewItems).map(([category, item], index) => (
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
                              <div className="absolute top-3 left-3">
                                <Badge variant="bsdOrange" className="bg-bsd-orange/90 text-white px-2 py-1 text-xs">
                                  {category}
                                </Badge>
                              </div>
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

              {/* Desktop View - Centered Grid */}
              <div className="hidden md:block">
                <div className="flex justify-center">
                  <div className="grid grid-cols-5 gap-6 max-w-5xl">
                    {Object.entries(previewItems).map(([category, item], index) => (
                      <div key={index} className="group relative">
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
                            <div className="absolute top-3 left-3">
                              <Badge variant="bsdOrange" className="bg-bsd-orange/90 text-white px-2 py-1 text-xs">
                                {category}
                              </Badge>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Content for specific category tabs */}
            <TabsContent value={activeCategory} className="mt-0">
              {activeCategory !== "All" && (
                <>
                  {/* Mobile View: Carousel */}
                  <div className="md:hidden">
                    {renderGalleryItems(filteredItems, true)}
                  </div>

                  {/* Desktop View: Grid */}
                  <div className="hidden md:block">
                    {renderGalleryItems(filteredItems)}
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
