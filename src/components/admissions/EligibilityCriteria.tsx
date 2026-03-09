
import React from 'react';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, AlertCircle, Award } from 'lucide-react';

export const EligibilityCriteria: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-bsd-gray mb-8 text-center">Eligibility Criteria</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* UG Programs */}
        <Card className="overflow-hidden border-bsd-orange/20 shadow-md">
          <div className="bg-gradient-to-r from-bsd-orange/20 to-bsd-orange/5 p-6 flex items-center border-b border-bsd-orange/10">
            <GraduationCap className="h-8 w-8 text-bsd-orange mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-bsd-gray">Undergraduate Programs</h3>
              <p className="text-foreground/70 text-sm">B.Sc, BVA & BCA Degrees</p>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex">
                <BookOpen className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-bsd-gray mb-1">Academic Qualification</h4>
                  <p className="text-foreground/70 text-sm">
                    Successful completion of 10+2 (Pass/Appearing – Any Stream) from any recognized higher secondary school board.
                  </p>
                </div>
              </div>
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-bsd-gray mb-1">Important Note</h4>
                  <p className="text-foreground/70 text-sm">
                    Applicants awaiting qualifying examination results can also apply.
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <Badge variant="outline" className="bg-bsd-orange/10 text-bsd-orange border-bsd-orange/20">
                  Applicable for all UG Programs
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diploma Programs */}
        <Card className="overflow-hidden border-bsd-orange/20 shadow-md">
          <div className="bg-gradient-to-r from-bsd-orange/20 to-bsd-orange/5 p-6 flex items-center border-b border-bsd-orange/10">
            <Award className="h-8 w-8 text-bsd-orange mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-bsd-gray">Professional Diploma Programs</h3>
              <p className="text-foreground/70 text-sm">UI/UX, Fashion Design & Sustainable Design</p>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex">
                <BookOpen className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-bsd-gray mb-1">Academic Qualification</h4>
                  <p className="text-foreground/70 text-sm">
                    Completion of 10+2 from any recognized board or equivalent qualification.
                  </p>
                </div>
              </div>
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-bsd-gray mb-1">Additional Criteria</h4>
                  <p className="text-foreground/70 text-sm">
                    No prior design experience required. Selection based on personal interview and aptitude assessment.
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <Badge variant="outline" className="bg-bsd-orange/10 text-bsd-orange border-bsd-orange/20">
                  Applicable for all Diploma Programs
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
