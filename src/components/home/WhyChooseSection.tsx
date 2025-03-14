import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Handshake, Globe, Users, BookOpen, Box } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui-elements/Card";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description
}) => {
  return <Card isHoverable className="h-full">
      <CardHeader className="">
        <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-bsd-gray mb-2">{title}</h3>
      </CardHeader>
      <CardContent className="">
        <p className="text-foreground/70">{description}</p>
      </CardContent>
    </Card>;
};
export const WhyChooseSection: React.FC = () => {
  const features = [{
    icon: <GraduationCap className="w-6 h-6 text-bsd-orange" />,
    title: "Future-Ready Curriculum",
    description: "Programs aligned with industry trends, integrating AI, IoT, and emerging technologies."
  }, {
    icon: <BookOpen className="w-6 h-6 text-bsd-orange" />,
    title: "Hands-on Learning Approach",
    description: "Live projects, design studios and workshops ensure practical exposure."
  }, {
    icon: <Handshake className="w-6 h-6 text-bsd-orange" />,
    title: "Internships & Placement Assistance",
    description: "Strong industry network for internships, job placements, and career mentoring with on-campus drives."
  }, {
    icon: <Users className="w-6 h-6 text-bsd-orange" />,
    title: "Student-Centric Learning Environment",
    description: "Small class sizes, interactive sessions, and a focus on individual growth."
  }, {
    icon: <Globe className="w-6 h-6 text-bsd-orange" />,
    title: "Global Exposure & Industry Tie-Ups",
    description: "Collaborations with top brands, study tours, and international guest lectures."
  }, {
    icon: <Box className="w-6 h-6 text-bsd-orange" />,
    title: "Innovation Lab Access",
    description: "All programs include access to our state-of-the-art innovation labs equipped with the latest technologies for prototyping and experimentation."
  }];
  return <section id="why-choose" className="bg-white relative overflow-hidden py-[30px]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-bsd-orange/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">Why Choose BSDT?</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
              Shaping Creative Leaders for Tomorrow
            </h2>
            <p className="text-foreground/70">
              At BSDT, we provide a holistic educational experience that prepares you for a successful creative career.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => <RevealSection key={index} delay={index * 100}>
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
              </RevealSection>)}
          </div>
        </RevealSection>
      </div>
    </section>;
};