
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TreeDeciduous } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-bsd-light-gray to-white pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-bsd-gray">
              Professional Post Graduate Diploma in<br />
              <span className="text-bsd-orange">Landscape Design</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              A 12-month hybrid program blending live online classes with offline, real-world learning at our Bangalore campus or Satellite Partner Centres in Raipur, Hyderabad, Delhi & Coimbatore.
            </p>
            
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#enquiry-form">
                <Button size="lg" className="bg-bsd-orange hover:bg-bsd-orange/90 text-white">
                  Download Brochure
                </Button>
              </a>
              <a 
                href="https://futrschool.edmingle.com/course/LandscapeDesign-94776" 
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
                    src="/lovable-uploads/dd02c43d-99c4-4a35-aa9a-6aa1a661758d.png" 
                    alt="Landscape Design Drawing" 
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                
                <div className="flex justify-center -mt-6">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <div className="bg-bsd-orange/10 rounded-full p-3">
                      <TreeDeciduous className="w-8 h-8 text-bsd-orange" />
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
