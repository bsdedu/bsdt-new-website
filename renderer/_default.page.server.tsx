// renderer/_default.page.server.tsx
export { render };

import React from "react";
import { renderToString } from "react-dom/server";
import { PageShell } from "./PageShell";
import type { PageContextServer } from "./types";

function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...(pageProps || {})} />
    </PageShell>
  );

  return {
    documentHtml: `<!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div id="root">${pageHtml}</div>
        </body>
      </html>`
  };
}
