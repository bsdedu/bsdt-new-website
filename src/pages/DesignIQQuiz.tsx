import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Brain, ArrowRight, X, Share2 } from "lucide-react";
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
    title: "🌟 Visual Thinker",
    desc: "You naturally notice layouts, balance, and aesthetics. That's one of the strongest designer instincts.",
  },
  ideas: {
    title: "🚀 Idea Generator",
    desc: "You're full of concepts and imagination. Designers thrive on people like you.",
  },
  logic: {
    title: "🧩 Problem Solver",
    desc: "You focus on clarity and purpose. That's exactly how professional designers think.",
  },
  explorer: {
    title: "🎭 Creative Explorer",
    desc: "You experiment, play, and try new things. Curiosity is the foundation of innovation.",
  },
};

// Replace with your actual Zapier/Make webhook URL
const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/YOUR-ID-HERE/";

const DesignIQQuiz: React.FC = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"lead" | "quiz" | "result">("lead");
  const [currentQ, setCurrentQ] = useState(0);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [scores, setScores] = useState<Record<Tag, number>>({
    visual: 0,
    ideas: 0,
    logic: 0,
    explorer: 0,
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
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          lead,
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
      toast({
        title: "Missing info",
        description: "Please enter your name and email to continue.",
        variant: "destructive",
      });
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
      navigator.share({
        title: `My Design IQ: ${finalResult.title}`,
        text: `${finalResult.desc} — Take the quiz at BSDT!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied!", description: "Share it with your friends." });
    }
  };

  return (
    <>
      <Helmet>
        <title>Test Your Design IQ | BSDT</title>
        <meta name="description" content="Discover your design personality with our interactive quiz. Are you a Visual Thinker, Idea Generator, Problem Solver, or Creative Explorer?" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-bsd-orange/30 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-bsd-orange blur-3xl" />
            <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-bsd-orange/50 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-bsd-orange/30 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Brain className="w-20 h-20 text-bsd-orange mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-4">
                Test Your <span className="text-bsd-orange">Design IQ</span>
              </h1>
              <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Unlock your creative personality in 9 quick questions. Discover if you're a Visual Thinker, Idea Generator, Problem Solver, or Creative Explorer.
              </p>
              <Button
                size="lg"
                className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-10 text-lg h-14"
                onClick={() => setOpen(true)}
              >
                ✨ Start the Quiz <ArrowRight className="ml-2 w-5 h-5" />
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
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 z-50"
            onClick={(e) => { if (e.target === e.currentTarget) resetQuiz(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 relative border border-border"
            >
              {/* Close */}
              <button
                onClick={resetQuiz}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close quiz"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {/* LEAD STEP */}
                {step === "lead" && (
                  <motion.div
                    key="lead"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      Unlock Your Design Personality 🎨
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Enter your details to receive your quiz result + a free design roadmap.
                    </p>
                    <div className="space-y-3 mt-6">
                      <Input
                        placeholder="Name *"
                        value={lead.name}
                        onChange={(e) => setLead({ ...lead, name: e.target.value })}
                        className="h-12"
                        maxLength={100}
                      />
                      <Input
                        placeholder="Email *"
                        type="email"
                        value={lead.email}
                        onChange={(e) => setLead({ ...lead, email: e.target.value })}
                        className="h-12"
                        maxLength={255}
                      />
                      <Input
                        placeholder="Phone (optional)"
                        type="tel"
                        value={lead.phone}
                        onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                        className="h-12"
                        maxLength={20}
                      />
                    </div>
                    <Button
                      onClick={startQuiz}
                      className="w-full mt-6 bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold h-12 text-base"
                    >
                      Start My Quiz <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                )}

                {/* QUIZ STEP */}
                {step === "quiz" && (
                  <motion.div
                    key={`quiz-${currentQ}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Progress */}
                    <div className="w-full h-2 bg-muted rounded-full mb-6">
                      <div
                        className="h-2 bg-bsd-orange rounded-full transition-all duration-500"
                        style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                      />
                    </div>

                    <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {questions[currentQ].question}
                    </h2>

                    <div className="mt-5 space-y-3">
                      {questions[currentQ].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(opt.tag)}
                          className={cn(
                            "w-full text-left border-2 border-border p-4 rounded-xl",
                            "hover:border-bsd-orange/50 hover:bg-accent transition-all duration-200",
                            "font-medium text-foreground"
                          )}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      Question {currentQ + 1} of {questions.length}
                    </p>
                  </motion.div>
                )}

                {/* RESULT STEP */}
                {step === "result" && finalResult && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-4"
                  >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      {finalResult.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                      {finalResult.desc}
                    </p>

                    <Button
                      className="w-full mt-8 bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold h-12 text-base"
                      onClick={() => window.open("https://apply.bsd.edu.in/", "_blank")}
                    >
                      Book a Free Design Career Call <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    <button
                      onClick={handleShare}
                      className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                    >
                      <Share2 className="w-4 h-4" /> Share your result with friends
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesignIQQuiz;
