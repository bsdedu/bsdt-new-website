
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { X, MessageSquare } from "lucide-react";

export const FloatingEnquiryForm = () => {
  console.log('[FloatingEnquiryForm] Component initialized');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScriptLoading, setIsScriptLoading] = useState(false);
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const { toast } = useToast();
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  // Load the NopaperForms script when the component is expanded
  useEffect(() => {
    console.log('[FloatingEnquiryForm] useEffect triggered', { isExpanded, scriptLoaded: scriptLoadedRef.current });
    if (isExpanded && !scriptLoadedRef.current) {
      setIsScriptLoading(true);
      
      // Create and append script only once when expanded
      console.log('[FloatingEnquiryForm] Creating and appending NopaperForms script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.crossOrigin = 'anonymous'; // Add CORS handling
      script.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
      
      // Add security headers
      script.setAttribute('data-nonce', Math.random().toString(36).substring(2));
      script.setAttribute('data-csp-nonce', Math.random().toString(36).substring(2));
      
      // Add request headers
      script.setAttribute('data-request-headers', JSON.stringify({
        'Accept': 'application/javascript',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'X-Requested-With': 'XMLHttpRequest'
      }));
      
      // Add CORS headers
      script.setAttribute('data-cors-headers', JSON.stringify({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-CSRF-Token, Authorization'
      }));

      // Set up script error handling
      script.onerror = (event) => {
        setRetryCount(prev => prev + 1);
        console.error(`[FloatingEnquiryForm] Attempt ${retryCount} - Error loading NopaperForms script:`, event);
        
        if (retryCount < maxRetries) {
          console.log(`[FloatingEnquiryForm] Retrying script load (attempt ${retryCount}/${maxRetries})`);
          setTimeout(() => {
            // Create new script element for retry
            const newScript = document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.async = true;
            newScript.crossOrigin = 'anonymous';
            newScript.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
            
            // Copy headers
            newScript.setAttribute('data-nonce', Math.random().toString(36).substring(2));
            newScript.setAttribute('data-csp-nonce', Math.random().toString(36).substring(2));
            newScript.setAttribute('data-request-headers', script.getAttribute('data-request-headers') || '');
            newScript.setAttribute('data-cors-headers', script.getAttribute('data-cors-headers') || '');
            
            // Set up handlers
            newScript.onload = () => {
              console.log('[FloatingEnquiryForm] NopaperForms script loaded successfully');
              scriptLoadedRef.current = true;
              setIsScriptLoading(false);
              
              // Set the global configuration for NopaperForms after script loads
              console.log('[FloatingEnquiryForm] Setting NopaperForms configuration after script loads');
              window.npf_wgts = {
                widgetId: 'adff9b077808c1fcb8e77a017693b6b9',
                height: '400px',
                container: 'npf_widget_container',
                onLoad: function() {
                  console.log('[FloatingEnquiryForm] NoPaper Forms widget loaded successfully');
                  setIsWidgetLoaded(true);
                  console.log('[FloatingEnquiryForm] Widget container after load:', {
                    exists: !!container,
                    container: container?.innerHTML || 'Empty'
                  });
                },
                onError: function() {
                  console.error('[FloatingEnquiryForm] NoPaper Forms widget failed to load');
                  setIsWidgetLoaded(false);
                }
              };
            };
            
            newScript.onerror = script.onerror;
            document.body.appendChild(newScript);
          }, 1000 * retryCount); // Exponential backoff
        } else {
          console.error('[FloatingEnquiryForm] Maximum retries reached. Failed to load script.');
          setIsScriptLoading(false);
        }
      };

      // Set up initial load
      script.onload = () => {
        console.log('[FloatingEnquiryForm] NopaperForms script loaded successfully');
        scriptLoadedRef.current = true;
        setIsScriptLoading(false);
        
        // Set the global configuration for NopaperForms after script loads
        console.log('[FloatingEnquiryForm] Setting NopaperForms configuration after script loads');
        window.npf_wgts = {
          widgetId: 'adff9b077808c1fcb8e77a017693b6b9',
          height: '400px',
          container: 'npf_widget_container',
          onLoad: function() {
            console.log('[FloatingEnquiryForm] NoPaper Forms widget loaded successfully');
            setIsWidgetLoaded(true);
            console.log('[FloatingEnquiryForm] Widget container after load:', {
              exists: !!container,
              container: container?.innerHTML || 'Empty'
            });
          },
          onError: function() {
            console.error('[FloatingEnquiryForm] NoPaper Forms widget failed to load');
            setIsWidgetLoaded(false);
          }
        };
      };

      document.body.appendChild(script);
      
      // Check widget container status before script loads
      const container = document.getElementById('npf_widget_container');
      console.log('[FloatingEnquiryForm] Widget container status before script loads:', {
        exists: !!container,
        container: container?.innerHTML || 'Empty'
      });

      script.onload = function() {
        console.log('[FloatingEnquiryForm] NoPaper Forms widget script loaded successfully');
      };
      script.onerror = function(error) {
        console.error('[FloatingEnquiryForm] NoPaper Forms widget failed to load', error);
      };
      
      scriptLoadedRef.current = true;
    }
  }, [isExpanded]);

  // Cleanup script on unmount
  useEffect(() => {
    return () => {
      const script = document.querySelector('script[src="https://widgets.in5.nopaperforms.com/emwgts.js"]');
      if (script) {
        document.body.removeChild(script);
        console.log('[FloatingEnquiryForm] Removed NopaperForms script on unmount');
      }
    };
  }, []);

  const onSubmit = () => {
    toast({
      title: "Thanks for your enquiry!",
      description: "We'll get back to you soon.",
    });
    setIsExpanded(false);
  };

  return (
    <div className={cn(
      "fixed right-0 top-1/2 -translate-y-1/2 z-[99999]",
      isExpanded ? "translate-x-0" : "translate-x-[calc(100%-2rem)]"
    )}>
      <div className="relative flex items-start">
        {/* Trigger button */}
        <button
          onClick={() => {
            console.log('[FloatingEnquiryForm] Trigger button clicked');
            setIsExpanded(!isExpanded);
          }}
          className={cn(
            "bg-bsd-orange text-white px-2 py-4 rounded-l-lg writing-vertical transform rotate-180 whitespace-nowrap text-sm sticky top-0",
            "hover:bg-bsd-orange/90 transition-colors flex items-center gap-1"
          )}
          style={{ writingMode: 'vertical-rl' }}
        >
          {isExpanded ? (
            <>
              <X className="w-3 h-3" />
              Close
            </>
          ) : (
            <>
              <MessageSquare className="w-3 h-3" />
              Enquire Now
            </>
          )}
        </button>

        {/* Form panel */}
        <div className={cn(
          "bg-white p-6 shadow-lg w-80 border-l border-t border-b border-gray-200 sticky top-0",
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <h3 className="text-lg font-semibold text-bsd-gray mb-4">Quick Enquiry</h3>
          
          {/* NopaperForms Direct Integration */}
          <div 
            id="npf_widget_container"
            ref={widgetContainerRef}
            className="npf_wgts" 
            data-height="400px" 
            data-w="adff9b077808c1fcb8e77a017693b6b9"
          >
            {/* Fallback content */}
            <div className="text-center py-4">
              {isScriptLoading ? `Loading enquiry form... (Attempt ${retryCount + 1}/${maxRetries})` : 
               isWidgetLoaded ? '' : 
               'Enquiry form failed to load'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
