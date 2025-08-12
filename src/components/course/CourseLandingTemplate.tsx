import React, { useState } from 'react';
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
  Globe,
  Play,
  Video,
  MapPin,
  CreditCard,
  Shield,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  DollarSign,
  Zap,
  Gift
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
  qualification?: string;
}

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CourseLandingProps {
  // SEO & Basic Info
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  
  // Hero Banner Section
  courseName: string;
  duration: string;
  format: string; // e.g., "Live + Recorded Sessions"
  startDate: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  rating: string;
  ratingCount: string;
  heroImage: string;
  
  // Course Overview
  overview: string;
  features: string[];
  
  // Key Details
  schedule: {
    startDate: string;
    endDate: string;
    sessionTimings: string;
    totalSessions: string;
  };
  certification: string;
  
  // Curriculum
  curriculum: CurriculumWeek[];
  tools: Array<{name: string; icon: string}>;
  
  // Instructors
  instructors: Instructor[];
  
  // Testimonials
  testimonials: Testimonial[];
  
  // FAQs
  faqs: FAQ[];
  
  // Additional Props
  highlights?: string[];
  skillsOffered?: string[];
}

export const CourseLandingTemplate: React.FC<CourseLandingProps> = ({
  title,
  description,
  metaTitle,
  metaDescription,
  courseName,
  duration,
  format,
  startDate,
  originalPrice,
  discountedPrice,
  discount,
  rating,
  ratingCount,
  heroImage,
  overview,
  features,
  schedule,
  certification,
  curriculum,
  tools,
  instructors,
  testimonials,
  faqs,
  highlights = [],
  skillsOffered = []
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* 1. Banner Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt={courseName}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
          </div>
          
          <div className="relative container mx-auto px-6 md:px-8 py-20">
            <div className="max-w-4xl">
              <RevealSection>
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="bsdOrange" className="text-sm px-4 py-2">
                    {discount} OFF - LIMITED TIME
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{rating} ({ratingCount} reviews)</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  {courseName}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 mb-8 text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">{duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    <span className="font-medium">{format}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">{startDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-primary">{discountedPrice}</span>
                    <span className="text-xl text-foreground/50 line-through">{originalPrice}</span>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    Save {discount}
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button size="lg" className="text-lg px-8 py-4">
                    <Gift className="mr-2 h-5 w-5" />
                    Enroll Now - Limited Seats
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>EMI options available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp support</span>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* 2. Course Overview Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-6">Course Overview</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  {overview}
                </p>
              </div>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <RevealSection key={index} delay={index * 50}>
                  <Card className="p-6 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground font-medium">{feature}</p>
                    </div>
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Key Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Course Details</h2>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <RevealSection delay={0}>
                <Card className="p-6 text-center h-full">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Schedule</h3>
                  <div className="text-sm text-foreground/70 space-y-1">
                    <p>Start: {schedule.startDate}</p>
                    <p>End: {schedule.endDate}</p>
                    <p>Timing: {schedule.sessionTimings}</p>
                    <p>Sessions: {schedule.totalSessions}</p>
                  </div>
                </Card>
              </RevealSection>
              
              <RevealSection delay={100}>
                <Card className="p-6 text-center h-full">
                  <DollarSign className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Pricing</h3>
                  <div className="text-sm text-foreground/70 space-y-1">
                    <p className="text-2xl font-bold text-primary">{discountedPrice}</p>
                    <p className="line-through text-foreground/50">{originalPrice}</p>
                    <p className="text-green-600 font-medium">Save {discount}</p>
                    <p>EMI Available</p>
                  </div>
                </Card>
              </RevealSection>
              
              <RevealSection delay={200}>
                <Card className="p-6 text-center h-full">
                  <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Certification</h3>
                  <div className="text-sm text-foreground/70 space-y-1">
                    <p>{certification}</p>
                    <p>Industry Recognized</p>
                    <p>Digital Certificate</p>
                    <p>Portfolio Projects</p>
                  </div>
                </Card>
              </RevealSection>
              
              <RevealSection delay={300}>
                <Card className="p-6 text-center h-full">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Format</h3>
                  <div className="text-sm text-foreground/70 space-y-1">
                    <p>{format}</p>
                    <p>Interactive Sessions</p>
                    <p>1:1 Mentorship</p>
                    <p>Community Access</p>
                  </div>
                </Card>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* 4. Curriculum/Syllabus Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">Comprehensive Curriculum</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Week-wise structured learning designed by industry experts
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
                        <h3 className="text-xl font-semibold mb-3">Week {week.week}: {week.title}</h3>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2 text-foreground/70">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                        {week.preview && (
                          <Button variant="outline" size="sm" className="mt-4">
                            <Play className="mr-2 h-4 w-4" />
                            Preview Content
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </RevealSection>
              ))}
            </div>

            {/* Tools & Software */}
            {tools.length > 0 && (
              <div className="mt-16">
                <RevealSection>
                  <h3 className="text-2xl font-display font-bold text-center mb-8">
                    Software & Tools You'll Master
                  </h3>
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
            )}
          </div>
        </section>

        {/* 5. Instructor Details */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Meet Your Expert Instructors</h2>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {instructors.map((instructor, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <Card className="p-8">
                    <div className="flex items-start gap-6">
                      <img 
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{instructor.name}</h3>
                        <div className="text-primary font-medium mb-2">{instructor.experience}</div>
                        {instructor.qualification && (
                          <div className="text-sm text-foreground/70 mb-3">{instructor.qualification}</div>
                        )}
                        <p className="text-foreground/70 mb-4 leading-relaxed">{instructor.bio}</p>
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

        {/* 6. Testimonials/Reviews */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Student Success Stories</h2>
            </RevealSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <Card className="p-6 h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-foreground/70 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      {testimonial.image && (
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-foreground/60">
                          {testimonial.role}{testimonial.company && ` at ${testimonial.company}`}
                        </div>
                      </div>
                    </div>
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
            </RevealSection>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <RevealSection key={index} delay={index * 50}>
                  <Card className="overflow-hidden">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="font-semibold pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`h-5 w-5 text-primary transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of professionals who have accelerated their careers with our expert-led courses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  <Gift className="mr-2 h-5 w-5" />
                  Enroll Now - {discount} OFF
                </Button>
                <div className="flex items-center gap-4 text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91-XXXXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>
      
      {/* 8. Footer */}
      <Footer />
    </>
  );
};

export default CourseLandingTemplate;