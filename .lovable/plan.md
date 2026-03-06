

## Problem Analysis

The current code uses a `MutationObserver` that checks if NPF DOM elements are **removed** from the page. However, NoPaperForms doesn't remove its elements from the DOM when the popup closes — it just **hides** them (e.g., `display: none` or `visibility: hidden`). So the condition `popupSeen && !anyNpfEl` never fires, and the user returns to the hero page.

## Solution

Replace the DOM-removal detection with **visibility-based detection**:

1. **In the MutationObserver callback**, instead of checking if NPF elements exist, check if the popup overlay is **visible** (using `offsetParent`, `display`, `opacity`, or `visibility` CSS checks).

2. **Flow**:
   - When NPF popup appears and is visible → mark `popupSeen = true`
   - When NPF popup element still exists but is now **hidden** → trigger `setStep("quiz")`

3. **Concrete check**: Query for NPF overlay elements, then check computed style or inline style for `display: none`, `visibility: hidden`, or `offsetParent === null`.

4. **Simplify** the overly complex detection code — remove the redundant `checkPopupClosed` interval and iframe URL polling since they don't contribute. Keep only the MutationObserver with visibility checks.

## Key Code Change (lines 360-374)

```typescript
let popupSeen = false;
const observer = new MutationObserver(() => {
  const anyNpfEl = document.querySelector(
    '[class*="npf_wg"], [id*="npf"], [class*="npfW"], .npf_popup_overlay'
  ) as HTMLElement | null;
  
  if (anyNpfEl) {
    // Check if it's actually visible
    const style = window.getComputedStyle(anyNpfEl);
    const isVisible = style.display !== 'none' && 
                      style.visibility !== 'hidden' && 
                      style.opacity !== '0' &&
                      anyNpfEl.offsetParent !== null;
    
    if (isVisible) {
      popupSeen = true;
    }
    
    // Was visible before, now hidden = popup closed after interaction
    if (popupSeen && !isVisible) {
      cleanup();
      setStep("quiz");
    }
  }
  
  // Element fully removed (fallback)
  if (popupSeen && !anyNpfEl) {
    cleanup();
    setStep("quiz");
  }
});
```

This covers both scenarios: element hidden via CSS **or** removed from DOM.

