
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
              BSD Tech Lab: Applied Learning Experience
            </h2>
            <p className="mt-4 text-foreground/70">
              Work on real-world tech projects with industry partners, gaining practical experience that prepares you for professional challenges.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89f12e?w=800&auto=format&fit=crop" 
                alt="Tech Lab" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium text-lg">Gain hands-on experience with cutting-edge technology</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Industry-Sponsored Projects</h3>
                <p className="text-foreground/70">
                  Work directly with tech companies on real projects that solve actual business problems. Gain valuable work experience and build relationships with potential employers while still completing your degree.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Startup Incubation</h3>
                <p className="text-foreground/70">
                  Turn your innovative ideas into viable tech startups with guidance from experienced mentors and access to funding opportunities. Our tech lab has already launched successful student-led startups.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Hackathons & Tech Competitions</h3>
                <p className="text-foreground/70">
                  Regularly participate in coding challenges, hackathons, and tech competitions that build problem-solving skills under pressure and expand your professional network in the tech community.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
