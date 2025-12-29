
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { CheckCircle, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const AboutSection: React.FC = () => {
  const [videoHovered, setVideoHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section id="about" className="bg-bsd-light-gray relative overflow-hidden py-0">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-bsd-orange/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 my-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection direction="right" scale={true}>
            <div className="space-y-4 mb-2">
              <Badge variant="bsdOrange">Campus Life</Badge>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray flex items-center gap-2">
                <Play className="w-6 h-6 text-bsd-orange" /> 
                Experience BSDT Campus Life
              </h3>
              <p className="text-foreground/70">Take a virtual tour of our vibrant campus and see what makes BSD the perfect place for your creative journey.</p>
            </div>
            <div 
              id="campus-life-video"
              className={`relative rounded-2xl overflow-hidden shadow-xl border border-border/30 mt-4 transition-transform duration-500 ${videoHovered ? 'scale-[1.02]' : ''}`}
              onMouseEnter={() => setVideoHovered(true)}
              onMouseLeave={() => setVideoHovered(false)}
            >
              <AspectRatio ratio={16 / 9}>
                <iframe src="https://www.youtube.com/embed/bWy4EH-B3tw" title="BSDT Campus Life Video" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </AspectRatio>

              {/* Play button overlay */}
              <div className={`absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-300 ${videoHovered ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-500 transform hover:scale-110">
                  <Play className="w-8 h-8 text-bsd-orange ml-1" />
                </div>
              </div>

              {/* Image decoration */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-bsd-orange/10 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bsd-gray/10 rounded-full blur-xl opacity-60"></div>
            </div>
          </RevealSection>

          <RevealSection direction="left" scale={true}>
            <div className="space-y-6 max-w-xl">
              <Badge variant="bsdOrange">
                About BSD
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
                A Legacy of Excellence in Design & Technology Education
              </h2>
              <p className="text-foreground/70">For over 8 years, BSDT has been at the forefront of design and technology education in India. Our innovative curriculum, industry partnerships, and state-of-the-art facilities create an environment where creativity and technical skills flourish.</p>

              <div className="space-y-3 pt-2">
                {["Industry-experienced faculty", "State-of-the-art labs and studios", "Strong industry connections", "Hands-on project-based learning"].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 p-2 rounded-md transition-all duration-300 ${activeFeature === index ? 'bg-white shadow-sm' : ''}`}
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-300 ${activeFeature === index ? 'text-bsd-orange' : 'text-bsd-orange/70'}`} />
                    <span className={`transition-colors duration-300 ${activeFeature === index ? 'text-foreground' : 'text-foreground/70'}`}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <AnimatedButton hoverEffect="glow">
                  Learn More About Us
                </AnimatedButton>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
