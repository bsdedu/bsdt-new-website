import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { BookOpen, Users, Briefcase, Award, Leaf, MapPin } from "lucide-react";

export const ProgramFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM HIGHLIGHTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Why Choose This Programme?
            </h2>
            <p className="mt-4 text-foreground/70">
              Our hybrid Landscape Design program offers a unique blend of online flexibility with practical, field-based experience across multiple locations in India.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Hybrid Learning Model</h3>
                <p className="text-foreground/70">
                  Online flexibility with practical, field-based experience. Live classes Mon-Wed, 9:30 AM - 4:30 PM IST, plus scheduled offline activities.
                </p>
              </CardContent>
            </Card>

            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Offline Access in 5 Cities</h3>
                <p className="text-foreground/70">
                  Bangalore campus + Satellite Partner Centres in Chhattisgarh, Hyderabad, Delhi & Coimbatore for site visits and hands-on learning.
                </p>
              </CardContent>
            </Card>

            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Industry-Standard Software</h3>
                <p className="text-foreground/70">
                  Hands-on training in AutoCAD, SketchUp, and other digital tools essential to professional landscape design practice.
                </p>
              </CardContent>
            </Card>

            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Studio-Style Projects</h3>
                <p className="text-foreground/70">
                  Design Studio projects for residential, public, and commercial environments with guided critiques and structured feedback.
                </p>
              </CardContent>
            </Card>

            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Expert Mentorship</h3>
                <p className="text-foreground/70">
                  Learn from practising architects, landscape designers, and engineers with technical expertise and ecological insight.
                </p>
              </CardContent>
            </Card>

            <Card isHoverable className="bg-white border-bsd-orange/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Recognized Certification</h3>
                <p className="text-foreground/70">
                  Certificate in Landscape Design from Futr School in collaboration with BSDT and ATMOS Design Labs.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

