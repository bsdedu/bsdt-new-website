
# Investigation Complete: Custom Domain Serving Stale Content

## Problem Confirmed
After investigating, I've confirmed:
- **Source code is correct**: `navData.ts` does NOT contain "BVA Product Design"
- **Lovable preview is correct**: `bsdt-new-website.lovable.app` shows the updated navigation (no Product Design)
- **Custom domain is stale**: `www.bsd.edu.in` is serving an older version with "BVA Product Design" in the Programs menu

This is not a code issue - the source code has been fixed correctly. The problem is that the **custom domain is not serving the latest published build**.

## Root Cause Analysis
There are three possible causes:

### 1. Project Not Re-Published After Code Changes (Most Likely)
When code changes are made in Lovable, they are deployed to the preview automatically, but the **published site requires clicking "Update"** in the publish dialog. If this wasn't done after removing "BVA Product Design", the custom domain will still serve the old version.

### 2. CDN/Proxy Caching (If Using Cloudflare)
If the domain is behind Cloudflare (orange cloud enabled), cached JavaScript files could be serving stale navigation data.

### 3. DNS Misconfiguration
The root domain `bsd.edu.in` may be pointing somewhere different than `www.bsd.edu.in`.

## Solution Steps

### Step 1: Re-Publish the Project
1. In Lovable, click the **"Publish"** button (top-right corner)
2. Click **"Update"** to push the latest code to production
3. Wait 1-2 minutes for deployment to complete

### Step 2: Verify Both Domains Are Connected
1. Go to **Settings > Domains** in Lovable
2. Ensure both `bsd.edu.in` AND `www.bsd.edu.in` are listed and show "Active" status
3. If only one is listed, add the other using "Connect Domain"

### Step 3: If Using Cloudflare - Purge Cache
1. Log into Cloudflare dashboard
2. Select the `bsd.edu.in` domain
3. Go to **Caching > Configuration**
4. Click **"Purge Everything"**
5. Wait 2-3 minutes and test again in incognito mode

### Step 4: Verify DNS Records
Ensure both domains point to Lovable's IP (`185.158.133.1`):
- **A Record for @**: `185.158.133.1`
- **A Record for www**: `185.158.133.1`

Use [DNSChecker.org](https://dnschecker.org/#A/bsd.edu.in) to verify.

## Expected Outcome
After re-publishing and purging any CDN cache, `www.bsd.edu.in` will show the same navigation as `bsdt-new-website.lovable.app` - with "BVA Product Design" removed from the Programs menu.

## Technical Details
The navigation structure is defined in `src/components/layout/navbar/navData.ts`. Current UG Degree Programs in the source:
1. B.Sc Interior Design
2. BVA Graphic & Communication Design
3. BVA Interior & Spatial Design
4. BVA Animation & Game Design
5. BCA with UI/UX & AI/ML
6. BCA with Data Analytics & Cyber Security

"BVA Product Design" was removed from this file and a 410 status code was added in `vercel.json` for the old URL.
