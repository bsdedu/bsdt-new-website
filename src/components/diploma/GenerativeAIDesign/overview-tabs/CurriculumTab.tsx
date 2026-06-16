import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Sparkles, Lightbulb, Layers, Rocket, Compass, GraduationCap } from "lucide-react";

const phases = [
  {
    icon: Sparkles,
    title: "Phase 1: AI Foundations for Design Workflows",
    items: [
      "Understanding AI capabilities in design (practical use cases)",
      "Prompt strategy for controlled outputs",
      "Introduction to generative tools such as Midjourney and DALL·E",
      "Iteration techniques and visual consistency",
    ],
  },
  {
    icon: Lightbulb,
    title: "Phase 2: AI for Design Exploration and Concept Development",
    items: [
      "Rapid concept generation for interiors, architecture, branding, and products",
      "Moodboards, style exploration, and variations",
      "Translating AI outputs into structured design ideas",
      "Visual storytelling and presentation",
    ],
  },
  {
    icon: Layers,
    title: "Phase 3: AI Integration with Design Software",
    items: [
      "AI workflows integrated with Adobe Photoshop",
      "AI-assisted workflows with SketchUp",
      "Introduction to AI integration in Autodesk Revit environments",
      "Converting AI concepts into usable design assets",
    ],
  },
  {
    icon: Rocket,
    title: "Phase 4: AI for Production and Efficiency",
    items: [
      "Reducing project timelines using AI-assisted workflows",
      "Batch generation and variation systems",
      "Automation of repetitive design tasks",
      "Building efficient personal workflows",
    ],
  },
  {
    icon: Compass,
    title: "Phase 5: Domain-Focused Application Tracks (students choose one focus)",
    items: [
      "Interior and architectural workflows",
      "Visual communication and branding workflows",
      "UI/UX concept development workflows",
      "Product and furniture design exploration",
    ],
  },
  {
    icon: GraduationCap,
    title: "Phase 6: Professional Practice and Portfolio Development",
    items: [
      "End-to-end project simulation",
      "Client brief to final delivery using AI workflows",
      "Portfolio creation with AI-integrated projects",
      "Positioning as an AI-enabled designer",
    ],
  },
];

export const CurriculumTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Course Structure (6 Months)</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-foreground/70">
              The Professional Diploma in Generative AI for Design Practice is structured across six progressive phases—from AI foundations to portfolio-ready professional practice.
            </p>

            <div className="space-y-6">
              {phases.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div key={i} className="space-y-2">
                    <h4 className="font-medium text-bsd-gray flex items-center">
                      <Icon className="w-5 h-5 text-bsd-orange mr-2" />
                      {phase.title}
                    </h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Capstone & Portfolio</h3>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70 mb-4">
            The program culminates in an end-to-end capstone where you simulate a real client engagement using AI-integrated workflows:
          </p>
          <ul className="space-y-3">
            {[
              "Translate a client brief into AI-driven design directions",
              "Generate, refine, and iterate concepts at production speed",
              "Integrate AI outputs into Photoshop, SketchUp, and Revit",
              "Build a domain-focused project in your chosen track",
              "Deliver a professional portfolio of AI-integrated projects",
              "Position yourself as an AI-enabled designer in the market",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm text-bsd-gray font-medium">
              Graduates leave with a portfolio that demonstrates measurable productivity gains and a clear, market-ready positioning as an AI-enabled designer.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
