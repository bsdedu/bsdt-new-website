
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";

export const StudioSection: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              State-of-the-Art Animation & Game Studios
            </h2>
            <p className="mt-4 text-foreground/70">
              Our purpose-built facilities provide students with professional-grade equipment and spaces to bring their creative visions to life.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Animation Studio" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-bsd-gray">Animation Studios</h3>
              <p className="text-foreground/70">
                Our animation studios are equipped with professional workstations, drawing tablets, and industry-standard software. Students have access to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>Professional-grade drawing and animation tablets</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>Stop-motion animation lab</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>Render farm for high-quality animation rendering</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>Voice recording booth for character dialogue</span>
                </li>
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="space-y-6 flex flex-col justify-center md:order-1 order-2">
              <h3 className="text-2xl font-semibold text-bsd-gray">Game Development Lab</h3>
              <p className="text-foreground/70">
                Our game development facilities provide the hardware and software needed to create immersive gaming experiences:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>High-performance gaming PCs with professional GPUs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>VR/AR development station with latest headsets</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>Game testing area with multiple platforms</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bsd-orange rounded-full mr-2"></span>
                  <span>Motion capture studio for character animation</span>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl md:order-2 order-1">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="Game Development Lab" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="mt-16 p-8 bg-white rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-bsd-gray">Student Resources</h3>
              <p className="mt-2 text-foreground/70">
                Beyond our technical facilities, students have access to:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bsd-orange">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray">Digital Library</h4>
                <p className="mt-2 text-sm text-foreground/70">
                  Access to extensive digital art, animation, and game design resources, tutorials, and industry publications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bsd-orange">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M7 7h10v2H7z"></path>
                    <path d="M7 13h4v4H7z"></path>
                    <path d="M15 12h2v5h-2z"></path>
                    <path d="M14 16h4"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray">Exhibition Space</h4>
                <p className="mt-2 text-sm text-foreground/70">
                  Dedicated gallery for showcasing student animations, games, and digital artwork to the public and industry professionals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bsd-orange">
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                    <path d="M12 20v-1"></path>
                    <path d="M12 5V4"></path>
                    <path d="M20 12h-1"></path>
                    <path d="M5 12H4"></path>
                    <path d="m18 18-.87-.5"></path>
                    <path d="m6.87 6.5-.87-.5"></path>
                    <path d="m18 6-.87.5"></path>
                    <path d="m6.87 17.5-.87.5"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-bsd-gray">Creative Collaboration Spaces</h4>
                <p className="mt-2 text-sm text-foreground/70">
                  Open studios and meeting rooms designed for team projects, brainstorming, and cross-disciplinary collaboration.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
