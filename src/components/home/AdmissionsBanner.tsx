import React from 'react';
import { motion } from 'framer-motion';

export const AdmissionsBanner = () => {
  const programs = [
    { name: "Professional Diploma in Interior Design", url: "https://bangaloreschoolofdesigntech.edmingle.com/course/InteriorDesign-94698" },
    { name: "Professional diploma in Visual Communication Design + UI UX", url: "https://bangaloreschoolofdesigntech.edmingle.com/course/GraphicInteractionDesign-94925" },
    { name: "Post Graduate Diploma in Landscape Design", url: "https://bangaloreschoolofdesigntech.edmingle.com/course/LandscapeDesign-94776" }
  ];

  return (
    <div className="block">
      <section className="relative overflow-hidden bg-bsd-orange py-4 transition-colors">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          {/* Scrolling Header */}
          <div className="w-full overflow-hidden">
            <div className="flex whitespace-nowrap">
              <motion.div
                animate={{
                  x: [0, -2000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                className="flex gap-16"
              >
                {[...Array(8)].map((_, i) => (
                  <a 
                    key={i} 
                    href="https://bangaloreschoolofdesigntech.edmingle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-bold text-[#00008B] tracking-wide hover:opacity-80 transition-opacity"
                  >
                    ADMISSIONS OPEN FOR DIPLOMA HYBRID PROGRAMS
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Program Links */}
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {programs.map((program, index) => (
              <a
                key={index}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00008B] px-4 py-2 rounded-full font-medium text-sm hover:bg-white/90 transition-colors"
              >
                {program.name}
              </a>
            ))}
          </div>
          
          {/* Footer */}
          <p className="text-xs md:text-sm text-[#00008B] text-center px-4">
            Satellite partners in Delhi, Hyderabad, Coimbatore and Chattisgarh
          </p>
        </div>
      </section>
    </div>
  );
};
