
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
      title: "Urban Renewal Campaign",
      client: "Bangalore Municipal Corporation",
      description: "A comprehensive visual identity and awareness campaign for urban renewal initiatives in Bangalore, focusing on sustainability and community engagement.",
      image: "/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png",
      program: "Graphic Design"
    },
    {
      title: "Tech Innovation Center",
      client: "Infosys Foundation",
      description: "Interior design concept and implementation for a technology innovation center that fosters collaboration and creativity for tech startups.",
      image: "/lovable-uploads/cfb45146-ec9d-434c-9b60-ee146c328146.png",
      program: "Interior Design"
    },
    {
      title: "Heritage Conservation AR Experience",
      client: "Karnataka Tourism",
      description: "An interactive augmented reality experience showcasing Karnataka's historical monuments, allowing virtual exploration and educational content delivery.",
      image: "/lovable-uploads/23609cd5-2cbf-4e98-8211-0b953a25a5c3.png",
      program: "Animation & Game Design"
    },
    {
      title: "Sustainable Housing Prototype",
      client: "Green Living Foundation",
      description: "Architectural design for modular, sustainable housing units that utilize local materials and passive cooling techniques for affordable urban housing.",
      image: "/lovable-uploads/4c8b3b7b-db32-48d5-af5a-b34c4f832998.png",
      program: "Architectural Design"
    },
    {
      title: "E-Commerce User Experience Redesign",
      client: "Local Crafts Marketplace",
      description: "Complete UX/UI redesign of an e-commerce platform dedicated to local artisans, resulting in 40% increase in user engagement and sales.",
      image: "/lovable-uploads/c9727b90-962e-4b3e-be56-d9c05c7ddcbb.png",
      program: "UI/UX Design"
    },
    {
      title: "Healthcare Monitoring Application",
      client: "Bangalore Medical Association",
      description: "Mobile application development for patient monitoring and healthcare management, with data analytics dashboard for healthcare providers.",
      image: "/lovable-uploads/c0c5b503-eeb4-4331-ae7e-38ef5d9f2675.png",
      program: "Computer Science"
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
              Our students work on actual client projects that make a difference in the industry and community, building professional portfolios before graduation.
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
