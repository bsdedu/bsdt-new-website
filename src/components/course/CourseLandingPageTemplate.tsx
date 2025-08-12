import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Star, Clock, Users, Award, CheckCircle, ChevronDown, ChevronUp, Play, Download, Calendar, DollarSign, FileText } from "lucide-react";

// Interface definitions for the template
export interface CourseInstructor {
  name: string;
  qualifications: string;
  experience: string;
  image: string;
  bio: string;
}

export interface CourseTestimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  feedback: string;
  image?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface CurriculumWeek {
  week: number;
  title: string;
  topics: string[];
  tools?: string[];
}

export interface CourseDetails {
  schedule: {
    startDate: string;
    endDate: string;
    sessionTimings: string;
    format: string;
  };
  pricing: {
    originalPrice: number;
    discountedPrice: number;
    currency: string;
    paymentOptions: string[];
  };
  certification: {
    provider: string;
    type: string;
    description: string;
  };
}

export interface CourseLandingPageProps {
  // SEO & Meta
  title: string;
  description: string;
  
  // Banner Section
  courseTitle: string;
  heroImage: string;
  duration: string;
  format: string;
  
  // Course Overview
  courseIntro: string;
  learningHighlights: string[];
  keyFeatures: string[];
  
  // Key Details
  details: CourseDetails;
  
  // Curriculum
  curriculum: CurriculumWeek[];
  softwareTools: string[];
  
  // Target Audience
  targetAudience: {
    title: string;
    description: string;
    audiences: string[];
  };
  
  // Instructor
  instructor: CourseInstructor;
  
  // Testimonials
  testimonials: CourseTestimonial[];
  
  // FAQs
  faqs: CourseFAQ[];
  
  // CTAs
  enrollmentUrl: string;
  brochureUrl?: string;
}

export const CourseLandingPageTemplate: React.FC<CourseLandingPageProps> = ({
  title,
  description,
  courseTitle,
  heroImage,
  duration,
  format,
  courseIntro,
  learningHighlights,
  keyFeatures,
  details,
  curriculum,
  softwareTools,
  targetAudience,
  instructor,
  testimonials,
  faqs,
  enrollmentUrl,
  brochureUrl
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const discountPercentage = Math.round(
    ((details.pricing.originalPrice - details.pricing.discountedPrice) / details.pricing.originalPrice) * 100
  );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>

      <Navbar />

      {/* 1. Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={courseTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <RevealSection>
            <Badge className="mb-4 bg-primary text-white">
              {duration} | {format}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {courseTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance">
              {courseIntro}
            </p>
            
            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  {details.pricing.currency}{details.pricing.discountedPrice}
                </span>
                <span className="text-xl text-gray-300 line-through">
                  {details.pricing.currency}{details.pricing.originalPrice}
                </span>
                <Badge className="bg-red-500 text-white">
                  {discountPercentage}% OFF
                </Badge>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                asChild
              >
                <a href={enrollmentUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2" />
                  Enroll Now
                </a>
              </Button>
              {brochureUrl && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
                  asChild
                >
                  <a href={brochureUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </a>
                </Button>
              )}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 2. Course Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Course Overview</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {courseIntro}
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <RevealSection>
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {learningHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealSection>

            <RevealSection>
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* 3. Key Details Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="text-4xl font-bold text-center mb-16">Course Details</h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            <RevealSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Start:</span> {details.schedule.startDate}
                    </div>
                    <div>
                      <span className="font-semibold">End:</span> {details.schedule.endDate}
                    </div>
                    <div>
                      <span className="font-semibold">Timings:</span> {details.schedule.sessionTimings}
                    </div>
                    <div>
                      <span className="font-semibold">Format:</span> {details.schedule.format}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>

            <RevealSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-primary">
                      {details.pricing.currency}{details.pricing.discountedPrice}
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      {details.pricing.currency}{details.pricing.originalPrice}
                    </div>
                    <div>
                      <span className="font-semibold">Payment Options:</span>
                      <ul className="list-disc list-inside mt-1">
                        {details.pricing.paymentOptions.map((option, index) => (
                          <li key={index} className="text-sm">{option}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>

            <RevealSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Provider:</span> {details.certification.provider}
                    </div>
                    <div>
                      <span className="font-semibold">Type:</span> {details.certification.type}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {details.certification.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* 4. Curriculum/Syllabus Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Curriculum</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive week-by-week breakdown of what you'll learn
              </p>
            </div>
          </RevealSection>

          <div className="grid gap-6 mb-12">
            {curriculum.map((week, index) => (
              <RevealSection key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Badge variant="outline">Week {week.week}</Badge>
                      {week.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Topics Covered</h4>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {week.tools && week.tools.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Tools & Software</h4>
                          <div className="flex flex-wrap gap-2">
                            {week.tools.map((tool, toolIndex) => (
                              <Badge key={toolIndex} variant="secondary">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>

          {/* Software/Tools Section */}
          <RevealSection>
            <Card>
              <CardHeader>
                <CardTitle>Software & Tools Covered</CardTitle>
                <CardDescription>
                  Industry-standard tools you'll master throughout the course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {softwareTools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="text-base py-2 px-4">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </RevealSection>
        </div>
      </section>

      {/* Who is it for? Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{targetAudience.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {targetAudience.description}
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {targetAudience.audiences.map((audience, index) => (
              <RevealSection key={index} delay={index * 100}>
                <Card className="p-6 text-center h-full">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{audience}</h3>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Instructor Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Meet Your Instructor</h2>
              <p className="text-xl text-muted-foreground">
                Learn from industry experts with real-world experience
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                    <p className="text-muted-foreground mb-2">{instructor.qualifications}</p>
                    <p className="text-sm text-muted-foreground">{instructor.experience}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold mb-4">About the Instructor</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealSection>
        </div>
      </section>

      {/* 6. Testimonials/Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Student Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Hear from our graduates who've transformed their careers
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealSection key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.feedback}"
                    </p>
                    <div className="flex items-center gap-3">
                      {testimonial.image && (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    {testimonial.isVideo && testimonial.videoUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-4 w-full"
                        asChild
                      >
                        <a href={testimonial.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Watch Video Testimonial
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Got questions? We've got answers.
              </p>
            </div>
          </RevealSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealSection key={index}>
                <Card>
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <CardTitle className="flex items-center justify-between">
                      <span>{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  {openFAQ === index && (
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <RevealSection>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who've already upgraded their skills and landed their dream jobs.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg"
              asChild
            >
              <a href={enrollmentUrl} target="_blank" rel="noopener noreferrer">
                Enroll Now - Limited Seats Available
              </a>
            </Button>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </>
  );
};