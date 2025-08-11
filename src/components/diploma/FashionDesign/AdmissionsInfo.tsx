import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Users, Award, ArrowRight } from 'lucide-react';

export const AdmissionsInfo: React.FC = () => {
  const eligibilityCriteria = [
    "12th Grade completion from any stream",
    "Passion for fashion design and creativity",
    "Basic understanding of arts or design (preferred)",
    "Portfolio submission for advanced applicants",
    "Personal interview and aptitude assessment"
  ];

  const programBenefits = [
    "Professional diploma certification",
    "Industry-relevant portfolio development",
    "Access to fashion industry networks",
    "Hands-on garment construction experience",
    "Career guidance and placement support",
    "Alumni network access"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              ADMISSIONS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Fashion Design Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our upcoming cohort and transform your creative passion into professional fashion design skills. 
              Our admissions process is designed to identify motivated individuals ready to excel in fashion.
            </p>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Eligibility Criteria */}
          <RevealSection delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{criteria}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </RevealSection>

          {/* Program Benefits */}
          <RevealSection delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Program Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {programBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </RevealSection>
        </div>

        {/* Admission Details */}
        <RevealSection delay={0.4}>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Next Intake</h3>
                  <p className="text-sm text-muted-foreground">August 2024</p>
                </div>
                
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Batch Size</h3>
                  <p className="text-sm text-muted-foreground">Limited to 25 students</p>
                </div>
                
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Duration</h3>
                  <p className="text-sm text-muted-foreground">6 Months Intensive</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Application Process</h3>
                <p className="text-muted-foreground mb-6">
                  Submit your application online, attend a personal interview, and showcase your creativity. 
                  Our admissions team will guide you through each step of the process.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Interview
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealSection>
      </div>
    </section>
  );
};