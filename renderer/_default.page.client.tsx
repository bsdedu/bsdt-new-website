import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageShell } from './PageShell';

export { render };

async function render(pageContext: any) {
  const { Page, pageProps } = pageContext;

  const container = document.getElementById('root')!;
  const root = ReactDOM.hydrateRoot(container, (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  ));
  
  
}
