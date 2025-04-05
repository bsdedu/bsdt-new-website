
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
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Priya Malhotra" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Priya Malhotra</h3>
                  <p className="text-sm text-bsd-orange">Creative Director</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With 15+ years in brand design and visual identity, Priya has led creative teams at top agencies and worked with global brands. Her expertise in branding, typography, and color theory provides students with insights into creating impactful visual communications.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Vikram Mehta" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Vikram Mehta</h3>
                  <p className="text-sm text-bsd-orange">Web & Digital Designer</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A digital design specialist with 12+ years of experience in web design, mobile interfaces, and interactive media. Vikram brings practical knowledge of current industry tools and workflows, helping students create portfolio-ready projects that demonstrate technical proficiency.
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

