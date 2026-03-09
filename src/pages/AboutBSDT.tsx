
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';
import { EnquiryFormSection } from '../components/home/EnquiryFormSection';
import { AnimatedButton } from '../components/ui-elements/AnimatedButton';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Lightbulb, Award, Users, Target, Eye, Heart, 
  GraduationCap, Briefcase, Building2, Trophy,
  CheckCircle, Play, ArrowRight
} from 'lucide-react';
import aboutCover from '@/assets/about-bsdt-cover.jpg';

const stats = [
  { icon: GraduationCap, value: '2000+', label: 'Students Trained' },
  { icon: Briefcase, value: '85%', label: 'Placement Rate' },
  { icon: Building2, value: '50+', label: 'Industry Partners' },
  { icon: Trophy, value: '8+', label: 'Years of Excellence' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We foster a culture of innovation, encouraging students to think creatively and push the boundaries of design and technology.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to maintaining the highest standards of education and ensuring our students achieve excellence in their chosen fields.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of collaboration, bringing together diverse perspectives to create meaningful and impactful solutions.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Heart,
    title: 'Inclusivity',
    description: 'We embrace diversity and create an inclusive environment where every student feels valued, supported, and empowered to succeed.',
    color: 'bg-rose-50 text-rose-600',
  },
];

const milestones = [
  { year: '2016', title: 'Founded', description: 'BSDT established with a vision to transform design education in India.' },
  { year: '2018', title: 'First Graduating Batch', description: 'Our first batch of designers graduated and entered the industry.' },
  { year: '2020', title: 'Digital Expansion', description: 'Expanded programs to include UI/UX, HCI, and digital design disciplines.' },
  { year: '2022', title: 'Industry Recognition', description: 'Recognized as a leading design institution with top industry partnerships.' },
  { year: '2024', title: 'Campus Upgrade', description: 'State-of-the-art facilities with new labs, studios, and collaborative spaces.' },
];

const AboutBSDT = () => {
  return (
    <>
      <Helmet>
        <title>About BSDT | Bangalore School of Design & Technology</title>
        <meta name="description" content="Learn about Bangalore School of Design & Technology - a premier institution dedicated to design education, innovation, and creative excellence. Discover our mission, vision, and values." />
        <meta name="keywords" content="about BSDT, design school Bangalore, creative education, design institution, art school" />
        <meta property="og:title" content="About BSDT | Bangalore School of Design & Technology" />
        <meta property="og:description" content="Learn about Bangalore School of Design & Technology - a premier institution dedicated to design education, innovation, and creative excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsdt.ac.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About BSDT | Bangalore School of Design & Technology" />
        <meta name="twitter:description" content="Learn about Bangalore School of Design & Technology - a premier institution dedicated to design education, innovation, and creative excellence." />
        <link rel="canonical" href="https://bsdt.ac.in/about" />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-bsd-gray text-white pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bsd-gray via-bsd-gray/95 to-bsd-orange/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-bsd-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-bsd-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <RevealSection direction="up">
                <Badge variant="bsdOrange" className="mb-4">Est. 2016</Badge>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                  Shaping the Future of <span className="text-bsd-orange">Design Education</span>
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Bangalore School of Design & Technology is a premier institution dedicated to fostering 
                  creativity, innovation, and excellence in design and technology education.
                </p>
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    href="https://apply.bsd.edu.in/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
                    hoverEffect="glow"
                  >
                    Apply Now
                  </AnimatedButton>
                  <AnimatedButton 
                    href="#our-story" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    hoverEffect="scale"
                  >
                    Our Story
                  </AnimatedButton>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-12 z-20 pb-8">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection direction="up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-border/30 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-bsd-orange/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-bsd-orange" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-bsd-gray mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="our-story" className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealSection direction="right">
                <div className="space-y-4">
                  <Badge variant="bsdOrange">Campus Life</Badge>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray flex items-center gap-2">
                    <Play className="w-6 h-6 text-bsd-orange" /> 
                    Experience BSDT Campus
                  </h2>
                  <p className="text-foreground/70">Take a virtual tour of our vibrant campus and see what makes BSDT the perfect place for your creative journey.</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/30 mt-6 group">
                  <AspectRatio ratio={16 / 9}>
                    <iframe 
                      src="https://www.youtube.com/embed/bWy4EH-B3tw" 
                      title="BSDT Campus Life Video" 
                      className="w-full h-full" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </AspectRatio>
                </div>
              </RevealSection>

              <RevealSection direction="left">
                <div className="space-y-8">
                  <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-bsd-orange/5 to-transparent rounded-2xl border border-bsd-orange/10">
                    <div className="w-14 h-14 bg-bsd-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-bsd-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-bsd-gray mb-2">Our Mission</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        To nurture the next generation of creative professionals by providing world-class education 
                        in design and technology, bridging the gap between traditional design principles and cutting-edge technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-bsd-gray/5 to-transparent rounded-2xl border border-bsd-gray/10">
                    <div className="w-14 h-14 bg-bsd-gray/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-7 h-7 text-bsd-gray" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-bsd-gray mb-2">Our Vision</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        To be India's most respected design institution — empowering students with the skills, knowledge, 
                        and creative thinking necessary to excel in today's rapidly evolving digital landscape.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {['Industry-experienced faculty', 'State-of-the-art labs and studios', 'Strong industry connections', 'Hands-on project-based learning'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors">
                        <CheckCircle className="w-5 h-5 text-bsd-orange flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection direction="up">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Badge variant="bsdOrange" className="mb-4">What Drives Us</Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
                  Our Core Values
                </h2>
                <p className="text-foreground/70">
                  These principles guide everything we do — from curriculum design to campus culture.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <RevealSection key={index} direction="up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.color}`}>
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-bsd-gray mb-3">{value.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection direction="up">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Badge variant="bsdOrange" className="mb-4">Our Journey</Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
                  Key Milestones
                </h2>
                <p className="text-foreground/70">
                  A look back at the moments that shaped BSDT into what it is today.
                </p>
              </div>
            </RevealSection>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <RevealSection key={index} direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 80}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-bsd-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-bsd-orange/30">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-bsd-orange/40 to-bsd-orange/10 mt-2"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-lg font-bold text-bsd-gray mb-1">{milestone.title}</h3>
                      <p className="text-foreground/70 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-bsd-gray text-white">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Begin Your Design Journey?
                </h2>
                <p className="text-white/70 mb-8">
                  Join BSDT and become part of a community that's shaping the future of design and technology.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <AnimatedButton 
                    href="https://apply.bsd.edu.in/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
                    hoverEffect="glow"
                  >
                    Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                  </AnimatedButton>
                  <AnimatedButton 
                    href="/programs" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    hoverEffect="scale"
                  >
                    Explore Programs
                  </AnimatedButton>
                </div>
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

export default AboutBSDT;
