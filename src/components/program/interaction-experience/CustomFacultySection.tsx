
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";

export const CustomFacultySection: React.FC = () => {
  try {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">FACULTY</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Learn From Interaction Design Experts
              </h2>
              <p className="mt-4 text-foreground/70">
                Our Interaction & Experience Design program is led by professionals with extensive industry experience who bring real-world insights and practical knowledge to the classroom.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Faculty cards with error handling for images */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/b6181cce-9876-49c8-a669-98e38baf6bfa.png" 
                        alt="Arun Murugesan" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }} 
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-bsd-gray">Arun Murugesan</h3>
                    <p className="text-sm text-bsd-orange">Program Head, UI/UX Design</p>
                    <p className="mt-4 text-sm text-foreground/70">
                      With 12+ years in UX design, Arun leads the HCI department at BSD. He has worked with MNCs like SAP and Cisco, and currently heads the UX group at Rupeek Fintech. He previously founded DTALE design studio, leading a team that worked on 50+ projects across e-commerce, fintech, healthcare, and IoT sectors.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/94870121-42f6-48a4-ba7d-955284a194f6.png" 
                        alt="Amlan Jyothi Bharali" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-bsd-gray">Amlan Jyothi Bharali</h3>
                    <p className="text-sm text-bsd-orange">Faculty, Interaction Design</p>
                    <p className="mt-4 text-sm text-foreground/70">
                      Dedicated to exploring relationships between form and various contexts, Amlan brings expertise in Product and UI/UX Design. His portfolio includes a website for a design-focused educational institution, a mobile app for the transgender community, a dashboard UI for an electric sports car at IIT Guwahati, and contributions to a sustainable bamboo EV bicycle project at IIT Bombay.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-bsd-light-gray rounded-full mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/18447800-f016-4625-b117-1b07598c7e08.png" 
                        alt="Piyush Kanti Mahapatra" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-bsd-gray">Piyush Kanti Mahapatra</h3>
                    <p className="text-sm text-bsd-orange">Faculty, Visual Design</p>
                    <p className="mt-4 text-sm text-foreground/70">
                      With 4+ years in digital brand management, Piyush combines industry experience as a Visual Designer with three years of teaching in Art and Design. Skilled in Adobe Creative Cloud, he brings a strategic approach to design that balances aesthetics with brand objectives. His background in both professional and academic environments enriches his collaborative approach to creative problem-solving.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealSection>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error rendering CustomFacultySection:", error);
    return <div>Something went wrong. Please try again.</div>;
  }
};
