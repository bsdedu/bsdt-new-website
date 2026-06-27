import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Monitor, Users } from "lucide-react";

interface BatchScheduleSectionProps {
  totalDuration?: string;
}

export const BatchScheduleSection: React.FC<BatchScheduleSectionProps> = ({
  totalDuration = "16 months (3 semesters + internship & portfolio)"
}) => {
  const batches = [
    {
      name: "Batch 1",
      startMonth: "August",
      semester1: {
        classes: "Aug, Sept, Oct",
        assessments: "November"
      },
      semester2: {
        classes: "Dec, Jan, Feb",
        assessments: "March"
      }
    },
    {
      name: "Batch 2", 
      startMonth: "November",
      semester1: {
        classes: "Nov, Dec, Jan",
        assessments: "February"
      },
      semester2: {
        classes: "March, Apr, May",
        assessments: "June"
      }
    },
    {
      name: "Batch 3",
      startMonth: "February", 
      semester1: {
        classes: "Feb, March, April",
        assessments: "May"
      },
      semester2: {
        classes: "June, July, Aug",
        assessments: "September"
      }
    },
    {
      name: "Batch 4",
      startMonth: "May",
      semester1: {
        classes: "May, June, July", 
        assessments: "August"
      },
      semester2: {
        classes: "Sept, Oct, Nov",
        assessments: "December"
      }
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM SCHEDULE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Batch Schedule & Learning Modes
            </h2>
            <p className="mt-4 text-foreground/70">
              Choose from 4 batch intakes per year with flexible online and offline learning options to suit your schedule.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-bsd-orange/5 border-bsd-orange/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-bsd-orange/20 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-bsd-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bsd-gray">Learning Modes</h3>
                    <p className="text-sm text-foreground/60">Flexible learning options</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bsd-orange rounded-full"></div>
                    <span className="font-medium">Online Mode:</span>
                    <span className="text-foreground/70">Interactive virtual classes with live sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bsd-orange rounded-full"></div>
                    <span className="font-medium">Offline Mode:</span>
                    <span className="text-foreground/70">On-campus hands-on learning experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-bsd-gray/5 border-bsd-gray/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-bsd-gray/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-bsd-gray" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Duration</h3>
                    <p className="text-sm text-foreground/60">Complete program structure</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bsd-gray rounded-full"></div>
                    <span className="font-medium">Total Duration:</span>
                    <span className="text-foreground/70">16 months (3 semesters + internship & portfolio)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bsd-gray rounded-full"></div>
                    <span className="font-medium">Each Semester:</span>
                    <span className="text-foreground/70">4 months classes per semester</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>


        <RevealSection delay={300}>
          <Card className="bg-gradient-to-r from-bsd-orange/10 to-bsd-gray/10 border-bsd-orange/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-bsd-orange" />
                <h3 className="text-xl font-semibold text-bsd-gray">Flexible Learning Options</h3>
              </div>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                All our diploma programs are designed to accommodate working professionals and students with different schedules. 
                Choose between online interactive sessions or on-campus hands-on learning based on your preference and convenience.
              </p>
            </CardContent>
          </Card>
        </RevealSection>
      </div>
    </section>
  );
};