
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const StudioSection: React.FC = () => {
  const studioFeatures = [
    {
      title: "Material Library",
      description: "Access to a vast collection of material samples to explore texture, color, and sustainability in design.",
      icon: "📚"
    },
    {
      title: "Model Making Workshop",
      description: "Fully equipped studio for creating physical models and prototypes of interior design concepts.",
      icon: "🔨"
    },
    {
      title: "Digital Design Lab",
      description: "State-of-the-art computers with the latest interior design software and rendering tools.",
      icon: "💻"
    },
    {
      title: "Lighting Studio",
      description: "Experimental space to test different lighting designs and effects on interior spaces.",
      icon: "💡"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <Badge variant="bsdOrange" className="mb-4">DESIGN STUDIOS</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-6">
                State-of-the-Art Learning Spaces
              </h2>
              <p className="text-foreground/70 mb-6">
                Our Interior Design program features dedicated studios that simulate professional work environments while providing all the tools and resources students need to bring their creative visions to life.
              </p>
              <p className="text-foreground/70">
                Through hands-on learning in these specialized spaces, students develop practical skills and a thorough understanding of materials, techniques, and industry standards.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png" 
                alt="Interior Design Studio" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioFeatures.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
