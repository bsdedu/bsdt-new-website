import React from 'react';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const JoinClubSection: React.FC = () => {
  const faqItems = [
    {
      question: "How do I join a student club?",
      answer: "To join a club, attend the club orientation sessions held at the beginning of each semester or reach out directly to the club coordinators. You can also fill out the interest form on the BSD student portal."
    },
    {
      question: "Can I start a new club?",
      answer: "Yes! Students can propose new clubs by submitting a club proposal form to the Student Activities Office with at least 10 interested members and a faculty advisor. The Student Council reviews proposals quarterly."
    },
    {
      question: "How much time commitment is required?",
      answer: "Time commitment varies by club and your level of involvement. Most clubs meet weekly or bi-weekly for 1-2 hours. Leadership positions typically require additional time for planning and coordination."
    },
    {
      question: "Are there any fees to join clubs?",
      answer: "Most clubs are free to join. Some clubs may collect minimal dues for specific activities or materials. Financial assistance is available for students who need it."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-bsd-gray mb-4">How to Get Involved</h2>
            <p className="text-lg text-gray-600 mb-6">
              Joining a student club is easy and open to all BSD students. Clubs typically recruit 
              new members at the beginning of each semester, but you can reach out anytime!
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Steps to Join:</h3>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                <li>Attend the Club Fair at the beginning of each semester</li>
                <li>Contact club leaders directly through the student portal</li>
                <li>Fill out the club interest form online</li>
                <li>Attend an introductory meeting</li>
              </ol>
            </div>
            
            <AnimatedButton 
              href="https://apply.bsd.edu.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
              hoverEffect="glow"
            >
              Apply to BSD
            </AnimatedButton>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            {/* Existing FAQ Accordion */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* New Video Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Student Clubs Highlights</h3>
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  title="BSD Student Clubs Highlights" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="absolute inset-0 w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
