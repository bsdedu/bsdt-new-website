
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Brush, PenTool, Shapes, Play, Film, Sparkles, Wand2, Box, Package, Image } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const SoftwareToolsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Software & AI Tools</h3>
        <p className="text-foreground/70">
          Our program equips students with industry-standard design software and cutting-edge AI tools to maximize creativity and efficiency.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Design Software Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <PenTool className="w-5 h-5 text-bsd-orange mr-2" />
              Graphic Design Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Brush className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Photoshop</h5>
                </div>
                <p className="text-sm text-foreground/70">Image editing, digital painting, and photo manipulation</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <PenTool className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Illustrator</h5>
                </div>
                <p className="text-sm text-foreground/70">Vector graphics, logo design, and illustrations</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Shapes className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe InDesign</h5>
                </div>
                <p className="text-sm text-foreground/70">Page layout, editorial design, and publishing</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Play className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe Animate CC</h5>
                </div>
                <p className="text-sm text-foreground/70">Interactive animations and multimedia content</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Film className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe After Effects</h5>
                </div>
                <p className="text-sm text-foreground/70">Motion graphics and visual effects</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-200" />
          
          {/* AI Tools Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <Sparkles className="w-5 h-5 text-bsd-orange mr-2" />
              AI Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Wand2 className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Dawn AI</h5>
                </div>
                <p className="text-sm text-foreground/70">AI-powered image generation and creative assistance</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Film className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">After Effects AI</h5>
                </div>
                <p className="text-sm text-foreground/70">Intelligent motion graphics and animation tools</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Box className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">SPLINE 3D Basic</h5>
                </div>
                <p className="text-sm text-foreground/70">Foundational 3D design with AI assistance</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Package className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">BLENDER</h5>
                </div>
                <p className="text-sm text-foreground/70">3D modeling and animation with AI capabilities</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Box className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">SPLINE 3D Advanced</h5>
                </div>
                <p className="text-sm text-foreground/70">Advanced 3D design and modeling with AI enhancements</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Image className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">MID-JOURNEY</h5>
                </div>
                <p className="text-sm text-foreground/70">AI-driven image generation and creative exploration</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gray-50 p-6 rounded-xl mt-8">
            <h4 className="text-lg font-medium text-bsd-gray mb-4">Industry Advantage</h4>
            <p className="mb-4">Our graduates enter the job market with expertise in both traditional design software and cutting-edge AI tools, making them highly competitive in today's tech-driven creative industry.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">30%</h5>
                <p className="text-sm text-foreground/70">Higher hiring rates for designers with AI skills</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">2x</h5>
                <p className="text-sm text-foreground/70">Faster workflow with AI-assisted design tools</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">100%</h5>
                <p className="text-sm text-foreground/70">Access to professional software licenses during studies</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
