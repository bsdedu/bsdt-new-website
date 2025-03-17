
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const CustomFacultySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From Interaction Design Experts
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Interaction & Experience Design program is led by professionals with extensive industry experience who bring real-world insights and practical knowledge to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/84bf2665-5492-457f-8295-f739efb5d307.png" alt="Priya Sharma" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Priya Sharma</h3>
                  <p className="text-sm text-bsd-orange">Lead Faculty, UX/UI Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With over 12 years of experience in UX/UI design at companies like Microsoft and Flipkart, Priya brings extensive knowledge of user-centered design methodologies. Her expertise in designing for e-commerce and financial applications provides students with insights into creating effective digital experiences across different sectors.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/9e5f0918-e471-4105-8926-6e066cea868e.png" alt="Rahul Menon" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Rahul Menon</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Interaction Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A former Senior Interaction Designer at Google, Rahul specializes in motion design and micro-interactions that enhance user experience. His work on mobile applications and responsive web interfaces has been recognized with multiple design awards, and he maintains an active design consultancy alongside his teaching.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/131f247b-d139-4d13-9a35-257c01ccdb84.png" alt="Sanjay Gupta" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Sanjay Gupta</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Product Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With a background in product design at startups and established tech companies, Sanjay brings practical experience in creating user-centered digital products from concept to launch. His expertise in user research methodologies and design thinking processes helps students develop a structured approach to problem-solving.
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
