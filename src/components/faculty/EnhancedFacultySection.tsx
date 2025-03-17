
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Book, Award, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Department = 'Design' | 'Architecture' | 'Technology' | 'Management' | 'All';

interface FacultyMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  department: Department | Department[];
  qualifications?: string;
  specialization?: string;
  achievements?: string;
}

export const EnhancedFacultySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<Department>('All');
  
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name: "Dipti Dineshwar",
      role: "Senior Design Faculty",
      bio: "An architect from BMS School of Architecture with experience in Bangalore and Jaipur. Dipti leads academic programs at BSD, helping students develop design skills through workshops and projects. She specializes in design theory and architectural history, with a Harvard certification in 'The Architectural Imagination'.",
      imageUrl: "/lovable-uploads/796f352b-67e6-4210-9634-1eebb7b9b5eb.png",
      department: 'Architecture',
      qualifications: "B.Arch, BMS School of Architecture",
      specialization: "Architectural Design, Design Theory",
      achievements: "Harvard Certification in 'The Architectural Imagination'"
    },
    {
      id: 2,
      name: "Jainy Steve George",
      role: "Lead Faculty",
      bio: "An architect graduate from Manipal School of Architecture with international experience. Jainy has worked on architectural projects in Bahrain and Bangalore, including residential and commercial designs. She has contributed to the Ministry of Education in Bahrain and commercial projects in Saudi Arabia.",
      imageUrl: "/lovable-uploads/60503a43-efdf-4b52-b5eb-9820520a9f2c.png",
      department: 'Architecture',
      qualifications: "B.Arch, Manipal School of Architecture",
      specialization: "Residential and Commercial Design, International Architecture",
      achievements: "Projects with Ministry of Education in Bahrain"
    },
    {
      id: 3,
      name: "Aditha Verma Raj",
      role: "Senior Design Faculty",
      bio: "An architecture graduate from Thiagarajar School of Architecture with over eight years of professional experience in hotels, commercial buildings, and luxury villas. Currently a senior architect at Design Studio, Aditha has been with BSDT since its inception, mentoring students and providing industry-relevant guidance.",
      imageUrl: "/lovable-uploads/cf4f9117-b682-4731-a2bd-2235671a4373.png",
      department: 'Architecture',
      qualifications: "B.Arch, Thiagarajar School of Architecture",
      specialization: "Hotels, Commercial Buildings, Luxury Villas",
      achievements: "8+ years professional experience, Senior Architect at Design Studio"
    },
    {
      id: 4,
      name: "Harish Narayan",
      role: "Faculty, UI/UX Design & Product Management",
      bio: "A skilled product manager specializing in UI/UX and collaboration tools. With a post-graduate degree in Management from Great Lakes Institute and a bachelor's in Instrumentation Technology from M S Ramaiah Institute, his expertise in user experience and metrics has led to significant contributions in the tech industry.",
      imageUrl: "/lovable-uploads/ba42a875-3428-489e-84f5-b44223159d85.png",
      department: ['Design', 'Technology'],
      qualifications: "PG in Management, Great Lakes Institute; B.Tech, M S Ramaiah Institute",
      specialization: "UI/UX Design, Product Management, Collaboration Tools",
      achievements: "Significant contributions to tech industry products"
    },
    {
      id: 5,
      name: "J. Sheeba Selvapattu",
      role: "Faculty, Computer Science & Cybersecurity",
      bio: "With a Master's in Information Technology and currently pursuing a Ph.D. in Computer Science, Sheeba brings 4.5 years of experience as a researcher and academician. Her expertise in cybersecurity, cloud computing, and programming languages like Python and Java, along with several Scopus-indexed research publications, enriches the learning experience.",
      imageUrl: "/lovable-uploads/121fd226-ad55-481d-b095-79c9e4765b16.png",
      department: 'Technology',
      qualifications: "M.Tech in Information Technology, Pursuing Ph.D. in Computer Science",
      specialization: "Cybersecurity, Cloud Computing, Python, Java",
      achievements: "Scopus-indexed research publications, 4.5 years as researcher and academician"
    },
    {
      id: 6,
      name: "Shyni K C",
      role: "Faculty, Computer Applications",
      bio: "An experienced educator with 18 years of teaching experience, Shyni holds a Master's in Computer Applications and a Bachelor's in Mathematics. Her strong foundation in computational thinking and problem-solving drives her passion for mathematics and computer science education, empowering students with critical thinking skills relevant to the evolving tech industry.",
      imageUrl: "/lovable-uploads/3e1b6482-f28a-4680-9931-2f728b80d0eb.png",
      department: 'Technology',
      qualifications: "MCA, B.Sc. in Mathematics",
      specialization: "Computer Applications, Mathematics, Computational Thinking",
      achievements: "18 years of teaching experience"
    },
    {
      id: 7,
      name: "Sahana Sundar",
      role: "Associate Faculty, Design",
      bio: "A passionate and well-trained animator, character designer, and storyteller with experience in 2D and 3D animation for films and games. Sahana brings expertise in character design, 3D modeling, texturing, and VFX to help students develop creative solutions.",
      imageUrl: "/lovable-uploads/bd166343-0db2-4cf7-b8cf-209cc56641bc.png",
      department: 'Design',
      qualifications: "B.Des in Animation and Game Design",
      specialization: "Animation, Character Design, 3D Modeling, Storytelling",
      achievements: "Professional experience in film and game animation"
    },
    {
      id: 8,
      name: "Anish Nayak",
      role: "Senior Faculty, Design",
      bio: "A creative professional with experience in digital design, UX/UI, and branding. Anish has worked with leading design studios and tech companies, bringing real-world knowledge to the classroom. His approach combines design thinking with technical implementation.",
      imageUrl: "/lovable-uploads/cdcb8556-cfb5-4124-be04-f0f32a8ce017.png",
      department: 'Design',
      qualifications: "M.Des in User Experience, B.Des in Visual Communication",
      specialization: "UX/UI Design, Branding, Digital Design",
      achievements: "Projects with leading tech companies and design studios"
    },
    {
      id: 9,
      name: "Dr. Rekha Srinivasan",
      role: "Head of Management Studies",
      bio: "With over 15 years in academia and industry, Dr. Rekha brings extensive knowledge in strategic management and organizational behavior. Her research focuses on educational leadership and innovation management.",
      imageUrl: "/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png",
      department: 'Management',
      qualifications: "Ph.D. in Management, MBA from IIM",
      specialization: "Strategic Management, Organizational Behavior, Innovation Management",
      achievements: "Published research in top-tier journals, Consulting experience with Fortune 500 companies"
    }
  ];

  const filteredFaculty = facultyMembers.filter(faculty => {
    // Filter by search term
    const searchMatch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       faculty.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       faculty.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by department
    const departmentMatch = activeTab === 'All' || 
                           (Array.isArray(faculty.department) 
                             ? faculty.department.includes(activeTab)
                             : faculty.department === activeTab);
    
    return searchMatch && departmentMatch;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">MEET OUR TEAM</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Expert Faculty with Industry Experience
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty members bring real-world experience and academic excellence to create an exceptional learning environment.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 h-4 w-4" />
              <Input
                placeholder="Search faculty..."
                className="pl-10 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="All" className="w-full md:w-auto" onValueChange={(value) => setActiveTab(value as Department)}>
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Design">Design</TabsTrigger>
                <TabsTrigger value="Architecture">Architecture</TabsTrigger>
                <TabsTrigger value="Technology">Technology</TabsTrigger>
                <TabsTrigger value="Management">Management</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredFaculty.length > 0 ? (
              filteredFaculty.map((faculty) => (
                <Card key={faculty.id} className="overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className="h-64 bg-bsd-light-gray overflow-hidden">
                      <Avatar className="h-full w-full">
                        <AvatarImage 
                          src={faculty.imageUrl} 
                          alt={faculty.name}
                          className="object-cover object-top w-full h-full"
                        />
                        <AvatarFallback className="text-2xl font-medium">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-bsd-orange/80 text-white">
                        {Array.isArray(faculty.department) ? faculty.department.join(', ') : faculty.department}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-bsd-gray">{faculty.name}</h3>
                    <p className="text-bsd-orange font-medium mb-3">{faculty.role}</p>
                    
                    <div className="space-y-4 mt-4">
                      {faculty.qualifications && (
                        <div className="flex items-start gap-2">
                          <GraduationCap className="w-5 h-5 text-bsd-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-bsd-gray">Qualifications</p>
                            <p className="text-sm text-foreground/70">{faculty.qualifications}</p>
                          </div>
                        </div>
                      )}
                      
                      {faculty.specialization && (
                        <div className="flex items-start gap-2">
                          <Book className="w-5 h-5 text-bsd-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-bsd-gray">Specialization</p>
                            <p className="text-sm text-foreground/70">{faculty.specialization}</p>
                          </div>
                        </div>
                      )}
                      
                      {faculty.achievements && (
                        <div className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-bsd-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-bsd-gray">Achievements</p>
                            <p className="text-sm text-foreground/70">{faculty.achievements}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 bg-bsd-light-gray/50 rounded-xl">
                <p className="text-foreground/60">No faculty members match your search criteria.</p>
              </div>
            )}
          </div>
        </RevealSection>
        
        <RevealSection delay={300}>
          <div className="mt-16 bg-bsd-light-gray rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Visiting Faculty Program</h3>
                <p className="text-foreground/70">
                  Our program is enriched by industry professionals who visit as guest lecturers, workshop conductors, and mentors, bringing current industry trends and practices directly to our students. These practitioners provide invaluable insights from their active careers, ensuring our curriculum remains aligned with industry needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Faculty Development</h3>
                <p className="text-foreground/70">
                  At BSDT, we invest in our faculty's continuous professional development through workshops, research opportunities, industry collaborations, and conference participation. This commitment ensures our educators remain at the forefront of their disciplines, bringing cutting-edge knowledge and methodologies to the classroom.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
