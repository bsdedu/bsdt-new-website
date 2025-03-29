
import React from 'react';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';

export const StudentClubsHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-bsd-gray to-bsd-gray/90 text-white py-20">
      <div className="absolute inset-0 opacity-20 bg-[url(/lovable-uploads/8c6af2d4-79fa-42a5-8f81-fecc0d4bbee6.png)] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Student Clubs at BSD
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Explore our vibrant community of student-led clubs that provide opportunities for growth, 
            leadership, and creative expression beyond the classroom.
          </p>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              href="https://apply.bsd.edu.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
            >
              Apply Now
            </AnimatedButton>
            <AnimatedButton 
              href="#clubs-list" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white/20"
              hoverEffect="scale"
            >
              Explore Clubs
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};
