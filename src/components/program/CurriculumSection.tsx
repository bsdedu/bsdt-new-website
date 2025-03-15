
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Course = string;

interface Semester {
  number: number;
  courses: Course[];
}

interface SpecializationTrack {
  name: string;
  courses: Course[];
}

interface CurriculumSectionProps {
  title: string;
  subtitle: string;
  semesters: Semester[];
  specializationTracks: SpecializationTrack[];
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  title,
  subtitle,
  semesters,
  specializationTracks
}) => {
  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="bsdOrange" className="mb-4">CURRICULUM</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              {title}
            </h2>
            <p className="mt-4 text-foreground/70">
              {subtitle}
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="semesters" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="semesters">Program Structure</TabsTrigger>
              <TabsTrigger value="specializations">Specialization Tracks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="semesters">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {semesters.map((semester) => (
                  <Card key={semester.number} className="overflow-hidden">
                    <div className="bg-bsd-orange/90 text-white p-4">
                      <h3 className="font-display font-bold text-lg">Semester {semester.number}</h3>
                    </div>
                    <CardContent className="p-5">
                      <ul className="space-y-2">
                        {semester.courses.map((course, index) => (
                          <li key={index} className="flex items-baseline">
                            <span className="w-2 h-2 rounded-full bg-bsd-orange/80 mt-1.5 mr-3 flex-shrink-0"></span>
                            <span className="text-foreground/80">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specializations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specializationTracks.map((track, index) => (
                  <Card key={index} className="overflow-hidden border-t-4 border-t-bsd-orange">
                    <CardContent className="p-6">
                      <h3 className="font-display font-bold text-xl mb-4 text-bsd-gray">{track.name}</h3>
                      <ul className="space-y-3">
                        {track.courses.map((course, idx) => (
                          <li key={idx} className="flex items-baseline">
                            <span className="w-2 h-2 rounded-full bg-bsd-orange/80 mt-1.5 mr-3 flex-shrink-0"></span>
                            <span className="text-foreground/80">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
