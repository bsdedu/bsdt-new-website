import { Helmet } from 'react-helmet-async';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Info,
  RefreshCw,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { canPublishToCustomDomain, customDomainStatus } from './domainStatus';

const publishingSteps = [
  {
    title: 'Connect the custom domain',
    description: 'Open Project Settings → Project → Domains, choose Connect Domain, and enter bsd.edu.in. You can also start from Publish → Add custom domain.',
  },
  {
    title: 'Add the records shown by Lovable',
    description: 'At your DNS provider, add the exact A and TXT records displayed in the domain setup. Keep your existing MX email records unchanged.',
  },
  {
    title: 'Wait until the domain is Active',
    description: 'DNS changes can take up to 72 hours. Lovable verifies the domain and provisions HTTPS automatically; no repeated publishing is needed while you wait.',
  },
  {
    title: 'Publish future updates',
    description: 'After the domain is Active, use Publish → Update whenever you want new website changes to appear on bsd.edu.in.',
  },
];

const DomainStatus = () => {
  const publishesToCustomDomain = canPublishToCustomDomain(customDomainStatus);
  const canonical = 'https://bsdt-new-website.lovable.app/domain-status';

  return (
    <>
      <Helmet>
        <title>Custom Domain Status | BSDT Website Publishing</title>
        <meta name="description" content="Check whether bsd.edu.in is connected to this website project and learn how to publish updates to the custom domain." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Custom Domain Status | BSDT" />
        <meta property="og:description" content="Connection status and publishing steps for bsd.edu.in." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 md:pt-28">
          <section className="border-b border-border bg-secondary/40">
            <div className="container mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
              <Badge variant="bsdOrange" className="mb-5">Website Publishing</Badge>
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  Custom Domain Status
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  See whether <strong className="font-semibold text-foreground">bsd.edu.in</strong> is connected to this project and what is required before updates can appear there.
                </p>
              </div>
            </div>
          </section>

          <section className="py-10 md:py-14">
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="flex flex-col gap-5 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Globe2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Custom domain</p>
                      <h2 className="mt-1 font-display text-2xl font-bold text-foreground">{customDomainStatus.domain}</h2>
                    </div>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive">
                    <XCircle className="h-4 w-4" />
                    Not connected
                  </div>
                </div>

                <dl className="grid gap-px bg-border sm:grid-cols-2">
                  <div className="bg-card p-6">
                    <dt className="text-sm font-medium text-muted-foreground">Project connection</dt>
                    <dd className="mt-2 font-semibold text-foreground">Not a custom domain on this project</dd>
                  </div>
                  <div className="bg-card p-6">
                    <dt className="text-sm font-medium text-muted-foreground">Current DNS</dt>
                    <dd className="mt-2 font-semibold text-foreground">{customDomainStatus.dnsProvider}</dd>
                  </div>
                  <div className="bg-card p-6">
                    <dt className="text-sm font-medium text-muted-foreground">Updates currently publish to</dt>
                    <dd className="mt-2 break-all font-semibold text-foreground">bsdt-new-website.lovable.app</dd>
                  </div>
                  <div className="bg-card p-6">
                    <dt className="text-sm font-medium text-muted-foreground">Last checked</dt>
                    <dd className="mt-2 flex items-center gap-2 font-semibold text-foreground">
                      <Clock3 className="h-4 w-4 text-primary" />
                      {customDomainStatus.lastChecked}
                    </dd>
                  </div>
                </dl>
              </div>

              {!publishesToCustomDomain && (
                <div className="mt-6 flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">Why updates are not appearing on bsd.edu.in</h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      Publishing this project updates the Lovable website only. It cannot update bsd.edu.in until that domain is connected here and its status is Active.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
                <div>
                  <Badge variant="bsdOrange" className="mb-4">Required Steps</Badge>
                  <h2 className="font-display text-3xl font-bold text-foreground">Publish updates to bsd.edu.in</h2>
                  <ol className="mt-7 space-y-6">
                    {publishingSteps.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          {index + 1}
                        </span>
                        <div className="border-b border-border pb-6">
                          <h3 className="font-semibold text-foreground">{step.title}</h3>
                          <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <aside className="h-fit rounded-xl border border-border bg-secondary/35 p-6">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                  <h2 className="mt-4 font-display text-xl font-bold text-foreground">After connecting</h2>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Wait for the Domains panel to show Active.</li>
                    <li className="flex gap-2"><RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Click Update in the publish dialog for new website changes.</li>
                    <li className="flex gap-2"><Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Open bsd.edu.in in a private window if your browser shows an older version.</li>
                  </ul>
                  <div className="mt-6 space-y-3">
                    <Button asChild className="w-full">
                      <a href="https://docs.lovable.dev/features/custom-domain" target="_blank" rel="noopener noreferrer">
                        Domain setup guide <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={customDomainStatus.lovableUrl} target="_blank" rel="noopener noreferrer">
                        Open published website <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </aside>
              </div>

              <p className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                This is a verified status snapshot, not an automatic live monitor. After changing DNS or connecting the domain, confirm the latest state in Project Settings → Domains.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DomainStatus;
