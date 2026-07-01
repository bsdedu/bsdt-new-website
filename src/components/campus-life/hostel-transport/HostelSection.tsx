import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Home, Building, MapPin, Users, CheckCircle2, Phone } from "lucide-react";

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
              Student Accommodation Assistance
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              BSDT no longer offers on-campus hostel facilities directly. Instead, we assist students in finding and securing suitable accommodation through our network of trusted residential partners.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-bsd-gray mb-4">Accommodation Partners</h3>
                <p className="text-foreground/70 mb-5">
                  We have established tie-ups with a range of residential accommodation providers, including paying guest accommodations (PGs), hostels, and rental flats located in and around the campus.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">PG Accommodations</p>
                      <p className="text-sm text-foreground/60">Managed stays with meals & utilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Hostels</p>
                      <p className="text-sm text-foreground/60">Shared & independent room options</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Rental Flats</p>
                      <p className="text-sm text-foreground/60">Located near the campus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <p className="font-medium text-bsd-gray">Personalised Support</p>
                      <p className="text-sm text-foreground/60">Guidance based on your preferences</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">How We Help</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Personalised recommendations based on budget, proximity, and preferences</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Verified listings across multiple budget ranges and accommodation types</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Support with site visits and securing the right accommodation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bsd-orange mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">Ongoing assistance throughout your stay for any accommodation-related queries</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-bsd-gray mb-4">Accommodation Options Overview</h3>
              <p className="text-foreground/70 mb-6">
                Whether you prefer a structured PG environment, a shared hostel, or an independent rental flat, we help you explore and secure the right fit. All partner accommodations are located within convenient commuting distance of the campus.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-bsd-light-gray rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-bsd-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-bsd-gray">Paying Guest (PG)</p>
                    <p className="text-sm text-foreground/60">Food, WiFi, and housekeeping included</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-bsd-light-gray rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                    <Home className="h-5 w-5 text-bsd-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-bsd-gray">Hostels</p>
                    <p className="text-sm text-foreground/60">Community living with shared amenities</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-bsd-light-gray rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-bsd-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-bsd-gray">Rental Flats</p>
                    <p className="text-sm text-foreground/60">Independent or shared apartment units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-bsd-orange" />
                <p className="text-bsd-gray font-medium text-lg">
                  For more information or assistance with accommodation, please contact
                </p>
              </div>
              <p className="text-2xl font-bold text-bsd-orange">+91 7892554398</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
