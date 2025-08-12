import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui-elements/Card';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Clock, Users, Calendar, Download, Star, CheckCircle2 } from 'lucide-react';
import aiOptimizationImage from '@/assets/programs/ai-optimization.jpg';

const AppliedAIDesignAutomation: React.FC = () => {
  const curriculum = [
    {
      week: 1,
      title: "Prompt Engineering",
      topics: ["Mastering MidJourney/DALL·E for design briefs", "Advanced prompt techniques", "Style consistency", "Brand-specific AI outputs"]
    },
    {
      week: 2,
      title: "AI-Assisted 3D Modeling",
      topics: ["Kaedim and NVIDIA Omniverse workflows", "AI mesh generation", "Texture synthesis", "Optimization techniques"]
    },
    {
      week: 3,
      title: "Automated CAD Processes",
      topics: ["AI-generated Grasshopper scripts", "Parametric automation", "Design optimization", "Workflow integration"]
    },
    {
      week: 4,
      title: "Legal & Ethical Considerations",
      topics: ["Copyright and IP protection for AI outputs", "Ethical AI use", "Commercial licensing", "Attribution standards"]
    },
    {
      week: 5,
      title: "AI for Presentations",
      topics: ["ChatGPT-powered client decks", "Automated documentation", "Visual storytelling", "Client communication"]
    },
    {
      week: 6,
      title: "Custom AI Assistants",
      topics: ["Building studio-specific GPTs", "Custom training data", "API integrations", "Deployment strategies"]
    }
  ];

  const highlights = [
    "Master AI design tools",
    "Implement automation workflows",
    "Legal & ethical AI use",
    "Custom AI assistant creation",
    "Industry-ready applications",
    "Portfolio automation projects"
  ];

  return (
    <>
      <Helmet>
        <title>Applied AI for Design Automation - 6 Week Course | BSD Design School</title>
        <meta 
          name="description" 
          content="Implement AI tools to streamline design workflows and enhance creativity. Learn prompt engineering, AI-assisted 3D modeling, and custom AI solutions in 6 weeks." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <RevealSection>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="bsdOrange" className="text-sm">INDUSTRY EXPERT MENTORS</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">4.7 Rating</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                    Applied AI for Design Automation
                  </h1>
                  
                  <div className="flex items-center gap-6 mb-6 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>6 Weeks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Jul 2025</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    Implement AI tools to streamline design workflows and enhance creativity. Master prompt engineering, AI-assisted 3D modeling, legal considerations, and custom AI assistants.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      onClick={() => {
                        const enquirySection = document.getElementById('enquiry-form');
                        enquirySection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
                  </div>
                  
                  <p className="text-sm text-foreground/60 mt-4">
                    📱 EMI option available! Contact on WhatsApp
                  </p>
                </div>
              </RevealSection>
              
              <RevealSection delay={100}>
                <div className="relative">
                  <img 
                    src={aiOptimizationImage} 
                    alt="Applied AI for Design Automation Course"
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5k+</div>
                      <div className="text-sm text-foreground/70">AI Specialists</div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Course Highlights</h2>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <RevealSection key={index} delay={index * 50}>
                  <Card className="p-6 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground">{highlight}</p>
                    </div>
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">6-Week Curriculum</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  From AI fundamentals to building custom automation solutions for design studios
                </p>
              </div>
            </RevealSection>

            <div className="max-w-4xl mx-auto space-y-6">
              {curriculum.map((week, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {week.week}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{week.title}</h3>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2 text-foreground/70">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold mb-4">Ready to Automate Your Design Workflow?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Master the AI tools that are revolutionizing the design industry
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => {
                  const enquirySection = document.getElementById('enquiry-form');
                  enquirySection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Enroll Today - Limited Seats
              </Button>
            </RevealSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AppliedAIDesignAutomation;