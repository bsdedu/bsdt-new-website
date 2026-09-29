
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, GraduationCap, BookOpen, Code } from "lucide-react";

const modules = [
  {
    icon: GraduationCap,
    title: "Module 1: Foundations of UI/UX and Human-Centered Design",
    items: [
      "Introduction to UI/UX design principles",
      "Understanding Human Computer Interaction (HCI)",
      "Design thinking methodology",
      "UX laws and usability principles",
      "User psychology and behavior patterns",
      "Understanding how users interact with digital products",
    ],
  },
  {
    icon: BookOpen,
    title: "Module 2: User Research and Experience Strategy",
    items: [
      "User research methods and techniques",
      "Understanding user needs and pain points",
      "Persona creation",
      "Empathy mapping",
      "Customer journey mapping",
      "Information architecture",
      "Structuring digital experiences effectively",
    ],
  },
  {
    icon: Code,
    title: "Module 3: Wireframing, Prototyping and UX Process Execution",
    items: [
      "Low-fidelity and high-fidelity wireframing",
      "User flows and task flows",
      "Interactive prototyping",
      "Complete UX project workflow",
      "Testing and iteration techniques",
      "Translating research insights into design solutions",
    ],
  },
  {
    icon: GraduationCap,
    title: "Module 4: UI Design Principles and Visual Systems",
    items: [
      "Interface design fundamentals",
      "Typography for digital platforms",
      "Colour theory and visual hierarchy",
      "Layout principles and grid systems",
      "Component-based design",
      "Building scalable design systems",
    ],
  },
  {
    icon: BookOpen,
    title: "Module 5: Platform Guidelines and Professional UI Standards",
    items: [
      "Android Material Design guidelines",
      "iOS Human Interface Guidelines",
      "Responsive web and mobile design",
      "Accessibility principles",
      "Inclusive design practices",
      "Creating industry-standard digital interfaces",
    ],
  },
  {
    icon: Code,
    title: "Module 6: Portfolio, Career Development and Job Preparation",
    items: [
      "End-to-end UI/UX case study development",
      "Real-world product design simulation",
      "Portfolio creation and presentation",
      "Resume building",
      "Interview preparation",
      "UI/UX hiring process understanding",
      "Job assistance and career guidance",
    ],
  },
];

export const CurriculumTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-foreground/70">
              The Professional Diploma in HCI for UI/UX is a 12-month comprehensive program divided into modules that build upon each other. Each module combines theoretical knowledge with practical applications to ensure a well-rounded skill set.
            </p>

            <div className="space-y-4">
              {modules.map((module) => (
                <div key={module.title}>
                  <h4 className="font-medium text-bsd-gray flex items-center">
                    <module.icon className="w-5 h-5 text-bsd-orange mr-2" />
                    {module.title}
                  </h4>
                  <ul className="space-y-2 mt-2">
                    {module.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Capstone Project</h3>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/70 mb-4">
            Throughout the program, you'll work on a comprehensive capstone project that demonstrates your ability to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Conduct user research and identify key user needs</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Create information architecture and user flows</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Design wireframes and prototypes</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Develop a cohesive visual design system</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Conduct usability testing and iterate based on feedback</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
              <span>Present your design process and final solution</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm text-bsd-gray font-medium">
              The capstone project will be a valuable addition to your professional portfolio, demonstrating your end-to-end UI/UX design skills to potential employers.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
