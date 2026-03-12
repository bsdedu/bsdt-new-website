import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Play, Quote } from 'lucide-react';
import { AlumniSuccessStories } from '@/components/placement/AlumniSuccessStories';
import { TopRecruiters } from '@/components/placement/TopRecruiters';

interface AlumniVideo {
  name: string;
  batch: string;
  program: string;
  currentRole: string;
  company: string;
  videoSrc: string;
  thumbnail: string;
  quote: string;
}

const alumniVideos: AlumniVideo[] = [
  {
    name: "Alumni Name 1",
    batch: "2023",
    program: "B.Sc Interior Design",
    currentRole: "Senior Interior Designer",
    company: "Livspace",
    videoSrc: "/videos/alumni-placeholder-1.mp4",
    thumbnail: "/lovable-uploads/alumni-thumb-placeholder-1.png",
    quote: "BSDT gave me the foundation to turn my passion into a thriving career in design."
  },
  {
    name: "Alumni Name 2",
    batch: "2022",
    program: "BVA Graphic & Communication Design",
    currentRole: "UI/UX Designer",
    company: "Flipkart",
    videoSrc: "/videos/alumni-placeholder-2.mp4",
    thumbnail: "/lovable-uploads/alumni-thumb-placeholder-2.png",
    quote: "The hands-on projects and industry exposure at BSDT prepared me for the real world."
  },
  {
    name: "Alumni Name 3",
    batch: "2023",
    program: "BCA with UI/UX & AI/ML",
    currentRole: "Product Designer",
    company: "Thence",
    videoSrc: "/videos/alumni-placeholder-3.mp4",
    thumbnail: "/lovable-uploads/alumni-thumb-placeholder-3.png",
    quote: "The mentorship and creative environment at BSDT were truly transformative."
  },
  {
    name: "Alumni Name 4",
    batch: "2022",
    program: "BVA Interior & Spatial Design",
    currentRole: "Spatial Designer",
    company: "M Moser Associates",
    videoSrc: "/videos/alumni-placeholder-4.mp4",
    thumbnail: "/lovable-uploads/alumni-thumb-placeholder-4.png",
    quote: "BSDT's curriculum blends creativity with practical skills — exactly what the industry needs."
  },
  {
    name: "Alumni Name 5",
    batch: "2021",
    program: "B.Sc Interior Design",
    currentRole: "Design Lead",
    company: "Bonito Designs",
    videoSrc: "/videos/alumni-placeholder-5.mp4",
    thumbnail: "/lovable-uploads/alumni-thumb-placeholder-5.png",
    quote: "From student projects to leading a design team — BSDT made it all possible."
  },
  {
    name: "Alumni Name 6",
    batch: "2023",
    program: "BVA Graphic & Communication Design",
    currentRole: "Brand Designer",
    company: "Lollypop Design",
    videoSrc: "/videos/alumni-placeholder-6.mp4",
    thumbnail: "/lovable-uploads/alumni-thumb-placeholder-6.png",
    quote: "The creative community at BSDT pushed me to think beyond boundaries."
  }
];

const AlumniStories = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Alumni & Placement Stories | Bangalore School of Design & Technology</title>
        <meta name="description" content="Explore BSDT alumni success stories, placement highlights, top recruiters, and video testimonials from graduates of Bangalore School of Design & Technology." />
        <link rel="canonical" href="https://bsdt.ac.in/alumni-stories" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 z-10" />
            <div className="absolute inset-0 bg-bsd-gray z-0" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center px-6">
                <Badge variant="bsdOrange" className="mb-4">Campus Life</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
                  Alumni & Placement Stories
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                  Discover our graduates' career journeys, placement highlights, and the companies that recruit from BSDT
                </p>
              </div>
            </div>
          </div>

          {/* Alumni Video Testimonials */}
          <RevealSection direction="up" className="py-16 md:py-20">
            <div className="container mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
                  Video Testimonials
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Watch our alumni share their experiences, career journeys, and the impact BSDT had on their professional growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumniVideos.map((alumni, index) => (
                  <div key={index} className="group rounded-2xl overflow-hidden border border-border/50 bg-card shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      {playingIndex === index ? (
                        <video
                          src={alumni.videoSrc}
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                          onEnded={() => setPlayingIndex(null)}
                        />
                      ) : (
                        <button
                          onClick={() => setPlayingIndex(index)}
                          className="w-full h-full relative cursor-pointer"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-bsd-orange/20 to-bsd-gray/30 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 rounded-full bg-bsd-orange/90 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Play className="w-7 h-7 text-white ml-1" />
                              </div>
                              <span className="text-white/80 text-sm font-medium">Watch Testimonial</span>
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-bsd-gray text-lg">{alumni.name}</h3>
                        <Badge variant="outline" className="text-xs bg-bsd-orange/5 text-bsd-orange border-bsd-orange/30">
                          Batch {alumni.batch}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground/60 mb-1">{alumni.program}</p>
                      <p className="text-sm font-medium text-bsd-orange mb-3">
                        {alumni.currentRole} at {alumni.company}
                      </p>
                      <div className="flex items-start gap-2 pt-3 border-t border-border/50">
                        <Quote className="w-4 h-4 text-bsd-orange/50 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/70 italic leading-relaxed">
                          {alumni.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Placement Success Stories */}
          <RevealSection direction="up" className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
                  Placement Success Stories
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Our graduates consistently secure positions at leading companies with competitive packages.
                </p>
              </div>
              <AlumniSuccessStories />
            </div>
          </RevealSection>

          {/* Top Recruiters */}
          <RevealSection direction="up" className="py-16 md:py-20">
            <div className="container mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
                  Top Recruiters
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Leading companies across design, technology, and architecture recruit from BSDT.
                </p>
              </div>
              <TopRecruiters />
            </div>
          </RevealSection>

          {/* CTA Section */}
          <section className="py-16 bg-bsd-orange/5">
            <div className="container mx-auto px-6 md:px-8 text-center">
              <h2 className="text-3xl font-display font-bold text-bsd-gray mb-4">
                Want to Be Our Next Success Story?
              </h2>
              <p className="text-foreground/70 max-w-xl mx-auto mb-8">
                Join BSDT and start your journey towards a rewarding career in design and technology.
              </p>
              <a
                href="/admissions/application-process"
                className="inline-block bg-bsd-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-bsd-orange/90 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AlumniStories;
