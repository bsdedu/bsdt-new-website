
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Ruler, Monitor, Box, Layout, Palette, Image } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const SoftwareToolsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Software & Design Tools</h3>
        <p className="text-foreground/70">
          Our program equips students with industry-standard design software and tools to create compelling interior spaces.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Design Software Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-bsd-orange mr-2" />
              Interior Design Software
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Box className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">AutoCAD</h5>
                </div>
                <p className="text-sm text-foreground/70">2D drafting and documentation for floor plans and elevations</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Box className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">SketchUp</h5>
                </div>
                <p className="text-sm text-foreground/70">3D modeling and visualization for concept development</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Image className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Photoshop</h5>
                </div>
                <p className="text-sm text-foreground/70">Image editing and photo manipulation for presentations</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Box className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Revit</h5>
                </div>
                <p className="text-sm text-foreground/70">Building Information Modeling (BIM) for comprehensive design</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Image className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">V-Ray</h5>
                </div>
                <p className="text-sm text-foreground/70">Photorealistic rendering and lighting simulation</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-200" />
          
          {/* Physical Tools Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <Ruler className="w-5 h-5 text-bsd-orange mr-2" />
              Physical Design Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Ruler className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Model Making Kits</h5>
                </div>
                <p className="text-sm text-foreground/70">For creating physical scale models and prototypes</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Palette className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Material Sample Library</h5>
                </div>
                <p className="text-sm text-foreground/70">Extensive collection of material and finish samples</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Drawing Boards</h5>
                </div>
                <p className="text-sm text-foreground/70">Professional drafting equipment for manual drawings</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gray-50 p-6 rounded-xl mt-8">
            <h4 className="text-lg font-medium text-bsd-gray mb-4">Industry Advantage</h4>
            <p className="mb-4">Our graduates enter the job market with expertise in both digital design tools and traditional techniques, making them versatile professionals in the interior design industry.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">100%</h5>
                <p className="text-sm text-foreground/70">Access to professional software licenses during studies</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">20+</h5>
                <p className="text-sm text-foreground/70">Different software applications covered in curriculum</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">24/7</h5>
                <p className="text-sm text-foreground/70">Access to design labs and equipment</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
