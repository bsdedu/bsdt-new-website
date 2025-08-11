import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Clock, Users, ExternalLink } from 'lucide-react';

export const AdmissionsInfo: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              ADMISSIONS INFORMATION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our comprehensive AI & Service Design program and become a leader in the intersection 
              of artificial intelligence and human-centered design.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Eligibility & Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Eligibility & Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Academic Qualification</h4>
                  <p className="text-sm text-muted-foreground">
                    Bachelor's degree in Design, Computer Science, Engineering, Business, or related field
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Professional Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimum 1 year in design, technology, or business strategy (preferred but not mandatory)
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Selection Process</h4>
                  <p className="text-sm text-muted-foreground">
                    Portfolio review, interview, and aptitude assessment
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Technical Readiness</h4>
                  <p className="text-sm text-muted-foreground">
                    Basic understanding of design principles and comfort with technology tools
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Program Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Program Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">12 months (full-time) | 18 months (part-time)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Learning Mode</p>
                    <p className="text-sm text-muted-foreground">Hybrid (Online + On-campus workshops)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Schedule</p>
                    <p className="text-sm text-muted-foreground">Flexible timing with weekend intensives</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Intake Dates</p>
                    <p className="text-sm text-muted-foreground">January, April, July, October</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        {/* Application Process */}
        <RevealSection delay={0.4}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li>Submit online application with academic transcripts and portfolio</li>
                <li>Complete design thinking aptitude assessment</li>
                <li>Attend virtual interview with program coordinator</li>
                <li>Portfolio review by faculty panel</li>
                <li>Receive admission decision within 2 weeks</li>
                <li>Complete enrollment and fee payment</li>
              </ol>
            </CardContent>
          </Card>
        </RevealSection>

        {/* CTA */}
        <RevealSection delay={0.6}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Start Your AI & Service Design Journey
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Applications are now open for the next intake. Take the first step towards becoming 
                an AI-powered service design leader.
              </p>
              <Button size="lg" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Apply Now
              </Button>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};