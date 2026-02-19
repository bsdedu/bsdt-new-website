
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Pencil, Lightbulb, Users, Trophy } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const DesignStudioSection: React.FC = () => {
  return (
    <section id="design-studio" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">DESIGN STUDIO CLASSES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Collaborative Design Studios
            </h2>
            <p className="mt-4 text-foreground/70">
              Our design studio classes simulate real-world creative environments, allowing students to work on complex projects under the guidance of industry professionals.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                    <Pencil className="w-5 h-5 text-bsd-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bsd-gray mb-2">Project-Based Learning</h3>
                    <p className="text-foreground/70">
                      Students tackle complex design challenges through semester-long projects that mirror industry workflows, developing crucial problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                    <Lightbulb className="w-5 h-5 text-bsd-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bsd-gray mb-2">Critical Thinking Development</h3>
                    <p className="text-foreground/70">
                      Design studios foster analytical thinking, encouraging students to evaluate designs critically and develop creative solutions to complex problems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                    <Users className="w-5 h-5 text-bsd-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bsd-gray mb-2">Collaborative Environment</h3>
                    <p className="text-foreground/70">
                      Students learn to work in teams, communicate effectively, and align their creativity with a unified vision—essential skills for professional success.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-bsd-orange/10 mt-1">
                    <Trophy className="w-5 h-5 text-bsd-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bsd-gray mb-2">Industry-Standard Evaluation</h3>
                    <p className="text-foreground/70">
                      Projects are evaluated through professional critique sessions, with students presenting their work to industry experts who provide valuable feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[600px]">
              <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: false }) as any]}
                className="w-full h-full"
              >
                <CarouselContent className="h-[600px]">
                  {[
                    { src: "/lovable-uploads/e155e509-59d8-4fcc-99bd-921efe113141.png", alt: "Design Studio Collaborative Session" },
                    { src: "/images/design-studio-1.jpg", alt: "Design studio presentation session" },
                    { src: "/images/design-studio-2.jpg", alt: "Design studio group photo" },
                    { src: "/images/design-studio-3.jpg", alt: "Design studio interactive session" },
                  ].map((img, i) => (
                    <CarouselItem key={i} className="h-full">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
              </Carousel>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <div className="p-6">
                  <p className="text-white font-medium text-lg">Students develop creative solutions under mentorship of industry professionals</p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
