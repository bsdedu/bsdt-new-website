
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "../ui-elements/Card";
import { RevealSection } from "../ui-elements/RevealSection";
import { PenTool, Code, Gamepad, Cpu, Building2, LayoutDashboard, Monitor, GraduationCap, Recycle, Armchair, Sofa, HardHat } from "lucide-react";
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
    icon: <PenTool className="w-6 h-6 text-bsd-orange" />,
    title: "B.Sc Interior Design",
    description: "A 3-year program that combines aesthetic principles with functional design to create compelling and sustainable interior spaces.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "3 years",
    href: "/academics/bsc-interior-design"
  },
  {
    icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
    title: "BVA Graphic & Communication Design",
    description: "A 4-year program teaching visual storytelling, brand identity, and digital media design using industry-standard tools and AI-assisted workflows.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "4 years",
    href: "/academics/bva-graphic-design"
  },
  {
    icon: <Gamepad className="w-6 h-6 text-bsd-orange" />,
    title: "BVA Animation & Game Art",
    description: "A 4-year program where students master 2D/3D animation, game mechanics, and interactive storytelling using cutting-edge technologies.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "4 years",
    href: "/bva-animation-and-multimedia-game-design"
  },
  {
    icon: <Sofa className="w-6 h-6 text-bsd-orange" />,
    title: "BVA Interior & Spatial Design",
    description: "A 4-year program focusing on creating innovative interior environments, spatial planning, and experiential design with sustainability principles.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "4 years",
    href: "/academics/bva-interior-spatial-design"
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
    title: "BCA with Data Analytics & Cyber Security",
    description: "A 3-year program focused on data analytics, cybersecurity fundamentals, and application development for tech-driven careers.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "3 years",
    addons: "Data Analytics & Cyber Security",
    href: "/academics/bca-data-analytics-cyber-security"
  },
];

const diplomaPrograms: Program[] = [
  {
    icon: <PenTool className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Interior Design",
    description: "A professional diploma program focused on teaching interior design principles, space planning, and material selection for various environments. Available in Online & Offline modes.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "12 months",
    addons: "Hybrid – Online & Offline",
    href: "/academics/professional-diploma-in-interior-design"
  },
  {
    icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Visual Communication + UI & UX",
    description: "An integrated program combining visual communication fundamentals with user interface and experience design principles for digital platforms. Available in Online & Offline modes.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "12 months",
    addons: "Hybrid – Online & Offline",
    href: "/academics/professional-diploma-graphics-design-ui-ux"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Landscape Design",
    description: "A professional diploma program focused on sustainable landscape design, environmental planning, and outdoor space development. Available in Online & Offline modes.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "12 months",
    addons: "Hybrid – Online & Offline",
    href: "/academics/post-graduate-diploma-in-landscape-design"
  },
  {
    icon: <Building2 className="w-6 h-6 text-bsd-orange" />,
    title: "Post Graduate Diploma in Residential Architecture and Design",
    description: "An advanced post graduate diploma program for comprehensive residential architecture and design expertise, covering advanced space planning, project management, and design leadership. Available in Online & Offline modes.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "20 months",
    addons: "Hybrid – Online & Offline",
    href: "/academics/master-diploma-in-interior-design"
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in UI & UX",
    description: "A focused Saturday-only program teaching user interface and experience design methodologies, prototyping, and usability testing for digital products.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "6 months",
    addons: "Saturdays Only – Bangalore Campus",
    href: "/academics/diploma-in-hci-for-ui-ux"
  },
  {
    icon: <HardHat className="w-6 h-6 text-bsd-orange" />,
    title: "Post Graduate Diploma in Integrated Construction Management",
    description: "A 16-month post graduate diploma covering construction technology, project management, BIM workflows, and site execution for integrated building delivery.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "16 months",
    addons: "12 + 4 Internship – Hybrid",
    href: "/academics/post-graduate-diploma-integrated-construction-management"
  },
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
                <TabsTrigger value="undergraduate" data-value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="diploma" data-value="diploma">Diploma Programs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="undergraduate" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {undergraduatePrograms.map((program) => (
                  <Link key={program.title} to={program.href} className="block h-full">
                    <Card isHoverable className={program.isFeatured ? "border-bsd-orange/20 shadow-md h-full" : "h-full"}>
                      <CardHeader className="p-4">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", "bg-gradient-to-br", program.color)}>
                          {program.icon}
                        </div>
                        <div className="flex flex-wrap items-start gap-1">
                          <h3 className="text-sm font-semibold text-bsd-gray leading-tight">{program.title}</h3>
                          {program.isFeatured && <Badge variant="bsdOrange" className="text-[8px] px-1.5 py-0">Featured</Badge>}
                        </div>
                        {program.duration && <Badge variant="outline" className="text-[8px] mt-1 bg-white/50">{program.duration}</Badge>}
                        {program.addons && (
                          <p className="text-xs text-bsd-orange font-medium mt-1">
                            {program.addons}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-foreground/70 text-xs line-clamp-3">{program.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diploma" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {diplomaPrograms.map((program) => (
                  <Link key={program.title} to={program.href} className="block h-full">
                    <Card isHoverable className={program.isFeatured ? "border-bsd-orange/20 shadow-md h-full" : "h-full"}>
                      <CardHeader className="p-4">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", "bg-gradient-to-br", program.color)}>
                          {program.icon}
                        </div>
                        <div className="flex flex-wrap items-start gap-1">
                          <h3 className="text-sm font-semibold text-bsd-gray leading-tight">{program.title}</h3>
                          {program.isFeatured && <Badge variant="bsdOrange" className="text-[8px] px-1.5 py-0">Featured</Badge>}
                        </div>
                        {program.duration && <Badge variant="outline" className="text-[8px] mt-1 bg-white/50">{program.duration}</Badge>}
                        {program.addons && (
                          <p className="text-xs text-bsd-orange font-medium mt-1">
                            {program.addons}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-foreground/70 text-xs line-clamp-3">{program.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>

      </div>
    </section>
  );
};
