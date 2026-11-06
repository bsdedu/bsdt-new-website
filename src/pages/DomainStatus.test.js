import { describe, expect, test } from 'bun:test';
import { canPublishToCustomDomain, customDomainStatus } from './domainStatus';

describe('custom domain publishing status', () => {
  test('marks bsd.edu.in as not connected to this project', () => {
    expect(customDomainStatus.domain).toBe('bsd.edu.in');
    expect(customDomainStatus.connected).toBe(false);
  });

  test('does not allow custom-domain publishing while the domain is not connected', () => {
    expect(canPublishToCustomDomain(customDomainStatus)).toBe(false);
  });

  test('allows custom-domain publishing only when the domain is connected and active', () => {
    expect(canPublishToCustomDomain({ connected: true, active: false })).toBe(false);
    expect(canPublishToCustomDomain({ connected: true, active: true })).toBe(true);
  });
});
