interface WidgetConfig {
  w: string;
  h: string;
}

let scriptLoaded = false;
let scriptLoading = false;
const widgetConfigs: WidgetConfig[] = [];

export const initializeWidget = (config: WidgetConfig): () => void => {
  // Add config to the global array
  if (!(window as any).npf_d) {
    (window as any).npf_d = [];
  }
  (window as any).npf_d.push(config);
  widgetConfigs.push(config);

  // Load script if not already loaded
  if (!scriptLoaded && !scriptLoading) {
    scriptLoading = true;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
    script.id = 'nopaperforms-widget-script';
    
    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
    };

    script.onerror = () => {
      scriptLoading = false;
      console.error('Failed to load NoPaper Forms widget script');
    };

    document.body.appendChild(script);
  }

  // Return cleanup function
  return () => {
    if ((window as any).npf_d) {
      (window as any).npf_d = (window as any).npf_d.filter((c: WidgetConfig) => c !== config);
    }
    const index = widgetConfigs.indexOf(config);
    if (index > -1) {
      widgetConfigs.splice(index, 1);
    }

    // Only remove the script if no widgets are using it
    if (widgetConfigs.length === 0 && scriptLoaded) {
      const script = document.getElementById('nopaperforms-widget-script');
      if (script) {
        document.body.removeChild(script);
        scriptLoaded = false;
      }
    }
  };
};
