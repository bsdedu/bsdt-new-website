
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { CheckCircle, BrainCircuit, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bsd-light-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-bsd-orange/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection direction="right">
            <div className="space-y-4 mb-2">
              <Badge variant="bsdOrange">Campus Life</Badge>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray flex items-center gap-2">
                <Play className="w-6 h-6 text-bsd-orange" /> 
                Experience BSD Campus Life
              </h3>
              <p className="text-foreground/70">Take a virtual tour of our vibrant campus and see what makes BSD the perfect place for your creative journey.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/30 mt-4">
              <AspectRatio ratio={16/9}>
                <iframe 
                  src="https://www.youtube.com/embed/bWy4EH-B3tw" 
                  title="BSDT Campus Life Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </AspectRatio>

              {/* Image decoration */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-bsd-orange/10 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bsd-gray/10 rounded-full blur-xl opacity-60"></div>
            </div>
          </RevealSection>

          <RevealSection direction="left">
            <div className="space-y-6 max-w-xl">
              <Badge variant="bsdOrange">
                About BSD
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
                A Legacy of Excellence in Design & Technology Education
              </h2>
              <p className="text-foreground/70">
                For over 15 years, BSD has been at the forefront of design and technology education in India. Our innovative curriculum, industry partnerships, and state-of-the-art facilities create an environment where creativity and technical skills flourish.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Industry-experienced faculty",
                  "State-of-the-art labs and studios",
                  "Strong industry connections",
                  "Hands-on project-based learning",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <AnimatedButton withArrow>Learn More About Us</AnimatedButton>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* AI integration section */}
        <RevealSection delay={100}>
          <div className="mt-20 bg-white rounded-2xl shadow-sm border border-border/40 p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-bsd-orange/10 flex items-center justify-center">
                  <BrainCircuit className="w-12 h-12 text-bsd-orange" />
                </div>
              </div>
              <div className="md:w-3/4">
                <Badge variant="bsdOrange" className="mb-3">AI-Enhanced Learning</Badge>
                <h3 className="text-2xl font-display font-bold text-bsd-gray mb-4">Leveraging AI in Our Teaching Approach</h3>
                <p className="text-foreground/70 mb-6">
                  At BSD, we integrate cutting-edge AI technologies across our curriculum to enhance student learning, foster innovation, and prepare graduates for the AI-driven future of design and technology industries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "AI-powered personalized learning paths",
                    "Generative design tools in all courses",
                    "Real-world AI implementation projects",
                    "Industry partnerships with AI leaders"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Key stats */}
        <RevealSection delay={200}>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "500+", label: "Industry Partners" },
              { number: "5000+", label: "Alumni Network" },
              { number: "50+", label: "Awards & Recognitions" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-bsd-orange">{stat.number}</div>
                <div className="text-sm text-bsd-gray mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
