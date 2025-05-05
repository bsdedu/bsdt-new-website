
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const IndustryFaculty: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From Industry Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Interior Design program is led by professionals with extensive industry experience who are passionate about nurturing the next generation of interior designers.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/a094cc73-a395-4c02-b7e0-8fcf25938d8f.png" alt="Ar. Jainy Steve George" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Jainy Steve George</h3>
                  <p className="text-sm text-bsd-orange">Senior Interior Designer</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An architect with a passion for design education and creative exploration. Jainy combines architectural experience with dynamic teaching, bringing practical insights and innovative thinking to the classroom. Her approach emphasizes critical discourse while nurturing the next generation of design professionals.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/02978600-d16a-40b3-aa9a-d6edb67502f2.png" alt="Ar. Bhavana" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Bhavana</h3>
                  <p className="text-sm text-bsd-orange">Commercial Design Specialist</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An innovative designer with 10+ years of experience in commercial design. Bhavana excels at transforming abstract concepts into functional spaces, collaborating with diverse teams, and mentoring students to explore creative boundaries while drawing inspiration from nature.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/ee80d4a8-ab78-4c12-8690-fd856f23d2e3.png" alt="Ar. Mohammed Fahad" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Mohammed Fahad</h3>
                  <p className="text-sm text-bsd-orange">3D Visualization Expert</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An architect with expertise in visualization and sustainable design. Fahad combines teaching experience across multiple design disciplines with professional practice, creating innovative projects like South India's first capsule hotel. His curious mindset and diverse background bring valuable perspectives to interior design education.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
