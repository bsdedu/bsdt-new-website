
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui-elements/Card";
import { Check } from "lucide-react";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";

export const BCAAdmissionSection = () => {
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
              Join our BCA program and start your journey toward a successful career in UI/UX design or AI & machine learning.
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
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-bsd-gray">Academic Qualification</h4>
                      <p className="text-sm text-foreground/70">10+2 (Higher Secondary) or equivalent with a minimum of 50% aggregate marks from any recognized board. Mathematics as a subject in 10+2 is preferred but not mandatory.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-bsd-orange" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-bsd-gray">Selection Process</h4>
                      <p className="text-sm text-foreground/70">Selection through BSDT Entrance Test and Personal Interview. Students with creative portfolios or coding projects will be given preference.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-bsd-gray">Application Process</h3>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="pl-2">
                    <span className="font-medium text-bsd-gray">Online Application:</span>
                    <p className="text-sm text-foreground/70 mt-1">Complete the online application form and pay the application fee.</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-bsd-gray">Entrance Examination:</span>
                    <p className="text-sm text-foreground/70 mt-1">Take the BSDT entrance test which assesses aptitude, logical reasoning, and basic computing knowledge.</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-bsd-gray">Personal Interview:</span>
                    <p className="text-sm text-foreground/70 mt-1">Shortlisted candidates are invited for a personal interview to assess their motivation and career goals.</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-bsd-gray">Final Selection:</span>
                    <p className="text-sm text-foreground/70 mt-1">Admission offers are made based on entrance test performance, interview, and academic records.</p>
                  </li>
                </ol>

                <div className="mt-6">
                  <AnimatedButton asChild>
                    <a href="#enquiry-form" className="hover:no-underline">Apply Now</a>
                  </AnimatedButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
