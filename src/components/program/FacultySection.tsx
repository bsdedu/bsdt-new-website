
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type FacultyMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

export const FacultySection: React.FC = () => {
  const facultyMembers: FacultyMember[] = [
    {
      name: "Dipti Dineshwar",
      role: "Senior Design Faculty",
      bio: "An architect from BMS School of Architecture with experience in Bangalore and Jaipur. Dipti leads academic programs at BSD, helping students develop design skills through workshops and projects. She specializes in design theory and architectural history, with a Harvard certification in 'The Architectural Imagination'.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=300&h=300",
    },
    {
      name: "Jainy Steve George",
      role: "Lead Faculty",
      bio: "An architect graduate from Manipal School of Architecture with international experience. Jainy has worked on architectural projects in Bahrain and Bangalore, including residential and commercial designs. She has contributed to the Ministry of Education in Bahrain and commercial projects in Saudi Arabia.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?fit=crop&w=300&h=300",
    },
    {
      name: "Aditha Verma Raj",
      role: "Senior Design Faculty",
      bio: "An architecture graduate from Thiagarajar School of Architecture with over eight years of professional experience in hotels, commercial buildings, and luxury villas. Currently a senior architect at Design Studio, Aditha has been with BSDT since its inception, mentoring students and providing industry-relevant guidance.",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?fit=crop&w=300&h=300",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">OUR FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From Industry Experts
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty members bring real-world experience and academic excellence to create an exceptional learning environment.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl text-center p-6">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-32 w-32 border-4 border-bsd-orange/20">
                    <AvatarImage 
                      src={faculty.imageUrl} 
                      alt={faculty.name} 
                    />
                    <AvatarFallback className="text-2xl font-medium">
                      {faculty.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-bsd-gray">{faculty.name}</h3>
                  <p className="text-bsd-orange font-medium mb-3">{faculty.role}</p>
                  <p className="text-foreground/70 text-sm">{faculty.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
        
        <RevealSection delay={200}>
          <div className="mt-12 bg-bsd-light-gray rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-bsd-gray mb-2">Visiting Faculty Program</h3>
                <p className="text-foreground/70">
                  Our program is enriched by industry professionals who visit as guest lecturers, workshop conductors, and mentors, bringing current industry trends and practices directly to our students.
                </p>
              </div>
              <div className="md:w-1/2 border-l-0 md:border-l-2 md:pl-6 border-bsd-orange/20">
                <h3 className="text-xl font-bold text-bsd-gray mb-2">BSD Studio: Real-World Experience</h3>
                <p className="text-foreground/70">
                  BSDT features a unique in-house design center, BSD Studio, where students work on real projects from conceptualization to completion. This unparalleled opportunity allows students to gain hands-on experience in a professional studio environment while still in school.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
