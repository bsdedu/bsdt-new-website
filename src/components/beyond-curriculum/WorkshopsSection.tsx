
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';

interface WorkshopCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, description, image, category }) => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="aspect-video w-full relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute top-3 left-3">
          <Badge variant="bsdOrange">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-bsd-gray mb-3">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export const WorkshopsSection: React.FC = () => {
  const workshops: WorkshopCardProps[] = [
    {
      title: "Digital Illustration Masterclass",
      description: "A comprehensive workshop on creating professional digital illustrations using industry-standard software, led by renowned illustrators.",
      image: "/lovable-uploads/9c640781-a1d2-49e1-a459-0cce96593567.png",
      category: "Graphic Design"
    },
    {
      title: "Architectural Model Making",
      description: "Hands-on workshop teaching architectural students the art of creating precise, professional physical models using various materials.",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      category: "Architecture"
    },
    {
      title: "UI/UX Design Principles",
      description: "Interactive sessions focused on user interface and experience design, covering research methodologies, wireframing, and prototyping.",
      image: "/lovable-uploads/326dbcf6-d2e7-4a16-b000-bbee15c0156c.png",
      category: "Interaction Design"
    },
    {
      title: "3D Animation Fundamentals",
      description: "Workshop covering the principles of 3D animation, including modeling, rigging, texturing, and rendering techniques.",
      image: "/lovable-uploads/e5c57c3a-3200-49fc-a10d-80ac615c7c0d.png",
      category: "Animation"
    }
  ];

  return (
    <section id="workshops" className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">SPECIALIZED WORKSHOPS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Industry-Led Workshops
            </h2>
            <p className="mt-4 text-foreground/70">
              Our specialized workshops bring in industry experts to teach practical skills and cutting-edge techniques that complement theoretical knowledge.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshops.map((workshop, index) => (
              <WorkshopCard key={index} {...workshop} />
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Workshop Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium text-bsd-gray">Skill Enhancement</h4>
                <p className="text-sm text-foreground/70">
                  Students develop specialized technical skills that are directly applicable to their future careers, making them more competitive in the job market.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-bsd-gray">Network Building</h4>
                <p className="text-sm text-foreground/70">
                  Workshops provide valuable opportunities to connect with industry professionals, creating networks that can lead to internships and employment.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-bsd-gray">Portfolio Development</h4>
                <p className="text-sm text-foreground/70">
                  Workshop projects contribute to students' portfolios, showcasing their ability to apply specialized skills to real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
