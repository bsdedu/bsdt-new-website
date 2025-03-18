
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui-elements/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  }
];

const diplomaPrograms: Program[] = [
  {
    icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Diploma in Graphic Design + UI & UX",
    description: "An integrated program combining graphic design fundamentals with user interface and experience design principles for digital platforms.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {undergraduatePrograms.map((program, idx) => (
              <Link key={idx} to={program.href} className="block h-full">
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
            ))}
          </div>
        </TabsContent>

        <TabsContent value="diploma" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomaPrograms.map((program, idx) => (
              <Link key={idx} to={program.href} className="block h-full">
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
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-10 text-center">
        <Button size="lg" className="bg-bsd-orange text-white hover:bg-bsd-orange/90">
          View All Programs
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
