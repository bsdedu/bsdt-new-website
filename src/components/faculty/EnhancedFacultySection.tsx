
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Department } from './types';
import { facultyMembers } from './facultyData';
import { FacultyCard } from './FacultyCard';
import { FacultyFilter } from './FacultyFilter';
import { FacultyProgramInfo } from './FacultyProgramInfo';

export const EnhancedFacultySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Department>('All');
  
  const filteredFaculty = facultyMembers.filter(faculty => {
    // Filter by department
    const departmentMatch = activeTab === 'All' || 
                           (Array.isArray(faculty.department) 
                             ? faculty.department.includes(activeTab)
                             : faculty.department === activeTab);
    
    return departmentMatch;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Expert Faculty with Industry Experience
            </h2>
            <p className="mt-4 text-foreground/70">
              Our faculty members bring real-world experience and academic excellence to create an exceptional learning environment.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <FacultyFilter 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredFaculty.length > 0 ? (
              filteredFaculty.map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12 bg-bsd-light-gray/50 rounded-xl">
                <p className="text-foreground/60">No faculty members match your filter criteria.</p>
              </div>
            )}
          </div>
        </RevealSection>
        
        <FacultyProgramInfo />
      </div>
    </section>
  );
};
