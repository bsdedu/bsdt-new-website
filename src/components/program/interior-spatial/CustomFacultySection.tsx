import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Quote, Award, Users, BookOpen } from "lucide-react";

export const CustomFacultySection: React.FC = () => {
  const facultyHighlights = [
    {
      icon: Award,
      title: "Industry Veterans",
      description: "Faculty with 15+ years of professional practice in interior design and architecture"
    },
    {
      icon: Users,
      title: "Working Professionals",
      description: "Active practitioners who bring current industry trends and real-world challenges"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Advanced degrees from prestigious institutions with focus on spatial design theory"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">EXPERT FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn from Leading Interior & Spatial Design Professionals
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty combines academic excellence with professional practice, bringing years of industry experience and cutting-edge knowledge to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {facultyHighlights.map((highlight, index) => (
              <Card key={index} className="text-center border-0 bg-bsd-light-gray">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-3">{highlight.title}</h3>
                  <p className="text-foreground/70">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Card className="bg-gradient-to-br from-bsd-orange/5 to-bsd-gray/5 border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Quote className="w-12 h-12 text-bsd-orange mb-6" />
                  <blockquote className="text-lg text-foreground/80 mb-6 italic">
                    "Spatial design is about creating environments that enhance human experience. Our students learn to think beyond aesthetics – they design spaces that improve how people live, work, and interact."
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Faculty Expertise Areas</h4>
                    <ul className="mt-3 space-y-1 text-foreground/70">
                      <li>• Sustainable Interior Design & Green Building</li>
                      <li>• Spatial Psychology & Human-Centered Design</li>
                      <li>• Advanced Materials & Construction Technology</li>
                      <li>• Digital Design & BIM Implementation</li>
                      <li>• Heritage Conservation & Adaptive Reuse</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Faculty member working on interior design" 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealSection>
      </div>
    </section>
  );
};