
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";

export const StudioSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">UNIQUE ADVANTAGE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              BSD Studio: Real-World Design Experience
            </h2>
            <p className="mt-4 text-foreground/70">
              Work on actual commercial projects for businesses and organizations through our in-house professional design studio.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Design Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium text-lg">Gain professional experience working on real client projects</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Client-Facing Experience</h3>
                <p className="text-foreground/70">
                  Work directly with actual clients, understand their needs, and develop professional communication skills while delivering high-quality design solutions under faculty guidance.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Portfolio-Ready Projects</h3>
                <p className="text-foreground/70">
                  Build a strong portfolio with real-world projects that demonstrate your abilities to future employers. Your work at BSD Studio becomes a powerful showcase of your skills and creative problem-solving.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Industry Connections</h3>
                <p className="text-foreground/70">
                  Form relationships with businesses and organizations while still a student. Many of our graduates receive job offers based on connections made through Studio BSD projects.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
