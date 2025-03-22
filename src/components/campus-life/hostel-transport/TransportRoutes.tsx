
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { routeData } from './routeData';

export const TransportRoutes: React.FC = () => {
  return (
    <section className="py-16 bg-bsd-light-gray/50">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">ROUTES & SCHEDULES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Transport Routes
            </h2>
            <p className="mt-4 text-foreground/70">
              We operate bus services on multiple routes covering major areas of Bangalore. Select a route to view the stops.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="route1" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="route1">Route 1</TabsTrigger>
                <TabsTrigger value="route2">Route 2</TabsTrigger>
                <TabsTrigger value="route3">Route 3</TabsTrigger>
              </TabsList>
            </div>
            
            {routeData.map((route, index) => (
              <TabsContent key={index} value={`route${index + 1}`} className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-bsd-gray mb-4 text-center">{route.name}</h3>
                  <div className="max-w-2xl mx-auto">
                    <div className="flex justify-center mb-6">
                      <img 
                        src={route.imagePath} 
                        alt={`${route.name} Map`} 
                        className="max-w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-bsd-gray mb-3">Stops</h4>
                        <ul className="space-y-2">
                          {route.stops.map((stop, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bsd-orange text-white flex items-center justify-center text-xs font-medium">
                                {idx + 1}
                              </span>
                              <span className="text-foreground/70">{stop}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-bsd-gray mb-3">Schedule Information</h4>
                        <ul className="space-y-3 text-foreground/70">
                          <li className="flex flex-col">
                            <span className="font-medium">Morning Pickup:</span>
                            <span>First Stop: {route.schedule.morningFirst}</span>
                            <span>Campus Arrival: {route.schedule.morningArrival}</span>
                          </li>
                          <li className="flex flex-col">
                            <span className="font-medium">Evening Drop:</span>
                            <span>Campus Departure: {route.schedule.eveningDeparture}</span>
                            <span>Last Stop: {route.schedule.eveningLast}</span>
                          </li>
                          <li className="flex flex-col pt-3">
                            <span className="font-medium">Important Notes:</span>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                              <li>Students should be at their stops 5 minutes before scheduled time</li>
                              <li>Bus timings may vary slightly depending on traffic conditions</li>
                              <li>Contact transport coordinator for any queries</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 text-center">
            <p className="text-bsd-gray font-medium mb-4">Need more information about our transport services?</p>
            <p className="text-foreground/70">
              Please contact our transport department at <span className="text-bsd-orange font-medium">transport@bsd.edu.in</span> or call <span className="text-bsd-orange font-medium">+91 80 4545 1234</span>
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
