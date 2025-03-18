
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";

export const CustomFacultySection: React.FC = () => {
  const facultyMembers = [
    {
      name: "Prof. Ananya Singh",
      title: "Program Director, Interior Design",
      bio: "Former design lead at Gensler with 15+ years of experience in residential and commercial interior design.",
      image: "/lovable-uploads/275a175a-0d92-43ee-b13d-136f76aa4f00.png"
    },
    {
      name: "Prof. Rohan Mehta",
      title: "Associate Professor",
      bio: "Award-winning spatial designer specializing in sustainable materials and adaptive reuse.",
      image: "/lovable-uploads/307e4b93-21bc-4e6b-9ee4-096750278ace.png"
    },
    {
      name: "Prof. Maya Patel",
      title: "Visiting Faculty",
      bio: "Founder of Studio Spatium and expert in hospitality design with projects across Southeast Asia.",
      image: "/lovable-uploads/938cccc7-6337-481e-861d-5cedb08cafd7.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">EXPERT FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn from Industry Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Interior Design program is led by accomplished designers and academics with extensive industry experience and passion for teaching.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bsd-gray">{faculty.name}</h3>
                  <p className="text-bsd-orange font-medium mb-3">{faculty.title}</p>
                  <p className="text-foreground/70 mb-4">{faculty.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="text-center mt-12">
            <AnimatedButton href="/admissions/faculty" variant="outline">
              View All Faculty
            </AnimatedButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
