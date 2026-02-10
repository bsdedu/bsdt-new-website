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
              Learn From AI & Design Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our AI & Service Design program is led by industry veterans from leading tech companies and research institutions, bringing real-world expertise in AI and service design.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-bsd-orange">SC</span>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Dr. Sarah Chen</h3>
                  <p className="text-sm text-bsd-orange">AI Design Strategist</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An expert in machine learning UX and conversational AI, bringing experience from leading tech companies to help students master the intersection of AI and human-centered design.
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
                  <h3 className="text-lg font-semibold text-bsd-gray">Michael Rodriguez</h3>
                  <p className="text-sm text-bsd-orange">Service Design Director</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A specialist in digital transformation and design thinking with extensive experience leading service design initiatives at top consulting firms.
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
                  <h3 className="text-lg font-semibold text-bsd-gray">Dr. Priya Sharma</h3>
                  <p className="text-sm text-bsd-orange">AI Ethics Researcher</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A researcher focused on responsible AI and human-AI interaction, helping students understand the ethical considerations of designing AI-powered services.
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
