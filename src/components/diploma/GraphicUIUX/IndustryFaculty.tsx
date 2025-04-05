
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
              Our Graphic Design + UI/UX program is led by professionals with extensive industry experience who are passionate about nurturing the next generation of creative talent.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/8c654396-817b-41ba-9b58-67f6362d40ca.png" alt="Yogesh Praveen" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Yogesh Praveen</h3>
                  <p className="text-sm text-bsd-orange">Senior Faculty, Digital Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Yogesh specializes in UI/UX and digital experiences with a background at leading tech companies and design consultancies. His expertise in emerging technologies and digital platforms provides students with cutting-edge skills for the evolving design landscape.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/af5130bc-a7bc-4348-8951-861078594741.png" alt="Amalan Bharali" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Amalan Bharali</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Graphic Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An award-winning typographer and print design specialist, Amalan combines traditional craftsmanship with contemporary applications. His work has been featured in international design publications, and he maintains an active practice alongside his teaching responsibilities.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/17900fde-ea8a-4cbb-964e-5c69823ebdf1.png" alt="Amal Sateesh" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Amal Sateesh</h3>
                  <p className="text-sm text-bsd-orange">Faculty, UI/UX Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A passionate UI/UX and Graphic Design educator with expertise in User Research, Wireframing, Prototyping, and Visual Communication. Amal bridges design theory with real-world applications, fostering critical thinking and innovation while preparing students to meet the evolving demands of the design industry.
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
