
import React from 'react';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { FileText, User, Mail, Upload, CreditCard, AlertTriangle } from 'lucide-react';

export const ApplicationSteps: React.FC = () => {
  const applicationSteps = [
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Provide Accurate Information",
      description: "Fill your name exactly as it appears in your qualifying examination marks card.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Use Personal Contact Details",
      description: "Use your personal email address and mobile number while registering for the course. All communications will be sent to these.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Complete Application Form",
      description: "Upon registration and email verification, fill out the online application form. You can save parts of your application as you progress.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Upload className="h-6 w-6 text-white" />,
      title: "Upload Required Documents",
      description: "Upload all the required documents mentioned in the application form without fail.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-white" />,
      title: "Pay Application Fee",
      description: "Complete the payment of the non-refundable application form fee. You'll receive a payment acknowledgement receipt via email.",
      color: "from-red-500 to-red-600"
    }
  ];

  const importantNotes = [
    "Applicants can apply/register only ONE TIME for each course at any given point.",
    "Application Form Fee paid is non-refundable.",
    "Applicants who are awaiting the results of their qualifying examination can apply for the courses offered by BSDT."
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicationSteps.map((step, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className={`bg-gradient-to-r ${step.color} p-4 flex items-center`}>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-white font-medium ml-3">Step {index + 1}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-bsd-gray mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-5">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-bsd-orange flex-shrink-0 mr-4" />
            <div>
              <h3 className="font-semibold text-bsd-gray mb-2">Important Notes</h3>
              <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                {importantNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
