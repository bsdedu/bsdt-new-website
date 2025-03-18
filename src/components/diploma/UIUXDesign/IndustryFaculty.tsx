
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui-elements/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const IndustryFaculty: React.FC = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Arjun Menon",
      role: "Lead UX Designer",
      company: "Microsoft Design",
      image: "/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png",
      expertise: "User Research, Information Architecture",
      initials: "AM"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Product Designer",
      company: "Google",
      image: "/lovable-uploads/f9a81ed0-1eab-4c08-a64b-f26652946746.png",
      expertise: "UI Design, Design Systems",
      initials: "PS"
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "UX Lead",
      company: "Flipkart",
      image: "/lovable-uploads/8c654396-817b-41ba-9b58-67f6362d40ca.png",
      expertise: "Interaction Design, Prototyping",
      initials: "RV"
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Senior UI/UX Designer",
      company: "Amazon",
      image: "/lovable-uploads/131f247b-d139-4d13-9a35-257c01ccdb84.png",
      expertise: "Visual Design, Usability Testing",
      initials: "NG"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">EXPERT INSTRUCTORS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn from Industry Leading Professionals
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty consists of experienced UI/UX professionals from top companies who bring real-world insights and expertise to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.id} className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={faculty.image} alt={faculty.name} />
                  <AvatarFallback>{faculty.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-bsd-gray">{faculty.name}</h3>
                <p className="text-bsd-orange font-medium">{faculty.role}</p>
                <p className="text-sm text-foreground/70 mb-3">{faculty.company}</p>
                <div className="mt-auto">
                  <Badge variant="outline" className="bg-bsd-light-gray/50">
                    {faculty.expertise}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </RevealSection>
        
        <RevealSection delay={200}>
          <div className="mt-12 text-center">
            <p className="text-foreground/70 max-w-2xl mx-auto">
              In addition to our core faculty, we regularly invite guest speakers from leading design companies to provide industry insights and networking opportunities for our students.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
