import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Briefcase, Users, Heart, GraduationCap, MapPin, Mail } from 'lucide-react';
import careersHero from '@/assets/careers-hero.jpg';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Assistant Professor – Interior Design',
      department: 'Academics',
      type: 'Full-time',
      location: 'Bangalore',
    },
    {
      title: 'Assistant Professor – Visual Communication',
      department: 'Academics',
      type: 'Full-time',
      location: 'Bangalore',
    },
    {
      title: 'Admissions Counsellor',
      department: 'Admissions',
      type: 'Full-time',
      location: 'Bangalore',
    },
  ];

  const benefits = [
    {
      icon: <GraduationCap className="w-8 h-8 text-bsd-orange" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities through workshops, seminars, and Faculty Development Programmes.',
    },
    {
      icon: <Users className="w-8 h-8 text-bsd-orange" />,
      title: 'Collaborative Culture',
      description: 'Work alongside talented designers, educators, and creative professionals in an inspiring environment.',
    },
    {
      icon: <Heart className="w-8 h-8 text-bsd-orange" />,
      title: 'Work-Life Balance',
      description: 'Supportive policies that encourage a healthy balance between professional and personal life.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-bsd-orange" />,
      title: 'Industry Exposure',
      description: 'Engage with leading design firms, attend exhibitions, and stay connected to industry trends.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers at BSDT | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Bangalore School of Design & Technology. Join our team of passionate educators and creative professionals shaping the future of design education." />
        <meta name="keywords" content="careers BSDT, jobs design school, teaching positions Bangalore, design education careers" />
        <link rel="canonical" href="https://bsdt.ac.in/careers" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={careersHero}
              alt="Creative professionals collaborating at BSDT"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-bsd-gray/80" />
          </div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <RevealSection>
              <Badge variant="bsdOrange" className="mb-4">CAREERS</Badge>
            </RevealSection>

            <RevealSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight max-w-3xl">
                BSDT is a growing family of people with a{' '}
                <span className="text-bsd-orange">common goal</span>
              </h1>
            </RevealSection>
          </div>
        </section>

        {/* About Working at BSDT */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="max-w-4xl">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  BSDT's campus is a vibrant hub of creativity and learning, equipped with state-of-the-art design studios, workshops, and collaborative spaces. Our culture thrives on innovation, with dedicated studios, a well-stocked library, student lounges, and modern facilities that inspire both teaching and non-teaching staff.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We are constantly on the lookout for driven individuals who can contribute to our advancement and refinement. We invite applications for teaching and administrative positions across diverse disciplines at BSDT for varied roles.
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Why Join BSDT */}
        <section className="py-16 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <Badge variant="bsdOrange" className="mb-4">WHY JOIN US</Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                  Why Work at BSDT?
                </h2>
                <p className="mt-4 text-foreground/70">
                  Be part of an institution that values creativity, growth, and making a meaningful impact on design education.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <Card className="h-full text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="mx-auto w-16 h-16 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-bsd-gray mb-2">{benefit.title}</h3>
                      <p className="text-sm text-foreground/70">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <Badge variant="bsdOrange" className="mb-4">OPENINGS</Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                  Current Openings
                </h2>
                <p className="mt-4 text-foreground/70">
                  Explore our available positions and find the right fit for your skills and passion.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {openPositions.map((position, index) => (
                <RevealSection key={index} delay={index * 80}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-bsd-orange">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                          <Briefcase className="w-6 h-6 text-bsd-orange" />
                        </div>
                        <h3 className="text-lg font-semibold text-bsd-gray mb-3">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60 mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {position.location}
                          </span>
                          <Badge variant="secondary" className="text-xs">{position.type}</Badge>
                        </div>
                        <p className="text-sm text-foreground/50">{position.department}</p>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-bsd-orange hover:bg-bsd-orange/90 text-white w-full mt-5">
                            Apply Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Apply for {position.title}</DialogTitle>
                            <DialogDescription>
                              Please send your resume to the email address below with the subject line: <strong>Job Application – {position.title}</strong>
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex items-center gap-3 p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10">
                            <Mail className="w-5 h-5 text-bsd-orange flex-shrink-0" />
                            <a href={`mailto:vinodkumar@bsd.edu.in?subject=${encodeURIComponent(`Job Application – ${position.title}`)}`} className="text-bsd-orange font-medium hover:underline">
                              vinodkumar@bsd.edu.in
                            </a>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </RevealSection>
              ))}
            </div>

            <RevealSection delay={400}>
              <div className="text-center mt-12 p-8 bg-bsd-orange/5 rounded-2xl border border-bsd-orange/10 max-w-3xl mx-auto">
                <Mail className="w-10 h-10 text-bsd-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bsd-gray mb-2">Don't see a role that fits?</h3>
                <p className="text-foreground/70 mb-4">
                  Send your resume to us and we'll keep you in mind for future opportunities.
                </p>
                <a href="mailto:vinodkumar@bsd.edu.in">
                  <Button variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                    Email vinodkumar@bsd.edu.in
                  </Button>
                </a>
              </div>
            </RevealSection>
          </div>
        </section>

        <EnquiryFormSection />
      </main>

      <Footer />
    </>
  );
};

export default Careers;
