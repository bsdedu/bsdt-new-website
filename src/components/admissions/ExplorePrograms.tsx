
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui-elements/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, PenTool, Monitor, Gamepad, Code, Building2, LayoutDashboard, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Simplified program type
type Program = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  duration: string;
  href: string;
};

const undergraduatePrograms: Program[] = [
  {
    icon: <Building2 className="w-6 h-6 text-bsd-orange" />,
    title: "B.Des in Architectural Design",
    description: "A 4-year program focusing on innovative architectural design principles, integrating sustainable practices with cutting-edge computational design tools.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "4 years",
    href: "/programs/bdes-architectural-design"
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-bsd-orange" />,
    title: "B.Des in Interaction & Experience Design",
    description: "A 4-year program teaching students to create intuitive digital interfaces and meaningful user experiences using advanced UX methodologies and AI tools.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "4 years",
    href: "/programs/bdes-interaction-experience"
  },
  {
    icon: <PenTool className="w-6 h-6 text-bsd-orange" />,
    title: "B.Sc Interior Design",
    description: "A 3-year program that combines aesthetic principles with functional design to create compelling and sustainable interior spaces.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "3 years",
    href: "/programs/bsc-interior-design"
  },
  {
    icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
    title: "BVA Graphic & Communication Design",
    description: "A 4-year program teaching visual storytelling, brand identity, and digital media design using industry-standard tools and AI-assisted workflows.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "4 years",
    href: "/programs/bva-graphic-design"
  },
  {
    icon: <Gamepad className="w-6 h-6 text-bsd-orange" />,
    title: "BVA Animation & Game Design",
    description: "A 4-year program where students master 2D/3D animation, game mechanics, and interactive storytelling using cutting-edge technologies.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "4 years",
    href: "/programs/bva-animation-game-design"
  },
  {
    icon: <Code className="w-6 h-6 text-bsd-orange" />,
    title: "BCA with UI/UX & AI/ML",
    description: "A 3-year program with specializations in UI/UX and AI/ML, preparing students to develop innovative applications and interfaces.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "3 years",
    href: "/programs/bca-uiux-aiml"
  }
];

const diplomaPrograms: Program[] = [
  {
    icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Visual Communication + UI & UX",
    description: "An integrated program combining visual communication fundamentals with user interface and experience design principles for digital platforms.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "1 year",
    href: "/programs/diploma-graphic-uiux"
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in UI & UX",
    description: "A specialized program teaching user interface and experience design methodologies, prototyping, and usability testing for digital products.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "6 months",
    href: "/programs/diploma-uiux"
  },
  {
    icon: <PenTool className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Interior Design",
    description: "A professional diploma program focused on teaching interior design principles, space planning, and material selection for various environments.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "1 year",
    href: "/programs/diploma-interior-design"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-bsd-orange" />,
    title: "Post Grad Diploma in Landscape Design",
    description: "A postgraduate diploma program focused on sustainable landscape design, environmental planning, and outdoor space development.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "1 year",
    href: "/programs/pgd-landscape-design"
  }
];

export const ExplorePrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState("undergraduate");
  
  return (
    <div>
      <Tabs defaultValue="undergraduate" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md">
            <TabsTrigger value="undergraduate">Undergraduate Programs</TabsTrigger>
            <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="undergraduate" className="mt-0">
          <Carousel className="w-full">
            <CarouselContent>
              {undergraduatePrograms.map((program, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={program.href} className="block h-full">
                    <Card isHoverable className="h-full">
                      <CardHeader>
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", "bg-gradient-to-br", program.color)}>
                          {program.icon}
                        </div>
                        <div className="flex flex-wrap items-start gap-2">
                          <h3 className="text-xl font-semibold text-bsd-gray">{program.title}</h3>
                          <Badge variant="outline" className="text-[10px] bg-white/50">{program.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/70 mb-4">{program.description}</p>
                        <div className="flex items-center text-bsd-orange text-sm font-medium">
                          <span>View Program Details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
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
              {diplomaPrograms.map((program, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={program.href} className="block h-full">
                    <Card isHoverable className="h-full">
                      <CardHeader>
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", "bg-gradient-to-br", program.color)}>
                          {program.icon}
                        </div>
                        <div className="flex flex-wrap items-start gap-2">
                          <h3 className="text-xl font-semibold text-bsd-gray">{program.title}</h3>
                          <Badge variant="outline" className="text-[10px] bg-white/50">{program.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/70 mb-4">{program.description}</p>
                        <div className="flex items-center text-bsd-orange text-sm font-medium">
                          <span>View Program Details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
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
    </div>
  );
};
