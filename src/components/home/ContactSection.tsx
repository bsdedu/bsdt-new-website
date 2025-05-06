import React, { useEffect, useRef } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const ContactSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const debugTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('[ContactSection] Component mounted');

    // Function to create the iframe URL with current origin
    const createIframeUrl = () => {
      const widgetId = '14fe90258f1849328c9ebb3adc9782bb';
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
      const url = `https://widgets.in5.nopaperforms.com/register?w=${widgetId}&cu=${encodeURIComponent(currentOrigin)}`;
      console.log('[ContactSection] Generated URL:', url);
      return url;
    };

    // Function to handle messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      console.log('[ContactSection] Received postMessage event:', {
        origin: event.origin,
        data: event.data,
        source: event.source ? 'window' : 'unknown'
      });

      if (event.origin === 'https://widgets.in5.nopaperforms.com') {
        console.log('[ContactSection] Valid message from widget:', event.data);
      }
    };

    // Function to check iframe status
    const checkIframeStatus = () => {
      if (iframeRef.current) {
        console.log('[ContactSection] Iframe current status:', {
          src: iframeRef.current.src,
          width: iframeRef.current.offsetWidth,
          height: iframeRef.current.offsetHeight,
          visible: iframeRef.current.style.display !== 'none'
        });

        // Try to detect if iframe content is loaded
        try {
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
          console.log('[ContactSection] Iframe document accessible:', !!iframeDoc);
        } catch (error) {
          console.log('[ContactSection] Cannot access iframe document (expected due to CORS):', error);
        }
      } else {
        console.warn('[ContactSection] Iframe ref is not available');
      }
    };

    // Add message listener
    console.log('[ContactSection] Adding postMessage listener');
    window.addEventListener('message', handleMessage);

    // Update iframe src if ref exists
    if (iframeRef.current) {
      const url = createIframeUrl();
      console.log('[ContactSection] Setting iframe src:', url);
      iframeRef.current.src = url;

      // Add load event listener to iframe
      iframeRef.current.onload = () => {
        console.log('[ContactSection] Iframe onload event fired');
        checkIframeStatus();
      };

      // Add error event listener to iframe
      iframeRef.current.onerror = (error) => {
        console.error('[ContactSection] Iframe loading error:', error);
      };
    } else {
      console.warn('[ContactSection] Iframe ref not available on mount');
    }

    // Set up periodic checks
    debugTimeoutRef.current = setInterval(checkIframeStatus, 5000);

    // Cleanup
    return () => {
      console.log('[ContactSection] Component unmounting');
      window.removeEventListener('message', handleMessage);
      if (debugTimeoutRef.current) {
        clearInterval(debugTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-12 bg-bsd-light-gray relative">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <RevealSection>
          <div className="text-center mb-6">
            <Badge variant="bsdOrange" className="mb-2">
              Get in Touch
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              Contact Us
            </h2>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6">
            {/* Embedded widget */}
            <iframe
              ref={iframeRef}
              style={{ 
                width: '100%', 
                height: '400px', 
                border: 'none',
                backgroundColor: '#f8f9fa',
                visibility: 'visible'
              }}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation allow-downloads"
              title="Enquiry Form"
              onLoad={(e) => {
                console.log('[ContactSection] Iframe onLoad event triggered');
                const iframe = e.target as HTMLIFrameElement;
                if (iframe) {
                  console.log('[ContactSection] Iframe dimensions:', {
                    width: iframe.offsetWidth,
                    height: iframe.offsetHeight
                  });
                  // Try to get contentWindow to check if it's loaded
                  const contentWindow = iframe.contentWindow;
                  if (contentWindow) {
                    console.log('[ContactSection] Content window exists');
                  }
                }
              }}
              onError={(e) => {
                console.error('[ContactSection] Iframe onError event:', e);
                const iframe = e.target as HTMLIFrameElement;
                if (iframe) {
                  console.error('[ContactSection] Iframe src:', iframe.src);
                  // Try to get error details
                  console.error('[ContactSection] Iframe error:', {
                    type: e.type,
                    target: e.target,
                    currentTarget: e.currentTarget
                  });
                }
              }}
              onAbort={(e) => {
                console.error('[ContactSection] Iframe onAbort event:', e);
              }}
              onStalled={(e) => {
                console.error('[ContactSection] Iframe onStalled event:', e);
              }}
            />
            
            {/* 
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-bsd-gray/80">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-bsd-light-gray border-border/30 focus:ring-bsd-orange/20"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-bsd-gray/80">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="bg-bsd-light-gray border-border/30 focus:ring-bsd-orange/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-bsd-gray/80">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    className="bg-bsd-light-gray border-border/30 focus:ring-bsd-orange/20"
                  />
                </div>
                <div>
                  <Label htmlFor="course" className="text-bsd-gray/80">
                    Course Interested
                  </Label>
                  <select
                    id="course"
                    className="flex h-10 w-full rounded-md border border-input bg-bsd-light-gray px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select a course</option>
                    <option value="UG Interior Design">UG Interior Design</option>
                    <option value="UG Fashion Design">UG Fashion Design</option>
                    <option value="P.Diploma Interior Design">P.Diploma Interior Design</option>
                    <option value="P.Diploma Graphic Design">P.Diploma Graphic Design + UI & UX</option>
                    <option value="P.Diploma UI UX">P.Diploma UI & UX</option>
                    <option value="PG.Diploma Landscape Design">PG.Diploma Landscape Design</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-bsd-gray/80">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={3}
                  placeholder="Your message"
                  className="bg-bsd-light-gray border-border/30 focus:ring-bsd-orange/20 resize-none"
                />
              </div>

              <div className="flex justify-center">
                <AnimatedButton type="submit" className="w-full md:w-auto">
                  <span>Send Message</span>
                </AnimatedButton>
              </div>
            </form> 
            */}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
