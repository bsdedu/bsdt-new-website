
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Building2, Building, Box, Layers, Triangle, LayoutPanelTop } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const SoftwareToolsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Design & Visualization Tools</h3>
        <p className="text-foreground/70">
          Our program provides access to industry-standard architectural design and visualization tools that prepare students for professional practice.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* CAD & Modeling Tools */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <Building2 className="w-5 h-5 text-bsd-orange mr-2" />
              CAD & 3D Modeling Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Building className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">AutoCAD</h5>
                </div>
                <p className="text-sm text-foreground/70">2D drafting and documentation</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Building2 className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Revit</h5>
                </div>
                <p className="text-sm text-foreground/70">Building Information Modeling (BIM)</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Box className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">SketchUp</h5>
                </div>
                <p className="text-sm text-foreground/70">3D modeling and conceptual design</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layers className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">3ds Max</h5>
                </div>
                <p className="text-sm text-foreground/70">Advanced 3D modeling and rendering</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-200" />
          
          {/* Visualization & Rendering Tools */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <LayoutPanelTop className="w-5 h-5 text-bsd-orange mr-2" />
              Visualization & Rendering Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Triangle className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Lumion</h5>
                </div>
                <p className="text-sm text-foreground/70">Real-time 3D architectural visualization</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <LayoutPanelTop className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">V-Ray</h5>
                </div>
                <p className="text-sm text-foreground/70">Photorealistic rendering and materials</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Building className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Enscape</h5>
                </div>
                <p className="text-sm text-foreground/70">Real-time rendering and virtual walkthrough</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layers className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Photoshop</h5>
                </div>
                <p className="text-sm text-foreground/70">Image editing and post-production</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Box className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Illustrator</h5>
                </div>
                <p className="text-sm text-foreground/70">Vector graphics and diagramming</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <LayoutPanelTop className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">InDesign</h5>
                </div>
                <p className="text-sm text-foreground/70">Portfolio and presentation layout</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gray-50 p-6 rounded-xl mt-8">
            <h4 className="text-lg font-medium text-bsd-gray mb-4">Industry Advantage</h4>
            <p className="mb-4">Our students graduate with expertise in the latest architectural design and visualization tools, giving them a competitive edge in the job market and the ability to immediately contribute to design teams.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">10+</h5>
                <p className="text-sm text-foreground/70">Industry-standard design software</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">100%</h5>
                <p className="text-sm text-foreground/70">Access to professional software licenses</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">15+</h5>
                <p className="text-sm text-foreground/70">Real-world projects in graduation portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
