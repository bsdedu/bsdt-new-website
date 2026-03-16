import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ProjectCard } from '@/components/program/gallery/ProjectCard';
import { graphicProjects } from '@/components/program/gallery/graphicProjects';
import { interiorProjects } from '@/components/program/gallery/interiorProjects';
import { animationProjects } from '@/components/program/gallery/animationProjects';
import { interactionProjects } from '@/components/program/gallery/interactionProjects';
import { landscapeProjects } from '@/components/program/gallery/landscapeProjects';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';
import studentSpotlightHero from '@/assets/student-spotlight-hero.jpg';

const StudentSpotlight: React.FC = () => {
  const graphicWorks = [
    ...(graphicProjects.branding || []),
    ...(graphicProjects.print || []),
  ];
  
  const uiuxWorks = [
    ...(graphicProjects.digital || []),
    ...(interactionProjects.ux || []),
    ...(interactionProjects.ui || []),
    ...(interactionProjects.interactive || []),
  ];
  
  const interiorWorks = [
    ...(interiorProjects.residential || []),
    ...(interiorProjects.commercial || []),
    ...(interiorProjects.conceptual || []),
  ];
  
  const animationWorks = [
    ...(animationProjects.animation || []),
    ...(animationProjects.game || []),
    ...(animationProjects.character || []),
  ];

  return (
    <>
      <Helmet>
        <title>Student Spotlight | BSDT - Bangalore School of Design & Technology</title>
        <meta 
          name="description" 
          content="Explore exceptional student works from BSDT's design programs. See portfolios in graphic design, interior design, animation, and more." 
        />
        <meta name="keywords" content="student portfolio, design projects, BSDT student work, graphic design portfolio, interior design projects, animation portfolio" />
        <link rel="canonical" href="https://bsdt.ac.in/student-spotlight" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="relative text-white pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={studentSpotlightHero} alt="Student working on design project" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-bsd-gray/90 via-bsd-gray/70 to-transparent" />
          </div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <Badge variant="bsdOrange" className="mb-4">CAMPUS LIFE</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Student Spotlight
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Celebrating creativity and innovation. Explore the outstanding projects and portfolios 
                created by our talented students across all design disciplines.
              </p>
              <AnimatedButton 
                href="https://apply.bsd.edu.in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
              >
                Apply Now
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Student Works Gallery */}
        <section id="student-works" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <Badge variant="bsdOrange" className="mb-4">PORTFOLIO</Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                  Student Works Gallery
                </h2>
                <p className="mt-4 text-foreground/70">
                  Browse through exceptional projects across different design programs. Each piece represents 
                  the dedication and creativity of our students.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <Tabs defaultValue="graphic" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-muted/50 flex-wrap h-auto gap-1">
                    <TabsTrigger value="graphic" className="data-[state=active]:bg-bsd-orange data-[state=active]:text-white">
                      Graphic Design
                    </TabsTrigger>
                    <TabsTrigger value="uiux" className="data-[state=active]:bg-bsd-orange data-[state=active]:text-white">
                      UI/UX Design
                    </TabsTrigger>
                    <TabsTrigger value="interior" className="data-[state=active]:bg-bsd-orange data-[state=active]:text-white">
                      Interior Design
                    </TabsTrigger>
                    <TabsTrigger value="landscape" className="data-[state=active]:bg-bsd-orange data-[state=active]:text-white">
                      Landscape
                    </TabsTrigger>
                    <TabsTrigger value="animation" className="data-[state=active]:bg-bsd-orange data-[state=active]:text-white">
                      Animation & Game
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="graphic" className="mt-0">
                  {graphicWorks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {graphicWorks.map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-muted/20 rounded-lg">
                      <p className="text-foreground/70">Projects coming soon...</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="uiux" className="mt-0">
                  {uiuxWorks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {uiuxWorks.map(project => (
                        <ProjectCard key={`uiux-${project.id}`} project={project} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-muted/20 rounded-lg">
                      <p className="text-foreground/70">Projects coming soon...</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="interior" className="mt-0">
                  {interiorWorks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {interiorWorks.map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-muted/20 rounded-lg">
                      <p className="text-foreground/70">Projects coming soon...</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="landscape" className="mt-0">
                  <div className="text-center p-8 bg-muted/20 rounded-lg">
                    <p className="text-foreground/70">Landscape projects coming soon...</p>
                  </div>
                </TabsContent>

                <TabsContent value="animation" className="mt-0">
                  {animationWorks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {animationWorks.map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-muted/20 rounded-lg">
                      <p className="text-foreground/70">Projects coming soon...</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </RevealSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray mb-4">
                  Ready to Create Your Own Masterpiece?
                </h2>
                <p className="text-foreground/70 mb-8">
                  Join BSDT and be part of a community that nurtures creativity and innovation.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <AnimatedButton 
                    href="https://apply.bsd.edu.in/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
                  >
                    Apply Now
                  </AnimatedButton>
                  <AnimatedButton 
                    href="/plan-a-visit" 
                    variant="outline" 
                    className="border-bsd-gray text-bsd-gray hover:bg-bsd-gray/10"
                  >
                    Schedule a Visit
                  </AnimatedButton>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default StudentSpotlight;
