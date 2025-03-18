
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const CustomFacultySection: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">EXPERT FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn from Industry Professionals
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty members are experienced interior designers and industry experts who bring real-world insights and practical knowledge to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Faculty Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Architect Rajiv Sharma</h3>
                <p className="text-bsd-orange mb-3">Program Director, Interior Design</p>
                <p className="text-foreground/70">
                  With over 15 years of experience in residential and commercial interior design, Rajiv brings practical expertise and industry connections to help students succeed.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Faculty Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Priya Nair</h3>
                <p className="text-bsd-orange mb-3">CAD & Visualization Expert</p>
                <p className="text-foreground/70">
                  A specialist in 3D modeling and visualization tools, Priya helps students master the technical skills needed for modern interior design presentation.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Faculty Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sunil Kumar</h3>
                <p className="text-bsd-orange mb-3">Materials & Specifications Specialist</p>
                <p className="text-foreground/70">
                  With extensive experience in material selection and sustainability, Sunil guides students through the complexities of material specifications and sourcing.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
