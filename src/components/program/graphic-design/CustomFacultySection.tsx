import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
export const CustomFacultySection: React.FC = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From Industry Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Graphic Design program is led by professionals with extensive industry experience who are passionate about nurturing the next generation of creative talent.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop" alt="Aasritha Upadhyayula" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Lakshmi Gopalakrishna</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Graphic Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With over 15 years of experience in brand strategy and visual identity development, Aasritha has led design teams at top agencies and worked with global clients. She brings a wealth of practical industry knowledge and contemporary design perspectives to the program.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556157382-97eda2f9e5d2?w=300&auto=format&fit=crop" alt="Yogesh Praveen" className="w-full h-full object-cover" />
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
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&auto=format&fit=crop" alt="Amalan" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Amalan</h3>
                  <p className="text-sm text-bsd-orange">Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An award-winning typographer and print design specialist, Amalan combines traditional craftsmanship with contemporary applications. His work has been featured in international design publications, and he maintains an active practice alongside his teaching responsibilities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>;
};