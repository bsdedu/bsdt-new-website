
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Building2, PenTool, LayoutPanelTop, Ruler, Lightbulb, GraduationCap, Building, Briefcase } from "lucide-react";

export const CareerOpportunitiesTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Career Paths & Opportunities</h3>
        <p className="text-foreground/70">
          The B.Des in Architectural Construction Design program prepares students for diverse career paths in the architectural, design, and construction industries.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-bsd-gray flex items-center">
              <Building2 className="w-5 h-5 text-bsd-orange mr-2" />
              Design Practice
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Architectural Designer</h5>
                <p className="text-sm text-foreground/70">Create building designs under the supervision of licensed architects, developing concepts into detailed plans.</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Interior Architectural Designer</h5>
                <p className="text-sm text-foreground/70">Focus on designing interior spaces that integrate with the overall architectural concept.</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Urban Designer</h5>
                <p className="text-sm text-foreground/70">Plan and design public spaces, neighborhoods, and urban environments.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-bsd-gray flex items-center">
              <LayoutPanelTop className="w-5 h-5 text-bsd-orange mr-2" />
              Visualization & Technology
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Architectural Visualizer</h5>
                <p className="text-sm text-foreground/70">Create photorealistic renderings and animations of architectural projects.</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">BIM Specialist</h5>
                <p className="text-sm text-foreground/70">Develop and manage Building Information Models for complex construction projects.</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Digital Design Coordinator</h5>
                <p className="text-sm text-foreground/70">Oversee digital design processes and coordinate between design and construction teams.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-bsd-gray flex items-center">
              <Briefcase className="w-5 h-5 text-bsd-orange mr-2" />
              Related Fields
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Project Coordinator</h5>
                <p className="text-sm text-foreground/70">Assist in managing architectural projects, coordinating between stakeholders.</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Sustainable Design Consultant</h5>
                <p className="text-sm text-foreground/70">Advise on green building practices and sustainable design solutions.</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-bsd-gray mb-1">Exhibition Designer</h5>
                <p className="text-sm text-foreground/70">Design temporary and permanent exhibitions for museums and cultural institutions.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h4 className="text-lg font-medium text-bsd-gray mb-4">Top Employers & Industry Connections</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h5 className="font-medium text-bsd-gray mb-3 flex items-center">
                <Building className="w-4 h-4 text-bsd-orange mr-2" />
                Architecture & Design Firms
              </h5>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Leading architectural practices
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Interior design studios
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Urban planning consultancies
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Design-build firms
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h5 className="font-medium text-bsd-gray mb-3 flex items-center">
                <Lightbulb className="w-4 h-4 text-bsd-orange mr-2" />
                Additional Opportunities
              </h5>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Real estate developers
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Government agencies
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Construction companies
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bsd-orange mr-2"></span>
                  Facilities management
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-bsd-orange/5 p-6 rounded-xl">
          <h4 className="text-lg font-medium text-bsd-gray mb-3 flex items-center">
            <GraduationCap className="w-5 h-5 text-bsd-orange mr-2" />
            Further Education Pathways
          </h4>
          <p className="mb-4 text-foreground/70">Graduates can pursue advanced degrees to further specialize their expertise:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h5 className="font-medium text-bsd-gray text-sm">Master of Architecture</h5>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h5 className="font-medium text-bsd-gray text-sm">M.Des in Sustainable Design</h5>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h5 className="font-medium text-bsd-gray text-sm">Masters in Urban Planning</h5>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h5 className="font-medium text-bsd-gray text-sm">M.Des in Digital Fabrication</h5>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h5 className="font-medium text-bsd-gray text-sm">MA in Architectural History</h5>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h5 className="font-medium text-bsd-gray text-sm">MBA in Construction Management</h5>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
