
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { FAQSection } from '@/components/admissions/faq/FAQSection';
import { FAQChatbot } from '@/components/admissions/faq/FAQChatbot';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const FAQs = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Bangalore School of Design & Technology</title>
        <meta name="description" content="Find answers to frequently asked questions about admissions, programs, fees, campus life, and more at Bangalore School of Design & Technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <RevealSection>
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-bsd-gray mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-foreground/80 mb-8">
                Find answers to common questions about BSDT programs, admissions, fees, campus life, and more. 
                If you can't find what you're looking for, try our AI assistant or contact our admissions team.
              </p>
              
              {/* FAQ Section with categorized questions */}
              <FAQSection />
              
              {/* AI Chatbot */}
              <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-bold text-bsd-gray mb-4">Still Have Questions?</h2>
                <p className="text-foreground/80 mb-6">
                  Our AI assistant can help answer your specific questions about BSDT. 
                  Try asking about our programs, admission process, fees, scholarships, or campus facilities.
                </p>
                
                <FAQChatbot />
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

export default FAQs;
