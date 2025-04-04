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
              Learn From Industry Leaders
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Interior Design program is led by professionals with extensive industry experience who are passionate about nurturing the next generation of creative talent.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/8ccec140-104c-4377-af2e-fe1d5d2c5bc9.png" alt="Prof. Dipti Dineshwar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prof. Dipti Dineshwar</h3>
                  <p className="text-sm text-bsd-orange">Senior Design Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An architect from BMS School of Architecture with experience in Bangalore and Jaipur. Dipti leads academic programs at BSD, helping students develop design skills through workshops and projects. She specializes in design theory and architectural history, with a Harvard certification in 'The Architectural Imagination'.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/22849e53-5fd4-414c-826d-99aa91cfc501.png" alt="Er. Ritesh L" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Er. Ritesh L</h3>
                  <p className="text-sm text-bsd-orange">Lead Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A civil engineering gold medalist with an M.Tech from SJB Institute of Technology, Ritesh brings structural engineering expertise to design education. He has published in international research journals and conducted seminars on innovative design and construction practices. Ritesh is passionate about bridging technical knowledge with creative design approaches.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/f9a81ed0-1eab-4c08-a64b-f26652946746.png" alt="Prof. Aditha Verma Raj" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prof. Aditha Verma Raj</h3>
                  <p className="text-sm text-bsd-orange">Senior Design Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    Architecture graduate from Thiagarajar School of Architecture with over eight years of experience in hotels, commercial buildings, and luxury villas. Currently a senior architect at Design Studio, Aditha has been with BSDT since its inception, mentoring students and providing industry-relevant guidance.
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
