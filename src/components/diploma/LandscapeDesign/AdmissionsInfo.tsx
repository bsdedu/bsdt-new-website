
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { GraduationCap, CalendarClock, FileText } from "lucide-react";
import { Link } from 'react-router-dom';

export const AdmissionsInfo: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ADMISSIONS INFORMATION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Join Our Post Graduate Diploma Program
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
                    <p className="text-foreground/70">Bachelor's degree in Architecture, Design, Horticulture, Environmental Science, or related field</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Portfolio</h4>
                    <p className="text-foreground/70">A portfolio of creative work (preferred but not mandatory for all backgrounds)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Selection Process</h4>
                    <p className="text-foreground/70">Review of academic records, portfolio (if applicable), and personal interview</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Professional Experience</h4>
                    <p className="text-foreground/70">Prior experience in design fields is advantageous but not required</p>
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
                    <p className="text-foreground/70">1 Year (2 Semesters)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Program Structure</h4>
                    <p className="text-foreground/70">Studio-based learning, lectures, workshops, site visits, and capstone project</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Class Schedule</h4>
                    <p className="text-foreground/70">Weekday classes (Mon-Fri, 10:00 AM to 4:00 PM)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-bsd-gray">Intake Dates</h4>
                    <p className="text-foreground/70">January and July each year</p>
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
                      <span className="font-semibold text-bsd-gray">Complete the online application form</span> with your personal and educational details
                    </p>
                  </li>
                  
                  <li>
                    <p className="text-foreground/70">
                      <span className="font-semibold text-bsd-gray">Submit required documents</span> including ID proof, educational certificates, and portfolio (if applicable)
                    </p>
                  </li>
                  
                  <li>
                    <p className="text-foreground/70">
                      <span className="font-semibold text-bsd-gray">Schedule and attend a personal interview</span> with the admissions team
                    </p>
                  </li>
                  
                  <li>
                    <p className="text-foreground/70">
                      <span className="font-semibold text-bsd-gray">Receive admission confirmation</span> and complete registration process
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
              <Link to="/admissions/application-process">
                <Button size="lg" variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
