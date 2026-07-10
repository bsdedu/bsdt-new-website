import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Briefcase, MapPin } from 'lucide-react';
import thumbnail from '@/assets/pgd-residential-thumbnail.jpg';

export const PGDResidentialHero: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-bsd-light-gray pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col justify-center max-w-[560px]">
            <Badge variant="bsdOrange" className="w-fit mb-6">POST-GRADUATE DIPLOMA</Badge>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.35rem] leading-tight mb-7">
              <span className="text-bsd-gray">Post-Graduate Diploma in</span>{' '}
              <span className="text-bsd-orange">Residential Architecture &amp; Design</span>
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/60 text-sm font-medium text-bsd-gray shadow-sm">
                <Clock className="w-4 h-4 text-bsd-orange" /> 20 Months
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/60 text-sm font-medium text-bsd-gray shadow-sm">
                <Briefcase className="w-4 h-4 text-bsd-orange" /> Full-Time
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/60 text-sm font-medium text-bsd-gray shadow-sm">
                <MapPin className="w-4 h-4 text-bsd-orange" /> Bangalore Campus
              </span>
            </div>

            <div>
              <Button
                size="lg"
                className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-8"
                onClick={() => { window.location.href = 'https://apply.bsd.edu.in/'; }}
              >
                Apply Now
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full flex items-center justify-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-border/40 bg-black">
              {playing ? (
                <iframe
                  src="https://www.youtube.com/embed/_VCkqNkb-44?autoplay=1&playsinline=1&rel=0"
                  title="BSDT Residential Architecture & Design"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="absolute inset-0 w-full h-full p-0 m-0 border-0 cursor-pointer"
                >
                  <img
                    src={thumbnail}
                    alt="Post-Graduate Diploma in Residential Architecture & Design"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
