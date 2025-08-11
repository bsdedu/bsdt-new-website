import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Brain, 
  Users, 
  Lightbulb, 
  Target, 
  Rocket, 
  Award 
} from 'lucide-react';

export const ProgramFeatures: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Design",
      description: "Learn to integrate machine learning and AI technologies into service design processes for intelligent user experiences."
    },
    {
      icon: Users,
      title: "Human-Centered Approach",
      description: "Master the balance between AI capabilities and human needs to create meaningful, ethical service solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation Framework",
      description: "Develop systematic approaches to identify opportunities and create breakthrough service innovations using AI."
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "Gain skills in service strategy, business model innovation, and digital transformation leadership."
    },
    {
      icon: Rocket,
      title: "Practical Application",
      description: "Work on real industry projects applying AI tools and service design methodologies to solve complex challenges."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Earn a professional credential recognized by leading tech companies and design organizations globally."
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              PROGRAM HIGHLIGHTS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes This Program Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the unique features that set our AI & Service Design program apart and prepare you 
              for leadership roles in the digital transformation era.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};