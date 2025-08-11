import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Laptop, Palette, Layers, Camera } from 'lucide-react';

export const SoftwareToolsTab: React.FC = () => {
  const toolCategories = [
    {
      category: "Design & Illustration",
      icon: Palette,
      tools: [
        {
          name: "Adobe Illustrator",
          level: "Advanced",
          description: "Professional fashion illustration, technical flats, and pattern creation",
          features: ["Fashion illustration", "Technical drawings", "Pattern design", "Logo creation"]
        },
        {
          name: "Adobe Photoshop", 
          level: "Intermediate",
          description: "Photo editing, textile design, and digital manipulation for fashion",
          features: ["Photo retouching", "Textile patterns", "Color correction", "Digital art"]
        },
        {
          name: "Procreate",
          level: "Beginner",
          description: "Digital sketching and illustration on tablet devices",
          features: ["Digital sketching", "Fashion croquis", "Mood boards", "Quick concepts"]
        }
      ]
    },
    {
      category: "3D Design & Visualization",
      icon: Layers,
      tools: [
        {
          name: "CLO 3D",
          level: "Intermediate",
          description: "3D garment simulation and virtual fashion prototyping",
          features: ["3D garment simulation", "Virtual fitting", "Pattern making", "Fabric draping"]
        },
        {
          name: "Marvelous Designer",
          level: "Beginner",
          description: "3D clothing design and animation software",
          features: ["3D pattern design", "Cloth simulation", "Animation", "Virtual runway"]
        }
      ]
    },
    {
      category: "Pattern Making & CAD",
      icon: Laptop,
      tools: [
        {
          name: "Gerber AccuMark",
          level: "Intermediate",
          description: "Professional pattern making and grading software",
          features: ["Pattern creation", "Grading", "Marker making", "Production planning"]
        },
        {
          name: "Lectra Modaris",
          level: "Beginner",
          description: "Industrial pattern making and product development",
          features: ["Pattern design", "Size grading", "Fit optimization", "Production ready patterns"]
        }
      ]
    },
    {
      category: "Presentation & Portfolio",
      icon: Camera,
      tools: [
        {
          name: "Adobe InDesign",
          level: "Intermediate",
          description: "Professional layout design for portfolios and presentations",
          features: ["Portfolio layout", "Lookbooks", "Technical sheets", "Brand presentations"]
        },
        {
          name: "Figma",
          level: "Beginner",
          description: "Digital design and prototyping for fashion presentations",
          features: ["Digital presentations", "Interactive prototypes", "Team collaboration", "Web portfolios"]
        }
      ]
    }
  ];

  const practicalApplications = [
    "Create professional fashion illustrations",
    "Design technical flat drawings for production", 
    "Develop digital textile patterns and prints",
    "Build comprehensive design portfolios",
    "Simulate 3D garment prototypes",
    "Prepare production-ready technical specifications"
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        {/* Overview */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Design Software & Tools</h3>
          <p className="text-muted-foreground">
            Master industry-standard software tools used by fashion professionals worldwide. 
            From digital illustration to 3D garment visualization, develop technical skills essential for modern fashion design.
          </p>
        </div>

        {/* Tool Categories */}
        <div className="grid gap-6">
          {toolCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="border rounded-lg p-4 bg-muted/30">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm">{tool.name}</h4>
                        <Badge variant={tool.level === 'Advanced' ? 'default' : tool.level === 'Intermediate' ? 'secondary' : 'outline'} className="text-xs">
                          {tool.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{tool.description}</p>
                      <div className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practical Applications */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Practical Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn to apply these tools in real-world fashion design scenarios through hands-on projects and assignments.
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              {practicalApplications.map((application, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{application}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certification Note */}
        <Card className="bg-muted/30 border-0">
          <CardContent className="p-6 text-center">
            <h4 className="font-semibold mb-2">Software Certification</h4>
            <p className="text-sm text-muted-foreground">
              Upon program completion, students receive certificates of proficiency in Adobe Creative Suite and other industry-standard software, 
              validating their technical skills for employers and clients.
            </p>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};