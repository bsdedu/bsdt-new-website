import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, ExternalLink } from 'lucide-react';

export const IndustryFaculty: React.FC = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Design Strategist",
      company: "Google AI",
      expertise: "Machine Learning UX, Conversational AI",
      image: "/src/assets/faculty-ai-1.jpg",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Service Design Director",
      company: "IDEO",
      expertise: "Digital Transformation, Design Thinking",
      image: "/api/placeholder/100/100",
      initials: "MR"
    },
    {
      name: "Dr. Priya Sharma",
      role: "AI Ethics Researcher",
      company: "MIT Media Lab",
      expertise: "Responsible AI, Human-AI Interaction",
      image: "/api/placeholder/100/100",
      initials: "PS"
    },
    {
      name: "James Thompson",
      role: "Innovation Lead",
      company: "Microsoft Design",
      expertise: "AI Product Strategy, Service Innovation",
      image: "/api/placeholder/100/100",
      initials: "JT"
    }
  ];

  const industryPartners = [
    { name: "Google", logo: "/api/placeholder/120/60" },
    { name: "Microsoft", logo: "/api/placeholder/120/60" },
    { name: "IDEO", logo: "/api/placeholder/120/60" },
    { name: "Accenture", logo: "/api/placeholder/120/60" },
    { name: "IBM", logo: "/api/placeholder/120/60" },
    { name: "Adobe", logo: "/api/placeholder/120/60" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Faculty Section */}
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              INDUSTRY FACULTY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learn from AI & Design Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our faculty comprises industry veterans from leading tech companies and research institutions, 
              bringing real-world expertise in AI and service design.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={faculty.image} alt={faculty.name} />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {faculty.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-semibold text-lg mb-1">{faculty.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{faculty.role}</p>
                  <p className="text-muted-foreground text-sm mb-2">{faculty.company}</p>
                  <p className="text-xs text-muted-foreground mb-4">{faculty.expertise}</p>
                  
                  <div className="flex justify-center gap-2">
                    <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>

        {/* Industry Partners Section */}
        <RevealSection delay={0.4}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              INDUSTRY PARTNERS
            </Badge>
            <h3 className="text-2xl font-bold mb-4">
              Partnered with Leading Organizations
            </h3>
            <p className="text-muted-foreground">
              Collaborate with industry-leading companies on real projects and gain insights into current market trends.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {industryPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};