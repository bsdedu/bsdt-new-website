import React, { useEffect, useRef } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const ContactSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to create the iframe URL with current origin
    const createIframeUrl = () => {
      const widgetId = '14fe90258f1849328c9ebb3adc9782bb';
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
      return `https://widgets.in5.nopaperforms.com/register?w=${widgetId}&cu=${encodeURIComponent(currentOrigin)}`;
    };

    // Function to handle messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://widgets.in5.nopaperforms.com') {
        console.log('Received message from widget:', event.data);
      }
    };

    // Add message listener
    window.addEventListener('message', handleMessage);

    // Update iframe src if ref exists
    if (iframeRef.current) {
      iframeRef.current.src = createIframeUrl();
    }

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
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
              style={{ width: '100%', height: '400px', border: 'none' }}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
              title="Enquiry Form"
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
