import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Monitor, Box, Palette, Camera, Smartphone, Globe } from "lucide-react";

export const SoftwareToolsTab: React.FC = () => {
  const softwareCategories = [
    {
      icon: Box,
      title: "3D Modeling & CAD",
      tools: [
        { name: "SolidWorks", description: "Professional 3D CAD software for product design and engineering" },
        { name: "Fusion 360", description: "Cloud-based CAD/CAM/CAE tool for product development" },
        { name: "Rhino 3D", description: "NURBS-based 3D modeling software for complex geometries" },
        { name: "KeyShot", description: "Real-time ray tracing and global illumination for 3D rendering" }
      ]
    },
    {
      icon: Palette,
      title: "Design & Visualization",
      tools: [
        { name: "Adobe Creative Suite", description: "Photoshop, Illustrator, and InDesign for visual design" },
        { name: "Sketch", description: "Digital design toolkit for interface and product design" },
        { name: "Figma", description: "Collaborative interface design and prototyping tool" },
        { name: "Blender", description: "Open-source 3D creation suite for modeling and animation" }
      ]
    },
    {
      icon: Monitor,
      title: "Prototyping & Testing",
      tools: [
        { name: "InVision", description: "Digital product design platform for prototyping and collaboration" },
        { name: "Marvel", description: "Design platform for creating interactive prototypes" },
        { name: "Principle", description: "Timeline-based animation and interaction design tool" },
        { name: "Framer", description: "Interactive design tool for high-fidelity prototypes" }
      ]
    },
    {
      icon: Camera,
      title: "Simulation & Analysis",
      tools: [
        { name: "ANSYS", description: "Engineering simulation software for product testing" },
        { name: "COMSOL", description: "Multiphysics simulation software for product analysis" },
        { name: "Autodesk CFD", description: "Computational fluid dynamics software for design validation" },
        { name: "SimScale", description: "Cloud-based simulation platform for engineering analysis" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Design Apps",
      tools: [
        { name: "Concepts", description: "Professional design app for sketching and ideation" },
        { name: "Procreate", description: "Digital illustration app for iPad design work" },
        { name: "Adobe XD", description: "UX/UI design and prototyping tool" },
        { name: "Shapr3D", description: "Professional CAD app for iPad with Apple Pencil support" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Industry Software & Tools</h3>
        <p className="text-foreground/70">
          Master the latest product design software and digital tools used by leading design studios and tech companies worldwide. Our curriculum includes hands-on training with industry-standard applications.
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
              <li>• High-performance workstations with professional GPUs</li>
              <li>• 3D printers and rapid prototyping equipment</li>
              <li>• CNC machines and precision manufacturing tools</li>
              <li>• Virtual reality design environments</li>
              <li>• Professional photography and rendering setup</li>
              <li>• Material testing and analysis laboratory</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-bsd-gray mb-4">Training Approach</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                <div>
                  <p className="font-medium text-bsd-gray">Project-Based Learning</p>
                  <p className="text-sm text-foreground/70">Real product development projects using professional software</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                <div>
                  <p className="font-medium text-bsd-gray">Industry Certifications</p>
                  <p className="text-sm text-foreground/70">SolidWorks, Autodesk, and Adobe certified professional programs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-bsd-orange mt-2"></div>
                <div>
                  <p className="font-medium text-bsd-gray">Expert Mentorship</p>
                  <p className="text-sm text-foreground/70">Learning from industry professionals and certified instructors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};