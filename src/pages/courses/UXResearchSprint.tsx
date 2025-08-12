import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui-elements/Card';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Clock, Users, Calendar, Download, Star, CheckCircle2 } from 'lucide-react';
import uxResearchImage from '@/assets/programs/ux-research.jpg';

const UXResearchSprint: React.FC = () => {
  const curriculum = [
    {
      week: 1,
      title: "Research Fundamentals & Planning",
      topics: ["Research methodologies overview", "Study design and planning", "Participant recruitment", "Ethics and consent"]
    },
    {
      week: 2,
      title: "Data Collection & User Interviews",
      topics: ["Interview techniques", "Survey design", "Observational research", "Usability testing setup"]
    },
    {
      week: 3,
      title: "Analysis & Insights Communication",
      topics: ["Data analysis methods", "Pattern identification", "Insight synthesis", "Research presentation skills"]
    }
  ];

  const highlights = [
    "Master user research methods",
    "Conduct usability testing",
    "Data analysis techniques",
    "Research presentation skills",
    "Industry-standard tools",
    "Portfolio case studies"
  ];

  return (
    <>
      <Helmet>
        <title>UX Research Sprint - 3 Week Course | BSD Design School</title>
        <meta 
          name="description" 
          content="Master user research methodologies and data-driven design decisions. Learn user interviews, usability testing, and research methods in 3 weeks." 
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
                      <span className="text-sm font-medium">4.6 Rating</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                    UX Research Sprint
                  </h1>
                  
                  <div className="flex items-center gap-6 mb-6 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>3 Weeks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Jun 2025</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    Master user research methodologies and data-driven design decisions. Learn user interviews, usability testing, data analysis, and research methods.
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
                    src={uxResearchImage} 
                    alt="UX Research Sprint Course"
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">7k+</div>
                      <div className="text-sm text-foreground/70">UX Researchers</div>
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
                  From research planning to actionable insights and recommendations
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
              <h2 className="text-3xl font-display font-bold mb-4">Ready to Master User Research?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Learn the skills that drive successful product decisions
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

export default UXResearchSprint;