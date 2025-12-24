import React, { useEffect, useState, useCallback, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bengaluruNorthLogo from "@/assets/bengaluru-north-university-logo.png";
interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}
export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroSlides: HeroSlide[] = [{
    image: "/lovable-uploads/fc9c4875-4b4b-44a9-b8ad-3eb5db1ed2cc.png",
    title: "2026\nUG ADMISSIONS OPEN",
    subtitle: "Admissions Open 2026-27",
    description: "\"Your blueprint for a successful creative career.\""
  }, {
    image: "/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png",
    title: "Hybrid Diploma Programs",
    subtitle: "Learn From Anywhere",
    description: "Learn From Anywhere\nSatellite Partners In Delhi, Chhattisgarh, Coimbatore And Raipur"
  }, {
    image: "/lovable-uploads/0ae77c0c-8ef4-404c-abf0-bb90598dfbf4.png",
    title: "Learn from Industry Experts",
    subtitle: "International Mentorship",
    description: "Get mentored by world-class designers and industry professionals who bring real-world experience to your learning journey."
  }, {
    image: "/lovable-uploads/4825af86-9e9e-4ba0-9f35-6dc7889f93ad.png",
    title: "Celebrate Your Success",
    subtitle: "95% Placement Rate",
    description: "Join our legacy of successful graduates who are now leading designers at top companies worldwide."
  }];
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
  }, [heroSlides.length]);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay();
  };
  const goToPrevious = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
    startAutoPlay();
  };
  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    startAutoPlay();
  };
  useEffect(() => {
    setIsLoaded(true);
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoPlay]);
  const currentSlideData = heroSlides[currentSlide];
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => <div key={index} className={cn("absolute inset-0 transition-opacity duration-1000", index === currentSlide ? "opacity-100" : "opacity-0")}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>)}

      {/* Content Overlay - Right Side */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex justify-end">
            <div className={cn("max-w-xl bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10 transition-all duration-700", isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}>
              <span className="inline-block px-4 py-1.5 bg-bsd-orange text-white text-sm font-medium rounded-full mb-4">
                {currentSlideData.subtitle}
              </span>
              
              <h1 className="font-display font-bold text-white leading-tight mb-4">
                {currentSlide === 0 ? <>
                    <span className="block text-2xl md:text-3xl lg:text-4xl text-bsd-orange">2026</span>
                    <span className="block text-4xl md:text-5xl lg:text-6xl">UG ADMISSIONS OPEN</span>
                  </> : <span className="text-3xl md:text-4xl lg:text-5xl">{currentSlideData.title}</span>}
              </h1>
              
              <p className="text-lg text-white/80 mb-8">
                {currentSlideData.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" className="border-2 border-[#f5f5f0] bg-[#f5f5f0] text-black hover:bg-white hover:border-white transition-all duration-300 font-semibold px-8" onClick={() => window.open("https://apply.bsd.edu.in/", "_blank", "noopener noreferrer")}>
                  APPLY NOW
                </Button>
                <Button size="lg" className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-8" onClick={() => {
                const section = document.getElementById('programs');
                if (section) {
                  // If on Hybrid Diploma slide, trigger the diploma tab
                  if (currentSlide === 1) {
                    const diplomaTab = document.querySelector('[data-value="diploma"]') as HTMLButtonElement;
                    if (diplomaTab) {
                      diplomaTab.click();
                    }
                  }
                  window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}>
                  ​Learn more  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={goToPrevious} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={goToNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={cn("w-3 h-3 rounded-full transition-all duration-300", index === currentSlide ? "bg-bsd-orange w-8" : "bg-white/50 hover:bg-white/80")} aria-label={`Go to slide ${index + 1}`} />)}
      </div>

      {/* Affiliations Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-4 z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/70 hidden md:block">Affiliations & Academic Partnerships</p>
            <div className="flex items-center gap-6 lg:gap-10 w-full md:w-auto justify-center md:justify-end overflow-x-auto no-scrollbar">
              <div className="flex flex-col items-center justify-center flex-shrink-0">
                <img src={bengaluruNorthLogo} alt="Bengaluru North University Logo" className="h-8 md:h-10 object-contain" />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/lovable-uploads/f284706f-8b61-4bc4-a155-140c043df786.png" alt="College de Paris Logo" className="h-6 md:h-8 object-contain brightness-0 invert opacity-80" />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/lovable-uploads/c1b6a8e1-981e-4ce5-b0b1-cab0978b0556.png" alt="CRESTA Logo" className="h-5 md:h-6 object-contain brightness-0 invert opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};