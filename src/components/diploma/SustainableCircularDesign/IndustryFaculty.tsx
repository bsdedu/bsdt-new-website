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
              Learn From Sustainability Experts
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Sustainable System & Circular Design program is led by professionals with extensive experience in environmental design and sustainability who are passionate about creating a greener future.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Dr. Sarah Green" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Dr. Sarah Green</h3>
                  <p className="text-sm text-bsd-orange">Program Head, Sustainable Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With 15+ years in sustainable design and environmental engineering, Dr. Green leads our sustainability initiatives. She has consulted for major corporations on circular economy implementation and holds a PhD in Environmental Design from MIT. Her research focuses on biomimicry and regenerative design practices.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Prof. Rajesh Kumar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prof. Rajesh Kumar</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Circular Economy</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An expert in circular economy models with 12+ years of experience in waste management and resource optimization. Prof. Kumar has worked with government agencies on sustainable policy development and has published extensively on circular design methodologies in industrial applications.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Ms. Elena Martinez" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ms. Elena Martinez</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Green Materials</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Specializing in sustainable materials and green chemistry with 10+ years in the renewable materials industry. Elena brings expertise in bio-based materials, recycling technologies, and sustainable manufacturing processes from her work with leading eco-design companies across Europe.
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