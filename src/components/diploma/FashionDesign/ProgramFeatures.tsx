import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Zap, Briefcase, Users, Award, Palette, Globe } from 'lucide-react';

export const ProgramFeatures: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Accelerated Learning",
      description: "Master fashion design fundamentals and advanced techniques in just 8 months with our intensive, focused curriculum."
    },
    {
      icon: Briefcase,
      title: "Industry-Aligned Curriculum",
      description: "Learn from current fashion industry practices, trends, and technologies used by leading fashion houses and brands."
    },
    {
      icon: Palette,
      title: "Creative Portfolio Development", 
      description: "Build a comprehensive fashion portfolio showcasing your design skills, creativity, and technical abilities."
    },
    {
      icon: Users,
      title: "Small Batch Sizes",
      description: "Personalized attention with small class sizes ensuring individual mentorship and hands-on guidance."
    },
    {
      icon: Award,
      title: "Professional Certification",
      description: "Earn a recognized professional diploma that demonstrates your fashion design competency to employers."
    },
    {
      icon: Globe,
      title: "Fashion Industry Network",
      description: "Connect with fashion professionals, alumni, and industry partners through our extensive fashion network."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              PROGRAM HIGHLIGHTS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes This Program Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our fashion design program combines creative expression with technical skills, 
              industry connections, and practical experience to launch your fashion career.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};