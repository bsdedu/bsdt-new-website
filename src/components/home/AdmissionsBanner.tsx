import React from 'react';
import { motion } from 'framer-motion';

export const AdmissionsBanner = () => {
  const content = (
    <div className="flex flex-col items-center text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00008B] tracking-wide mb-3">
        ADMISSIONS OPEN FOR DIPLOMA PROGRAMS
      </h2>
      <p className="text-lg md:text-xl font-semibold text-[#00008B] mb-2">
        Professional Diploma in Interior Design, Professional diploma in Graphic Design, Post Graduate Diploma in Landscape Design
      </p>
      <p className="text-sm md:text-base text-[#00008B]">
        Our satellite partners in Delhi, Hyderabad, Coimbatore and Chattisgarh.
      </p>
    </div>
  );
  
  return (
    <a 
      href="https://bangaloreschoolofdesigntech.edmingle.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <section className="relative overflow-hidden bg-bsd-orange py-16 cursor-pointer hover:bg-bsd-orange/90 transition-colors">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{
              x: [0, -3000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-32"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="inline-block min-w-max">
                {content}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </a>
  );
};
