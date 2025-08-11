import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, ExternalLink } from 'lucide-react';

export const IndustryFaculty: React.FC = () => {
  const facultyMembers = [
    {
      name: "Isabella Chen",
      role: "Senior Fashion Designer",
      company: "Zara International",
      expertise: "Ready-to-Wear Design, Trend Forecasting",
      image: "/api/placeholder/100/100",
      initials: "IC"
    },
    {
      name: "Marco Rossi",
      role: "Creative Director",
      company: "Fashion Forward Studio",
      expertise: "Haute Couture, Pattern Making",
      image: "/api/placeholder/100/100",
      initials: "MR"
    },
    {
      name: "Priya Sharma",
      role: "Sustainable Fashion Consultant",
      company: "Eco Fashion Co.",
      expertise: "Sustainable Design, Textile Innovation",
      image: "/api/placeholder/100/100",
      initials: "PS"
    },
    {
      name: "David Thompson",
      role: "Fashion Illustrator",
      company: "Vogue Magazine",
      expertise: "Fashion Illustration, Digital Design",
      image: "/api/placeholder/100/100",
      initials: "DT"
    }
  ];

  const industryPartners = [
    { name: "Zara", logo: "/api/placeholder/120/60" },
    { name: "H&M", logo: "/api/placeholder/120/60" },
    { name: "Fashion Week", logo: "/api/placeholder/120/60" },
    { name: "Vogue", logo: "/api/placeholder/120/60" },
    { name: "Elle", logo: "/api/placeholder/120/60" },
    { name: "NIFT", logo: "/api/placeholder/120/60" }
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
              Learn from Fashion Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our faculty comprises experienced fashion professionals from leading brands, 
              magazines, and design studios, bringing real-world expertise to the classroom.
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
              Partnered with Leading Fashion Brands
            </h3>
            <p className="text-muted-foreground">
              Collaborate with top fashion companies and gain insights into current industry practices and trends.
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