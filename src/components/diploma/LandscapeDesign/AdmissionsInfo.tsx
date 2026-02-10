
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react";

export const AdmissionsInfo: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ADMISSIONS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Program Details & Enrollment
            </h2>
            <p className="mt-4 text-foreground/70">
              Join our Professional Post Graduate Diploma in Landscape Design program and start your journey toward becoming a skilled landscape design professional.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-bsd-gray">Program Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-bsd-gray">Duration:</span>
                      <span className="text-foreground/70 ml-2">12 Months (2 Semesters)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-bsd-gray">Schedule:</span>
                      <span className="text-foreground/70 ml-2">Mon, Tue & Wed, 9:30 AM - 4:30 PM IST (Online) + Scheduled Offline Activities</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-bsd-gray">Mode:</span>
                      <span className="text-foreground/70 ml-2">Hybrid (Online + Offline at Bangalore or Satellite Centres)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-bsd-gray">Batch Intakes:</span>
                      <span className="text-foreground/70 ml-2">FEB | MAY | AUG | NOV</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-bsd-gray">Offline Learning Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70"><strong>Bangalore (Main Campus):</strong> Full offline or hybrid mode with workshops, studio activities, and site visits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70"><strong>Chhattisgarh:</strong> Satellite Partner Centre for site observations and practical demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70"><strong>Hyderabad:</strong> Plant nursery visits, material yard visits, and ecological studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70"><strong>Delhi:</strong> In-person critiques and practical demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bsd-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70"><strong>Coimbatore:</strong> Terrain-based studies and field observations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-bsd-gray">Time Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                Students should plan for approximately <strong>five hours per week</strong> outside class time for assignments, software practice, project development, and preparation for critiques. Offline workshops and visits may require additional time depending on the selected city's schedule.
              </p>
            </CardContent>
          </Card>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="text-center">
            <a 
              href="https://futrschool.edmingle.com/course/LandscapeDesign-94776" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-bsd-orange hover:bg-bsd-orange/90 text-white">
                Apply Now
              </Button>
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

