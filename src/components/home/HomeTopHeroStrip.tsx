import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Briefcase, MapPin, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import videoThumb from '@/assets/pgd-residential-video-thumb.jpg';

export const HomeTopHeroStrip: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/admissions/application-process');
  };

  return (
    <section className="w-full bg-bsd-light-gray border-b border-black/5">
      <div className="container mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[420px] md:min-h-[480px]">
          {/* Left: Program info */}
          <div className="flex flex-col justify-center space-y-5 pt-6 md:pt-10 lg:pt-14">
            <span className="inline-block w-fit px-3 py-1 bg-bsd-orange/10 text-bsd-orange text-xs font-semibold tracking-wider rounded-full uppercase">
              Post-Graduate Diploma
            </span>

            <h2 className="text-[1.35rem] md:text-[1.7rem] lg:text-[2.1rem] font-display font-bold text-bsd-gray leading-tight">
              Post-Graduate Diploma in{' '}
              <span className="text-bsd-orange">Residential Architecture &amp; Design</span>
            </h2>

            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/10 rounded-full text-sm text-bsd-gray shadow-sm">
                <Clock className="w-4 h-4 text-bsd-orange" />
                20 Months
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/10 rounded-full text-sm text-bsd-gray shadow-sm">
                <Briefcase className="w-4 h-4 text-bsd-orange" />
                Full-Time
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/10 rounded-full text-sm text-bsd-gray shadow-sm">
                <MapPin className="w-4 h-4 text-bsd-orange" />
                Bangalore Campus
              </span>
            </div>

            <div className="pt-2">
              <Button
                size="lg"
                onClick={handleApplyClick}
                className="bg-bsd-orange hover:bg-bsd-orange/90 text-white font-semibold px-8"
              >
                Apply Now
              </Button>
            </div>
          </div>

          {/* Right: Video */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
              {playing ? (
                <iframe
                  src="https://www.youtube.com/embed/_VCkqNkb-44?autoplay=1&playsinline=1&rel=0"
                  title="BSDT Founder — Residential Architecture & Design"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 w-full h-full cursor-pointer"
                  aria-label="Play promotional video"
                >
                  <img
                    src={videoThumb}
                    alt="Post-Graduate Diploma in Residential Architecture & Design — Founder message"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bsd-orange/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-0.5" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopHeroStrip;
