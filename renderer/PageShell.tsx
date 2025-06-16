// renderer/PageShell.tsx
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import "../src/index.css";
import type { PageContext } from "./types";

const queryClient = new QueryClient();

export function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  const isServer = typeof window === "undefined";
  const Router = isServer ? StaticRouter : BrowserRouter;
  const routerProps = isServer ? { location: pageContext.urlPathname } : {};

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router {...routerProps}>{children}</Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
