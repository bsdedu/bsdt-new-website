import React, { useEffect, useRef } from 'react';
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

export const FloatingEnquiryForm = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Ref for the form container
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const debugTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('[FloatingEnquiryForm] Component mounted');

    // Function to create the iframe URL with current origin
    const createIframeUrl = () => {
      const widgetId = 'adff9b077808c1fcb8e77a017693b6b9';
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
      const url = `https://widgets.in5.nopaperforms.com/register?w=${widgetId}&cu=${encodeURIComponent(currentOrigin)}`;
      console.log('[FloatingEnquiryForm] Generated URL:', url);
      return url;
    };

    // Function to handle messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      console.log('[FloatingEnquiryForm] Received postMessage event:', {
        origin: event.origin,
        data: event.data,
        source: event.source ? 'window' : 'unknown'
      });

      if (event.origin === 'https://widgets.in5.nopaperforms.com') {
        console.log('[FloatingEnquiryForm] Valid message from widget:', event.data);
      }
    };

    // Function to check iframe status
    const checkIframeStatus = () => {
      if (iframeRef.current) {
        console.log('[FloatingEnquiryForm] Iframe current status:', {
          src: iframeRef.current.src,
          width: iframeRef.current.offsetWidth,
          height: iframeRef.current.offsetHeight,
          visible: iframeRef.current.style.display !== 'none',
          expanded: isExpanded
        });

        // Try to detect if iframe content is loaded
        try {
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
          console.log('[FloatingEnquiryForm] Iframe document accessible:', !!iframeDoc);
        } catch (error) {
          console.log('[FloatingEnquiryForm] Cannot access iframe document (expected due to CORS):', error);
        }
      } else {
        console.warn('[FloatingEnquiryForm] Iframe ref is not available');
      }
    };

    // Add message listener
    console.log('[FloatingEnquiryForm] Adding postMessage listener');
    window.addEventListener('message', handleMessage);

    // Update iframe src if ref exists
    if (iframeRef.current) {
      const url = createIframeUrl();
      console.log('[FloatingEnquiryForm] Setting iframe src:', url);
      iframeRef.current.src = url;

      // Add load event listener to iframe
      iframeRef.current.onload = () => {
        console.log('[FloatingEnquiryForm] Iframe onload event fired');
        checkIframeStatus();
      };

      // Add error event listener to iframe
      iframeRef.current.onerror = (error) => {
        console.error('[FloatingEnquiryForm] Iframe loading error:', error);
      };
    } else {
      console.warn('[FloatingEnquiryForm] Iframe ref not available on mount');
    }

    // Set up periodic checks
    debugTimeoutRef.current = setInterval(checkIframeStatus, 5000);

    // Cleanup
    return () => {
      console.log('[FloatingEnquiryForm] Component unmounting');
      window.removeEventListener('message', handleMessage);
      if (debugTimeoutRef.current) {
        clearInterval(debugTimeoutRef.current);
      }
    };
  }, [isExpanded]); // Added isExpanded to dependencies

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsExpanded(false); // Close the form if clicked outside
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Thanks for your enquiry!",
      description: "We'll get back to you soon.",
    });
    form.reset();
    setIsExpanded(false);
  };

  return (
    <div className={cn(
      "fixed right-0 top-1/2 -translate-y-1/2 z-[99999]", // Ensure it remains fixed
      isExpanded ? "translate-x-0" : "translate-x-[calc(100%-2rem)]"
    )}
    ref={formRef} // Attach ref to the form container
    >
      <div className="relative flex items-start">
        {/* Trigger button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "bg-bsd-orange text-white px-2 py-4 rounded-l-lg writing-vertical transform rotate-180 whitespace-nowrap text-sm",
            "hover:bg-bsd-orange/90 transition-colors flex items-center gap-1"
          )}
          style={{ writingMode: 'vertical-rl', position: 'fixed', top: '50%', transform: 'translateY(-50%)' }} // Ensure button stays fixed
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
          "bg-white p-6 shadow-lg w-80 border-l border-t border-b border-gray-200",
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none",
          "fixed top-1/2 transform -translate-y-1/2 right-0" // Ensure form stays fixed
        )}>
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            ✕
          </button>
          <h3 className="text-lg font-semibold text-bsd-gray mb-4">Quick Enquiry</h3>
          <iframe
            ref={iframeRef}
            style={{ 
              width: '100%', 
              height: '400px', 
              border: 'none',
              backgroundColor: '#f8f9fa', // Light background to see if iframe is rendered
              opacity: isExpanded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            title="Quick Enquiry Form"
            onLoad={() => console.log('[FloatingEnquiryForm] Iframe onLoad event triggered')}
            onError={(e) => console.error('[FloatingEnquiryForm] Iframe onError event:', e)}
          />
        </div>
      </div>
    </div>
  );
};
