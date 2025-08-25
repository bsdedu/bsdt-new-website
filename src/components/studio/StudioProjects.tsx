
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  image: string;
  program: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, client, description, image, program }) => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="aspect-video w-full relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute top-3 left-3">
          <Badge variant="bsdOrange">{program}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-bsd-gray mb-1">{title}</h3>
        <p className="text-sm text-bsd-orange mb-3">Client: {client}</p>
        <p className="text-foreground/70 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export const StudioProjects: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Le Roma",
      client: "Private Residential Client",
      description: "Contemporary residential villa design featuring modern architectural elements with luxurious interior spaces that blend functionality with aesthetic appeal.",
      image: "/lovable-uploads/918ba3b8-127b-49f0-b63b-6ef8a1ab1a92.png",
      program: "Architecture & Interior Design"
    },
    {
      title: "Mr. Shankar Prasad Residence",
      client: "Mr. Shankar Prasad",
      description: "Complete architectural design and interior renovation of a family residence, incorporating traditional elements with contemporary living requirements.",
      image: "/lovable-uploads/cac01043-f439-47a5-b149-4f3671523b24.png",
      program: "Architecture & Interior Design"
    },
    {
      title: "Ranipet Residence",
      client: "Private Family",
      description: "Residential architectural project featuring sustainable design principles and modern interior spaces tailored for multi-generational living.",
      image: "/lovable-uploads/b3d5489b-605a-4870-b280-525a1b456ebb.png",
      program: "Architecture & Interior Design"
    },
    {
      title: "Kodai Residence",
      client: "Private Client - Kodaikanal",
      description: "Hill station residence design that harmonizes with the natural landscape while providing contemporary amenities and sophisticated interior design.",
      image: "/lovable-uploads/4c8b3b7b-db32-48d5-af5a-b34c4f832998.png",
      program: "Architecture & Interior Design"
    },
    {
      title: "Mr. Kushal Residence",
      client: "Confidential Client",
      description: "Innovative residential design project showcasing cutting-edge architectural solutions and premium interior design concepts for modern living.",
      image: "/lovable-uploads/cdd68fbe-7528-442e-9924-1870ab349cd6.png",
      program: "Architecture & Interior Design"
    },
    {
      title: "Project 6",
      client: "Confidential Client",
      description: "Architectural and interior design project featuring sustainable building practices and contemporary design aesthetics for residential spaces.",
      image: "/lovable-uploads/c0c5b503-eeb4-4331-ae7e-38ef5d9f2675.png",
      program: "Architecture & Interior Design"
    }
  ];

  return (
    <section id="studio-projects" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROFESSIONAL PORTFOLIO</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Real Projects, Real Impact
            </h2>
            <p className="mt-4 text-foreground/70">
              Studio BSD - Design Studio Architecture & Interior Practice showcases real residential and commercial projects, delivering professional architectural and interior design solutions that impact communities and create lasting value.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
