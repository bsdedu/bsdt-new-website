import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Users, 
  Lightbulb, 
  Target, 
  Code, 
  TrendingUp, 
  Shield, 
  Rocket 
} from 'lucide-react';

export const LearningOutcomesTab: React.FC = () => {
  const learningOutcomes = [
    {
      icon: Brain,
      title: "AI Technology Mastery",
      description: "Understand machine learning fundamentals, natural language processing, and computer vision to inform design decisions and communicate effectively with technical teams."
    },
    {
      icon: Users,
      title: "Human-Centered AI Design",
      description: "Apply user research methods and design thinking principles to create AI services that are intuitive, accessible, and aligned with human needs and behaviors."
    },
    {
      icon: Lightbulb,
      title: "Service Innovation Framework",
      description: "Develop systematic approaches to identify opportunities and create breakthrough service innovations using AI technologies and design methodologies."
    },
    {
      icon: Target,
      title: "Strategic Design Thinking",
      description: "Gain skills in service strategy, business model innovation, and digital transformation to position AI solutions within broader organizational contexts."
    },
    {
      icon: Code,
      title: "Prototyping & Implementation",
      description: "Learn to create functional prototypes of AI services using no-code/low-code tools and collaborate effectively with development teams."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Decision Making",
      description: "Understand how to use analytics, user feedback, and performance metrics to continuously improve AI service experiences and measure success."
    },
    {
      icon: Shield,
      title: "Ethical AI Practices",
      description: "Develop expertise in responsible AI design, addressing bias, fairness, transparency, and privacy considerations in AI-powered services."
    },
    {
      icon: Rocket,
      title: "Professional Portfolio",
      description: "Build a comprehensive portfolio showcasing your ability to design, prototype, and present AI service solutions to stakeholders and potential employers."
    }
  ];

  return (
    <RevealSection>
      <div>
        <h3 className="text-2xl font-bold mb-6">Key Learning Outcomes</h3>
        <p className="text-muted-foreground mb-8 text-lg">
          Upon completion of this program, you will have developed a comprehensive skill set that positions you 
          as a leader in AI-powered service design and innovation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {learningOutcomes.map((outcome, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <outcome.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {outcome.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};