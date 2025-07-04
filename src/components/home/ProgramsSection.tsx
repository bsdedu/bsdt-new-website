
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "../ui-elements/Card";
import { RevealSection } from "../ui-elements/RevealSection";
import { PenTool, Code, Gamepad, Cpu, Building2, LayoutDashboard, Monitor, GraduationCap } from "lucide-react";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from 'react-router-dom';

// Define the program type to properly handle the optional 'addons' property
type Program = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  duration: string;
  isFeatured?: boolean;
  addons?: string;
  href: string;
};

const undergraduatePrograms: Program[] = [
  {
    icon: <Building2 className="w-6 h-6 text-bsd-orange" />,
    title: "B.Des in Architectural Construction Design",
    description: "A 4-year program focusing on innovative architectural design principles, integrating sustainable practices with cutting-edge computational design tools.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    isFeatured: true,
    duration: "4 years",
    href: "/programs/bdes-architectural-construction"
  }, 
  {
    icon: <LayoutDashboard className="w-6 h-6 text-bsd-orange" />,
    title: "B.Des in Interaction & Experience Design",
    description: "A 4-year program teaching students to create intuitive digital interfaces and meaningful user experiences using advanced UX methodologies and AI tools.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    isFeatured: true,
    duration: "4 years",
    href: "/academics/b-des-interaction-and-experience-design"
  }, 
  {
    icon: <PenTool className="w-6 h-6 text-bsd-orange" />,
    title: "B.Sc Interior Design",
    description: "A 3-year program that combines aesthetic principles with functional design to create compelling and sustainable interior spaces.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "3 years",
    href: "/academics/bsc-interior-design"
  }, 
  {
    icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
    title: "BVA Graphic & Communication Design",
    description: "A 4-year program teaching visual storytelling, brand identity, and digital media design using industry-standard tools and AI-assisted workflows.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "4 years",
    href: "/academics/bva-graphic-design"
  }, 
  {
    icon: <Gamepad className="w-6 h-6 text-bsd-orange" />,
    title: "BVA Animation & Game Design",
    description: "A 4-year program where students master 2D/3D animation, game mechanics, and interactive storytelling using cutting-edge technologies.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "4 years",
    href: "/bva-animation-and-multimedia-game-design"
  }, 
  {
    icon: <Code className="w-6 h-6 text-bsd-orange" />,
    title: "BCA with UI/UX & AI/ML",
    description: "A 3-year program with specializations in UI/UX and AI/ML, preparing students to develop innovative applications and interfaces.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "3 years",
    addons: "UI/UX & AI/ML",
    href: "/academics/b-computer-application-ui-ux"
  }, 
  {
    icon: <Cpu className="w-6 h-6 text-bsd-orange" />,
    title: "B.Sc Computer Science",
    description: "A 3-year program with specializations in Data Analytics and Cyber Security, equipping students with skills to address evolving technological challenges.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "3 years",
    addons: "Data Analytics & Cyber Security",
    href: "/programs/bsc-cs-analytics-security"
  }
];

const diplomaPrograms: Program[] = [
  {
    icon: <PenTool className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Interior Design",
    description: "A professional diploma program focused on teaching interior design principles, space planning, and material selection for various environments.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    isFeatured: true,
    duration: "1 year",
    href: "/academics/professional-diploma-in-interior-design"
  }, 
  {
    icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Visual Communication + UI & UX",
    description: "An integrated program combining visual communication fundamentals with user interface and experience design principles for digital platforms.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    isFeatured: true,
    duration: "1 year",
    href: "/academics/professional-diploma-graphics-design-ui-ux"
  }, 
  {
    icon: <LayoutDashboard className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in UI & UX",
    description: "A specialized program teaching user interface and experience design methodologies, prototyping, and usability testing for digital products.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "6 months",
    href: "/academics/diploma-in-hci-for-ui-ux"
  }, 
  {
    icon: <GraduationCap className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Landscape Design",
    description: "A professional diploma program focused on sustainable landscape design, environmental planning, and outdoor space development.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "1 year",
    href: "/academics/post-graduate-diploma-in-landscape-design"
  }
];

export const ProgramsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("undergraduate");
  
  return (
    <section id="programs" className="relative py-[20px] my-0">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="bsdOrange" className="mb-4">
              Future-Ready Educational Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
              Cutting-edge Programs for Future Creators
            </h2>
            <p className="mt-4 text-foreground/70">
              Our specialized programs integrate the latest technologies and industry practices to equip students with the skills required to excel in today's rapidly evolving design and technology landscape.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="undergraduate" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="undergraduate" className="mt-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {undergraduatePrograms.map((program) => (
                    <CarouselItem key={program.title} className="md:basis-1/2 lg:basis-1/3">
                      <Link to={program.href} className="block h-full">
                        <Card isHoverable className={program.isFeatured ? "border-bsd-orange/20 shadow-md h-full" : "h-full"}>
                          <CardHeader>
                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", "bg-gradient-to-br", program.color)}>
                              {program.icon}
                            </div>
                            <div className="flex flex-wrap items-start gap-2">
                              <h3 className="text-xl font-semibold text-bsd-gray">{program.title}</h3>
                              {program.isFeatured && <Badge variant="bsdOrange" className="text-[10px]">Featured</Badge>}
                              {program.duration && <Badge variant="outline" className="text-[10px] bg-white/50">{program.duration}</Badge>}
                            </div>
                            {program.addons && (
                              <p className="text-sm text-bsd-orange font-medium mt-1">
                                Specializations: {program.addons}
                              </p>
                            )}
                          </CardHeader>
                          <CardContent>
                            <p className="text-foreground/70">{program.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
                  <CarouselNext className="relative static left-0 right-auto translate-y-0" />
                </div>
              </Carousel>
            </TabsContent>

            <TabsContent value="diploma" className="mt-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {diplomaPrograms.map((program) => (
                    <CarouselItem key={program.title} className="md:basis-1/2 lg:basis-1/3">
                      <Link to={program.href} className="block h-full">
                        <Card isHoverable className={program.isFeatured ? "border-bsd-orange/20 shadow-md h-full" : "h-full"}>
                          <CardHeader>
                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", "bg-gradient-to-br", program.color)}>
                              {program.icon}
                            </div>
                            <div className="flex flex-wrap items-start gap-2">
                              <h3 className="text-xl font-semibold text-bsd-gray">{program.title}</h3>
                              {program.isFeatured && <Badge variant="bsdOrange" className="text-[10px]">Featured</Badge>}
                              {program.duration && <Badge variant="outline" className="text-[10px] bg-white/50">{program.duration}</Badge>}
                            </div>
                            {program.addons && (
                              <p className="text-sm text-bsd-orange font-medium mt-1">
                                Specializations: {program.addons}
                              </p>
                            )}
                          </CardHeader>
                          <CardContent>
                            <p className="text-foreground/70">{program.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
                  <CarouselNext className="relative static left-0 right-auto translate-y-0" />
                </div>
              </Carousel>
            </TabsContent>
          </Tabs>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="mt-10 text-center">
            <a 
              href="https://b3454028-e84a-4654-825a-597bc4e4e58d.lovableproject.com/admissions/application-process" 
              className="inline-flex items-center text-sm font-medium text-bsd-orange hover:text-bsd-orange/80 transition-colors"
            >
              <span className="border-b border-current transition-all duration-300 hover:pb-1">
                View All Programs & Admission Details
              </span>
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
