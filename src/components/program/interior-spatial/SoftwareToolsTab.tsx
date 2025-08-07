import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Badge } from "@/components/ui/badge";

export const SoftwareToolsTab: React.FC = () => {
  const coreTools = [
    { name: 'AutoCAD', description: 'Industry-standard 2D drafting and 3D modeling', category: 'CAD' },
    { name: 'SketchUp', description: '3D modeling for interior and architectural design', category: 'Modeling' },
    { name: '3Ds Max', description: 'Advanced 3D modeling, animation, and rendering', category: 'Rendering' },
    { name: 'Adobe Photoshop', description: 'Image editing and concept visualization', category: 'Graphics' },
    { name: 'Adobe InDesign', description: 'Professional layout and presentation design', category: 'Graphics' },
    { name: 'Autodesk Revit', description: 'BIM software for building information modeling', category: 'BIM' },
    { name: 'V-Ray', description: 'Photorealistic rendering and visualization', category: 'Rendering' }
  ];

  const aiTools = [
    { name: 'AR Plan 3D Measure', description: 'Augmented reality measurement and planning', category: 'AR/VR' },
    { name: 'COOHOM', description: 'AI-powered interior design and rendering', category: 'AI Design' },
    { name: 'Dawn AI', description: 'AI-assisted design generation and visualization', category: 'AI Design' },
    { name: 'Enscape', description: 'Real-time rendering and virtual reality', category: 'VR' },
    { name: 'Lumion', description: '3D rendering and architectural visualization', category: 'Rendering' },
    { name: 'Planner 5D', description: 'AI-powered room planning and design', category: 'Planning' },
    { name: 'Midjourney', description: 'AI image generation for concept development', category: 'AI Design' },
    { name: 'RHINO + Grasshopper', description: 'Parametric design and computational modeling', category: 'Parametric' },
    { name: 'AI Virtual Tour Creator', description: 'Create immersive virtual space experiences', category: 'VR' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Interior & Spatial Design Tools</h3>
          <p className="text-foreground/70">Industry-standard software for professional interior design</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coreTools.map((tool, index) => (
              <div key={index} className="flex justify-between items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex-1">
                  <h4 className="font-medium text-bsd-gray">{tool.name}</h4>
                  <p className="text-sm text-foreground/70 mt-1">{tool.description}</p>
                </div>
                <Badge variant="outline" className="ml-2 text-xs">
                  {tool.category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">AI Tools & Emerging Technologies</h3>
          <p className="text-foreground/70">Next-generation tools for cutting-edge design workflows</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiTools.map((tool, index) => (
              <div key={index} className="flex justify-between items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex-1">
                  <h4 className="font-medium text-bsd-gray">{tool.name}</h4>
                  <p className="text-sm text-foreground/70 mt-1">{tool.description}</p>
                </div>
                <Badge variant="bsdOrange" className="ml-2 text-xs">
                  {tool.category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};