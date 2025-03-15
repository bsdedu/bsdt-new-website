
import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Gamepad, Film, Camera, Palette, Cpu, Users } from "lucide-react";

export const AnimationGameDesignFacilitiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              State-of-the-Art Animation Studios
            </h2>
            <p className="mt-4 text-foreground/70">
              Our campus features cutting-edge animation and game design facilities that provide students with professional-grade tools and environments.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <RevealSection delay={100}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Gamepad className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Game Design Lab</h3>
                <p className="text-foreground/70">
                  Equipped with high-performance gaming PCs, VR/AR systems, and the latest game development software for creating immersive experiences.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={200}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Film className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Animation Studio</h3>
                <p className="text-foreground/70">
                  Professional-grade animation workstations with industry-standard software like Maya, Blender, and Adobe Creative Suite.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={300}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Motion Capture Studio</h3>
                <p className="text-foreground/70">
                  Advanced motion capture system for realistic character animation, complete with green screens and recording equipment.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={400}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Digital Art Lab</h3>
                <p className="text-foreground/70">
                  Creative space with Wacom tablets, iPad Pros, and digital drawing tools for concept art and character design.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={500}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Rendering Farm</h3>
                <p className="text-foreground/70">
                  High-performance computing cluster dedicated to rendering complex animations and visual effects efficiently.
                </p>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={600}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Collaboration Spaces</h3>
                <p className="text-foreground/70">
                  Dedicated areas for team projects, brainstorming sessions, and portfolio reviews with industry professionals.
                </p>
              </CardContent>
            </Card>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
