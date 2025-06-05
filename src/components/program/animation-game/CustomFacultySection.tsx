
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
              Learn From Industry Professionals
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Animation & Game Design program is led by experienced professionals who have worked with leading studios and game developers, bringing real-world knowledge to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/f5c90782-2424-4b1f-88c6-7bc6c055382b.png" alt="Amal Satheesh" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Amal Satheesh</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Animation</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A professionally trained educator with a passion for animation, Amal worked with Disney as a 2D animator for five years before transitioning to education. At BSDT, he guides students in developing their animation skills through fundamentals of character design, movement principles, and storytelling techniques while conducting workshops that encourage exploration beyond the curriculum.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/8c654396-817b-41ba-9b58-67f6362d40ca.png" alt="Yogesh Praveen" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Yogesh Praveen</h3>
                  <p className="text-sm text-bsd-orange">Senior Faculty, Game Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Yogesh specializes in game design and development with a background at leading game studios and tech companies. His expertise in Unity, Unreal Engine, and game mechanics provides students with cutting-edge skills for creating immersive interactive experiences in the rapidly evolving gaming industry.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/af5130bc-a7bc-4348-8951-861078594741.png" alt="Amalan" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Amalan Bharali</h3>
                  <p className="text-sm text-bsd-orange">Faculty, 3D Modeling & VFX</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An award-winning 3D artist and VFX specialist, Amalan combines technical precision with artistic vision. His work has been featured in international films and game titles, and he maintains an active practice alongside his teaching responsibilities, bringing the latest industry trends and techniques to the classroom.
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
