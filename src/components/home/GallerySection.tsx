
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
import { Play, GalleryHorizontal, Calendar, ChevronDown, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import testimonials data to use for Student Interviews
import { testimonials } from './TestimonialsSection';

// Gallery items array with the sports events images
const galleryItems: {
  type: "image" | "video";
  category: string;
  image?: string;
  videoId?: string;
  thumbnail?: string;
  caption: string;
  program?: string;
  student?: string;
  year?: string;
  semester?: string;
  description?: string;
  techniques?: string[];
}[] = [
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
  
  // Student Work images - Advanced realistic projects from 9 undergraduate programs
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/8f82b7d2-5ef6-48f1-99e0-7ad31d4b24dc.png",
    caption: "Advanced architectural visualization of sustainable urban housing complex",
    program: "B.Des Architectural Design",
    student: "Gokul Krishnan",
    year: "2024",
    semester: "6th Semester",
    description: "A comprehensive urban housing project showcasing sustainable design principles with modular construction, energy-efficient systems, and community-centered planning. The project demonstrates advanced understanding of contemporary architectural practice.",
    techniques: ["Sustainable Design", "Modular Construction", "Energy Efficiency", "Urban Planning"]
  },
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/fb8a4f76-a8b9-4bc8-ac63-81fb9267d4eb.png",
    caption: "Professional law firm interior design with sophisticated spatial planning",
    program: "BVA Interior & Spatial Design",
    student: "Vidhi Pareek",
    year: "2024",
    semester: "6th Semester",
    description: "A sophisticated commercial interior design project for a law firm, featuring professional spatial planning, custom furniture design, and attention to lighting and acoustics. The project demonstrates mastery of commercial design principles.",
    techniques: ["Commercial Design", "Space Planning", "Custom Furniture", "Lighting Design"]
  },
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/d7bb8a42-1bb6-46c9-aa99-2b89caf61b9e.png",
    caption: "Innovative cozy cafe management game with detailed UI/UX design",
    program: "BVA Animation & Game Design",
    student: "Cael Williams",
    year: "2023",
    semester: "5th Semester",
    description: "A comprehensive game design project featuring character development, environmental storytelling, and intuitive gameplay mechanics. The project showcases advanced skills in game development, animation, and user experience design.",
    techniques: ["Game Development", "Character Animation", "UI/UX Design", "Environmental Design"]
  },
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/1209aced-ff30-4e52-9f50-18019f4e166a.png",
    caption: "Luxury retail space design with premium brand positioning",
    program: "BVA Interior & Spatial Design",
    student: "Sahana Kashyap",
    year: "2024",
    semester: "6th Semester",
    description: "An upscale retail design project that combines luxury aesthetics with functional retail strategies. The design emphasizes customer experience, brand identity, and spatial flow to create an immersive shopping environment.",
    techniques: ["Retail Design", "Brand Identity", "Customer Experience", "Luxury Aesthetics"]
  },
  {
    type: "image",
    category: "Student Work",
    image: "/lovable-uploads/a595961e-d33b-4b0c-b044-3587eb6bea13.png",
    caption: "Fantasy character design with detailed concept art and storytelling",
    program: "BVA Graphic & Communication Design",
    student: "Rahul Verma",
    year: "2023",
    semester: "4th Semester",
    description: "A comprehensive character design project featuring detailed concept art, character development, and visual storytelling. The work demonstrates advanced illustration skills and narrative design capabilities.",
    techniques: ["Character Design", "Concept Art", "Digital Illustration", "Visual Storytelling"]
  },
  
  // Student Work video
  {
    type: "video",
    category: "Student Work",
    videoId: "y9iyA-KGkAo",
    thumbnail: "https://img.youtube.com/vi/y9iyA-KGkAo/maxresdefault.jpg",
    caption: "Graphic Design Students Professional Portfolio Showcase",
    program: "BVA Graphic & Communication Design",
    student: "Multiple Students",
    year: "2024",
    description: "A comprehensive showcase of student work from the Graphic & Communication Design program, featuring branding projects, digital designs, and print communications that demonstrate professional-level skills.",
    techniques: ["Branding", "Digital Design", "Print Design", "Portfolio Development"]
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

// Updated categories without "All" option
const categories = ["Sports Events", "Campus Life", "Student Work", "Student Interviews"];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Sports Events");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedStudentWork, setExpandedStudentWork] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const handleImageClick = (imageSrc: string, caption: string) => {
    setSelectedImage({ src: imageSrc, caption });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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

  const toggleStudentWorkExpansion = (index: number) => {
    setExpandedStudentWork(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
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

    // Special handling for Student Work category with expandable format
    if (activeCategory === "Student Work") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const isExpanded = expandedStudentWork.includes(index);
            return (
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
                    {(item as any).program && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="bsdOrange" className="bg-bsd-orange/90 text-white px-2 py-1 text-xs">
                          {(item as any).program}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-bsd-gray mb-2">{item.caption}</h3>
                    {(item as any).student && (
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>By {(item as any).student}</span>
                        <span>{(item as any).year}</span>
                      </div>
                    )}
                    <Collapsible open={isExpanded} onOpenChange={() => toggleStudentWorkExpansion(index)}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-sm font-medium text-bsd-orange hover:text-bsd-orange/80 transition-colors">
                        <span>View More Details</span>
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isExpanded && "rotate-180")} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-3 mt-3">
                        {(item as any).description && (
                          <p className="text-sm text-gray-700">{(item as any).description}</p>
                        )}
                        {(item as any).semester && (
                          <p className="text-xs text-gray-500">{(item as any).semester}</p>
                        )}
                        {(item as any).techniques && (
                          <div className="flex flex-wrap gap-1">
                            {(item as any).techniques.map((technique: string, techIndex: number) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {technique}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="group relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (item.type === "image" && item.image) {
                handleImageClick(item.image, item.caption);
              } else if (item.type === "video" && item.videoId) {
                handleVideoClick(item.videoId);
              }
            }}
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
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
              From sports activities to creative showcases and student experiences, our campus life offers a perfect blend of academics and extracurricular activities.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
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
                            <img 
                              src={item.thumbnail} 
                              alt={item.caption} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
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
              <div className="grid grid-cols-4 gap-6 max-w-4xl">
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
                          <img 
                            src={item.thumbnail} 
                            alt={item.caption} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
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
        </RevealSection>
      </div>
    </section>
  );
};
