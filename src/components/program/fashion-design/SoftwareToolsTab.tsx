import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Monitor, Palette, Layers, Camera, Smartphone, Globe } from "lucide-react";

export const SoftwareToolsTab: React.FC = () => {
  const softwareCategories = [
    {
      icon: Palette,
      title: "Design Software",
      tools: [
        { name: "Adobe Illustrator", description: "Professional fashion illustration and technical flat drawings" },
        { name: "Adobe Photoshop", description: "Image editing, textile design, and digital fashion rendering" },
        { name: "CorelDRAW", description: "Vector graphics and fashion sketching" },
        { name: "Procreate", description: "Digital fashion illustration on iPad" }
      ]
    },
    {
      icon: Layers,
      title: "CAD & Pattern Making",
      tools: [
        { name: "Gerber AccuMark", description: "Professional pattern making and grading software" },
        { name: "Lectra Modaris", description: "Industry-standard pattern design and modification" },
        { name: "Optitex", description: "3D fashion design and virtual prototyping" },
        { name: "CLO 3D", description: "3D garment simulation and virtual fashion design" }
      ]
    },
    {
      icon: Camera,
      title: "3D & Visualization",
      tools: [
        { name: "CLO 3D", description: "3D garment visualization and virtual try-on" },
        { name: "Marvelous Designer", description: "3D clothing design and animation" },
        { name: "Keyshot", description: "3D rendering for fashion products" },
        { name: "Blender", description: "3D modeling and fashion animation" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Design Apps",
      tools: [
        { name: "Fashion Design Flat Sketch", description: "Mobile fashion sketching and flat drawing" },
        { name: "Adobe Fresco", description: "Digital painting and fashion illustration" },
        { name: "Paper by WeTransfer", description: "Sketching and ideation on mobile devices" },
        { name: "ArtRage", description: "Digital painting for fashion concepts" }
      ]
    },
    {
      icon: Globe,
      title: "Online Platforms",
      tools: [
        { name: "Figma", description: "Collaborative design and fashion mood boards" },
        { name: "Canva", description: "Fashion marketing materials and presentations" },
        { name: "Pinterest", description: "Fashion inspiration and trend research" },
        { name: "WGSN", description: "Global trend forecasting and analysis" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Industry Software & Tools</h3>
        <p className="text-foreground/70">
          Master the latest fashion design software and digital tools used by leading fashion houses and brands worldwide. Our curriculum includes hands-on training with industry-standard applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {softwareCategories.map((category, index) => (
          <Card key={index} className="border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-bsd-orange" />
                </div>
                <h4 className="text-xl font-semibold text-bsd-gray">{category.title}</h4>
              </div>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="border-l-4 border-bsd-orange/20 pl-4">
                    <h5 className="font-medium text-bsd-gray">{tool.name}</h5>
                    <p className="text-sm text-foreground/70">{tool.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-bsd-light-gray p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-bsd-gray mb-4 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-bsd-orange" />
              Lab Facilities
            </h4>
            <ul className="space-y-2 text-foreground/70">
              <li>• State-of-the-art computer lab with latest software</li>
              <li>• High-end graphics tablets and stylus pens</li>
              <li>• Professional photography studio setup</li>
              <li>• 3D printers for fashion accessories</li>
              <li>• Virtual reality fashion design stations</li>
              <li>• Industry-standard digitizing tables</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-bsd-gray mb-4">Training Approach</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                <div>
                  <p className="font-medium text-bsd-gray">Hands-on Projects</p>
                  <p className="text-sm text-foreground/70">Real industry projects using professional software</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                <div>
                  <p className="font-medium text-bsd-gray">Industry Certifications</p>
                  <p className="text-sm text-foreground/70">Adobe Certified Expert and other relevant certifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                <div>
                  <p className="font-medium text-bsd-gray">Expert Instruction</p>
                  <p className="text-sm text-foreground/70">Learning from industry professionals and certified trainers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};