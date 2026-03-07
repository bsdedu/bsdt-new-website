import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Brain, ArrowRight, Sparkles, Palette, Lightbulb, Puzzle, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import QuizScoreTracker from "@/components/quiz/QuizScoreTracker";
import QuizResultReveal from "@/components/quiz/QuizResultReveal";

import designIqHero from "@/assets/quiz/design-iq-hero.jpg";
// Q1 images
import q1Minimal from "@/assets/quiz/q1-minimal.jpg";
import q1Expressive from "@/assets/quiz/q1-expressive.jpg";
import q1Cozy from "@/assets/quiz/q1-cozy.jpg";
import q1Functional from "@/assets/quiz/q1-functional.jpg";
// Q3 images
import q3Minimal from "@/assets/quiz/q3-minimal.jpg";
import q3Energetic from "@/assets/quiz/q3-energetic.jpg";
import q3Dreamy from "@/assets/quiz/q3-dreamy.jpg";
import q3Artistic from "@/assets/quiz/q3-artistic.jpg";
// Q5 images
import q5Pastels from "@/assets/quiz/q5-pastels.jpg";
import q5Neon from "@/assets/quiz/q5-neon.jpg";
import q5Earthy from "@/assets/quiz/q5-earthy.jpg";
import q5Monochrome from "@/assets/quiz/q5-monochrome.jpg";
// Q8 images
import q8Luxury from "@/assets/quiz/q8-luxury.jpg";
import q8Playful from "@/assets/quiz/q8-playful.jpg";
import q8Modern from "@/assets/quiz/q8-modern.jpg";
import q8Handmade from "@/assets/quiz/q8-handmade.jpg";

type Tag = "visual" | "ideas" | "logic" | "explorer";

interface QuizOption { text: string; tag: Tag; image?: string; }
interface QuizQuestion {
  question: string;
  subtitle?: string;
  type?: "options" | "slider";
  options: QuizOption[];
  sliderLabels?: string[];
  sliderTags?: Tag[];
}
interface ResultInfo { title: string; desc: string; icon: React.ReactNode; }

const questions: QuizQuestion[] = [
  {
    question: "Pick a workspace that feels most like you",
    subtitle: "✨ Choose the desk vibe you'd love to create in",
    options: [
      { text: "Minimal + focused", tag: "visual", image: q1Minimal },
      { text: "Expressive + artistic", tag: "ideas", image: q1Expressive },
      { text: "Calm + cozy", tag: "explorer", image: q1Cozy },
      { text: "Functional + modern", tag: "logic", image: q1Functional },
    ],
  },
  {
    question: "When you face a problem, you usually…",
    subtitle: "How do you naturally start figuring things out?",
    options: [
      { text: "Sketch ideas first ✏️", tag: "visual" },
      { text: "Look for inspiration online 🔍", tag: "ideas" },
      { text: "Ask people what they think 💬", tag: "logic" },
      { text: "Try different things until it works 🧪", tag: "explorer" },
    ],
  },
  {
    question: "Pick a poster style you're drawn to",
    subtitle: "Which design style instantly catches your eye?",
    options: [
      { text: "Clean + minimal", tag: "visual", image: q3Minimal },
      { text: "Loud + energetic", tag: "ideas", image: q3Energetic },
      { text: "Dreamy + calm", tag: "explorer", image: q3Dreamy },
      { text: "Artistic + unusual", tag: "logic", image: q3Artistic },
    ],
  },
  {
    question: "Someone asks you to design a poster. First thought?",
    options: [
      { text: "What should it say? 📝", tag: "logic" },
      { text: "What should it look like? 🎨", tag: "visual" },
      { text: "Who is it for? 👥", tag: "ideas" },
      { text: "What feeling should it create? ❤️", tag: "explorer" },
    ],
  },
  {
    question: "Pick a color palette you love",
    subtitle: "Which palette feels most \"you\"?",
    options: [
      { text: "Soft pastels", tag: "visual", image: q5Pastels },
      { text: "Bold neon", tag: "ideas", image: q5Neon },
      { text: "Earthy tones", tag: "logic", image: q5Earthy },
      { text: "Monochrome", tag: "explorer", image: q5Monochrome },
    ],
  },
  {
    question: "When you see bad design, you…",
    options: [
      { text: "Ignore it 😐", tag: "logic" },
      { text: "Notice but move on 👀", tag: "explorer" },
      { text: "Mentally redesign it 🧠", tag: "visual" },
      { text: "Feel slightly annoyed 😅", tag: "ideas" },
    ],
  },
  {
    question: "How often do you notice small details others miss?",
    type: "slider",
    sliderLabels: ["Never", "Sometimes", "Often", "Very often", "Always"],
    sliderTags: ["explorer", "logic", "ideas", "visual", "ideas"] as Tag[],
    options: [],
  },
  {
    question: "Pick a brand vibe you love most",
    subtitle: "Which aesthetic would you want your future work to feel like?",
    options: [
      { text: "Premium + luxury", tag: "visual", image: q8Luxury },
      { text: "Fun + playful", tag: "ideas", image: q8Playful },
      { text: "Clean + modern", tag: "logic", image: q8Modern },
      { text: "Handmade + creative", tag: "explorer", image: q8Handmade },
    ],
  },
  {
    question: "If you could design anything, you'd choose…",
    options: [
      { text: "An app interface 📱", tag: "logic" },
      { text: "A logo for a brand ✨", tag: "visual" },
      { text: "A dream room or space 🏠", tag: "explorer" },
      { text: "A social media page 📸", tag: "ideas" },
    ],
  },
];

