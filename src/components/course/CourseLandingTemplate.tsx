import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui-elements/Card';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { 
  Clock, 
  Calendar, 
  Download, 
  Star, 
  CheckCircle2, 
  Users, 
  Award,
  Target,
  BookOpen,
  TrendingUp,
  Globe
} from 'lucide-react';

interface CurriculumWeek {
  week: number;
  title: string;
  topics: string[];
  preview?: string;
}

interface Instructor {
  name: string;
  experience: string;
  bio: string;
  image: string;
  companies: string[];
  linkedIn?: string;
}

interface CaseStudy {
  title: string;
  author: string;
  institution?: string;
  image: string;
  link: string;
}

interface CourseLandingProps {
  // SEO & Basic Info
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  
  // Hero Section
  courseName: string;
  duration: string;
  startDate: string;
  rating: string;
  ratingCount: string;
  heroImage: string;
  studentCount: string;
  studentCountLabel: string;
  
  // Course Details
  highlights: string[];
  curriculum: CurriculumWeek[];
  
  // Tools & Skills
  tools: Array<{name: string; icon: string}>;
  
  // Instructors
  instructors: Instructor[];
  
  // Case Studies
  caseStudies: CaseStudy[];
  
  // Call to Actions
  ctaTitle: string;
  ctaDescription: string;
  
  // Additional Props
  companyLogos?: string[];
  skillsOffered?: string[];
}

export const CourseLandingTemplate: React.FC<CourseLandingProps> = ({
  title,
  description,
  metaTitle,
  metaDescription,
  courseName,
  duration,
  startDate,
  rating,
  ratingCount,
  heroImage,
  studentCount,
  studentCountLabel,
  highlights,
  curriculum,
  tools,
  instructors,
  caseStudies,
  ctaTitle,
  ctaDescription,
  companyLogos = [],
  skillsOffered = []
}) => {
  const targetAudience = [
    { icon: "🎓", title: "Students and Beginners" },
    { icon: "💼", title: "Working Professionals" },
    { icon: "🏗️", title: "Architects and Engineers" },
    { icon: "🎨", title: "Interior and Industrial Designers" }
  ];

  const whyChooseUs = [
    {
      icon: "🎯",
      title: "Practical and hands-on",
      description: "Our courses are a perfect blend of theory and practical, hands-on exercises."
    },
    {
      icon: "🌍",
      title: "Real-world learning",
      description: "Everything we provide is related to industry relevant projects."
    },
    {
      icon: "👨‍🎓",
      title: "Industry experts",
      description: "Our courses have been curated by 25+ years of industry experienced instructors."
    },
    {
      icon: "💬",
      title: "Supportive and active",
      description: "We consistently support our students and offer helpful feedback to assist in their growth."
    },
    {
      icon: "🌐",
      title: "Diverse and active community",
      description: "Our students come from all over the world with various backgrounds."
    },
    {
      icon: "⭐",
      title: "Average rating 4.9/5",
      description: "Our education consistently earns an average 4.9/5 rating from our students."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
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
                      <span className="text-sm font-medium">{rating} Rating</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                    {courseName}
                  </h1>
                  
                  <div className="flex items-center gap-6 mb-6 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{startDate}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {description}
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
                    src={heroImage} 
                    alt={courseName}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{studentCount}</div>
                      <div className="text-sm text-foreground/70">{studentCountLabel}</div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Company Logos Section */}
        {companyLogos.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-6 md:px-8">
              <RevealSection>
                <div className="text-center mb-8">
                  <h3 className="text-lg font-medium text-foreground/70 mb-6">
                    Learn from experts working at
                  </h3>
                  <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                    {companyLogos.map((logo, index) => (
                      <img 
                        key={index} 
                        src={logo} 
                        alt={`Company ${index + 1}`}
                        className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>
        )}

        {/* Who Should Join */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Who should join this course?</h2>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((audience, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <Card className="p-6 text-center h-full">
                    <div className="text-4xl mb-4">{audience.icon}</div>
                    <h3 className="font-semibold text-foreground">{audience.title}</h3>
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Highlights of this course</h2>
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
                <h2 className="text-3xl font-display font-bold mb-4">Week-wise Schedule</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Comprehensive curriculum designed to take you from beginner to expert level
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
                        <h3 className="text-xl font-semibold mb-3">Week {week.week} - {week.title}</h3>
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

        {/* Tools & Software Section */}
        {tools.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6 md:px-8">
              <RevealSection>
                <h2 className="text-3xl font-display font-bold text-center mb-12">
                  Master Industry-Relevant Workflows and Software Tools
                </h2>
              </RevealSection>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {tools.map((tool, index) => (
                  <RevealSection key={index} delay={index * 50}>
                    <Card className="p-4 text-center h-full">
                      <img 
                        src={tool.icon} 
                        alt={tool.name}
                        className="w-12 h-12 mx-auto mb-3"
                      />
                      <p className="text-sm font-medium">{tool.name}</p>
                    </Card>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Instructors Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Meet your Industry mentors</h2>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {instructors.map((instructor, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-sm text-primary mb-1">{instructor.experience}</div>
                        <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                        <p className="text-sm text-foreground/70 mb-4">{instructor.bio}</p>
                        <div className="flex flex-wrap gap-2">
                          {instructor.companies.map((company, companyIndex) => (
                            <Badge key={companyIndex} variant="outline" className="text-xs">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        {caseStudies.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6 md:px-8">
              <RevealSection>
                <h2 className="text-3xl font-display font-bold text-center mb-12">
                  Inspiring Journeys: Case Studies
                </h2>
              </RevealSection>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.slice(0, 6).map((study, index) => (
                  <RevealSection key={index} delay={index * 100}>
                    <Card className="overflow-hidden h-full">
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">{study.title}</h3>
                        <p className="text-sm text-foreground/70 mb-1">{study.author}</p>
                        {study.institution && (
                          <p className="text-xs text-foreground/60 mb-3">{study.institution}</p>
                        )}
                        <Button variant="outline" size="sm" className="w-full">
                          View Portfolio
                        </Button>
                      </div>
                    </Card>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills & Offerings */}
        {skillsOffered.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6 md:px-8">
              <RevealSection>
                <h2 className="text-3xl font-display font-bold text-center mb-12">Course Offerings</h2>
              </RevealSection>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillsOffered.map((skill, index) => (
                  <RevealSection key={index} delay={index * 50}>
                    <Card className="p-6 text-center h-full">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-medium text-sm">{skill}</p>
                    </Card>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Why Choose BSD Design School</h2>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <Card className="p-6 h-full">
                    <div className="text-3xl mb-4">{reason.icon}</div>
                    <h3 className="font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-foreground/70">{reason.description}</p>
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
              <h2 className="text-3xl font-display font-bold mb-4">{ctaTitle}</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                {ctaDescription}
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

export default CourseLandingTemplate;