
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { GanttChartSquare, Sparkles, Combine, Gamepad2 } from "lucide-react";

interface ToolItemProps {
  name: string;
  description: string;
}

const ToolItem: React.FC<ToolItemProps> = ({ name, description }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h4 className="text-bsd-gray font-medium">{name}</h4>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};

export const SoftwareToolsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <GanttChartSquare className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">UX Design & Prototyping Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="Figma"
                description="The industry-standard collaborative design tool for creating wireframes, prototypes, and UI designs."
              />
              <ToolItem 
                name="Adobe XD"
                description="Vector-based design tool for creating wireframes, prototypes, and interactive experiences."
              />
              <ToolItem 
                name="Sketch"
                description="Digital design platform used to create, prototype, and collaborate on UI/UX designs."
              />
              <ToolItem 
                name="InVision"
                description="Digital product design platform for prototyping and collaboration across teams."
              />
              <ToolItem 
                name="Axure RP"
                description="Advanced prototyping tool for creating complex, interactive wireframes and prototypes."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">AI-Powered Design Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="Midjourney"
                description="AI image generation tool that helps designers create visual concepts and inspiration."
              />
              <ToolItem 
                name="ChatGPT for UX Writing"
                description="AI writing assistant that helps create and refine UX copy and content."
              />
              <ToolItem 
                name="Uizard"
                description="AI-powered design tool that converts sketches and wireframes into digital designs."
              />
              <ToolItem 
                name="Galileo AI"
                description="AI design assistant that generates UI components and layouts based on text prompts."
              />
              <ToolItem 
                name="Figma AI features"
                description="Built-in AI capabilities like auto layout, smart components, and text generation."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Combine className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">User Research & Testing Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="Maze"
                description="User testing platform for gathering insights on prototypes, messaging, and features."
              />
              <ToolItem 
                name="Hotjar"
                description="Behavior analytics tool that reveals user behavior through heatmaps and session recordings."
              />
              <ToolItem 
                name="UserTesting"
                description="Platform for getting rapid user feedback through video-based usability testing."
              />
              <ToolItem 
                name="Optimal Workshop"
                description="Suite of user research tools for information architecture, card sorting, and tree testing."
              />
              <ToolItem 
                name="Lookback"
                description="User research platform for conducting live interviews and usability tests."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">Collaboration & Handoff Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="Zeplin"
                description="Connected space for product teams to share, organize and collaborate on designs."
              />
              <ToolItem 
                name="Abstract"
                description="Design workflow platform that helps teams work together on Sketch files."
              />
              <ToolItem 
                name="Miro"
                description="Online collaborative whiteboard platform for team brainstorming and planning."
              />
              <ToolItem 
                name="Notion"
                description="All-in-one workspace for notes, documents, wikis, and project management."
              />
              <ToolItem 
                name="Loom"
                description="Video messaging tool that helps communicate design decisions through screen recording."
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-bsd-light-gray rounded-xl p-6">
        <h3 className="text-lg font-semibold text-bsd-gray mb-4">Software Training Approach</h3>
        <p className="text-foreground/70">
          Our Professional Diploma in HCI for UI/UX provides comprehensive training on these industry-standard tools. The curriculum focuses on teaching the underlying principles and methodologies, while also providing hands-on experience with the most relevant software. This approach ensures that graduates can adapt to various tools used in different companies, as well as quickly learn new software that may emerge in this rapidly evolving field.
        </p>
      </div>
    </RevealSection>
  );
};
