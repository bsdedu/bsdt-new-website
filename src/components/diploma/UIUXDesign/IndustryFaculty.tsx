
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const IndustryFaculty: React.FC = () => {
  const faculty = [
    {
      name: "Prof. Rahul Sharma",
      role: "UI/UX Lead, Adobe",
      expertise: "Interface Design, Design Systems",
      image: "/public/placeholder.svg"
    },
    {
      name: "Ms. Priya Desai",
      role: "UX Researcher, Google",
      expertise: "User Research, Usability Testing",
      image: "/public/placeholder.svg"
    },
    {
      name: "Mr. Vikram Patel",
      role: "Product Designer, Microsoft",
      expertise: "Interaction Design, Prototyping",
      image: "/public/placeholder.svg"
    },
    {
      name: "Dr. Ananya Roy",
      role: "Head of UX, Flipkart",
      expertise: "Information Architecture, E-commerce UX",
      image: "/public/placeholder.svg"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">LEARN FROM THE BEST</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Industry Experts & Faculty
            </h2>
            <p className="mt-4 text-foreground/70">
              Learn from leading professionals who bring real-world experience into the classroom
            </p>
          </div>
        </RevealSection>
        
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {faculty.map((member, index) => (
              <Card key={index} isHoverable className="bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-bsd-gray">{member.name}</h3>
                  <p className="text-bsd-orange font-medium">{member.role}</p>
                  <p className="text-sm text-foreground/70 mt-1">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
        
        <RevealSection delay={200}>
          <div className="flex justify-center mt-10">
            <Link to="/admissions/faculty">
              <Button variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                View All Faculty Members
              </Button>
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