const results: Record<Tag, ResultInfo> = {
  visual: { title: "🌟 Visual Thinker", desc: "You naturally notice layout, balance and aesthetics. That's a real designer instinct.", icon: <Palette className="w-12 h-12" /> },
  ideas: { title: "🚀 Idea Generator", desc: "Your mind is full of concepts and imagination. Design is where ideas become real careers.", icon: <Lightbulb className="w-12 h-12" /> },
  logic: { title: "🧩 Problem Solver", desc: "You think with clarity and purpose. That's exactly how professional designers work.", icon: <Puzzle className="w-12 h-12" /> },
  explorer: { title: "🎭 Creative Explorer", desc: "You experiment, play, and try new things. That curiosity is the foundation of design.", icon: <Compass className="w-12 h-12" /> },
};

const WEBHOOK_URL = "https://hook.us2.make.com/7x7wia78fz83y3qvwbw9dho61gfq22jr";

const optionLabels = ["A", "B", "C", "D"];

const DesignIQQuiz: React.FC = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<"hero" | "lead" | "quiz" | "result">("hero");
  const [npfLaunched, setNpfLaunched] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [scores, setScores] = useState<Record<Tag, number>>({ visual: 0, ideas: 0, logic: 0, explorer: 0 });
  const [finalResult, setFinalResult] = useState<ResultInfo | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const [sliderValue, setSliderValue] = useState(2);
  

  const advanceQuestion = useCallback((newScores: Record<Tag, number>) => {
    setTimeout(() => {
      setDirection(1);
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSliderValue(2);
      } else {
        finishQuiz(newScores);
      }
      setSelectedIdx(null);
      setIsTransitioning(false);
    }, 600);
  }, [currentQ]);

  const handleAnswer = useCallback((tag: Tag, idx: number) => {
    if (isTransitioning) return;
    setSelectedIdx(idx);
    setIsTransitioning(true);
    const newScores = { ...scores, [tag]: scores[tag] + 1 };
    setScores(newScores);
    advanceQuestion(newScores);
  }, [scores, isTransitioning, advanceQuestion]);

  const handleSliderSubmit = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const q = questions[currentQ];
    const tag = q.sliderTags?.[sliderValue] || "explorer";
    const newScores = { ...scores, [tag]: scores[tag] + 1 };
    setScores(newScores);
    advanceQuestion(newScores);
  }, [scores, currentQ, sliderValue, isTransitioning, advanceQuestion]);

  const sendToSheet = async (payload: Record<string, unknown>) => {
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Webhook send failed:", err);
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
      sendToSheet({
        result: resultData.title,
        scores: finalScores,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      console.error("Quiz lead send failed:", err);
    }
  };

  const startQuiz = () => {
    if (!lead.name.trim() || !lead.email.trim()) {
      toast({ title: "Missing info", description: "Please enter your name and email to continue.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lead.email.trim())) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    if (lead.phone && !/^\d{10,}$/.test(lead.phone.trim())) {
      toast({ title: "Invalid phone", description: "Please enter a valid phone number (digits only, min 10).", variant: "destructive" });
      return;
    }
    setStep("quiz");
  };

  const resetQuiz = () => {
    setStep("hero");
    setCurrentQ(0);
    setLead({ name: "", email: "", phone: "" });
    setScores({ visual: 0, ideas: 0, logic: 0, explorer: 0 });
    setFinalResult(null);
    setSelectedIdx(null);
    setIsTransitioning(false);
    setSliderValue(2);
  };

  const handleShare = () => {
    if (navigator.share && finalResult) {
      navigator.share({ title: `My Design IQ: ${finalResult.title}`, text: `${finalResult.desc} — Take the quiz at BSDT!`, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied!", description: "Share it with your friends." });
    }
  };

  const progress = ((currentQ + (selectedIdx !== null || isTransitioning ? 1 : 0)) / questions.length) * 100;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const currentQuestion = questions[currentQ];

  return (
    <>
      <Helmet>
        <title>Test Your Design IQ | BSDT</title>
        <meta name="description" content="Discover your design personality with our interactive quiz. Are you a Visual Thinker, Idea Generator, Problem Solver, or Creative Explorer?" />
      </Helmet>

      <Navbar />

      <main className="relative min-h-screen bg-gradient-to-br from-foreground via-foreground/95 to-bsd-orange/30 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-bsd-orange/15 blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-bsd-orange/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-bsd-orange/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-24 md:py-32 flex items-center justify-center min-h-screen">
          <AnimatePresence mode="wait" custom={direction}>
            {/* HERO */}
            {step === "hero" && (
              <motion.div
                key="hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-8 rounded-full overflow-hidden border-4 border-bsd-orange/30 shadow-2xl shadow-bsd-orange/20">
                  <img src={designIqHero} alt="Students collaborating on design" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex items-center gap-2 bg-bsd-orange/20 text-bsd-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" /> 9 Questions · 2 Minutes
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-tight">
                  Test Your <br /><span className="text-bsd-orange">Design IQ</span>
                </h1>
                <p className="text-background/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                  Unlock your creative personality in 9 quick questions. Discover if you're a Visual Thinker, Idea Generator, Problem Solver, or Creative Explorer.
                </p>

                {!npfLaunched ? (
                  <Button
                    size="lg"
                    className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-12 text-lg h-16 rounded-xl shadow-lg shadow-bsd-orange/25"
                    onClick={() => {
                      setNpfLaunched(true);

                      const initAndShowPopup = () => {
                        try {
                          // @ts-ignore
                          const widget = new NpfWidgetsInit({
                            widgetId: "adff9b077808c1fcb8e77a017693b6b9",
                            baseurl: "widgets.in5.nopaperforms.com",
                            formTitle: "Enquire Now",
                            titleColor: "#FF0033",
                            backgroundColor: "#ddd",
                            iframeHeight: "500px",
                            buttonbgColor: "#ff0000",
                            buttonTextColor: "#FFF",
                          });
                          setTimeout(() => {
                            widget.showPopup("adff9b077808c1fcb8e77a017693b6b9", "widgets.in5.nopaperforms.com");
                          }, 300);
                        } catch (e) {
                          console.error("NoPaperForms widget error:", e);
                        }
                      };

                      const existingScript = document.querySelector('script[src*="npfwpopup.js"]');
                      if (!existingScript) {
                        const popupScript = document.createElement("script");
                        popupScript.src = "https://in5cdn.npfs.co/js/widget/npfwpopup.js";
                        popupScript.onload = initAndShowPopup;
                        popupScript.onerror = () => console.error("Failed to load NoPaperForms popup script");
                        document.body.appendChild(popupScript);
                      } else {
                        initAndShowPopup();
                      }
                    }}
                  >
                    <Sparkles className="mr-2 w-5 h-5" /> Start the Quiz <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <p className="text-background/80 text-base font-medium animate-pulse">
                      📝 Please fill in the form above, then click below to begin!
                    </p>
                    <Button
                      size="lg"
                      className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-12 text-lg h-16 rounded-xl shadow-lg shadow-bsd-orange/25"
                      onClick={() => setStep("quiz")}
                    >
                      Continue to Quiz <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                )}
              </motion.div>
            )}




            {/* QUIZ QUESTIONS */}
            {step === "quiz" && (
              <motion.div
                key={`quiz-${currentQ}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, type: "spring", damping: 25, stiffness: 200 }}
                className="w-full max-w-2xl mx-auto"
              >
                <div className="bg-background rounded-3xl shadow-2xl border border-border overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-bsd-orange via-bsd-orange/80 to-bsd-orange/40" />
                  <div className="p-6 md:p-10">
                    {/* Progress */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Question {currentQ + 1} of {questions.length}
                      </span>
                      <span className="text-sm font-bold text-bsd-orange">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full mb-6 overflow-hidden">
                      <motion.div
                        className="h-3 bg-gradient-to-r from-bsd-orange to-bsd-orange/70 rounded-full"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-snug">
                      {currentQuestion.question}
                    </h2>
                    {currentQuestion.subtitle && (
                      <p className="mt-2 text-muted-foreground text-sm md:text-base">
                        {currentQuestion.subtitle}
                      </p>
                    )}

                    {/* SLIDER TYPE */}
                    {currentQuestion.type === "slider" ? (
                      <div className="mt-8">
                        <div className="flex justify-between text-xs text-muted-foreground mb-3 px-1">
                          {currentQuestion.sliderLabels?.map((label, i) => (
                            <span key={i} className={cn("transition-colors duration-200 font-medium", sliderValue === i ? "text-bsd-orange" : "")}>
                              {label}
                            </span>
                          ))}
                        </div>
                        <div className="relative">
                          <input
                            type="range" min={0} max={4} step={1} value={sliderValue}
                            onChange={(e) => setSliderValue(parseInt(e.target.value))}
                            className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer accent-bsd-orange
                              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-bsd-orange [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-bsd-orange/30 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-background
                              [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-bsd-orange [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-background"
                          />
                          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-[2px] pointer-events-none">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <div key={i} className={cn("w-3 h-3 rounded-full transition-colors duration-200", i <= sliderValue ? "bg-bsd-orange/60" : "bg-muted-foreground/20")} />
                            ))}
                          </div>
                        </div>
                        <motion.div className="mt-6 text-center" key={sliderValue} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                          <span className="inline-block bg-bsd-orange/10 text-bsd-orange px-4 py-2 rounded-full text-sm font-semibold">
                            {currentQuestion.sliderLabels?.[sliderValue]}
                          </span>
                        </motion.div>
                        <Button onClick={handleSliderSubmit} disabled={isTransitioning} className="w-full mt-6 bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold h-12 text-base rounded-xl">
                          Next <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className={cn("mt-6 grid gap-3", currentQuestion.options.some(o => o.image) ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2")}>
                        {currentQuestion.options.map((opt, i) => {
                          const isSelected = selectedIdx === i;
                          const hasImage = !!opt.image;
                          return (
                            <motion.button
                              key={i}
                              whileHover={!isTransitioning ? { scale: 1.03 } : {}}
                              whileTap={!isTransitioning ? { scale: 0.97 } : {}}
                              onClick={() => handleAnswer(opt.tag, i)}
                              disabled={isTransitioning}
                              className={cn(
                                "text-left border-2 rounded-2xl font-medium text-foreground transition-all duration-300 relative overflow-hidden",
                                hasImage ? "flex flex-col p-0" : "flex items-center gap-3 p-5",
                                isSelected
                                  ? "border-bsd-orange bg-bsd-orange/10 shadow-lg shadow-bsd-orange/20"
                                  : isTransitioning
                                  ? "border-border/30 opacity-40"
                                  : "border-border/60 hover:border-bsd-orange hover:bg-bsd-orange/5"
                              )}
                            >
                              {isSelected && (
                                <motion.div className="absolute inset-0 bg-bsd-orange/10 rounded-2xl" initial={{ scale: 0, opacity: 0.5 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ duration: 0.6 }} />
                              )}
                              {hasImage && (
                                <img src={opt.image} alt={opt.text} className="w-full h-32 md:h-40 object-cover rounded-t-xl" loading="lazy" />
                              )}
                              <div className={cn("flex items-center gap-3", hasImage ? "p-3" : "")}>
                                <span className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors duration-300", isSelected ? "bg-bsd-orange text-white" : "bg-muted text-muted-foreground")}>
                                  {isSelected ? "✓" : optionLabels[i]}
                                </span>
                                <span className={hasImage ? "text-sm" : ""}>{opt.text}</span>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    )}

                    <QuizScoreTracker scores={scores} totalQuestions={questions.length} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* RESULT */}
            {step === "result" && finalResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-2xl mx-auto"
              >
                <div className="bg-background rounded-3xl shadow-2xl border border-border overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-bsd-orange via-bsd-orange/80 to-bsd-orange/40" />
                  <div className="p-6 md:p-10">
                    <QuizResultReveal result={finalResult} onShare={handleShare} />
                    <div className="text-center mt-4">
                      <button onClick={resetQuiz} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        ← Take the quiz again
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />

      {/* Full-screen looping confetti */}
      {step === "result" && (
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
