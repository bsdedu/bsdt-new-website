
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { CheckCircle } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-50 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-sm text-foreground/60 mb-4">Campus Life Placeholder</p>
                  <div className="w-16 h-1 bg-foreground/10 mx-auto"></div>
                </div>
              </div>

              {/* Image decoration */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full blur-xl opacity-60"></div>
            </div>
          </RevealSection>

          <RevealSection direction="left">
            <div className="space-y-6 max-w-xl">
              <span className="chip bg-black/5 border border-black/10 text-foreground/70">
                About BSD
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
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
                    <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
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
                <div className="text-4xl font-display font-bold">{stat.number}</div>
                <div className="text-sm text-foreground/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
