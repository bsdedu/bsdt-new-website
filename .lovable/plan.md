

## Add Microsoft Clarity Analytics

This plan adds Microsoft Clarity session recording and heatmap analytics to your website.

---

### What is Microsoft Clarity?

Microsoft Clarity is a free analytics tool that provides:
- Session recordings (see how users interact with your site)
- Heatmaps (see where users click and scroll)
- Insights about user behavior and frustration signals

---

### Implementation

The Clarity tracking code will be added alongside your existing Google Analytics and Google Tag Manager scripts in the `<Helmet>` section of `src/App.tsx`.

**File to modify:** `src/App.tsx`

Add the following script block inside the existing `<Helmet>` component:

```jsx
{/* Microsoft Clarity */}
<script type="text/javascript">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "v4wk9p6byf");
  `}
</script>
```

---

### After Implementation

1. **Publish the website** to make Clarity active on your live site
2. **Visit your Clarity dashboard** at [clarity.microsoft.com](https://clarity.microsoft.com) to see recordings and heatmaps
3. Data will start appearing within a few hours of the first visitor

---

### Technical Notes

- Your Clarity Project ID: `v4wk9p6byf`
- The script loads asynchronously, so it won't slow down your page
- Works alongside your existing Google Analytics tracking

