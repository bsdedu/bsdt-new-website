
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position, company, image }) => {
  return (
    <Card className="border-0 shadow-sm h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mb-6">
          <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bsd-orange/20">
            <path d="M13.0909 36C8.89091 36 5.53636 34.5 3.02727 31.5C1.00909 28.5 0 24.75 0 20.25C0 15 1.51364 10.5 4.54091 6.75C7.56818 3 12.0818 0.75 18.0818 0L20.5909 6.75C17.0636 7.5 14.5545 9 13.0909 11.25C11.6273 13.5 11.1227 15.75 11.6273 18C12.1318 18 12.8879 18 13.8468 18C16.8742 18 19.3833 18.75 21.3742 20.25C23.3652 21.75 24.3606 24 24.3606 27C24.3606 30 23.3652 32.25 21.3742 33.75C19.3833 35.25 16.6224 36 13.0909 36ZM36.9091 36C32.7091 36 29.3545 34.5 26.8455 31.5C24.8545 28.5 23.8591 24.75 23.8591 20.25C23.8591 15 25.3727 10.5 28.4 6.75C31.4273 3 35.9409 0.75 41.9409 0L44.45 6.75C40.9227 7.5 38.4136 9 36.95 11.25C35.4864 13.5 34.9818 15.75 35.4864 18C35.9909 18 36.747 18 37.7059 18C40.7333 18 43.2424 18.75 45.2333 20.25C47.2242 21.75 48.2197 24 48.2197 27C48.2197 30 47.2242 32.25 45.2333 33.75C43.2424 35.25 40.4994 36 36.9909 36H36.9091Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-foreground/70 text-lg italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-bsd-gray">{name}</h4>
            <p className="text-sm text-foreground/70">{position}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const StudioTestimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Working at Studio BSD was transformative for my career. I collaborated with real clients on impactful projects while still studying, which gave me a substantial portfolio and professional connections that helped me secure a position at a leading design agency immediately after graduation.",
      name: "Priya Sharma",
      position: "UX Designer",
      company: "DesignFlex Studios",
      image: "/lovable-uploads/8b983b3f-fd59-44d3-b5cc-152eeffe62cd.png"
    },
    {
      quote: "The experience I gained at Studio BSD was invaluable. Working alongside industry professionals on real-world projects gave me insights that classroom learning alone could never provide. The mentorship I received shaped my design thinking and professional approach.",
      name: "Karthik Menon",
      position: "Interior Designer",
      company: "Spaces Architecture",
      image: "/lovable-uploads/938cccc7-6337-481e-861d-5cedb08cafd7.png"
    },
    {
      quote: "As an industry partner who regularly collaborates with Studio BSD, I've been consistently impressed by the professionalism and creativity of the students. The studio bridges education and industry in a way I haven't seen elsewhere, producing graduates who are truly job-ready.",
      name: "Rajan Mehta",
      position: "Creative Director",
      company: "InnovateX Digital",
      image: "/lovable-uploads/15af7636-fa32-410b-9b74-b4e58b0fa90b.png"
    },
    {
      quote: "Having my architectural design concepts implemented through Studio BSD was an experience that solidified my career path. The guidance from faculty mentors combined with client feedback loops taught me how to translate creative vision into practical, buildable solutions.",
      name: "Aisha Patel",
      position: "Architectural Designer",
      company: "Urban Habitat Architects",
      image: "/lovable-uploads/8c654396-817b-41ba-9b58-67f6362d40ca.png"
    }
  ];

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">SUCCESS STORIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Voices from Studio BSD
            </h2>
            <p className="mt-4 text-foreground/70">
              Hear from our alumni and industry partners about the transformative impact of the Studio BSD experience on careers and businesses.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-4" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </RevealSection>
      </div>
    </section>
  );
};
