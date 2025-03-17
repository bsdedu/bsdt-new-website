
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
              Learn from Practicing Architects & Designers
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty combines academic excellence with real-world experience, bringing current industry practices into the classroom.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <RevealSection delay={100}>
            <Card isHoverable>
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="/public/lovable-uploads/60503a43-efdf-4b52-b5eb-9820520a9f2c.png" 
                  alt="Architect Rajesh Patel" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-bsd-gray">Rajesh Patel</h3>
                <p className="text-bsd-orange font-medium">Program Head, Architectural Design</p>
                <p className="mt-3 text-sm text-foreground/70">
                  With over 15 years of experience in sustainable architectural design, Rajesh has led award-winning projects across residential, commercial, and institutional sectors. He brings a wealth of practical knowledge and industry connections to the program.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={200}>
            <Card isHoverable>
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="/public/lovable-uploads/131f247b-d139-4d13-9a35-257c01ccdb84.png" 
                  alt="Architect Ananya Sharma" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-bsd-gray">Ananya Sharma</h3>
                <p className="text-bsd-orange font-medium">Professor, Digital Design & BIM</p>
                <p className="mt-3 text-sm text-foreground/70">
                  A specialist in computational design and BIM integration, Ananya bridges traditional architectural practices with cutting-edge digital technologies. Her research focuses on parametric design and digital fabrication methods for complex architectural forms.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={300}>
            <Card isHoverable>
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="/public/lovable-uploads/96eb81ec-f2fb-4f5c-88d8-ec2a099f67e3.png" 
                  alt="Architect Thomas Wilson" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-bsd-gray">Thomas Wilson</h3>
                <p className="text-bsd-orange font-medium">Associate Professor, Sustainable Design</p>
                <p className="mt-3 text-sm text-foreground/70">
                  Thomas specializes in green building design and environmental systems integration. His global experience includes LEED-certified projects across Asia and Europe, bringing an international perspective to sustainable design practices.
                </p>
              </CardContent>
            </Card>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
