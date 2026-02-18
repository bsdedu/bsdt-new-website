

# Replace Quiz Webhook with Make.com

## Overview
Switch the quiz lead capture from the Google Apps Script webhook to the Make.com webhook, and simplify the submission code.

## Changes

### File: `src/pages/DesignIQQuiz.tsx`

**1. Update webhook URL (line 143)**
Change from the Google Apps Script URL to:
`https://hook.us2.make.com/7x7wia78fz83y3qvwbw9dho61gfq22jr`

**2. Replace `sendToSheet` function (lines 192-216)**
Remove the hidden iframe/form workaround (which was needed for Google Apps Script CORS/redirect issues) and replace with a simple `fetch` POST request. Make.com webhooks accept standard JSON with proper CORS support:

```typescript
const sendToSheet = async (payload: Record<string, unknown>) => {
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Webhook send failed:", err);
  }
};
```

That's it -- two changes in one file. The payload structure (name, email, phone, result, scores, timestamp) remains identical.

## Make.com Setup Required
In your Make.com scenario, connect the webhook to a "Google Sheets: Add a Row" module and map the incoming JSON fields (name, email, phone, result, timestamp, scores) to your spreadsheet columns.

