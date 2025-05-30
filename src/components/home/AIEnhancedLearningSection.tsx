
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { BrainCircuit, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const AIEnhancedLearningSection: React.FC = () => {
  return (
    <section className="bg-white relative overflow-hidden py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-bsd-orange/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <RevealSection delay={100} scale={true}>
          <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-8 transition-all duration-500 hover:shadow-lg hover:shadow-bsd-orange/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-bsd-orange/10 flex items-center justify-center transition-all duration-500 hover:bg-bsd-orange/20 transform hover:scale-110">
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
                  {["AI-powered personalized learning paths", "Generative design tools in all courses", "Real-world AI implementation projects", "Industry partnerships with AI leaders"].map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 p-2 rounded-md transition-all duration-300 hover:bg-bsd-orange/5"
                    >
                      <CheckCircle className="w-5 h-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
