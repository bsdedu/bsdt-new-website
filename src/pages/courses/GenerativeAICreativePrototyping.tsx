import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui-elements/Card';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Clock, Users, Calendar, Download, Star, CheckCircle2 } from 'lucide-react';
import generativeAIImage from '@/assets/programs/generative-ai-creative.jpg';

const GenerativeAICreativePrototyping: React.FC = () => {
  const curriculum = [
    {
      week: 1,
      title: "AI Fundamentals & Midjourney Mastery",
      topics: ["Introduction to generative AI", "Midjourney interface and commands", "Basic prompt engineering", "Style references and parameters"]
    },
    {
      week: 2,
      title: "DALL-E & Advanced Prompting",
      topics: ["DALL-E 3 workflows", "Complex prompt structures", "Image editing with AI", "Brand consistency techniques"]
    },
    {
      week: 3,
      title: "Stable Diffusion & Creative Applications",
      topics: ["Local Stable Diffusion setup", "ControlNet and customization", "Real-world design applications", "Portfolio development"]
    }
  ];

  const highlights = [
    "Master 4 major AI creative tools",
    "Hands-on project-based learning",
    "Industry expert mentorship",
    "Certificate of completion",
    "Job placement assistance",
    "Portfolio development support"
  ];

  return (
    <>
      <Helmet>
        <title>Generative AI for Creative Prototyping - 3 Week Course | BSD Design School</title>
        <meta 
          name="description" 
          content="Master AI tools for rapid creative ideation and prototyping. Learn Midjourney, DALL-E, Stable Diffusion, and AI prompting in this intensive 3-week online course." 
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
                      <span className="text-sm font-medium">4.1 Rating</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                    Generative AI for Creative Prototyping
                  </h1>
                  
                  <div className="flex items-center gap-6 mb-6 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>3 Weeks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Feb 2025</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    Master AI tools for rapid creative ideation and prototyping across design disciplines. Learn Midjourney, DALL-E, Stable Diffusion, and advanced AI prompting techniques.
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
                    src={generativeAIImage} 
                    alt="Generative AI Creative Prototyping Course"
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12k+</div>
                      <div className="text-sm text-foreground/70">Certified Students</div>
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
                <h2 className="text-3xl font-display font-bold mb-4">3-Week Curriculum</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Comprehensive learning path designed to master AI creative tools from fundamentals to advanced applications
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
              <h2 className="text-3xl font-display font-bold mb-4">Ready to Master AI Creative Tools?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Join thousands of students who have transformed their creative workflow with AI
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

export default GenerativeAICreativePrototyping;