
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Wallet, GraduationCap, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const AdmissionsInfo: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ADMISSIONS INFORMATION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Join Our UI/UX Design Program
            </h2>
            <p className="mt-4 text-foreground/70">
              Take the first step towards your career as a UI/UX designer. Applications for our upcoming batch are now open.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="bg-white rounded-2xl shadow-sm border border-bsd-orange/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-bsd-gray mb-6">Program Details</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Duration</h4>
                      <p className="text-foreground/70">6 months intensive program</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Schedule</h4>
                      <p className="text-foreground/70">Weekday batch: Mon, Wed & Fri, 09:30 AM to 4:30 PM</p>
                      <p className="text-foreground/70">Weekend batch: Sat & Sun, 10:00 AM to 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Wallet className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Program Fee</h4>
                      <p className="text-foreground/70">₹75,000 (Scholarships available for eligible candidates)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Eligibility</h4>
                      <p className="text-foreground/70">Minimum 12th pass in any stream. Basic computer knowledge required.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-bsd-orange/5 to-white p-8 md:p-10 flex flex-col">
                <h3 className="text-2xl font-bold text-bsd-gray mb-6">Admission Process</h3>
                
                <div className="space-y-5 mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Online Application</h4>
                      <p className="text-foreground/70">Fill the application form with your details and educational background</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Aptitude Test</h4>
                      <p className="text-foreground/70">Complete a basic design aptitude test (no prior experience required)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Personal Interview</h4>
                      <p className="text-foreground/70">Interact with our faculty to discuss your goals and interest in UI/UX design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bsd-gray">Enrollment</h4>
                      <p className="text-foreground/70">Complete the admission process and secure your seat</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto flex flex-col md:flex-row gap-4">
                  <Link to="/admissions/application-process" className="flex-1">
                    <Button size="lg" className="w-full bg-bsd-orange hover:bg-bsd-orange/90 text-white">
                      Apply Now
                    </Button>
                  </Link>
                  <Link to="/admissions/fees-scholarships" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                      Scholarship Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-bsd-light-gray border-t border-border">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-bsd-orange mr-2" />
                  <span className="text-bsd-gray font-medium">Next Batch: January 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-bsd-orange mr-2" />
                  <span className="text-bsd-gray font-medium">Limited Seats: Only 30 per batch</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-bsd-orange mr-2" />
                  <span className="text-bsd-gray font-medium">Application Deadline: December 20, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
