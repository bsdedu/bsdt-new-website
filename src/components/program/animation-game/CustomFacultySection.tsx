
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
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Rahul Sharma" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Rahul Sharma</h3>
                  <p className="text-sm text-bsd-orange">Head of Department, Animation</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With over 15 years of experience in the animation industry, Rahul has worked on projects for Dreamworks, Disney, and several Indian animation studios. His expertise spans traditional and digital animation techniques, with a focus on character animation and storytelling.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Priya Kapoor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Priya Kapoor</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Game Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Priya is a game designer and developer who has worked on multiple award-winning mobile and PC games. Previously at Ubisoft and Zynga, she specializes in gameplay systems, player experience, and level design. She brings practical industry knowledge and a focus on the latest gaming trends.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Vikram Mehta" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Vikram Mehta</h3>
                  <p className="text-sm text-bsd-orange">Faculty, 3D Modeling & VFX</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Vikram is a 3D artist and VFX specialist with credits on major films and game titles. His expertise in Autodesk Maya, ZBrush, and Unreal Engine helps students master the technical aspects of 3D creation. At BSDT, he focuses on teaching industry-standard workflows and emerging technologies.
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
