
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-bsd-light-gray relative">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="bsdOrange" className="mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
              Contact Us
            </h2>
            <p className="mt-4 text-foreground/70">
              Have questions about our programs or admissions? We're here to help you take the next step in your educational journey.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <RevealSection direction="right">
            <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-8">
              <h3 className="text-xl font-semibold mb-6 text-bsd-gray">Send Us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-bsd-gray/80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-bsd-light-gray border border-border/30",
                        "focus:outline-none focus:ring-2 focus:ring-bsd-orange/20 focus:border-transparent",
                        "transition-all duration-200"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-bsd-gray/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-bsd-light-gray border border-border/30",
                        "focus:outline-none focus:ring-2 focus:ring-bsd-orange/20 focus:border-transparent",
                        "transition-all duration-200"
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-bsd-gray/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help you?"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-bsd-light-gray border border-border/30",
                      "focus:outline-none focus:ring-2 focus:ring-bsd-orange/20 focus:border-transparent",
                      "transition-all duration-200"
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-bsd-gray/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-bsd-light-gray border border-border/30",
                      "focus:outline-none focus:ring-2 focus:ring-bsd-orange/20 focus:border-transparent",
                      "transition-all duration-200 resize-none"
                    )}
                  ></textarea>
                </div>

                <div>
                  <AnimatedButton type="submit" className="w-full" withArrow>
                    Send Message
                  </AnimatedButton>
                </div>
              </form>
            </div>
          </RevealSection>

          {/* Contact Information */}
          <RevealSection direction="left">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-8">
                <h3 className="text-xl font-semibold mb-6 text-bsd-gray">Contact Information</h3>
                <div className="space-y-6">
                  <ContactInfoItem
                    icon={<MapPin className="w-5 h-5 text-bsd-orange" />}
                    title="Address"
                    content="123 Design Street, Tech City, 123456, India"
                  />
                  <ContactInfoItem
                    icon={<Phone className="w-5 h-5 text-bsd-orange" />}
                    title="Phone"
                    content="+91 98765 43210"
                    link="tel:+919876543210"
                  />
                  <ContactInfoItem
                    icon={<Mail className="w-5 h-5 text-bsd-orange" />}
                    title="Email"
                    content="info@bsd.edu.in"
                    link="mailto:info@bsd.edu.in"
                  />
                  <ContactInfoItem
                    icon={<Clock className="w-5 h-5 text-bsd-orange" />}
                    title="Office Hours"
                    content="Monday - Friday: 9AM - 5PM"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-8">
                <h3 className="text-xl font-semibold mb-6 text-bsd-gray">Campus Map</h3>
                <div className="aspect-video bg-bsd-light-gray rounded-lg flex items-center justify-center">
                  <p className="text-sm text-bsd-gray/60">
                    Map Placeholder
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-medium inline-flex items-center text-bsd-orange hover:text-bsd-orange/80 transition-colors"
                  >
                    <span className="border-b border-current transition-all duration-300 hover:pb-1">
                      View Directions
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content, link }) => {
  const ContentComponent = link ? 'a' : 'p';
  const linkProps = link ? { href: link } : {};

  return (
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 rounded-full bg-bsd-light-gray flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-bsd-gray/70">{title}</h4>
        <ContentComponent
          {...linkProps}
          className={cn(
            "text-foreground mt-1",
            link && "hover:text-bsd-orange transition-colors"
          )}
        >
          {content}
        </ContentComponent>
      </div>
    </div>
  );
};
