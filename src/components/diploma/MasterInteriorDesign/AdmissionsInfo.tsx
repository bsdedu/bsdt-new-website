import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Clock, Users, Calendar } from 'lucide-react';

export const AdmissionsInfo: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background/50 to-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              ADMISSIONS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-6">
              Master Diploma Admissions Information
            </h2>
            <p className="text-lg text-foreground/70">
              Our Master Diploma in Interior Design is designed for design professionals and graduates seeking advanced expertise and leadership roles in the interior design industry.
            </p>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <RevealSection delay={100}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-bsd-orange" />
                  <CardTitle>Eligibility & Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Academic Qualification</h4>
                    <p className="text-sm text-foreground/70">Bachelor's degree in Interior Design, Architecture, or related field with minimum 55% marks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Professional Experience</h4>
                    <p className="text-sm text-foreground/70">Minimum 2 years of relevant work experience in interior design or related field</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Portfolio Review</h4>
                    <p className="text-sm text-foreground/70">Comprehensive portfolio review and personal interview with faculty panel</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Professional Readiness</h4>
                    <p className="text-sm text-foreground/70">Demonstrated commitment to advancing career in interior design leadership</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={200}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-bsd-orange" />
                  <CardTitle>Program Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Duration</h4>
                    <p className="text-sm text-foreground/70">16 months (12 months academic + 3 months internship + 1 month portfolio)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Class Structure</h4>
                    <p className="text-sm text-foreground/70">Weekend intensives + weekday workshops + online components</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Schedule</h4>
                    <p className="text-sm text-foreground/70">Designed for working professionals with flexible attendance options</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-bsd-orange" />
                    <span className="text-sm font-medium">Intake Dates:</span>
                    <span className="text-sm text-foreground/70">August, December, April</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealSection>
        </div>

        <RevealSection delay={300}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 max-w-3xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-bsd-orange text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <div>
                    <h4 className="font-semibold text-sm">Submit Application</h4>
                    <p className="text-sm text-foreground/70">Complete online application form with academic transcripts and professional resume</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-bsd-orange text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <div>
                    <h4 className="font-semibold text-sm">Portfolio Submission</h4>
                    <p className="text-sm text-foreground/70">Submit comprehensive design portfolio showcasing professional work and design thinking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-bsd-orange text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <div>
                    <h4 className="font-semibold text-sm">Interview & Assessment</h4>
                    <p className="text-sm text-foreground/70">Personal interview with faculty panel and professional assessment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-bsd-orange text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                  <div>
                    <h4 className="font-semibold text-sm">Admission Decision</h4>
                    <p className="text-sm text-foreground/70">Receive admission decision and program enrollment confirmation</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </RevealSection>

        <RevealSection delay={400}>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-bsd-orange hover:bg-bsd-orange/90 text-white"
              onClick={() => window.open('https://b3454028-e84a-4654-825a-597bc4e4e58d.lovableproject.com/admissions/application-process', '_blank')}
            >
              Apply Now
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};