import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Briefcase, FileCheck, Award, ArrowRight } from 'lucide-react';

interface CertificationPathwaySectionProps {
  academicMonths?: number;
  semesterCount?: number;
}

export const CertificationPathwaySection: React.FC<CertificationPathwaySectionProps> = ({
  academicMonths = 16,
  semesterCount = 3
}) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-bsd-light-gray/30">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROFESSIONAL CERTIFICATION PATHWAY</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              The 3+1 <span className="text-bsd-orange">Advantage</span>
            </h2>
            <p className="mt-4 text-foreground/70">
              Following the {academicMonths}-month academic program ({semesterCount} semesters of 4 months each), students enter the 3+1 Internship Advantage—three months of industry internship and one month of guided portfolio development. Expert portfolio reviews and dual certification ensure graduates enter the job market with professional validation and a clear competitive edge.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-bsd-orange/10 shadow-sm text-center">
              <div className="w-14 h-14 rounded-xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-7 h-7 text-bsd-orange" />
              </div>
              <h3 className="text-lg font-semibold text-bsd-gray mb-2">3-Month Internship</h3>
              <p className="text-sm text-foreground/70">Gain real-world industry experience through a structured internship placement</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-bsd-orange/10 shadow-sm text-center">
              <div className="w-14 h-14 rounded-xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-7 h-7 text-bsd-orange" />
              </div>
              <h3 className="text-lg font-semibold text-bsd-gray mb-2">1-Month Portfolio Development</h3>
              <p className="text-sm text-foreground/70">Build a professional portfolio with guided mentorship and expert reviews</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-bsd-orange/10 shadow-sm text-center">
              <div className="w-14 h-14 rounded-xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-bsd-orange" />
              </div>
              <h3 className="text-lg font-semibold text-bsd-gray mb-2">Dual Certification</h3>
              <p className="text-sm text-foreground/70">Graduate with professional validation and a clear competitive edge</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
