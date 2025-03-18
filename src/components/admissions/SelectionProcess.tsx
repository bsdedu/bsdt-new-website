
import React from 'react';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { CheckCircle2, FileBadge, UserCheck, GraduationCap, FileText, AlertOctagon } from 'lucide-react';

export const SelectionProcess: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-bsd-orange/20">
        <CardContent className="p-6">
          <div className="flex items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-bsd-gray">Evaluation Criteria</h3>
              <p className="text-foreground/70 mt-1">The selection process evaluates multiple aspects of your profile:</p>
            </div>
          </div>
          
          <div className="space-y-4 ml-14">
            <div className="flex">
              <FileBadge className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0" />
              <div>
                <p className="text-foreground/80">
                  <span className="font-medium text-bsd-gray">Application Form Review</span> - Thoroughness and accuracy of your submitted application
                </p>
              </div>
            </div>
            
            <div className="flex">
              <FileText className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0" />
              <div>
                <p className="text-foreground/80">
                  <span className="font-medium text-bsd-gray">Document Verification</span> - Assessment of your submitted documents and credentials
                </p>
              </div>
            </div>
            
            <div className="flex">
              <UserCheck className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0" />
              <div>
                <p className="text-foreground/80">
                  <span className="font-medium text-bsd-gray">Personal Interview</span> - Evaluation of your aptitude, passion, and fit for the program
                </p>
              </div>
            </div>
            
            <div className="flex">
              <GraduationCap className="h-5 w-5 text-bsd-orange mr-3 flex-shrink-0" />
              <div>
                <p className="text-foreground/80">
                  <span className="font-medium text-bsd-gray">Academic Performance</span> - Review of your academic achievements in school
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-bsd-orange/20">
        <CardContent className="p-6">
          <div className="flex items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
              <GraduationCap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-bsd-gray">Decision Process</h3>
              <p className="text-foreground/70 mt-1">After your evaluation, the Academic Committee will make one of the following decisions:</p>
            </div>
          </div>
          
          <div className="mt-6 space-y-6">
            <div className="flex items-center px-4 py-3 bg-green-50 rounded-lg border border-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
              <div>
                <h4 className="font-medium text-green-800">Selected</h4>
                <p className="text-green-700 text-sm">Congratulations! You've been accepted to the program.</p>
              </div>
            </div>
            
            <div className="flex items-center px-4 py-3 bg-amber-50 rounded-lg border border-amber-100">
              <FileText className="h-6 w-6 text-amber-500 mr-3" />
              <div>
                <h4 className="font-medium text-amber-800">Waitlisted</h4>
                <p className="text-amber-700 text-sm">You're on our waitlist and may be offered admission based on availability.</p>
              </div>
            </div>
            
            <div className="flex items-center px-4 py-3 bg-red-50 rounded-lg border border-red-100">
              <AlertOctagon className="h-6 w-6 text-red-500 mr-3" />
              <div>
                <h4 className="font-medium text-red-800">Rejected</h4>
                <p className="text-red-700 text-sm">Unfortunately, your application was not successful. Note that rejected candidates cannot reapply.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-center text-bsd-gray font-medium">
              Admission to any program at BSDT is strictly based on merit.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
