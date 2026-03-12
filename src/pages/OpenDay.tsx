import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Building, Presentation, Briefcase, FolderOpen, Network, Mail, Phone, ImageIcon, PlayCircle } from 'lucide-react';
import openDayHero from '@/assets/open-day-hero.jpg';
import openDayOverview from '@/assets/open-day-overview.jpg';

const OpenDay = () => {
  // Placeholder images - replace with actual Open Day 24th Jan images
  const eventPhotos = [
    { id: 1, placeholder: true, label: "Campus Tour" },
    { id: 2, placeholder: true, label: "Faculty Interaction" },
    { id: 3, placeholder: true, label: "Workshop Session" },
    { id: 4, placeholder: true, label: "Student Showcase" },
    { id: 5, placeholder: true, label: "Panel Discussion" },
    { id: 6, placeholder: true, label: "Networking" },
    { id: 7, placeholder: true, label: "Design Lab" },
    { id: 8, placeholder: true, label: "Closing Ceremony" },
  ];

  const eventVideos = [
    { id: 1, placeholder: true, label: "Event Highlights" },
    { id: 2, placeholder: true, label: "Campus Walkthrough" },
    { id: 3, placeholder: true, label: "Student Testimonials" },
  ];

  return <>
    <Helmet>
      <title>Open Day - 24th January 2025 | Bangalore School of Design & Technology</title>
      <meta name="description" content="Relive BSDT's Open Day held on 24th January 2025. Explore photos and videos from campus tours, faculty interactions, workshops, and more." />
    </Helmet>

    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-white py-20 md:py-32 min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${openDayHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl font-medium mb-4 opacity-90">Event Recap</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                OPEN DAY <br />
                <span className="text-bsd-orange">24th January 2025</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-2">
                A day of exploration, inspiration, and connection at BSDT
              </p>
              <p className="text-base md:text-lg opacity-75">
                <MapPin className="inline w-4 h-4 mr-1" /> Bangalore School of Design and Technology
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={openDayOverview} 
                  alt="Students and visitors at BSDT Open Day on 24th January 2025" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-bsd-orange mb-6">
                  Open Day 2025 Recap
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  On 24th January 2025, BSDT opened its doors to prospective students and their families for a memorable Open Day experience. Visitors explored our state-of-the-art campus, engaged with faculty and mentors, and got a firsthand look at our diverse design programs.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The event featured campus tours, live workshops, student work showcases, career guidance sessions, and interactive demos across all our design disciplines. It was a day filled with inspiration, creativity, and meaningful connections.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Scroll down to relive the highlights through our photo and video gallery from the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Event Gallery
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Highlights from Open Day — 24th January 2025
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {eventPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-muted border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center gap-3 hover:border-bsd-orange/40 transition-colors"
                >
                  <ImageIcon className="w-10 h-10 text-muted-foreground/40" />
                  <span className="text-sm text-muted-foreground/60 font-medium">{photo.label}</span>
                  <span className="text-xs text-muted-foreground/40">Upload image</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Event Videos
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Watch the best moments from the day
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {eventVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="aspect-video rounded-xl overflow-hidden bg-muted border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center gap-3 hover:border-bsd-orange/40 transition-colors"
                >
                  <PlayCircle className="w-12 h-12 text-muted-foreground/40" />
                  <span className="text-sm text-muted-foreground/60 font-medium">{video.label}</span>
                  <span className="text-xs text-muted-foreground/40">Upload video</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Happened Section */}
        <section className="py-16 md:py-24 bg-bsd-orange">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              What Happened at Open Day
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-amber-100 rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <Building className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Campus & Studio Tours</h3>
                    <p className="text-gray-700 text-lg">
                      Visitors explored our classrooms, labs, and creative studios firsthand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <Presentation className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Live Workshops & Demos</h3>
                    <p className="text-gray-700 text-lg">
                      Hands-on sessions across design and technology disciplines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <Users className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Faculty & Mentor Interactions</h3>
                    <p className="text-gray-700 text-lg">
                      Attendees engaged directly with educators and industry mentors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <Briefcase className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Career & Portfolio Guidance</h3>
                    <p className="text-gray-700 text-lg">
                      Personalized advice on careers and building strong portfolios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <FolderOpen className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Student Work Showcases</h3>
                    <p className="text-gray-700 text-lg">
                      Portfolios, projects, and real student outcomes on display.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <Network className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Peer Networking</h3>
                    <p className="text-gray-700 text-lg">
                      Future classmates and like-minded creators connected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Open Day CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't Miss the Next Open Day
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Register to be notified about our upcoming Open Day events and be the first to secure your spot.
            </p>
            <Button size="lg" className="bg-bsd-orange text-white hover:bg-bsd-orange/90 font-semibold px-8 py-6 text-lg" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJHlSTNhMYjU9ulXi8JiPPJQW1Jw-C_JiUe7WGiIHIOpKe3Q/viewform" target="_blank" rel="noopener noreferrer">Register Interest</a>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions? Reach out to our admissions team.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="mailto:admissions@bsd.edu.in" className="flex items-center justify-center gap-3 text-bsd-orange hover:underline">
                  <Mail className="w-5 h-5" />
                  admissions@bsd.edu.in
                </a>
                <a href="tel:+919019006066" className="flex items-center justify-center gap-3 text-bsd-orange hover:underline">
                  <Phone className="w-5 h-5" />
                  +91 90190 06066
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  </>;
};
export default OpenDay;
