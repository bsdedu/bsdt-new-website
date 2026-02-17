import React from "react";
import { motion } from "framer-motion";
import { Palette, Lightbulb, Puzzle, Compass } from "lucide-react";

type Tag = "visual" | "ideas" | "logic" | "explorer";

interface QuizScoreTrackerProps {
  scores: Record<Tag, number>;
  totalQuestions: number;
}

const tagMeta: Record<Tag, { icon: React.ReactNode; label: string }> = {
  visual: { icon: <Palette className="w-3.5 h-3.5" />, label: "Visual" },
  ideas: { icon: <Lightbulb className="w-3.5 h-3.5" />, label: "Ideas" },
  logic: { icon: <Puzzle className="w-3.5 h-3.5" />, label: "Logic" },
  explorer: { icon: <Compass className="w-3.5 h-3.5" />, label: "Explorer" },
};

const QuizScoreTracker: React.FC<QuizScoreTrackerProps> = ({ scores, totalQuestions }) => {
  const maxScore = Math.max(...Object.values(scores), 1);

  return (
    <div className="flex items-center gap-3 mt-6 justify-center">
      {(Object.keys(tagMeta) as Tag[]).map((tag) => {
        const { icon, label } = tagMeta[tag];
        const score = scores[tag];
        const isLeading = score === maxScore && score > 0;

        return (
          <motion.div
            key={tag}
            className="flex flex-col items-center gap-1"
            animate={{ scale: isLeading ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                isLeading
                  ? "bg-bsd-orange text-white shadow-md shadow-bsd-orange/30"
                  : score > 0
                  ? "bg-bsd-orange/20 text-bsd-orange"
                  : "bg-muted text-muted-foreground"
              }`}
              animate={isLeading ? { rotate: [0, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              {icon}
            </motion.div>
            <span className="text-[10px] font-medium text-muted-foreground">{label}</span>
            {/* Score dots */}
            <div className="flex gap-0.5">
              {Array.from({ length: totalQuestions }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i < score ? "bg-bsd-orange" : "bg-muted"
                  }`}
                  initial={i === score - 1 && score > 0 ? { scale: 0 } : {}}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default QuizScoreTracker;
