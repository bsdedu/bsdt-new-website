import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Brain, ArrowRight, X, Share2, Sparkles, Palette, Lightbulb, Puzzle, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

type Tag = "visual" | "ideas" | "logic" | "explorer";

interface QuizOption {
  text: string;
  tag: Tag;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface ResultInfo {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const questions: QuizQuestion[] = [
  {
    question: "Pick a workspace vibe:",
    options: [
      { text: "Minimal + clean", tag: "visual" },
      { text: "Colorful + expressive", tag: "ideas" },
      { text: "Cozy + calm", tag: "explorer" },
      { text: "Functional + modern", tag: "logic" },
    ],
  },
  {
    question: "When solving a problem, you usually…",
    options: [
      { text: "Sketch ideas first", tag: "visual" },
      { text: "Search inspiration online", tag: "ideas" },
      { text: "Ask people for feedback", tag: "logic" },
      { text: "Experiment until it works", tag: "explorer" },
    ],
  },
  {
    question: "Which word attracts you most?",
    options: [
      { text: "Balance", tag: "visual" },
      { text: "Story", tag: "ideas" },
      { text: "Impact", tag: "logic" },
      { text: "Innovation", tag: "explorer" },
    ],
  },
  {
    question: "Poster design: first thought?",
    options: [
      { text: "What should it say?", tag: "logic" },
      { text: "What should it look like?", tag: "visual" },
      { text: "Who is it for?", tag: "ideas" },
      { text: "What feeling should it create?", tag: "explorer" },
    ],
  },
  {
    question: "Pick a palette you love:",
    options: [
      { text: "Soft pastels", tag: "visual" },
      { text: "Bold neon", tag: "ideas" },
      { text: "Earthy tones", tag: "logic" },
      { text: "Black & white", tag: "explorer" },
    ],
  },
  {
    question: "When you see bad design, you…",
    options: [
      { text: "Ignore it", tag: "logic" },
      { text: "Notice but move on", tag: "explorer" },
      { text: "Mentally redesign it", tag: "visual" },
      { text: "Feel annoyed 😅", tag: "ideas" },
    ],
  },
  {
    question: "How detail-oriented are you?",
    options: [
      { text: "Not much", tag: "explorer" },
      { text: "Sometimes", tag: "logic" },
      { text: "Very often", tag: "visual" },
      { text: "Always!", tag: "ideas" },
    ],
  },
  {
    question: "Pick a brand vibe:",
    options: [
      { text: "Luxury + premium", tag: "visual" },
      { text: "Fun + playful", tag: "ideas" },
      { text: "Minimal + modern", tag: "logic" },
      { text: "Handmade + artistic", tag: "explorer" },
    ],
  },
  {
    question: "If you could design anything, you'd choose:",
    options: [
      { text: "An app", tag: "logic" },
      { text: "A logo", tag: "visual" },
      { text: "A room", tag: "explorer" },
      { text: "An Instagram page", tag: "ideas" },
    ],
  },
];

const results: Record<Tag, ResultInfo> = {
  visual: {
    title: "Visual Thinker",
    desc: "You naturally notice layouts, balance, and aesthetics. That's one of the strongest designer instincts.",
    icon: <Palette className="w-12 h-12" />,
  },
  ideas: {
    title: "Idea Generator",
    desc: "You're full of concepts and imagination. Designers thrive on people like you.",
    icon: <Lightbulb className="w-12 h-12" />,
  },
  logic: {
    title: "Problem Solver",
    desc: "You focus on clarity and purpose. That's exactly how professional designers think.",
    icon: <Puzzle className="w-12 h-12" />,
  },
  explorer: {
    title: "Creative Explorer",
    desc: "You experiment, play, and try new things. Curiosity is the foundation of innovation.",
    icon: <Compass className="w-12 h-12" />,
  },
};

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyJP0d96AeQ205szWdlr2tbbiIqUkiWXXJRpqhhBYS4nFlaf8D2Ddm-6oSVHTOmxGlq/exec";

const optionLabels = ["A", "B", "C", "D"];

const DesignIQQuiz: React.FC = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"lead" | "quiz" | "result">("lead");
  const [currentQ, setCurrentQ] = useState(0);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [scores, setScores] = useState<Record<Tag, number>>({
    visual: 0, ideas: 0, logic: 0, explorer: 0,
  });
  const [finalResult, setFinalResult] = useState<ResultInfo | null>(null);

  const handleAnswer = (tag: Tag) => {
    const newScores = { ...scores, [tag]: scores[tag] + 1 };
    setScores(newScores);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      finishQuiz(newScores);
    }
  };

