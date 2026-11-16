import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, CheckCircle2, Clock, GraduationCap, Monitor, Code2, Sparkles, BriefcaseBusiness, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import fullStackBanner from '@/assets/full-stack-gen-ai-horizontal.png.asset.json';
import codingImage from '@/assets/full-stack-coding.png.asset.json';
import cloudImage from '@/assets/full-stack-cloud.png.asset.json';
import aiAppImage from '@/assets/full-stack-ai-app.png.asset.json';
import responsiveImage from '@/assets/full-stack-responsive.png.asset.json';
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

const fullStackModules = [
  { title: 'Module 1: Web Foundations and Responsive Design', items: [
    'HTML5 and semantic page structure', 'CSS3, Flexbox, and Grid layouts', 'Bootstrap for rapid UI development', 'Responsive web design principles', 'Building and styling multi-page websites',
  ] },
  { title: 'Module 2: JavaScript Programming', items: [
    'JavaScript fundamentals (variables, functions, loops, arrays, objects)', 'ES6+ features', 'DOM manipulation and event handling', 'Asynchronous JavaScript (Promises, async/await, Fetch API)', 'TypeScript basics (types, interfaces, and type-safe code)', 'Debugging and problem-solving practice',
  ] },
  { title: 'Module 3: Frontend Development with React.js', items: [
    'React components, props, and state', 'Hooks (useState, useEffect)', 'Routing in React applications', 'Forms and API integration', 'Building interactive single-page applications', 'Next.js fundamentals (routing, server-side rendering, and API routes)',
  ] },
  { title: 'Module 4: Databases', items: [
    'Relational database fundamentals with MySQL and PostgreSQL, and SQL queries', 'NoSQL database fundamentals with MongoDB', 'Data modeling and schema design', 'CRUD operations with MongoDB and Mongoose',
  ] },
  { title: 'Module 5: Backend Development and APIs', items: [
    'Node.js fundamentals', 'Express.js server development', 'REST API design and development', 'Testing APIs with Postman', 'Authentication and authorization using JWT', 'Application security basics', 'Building complete MERN stack applications',
  ] },
  { title: 'Module 6: Version Control, Cloud Deployment and DevOps', items: [
    'Git and GitHub for collaborative development', 'Cloud deployment fundamentals with AWS', 'CI/CD workflows with GitHub Actions', 'Docker basics for packaging applications', 'Environment configuration and deployment best practices',
  ] },
  { title: 'Module 7: Generative AI for Developers', items: [
    'Introduction to Generative AI and Large Language Models', 'Python basics for AI development', 'Prompt engineering techniques', 'AI coding tools: ChatGPT, GitHub Copilot, and Cursor', 'Integrating ChatGPT / LLM APIs into web applications', 'Building AI features such as chatbots and smart assistants', 'Retrieval-Augmented Generation (RAG): building a chatbot on your own data', 'Responsible and effective use of AI in development',
  ] },
  { title: 'Module 8: Capstone Project and Job Preparation', items: [
    'Capstone project: a complete full-stack web application with AI features', 'Code review and project presentation', 'GitHub portfolio development', 'Resume and LinkedIn profile building', 'Interview preparation and placement guidance',
  ] },
];

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
                    <Badge variant="outline" className="gap-1.5 border-primary/30 text-primary"><Monitor className="h-3 w-3" />Online Learning</Badge>
                    <Badge variant="outline" className="gap-1.5 border-primary/30 text-primary"><Clock className="h-3 w-3" />{program.duration}</Badge>
                    <Badge variant="outline" className="gap-1.5 border-primary/30 text-primary"><GraduationCap className="h-3 w-3" />Certificate Program</Badge>
                  </div>
                  <h1 className="font-display text-4xl font-bold leading-tight text-foreground xl:text-6xl">
                    Full Stack with<br /><span className="text-primary">Gen AI</span>
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed text-foreground/80">{program.description}</p>
                  <div className="max-w-lg space-y-3 rounded-lg border border-primary/15 bg-card px-6 py-5 shadow-sm">
                    <div className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-medium text-foreground">16 Weeks Duration (Monday to Thursday classes)</span></div>
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
          {isFullStack && (
            <section className="bg-background py-14 md:py-20">
              <div className="container mx-auto px-6 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                  <Badge variant="bsdOrange" className="mb-4 uppercase">Program Overview</Badge>
                  <h2 className="font-display text-3xl font-bold text-foreground">Build Full-Stack Applications with Generative AI</h2>
                  <p className="mt-4 leading-relaxed text-foreground/70">The Full Stack Development with AI is a 16-week career-focused program designed to equip learners with the skills to build, develop and deploy complete web applications integrated with Artificial Intelligence. Covering frontend, backend, databases, cloud deployment and Generative AI, the program focuses on practical, hands-on learning through real-world projects. Students gain experience with modern technologies such as the MERN stack, TypeScript, Next.js and AI-powered development tools, preparing them to build industry-ready applications and transition into professional software development roles.</p>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  {[
                    { icon: Code2, title: 'Full-Stack Foundations', description: 'Build responsive interfaces, develop backend services, and connect databases to create complete web applications.' },
                    { icon: Sparkles, title: 'Generative AI Integration', description: 'Work with Generative AI and LLM APIs to add intelligent, AI-powered features to real-world applications.' },
                    { icon: BriefcaseBusiness, title: 'Projects & Industry Skills', description: 'Apply cloud technologies and hands-on development to build real-world projects and industry-ready skills.' },
                  ].map(({ icon: Icon, title, description }) => (
                    <div key={title} className="rounded-lg bg-secondary px-6 py-7 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
          {isFullStack ? (
            <section className="bg-background pb-14 md:pb-20">
              <div className="container mx-auto grid items-start gap-6 px-6 md:px-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-semibold text-foreground">Program Structure</h2>
                  <p className="mt-4 leading-relaxed text-foreground/70">Eight practical modules across 16 weeks, covering full-stack development, cloud deployment and Generative AI, followed by an AI-powered capstone project.</p>
                  <div className="mt-6 space-y-6">
                    {fullStackModules.map((module, index) => {
                      const Icon = [GraduationCap, BookOpen, Code2][index % 3];
                      return (
                        <div key={module.title}>
                          <h3 className="flex items-start gap-2 font-medium text-foreground">{Icon && <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />}{module.title}</h3>
                          <ul className="mt-3 space-y-2">
                            {module.items.map(item => <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <aside className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                  <h2 className="text-xl font-semibold text-foreground">Capstone Project</h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">Bring your learning together in a complete full-stack web application with AI features, demonstrating your ability to:</p>
                  <ul className="mt-4 space-y-3">
                    {['Build a responsive frontend with React and modern web technologies', 'Develop backend APIs and connect application databases', 'Integrate LLM APIs and AI-powered features', 'Deploy your application using cloud technologies', 'Review your code and present your completed project', 'Showcase your work in a GitHub portfolio'].map(item => <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/80">Your capstone adds a practical project to your portfolio, demonstrating full-stack development and AI integration skills to potential employers.</p>
                </aside>
              </div>
            </section>
          ) : (
          <section className="py-14 md:py-20">
            <div className="container mx-auto grid gap-10 px-6 md:px-8 lg:grid-cols-2">
              {!isFullStack && <div>
                <Badge variant="bsdOrange" className="mb-4">Program Overview</Badge>
                <h2 className="text-3xl font-display font-bold text-foreground">{program.title}</h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">{program.description}</p>
              </div>}
              <div className={isFullStack ? 'lg:col-span-2' : undefined}>
                <h2 className="text-2xl font-display font-bold text-foreground">Areas of Learning</h2>
                <ul className="mt-5 grid gap-4">
                  {program.topics.map(topic => <li key={topic} className="flex items-start gap-3 border-b border-border pb-4 text-foreground/80"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-bsd-orange" />{topic}</li>)}
                </ul>
              </div>
            </div>
          </section>
          )}
          {isFullStack && (
            <>
              <section className="bg-background pb-12 md:pb-16" aria-label="Full Stack course gallery">
                <div className="container mx-auto grid grid-cols-2 gap-4 px-6 md:grid-cols-4 md:px-8">
                  {[
                    { asset: codingImage, alt: 'Developer writing code on a laptop' },
                    { asset: cloudImage, alt: 'Cloud computing and connected database technology' },
                    { asset: aiAppImage, alt: 'AI-powered mobile application and smart assistant' },
                    { asset: responsiveImage, alt: 'Responsive website displayed across desktop, laptop and tablet screens' },
                  ].map(({ asset, alt }) => (
                    <img key={alt} src={new URL(asset.url, 'https://bsdt-new-website.lovable.app').href} alt={alt} loading="lazy" className="aspect-[5/4] w-full rounded-lg object-cover object-center shadow-sm" />
                  ))}
                </div>
              </section>
              <section className="bg-background py-14 md:py-20">
                <div className="container mx-auto px-6 md:px-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <Badge variant="bsdOrange" className="mb-4 uppercase">Programme Schedule</Badge>
                    <h2 className="font-display text-3xl font-bold text-foreground">Focused Learning, Real-World Skills</h2>
                    <p className="mt-4 leading-relaxed text-foreground/70">A 16-week journey from web foundations to a complete AI-powered application.</p>
                  </div>
                  <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
                    {[
                      { icon: Clock, title: '16-Week Duration', description: 'Build practical development skills through a focused, career-oriented program.' },
                      { icon: BookOpen, title: 'Eight Learning Modules', description: 'Progress through frontend, backend, databases, cloud and Generative AI.' },
                      { icon: Monitor, title: 'Online Learning', description: 'Learn online with practical coursework in full-stack development and Generative AI.' },
                    ].map(({ icon: Icon, title, description }) => (
                      <div key={title} className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="bg-muted py-14 md:py-20">
                <div className="container mx-auto px-6 md:px-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <Badge variant="bsdOrange" className="mb-4 uppercase">Programme Highlights</Badge>
                    <h2 className="font-display text-3xl font-bold text-foreground">What Makes This Program Special</h2>
                    <p className="mt-4 leading-relaxed text-foreground/70">Practical development, Generative AI and portfolio-ready projects in one career-focused program.</p>
                  </div>
                  <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      { icon: Clock, title: 'Focused Learning', description: 'Develop full-stack and AI skills through a structured 16-week learning journey.' },
                      { icon: Monitor, title: 'Modern Technology Stack', description: 'Work with React, TypeScript, Next.js, Node.js and databases to build complete applications.' },
                      { icon: Sparkles, title: 'Generative AI Integration', description: 'Use LLM APIs, prompt engineering and RAG to create chatbots and smart assistants.' },
                      { icon: BookOpen, title: 'AI-Powered Development Tools', description: 'Explore ChatGPT, GitHub Copilot and Cursor as part of your development workflow.' },
                      { icon: Code2, title: 'Project-Based Learning', description: 'Apply your learning through hands-on projects and a full-stack, AI-integrated capstone.' },
                      { icon: BriefcaseBusiness, title: 'Career Preparation', description: 'Build your GitHub portfolio, refine your resume and prepare for technical interviews.' },
                    ].map(({ icon: Icon, title, description }) => (
                      <div key={title} className="rounded-lg border border-primary/10 bg-card p-6 shadow-sm">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
          {isFullStack && <EnquiryFormSection />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export const FullStackGenAI = () => <CertificateProgramPage program={fullStack} />;
export const SoftwareTestingQE = () => <CertificateProgramPage program={testing} />;