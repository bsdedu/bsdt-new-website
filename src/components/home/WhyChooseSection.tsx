import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Palette, Globe } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui-elements/Card";
import { Link } from "react-router-dom";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  icon,
  title,
  description,
  href,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link to={href}>
      <Card 
        isHoverable 
        className={`h-full transition-all duration-500 cursor-pointer ${isHovered ? 'shadow-lg shadow-bsd-orange/10 -translate-y-2' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${isHovered ? 'bg-bsd-orange text-white' : 'bg-bsd-orange/10'}`}>
            {icon}
          </div>
          <h3 className={`text-xl font-bold mb-2 transition-all duration-500 ${isHovered ? 'text-bsd-orange' : 'text-bsd-gray'}`}>
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export const WhyChooseSection: React.FC = () => {
  const advantages = [
    {
      icon: <BookOpen className="w-7 h-7 text-bsd-orange" />,
      title: "Skill-Enhancing Electives",
      description: "Industry-relevant certificate electives embedded into undergraduate programs — from Figma-based digital presentation to BIM, VFX, and design entrepreneurship.",
      href: "/academics/skill-enhancing-electives"
    },
    {
      icon: <Palette className="w-7 h-7 text-bsd-orange" />,
      title: "Studio BSD",
      description: "State-of-the-art design studios, digital labs, and innovation spaces equipped with professional-grade tools for hands-on creative exploration.",
      href: "/studio-bsd"
    },
    {
      icon: <Globe className="w-7 h-7 text-bsd-orange" />,
      title: "We Go Beyond Curriculum",
      description: "Off-campus learning, industry-led workshops, educational site visits, and global exposure opportunities that extend learning far beyond the classroom.",
      href: "/we-go-beyond-curriculum"
    }
  ];

  return (
    <section id="why-choose" className="bg-white relative overflow-hidden py-[30px]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-bsd-orange/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <RevealSection scale={true} duration={900} easing="ease-in-out">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">Why Choose BSDT?</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
              BSDT Advantage
            </h2>
            <p className="text-foreground/70">
              Experience a design education that goes beyond theory — with industry-aligned electives, world-class studios, and experiential learning opportunities.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <RevealSection key={index} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'} distance={30}>
                <AdvantageCard 
                  icon={item.icon} 
                  title={item.title} 
                  description={item.description} 
                  href={item.href}
                  index={index} 
                />
              </RevealSection>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
