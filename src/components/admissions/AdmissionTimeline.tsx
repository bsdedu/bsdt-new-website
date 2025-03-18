
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const AdmissionTimeline: React.FC = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Start Your Application",
      description: "Visit https://www.apply.bsd.edu.in/ and register yourself by creating an account.",
      icon: <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bsd-orange text-white">1</span>
    },
    {
      step: "Step 2",
      title: "Complete Your Application",
      description: "Fill in the application form for your chosen course, upload all required documents, and proceed to payment.",
      icon: <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bsd-orange text-white">2</span>
    },
    {
      step: "Step 3",
      title: "Payment Confirmation",
      description: "Once you complete the payment, you will receive an acknowledgement of your payment via email.",
      icon: <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bsd-orange text-white">3</span>
    },
    {
      step: "Step 4",
      title: "Selection Process",
      description: "Appear for the BSDT Admission Selection Process where you'll be evaluated by an interview panel.",
      icon: <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bsd-orange text-white">4</span>
    },
    {
      step: "Step 5",
      title: "Results",
      description: "The Admissions Committee will evaluate each profile, and results will be declared on the same day or the next day. You'll be notified via email if you're Selected, Waitlisted, or Rejected.",
      icon: <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bsd-orange text-white">5</span>
    }
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-0.5 bg-gray-200"></div>
      {steps.map((step, index) => (
        <RevealSection key={index} delay={index * 100}>
          <div className={`flex mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="flex-none hidden md:block md:w-1/2"></div>
            <div className="flex-none">
              <div className="relative z-10 bg-white p-1 rounded-full">{step.icon}</div>
            </div>
            <div className="ml-4 md:ml-0 flex-1 md:w-1/2 md:px-6">
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <span className="text-sm font-medium text-bsd-orange">{step.step}</span>
                <h3 className="text-lg font-semibold text-bsd-gray mt-1">{step.title}</h3>
                <p className="mt-2 text-foreground/70">{step.description}</p>
              </div>
            </div>
          </div>
        </RevealSection>
      ))}
      <div className="flex justify-center">
        <div className="bg-green-100 text-green-800 rounded-full py-2 px-4 flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span className="font-medium">Admission Process Complete</span>
        </div>
      </div>
    </div>
  );
};
