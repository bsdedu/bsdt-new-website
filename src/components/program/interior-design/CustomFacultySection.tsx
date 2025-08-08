
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/6a1ccf75-36c6-4e1d-a33e-de8d605a10a0.png" alt="Ar. Dineshwar S" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Dineshwar S</h3>
                  <p className="text-sm text-bsd-orange">Senior Design Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A seasoned architect with extensive experience in residential and commercial interior design. Dineshwar specializes in sustainable design practices and innovative space planning solutions. His expertise in contemporary design principles and material innovation helps students develop cutting-edge design skills.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/86ed5b57-0962-4621-871b-020dfb54caf2.png" alt="Ar. Preethi" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Preethi</h3>
                  <p className="text-sm text-bsd-orange">Senior Design Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An accomplished interior architect with expertise in luxury residential and hospitality design. Preethi brings rich experience in color theory, lighting design, and furniture selection. Her passion for teaching and mentoring helps students understand the nuances of creating aesthetically pleasing and functional interior spaces.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" alt="Ar. Seema" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Seema</h3>
                  <p className="text-sm text-bsd-orange">Senior Design Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A creative professional with deep expertise in spatial design and human-centered design principles. Seema's background in both architecture and interior design allows her to guide students in understanding space relationships and user experience. She emphasizes the importance of cultural context and environmental consciousness in design.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
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
                    <img src="/lovable-uploads/fc9b9c4c-91be-43de-b1a5-d5c09b30a3d8.png" alt="Ar. Bhavana" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Ar. Bhavana</h3>
                  <p className="text-sm text-bsd-orange">Design Faculty</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An innovative designer who transforms ideas into impactful visuals by exploring new perspectives and pushing creative boundaries. Bhavana is collaborative by nature, working closely with both instructors and students to foster meaningful discussions. She draws inspiration from her love for trekking, travel, and nature, bringing these influences into her design approach and teaching methodology.
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
