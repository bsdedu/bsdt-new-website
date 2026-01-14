
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import bvaInteriorLearning1 from "@/assets/bva-interior-learning-1.jpg";
import bvaInteriorLearning2 from "@/assets/bva-interior-learning-2.jpg";
import bvaInteriorLearning3 from "@/assets/bva-interior-learning-3.jpg";
import bvaInteriorLearning4 from "@/assets/bva-interior-learning-4.jpg";

export const BVAInteriorStudentLearningSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">LEARNING IN ACTION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Students Building, Creating & Exploring
            </h2>
            <p className="mt-4 text-foreground/70">
              Experience the dynamic learning environment where our interior and spatial design students actively engage in hands-on projects, model-making workshops, and creative exploration.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={bvaInteriorLearning1} 
                alt="Student using precision tools for model making" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bsd-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold mb-1">Precision Crafting</h3>
                  <p className="text-sm opacity-90">Hands-on model making with professional tools</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={bvaInteriorLearning2} 
                alt="Students in collaborative studio session" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bsd-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold mb-1">Collaborative Studio</h3>
                  <p className="text-sm opacity-90">Group discussions and design critiques</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={bvaInteriorLearning3} 
                alt="Students brainstorming design concepts" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bsd-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold mb-1">Creative Brainstorming</h3>
                  <p className="text-sm opacity-90">Ideation and concept development sessions</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={bvaInteriorLearning4} 
                alt="Student working on architectural model" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bsd-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold mb-1">Model Development</h3>
                  <p className="text-sm opacity-90">Creating detailed architectural scale models</p>
                </div>
              </div>
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
