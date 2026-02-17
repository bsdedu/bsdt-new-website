import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultInfo {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface QuizResultRevealProps {
  result: ResultInfo;
  onShare: () => void;
}

const phases = ["Crunching your answers…", "Mapping your creative DNA…", "Almost there…"];

const QuizResultReveal: React.FC<QuizResultRevealProps> = ({ result, onShare }) => {
  const [phase, setPhase] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setRevealed(true), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="text-center py-6 relative overflow-hidden min-h-[340px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated spinner */}
            <div className="relative w-20 h-20">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-muted"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-bsd-orange"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-transparent border-b-bsd-orange/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-bsd-orange" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-muted-foreground text-base font-medium"
              >
                {phases[phase]}
              </motion.p>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2">
              {phases.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i <= phase ? "bg-bsd-orange" : "bg-muted"}`}
                  animate={i <= phase ? { scale: [1, 1.4, 1] } : {}}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Radial glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0.15] }}
              transition={{ duration: 1.5 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-bsd-orange/20 blur-3xl" />
            </motion.div>

            {/* Icon */}
            <motion.div
              className="w-20 h-20 rounded-3xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-5 text-bsd-orange relative z-10"
              initial={{ rotate: -30, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 10, stiffness: 150, delay: 0.1 }}
            >
              {result.icon}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm font-medium text-bsd-orange uppercase tracking-wider mb-2"
            >
              Your Design Personality
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.35 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              {result.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-md mx-auto"
            >
              {result.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                className="w-full mt-8 bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold h-14 text-base rounded-xl"
                onClick={() => window.open("https://apply.bsd.edu.in/", "_blank")}
              >
                Book a Free Design Career Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <button
                onClick={onShare}
                className="mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" /> Share your result with friends
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizResultReveal;
