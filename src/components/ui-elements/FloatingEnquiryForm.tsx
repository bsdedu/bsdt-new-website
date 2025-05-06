
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
      script.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
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
          onError: function(error) {
            console.error('[FloatingEnquiryForm] NoPaper Forms widget failed to load', error);
            setIsWidgetLoaded(false);
          }
        };
      };
      
      script.onerror = (error) => {
        console.error('[FloatingEnquiryForm] Error loading NopaperForms script:', error);
        setIsScriptLoading(false);
      };
      script.onerror = (error) => console.error('[FloatingEnquiryForm] Error loading NopaperForms script:', error);
      document.body.appendChild(script);
      
      // Check widget container status before script loads
      const container = document.getElementById('npf_widget_container');
      console.log('[FloatingEnquiryForm] Widget container status before script loads:', {
        exists: !!container,
        container: container?.innerHTML || 'Empty'
      });
      
      window.npf_wgts = {
        widgetId: 'adff9b077808c1fcb8e77a017693b6b9',
        height: '400px',
        container: 'npf_widget_container',
        onLoad: function() {
          console.log('[FloatingEnquiryForm] NoPaper Forms widget loaded successfully');
          console.log('[FloatingEnquiryForm] Widget container after load:', {
            exists: !!container,
            container: container?.innerHTML || 'Empty'
          });
        },
        onError: function(error) {
          console.error('[FloatingEnquiryForm] NoPaper Forms widget failed to load', error);
        }
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
              {isScriptLoading ? 'Loading enquiry form...' : 
               isWidgetLoaded ? '' : 
               'Enquiry form failed to load'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
