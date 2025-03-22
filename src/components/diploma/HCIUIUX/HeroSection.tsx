
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Clock, Calendar, Award } from "lucide-react";
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-bsd-light-gray to-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="bsdOrange" className="mb-2">Professional Diploma Program</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-bsd-gray">
              Professional Diploma in<br />
              <span className="text-bsd-orange">HCI for UI/UX</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              A specialized program teaching human-computer interaction principles and methodologies for creating intuitive, user-centered digital interfaces and experiences.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-bsd-orange mr-2" />
                <span className="text-bsd-gray font-medium">6 Months Duration</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-bsd-orange mr-2" />
                <span className="text-bsd-gray font-medium">Intakes: Jan & July</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-bsd-orange mr-2" />
                <span className="text-bsd-gray font-medium">Professional Certificate Recognised by BSDT</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-bsd-orange hover:bg-bsd-orange/90 text-white">
                Download Brochure
              </Button>
              <a 
                href="https://apply.bsd.edu.in/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                  Apply Now
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-bsd-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bsd-orange/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-bsd-orange/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-bsd-orange/10 rounded-bl-[100px]"></div>
              <div className="p-6">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" 
                    alt="HCI for UI/UX Diploma" 
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                
                <div className="flex justify-center -mt-6">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <div className="bg-bsd-orange/10 rounded-full p-3">
                      <Monitor className="w-8 h-8 text-bsd-orange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
