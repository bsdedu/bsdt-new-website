import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock, GraduationCap, Monitor } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import fullStackBanner from '@/assets/full-stack-gen-ai-horizontal.png.asset.json';
import testingBanner from '@/assets/tutelr-digital-forensics-banner.jpg';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

type CertificateProgram = {
  title: string;
  slug: string;
  duration: string;
  description: string;
  image: string;
  imageAlt: string;
  topics: string[];
};

const fullStack: CertificateProgram = {
  title: 'Full Stack with Gen AI',
  slug: 'full-stack-gen-ai',
  duration: '16 weeks',
  description: 'Learn to build complete, responsive web applications using frontend, backend, databases, and cloud technologies. Integrate Generative AI, LLM APIs, and AI-powered features while developing real-world projects and industry-ready skills.',
  image: new URL(fullStackBanner.url, 'https://bsdt-new-website.lovable.app').href,
  imageAlt: 'Robotic hand holding glowing orbital paths, representing Generative AI technology',
  topics: ['Frontend and responsive web applications', 'Backend development and databases', 'Cloud technologies', 'Generative AI and LLM APIs', 'AI-powered application features', 'Real-world project development'],
};

const testing: CertificateProgram = {
  title: 'Software Testing & QE',
  slug: 'software-testing-qe',
  duration: '12 weeks',
  description: 'Develop industry-ready skills in manual testing, automation, API testing, and quality engineering to ensure software reliability. Gain hands-on experience with industry tools, real-world testing scenarios, and project-based learning.',
  image: testingBanner,
  imageAlt: 'Technology analyst examining software and digital data at a workstation',
  topics: ['Manual software testing', 'Test automation', 'API testing', 'Quality engineering and software reliability', 'Hands-on industry tools', 'Real-world testing scenarios and projects'],
};

function CertificateProgramPage({ program }: { program: CertificateProgram }) {
  const canonical = `https://bsdt-new-website.lovable.app/certificate-programs/${program.slug}`;
  const isFullStack = program.slug === 'full-stack-gen-ai';
  return (
    <>
      <Helmet>
        <title>{program.title} | Certificate Programs | BSDT</title>
        <meta name="description" content={program.description} />
        <meta property="og:title" content={`${program.title} | BSDT`} />
        <meta property="og:description" content={program.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {isFullStack ? (
            <section className="overflow-hidden bg-gradient-to-b from-secondary to-background pt-32 pb-16 md:pb-20">
              <div className="container mx-auto grid items-center gap-10 px-6 md:grid-cols-2 md:gap-8 md:px-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="bsdOrange">Husky Applied Learning</Badge>
                    <Badge variant="outline" className="gap-1.5 border-primary/30 text-primary"><Clock className="h-3 w-3" />{program.duration}</Badge>
                    <Badge variant="outline" className="gap-1.5 border-primary/30 text-primary"><GraduationCap className="h-3 w-3" />Certificate Program</Badge>
                  </div>
                  <h1 className="font-display text-4xl font-bold leading-tight text-foreground xl:text-6xl">
                    Full Stack with<br /><span className="text-primary">Gen AI</span>
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed text-foreground/80">{program.description}</p>
                  <div className="max-w-lg space-y-3 rounded-lg border border-primary/15 bg-card px-6 py-5 shadow-sm">
                    <div className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-medium text-foreground">16 Weeks Duration</span></div>
                    <div className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-medium text-foreground">Certificate Program</span></div>
                    <div className="flex items-start gap-3"><Monitor className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-medium text-foreground">Husky Applied Learning</span></div>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg"><a href="#enquiry-form">Download Brochure</a></Button>
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary"><a href="https://apply.bsd.edu.in/">Apply Now</a></Button>
                  </div>
                </div>
                <div className="relative mx-auto w-full rounded-lg border border-primary/10 bg-card p-5 shadow-xl md:mt-12 md:self-start md:p-6">
                  <img src={program.image} alt={program.imageAlt} className="aspect-[16/9] w-full rounded-lg object-cover object-center" />
                  <div className="relative mx-auto -mt-7 flex h-16 w-16 items-center justify-center rounded-full border-8 border-card bg-secondary text-primary shadow-md"><Monitor className="h-7 w-7" /></div>
                </div>
              </div>
            </section>
          ) : (
          <section className="relative overflow-hidden pt-28 md:pt-36">
            <img src={program.image} alt={program.imageAlt} className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
            <div className="container relative mx-auto px-6 py-16 md:px-8 md:py-20">
              <div className="max-w-3xl">
                <Badge variant="bsdOrange" className="mb-6">Husky Applied Learning</Badge>
                <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-primary-foreground">{program.title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">{program.description}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-primary-foreground">
                  <span className="inline-flex items-center gap-2"><Clock className="h-5 w-5" />{program.duration}</span>
                  <span className="inline-flex items-center gap-2"><GraduationCap className="h-5 w-5" />Certificate Program</span>
                </div>
                <Button asChild size="lg" className="mt-8">
                  <a href="https://apply.bsd.edu.in/">Apply Now<ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </section>
          )}
          <section className="py-14 md:py-20">
            <div className="container mx-auto grid gap-10 px-6 md:px-8 lg:grid-cols-2">
              <div>
                <Badge variant="bsdOrange" className="mb-4">Program Overview</Badge>
                <h2 className="text-3xl font-display font-bold text-foreground">{program.title}</h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">{program.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">Areas of Learning</h2>
                <ul className="mt-5 grid gap-4">
                  {program.topics.map(topic => <li key={topic} className="flex items-start gap-3 border-b border-border pb-4 text-foreground/80"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-bsd-orange" />{topic}</li>)}
                </ul>
              </div>
            </div>
          </section>
          {isFullStack && <EnquiryFormSection />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export const FullStackGenAI = () => <CertificateProgramPage program={fullStack} />;
export const SoftwareTestingQE = () => <CertificateProgramPage program={testing} />;