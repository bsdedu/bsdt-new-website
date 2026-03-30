import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import designIqHero from "@/assets/quiz/design-iq-hero.jpg";

export const QuizPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;
    const alreadyShown = sessionStorage.getItem("quizPopupShown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("quizPopupShown", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleTakeQuiz = () => {
    setShow(false);
    navigate("/design-iq");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99990]"
            onClick={() => setShow(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
            className="fixed inset-0 z-[99991] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm w-full pointer-events-auto">
              {/* Close button */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={designIqHero}
                  alt="Design IQ Quiz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="bg-bsd-orange text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> 2 min quiz
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center space-y-3">
                <h3 className="text-xl font-display font-bold text-bsd-gray">
                  Test Your Design IQ 🎨
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Discover if you're a Visual Thinker, Idea Generator, Problem Solver, or Creative Explorer!
                </p>
                <button
                  onClick={handleTakeQuiz}
                  className="w-full bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Take the Quiz <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShow(false)}
                  className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
