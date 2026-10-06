import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import tutelrHero from '@/assets/tutelr-cyber-banner.jpeg';

export type TutelrProgramContent = {
  title: string;
  slug: string;
  description: string;
  overview: string;
  areas: string[];
  cta?: {
    label: string;
    href: string;
    newTab?: boolean;
  };
};

type TutelrProgramPageProps = {
  program: TutelrProgramContent;
};

const TutelrProgramPage: React.FC<TutelrProgramPageProps> = ({ program }) => {
  const canonicalUrl = `https://bsdt-new-website.lovable.app/tutelr/${program.slug}`;
  const cta = program.cta ?? { label: 'Know More', href: 'https://www.tutelr.org/home', newTab: true };

  return (
    <>
      <Helmet>
        <title>{program.title} | @Tutelr at BSDT</title>
        <meta name="description" content={program.description} />
        <meta property="og:title" content={`${program.title} | @Tutelr at BSDT`} />
        <meta property="og:description" content={program.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          <section className="relative min-h-[560px] overflow-hidden pt-28 md:min-h-[620px] md:pt-36">
            <img
              src={tutelrHero}
              alt="Cybersecurity operations and artificial intelligence"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />

            <div className="container relative mx-auto flex min-h-[430px] items-center px-6 py-14 md:px-8">
              <div className="max-w-3xl">
                <Badge variant="bsdOrange" className="mb-6">@TUTELR</Badge>
                <h1 className="text-4xl font-display font-bold leading-tight text-primary-foreground md:text-6xl">
                  {program.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
                  {program.description}
                </p>
                <Button asChild size="lg" className="mt-8 group">
                  <a
                    href={cta.href}
                    target={cta.newTab ? '_blank' : undefined}
                    rel={cta.newTab ? 'noopener noreferrer' : undefined}
                  >
                    {cta.label}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto grid gap-12 px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase text-primary">Program Overview</p>
                <h2 className="mt-3 text-3xl font-display font-bold text-foreground md:text-4xl">
                  Practical learning for today's security landscape
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {program.overview}
                </p>
              </div>

              <div className="border-l-4 border-primary bg-secondary/60 p-6 md:p-8">
                <h2 className="text-xl font-display font-bold text-foreground">Key learning areas</h2>
                <ul className="mt-6 space-y-4">
                  {program.areas.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-secondary/40 py-14">
            <div className="container mx-auto flex flex-col gap-6 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase text-primary">@Tutelr</p>
                <h2 className="mt-2 text-2xl font-display font-bold text-foreground md:text-3xl">
                  Explore this program with Tutelr
                </h2>
              </div>
              <Button asChild size="lg" className="w-fit group">
                <a href="https://www.tutelr.org/home" target="_blank" rel="noopener noreferrer">
                  Visit Tutelr
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

export default TutelrProgramPage;