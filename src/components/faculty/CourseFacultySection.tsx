import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { facultyMembers } from './data/index';
import { Quote, Award, Users, BookOpen } from "lucide-react";

export const CourseFacultySection: React.FC = () => {
  const designFaculty = facultyMembers.filter(faculty => 
    faculty.department === 'Design' || 
    (Array.isArray(faculty.department) && faculty.department.includes('Design'))
  );

  const technologyFaculty = facultyMembers.filter(faculty => 
    faculty.department === 'Technology' || 
    (Array.isArray(faculty.department) && faculty.department.includes('Technology'))
  );

  const internationalFaculty = facultyMembers.filter(faculty => 
    faculty.department === 'International Faculty' || 
    (Array.isArray(faculty.department) && faculty.department.includes('International Faculty'))
  );

  const guestFaculty = facultyMembers.filter(faculty => 
    faculty.department === 'Guest Faculty' || 
    (Array.isArray(faculty.department) && faculty.department.includes('Guest Faculty'))
  );

  const facultyHighlights = [
    {
      icon: Award,
      title: "Industry Veterans",
      description: "Faculty with 15+ years of professional practice across design and technology"
    },
    {
      icon: Users,
      title: "Working Professionals",
      description: "Active practitioners who bring current industry trends and real-world challenges"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Advanced degrees from prestigious institutions with focus on design and technology"
    }
  ];

  const renderFacultyGrid = (faculty: any[], title: string, badgeText: string) => {
    if (faculty.length === 0) return null;

    return (
      <RevealSection delay={100}>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Badge variant="bsdOrange" className="mb-4">{badgeText}</Badge>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray mb-4">
            {title}
          </h3>
          <p className="text-foreground/70">
            Meet our experienced faculty members who bring industry expertise and academic excellence to your learning journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {faculty.map((member) => (
            <Card key={member.id}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">{member.name}</h3>
                  <p className="text-sm text-bsd-orange">{member.role}</p>
                  <p className="mt-4 text-sm text-foreground/70">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </RevealSection>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">EXPERT FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn from Leading Design & Technology Professionals
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty combines academic excellence with professional practice, bringing years of industry experience and cutting-edge knowledge to the classroom.
            </p>
          </div>
        </RevealSection>

        {/* Design Faculty */}
        {renderFacultyGrid(designFaculty, "Design Faculty", "DESIGN EXPERTS")}

        {/* Technology Faculty */}
        {renderFacultyGrid(technologyFaculty, "Technology Faculty", "TECH EXPERTS")}

        {/* International Faculty */}
        {renderFacultyGrid(internationalFaculty, "International Faculty", "GLOBAL EXPERTISE")}

        {/* Guest Faculty */}
        {renderFacultyGrid(guestFaculty, "Guest Faculty", "INDUSTRY MENTORS")}

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {facultyHighlights.map((highlight, index) => (
              <Card key={index} className="text-center border-0 bg-bsd-light-gray">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-bsd-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray mb-3">{highlight.title}</h3>
                  <p className="text-foreground/70">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          <Card className="bg-gradient-to-br from-bsd-orange/5 to-bsd-gray/5 border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Quote className="w-12 h-12 text-bsd-orange mb-6" />
                  <blockquote className="text-lg text-foreground/80 mb-6 italic">
                    "Excellence in education comes from the perfect blend of industry experience and academic rigor. Our faculty brings both worlds together to prepare students for successful careers in design and technology."
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Faculty Expertise Areas</h4>
                    <ul className="mt-3 space-y-1 text-foreground/70">
                      <li>• Interior Design & Spatial Planning</li>
                      <li>• Graphic Design & Visual Communication</li>
                      <li>• UI/UX Design & Human-Computer Interaction</li>
                      <li>• Digital Technologies & Innovation</li>
                      <li>• Sustainable Design Practices</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Faculty member working on design" 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealSection>
      </div>
    </section>
  );
};