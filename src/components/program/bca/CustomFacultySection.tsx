
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
                    <img src="/lovable-uploads/ba42a875-3428-489e-84f5-b44223159d85.png" alt="Harish Narayan" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Harish Narayan</h3>
                  <p className="text-sm text-bsd-orange">Faculty, UI/UX Design & Product Management</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    A skilled product manager specializing in UI/UX and collaboration tools. With a post-graduate degree in Management from Great Lakes Institute and a bachelor's in Instrumentation Technology from M S Ramaiah Institute, his expertise in user experience and metrics has led to significant contributions in the tech industry.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/121fd226-ad55-481d-b095-79c9e4765b16.png" alt="J. Sheeba Selvapattu" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">J. Sheeba Selvapattu</h3>
                  <p className="text-sm text-bsd-orange">Faculty, Computer Science & Cybersecurity</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    With a Master's in Information Technology and currently pursuing a Ph.D. in Computer Science, Sheeba brings 4.5 years of experience as a researcher and academician. Her expertise in cybersecurity, cloud computing, and programming languages like Python and Java, along with several Scopus-indexed research publications, enriches the learning experience.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                    <img src="/lovable-uploads/3e1b6482-f28a-4680-9931-2f728b80d0eb.png" alt="Shyni K C" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray">Shyni K C</h3>
                  <p className="text-sm text-bsd-orange">Assistant Professor, Computer Applications</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    An experienced educator with 18 years of teaching experience, Shyni holds a Master's in Computer Applications and a Bachelor's in Mathematics. Her strong foundation in computational thinking and problem-solving drives her passion for mathematics and computer science education, empowering students with critical thinking skills relevant to the evolving tech industry.
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
