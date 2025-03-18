
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
              <span className="text-bsd-orange">UI/UX Design</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              Master the art of creating intuitive digital experiences through user-centered design methodologies and industry-standard tools and practices.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-bsd-orange mr-2" />
                <span className="text-bsd-gray font-medium">1 Year Duration</span>
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
              <Link to="/admissions/application-process">
                <Button size="lg" variant="outline" className="border-bsd-orange text-bsd-orange hover:bg-bsd-orange/10">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-bsd-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bsd-orange/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-bsd-orange/10">
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lnSHer4HfQY"
                  title="UI/UX Design Program Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
    </section>
  );
};
