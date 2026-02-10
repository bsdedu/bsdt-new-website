import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { GraduationCap, CalendarClock, FileText } from "lucide-react";

export const AdmissionsInfo: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ADMISSIONS INFORMATION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Join Our AI & Service Design Program
            </h2>
            <p className="mt-4 text-foreground/70">
              Everything you need to know about admissions, eligibility, and the application process.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 text-bsd-orange mr-3" />
                  Eligibility & Requirements
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Academic Qualification</h4>
                    <p className="text-foreground/70">Bachelor's degree in Design, Computer Science, Engineering, Business, or related field</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Professional Experience</h4>
                    <p className="text-foreground/70">Minimum 1 year in design, technology, or business strategy (preferred but not mandatory)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Selection Process</h4>
                    <p className="text-foreground/70">Portfolio review, interview, and aptitude assessment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Technical Readiness</h4>
                    <p className="text-foreground/70">Basic understanding of design principles and comfort with technology tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-6 flex items-center">
                  <CalendarClock className="w-6 h-6 text-bsd-orange mr-3" />
                  Program Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Duration</h4>
                    <p className="text-foreground/70">8 Months Intensive</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Program Structure</h4>
                    <p className="text-foreground/70">Hybrid learning: Live online classes + offline sessions at Bangalore campus or Satellite Centres</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Schedule</h4>
                    <p className="text-foreground/70">Flexible timing with weekend intensives</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Intake Dates</h4>
                    <p className="text-foreground/70">February, May, August & November each year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-10">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-bsd-orange mr-3" />
                  Application Process
                </h3>
                
                <ol className="space-y-4 list-decimal pl-5">
                  <li>
                    <p className="text-foreground/70">
                      <span className="font-semibold text-bsd-gray">Submit online application</span> with academic transcripts and portfolio
                    </p>
                  </li>
                  <li>
                    <p className="text-foreground/70">
                      <span className="font-semibold text-bsd-gray">Complete design thinking aptitude assessment</span>
                    </p>
                  </li>
                  <li>
                    <p className="text-foreground/70">
                      <span className="font-semibold text-bsd-gray">Attend virtual interview</span> with program coordinator
                    </p>
                  </li>
                  <li>
                    <p className="text-foreground/70">
                      <span className="font-semibold text-bsd-gray">Receive admission confirmation</span> and complete enrollment
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
        
        <RevealSection delay={200}>
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a href="https://apply.bsd.edu.in/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                  Apply Now
                </Button>
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
