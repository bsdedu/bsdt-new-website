
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
                    <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Rajesh Menon" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Rajesh Menon</h3>
                  <p className="text-sm text-bsd-orange">Environmental Designer & Ecologist</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Rajesh combines his background in environmental science with landscape design, specializing in ecological restoration and native plant landscapes. His work on biodiversity conservation and sustainable landscape management informs his practical, hands-on teaching approach.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Priya Nair" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Priya Nair</h3>
                  <p className="text-sm text-bsd-orange">Landscape Design Director</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    As the design director of a leading landscape architecture firm, Priya brings her expertise in luxury residential landscapes, hospitality projects, and commercial developments to the classroom. Her focus on innovative design solutions and client relations prepares students for professional practice.
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
