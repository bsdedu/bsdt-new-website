
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui-elements/Card";
import { LinkedinIcon } from "lucide-react";

interface FacultyMember {
  name: string;
  role: string;
  experience: string;
  image: string;
  linkedin?: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Aryan Sharma",
    role: "Senior UI/UX Designer",
    experience: "10+ years in UI/UX at major tech companies",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "#"
  },
  {
    name: "Priya Malhotra",
    role: "Creative Director",
    experience: "15+ years in brand design and visual identity",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "#"
  },
  {
    name: "Vikram Mehta",
    role: "Web & Digital Designer",
    experience: "12+ years of experience in digital design",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "#"
  }
];

export const IndustryFaculty: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">LEARN FROM THE BEST</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Industry Expert Faculty
            </h2>
            <p className="mt-4 text-foreground/70">
              Our program is taught by working professionals who bring current industry knowledge and practices directly to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} isHoverable className="overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray">{faculty.name}</h3>
                  <p className="text-bsd-orange font-medium">{faculty.role}</p>
                  <p className="text-foreground/70 mt-2 text-sm">{faculty.experience}</p>
                  {faculty.linkedin && (
                    <a 
                      href={faculty.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-bsd-gray/70 hover:text-bsd-orange mt-4 text-sm transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4 mr-1" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
