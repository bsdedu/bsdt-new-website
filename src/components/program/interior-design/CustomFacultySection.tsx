
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
              Learn From Industry Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Interior Design program is led by professionals with extensive industry experience who are passionate about nurturing the next generation of creative talent.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/275a175a-0d92-43ee-b13d-136f76aa4f00.png" alt="Prof. Ananya Singh" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prof. Ananya Singh</h3>
                  <p className="text-sm text-bsd-orange">Program Director, Interior Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Former design lead at Gensler with 15+ years of experience in residential and commercial interior design. Prof. Singh brings her wealth of international experience to guide students in developing sophisticated design solutions that address contemporary needs.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/307e4b93-21bc-4e6b-9ee4-096750278ace.png" alt="Prof. Rohan Mehta" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prof. Rohan Mehta</h3>
                  <p className="text-sm text-bsd-orange">Associate Professor, Spatial Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Award-winning spatial designer specializing in sustainable materials and adaptive reuse. Prof. Mehta's research focuses on innovative approaches to space planning and sustainable design practices that minimize environmental impact.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/938cccc7-6337-481e-861d-5cedb08cafd7.png" alt="Prof. Maya Patel" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prof. Maya Patel</h3>
                  <p className="text-sm text-bsd-orange">Visiting Faculty, Hospitality Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Founder of Studio Spatium and expert in hospitality design with projects across Southeast Asia. Prof. Patel brings real-world perspectives to the classroom, helping students understand how to create memorable spaces for hospitality clients.
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
