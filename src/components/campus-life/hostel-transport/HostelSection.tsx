
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Bed, ShieldCheck, Wifi, Clock, CheckCircle2, Coffee } from "lucide-react";

export const HostelSection: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-bsd-light-gray">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bsd-orange/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-bsd-gray/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">CAMPUS FACILITIES</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray leading-tight">
              Hostel Accommodation
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              We provide comfortable and secure hostel facilities for students who need on-campus accommodation.
            </p>
          </div>
        </RevealSection>

        {/* Hostel Details Image */}
        <RevealSection delay={50}>
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/f448edd5-3487-45fc-a09c-a6b3493f9797.png" 
                alt="Hostel Accommodation Details - Room Types and Facilities" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
              <img 
                src="/lovable-uploads/bef68a54-0c8f-4524-bd19-ab8bd341370a.png" 
                alt="BSD Hostel Facility" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-bsd-gray mb-4">Comfortable Living Environment</h3>
                <p className="text-foreground/70 mb-5">
                  Our hostels provide a comfortable and supportive living environment that complements your academic journey. All rooms are fully furnished and designed to create a conducive atmosphere for both studying and relaxation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Bed className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Well-furnished rooms</p>
                      <p className="text-sm text-foreground/60">Comfortable beds and study desks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">24/7 Security</p>
                      <p className="text-sm text-foreground/60">CCTV surveillance and guards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wifi className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">High-speed WiFi</p>
                      <p className="text-sm text-foreground/60">Always stay connected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Dining Facilities</p>
                      <p className="text-sm text-foreground/60">Nutritious meals served daily</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Hostel Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Separate wings for boys and girls with appropriate security measures</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Common rooms equipped with recreational facilities</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Laundry services available for all residents</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Regular housekeeping services to maintain cleanliness</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">First-aid facilities and medical assistance on call</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-16 text-center">
            <p className="text-bsd-gray font-medium mb-4">For more information about hostel accommodations, please contact our admissions office</p>
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-bsd-orange" />
                <span className="text-sm text-foreground/70">Queries answered within 24 hours</span>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
