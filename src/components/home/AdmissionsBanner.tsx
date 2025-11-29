import React from 'react';
import { motion } from 'framer-motion';

export const AdmissionsBanner = () => {
  const programs = [
    { name: "Professional Diploma in Interior Design", url: "https://bangaloreschoolofdesigntech.edmingle.com/" },
    { name: "Professional diploma in Visual Communication Design + UI UX", url: "https://bangaloreschoolofdesigntech.edmingle.com/" },
    { name: "Post Graduate Diploma in Landscape Design", url: "https://bangaloreschoolofdesigntech.edmingle.com/" }
  ];

  return (
    <div className="block">
      <section className="relative overflow-hidden bg-bsd-orange py-16 transition-colors">
        <div className="flex flex-col items-center gap-8">
          {/* Scrolling Header */}
          <div className="w-full overflow-hidden -mt-8">
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
                  <h2 key={i} className="text-4xl md:text-5xl font-bold text-[#00008B] tracking-wide">
                    ADMISSIONS OPEN FOR DIPLOMA PROGRAMS
                  </h2>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Stationary Subtitle - Clickable Program Links */}
          <div className="flex flex-wrap justify-center gap-4 px-4 mt-12 mb-8">
            {programs.map((program, index) => (
              <a
                key={index}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00008B] px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white/90 transition-colors"
              >
                {program.name}
              </a>
            ))}
          </div>
          
          {/* Stationary Footer */}
          <p className="text-sm md:text-base text-[#00008B] text-center px-4 mt-12">
            Our satellite partners in Delhi, Hyderabad, Coimbatore and Chattisgarh.
          </p>
        </div>
      </section>
    </div>
  );
};
