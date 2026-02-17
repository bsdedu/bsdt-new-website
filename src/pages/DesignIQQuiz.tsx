import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    question: "What does the term 'kerning' refer to in typography?",
    options: [
      "The space between lines of text",
      "The space between individual letter pairs",
      "The thickness of a font's stroke",
      "The slant angle of italic text"
    ],
    correctIndex: 1,
    explanation: "Kerning is the adjustment of space between individual letter pairs to achieve a visually pleasing result."
  },
  {
    question: "Which color model is used for print design?",
    options: ["RGB", "CMYK", "HSL", "HEX"],
    correctIndex: 1,
    explanation: "CMYK (Cyan, Magenta, Yellow, Key/Black) is the standard color model used in print design."
  },
  {
    question: "What is the 'Golden Ratio' approximately equal to?",
    options: ["1.414", "1.618", "2.236", "3.142"],
    correctIndex: 1,
    explanation: "The Golden Ratio is approximately 1.618 and is widely used in art and design for aesthetically pleasing proportions."
  },
  {
    question: "In UI/UX design, what does 'affordance' mean?",
    options: [
      "The cost of a design project",
      "A property suggesting how an object should be used",
      "The loading speed of a website",
      "The number of colors in a palette"
    ],
    correctIndex: 1,
    explanation: "Affordance refers to properties of an object that suggest how it should be interacted with — like a button looking 'clickable'."
  },
  {
    question: "Who is considered the father of modern graphic design?",
    options: [
      "Paul Rand",
      "Jan Tschichold",
      "Milton Glaser",
      "Saul Bass"
    ],
    correctIndex: 0,
    explanation: "Paul Rand is widely regarded as a pioneer of modern graphic design, known for corporate logo designs like IBM and ABC."
  },
  {
    question: "What is 'negative space' in design?",
    options: [
      "Dark-colored areas in a composition",
      "The empty space around and between subjects",
      "Areas with low contrast",
      "The background layer in Photoshop"
    ],
    correctIndex: 1,
    explanation: "Negative space (or white space) is the empty area around and between the subjects of an image or design."
  },
  {
    question: "Which design principle creates a sense of visual movement?",
    options: ["Balance", "Rhythm", "Alignment", "Proximity"],
    correctIndex: 1,
    explanation: "Rhythm in design creates a sense of organized movement through repeated visual elements."
  },
  {
    question: "What file format supports transparency and is commonly used for web graphics?",
    options: ["JPEG", "BMP", "PNG", "TIFF"],
    correctIndex: 2,
    explanation: "PNG supports transparency (alpha channel) and is widely used for web graphics."
  },
  {
    question: "What does 'leading' refer to in typography?",
    options: [
      "The first letter of a paragraph",
      "The vertical space between lines of text",
      "Bold text formatting",
      "The main headline of a page"
    ],
    correctIndex: 1,
    explanation: "Leading (rhymes with 'wedding') is the vertical space between lines of type, crucial for readability."
  },
  {
    question: "Which Bauhaus principle emphasizes 'form follows function'?",
    options: [
      "Decorativism",
      "Functionalism",
      "Romanticism",
      "Expressionism"
    ],
    correctIndex: 1,
    explanation: "Functionalism, a core Bauhaus principle, states that the design of an object should be based on its intended purpose."
  }
];

const getScoreMessage = (score: number, total: number) => {
  const pct = (score / total) * 100;
  if (pct === 100) return { title: "Design Genius! 🎨", message: "You have an exceptional understanding of design." };
  if (pct >= 80) return { title: "Design Expert! 🌟", message: "Impressive knowledge — you really know your craft." };
  if (pct >= 60) return { title: "Design Enthusiast! 💡", message: "Good foundation — keep exploring the world of design." };
  if (pct >= 40) return { title: "Design Learner! 📚", message: "You're on your way — there's so much more to discover." };
  return { title: "Design Beginner! 🌱", message: "Everyone starts somewhere — explore our programs to grow your skills." };
};

const DesignIQQuiz: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === quizQuestions[currentQ].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(true);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswered(false);
  };

  const q = quizQuestions[currentQ];
  const result = getScoreMessage(score, quizQuestions.length);

  return (
    <>
      <Helmet>
        <title>Test Your Design IQ | BSDT</title>
        <meta name="description" content="Challenge yourself with our interactive design quiz and discover your Design IQ. Test your knowledge of typography, color theory, UI/UX, and more." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-bsd-orange/30 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-bsd-orange blur-3xl" />
            <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-bsd-orange/50 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Brain className="w-16 h-16 text-bsd-orange mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-4">
                Test Your <span className="text-bsd-orange">Design IQ</span>
              </h1>
              <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                10 questions. One score. How well do you really know design?
              </p>
              {!started && (
                <Button
                  size="lg"
                  className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-10 text-lg"
                  onClick={() => setStarted(true)}
                >
                  Start Quiz <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
            </motion.div>
          </div>
        </section>

        {/* Quiz Section */}
        {started && (
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 max-w-3xl">
              <AnimatePresence mode="wait">
                {!finished ? (
                  <motion.div
                    key={currentQ}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Progress */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-muted-foreground font-medium">
                        Question {currentQ + 1} of {quizQuestions.length}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Score: {score}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full mb-8">
                      <div
                        className="h-2 bg-bsd-orange rounded-full transition-all duration-500"
                        style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                      {q.question}
                    </h2>

                    <div className="space-y-3">
                      {q.options.map((opt, idx) => {
                        const isCorrect = idx === q.correctIndex;
                        const isSelected = idx === selected;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            className={cn(
                              "w-full text-left p-4 md:p-5 rounded-lg border-2 transition-all duration-200 font-medium",
                              !answered && "border-border hover:border-bsd-orange/50 hover:bg-accent cursor-pointer",
                              answered && isCorrect && "border-green-500 bg-green-500/10",
                              answered && isSelected && !isCorrect && "border-red-500 bg-red-500/10",
                              answered && !isSelected && !isCorrect && "border-border opacity-50"
                            )}
                            disabled={answered}
                          >
                            <div className="flex items-center justify-between">
                              <span>{opt}</span>
                              {answered && isCorrect && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                              {answered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {answered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6"
                      >
                        <p className="text-muted-foreground bg-muted/50 p-4 rounded-lg text-sm mb-6">
                          💡 {q.explanation}
                        </p>
                        <Button
                          size="lg"
                          className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold"
                          onClick={handleNext}
                        >
                          {currentQ < quizQuestions.length - 1 ? "Next Question" : "See Results"} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12">
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                        {result.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-6">{result.message}</p>
                      <div className="text-6xl md:text-8xl font-display font-bold text-bsd-orange mb-2">
                        {score}/{quizQuestions.length}
                      </div>
                      <p className="text-muted-foreground mb-8">correct answers</p>

                      <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                          size="lg"
                          variant="outline"
                          className="font-semibold"
                          onClick={handleRestart}
                        >
                          <RotateCcw className="mr-2 w-4 h-4" /> Try Again
                        </Button>
                        <Button
                          size="lg"
                          className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold"
                          onClick={() => window.open("https://apply.bsd.edu.in/", "_blank")}
                        >
                          Apply to BSDT
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default DesignIQQuiz;
