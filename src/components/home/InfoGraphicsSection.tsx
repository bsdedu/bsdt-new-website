
import React, { useState, useEffect } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { KeyStats } from "./insights/KeyStats";
import { CareerGrowthChart } from "./insights/CareerGrowthChart";
import { PlacementStats } from "./insights/PlacementStats";

export const InfoGraphicsSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [chartData, setChartData] = useState<any[]>([]);
  const [chartKey, setChartKey] = useState(Date.now()); // Add a key to force remount

  useEffect(() => {
    // Set a timeout to ensure the component is mounted before trying to animate
    const animateTimer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    // Load chart data
    import('./insights/CareerGrowthChart')
      .then(module => {
        if (module.careerData) {
          setChartData(module.careerData);
          // Force chart to re-render with new data by changing key
          setChartKey(Date.now());
        }
      })
      .catch(error => {
        console.error("Failed to load career data:", error);
        setChartData([]);
      });

    // Set up intersection observer with delay to ensure DOM is ready
    const observerTimer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
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

    return () => {
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
            {/* Use key to force remount */}
            <CareerGrowthChart key={chartKey} animate={animate} chartData={chartData} />
            <PlacementStats />
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="text-center mt-8">
            <AnimatedButton 
              size="lg" 
              className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
              hoverEffect="glow"
            >
              Schedule a Career Counseling Session
            </AnimatedButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
