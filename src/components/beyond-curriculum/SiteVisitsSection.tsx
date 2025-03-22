
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Building, Hammer, PenTool, Cpu } from 'lucide-react';

interface SiteVisitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const SiteVisitCard: React.FC<SiteVisitCardProps> = ({ title, description, icon, image }) => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="aspect-video w-full relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-bsd-gray mb-2">{title}</h3>
            <p className="text-foreground/70 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const SiteVisitsSection: React.FC = () => {
  const siteVisits: SiteVisitCardProps[] = [
    {
      title: "Architectural Landmarks",
      description: "Visits to significant architectural sites where students analyze design principles, structural solutions, and contextual integration of buildings.",
      icon: <Building className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/e89cc1d4-b789-4ae4-8c9a-5d9bb88744cd.png"
    },
    {
      title: "Manufacturing Facilities",
      description: "Exploration of production facilities to understand materials, manufacturing processes, and quality control systems for product design.",
      icon: <Hammer className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/cd3d39f9-b653-4797-bdd2-ac99084ae0ec.png"
    },
    {
      title: "Design Studios",
      description: "Tours of professional design studios where students observe workflow organization, client interaction, and creative collaboration in action.",
      icon: <PenTool className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/f8cc79a4-4428-4787-83df-808a715df0a1.png"
    },
    {
      title: "Technology Hubs",
      description: "Visits to technology centers and innovation hubs where students witness cutting-edge applications of digital design and development.",
      icon: <Cpu className="w-5 h-5 text-bsd-orange" />,
      image: "/lovable-uploads/f41aeb18-b8b9-48e3-9212-ce854e1b4ea9.png"
    }
  ];

  return (
    <section id="site-visits" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FIELD LEARNING</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Educational Site Visits
            </h2>
            <p className="mt-4 text-foreground/70">
              Our carefully curated site visits provide students with direct exposure to professional environments, innovative projects, and industry best practices.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteVisits.map((visit, index) => (
              <SiteVisitCard key={index} {...visit} />
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-bsd-light-gray rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Site Visit Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Pre-Visit Preparation</h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        Students research the site and prepare specific learning objectives and questions to maximize the educational value of the visit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Guided Exploration</h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        Faculty members and industry experts guide students through the site, highlighting key features and explaining relevant processes and principles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Interactive Sessions</h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        Q&A sessions with professionals at the site allow students to gain deeper insights and understand practical applications of their studies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange flex items-center justify-center text-white font-medium flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Reflective Analysis</h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        Following the visit, students document their observations, analyze what they've learned, and apply these insights to their coursework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src="/lovable-uploads/fb4bedc7-ed6b-470b-82fe-e714ed5d7d6a.png" 
                  alt="Students on site visit" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-medium text-lg">Learning through direct observation and professional interaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
