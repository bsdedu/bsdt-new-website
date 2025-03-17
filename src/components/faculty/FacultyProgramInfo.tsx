
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const FacultyProgramInfo: React.FC = () => {
  return (
    <RevealSection delay={300}>
      <div className="mt-16 bg-bsd-light-gray rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-bsd-gray mb-4">Visiting Faculty Program</h3>
            <p className="text-foreground/70">
              Our program is enriched by industry professionals who visit as guest lecturers, workshop conductors, and mentors, bringing current industry trends and practices directly to our students. These practitioners provide invaluable insights from their active careers, ensuring our curriculum remains aligned with industry needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-bsd-gray mb-4">Faculty Development</h3>
            <p className="text-foreground/70">
              At BSDT, we invest in our faculty's continuous professional development through workshops, research opportunities, industry collaborations, and conference participation. This commitment ensures our educators remain at the forefront of their disciplines, bringing cutting-edge knowledge and methodologies to the classroom.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
