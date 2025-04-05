
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
              Our Landscape Design program is led by professionals with extensive industry experience who are passionate about nurturing the next generation of landscape architects and designers.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/a216f1ec-28e7-45f0-a57f-0684120d759d.png" alt="Ar. Niharika Nigam" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Niharika Nigam</h3>
                  <p className="text-sm text-bsd-orange">Landscape Architect & Educator</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With over 8 years in academia, Niharika brings expertise in integrating ecological sensitivity with spatial design. A graduate from BBD University, she focuses on sustainable landscape practices and environmental planning. Her teaching approach combines theoretical frameworks with practical applications, empowering students to develop holistic, context-responsive landscape solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/f41aeb18-b8b9-48e3-9212-ce854e1b4ea9.png" alt="Ar. Kapil Krishnan K" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Kapil Krishnan K</h3>
                  <p className="text-sm text-bsd-orange">Senior Faculty, Landscape Architecture</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An architect with 23 years of industry experience and a Master's from VTU SJB School of Architecture and Planning. Teaching since 2017, he explores the intersection of technology and artistry in landscape design, viewing the discipline as a means to preserve natural environments and create sustainable outdoor spaces for future generations.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/80d897a6-3e50-49da-b9c3-86a1b0f84d01.png" alt="Er. Ritesh L" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Er. Ritesh L</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Landscape Engineering</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A gold medalist in M.Tech (Structures) from SJB Institute of Technology, Ritesh combines engineering expertise with landscape design thinking. He has published in international journals and conducted seminars on innovative construction practices for outdoor spaces. He bridges the gap between creative landscape design and technical implementation, teaching students how to integrate structural principles with ecological vision.
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
