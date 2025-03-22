
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';
import { Badge } from '@/components/ui/badge';
import { VisitScheduler } from '@/components/admissions/visit/VisitScheduler';

const ScheduleVisit = () => {
  return (
    <>
      <Helmet>
        <title>Schedule a Campus Visit | Bangalore School of Design & Technology</title>
        <meta name="description" content="Schedule a campus visit at Bangalore School of Design & Technology to experience our vibrant learning environment firsthand." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <Badge variant="bsdOrange" className="mb-4">EXPERIENCE BSDT</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-6">Schedule a Campus Visit</h1>
              
              <div className="prose prose-lg max-w-none text-foreground/80 mb-10">
                <p>
                  We believe the best way to experience BSDT is to visit our campus in person. 
                  Our campus tours provide an opportunity to explore our facilities, interact 
                  with faculty members, and get a feel for our vibrant learning environment.
                </p>
                <p>
                  During your visit, you'll have the chance to:
                </p>
                <ul>
                  <li>Tour our state-of-the-art design studios and labs</li>
                  <li>Meet with faculty members and current students</li>
                  <li>Learn about our programs and admission process</li>
                  <li>Experience the BSDT culture firsthand</li>
                  <li>Get answers to your specific questions</li>
                </ul>
              </div>
              
              <VisitScheduler />
            </div>
          </div>
        </RevealSection>
        
        <RevealSection>
          <div className="container mx-auto px-6 py-12 bg-bsd-light-gray rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-bsd-gray mb-4">How to Reach Us</h2>
                <div className="prose prose-lg">
                  <p className="text-foreground/80">
                    Our campus is located in the heart of Bangalore, easily accessible by public transportation.
                  </p>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">Address:</h3>
                    <p className="text-foreground/80">
                      Bangalore School of Design & Technology<br />
                      No. 36/5, Jasma Bhavan Road, Vasanth Nagar<br />
                      Bengaluru, Karnataka 560052
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">Contact:</h3>
                    <p className="text-foreground/80">
                      Phone: <a href="tel:+918026766789" className="text-bsd-orange hover:underline">+91 80 2676 6789</a><br />
                      Email: <a href="mailto:admissions@bsd.edu.in" className="text-bsd-orange hover:underline">admissions@bsd.edu.in</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8252406232064!2d77.59181797512616!3d12.983856914789062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681af279f67%3A0x9c9ed47284cfd80d!2sBangalore%20School%20of%20Design%20(BSD)!5e0!3m2!1sen!2sin!4v1699364271539!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BSDT Campus Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </RevealSection>
        
        {/* Enquiry Form Section */}
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default ScheduleVisit;
