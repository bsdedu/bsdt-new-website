
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Placeholder for gallery images
const galleryItems = [
  { category: "Design Projects", placeholder: "Design Project" },
  { category: "Campus Life", placeholder: "Campus Event" },
  { category: "Student Work", placeholder: "Student Portfolio" },
  { category: "Facilities", placeholder: "Design Studio" },
  { category: "Events", placeholder: "Industry Workshop" },
  { category: "Exhibitions", placeholder: "Student Exhibition" },
];

const categories = ["All", "Design Projects", "Campus Life", "Student Work", "Facilities", "Events"];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              Gallery
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
              Showcasing Our Creative Environment
            </h2>
            <p className="mt-4 text-foreground/70">
              Explore our vibrant campus life, student projects, and creative spaces that foster innovation and design excellence.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <RevealSection key={index} delay={index * 80}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-bsd-light-gray to-white transition-transform duration-500 group-hover:scale-105"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-sm text-bsd-gray/80 mb-2">{item.placeholder}</p>
                    <div className="w-12 h-0.5 bg-bsd-orange/30 mx-auto"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bsd-gray/80 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-white text-sm">{item.category}</p>
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
