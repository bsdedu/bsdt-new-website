
# Fixing Custom Domain Not Updating

## Problem Identified
The root domain `bsd.edu.in` (without the "www" prefix) is still showing the old website with "BVA Product Design" in the Programs menu. Meanwhile:
- `www.bsd.edu.in` - Shows the updated Lovable site
- `bsdt-new-website.lovable.app` - Shows the updated Lovable site
- `bsd.edu.in` (no www) - Shows the OLD version with Product Design

## Root Cause
The root domain `bsd.edu.in` is either:
1. Not added as a custom domain in Lovable (only `www.bsd.edu.in` was added)
2. Still pointing to the old hosting provider's server via DNS

## Solution Steps

### Step 1: Check Lovable Domain Settings
1. Go to your Lovable project **Settings > Domains**
2. Look for which domains are connected:
   - If only `www.bsd.edu.in` is listed, you need to add `bsd.edu.in` separately
   - Both domains need to be added to Lovable for both to work

### Step 2: Add Root Domain to Lovable
1. In Settings > Domains, click **Connect Domain**
2. Enter `bsd.edu.in` (without www)
3. Follow the setup instructions
4. Set one domain as **Primary** so the other redirects to it (typically www should redirect to non-www or vice versa)

### Step 3: Update DNS Records
At your DNS provider (GoDaddy, Cloudflare, etc.), ensure:
- **A Record for @ (root)**: Points to `185.158.133.1` (Lovable's IP)
- **A Record for www**: Points to `185.158.133.1`
- **TXT Record for _lovable**: Contains the verification code from Lovable

### Step 4: Clear CDN Cache (if applicable)
If using Cloudflare or another CDN:
1. Log into your CDN dashboard
2. Go to Caching settings
3. Click "Purge Everything"
4. Wait a few minutes and test again

### Step 5: Verify After DNS Propagation
DNS changes can take up to 24-48 hours to propagate globally. Test using:
- [DNSChecker.org](https://dnschecker.org/#A/bsd.edu.in) to verify A record points to 185.158.133.1
- Open `https://bsd.edu.in` in incognito mode to test

## Expected Result
After completing these steps, both `bsd.edu.in` and `www.bsd.edu.in` will serve the updated Lovable website, and "BVA Product Design" will no longer appear in the Programs menu.

## No Code Changes Required
This is purely a DNS/domain configuration issue. The Lovable codebase is already correct - "BVA Product Design" has been successfully removed from the navigation data.
