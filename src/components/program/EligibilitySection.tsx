
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

interface EligibilitySectionProps {
  programName?: string;
  requirements?: string[];
}

export const EligibilitySection: React.FC<EligibilitySectionProps> = ({ 
  programName = "BVA Animation & Game Design",
  requirements
}) => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ADMISSIONS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Eligibility & Application Process
            </h2>
            <p className="mt-4 text-foreground/70">
              Join our {programName} program and start your journey toward a creative and fulfilling career.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-bsd-gray">Eligibility Criteria</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements ? (
                    requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-foreground/70">{requirement}</p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Academic Qualification</h4>
                          <p className="text-sm text-foreground/70">10+2 (Higher Secondary) or equivalent with a minimum of 50% aggregate marks from any recognized board</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Age Requirements</h4>
                          <p className="text-sm text-foreground/70">Minimum 17 years of age as of July 31st of the admission year</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Portfolio (Recommended)</h4>
                          <p className="text-sm text-foreground/70">A portfolio of creative work demonstrating your interest in art, design, or digital media is recommended but not mandatory</p>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-bsd-gray">Application Process</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bsd-orange/10 flex-shrink-0 mt-0.5">
                      <span className="text-bsd-orange font-medium text-sm">01</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-bsd-gray">Online Application</h4>
                      <p className="text-sm text-foreground/70">Complete the online application form with your personal and academic details</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bsd-orange/10 flex-shrink-0 mt-0.5">
                      <span className="text-bsd-orange font-medium text-sm">02</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-bsd-gray">Document Submission</h4>
                      <p className="text-sm text-foreground/70">Upload required documents including academic transcripts, ID proof, and portfolio (if available)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bsd-orange/10 flex-shrink-0 mt-0.5">
                      <span className="text-bsd-orange font-medium text-sm">03</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-bsd-gray">Aptitude Test & Interview</h4>
                      <p className="text-sm text-foreground/70">Shortlisted candidates will be invited for a creative aptitude test followed by a personal interview</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bsd-orange/10 flex-shrink-0 mt-0.5">
                      <span className="text-bsd-orange font-medium text-sm">04</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-bsd-gray">Admission & Payment</h4>
                      <p className="text-sm text-foreground/70">Selected candidates will receive an offer letter and must complete the admission process by paying the required fees</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
