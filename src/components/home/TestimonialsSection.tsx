
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "../ui-elements/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  videoId: string;
}

export const testimonials: Testimonial[] = [{
  id: "5",
  name: "Ambika Bharadwaj",
  course: "2nd Semester Dual Bachelors Interior Architecture",
  videoId: "NPUpGuVxiyQ"
}, {
  id: "6",
  name: "Rose Tanwar",
  course: "2nd Semester B.Sc Interior Design",
  videoId: "DVcocyw-FBI"
}, {
  id: "7",
  name: "Sahana B.S.",
  course: "B.Sc Final Year Interior Design",
  videoId: "4E7edmlMGRU"
}, {
  id: "1",
  name: "Radhika",
  course: "Professional Diploma in LD",
  videoId: "tNYpgfevzwc"
}, {
  id: "2",
  name: "Monika",
  course: "Professional Diploma in Interior Design",
  videoId: "Vxo4Sbdbx_8"
}, {
  id: "3",
  name: "Ojo",
  course: "BVA Interior Spatial Design",
  videoId: "LvDmudablZI"
}, {
  id: "4",
  name: "Suhas",
  course: "BVA Interior Spatial Design",
  videoId: "nVuZT2jaaNM"
}];

export const TestimonialsSection: React.FC = () => {
  return <section id="testimonials" className="bg-white py-[30px]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-8">
            <Badge variant="bsdOrange" className="mb-2">
              Student Voices
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              What Our Students Say
            </h2>
            <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
              Hear directly from our students about their experiences, achievements, and journey at Bangalore School of Design & Technology.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map(testimonial => <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full">
                    <div className="p-4">
                      <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${testimonial.videoId}`} title={`${testimonial.name}'s testimonial`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="border-0"></iframe>
                      </div>
                      <h3 className="font-semibold text-xl text-bsd-gray">{testimonial.name}</h3>
                      <p className="text-bsd-gray/70">{testimonial.course}</p>
                    </div>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-white border-bsd-orange/30 hover:bg-bsd-orange/10" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-white border-bsd-orange/30 hover:bg-bsd-orange/10" />
            </div>
          </Carousel>
        </RevealSection>
      </div>
    </section>;
};
