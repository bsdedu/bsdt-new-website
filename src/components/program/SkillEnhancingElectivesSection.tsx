import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { GraduationCap, BookOpen, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { electivesData, programElectiveMap } from "@/data/electivesData";

interface SkillEnhancingElectivesSectionProps {
  programKey: string;
}

export const SkillEnhancingElectivesSection: React.FC<SkillEnhancingElectivesSectionProps> = ({ programKey }) => {
  const applicableElectiveNumbers = programElectiveMap[programKey] || [1, 2];
  const applicableElectives = electivesData.filter(e => applicableElectiveNumbers.includes(e.number));

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">SKILL-ENHANCING ELECTIVES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              A Pathway to Future-Ready Designers
            </h2>
            <p className="mt-4 text-foreground/70">
              Skill-Enhancing Electives are embedded into the undergraduate curriculum to bridge the gap between academic learning and real-world practice. Students complete two mandatory certificate electives — one in the second year and one in the third year.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-3 bg-white rounded-xl p-5 shadow-sm border border-border/40">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">2 Mandatory Electives</h4>
                <p className="text-sm text-foreground/70 mt-1">One in 2nd year, one in 3rd year — each runs during one semester</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white rounded-xl p-5 shadow-sm border border-border/40">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Certificate on Completion</h4>
                <p className="text-sm text-foreground/70 mt-1">Earn a certificate upon successfully completing the course and final assessment</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white rounded-xl p-5 shadow-sm border border-border/40">
              <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-bsd-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray">Industry-Ready Skills</h4>
                <p className="text-sm text-foreground/70 mt-1">Strengthen portfolios, career opportunities, and professional readiness</p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applicableElectives.map((elective) => (
              <Card key={elective.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs bg-bsd-orange/5 text-bsd-orange border-bsd-orange/20">
                      {elective.semester}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Elective {elective.number}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-bsd-gray mb-2">{elective.shortTitle}</h3>
                  <p className="text-sm text-foreground/70 line-clamp-2 mb-3">{elective.overview}</p>
                  <p className="text-xs text-foreground/50">45 Hours • 3-Week Intensive • {elective.applicablePrograms}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="text-center mt-8">
            <Link 
              to="/academics/skill-enhancing-electives" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-bsd-orange text-white rounded-lg hover:bg-bsd-orange/90 transition-colors font-medium"
            >
              Explore All Electives in Detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
