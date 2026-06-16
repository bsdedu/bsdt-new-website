import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Users, Award, Clock, Lightbulb, Building2 } from 'lucide-react';

export const ProgramFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              PROGRAM HIGHLIGHTS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-6">
              What Makes This Master Program Exceptional
            </h2>
            <p className="text-lg text-foreground/70">
              Our Post Graduate Diploma in Residential Architecture and Design is designed for design professionals seeking advanced expertise, leadership skills, and the ability to lead complex projects and design teams.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-bsd-orange" />
                </div>
                <CardTitle className="text-lg">Advanced Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Master-level curriculum designed for design professionals seeking to advance their expertise in sophisticated interior design projects and leadership roles.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-bsd-orange" />
                </div>
                <CardTitle className="text-lg">Industry Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Comprehensive training in project management, client relations, and team leadership to prepare graduates for senior positions in the design industry.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-bsd-orange" />
                </div>
                <CardTitle className="text-lg">Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Integration of cutting-edge technologies like VR/AR, BIM, smart home systems, and sustainable design practices for future-ready designers.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-bsd-orange" />
                </div>
                <CardTitle className="text-lg">Executive Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Personalized mentorship from industry executives and successful design entrepreneurs to guide career advancement and business development.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-bsd-orange" />
                </div>
                <CardTitle className="text-lg">Capstone Project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Comprehensive capstone project with industry mentor collaboration, culminating in a professional portfolio and public presentation.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-bsd-orange" />
                </div>
                <CardTitle className="text-lg">Professional Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Flexible scheduling designed for working professionals, with weekend intensives and online components to accommodate career advancement needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};