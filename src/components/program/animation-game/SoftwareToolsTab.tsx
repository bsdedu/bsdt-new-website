
import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Film, Gamepad, Sparkles, FileCode, Eye, Mouse, Tv } from "lucide-react";

export const SoftwareToolsTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-bsd-gray mb-3">Industry-Standard Tools</h3>
        <p className="text-foreground/70">
          Our students gain hands-on experience with professional software and tools used throughout the animation and game development industries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Film className="w-6 h-6 text-bsd-orange" />
              </div>
              <h4 className="text-lg font-semibold text-bsd-gray mb-4">Animation Software</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col items-center">
                  <span className="font-medium">Autodesk Maya</span>
                  <span className="text-foreground/70">3D modeling, animation, and rendering</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">Adobe Animate</span>
                  <span className="text-foreground/70">2D animation and interactive media</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">Toon Boom Harmony</span>
                  <span className="text-foreground/70">Professional 2D animation</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">Blender</span>
                  <span className="text-foreground/70">Open-source 3D creation</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Gamepad className="w-6 h-6 text-bsd-orange" />
              </div>
              <h4 className="text-lg font-semibold text-bsd-gray mb-4">Game Development</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col items-center">
                  <span className="font-medium">Unity</span>
                  <span className="text-foreground/70">Cross-platform game engine</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">Unreal Engine</span>
                  <span className="text-foreground/70">High-fidelity real-time 3D creation</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">Godot</span>
                  <span className="text-foreground/70">Open-source game development</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">GameMaker Studio</span>
                  <span className="text-foreground/70">2D game development</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-bsd-orange" />
              </div>
              <h4 className="text-lg font-semibold text-bsd-gray mb-4">Design & VFX</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col items-center">
                  <span className="font-medium">Adobe Photoshop</span>
                  <span className="text-foreground/70">Image editing and digital painting</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">Adobe After Effects</span>
                  <span className="text-foreground/70">Motion graphics and VFX</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">Substance Painter/Designer</span>
                  <span className="text-foreground/70">3D texturing and materials</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-medium">ZBrush</span>
                  <span className="text-foreground/70">Digital sculpting and painting</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-bsd-gray mb-4">AI-Enhanced Tools</h4>
            <p className="text-foreground/70 mb-4">
              Students learn to leverage cutting-edge AI tools to enhance their creative workflows:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Eye className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-bsd-gray">AI-Assisted Animation</h5>
                  <p className="text-sm text-foreground/70">Tools for automated in-betweening and motion enhancement</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mouse className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-bsd-gray">Procedural Generation</h5>
                  <p className="text-sm text-foreground/70">AI-powered tools for creating environments, textures, and characters</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Tv className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-bsd-gray">Intelligent NPCs</h5>
                  <p className="text-sm text-foreground/70">Implementation of AI for more realistic game characters and behaviors</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-bsd-gray mb-4">Programming & Scripting</h4>
            <p className="text-foreground/70 mb-4">
              Students develop essential programming skills for animation and game development:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                  <FileCode className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <span className="font-medium">C# Programming</span>
                  <p className="text-sm text-foreground/70">Primary language for Unity development</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                  <FileCode className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <span className="font-medium">Blueprints Visual Scripting</span>
                  <p className="text-sm text-foreground/70">Node-based scripting in Unreal Engine</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                  <FileCode className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <span className="font-medium">MEL/Python Scripting</span>
                  <p className="text-sm text-foreground/70">Automation for 3D animation workflows</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                  <FileCode className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <span className="font-medium">JavaScript</span>
                  <p className="text-sm text-foreground/70">For web-based interactive content</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
