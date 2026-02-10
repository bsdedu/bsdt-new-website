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
              Learn From Fashion Industry Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Fashion Design program is led by experienced professionals from leading fashion brands and design studios who bring real-world expertise to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-bsd-orange">IC</span>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Isabella Chen</h3>
                  <p className="text-sm text-bsd-orange">Senior Fashion Designer</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An experienced fashion designer specializing in ready-to-wear design and trend forecasting. Isabella brings industry expertise from leading fashion houses to guide students in developing their creative vision.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-bsd-orange">MR</span>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Marco Rossi</h3>
                  <p className="text-sm text-bsd-orange">Creative Director</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A creative director with extensive experience in haute couture and pattern making. Marco guides students through the intricate art of fashion construction and design innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-bsd-orange">PS</span>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Priya Sharma</h3>
                  <p className="text-sm text-bsd-orange">Sustainable Fashion Consultant</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A sustainability expert focused on eco-friendly fashion practices and textile innovation. Priya helps students understand the growing importance of sustainable design in the modern fashion industry.
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
