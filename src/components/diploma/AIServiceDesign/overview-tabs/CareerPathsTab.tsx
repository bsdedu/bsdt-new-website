import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CareerCardProps {
  title: string;
  description: string;
  icon: string;
  salary: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, description, icon, salary }) => (
  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="text-2xl mb-2">{icon}</div>
        <Badge variant="secondary" className="text-xs">{salary}</Badge>
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export const CareerPathsTab: React.FC = () => {
  const coreCareerPaths = [
    {
      title: "AI Service Designer",
      description: "Design intelligent services that combine AI capabilities with human needs, creating seamless user experiences across digital touchpoints.",
      icon: "🤖",
      salary: "$75K - $120K"
    },
    {
      title: "AI Product Manager",
      description: "Lead the development of AI-powered products and services, bridging technical capabilities with business strategy and user requirements.",
      icon: "📊",
      salary: "$90K - $150K"
    },
    {
      title: "Service Innovation Consultant",
      description: "Help organizations transform their services using AI and design thinking methodologies to improve customer experiences and operational efficiency.",
      icon: "💡",
      salary: "$80K - $140K"
    },
    {
      title: "UX Research Scientist",
      description: "Conduct research to understand human-AI interaction patterns and design principles for creating more intuitive AI-powered interfaces.",
      icon: "🔬",
      salary: "$85K - $130K"
    }
  ];

  const specializedCareerPaths = [
    {
      title: "Conversational AI Designer",
      description: "Specialize in designing chatbots, voice assistants, and conversational interfaces that provide natural, helpful user interactions.",
      icon: "💬",
      salary: "$70K - $115K"
    },
    {
      title: "AI Ethics Specialist",
      description: "Ensure AI services are designed responsibly, addressing bias, fairness, and transparency in AI-powered user experiences.",
      icon: "⚖️",
      salary: "$85K - $135K"
    },
    {
      title: "Digital Transformation Lead",
      description: "Drive organizational change by implementing AI-powered services and design thinking approaches to modernize business processes.",
      icon: "🚀",
      salary: "$100K - $160K"
    },
    {
      title: "AI Startup Founder",
      description: "Launch your own AI service company, applying design thinking and technical knowledge to solve market problems with innovative solutions.",
      icon: "🏢",
      salary: "Variable"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-12">
        {/* Core Career Paths */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Core AI Service Design Career Paths</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreCareerPaths.map((career, index) => (
              <CareerCard
                key={index}
                title={career.title}
                description={career.description}
                icon={career.icon}
                salary={career.salary}
              />
            ))}
          </div>
        </div>

        {/* Specialized Career Paths */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Specialized Career Paths</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specializedCareerPaths.map((career, index) => (
              <CareerCard
                key={index}
                title={career.title}
                description={career.description}
                icon={career.icon}
                salary={career.salary}
              />
            ))}
          </div>
        </div>

        {/* Industry Insights */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Industry Insights & Growth Projections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Annual growth in AI service design roles</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2.8T</div>
                <p className="text-sm text-muted-foreground">AI market value by 2030</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <p className="text-sm text-muted-foreground">Companies investing in AI-powered services</p>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              The intersection of AI and service design represents one of the fastest-growing areas in technology and design. 
              As organizations increasingly adopt AI to enhance customer experiences and operational efficiency, professionals 
              who can bridge technical AI capabilities with human-centered design principles are in high demand. Our graduates 
              are well-positioned to lead this transformation across industries from healthcare and finance to retail and entertainment.
            </p>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};