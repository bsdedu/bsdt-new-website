
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Master Human-Computer Interaction for UI/UX Design
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Diploma in HCI for UI/UX is designed to give you a deep understanding of human behavior and psychology in digital interactions, combined with practical skills in interface design and usability testing.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-bsd-gray">Program Highlights</h3>
              <div className="space-y-4">
                <p className="text-foreground/70">
                  The Diploma in HCI for UI/UX is a specialized 6-month program that combines theoretical knowledge with practical skills in creating user-centered digital experiences. You'll learn how to research user needs, design intuitive interfaces, conduct usability testing, and implement effective UI/UX solutions.
                </p>
                <p className="text-foreground/70">
                  With a focus on human psychology, cognitive science, and contemporary UI/UX methodologies, this program prepares you for a career in the rapidly-evolving field of digital design, where understanding human behavior is as crucial as technical proficiency.
                </p>
                <p className="text-foreground/70">
                  The curriculum is regularly updated to include emerging trends and technologies in the field, ensuring that graduates are equipped with the most relevant and in-demand skills for the industry.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-bsd-gray">What You Will Learn</h3>
              <ul className="space-y-3 list-disc pl-5 text-foreground/70">
                <li>Principles of Human-Computer Interaction and cognitive psychology</li>
                <li>User research methods and analysis techniques</li>
                <li>Information architecture and content strategy</li>
                <li>Wireframing, prototyping, and interaction design</li>
                <li>Visual design principles for digital interfaces</li>
                <li>Usability testing and evaluation methods</li>
                <li>Accessibility standards and inclusive design</li>
                <li>UI/UX design patterns and best practices</li>
                <li>Design systems and component libraries</li>
                <li>Portfolio development and professional presentation</li>
              </ul>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
