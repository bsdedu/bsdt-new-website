
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const AnimationStudentLearningSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TODO: Replace with uploaded animation-specific images */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" 
                alt="Animation student working on character design" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating on game development project" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/lovable-uploads/animation-learning-3.png" 
                alt="Student experiencing VR technology in animation studio"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" 
                alt="Game design workshop session" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-bsd-orange">95%</span>
              </div>
              <h3 className="text-lg font-semibold text-bsd-gray mb-2">Hands-on Learning</h3>
              <p className="text-foreground/70 text-sm">
                Our curriculum emphasizes practical application with extensive studio time and project-based learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-bsd-orange">1:8</span>
              </div>
              <h3 className="text-lg font-semibold text-bsd-gray mb-2">Faculty Ratio</h3>
              <p className="text-foreground/70 text-sm">
                Small class sizes ensure personalized attention and mentorship for every student's creative journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-bsd-orange">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-bsd-gray mb-2">Studio Access</h3>
              <p className="text-foreground/70 text-sm">
                Round-the-clock access to our state-of-the-art studios and equipment for unlimited creativity.
              </p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
