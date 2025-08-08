import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Quote, Award, Users, BookOpen, Palette, TrendingUp } from "lucide-react";

export const FashionFacultySection: React.FC = () => {
  const facultyHighlights = [
    {
      icon: Award,
      title: "Industry Professionals",
      description: "Faculty with 10+ years of experience in fashion design, retail, and fashion business"
    },
    {
      icon: Palette,
      title: "Creative Experts",
      description: "Award-winning designers and artists bringing real-world fashion expertise to classroom"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Advanced degrees in fashion design, textile science, and business from renowned institutions"
    },
    {
      icon: TrendingUp,
      title: "Trend Forecasters",
      description: "Active fashion consultants and trend analysts working with leading fashion brands"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">EXPERT FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn from Leading Fashion Industry Professionals
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty combines creative excellence with industry experience, bringing the latest fashion trends, business insights, and technical expertise to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    "Fashion is not just about creating beautiful clothes – it's about understanding culture, technology, sustainability, and human behavior. Our students learn to design with purpose and impact."
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Faculty Expertise Areas</h4>
                    <ul className="mt-3 space-y-1 text-foreground/70">
                      <li>• Sustainable Fashion & Eco-friendly Design</li>
                      <li>• Fashion Entrepreneurship & Brand Development</li>
                      <li>• Digital Fashion Design & Technology</li>
                      <li>• Global Fashion Markets & Cultural Studies</li>
                      <li>• Fashion Psychology & Consumer Behavior</li>
                      <li>• Luxury Fashion & Haute Couture Techniques</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Fashion faculty working with students" 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-bsd-gray">1:8</h4>
                <p className="text-foreground/70">Faculty to Student Ratio</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-bsd-gray">15+</h4>
                <p className="text-foreground/70">Industry Awards</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-bsd-gray">20+</h4>
                <p className="text-foreground/70">Years Combined Experience</p>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};