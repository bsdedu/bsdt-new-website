import React, { useEffect, useState, useCallback, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bengaluruNorthLogo from "@/assets/bengaluru-north-university-logo.png";
import electiveHero from "@/assets/advantage-electives.jpg";
import designIqHero from "@/assets/quiz/design-iq-hero.jpg";
interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}
export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroSlides: HeroSlide[] = [{
    image: "/lovable-uploads/0ae77c0c-8ef4-404c-abf0-bb90598dfbf4.png",
    title: "Hybrid Diploma Programs",
    subtitle: "Learn From Anywhere",
    description: "Learn From Anywhere\nSatellite Partners In Delhi, Raipur, And Coimbatore"
  }, {
    image: "/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png",
    title: "Student Spotlight",
    subtitle: "Celebrating Creativity",
    description: "Explore exceptional student works across design disciplines. See how our students turn creative visions into stunning portfolios."
  }, {
    image: electiveHero,
    title: "Skill-Enhancing Electives",
    subtitle: "Industry-Ready Skills",
    description: "Two mandatory certificate courses embedded in the UG curriculum — bridging academic foundations with real-world industry practice."
  }, {
    image: designIqHero,
    title: "Test Your Design IQ",
    subtitle: "Interactive Quiz",
    description: "Think you know design? Take our quick 10-question quiz and discover your Design IQ score."
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
                <span className="text-3xl md:text-4xl lg:text-5xl whitespace-pre-line">{currentSlideData.title}</span>
              </h1>

              
              <p className="text-lg text-white/80 mb-6">
                {currentSlideData.description}
              </p>


              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" className="border-2 border-[#f5f5f0] bg-[#f5f5f0] text-black hover:bg-white hover:border-white transition-all duration-300 font-semibold px-8" onClick={() => {
                  window.open("https://apply.bsd.edu.in/", "_blank", "noopener noreferrer");
                }}>
                  APPLY NOW
                </Button>
                <Button size="lg" className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-8" onClick={() => {
                  if (currentSlide === 2) { window.location.href = "/student-spotlight"; return; }
                  if (currentSlide === 3) { window.location.href = "/academics/skill-enhancing-electives"; return; }
                  if (currentSlide === 4) { window.location.href = "/design-iq"; return; }
                  const section = document.getElementById('programs');
                  if (section) {
                    if (currentSlide === 1) {
                      const diplomaTab = document.querySelector('[data-value="diploma"]') as HTMLButtonElement;
                      if (diplomaTab) diplomaTab.click();
                    }
                    window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
                  }
                }}>
                  {currentSlide === 2 ? "View Student Works" : currentSlide === 3 ? "Explore Electives" : currentSlide === 4 ? "Take the Quiz" : "Explore Programs"}
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