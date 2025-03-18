
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
                  src="/lovable-uploads/f8cc79a4-4428-4787-83df-808a715df0a1.png" 
                  alt="Ar. Mohammed Fahad" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-bsd-gray">Ar. Mohammed Fahad</h3>
                <p className="text-bsd-orange font-medium">Faculty, Architectural Design</p>
                <p className="mt-3 text-sm text-foreground/70">
                  An architect and educator specializing in conceptual visualization with a B.Arch from BGS School of Architecture. His award-winning work includes the sustainable Tree House project and South India's first capsule hotel. He teaches across multiple disciplines while managing his own architectural practice.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={200}>
            <Card isHoverable>
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="/lovable-uploads/f41aeb18-b8b9-48e3-9212-ce854e1b4ea9.png" 
                  alt="Ar. Kapil Krishnan K" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-bsd-gray">Ar. Kapil Krishnan K</h3>
                <p className="text-bsd-orange font-medium">Senior Faculty, Architecture</p>
                <p className="mt-3 text-sm text-foreground/70">
                  An architect with 23 years of industry experience and a Master's from VTU SJB School of Architecture and Planning. Teaching since 2017, he explores the intersection of technology and artistry in architecture, viewing the discipline as a means to preserve history and knowledge for future generations.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={300}>
            <Card isHoverable>
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="/lovable-uploads/6b4a7e04-bb44-4b67-9d64-88776c117f66.png" 
                  alt="Er. Ritesh L" 
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-bsd-gray">Er. Ritesh L</h3>
                <p className="text-bsd-orange font-medium">Faculty, Structural Engineering</p>
                <p className="mt-3 text-sm text-foreground/70">
                  A gold medalist with an M.Tech in Structural Engineering from SJB Institute of Technology. His extensive experience in civil engineering includes highways and bridges construction. As faculty, he bridges design with structural engineering, introducing students to the latest technological advancements in construction.
                </p>
              </CardContent>
            </Card>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
