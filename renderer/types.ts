// renderer/types.ts
import type {
    PageContextBuiltInClientWithServerRouting,
    PageContextBuiltInServer
  } from 'vike/types';
  
  export type PageProps = Record<string, unknown>; // adjust as needed
  
  export type PageContextServer = PageContextBuiltInServer & {
    Page: (pageProps: PageProps) => React.ReactElement;
    pageProps?: PageProps;
    urlPathname: string;
  };
  
  export type PageContextClient = PageContextBuiltInClientWithServerRouting & {
    Page: (pageProps: PageProps) => React.ReactElement;
    pageProps?: PageProps;
    urlPathname: string;
  };
  