
import React from 'react';
import { Card, CardContent, CardHeader } from "../ui-elements/Card";
import { RevealSection } from "../ui-elements/RevealSection";
import { Palette, Code, Cpu, PenTool, Building2 } from "lucide-react";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const programs = [
  { 
    icon: <Palette className="w-6 h-6 text-bsd-orange" />,
    title: "Graphic Design",
    description: "Learn to create compelling visual messages through typography, imagery, color and form.",
    color: "from-bsd-orange/10 to-bsd-orange/5"
  },
  { 
    icon: <Code className="w-6 h-6 text-bsd-orange" />,
    title: "Web Development",
    description: "Master the art and technology of creating intuitive and responsive web experiences.",
    color: "from-bsd-gray/10 to-bsd-gray/5"
  },
  { 
    icon: <Cpu className="w-6 h-6 text-bsd-orange" />,
    title: "Technology",
    description: "Explore emerging technologies that are reshaping industries and human experiences.",
    color: "from-bsd-orange/10 to-bsd-gray/5"
  },
  { 
    icon: <PenTool className="w-6 h-6 text-bsd-orange" />,
    title: "UI/UX Design",
    description: "Design digital experiences that are intuitive, accessible and delightful for users.",
    color: "from-bsd-gray/10 to-bsd-orange/5"
  },
  { 
    icon: <Building2 className="w-6 h-6 text-bsd-orange" />,
    title: "Architecture",
    description: "Learn to shape physical spaces that blend form, function and environmental sustainability.",
    color: "from-bsd-light-gray to-white"
  },
];

export const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              Educational Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
              Cutting-edge Programs for Future Creators
            </h2>
            <p className="mt-4 text-foreground/70">
              Our specialized programs are designed to equip students with the skills and knowledge required to excel in today's rapidly evolving design and technology landscape.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <RevealSection key={program.title} delay={index * 100}>
              <Card isHoverable>
                <CardHeader>
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    "bg-gradient-to-br",
                    program.color
                  )}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-bsd-gray">{program.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{program.description}</p>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={300}>
          <div className="mt-16 text-center">
            <a 
              href="#" 
              className="inline-flex items-center text-sm font-medium text-bsd-orange hover:text-bsd-orange/80 transition-colors"
            >
              <span className="border-b border-current transition-all duration-300 hover:pb-1">
                View All Programs
              </span>
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
