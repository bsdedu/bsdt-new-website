import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Bot, BrainCircuit, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import cyberSecurityImage from '@/assets/programs/ai-cybersecurity.jpg';
import artificialIntelligenceImage from '@/assets/programs/generative-ai-creative.jpg';
import roboticsImage from '@/assets/programs/robotics.jpg';

const focusAreas = [
  {
    title: 'Cybersecurity',
    description: 'Build practical foundations in digital security, threat awareness, secure systems, and responsible technology practices.',
    image: cyberSecurityImage,
    icon: ShieldCheck,
  },
  {
    title: 'Artificial Intelligence',
    description: 'Explore how intelligent systems learn, solve problems, and support new applications through project-based learning.',
    image: artificialIntelligenceImage,
    icon: BrainCircuit,
  },
  {
    title: 'Embedded Robotics',
    description: 'Connect electronics, programming, sensors, and physical systems to design and prototype responsive robotic solutions.',
    image: roboticsImage,
    icon: Bot,
  },
];

const Tutelr: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutelr | Cybersecurity, AI & Embedded Robotics Programs at BSDT</title>
        <meta
          name="description"
          content="Explore Tutelr programs in Cybersecurity, Artificial Intelligence, and Embedded Robotics at Bangalore School of Design & Technology."
        />
        <meta property="og:title" content="Tutelr | Cybersecurity, AI & Embedded Robotics Programs" />
        <meta
          property="og:description"
          content="Explore practical technology learning across Cybersecurity, Artificial Intelligence, and Embedded Robotics with Tutelr at BSDT."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bsdt.ac.in/tutelr" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          <section className="relative overflow-hidden border-b border-border bg-secondary/40 pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-4xl">
                <Badge variant="bsdOrange" className="mb-6">TUTELR</Badge>
                <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight text-foreground md:text-6xl">
                  Cybersecurity, AI &amp; Embedded Robotics
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
                  Explore technology through practical learning that connects intelligent systems, digital security, electronics, and robotics.
                </p>
                <Button asChild size="lg" className="mt-8 group">
                  <a href="https://apply.bsd.edu.in/">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-10 max-w-2xl md:mb-14">
                <p className="text-sm font-semibold uppercase text-primary">Learning Areas</p>
                <h2 className="mt-3 text-3xl font-display font-bold text-foreground md:text-4xl">
                  Build skills for a connected future
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <article key={area.title} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img src={area.image} alt={`${area.title} learning at Tutelr`} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-6">
                        <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                        <h3 className="mt-4 text-xl font-semibold text-card-foreground">{area.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-secondary/40 py-14 md:py-18">
            <div className="container mx-auto flex flex-col gap-6 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-display font-bold text-foreground md:text-3xl">Start your Tutelr learning journey</h2>
                <p className="mt-3 text-foreground/70">Discover practical pathways across cybersecurity, artificial intelligence, and embedded robotics.</p>
              </div>
              <Button asChild size="lg" className="w-fit group">
                <a href="https://apply.bsd.edu.in/">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tutelr;