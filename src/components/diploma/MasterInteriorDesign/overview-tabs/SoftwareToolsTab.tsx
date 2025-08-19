import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Box, Palette, Zap, Brain, Settings } from 'lucide-react';

const toolCategories = [
  {
    category: "Advanced Design & Visualization",
    icon: <Palette className="w-6 h-6 text-bsd-orange" />,
    tools: [
      {
        name: "AutoCAD Architecture",
        level: "Expert",
        description: "Advanced architectural drafting and technical documentation for complex projects.",
        features: ["3D modeling", "Parametric design", "Advanced layouts", "Custom tools"]
      },
      {
        name: "Revit Architecture",
        level: "Expert", 
        description: "Building Information Modeling (BIM) for comprehensive project coordination.",
        features: ["BIM workflows", "Family creation", "Rendering", "Collaboration tools"]
      },
      {
        name: "3ds Max + V-Ray",
        level: "Advanced",
        description: "Professional 3D modeling and photorealistic rendering for presentations.",
        features: ["Advanced modeling", "Material editor", "Lighting setup", "Animation"]
      }
    ]
  },
  {
    category: "Project Management & Collaboration", 
    icon: <Settings className="w-6 h-6 text-bsd-orange" />,
    tools: [
      {
        name: "Autodesk BIM 360",
        level: "Advanced",
        description: "Cloud-based project management and collaboration platform.",
        features: ["Document management", "Model coordination", "Issue tracking", "Mobile access"]
      },
      {
        name: "Microsoft Project",
        level: "Intermediate",
        description: "Professional project scheduling and resource management.",
        features: ["Gantt charts", "Resource allocation", "Timeline tracking", "Reporting"]
      },
      {
        name: "Slack + Asana",
        level: "Intermediate",
        description: "Team communication and task management for design teams.",
        features: ["Team collaboration", "Task assignment", "Progress tracking", "Integration"]
      }
    ]
  },
  {
    category: "Emerging Technologies",
    icon: <Brain className="w-6 h-6 text-bsd-orange" />,
    tools: [
      {
        name: "Unreal Engine",
        level: "Intermediate",
        description: "Real-time visualization and virtual reality experiences.",
        features: ["VR/AR creation", "Real-time rendering", "Interactive walkthroughs", "Animation"]
      },
      {
        name: "Twinmotion",
        level: "Intermediate",
        description: "Fast architectural visualization with real-time ray tracing.",
        features: ["Quick visualization", "Animation", "VR export", "Material library"]
      },
      {
        name: "AI Design Tools",
        level: "Basic",
        description: "Artificial intelligence tools for design assistance and automation.",
        features: ["Design generation", "Pattern recognition", "Automation", "Optimization"]
      }
    ]
  }
];

const practicalApplications = [
  "Complete BIM project coordination from concept to construction",
  "Advanced rendering and presentation for high-end clients",
  "Virtual reality walkthroughs for client approvals",
  "Automated documentation and drawing generation",
  "Project management for multi-disciplinary teams",
  "Real-time design collaboration with global teams"
];

export const SoftwareToolsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Advanced Software & Technology Mastery</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Master cutting-edge design technologies and industry-leading software tools essential for senior interior design roles and leadership positions.
          </p>
        </div>

        <div className="space-y-6">
          {toolCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-bsd-orange/10 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="p-4 bg-background/50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm">{tool.name}</h4>
                        <Badge variant={tool.level === 'Expert' ? 'bsdOrange' : 'outline'} className="text-xs">
                          {tool.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-foreground/70 mb-3">{tool.description}</p>
                      <div className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="inline-block text-xs bg-background border rounded px-2 py-1 mr-1 mb-1">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Advanced Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {practicalApplications.map((application, index) => (
                  <li key={index} className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-bsd-orange rounded-full mt-2 flex-shrink-0"></span>
                    {application}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Professional Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-foreground/70">Upon completion, students receive:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Autodesk</Badge>
                    <span>Professional Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">BIM</Badge>
                    <span>Advanced BIM Specialist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">V-Ray</Badge>
                    <span>Certified Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">VR/AR</Badge>
                    <span>Technology Specialist</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </RevealSection>
  );
};