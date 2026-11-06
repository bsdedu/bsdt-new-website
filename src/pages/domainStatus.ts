export type CustomDomainStatus = {
  domain: string;
  connected: boolean;
  active: boolean;
  dnsProvider: string;
  lastChecked: string;
  lovableUrl: string;
};

export const customDomainStatus: CustomDomainStatus = {
  domain: 'bsd.edu.in',
  connected: false,
  active: false,
  dnsProvider: 'Vercel nameservers observed',
  lastChecked: '6 November 2026 · 07:19 UTC',
  lovableUrl: 'https://bsdt-new-website.lovable.app',
};

export function canPublishToCustomDomain(status: Pick<CustomDomainStatus, 'connected' | 'active'>) {
  return status.connected && status.active;
}
