
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Brush, PenTool, Smartphone, Play, Film, Sparkles, Wand2, Box, Package, Image, Layout, MousePointer, Code } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const SoftwareToolsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Design & Prototyping Tools</h3>
        <p className="text-foreground/70">
          Our program provides access to industry-standard design and prototyping tools that prepare students for professional UX/UI roles.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Design Software Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <PenTool className="w-5 h-5 text-bsd-orange mr-2" />
              UI Design Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Figma</h5>
                </div>
                <p className="text-sm text-foreground/70">Collaborative interface design and prototyping</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <PenTool className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe XD</h5>
                </div>
                <p className="text-sm text-foreground/70">UI/UX design and interactive prototyping</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Brush className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Sketch</h5>
                </div>
                <p className="text-sm text-foreground/70">Vector-based UI design for macOS</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Smartphone className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">InVision Studio</h5>
                </div>
                <p className="text-sm text-foreground/70">Screen design and interactive prototyping</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Image className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Photoshop</h5>
                </div>
                <p className="text-sm text-foreground/70">Raster graphics and image editing</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <PenTool className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Illustrator</h5>
                </div>
                <p className="text-sm text-foreground/70">Vector graphics for icon and logo design</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-200" />
          
          {/* Prototyping Tools Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <MousePointer className="w-5 h-5 text-bsd-orange mr-2" />
              Prototyping & Testing Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Play className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">ProtoPie</h5>
                </div>
                <p className="text-sm text-foreground/70">High-fidelity interactive prototyping</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Film className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Principle</h5>
                </div>
                <p className="text-sm text-foreground/70">Animation and interaction design</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <MousePointer className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Maze</h5>
                </div>
                <p className="text-sm text-foreground/70">Rapid user testing platform</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Miro</h5>
                </div>
                <p className="text-sm text-foreground/70">Collaborative whiteboarding platform</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Smartphone className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Zeplin</h5>
                </div>
                <p className="text-sm text-foreground/70">Design handoff and developer collaboration</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Code className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Framer</h5>
                </div>
                <p className="text-sm text-foreground/70">Interactive design with code components</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gray-50 p-6 rounded-xl mt-8">
            <h4 className="text-lg font-medium text-bsd-gray mb-4">Industry Advantage</h4>
            <p className="mb-4">Our students graduate with expertise in the latest UX/UI tools and methodologies, giving them a competitive edge in the job market and the ability to immediately contribute to design teams.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">25+</h5>
                <p className="text-sm text-foreground/70">Design tools covered in curriculum</p>
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
