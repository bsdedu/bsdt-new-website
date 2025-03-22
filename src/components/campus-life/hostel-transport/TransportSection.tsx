
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Bus, Shield, MapIcon, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TransportSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">TRANSPORTATION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Transport Services
            </h2>
            <p className="mt-4 text-foreground/70">
              BSD offers safe and reliable transportation services for students commuting from various parts of Bangalore.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-4">Comprehensive Transport Network</h3>
                <p className="text-foreground/70 mb-6">
                  Our transportation service covers major residential areas across Bangalore, ensuring students have a convenient and safe mode of travel to and from campus. The transport fleet operates on fixed schedules with designated pick-up and drop-off points.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Bus className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Modern Fleet</p>
                      <p className="text-sm text-foreground/60">Comfortable, air-conditioned buses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Multiple Routes</p>
                      <p className="text-sm text-foreground/60">Coverage across Bangalore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Safety Features</p>
                      <p className="text-sm text-foreground/60">GPS tracking & experienced drivers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Punctual Service</p>
                      <p className="text-sm text-foreground/60">Timely pick-up and drop-off</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Transport Registration</h3>
                <p className="text-foreground/70 mb-4">
                  Students can register for transport services at the beginning of each academic year. The transport fee varies based on the distance and route chosen.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                      <MapIcon className="h-5 w-5 text-bsd-orange" />
                    </div>
                    <p className="text-foreground/70">Choose from multiple routes covering different parts of Bangalore</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                      <PhoneCall className="h-5 w-5 text-bsd-orange" />
                    </div>
                    <p className="text-foreground/70">For route information and fees, contact our transport department</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <RevealSection delay={150}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/cbf6195a-d109-46bc-9896-b0134b1cc268.png" 
                    alt="BSD Transport Service" 
                    className="w-full h-auto"
                  />
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Card className="border-0 shadow-sm overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src="/lovable-uploads/34144dc5-2d6a-4e54-9a74-984b2917db0e.png" 
                        alt="BSD Transport Bus" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <p className="font-medium text-bsd-gray">Safe & Comfortable</p>
                        <p className="text-sm text-foreground/60">Modern buses with safety features</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-bsd-gray mb-2">Transport Benefits</h4>
                      <ul className="text-sm text-foreground/70 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-bsd-orange">•</span>
                          <span>Reduces commuting stress</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-bsd-orange">•</span>
                          <span>Environmentally friendly option</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-bsd-orange">•</span>
                          <span>Dedicated transport coordinators</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-bsd-orange">•</span>
                          <span>Parents notified of arrival/departure</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </RevealSection>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
