
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLocation } from 'react-router-dom';

type FacultyMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

export const FacultySection: React.FC = () => {
  const location = useLocation();
  const isAnimationProgram = location.pathname.includes('animation-game-design');
  const isComputerScienceProgram = location.pathname.includes('bsc-cs-analytics-security');
  const isBCAProgram = location.pathname.includes('bca-uiux-aiml');
  
  // Different faculty members based on program type
  let facultyMembers: FacultyMember[] = [];
  
  if (isAnimationProgram) {
    facultyMembers = [
      {
        name: "Dr. Anil Prakash",
        role: "Head of Animation Department",
        bio: "Ph.D. in Animation & Visual Effects from Savannah College of Art and Design. 12+ years of experience in 3D animation and visual effects with credits on international film productions. Previously worked with Dreamworks Animation and led projects at Technicolor India.",
        imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fit=crop&w=300&h=300",
      },
      {
        name: "Prof. Meera Desai",
        role: "Game Design Faculty",
        bio: "MFA in Game Design from NYU Tisch School of the Arts. Veteran game designer with experience at Ubisoft and Electronic Arts. Has developed multiple award-winning mobile and console games, specializing in game mechanics, level design, and interactive storytelling.",
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=300&h=300",
      },
      {
        name: "Rohit Sharma",
        role: "Character Animation Specialist",
        bio: "Graduate of Vancouver Film School's Animation Program with specialization in character animation. 8+ years of industry experience in character rigging and animation. Has worked on animated features for Disney and Sony Pictures Animation, bringing characters to life through compelling motion.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300",
      },
    ];
  } else if (isComputerScienceProgram) {
    facultyMembers = [
      {
        name: "Dr. Priya Sharma",
        role: "Head of Computer Science Department",
        bio: "Ph.D. in Computer Science from IIT Delhi with specialization in Machine Learning and AI. 15+ years of academic and research experience with contributions to numerous international journals. Previously led AI research teams at IBM Research and Microsoft Research India.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=300&h=300",
      },
      {
        name: "Prof. Rajiv Mehta",
        role: "Cyber Security Specialist",
        bio: "M.Tech in Information Security from IIIT Hyderabad and CISSP certified. 12+ years of industry experience in cyber security, having worked with major financial institutions and government agencies on critical infrastructure security. Former security consultant at Deloitte and Ernst & Young.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300",
      },
      {
        name: "Dr. Ananya Gupta",
        role: "Data Analytics Faculty",
        bio: "Ph.D. in Statistical Computing from Carnegie Mellon University. Expert in Big Data technologies and predictive analytics with extensive experience in both academic research and industry applications. Has published research on data mining techniques and led data science teams at Amazon and Flipkart.",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?fit=crop&w=300&h=300",
      },
    ];
  } else if (isBCAProgram) {
    facultyMembers = [
      {
        name: "Dr. Vikram Patel",
        role: "Head of BCA Department",
        bio: "Ph.D. in Human-Computer Interaction from Georgia Tech. 10+ years of experience in UI/UX research and teaching. Previously worked as a UX lead at Google and has published extensively on user-centered design methodologies. Specializes in accessibility and inclusive design.",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300",
      },
      {
        name: "Prof. Neha Gupta",
        role: "UI/UX Design Faculty",
        bio: "Master's in Interaction Design from NID Ahmedabad with expertise in design thinking and user research. Has worked with multiple startups and established companies as a design consultant. Her focus areas include mobile interfaces, service design, and design systems.",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=300&h=300",
      },
      {
        name: "Dr. Arjun Krishnan",
        role: "AI & ML Specialist",
        bio: "Ph.D. in Machine Learning from MIT with specialization in natural language processing. Has led AI research projects at Microsoft Research and contributed to open-source machine learning libraries. Author of several papers on neural networks and reinforcement learning.",
        imageUrl: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?fit=crop&w=300&h=300",
      },
    ];
  } else {
    facultyMembers = [
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
  }

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
