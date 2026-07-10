import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Briefcase, MapPin, Play } from 'lucide-react';
import thumbnail from '@/assets/residential-hero-thumbnail.jpg';

export const ResidentialProgramHeroStrip: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="relative w-full pt-20 md:pt-24"
      style={{ background: 'linear-gradient(90deg, #000000 0%, #000000 35%, hsl(var(--bsd-orange, 20 95% 50%)) 100%)' }}
      aria-label="Post-Graduate Diploma in Residential Architecture & Design"
    >
      <div className="bg-gradient-to-r from-black via-black/90 to-bsd-orange">
        <div className="container mx-auto px-6 md:px-8 py-10 md:py-14 lg:min-h-[50vh] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center w-full">
            {/* Left: Program info */}
            <div className="text-white flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-medium mb-4 tracking-wide uppercase">
                Post-Graduate Diploma
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Post-Graduate Diploma in Residential Architecture &amp; Design
              </h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Clock, label: '20 Months' },
                  { icon: Briefcase, label: 'Full-Time' },
                  { icon: MapPin, label: 'Bangalore Campus' },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </span>
                ))}
              </div>

              <div>
                <a href="#enquiry-form">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-semibold px-8"
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Video */}
            <div className="w-full">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                {playing ? (
                  <iframe
                    src="https://www.youtube.com/embed/_VCkqNkb-44?autoplay=1"
                    title="BSDT — Design Residence That Can Be Built"
                    className="absolute inset-0 w-full h-full"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 w-full h-full focus:outline-none"
                    aria-label="Play promotional video"
                  >
                    <img
                      src={thumbnail}
                      alt="Ar. Dineshwar S, Founder BSDT — Design Residence That Can Be Built"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
