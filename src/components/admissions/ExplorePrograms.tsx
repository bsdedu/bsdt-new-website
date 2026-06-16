
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui-elements/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PenTool, Monitor, Gamepad, Code, Building2, LayoutDashboard, GraduationCap, Armchair, Bot, HardHat } from 'lucide-react';
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
  addons?: string;
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
    icon: <Armchair className="w-6 h-6 text-bsd-orange" />,
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
    href: "/academics/b-computer-application-ui-ux"
  }
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
    duration: "12 months",
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
    icon: <Bot className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Generative AI for Design Practice",
    description: "A 6-month Saturday program integrating AI tools like Midjourney and DALL·E into professional design workflows for production-ready outcomes.",
    color: "from-bsd-orange/20 to-bsd-orange/5",
    duration: "6 months",
    addons: "Saturdays Only – Bangalore Campus",
    href: "/academics/professional-diploma-generative-ai-design-practice"
  },
  {
    icon: <HardHat className="w-6 h-6 text-bsd-orange" />,
    title: "Post Graduate Diploma in Integrated Construction Management",
    description: "A 16-month post graduate diploma covering construction technology, project management, BIM workflows, and site execution for integrated building delivery.",
    color: "from-bsd-gray/15 to-bsd-gray/5",
    duration: "16 months",
    addons: "12 + 4 Internship – Hybrid",
    href: "/academics/post-graduate-diploma-integrated-construction-management"
  }
];

export const ExplorePrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState("undergraduate");
  
  return (
    <div>
      <Tabs defaultValue="undergraduate" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md">
            <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
            <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="undergraduate" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {undergraduatePrograms.map((program) => (
              <Link key={program.title} to={program.href} className="block h-full">
                <Card isHoverable className="h-full">
                  <CardHeader className="p-4">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", "bg-gradient-to-br", program.color)}>
                      {program.icon}
                    </div>
                    <div className="flex flex-wrap items-start gap-1">
                      <h3 className="text-sm font-semibold text-bsd-gray leading-tight">{program.title}</h3>
                    </div>
                    <Badge variant="outline" className="text-[8px] mt-1 bg-white/50">{program.duration}</Badge>
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
                <Card isHoverable className="h-full">
                  <CardHeader className="p-4">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", "bg-gradient-to-br", program.color)}>
                      {program.icon}
                    </div>
                    <div className="flex flex-wrap items-start gap-1">
                      <h3 className="text-sm font-semibold text-bsd-gray leading-tight">{program.title}</h3>
                    </div>
                    <Badge variant="outline" className="text-[8px] mt-1 bg-white/50">{program.duration}</Badge>
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
    </div>
  );
};
