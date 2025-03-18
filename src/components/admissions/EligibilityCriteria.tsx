
import React from 'react';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, AlertCircle } from 'lucide-react';

export const EligibilityCriteria: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-bsd-gray mb-8 text-center">Eligibility Criteria</h2>
      
      <Card className="overflow-hidden border-bsd-orange/20 shadow-md">
        <div className="bg-gradient-to-r from-bsd-orange/20 to-bsd-orange/5 p-6 flex items-center border-b border-bsd-orange/10">
          <GraduationCap className="h-8 w-8 text-bsd-orange mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-bsd-gray">Basic Eligibility Requirements</h3>
            <p className="text-foreground/70">Criteria for admission to BSDT programs</p>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <BookOpen className="h-5 w-5 text-bsd-orange mr-3" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-2">Academic Qualification</h4>
                <p className="text-foreground/70">
                  Successful completion of minimum 10+2 (Pass/Appearing – Any Stream) from any recognized higher secondary school board.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <AlertCircle className="h-5 w-5 text-bsd-orange mr-3" />
              </div>
              <div>
                <h4 className="font-medium text-bsd-gray mb-2">Important Note</h4>
                <p className="text-foreground/70">
                  Applicants who are awaiting the results of their qualifying examination can also apply for the courses offered by BSDT.
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="bg-bsd-orange/10 text-bsd-orange border-bsd-orange/20">
                    Applicable for all Programs
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
