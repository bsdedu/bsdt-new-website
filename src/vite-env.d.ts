
/// <reference types="vite/client" />

interface Window {
  npf_wgts?: {
    widgetId: string;
    height: string;
    container: string;
    onLoad?: () => void;
    onError?: () => void;
  };
}
