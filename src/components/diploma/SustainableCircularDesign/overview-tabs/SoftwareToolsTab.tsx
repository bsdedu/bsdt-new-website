import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Calculator, Leaf, Recycle, Building } from "lucide-react";

interface ToolItemProps {
  name: string;
  description: string;
}

const ToolItem: React.FC<ToolItemProps> = ({ name, description }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h4 className="text-bsd-gray font-medium">{name}</h4>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};

export const SoftwareToolsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Calculator className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">Life Cycle Assessment Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="SimaPro"
                description="Industry-leading LCA software for environmental impact assessment and sustainability analysis."
              />
              <ToolItem 
                name="GaBi Envision"
                description="Comprehensive LCA tool for product sustainability and environmental footprint calculations."
              />
              <ToolItem 
                name="openLCA"
                description="Open-source LCA software for life cycle assessment and environmental impact studies."
              />
              <ToolItem 
                name="Umberto"
                description="Material flow analysis and LCA software for industrial ecology and circular economy modeling."
              />
              <ToolItem 
                name="GREET Model"
                description="Greenhouse gas emissions calculator for transportation fuels and vehicle technologies."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">Green Building & Design Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="SketchUp"
                description="3D modeling software for sustainable architecture and green building design."
              />
              <ToolItem 
                name="EnergyPlus"
                description="Building energy simulation software for analyzing energy consumption and efficiency."
              />
              <ToolItem 
                name="Tally"
                description="Revit plugin for building LCA and environmental impact assessment in architecture."
              />
              <ToolItem 
                name="LEED Online"
                description="Platform for LEED certification and green building rating system compliance."
              />
              <ToolItem 
                name="Green Building Studio"
                description="Cloud-based energy analysis service for building performance optimization."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Recycle className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">Circular Economy & Material Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="Material ConneXion Database"
                description="Comprehensive database of innovative and sustainable materials for design applications."
              />
              <ToolItem 
                name="Cradle to Cradle Certified"
                description="Assessment platform for circular design and material health evaluation."
              />
              <ToolItem 
                name="Ellen MacArthur Circularity Indicators"
                description="Methodology and tools for measuring progress toward circular economy."
              />
              <ToolItem 
                name="GRANTA Materials Intelligence"
                description="Materials database with sustainability data for informed material selection."
              />
              <ToolItem 
                name="Biomimicry Design Process"
                description="Nature-inspired design methodology tools and databases for sustainable innovation."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Leaf className="w-5 h-5 text-bsd-orange" />
              <h3 className="text-lg font-semibold text-bsd-gray">Carbon & Environmental Analysis Tools</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ToolItem 
                name="Carbon Trust Footprint Tool"
                description="Carbon footprint calculator for products, services, and organizations."
              />
              <ToolItem 
                name="EPA WARM Model"
                description="Waste reduction model for calculating greenhouse gas emissions from materials management."
              />
              <ToolItem 
                name="Sustainability Tracking, Assessment & Rating System (STARS)"
                description="Framework for measuring sustainability performance across organizations."
              />
              <ToolItem 
                name="Sphera"
                description="Environmental, health, safety, and sustainability management software platform."
              />
              <ToolItem 
                name="One Click LCA"
                description="Cloud-based LCA software for construction and building materials assessment."
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-bsd-light-gray rounded-xl p-6">
        <h3 className="text-lg font-semibold text-bsd-gray mb-4">Technology Training Approach</h3>
        <p className="text-foreground/70">
          Our Professional Diploma in Sustainable System & Circular Design provides comprehensive training on these specialized tools used in sustainability assessment and environmental design. The curriculum emphasizes understanding the underlying methodologies and principles behind each tool, ensuring graduates can adapt to various software platforms used across different organizations. Students gain hands-on experience with both industry-standard and open-source solutions, preparing them for the diverse technological landscape of the green economy.
        </p>
      </div>
    </RevealSection>
  );
};