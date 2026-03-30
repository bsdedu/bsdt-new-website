
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/diploma/GraphicUIUX/HeroSection';
import { ProgramOverviewSection } from '@/components/diploma/GraphicUIUX/ProgramOverviewSection';
import { ProgramFeatures } from '@/components/diploma/GraphicUIUX/ProgramFeatures';

import { BatchScheduleSection } from '@/components/diploma/shared/BatchScheduleSection';
import { HybridLearningSection } from '@/components/diploma/shared/HybridLearningSection';
import { CertificationPathwaySection } from '@/components/diploma/shared/CertificationPathwaySection';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import interiorLearning1 from "@/assets/interior-learning-1.jpg";
import interiorLearning2 from "@/assets/interior-learning-2.jpg";
import interiorLearning3 from "@/assets/graphic-uiux-learning-3.png";
import interiorLearning4 from "@/assets/graphic-uiux-learning-4.png";

import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const DiplomaProgramGraphicUIUX: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Diploma in Visual Communication + UI/UX | BSD Design School</title>
        <meta 
          name="description" 
          content="A comprehensive professional diploma program that combines visual communication fundamentals with user interface and experience design principles for digital platforms." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverviewSection />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[interiorLearning1, interiorLearning2, interiorLearning3, interiorLearning4].map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl shadow-lg">
                    <img src={src} alt={`Interior design learning ${i + 1}`} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>
        <HybridLearningSection />
        <CertificationPathwaySection />
        <BatchScheduleSection />
        <ProgramFeatures />
        
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default DiplomaProgramGraphicUIUX;
