import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Sparkles, Eye, Lightbulb, Palette, Building2, Megaphone, MonitorSmartphone, Briefcase } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, description, icon }) => (
  <Card className="border-0 shadow-sm bg-white overflow-hidden">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5 mt-1">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-bsd-gray">{title}</h3>
          <p className="text-sm text-foreground/70 mt-1">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const CareerPathsTab: React.FC = () => {
  const roles = [
    {
      title: "AI-assisted Designer",
      description: "Embed generative AI tools into day-to-day design production across briefs and deliverables.",
      icon: <Sparkles className="w-5 h-5 text-bsd-orange" />,
    },
    {
      title: "Visualization Specialist",
      description: "Produce high-quality concept visuals and renders for interiors, architecture, and product design.",
      icon: <Eye className="w-5 h-5 text-bsd-orange" />,
    },
    {
      title: "Concept Designer",
      description: "Generate, refine, and present design directions using AI-driven exploration and moodboarding.",
      icon: <Lightbulb className="w-5 h-5 text-bsd-orange" />,
    },
    {
      title: "Creative Designer",
      description: "Lead AI-integrated creative work across branding, campaigns, and digital design.",
      icon: <Palette className="w-5 h-5 text-bsd-orange" />,
    },
  ];

  const employers = [
    {
      title: "Architecture and Interior Design Firms",
      description: "Use AI for rapid concept generation, visualization, and design iteration.",
      icon: <Building2 className="w-5 h-5 text-bsd-orange" />,
    },
    {
      title: "Creative and Branding Agencies",
      description: "Apply generative tools to campaigns, brand identity, and content production.",
      icon: <Megaphone className="w-5 h-5 text-bsd-orange" />,
    },
    {
      title: "Digital Design Studios",
      description: "Integrate AI into UI/UX exploration, product visuals, and digital storytelling.",
      icon: <MonitorSmartphone className="w-5 h-5 text-bsd-orange" />,
    },
    {
      title: "Freelance and Independent Practice",
      description: "Run a leaner, faster studio with AI-powered workflows and scalable output.",
      icon: <Briefcase className="w-5 h-5 text-bsd-orange" />,
    },
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((r, i) => <RoleCard key={i} {...r} />)}
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Potential Employers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {employers.map((r, i) => <RoleCard key={i} {...r} />)}
          </div>
        </div>

        <div className="bg-bsd-light-gray rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-bsd-gray mb-2">Why Generative AI for Designers</h3>
          <p className="text-foreground/70">
            Generative AI is reshaping how design work is conceived, produced, and delivered. Designers who can integrate AI into real production workflows are increasingly in demand—able to ship faster, communicate ideas more effectively, and unlock new creative and commercial possibilities.
          </p>
        </div>
      </div>
    </RevealSection>
  );
};
