
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-bsd-light-gray relative">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <RevealSection>
          <div className="text-center mb-8">
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

              <div>
                <Label htmlFor="subject" className="text-bsd-gray/80">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="bg-bsd-light-gray border-border/30 focus:ring-bsd-orange/20"
                />
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

              <AnimatedButton type="submit" className="w-full md:w-auto md:float-right flex items-center">
                <span>Send Message</span>
                <Send className="h-4 w-4 ml-2" />
              </AnimatedButton>
            </form>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
