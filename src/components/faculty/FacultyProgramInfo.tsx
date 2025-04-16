
import React from 'react';
import { RevealSection } from '../ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const FacultyProgramInfo: React.FC = () => {
  return (
    <RevealSection>
      <div className="mt-16 bg-bsd-light-gray/30 rounded-xl p-6 md:p-10">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="bsdOrange" className="mb-4">INDUSTRY NETWORK</Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-bsd-gray mb-4">Connect With Industry Professionals</h3>
          <p className="mb-6 text-foreground/70">
            BSDT features a unique ecosystem where students work alongside industry professionals in our in-house design center, BSD Studio. This provides students with hands-on experience in a professional studio environment while still in school.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="bg-white">
              <a href="/admissions/visit-campus" className="flex items-center">
                Visit Our Campus
              </a>
            </Button>
            <Button size="lg" className="bg-bsd-orange hover:bg-bsd-orange/90">
              <a href="https://apply.bsd.edu.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
