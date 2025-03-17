
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const CustomFacultySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACULTY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From Tech Industry Experts
            </h2>
            <p className="mt-4 text-foreground/70">
              Our BCA program is taught by faculty with extensive industry experience who bring real-world insights and practical knowledge to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop" alt="Rajesh Kumar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Dr. Rajesh Kumar</h3>
                  <p className="text-sm text-bsd-orange">Faculty, AI & Machine Learning</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With a Ph.D. in Machine Learning and 8 years of experience at leading tech companies, Dr. Kumar specializes in neural networks and computer vision. He has published numerous research papers and holds patents in AI applications.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop" alt="Priya Singh" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Priya Singh</h3>
                  <p className="text-sm text-bsd-orange">Senior Faculty, UI/UX Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A former lead designer at a major tech giant, Priya brings a wealth of experience in user-centered design methodologies. Her expertise in creating intuitive digital experiences across platforms guides students in developing empathetic design solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop" alt="Vikram Mehta" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prof. Vikram Mehta</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Programming & Software Development</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A software architect with experience across multiple startups and enterprises, Prof. Mehta specializes in modern software development practices. His practical approach to teaching programming fundamentals ensures students develop strong coding foundations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
