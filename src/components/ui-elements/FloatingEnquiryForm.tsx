import { useEffect, useState } from 'react';

export const FloatingEnquiryForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [widgetInitialized, setWidgetInitialized] = useState(false);

  useEffect(() => {
    // Add CSP meta tag to head dynamically
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = "Content-Security-Policy";
    cspMeta.content = "frame-src https://widgets.in5.nopaperforms.com https://*.nopaperforms.com; script-src 'self' https://widgets.in5.nopaperforms.com";
    document.head.appendChild(cspMeta);

    return () => {
      document.head.removeChild(cspMeta);
    };
  }, []);

  useEffect(() => {
    if (isExpanded && !widgetInitialized) {
      const existingWidget = document.querySelector('.npf_wgts');
      if (existingWidget) return;

      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'npf_wgts';
      widgetDiv.setAttribute('data-height', '400px');
      widgetDiv.setAttribute('data-w', '14fe90258f1849328c9ebb3adc9782bb');
      
      const container = document.getElementById('widget-container');
      if (container) {
        container.appendChild(widgetDiv);

        const script = document.createElement('script');
        script.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
        script.async = true;
        script.onload = () => setWidgetInitialized(true);
        document.body.appendChild(script);
      }

      return () => {
        if (widgetDiv.parentNode) {
          widgetDiv.parentNode.removeChild(widgetDiv);
        }
      };
    }
  }, [isExpanded, widgetInitialized]);

  return (
    <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 ${
      isExpanded ? 'translate-x-0' : 'translate-x-[calc(100%-2rem)]'
    }`}>
      {/* Your toggle button */}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Close' : 'Enquire Now'}
      </button>

      {/* Widget container */}
      {isExpanded && (
        <div className="bg-white p-4 w-80 shadow-lg">
          <h3>Quick Enquiry</h3>
          <div id="widget-container" className="min-h-[400px]">
            {!widgetInitialized && <p>Loading form...</p>}
          </div>
        </div>
      )}
    </div>
  );
};