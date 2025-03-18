
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Bachelor of Design in Interior & Spatial Design
            </h2>
            <p className="mt-4 text-foreground/70">
              Our comprehensive program focuses on teaching students to design functional, aesthetic, and sustainable interior spaces while developing technical expertise and creative vision.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="outcomes" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
              <TabsTrigger value="tools">Software & Tools</TabsTrigger>
              <TabsTrigger value="careers">Career Opportunities</TabsTrigger>
            </TabsList>
            <TabsContent value="outcomes" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Spatial Planning</h3>
                  <p className="text-foreground/70">Learn to develop creative and functional spatial solutions for residential, commercial, and public interior spaces.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Material Knowledge</h3>
                  <p className="text-foreground/70">Gain expertise in selecting appropriate materials, finishes, and furnishings with consideration for sustainability.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Technical Drawing</h3>
                  <p className="text-foreground/70">Develop proficiency in technical drawing, 3D modeling, and visualization using industry-standard software.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Design Theory</h3>
                  <p className="text-foreground/70">Understand design principles, color theory, lighting design, and the psychology of space.</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tools" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="AutoCAD" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">AutoCAD</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="SketchUp" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">SketchUp</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="3ds Max" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">3ds Max</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="V-Ray" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">V-Ray</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Revit" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">Revit</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Adobe Photoshop" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">Photoshop</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Adobe Illustrator" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">Illustrator</h4>
                </div>
                <div className="text-center p-4">
                  <img src="/placeholder.svg" alt="Adobe InDesign" className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="font-semibold">InDesign</h4>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="careers" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Interior Designer</h3>
                  <p className="text-foreground/70">Create functional and aesthetically pleasing interior spaces for residential and commercial clients.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Retail Designer</h3>
                  <p className="text-foreground/70">Design engaging retail environments that enhance customer experience and drive sales.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Exhibition Designer</h3>
                  <p className="text-foreground/70">Create immersive exhibition and museum spaces that tell compelling stories.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Hospitality Designer</h3>
                  <p className="text-foreground/70">Design hotels, restaurants, and other hospitality spaces focused on guest experience.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Lighting Designer</h3>
                  <p className="text-foreground/70">Specialize in creating lighting schemes that enhance spatial experiences and functionality.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Furniture Designer</h3>
                  <p className="text-foreground/70">Design custom furniture pieces that complement interior spaces and meet specific needs.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
