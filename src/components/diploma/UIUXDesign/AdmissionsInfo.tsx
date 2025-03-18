
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Clock, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const AdmissionsInfo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ADMISSION INFORMATION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Program Details & Eligibility
            </h2>
            <p className="mt-4 text-foreground/70">
              Everything you need to know about joining our Professional Diploma in UI/UX Design
            </p>
          </div>
        </RevealSection>
        
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-6">Program Structure</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-2 flex-shrink-0">
                      <Clock className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Duration</h4>
                      <p className="text-foreground/70">1 Year (2 Semesters)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-2 flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Mode of Learning</h4>
                      <p className="text-foreground/70">Online & Offline options available with hands-on workshops and practical sessions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-bsd-orange/10 rounded-full p-2 flex-shrink-0">
                      <Calendar className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-bsd-gray">Class Schedule</h4>
                      <p className="text-foreground/70">Weekday classes (Wed, Thru & Fri, 09:30 AM to 4:30 PM)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-6">Eligibility & Application</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-bsd-gray">Educational Qualification</h4>
                    <p className="text-foreground/70">10+2 from any recognized board. Students from any background (Arts, Science, Commerce) can apply.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-bsd-gray">Selection Process</h4>
                    <ul className="list-disc pl-5 text-foreground/70 space-y-1">
                      <li>Review of application and portfolio (if available)</li>
                      <li>Personal interview to assess aptitude and interest</li>
                      <li>No entrance examination required</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <Link to="/admissions/application-process">
                      <Button className="bg-bsd-orange hover:bg-bsd-orange/90 text-white">
                        Apply Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
