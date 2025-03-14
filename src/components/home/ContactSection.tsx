
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
                  <AnimatedButton type="submit" className="w-full">
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
                    content="No.4/3, Opposite B.D.S Nagar, Devanna Compound, K.Narayanapura, Kothanur Post, Bangalore – 560077"
                  />
                  <ContactInfoItem
                    icon={<Phone className="w-5 h-5 text-bsd-orange" />}
                    title="Phone"
                    content="+91 9620202871 | +91 9845779000"
                    link="tel:+919620202871"
                  />
                  <ContactInfoItem
                    icon={<Mail className="w-5 h-5 text-bsd-orange" />}
                    title="Email"
                    content="enquiry@bsd.edu.in | admissions@bsd.edu.in"
                    link="mailto:enquiry@bsd.edu.in"
                  />
                  <ContactInfoItem
                    icon={<Clock className="w-5 h-5 text-bsd-orange" />}
                    title="Office Hours"
                    content="Monday—Saturday: 9:00AM – 5:00PM"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-8">
                <h3 className="text-xl font-semibold mb-6 text-bsd-gray">Campus Map</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.531860116302!2d77.64088777532129!3d13.065443187258602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19fca05a7085%3A0x32d325d7452e1509!2sBangalore%20School%20of%20Design%20%26%20Technology!5e0!3m2!1sen!2sin!4v1741951831100!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BSDT Campus Map"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-6">
                  <a
                    href="https://goo.gl/maps/HEWypUEL8RdSy61u6"
                    target="_blank"
                    rel="noopener noreferrer"
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