  const finishQuiz = async (finalScores: Record<Tag, number>) => {
    const topTag = (Object.keys(finalScores) as Tag[]).reduce((a, b) =>
      finalScores[a] > finalScores[b] ? a : b
    );
    const resultData = results[topTag];
    setFinalResult(resultData);
    setStep("result");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          result: resultData.title,
          scores: finalScores,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Webhook error:", error);
    }
  };

  const startQuiz = () => {
    if (!lead.name.trim() || !lead.email.trim()) {
      toast({ title: "Missing info", description: "Please enter your name and email to continue.", variant: "destructive" });
      return;
    }
    setStep("quiz");
  };

  const resetQuiz = () => {
    setStep("lead");
    setCurrentQ(0);
    setLead({ name: "", email: "", phone: "" });
    setScores({ visual: 0, ideas: 0, logic: 0, explorer: 0 });
    setFinalResult(null);
    setOpen(false);
  };

  const handleShare = () => {
    if (navigator.share && finalResult) {
      navigator.share({ title: `My Design IQ: ${finalResult.title}`, text: `${finalResult.desc} — Take the quiz at BSDT!`, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied!", description: "Share it with your friends." });
    }
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <>
      <Helmet>
        <title>Test Your Design IQ | BSDT</title>
        <meta name="description" content="Discover your design personality with our interactive quiz. Are you a Visual Thinker, Idea Generator, Problem Solver, or Creative Explorer?" />
      </Helmet>

      <Navbar />

      <main>
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-bsd-orange/30 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-bsd-orange/15 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-bsd-orange/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-bsd-orange/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10 py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-bsd-orange/20 text-bsd-orange px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" /> 9 Questions · 2 Minutes
              </div>
              <Brain className="w-24 h-24 text-bsd-orange mx-auto mb-8" />
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-tight">
                Test Your <br /><span className="text-bsd-orange">Design IQ</span>
              </h1>
              <p className="text-background/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Unlock your creative personality in 9 quick questions. Discover if you're a Visual Thinker, Idea Generator, Problem Solver, or Creative Explorer.
              </p>
              <Button
                size="lg"
                className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-12 text-lg h-16 rounded-xl shadow-lg shadow-bsd-orange/25"
                onClick={() => setOpen(true)}
              >
                <Sparkles className="mr-2 w-5 h-5" /> Start the Quiz <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Quiz Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={(e) => { if (e.target === e.currentTarget) resetQuiz(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, type: "spring", damping: 25 }}
              className="bg-background rounded-3xl shadow-2xl w-full max-w-2xl relative border border-border overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-bsd-orange via-bsd-orange/80 to-bsd-orange/40" />

              <div className="p-8 md:p-10">
                {/* Close */}
                <button
                  onClick={resetQuiz}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label="Close quiz"
                >
                  <X className="w-5 h-5" />
                </button>

                <AnimatePresence mode="wait">
                  {/* LEAD STEP */}
                  {step === "lead" && (
                    <motion.div key="lead" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-bsd-orange/10 flex items-center justify-center">
                          <Brain className="w-6 h-6 text-bsd-orange" />
                        </div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                        Unlock Your Design<br />Personality 🎨
                      </h2>
                      <p className="mt-3 text-muted-foreground text-base md:text-lg">
                        Enter your details to receive your quiz result + a free design roadmap.
                      </p>
                      <div className="space-y-4 mt-8">
                        <Input
                          placeholder="Your Name *"
                          value={lead.name}
                          onChange={(e) => setLead({ ...lead, name: e.target.value })}
                          className="h-14 text-base rounded-xl border-border/60 px-5"
                          maxLength={100}
                        />
                        <Input
                          placeholder="Email Address *"
                          type="email"
                          value={lead.email}
                          onChange={(e) => setLead({ ...lead, email: e.target.value })}
                          className="h-14 text-base rounded-xl border-border/60 px-5"
                          maxLength={255}
                        />
                        <Input
                          placeholder="Phone (optional)"
                          type="tel"
                          value={lead.phone}
                          onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                          className="h-14 text-base rounded-xl border-border/60 px-5"
                          maxLength={20}
                        />
                      </div>
                      <Button
                        onClick={startQuiz}
                        className="w-full mt-8 bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold h-14 text-base rounded-xl"
                      >
                        Start My Quiz <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  )}

                  {/* QUIZ STEP */}
                  {step === "quiz" && (
                    <motion.div
                      key={`quiz-${currentQ}`}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Progress */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Question {currentQ + 1} of {questions.length}
                        </span>
                        <span className="text-sm font-bold text-bsd-orange">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-muted rounded-full mb-8 overflow-hidden">
                        <motion.div
                          className="h-3 bg-gradient-to-r from-bsd-orange to-bsd-orange/70 rounded-full"
                          initial={{ width: `${((currentQ) / questions.length) * 100}%` }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>

                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-snug">
                        {questions[currentQ].question}
                      </h2>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {questions[currentQ].options.map((opt, i) => (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswer(opt.tag)}
                            className={cn(
                              "text-left border-2 border-border/60 p-5 rounded-2xl",
                              "hover:border-bsd-orange hover:bg-bsd-orange/5 transition-all duration-200",
                              "font-medium text-foreground flex items-center gap-3"
                            )}
                          >
                            <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground shrink-0">
                              {optionLabels[i]}
                            </span>
                            {opt.text}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* RESULT STEP */}
                  {step === "result" && finalResult && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="text-center py-6 relative overflow-hidden"
                    >
                      {/* confetti is rendered outside modal below */}

                      {/* Radial glow pulse */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 1.5 }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-bsd-orange/20 blur-3xl" />
                      </motion.div>

                      <motion.div
                        className="w-20 h-20 rounded-3xl bg-bsd-orange/10 flex items-center justify-center mx-auto mb-6 text-bsd-orange relative z-10"
                        initial={{ rotate: -20, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", damping: 10, stiffness: 200, delay: 0.2 }}
                      >
                        {finalResult.icon}
                      </motion.div>
                      <p className="text-sm font-medium text-bsd-orange uppercase tracking-wider mb-2">Your Design Personality</p>
                      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {finalResult.title}
                      </h2>
                      <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                        {finalResult.desc}
                      </p>

                      <Button
                        className="w-full mt-10 bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold h-14 text-base rounded-xl"
                        onClick={() => window.open("https://apply.bsd.edu.in/", "_blank")}
                      >
                        Book a Free Design Career Call <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>

                      <button
                        onClick={handleShare}
                        className="mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        <Share2 className="w-4 h-4" /> Share your result with friends
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen looping confetti */}
      {step === "result" && open && (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
          <style>{`
            @keyframes confetti-fall {
              0% { transform: translateY(-10px) rotate(0deg) translateX(0px); opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateY(100vh) rotate(var(--confetti-rot)) translateX(var(--confetti-drift)); opacity: 0; }
            }
          `}</style>
          {Array.from({ length: 50 }).map((_, i) => {
            const colors = ["#F28500", "#FFD700", "#FF6B6B", "#4ECDC4", "#A78BFA", "#F472B6", "#34D399"];
            const left = (i * 7.3 + 3) % 100;
            const size = 6 + (i % 5) * 2;
            const duration = 2.5 + (i % 7) * 0.4;
            const delay = (i % 10) * 0.35;
            const drift = ((i % 11) - 5) * 30;
            const rot = ((i % 9) - 4) * 180;
            const isRect = i % 3 !== 0;
            return (
              <div
                key={i}
                className={isRect ? "absolute rounded-sm" : "absolute rounded-full"}
                style={{
                  left: `${left}%`,
                  top: -10,
                  width: isRect ? size * 0.6 : size,
                  height: size,
                  backgroundColor: colors[i % colors.length],
                  animation: `confetti-fall ${duration}s ${delay}s ease-in infinite`,
                  ["--confetti-drift" as string]: `${drift}px`,
                  ["--confetti-rot" as string]: `${rot}deg`,
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default DesignIQQuiz;
