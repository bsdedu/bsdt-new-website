import React from 'react';
import { motion } from 'framer-motion';

export const AdmissionsBanner = () => {
  return (
    <a 
      href="https://bangaloreschoolofdesigntech.edmingle.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <section className="relative overflow-hidden bg-bsd-orange py-16 cursor-pointer hover:bg-bsd-orange/90 transition-colors">
        <div className="flex flex-col items-center gap-4">
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
                  <h2 key={i} className="text-3xl md:text-4xl font-bold text-[#00008B] tracking-wide">
                    ADMISSIONS OPEN FOR DIPLOMA PROGRAMS
                  </h2>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Stationary Subtitle */}
          <p className="text-lg md:text-xl text-[#00008B] text-center px-4">
            Professional Diploma in Interior Design, Professional diploma in Graphic Design, Post Graduate Diploma in Landscape Design
          </p>
          
          {/* Stationary Footer */}
          <p className="text-sm md:text-base text-[#00008B] text-center px-4">
            Our satellite partners in Delhi, Hyderabad, Coimbatore and Chattisgarh.
          </p>
        </div>
      </section>
    </a>
  );
};
