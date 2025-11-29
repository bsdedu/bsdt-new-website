import React from 'react';
import { motion } from 'framer-motion';

export const AdmissionsBanner = () => {
  const text = "ADMISSIONS OPEN FOR DIPLOMA PROGRAMS - Learn from home through our satellite partners";
  
  return (
    <section className="relative overflow-hidden bg-bsd-orange py-6">
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
            <span key={i} className="text-2xl md:text-3xl font-bold text-blue-950 tracking-wide">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
