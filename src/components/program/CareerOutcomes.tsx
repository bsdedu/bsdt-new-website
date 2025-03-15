
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Briefcase } from "lucide-react";

interface Career {
  title: string;
  description: string;
}

interface CareerOutcomesProps {
  title: string;
  careers: Career[];
}

export const CareerOutcomes: React.FC<CareerOutcomesProps> = ({ 
  title,
  careers
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">CAREER PATHWAYS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              {title}
            </h2>
            <p className="mt-4 text-foreground/70">
              Graduates of this program find exciting opportunities in various industries
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careers.map((career, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-bsd-gray">{career.title}</h3>
                  </div>
                  <p className="text-foreground/70">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
