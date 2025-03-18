
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const IndustryFaculty: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">FACULTY & INDUSTRY EXPERTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Learn From UI/UX Design Professionals
            </h2>
            <p className="mt-4 text-foreground/70">
              Our UI/UX Design program is taught by working professionals who bring real-world expertise and industry insights to the classroom.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/8b983b3f-fd59-44d3-b5cc-152eeffe62cd.png" alt="Prateek Solanki" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Prateek Solanki</h3>
                  <p className="text-sm text-bsd-orange">Lead Faculty, UI/UX Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With 8+ years of experience in UX design for leading tech companies, Prateek brings expertise in user research methodologies and interaction design principles. His client portfolio includes projects for fintech, healthcare, and e-commerce sectors.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/121fd226-ad55-481d-b095-79c9e4765b16.png" alt="Meera Sharma" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Meera Sharma</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Interface Design</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A visual designer turned UI/UX specialist with experience at major design agencies, Meera specializes in creating intuitive interfaces and design systems. She focuses on teaching students how to balance aesthetics with functionality in their design work.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/ba42a875-3428-489e-84f5-b44223159d85.png" alt="Rahul Kapoor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Rahul Kapoor</h3>
                  <p className="text-sm text-bsd-orange">Visiting Faculty, UX Research</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A UX researcher with a background in psychology, Rahul specializes in user testing and research methodologies. His approach combines quantitative and qualitative research to create user-centered designs that address real user needs and pain points.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
        
        <RevealSection delay={200}>
          <div className="mt-16 bg-bsd-light-gray rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Industry Partnerships</h3>
                <p className="text-foreground/70">
                  Our program benefits from partnerships with leading tech companies and design agencies who provide:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>Guest lectures from industry professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>Portfolio reviews and career mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>Real client project opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>Internship and job placement assistance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Teaching Methodology</h3>
                <p className="text-foreground/70">
                  Our faculty employs a blend of theoretical knowledge and practical application:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>Case study analysis of successful UX designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>Hands-on workshops with industry tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>Collaborative design sprints and critiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-1.5 flex-shrink-0">
                      <div className="w-4 h-4 text-bsd-orange flex items-center justify-center">•</div>
                    </div>
                    <span>User testing and research methodologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
