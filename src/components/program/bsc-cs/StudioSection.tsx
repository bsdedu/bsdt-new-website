
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";

export const StudioSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">UNIQUE ADVANTAGE</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              BSD Tech Lab: Applied Learning Experience
            </h2>
            <p className="mt-4 text-foreground/70">
              Work on real-world data analysis and cybersecurity projects with industry partners, gaining practical experience that prepares you for professional challenges.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="/lovable-uploads/0e947797-ead2-4db4-93ab-40264c0000e5.png" 
                alt="Tech Lab" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium text-lg">Gain hands-on experience with cutting-edge technology and real-world datasets</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Security Operations Center</h3>
                <p className="text-foreground/70">
                  Experience a real-world security operations center where you'll monitor networks, detect threats, and respond to security incidents using industry-standard tools and methodologies to protect digital assets.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Data Analytics Lab</h3>
                <p className="text-foreground/70">
                  Work with large, complex datasets from industry partners to derive actionable insights using advanced analytics tools. Learn to clean, process, analyze, and visualize data to support strategic business decisions.
                </p>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-semibold text-bsd-gray mb-3">Industry Certification Support</h3>
                <p className="text-foreground/70">
                  Prepare for globally recognized certifications like CompTIA Security+, Certified Ethical Hacker (CEH), Microsoft Data Analyst, and Tableau Desktop Specialist with dedicated training sessions and practice exams.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
