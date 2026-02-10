import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Zap, Briefcase, Users, Award, Palette, Globe } from "lucide-react";

export const ProgramFeatures: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-bsd-orange" />,
      title: "Accelerated Learning",
      description: "Master fashion design fundamentals and advanced techniques in just 8 months with our intensive, focused curriculum."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-bsd-orange" />,
      title: "Industry-Aligned Curriculum",
      description: "Learn from current fashion industry practices, trends, and technologies used by leading fashion houses and brands."
    },
    {
      icon: <Palette className="w-6 h-6 text-bsd-orange" />,
      title: "Creative Portfolio Development",
      description: "Build a comprehensive fashion portfolio showcasing your design skills, creativity, and technical abilities."
    },
    {
      icon: <Users className="w-6 h-6 text-bsd-orange" />,
      title: "Small Batch Sizes",
      description: "Personalized attention with small class sizes ensuring individual mentorship and hands-on guidance."
    },
    {
      icon: <Award className="w-6 h-6 text-bsd-orange" />,
      title: "Professional Certification",
      description: "Earn a recognized professional diploma that demonstrates your fashion design competency to employers."
    },
    {
      icon: <Globe className="w-6 h-6 text-bsd-orange" />,
      title: "Fashion Industry Network",
      description: "Connect with fashion professionals, alumni, and industry partners through our extensive fashion network."
    }
  ];

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM HIGHLIGHTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              What Makes This Program Special
            </h2>
            <p className="mt-4 text-foreground/70">
              Our fashion design program combines creative expression with technical skills, 
              industry connections, and practical experience to launch your fashion career.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} isHoverable className="bg-white border-bsd-orange/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
