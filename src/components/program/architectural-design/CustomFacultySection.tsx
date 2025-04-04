
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const CustomFacultySection: React.FC = () => {
  const facultyMembers = [
    {
      name: "Ar. Mohammed Fahad",
      role: "Faculty, Architectural Design",
      bio: "An architect and educator specializing in conceptual visualization with a B.Arch from BGS School of Architecture. His award-winning work includes the sustainable Tree House project and South India's first capsule hotel. He teaches across multiple disciplines while managing his own architectural practice.",
      imageUrl: "/lovable-uploads/f8cc79a4-4428-4787-83df-808a715df0a1.png",
    },
    {
      name: "Ar. Kapil Krishnan K",
      role: "Senior Faculty, Architecture",
      bio: "An architect with 23 years of industry experience and a Master's from VTU SJB School of Architecture and Planning. Teaching since 2017, he explores the intersection of technology and artistry in architecture, viewing the discipline as a means to preserve history and knowledge for future generations.",
      imageUrl: "/lovable-uploads/f41aeb18-b8b9-48e3-9212-ce854e1b4ea9.png",
    },
    {
      name: "Ar. Bhavana",
      role: "Faculty, Architectural Design",
      bio: "An innovative designer who transforms ideas into impactful visuals by exploring new perspectives and pushing creative boundaries. Bhavana is collaborative by nature, working closely with both instructors and students to foster meaningful discussions. She draws inspiration from her love for trekking, travel, and nature into her design teaching.",
      imageUrl: "/lovable-uploads/fc9b9c4c-91be-43de-b1a5-d5c09b30a3d8.png",
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
                  <div className="w-32 h-32 rounded-full border-4 border-bsd-orange/20 overflow-hidden">
                    <img 
                      src={faculty.imageUrl} 
                      alt={faculty.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
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
