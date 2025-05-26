
import React, { useState, useEffect, useRef } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { KeyStats } from "./insights/KeyStats";
import { CareerGrowthChart } from "./insights/CareerGrowthChart";
import { PlacementStats } from "./insights/PlacementStats";

// Sample chart data in case dynamic import fails
const fallbackChartData = [
  { year: "2018", value: 65 },
  { year: "2019", value: 72 },
  { year: "2020", value: 78 },
  { year: "2021", value: 83 },
  { year: "2022", value: 89 },
  { year: "2023", value: 94 }
];

export const InfoGraphicsSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [chartData, setChartData] = useState<any[]>(fallbackChartData);
  const [chartKey, setChartKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const mounted = useRef(true);

  // Function to handle smooth scrolling to enquiry form section
  const scrollToEnquiryForm = () => {
    console.log("Attempting to scroll to #enquiry-form");
    const section = document.getElementById('enquiry-form');
    if (section) {
      console.log("Found enquiry form section, scrolling to it");
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header
        behavior: 'smooth',
      });
    } else {
      console.log("Enquiry form section not found");
    }
  };

  useEffect(() => {
    // Set component as mounted
    mounted.current = true;
    
    // Set a timeout to ensure the component is mounted before trying to animate
    const animateTimer = setTimeout(() => {
      if (mounted.current) {
        setAnimate(true);
      }
    }, 500);

    // Try to load chart data
    try {
      import('./insights/CareerGrowthChart')
        .then(module => {
          if (mounted.current && module.careerData) {
            setChartData(module.careerData);
            // Force chart to re-render with new data by changing key
            setChartKey(Date.now());
          }
        })
        .catch(error => {
          console.error("Failed to load career data:", error);
          // Use fallback data
          if (mounted.current) {
            setChartData(fallbackChartData);
            setChartKey(Date.now());
          }
        })
        .finally(() => {
          if (mounted.current) {
            setIsLoading(false);
          }
        });
    } catch (error) {
      console.error("Error importing chart data:", error);
      if (mounted.current) {
        setChartData(fallbackChartData);
        setIsLoading(false);
      }
    }

    // Set up intersection observer with delay to ensure DOM is ready
    const observerTimer = setTimeout(() => {
      if (!mounted.current) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && mounted.current) {
            setAnimate(true);
          }
        },
        { threshold: 0.1 }
      );

      const section = document.getElementById('career-growth-section');
      if (section) observer.observe(section);

      return () => {
        if (section) observer.unobserve(section);
      };
    }, 1000);

    // Clean up
    return () => {
      mounted.current = false;
      clearTimeout(animateTimer);
      clearTimeout(observerTimer);
    };
  }, []);

  return (
    <section id="insights" className="py-[30px]">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="bsdOrange" className="mb-4">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
              Making a Difference in Design Education
            </h2>
            <p className="mt-4 text-foreground/70">
              Our achievements reflect our commitment to excellence in design education and student success.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <KeyStats />
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            {!isLoading && (
              <CareerGrowthChart 
                key={chartKey} 
                animate={animate} 
                chartData={chartData} 
              />
            )}
            <PlacementStats />
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="text-center mt-8">
            <AnimatedButton 
              size="lg" 
              className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
              hoverEffect="glow"
              onClick={scrollToEnquiryForm}
            >
              Schedule a Career Counseling Session
            </AnimatedButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
