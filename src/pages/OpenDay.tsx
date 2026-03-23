import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, BookOpen, Building, MessageCircle, Mail, Phone, Presentation, Briefcase, FolderOpen, Network } from 'lucide-react';
import openDayHero from '@/assets/open-day-hero.jpg';
import openDayOverview from '@/assets/open-day-overview.jpg';

const OpenDay = () => {
  return <>
      <Helmet>
        <title>Open Day 2026 | Bangalore School of Design & Technology</title>
        <meta name="description" content="Join us for the next BSDT Open Day. Tour our campus, meet faculty, explore design programs and discover opportunities at Bangalore's premier design school." />
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
                <p className="text-lg md:text-xl font-medium mb-4 opacity-90">Unique Opportunity</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  EXPLORE... <br />
                  <span className="text-white">OPEN DAY</span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold mb-4">
                  April 18th, 2026
                </p>
                <p className="text-lg md:text-xl opacity-90 mb-8">VENUE : Bangalore School of Design and Technology</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-bsd-orange text-white hover:bg-bsd-orange/90 font-semibold px-8 py-6 text-lg" asChild>
                    <a href="https://forms.gle/BHq58msTt4XNdsHA7" target="_blank" rel="noopener noreferrer">Register Now</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg" onClick={() => {
                    const overview = document.getElementById('open-day-overview');
                    if (overview) overview.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Explore More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section id="open-day-overview" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={openDayOverview} 
                    alt="Student viewing design projects at BSDT Open Day" 
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-bsd-orange mb-6">
                    Open Day 2026
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We are delighted to announce our upcoming Open Day Event on April 18th, 2026! This special occasion is designed for prospective students and their families, providing a unique opportunity to explore all that BSDT has to offer.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    During the Open Day, attendees will have the chance to tour our campus, engage with faculty and staff, and gain valuable insights into our diverse range of design programs. Participants will also learn about our commitment to academic excellence, student support services, and the vibrant community life that defines BSDT.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We encourage you to join us for this enriching experience, where you can ask questions, gather information, and envision your future with us. We look forward to welcoming you and helping you discover the many opportunities that await at BSDT.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Open Days Rewind Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
                Open Days Rewind
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Highlights from our previous Open Day events
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {([
                  { year: "2018", image: "/lovable-uploads/0ae77c0c-8ef4-404c-abf0-bb90598dfbf4.png" },
                  { year: "2019", image: "/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png" },
                  { year: "2020", image: "/lovable-uploads/fc9c4875-4b4b-44a9-b8ad-3eb5db1ed2cc.png" },
                  { year: "2023", image: "/lovable-uploads/0ae77c0c-8ef4-404c-abf0-bb90598dfbf4.png" },
                  { year: "2025 (24th Jan)", image: "", video: "/videos/open-day-2025.mp4" },
                ] as { year: string; image: string; video?: string }[]).map((event) => (
                  <div key={event.year} className="rounded-xl overflow-hidden shadow-lg">
                    {event.video ? (
                      <video
                        src={event.video}
                        controls
                        className="w-full aspect-video object-cover"
                        poster={event.image}
                      />
                    ) : (
                      <img
                        src={event.image}
                        alt={`Open Day ${event.year}`}
                        className="w-full aspect-video object-cover"
                      />
                    )}
                    <div className="bg-background p-3">
                      <p className="font-semibold text-foreground">Open Day {event.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-bsd-orange">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                What to Expect
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Campus and Studio Tours */}
                <div className="bg-amber-100 rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <Building className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Campus and Studio Tours</h3>
                      <p className="text-gray-700 text-lg">
                        Step inside real classrooms, labs, and creative studios.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Workshops & Demos */}
                <div className="bg-amber-100 rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <Presentation className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Live Workshops & Demos</h3>
                      <p className="text-gray-700 text-lg">
                        Experience hands-on sessions across design and technology.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Faculty & Mentor Interactions */}
                <div className="bg-amber-100 rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <Users className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Faculty & Mentor Interactions</h3>
                      <p className="text-gray-700 text-lg">
                        Engage directly with educators and industry mentors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Career & Portfolio Guidance */}
                <div className="bg-amber-100 rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <Briefcase className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Career & Portfolio Guidance</h3>
                      <p className="text-gray-700 text-lg">
                        Get clarity on careers and building a strong portfolio.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Student Work Showcases */}
                <div className="bg-amber-100 rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <FolderOpen className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Student Work Showcases</h3>
                      <p className="text-gray-700 text-lg">
                        Explore portfolios, projects, and real student outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Peer Networking */}
                <div className="bg-amber-100 rounded-2xl p-8">
                  <div className="flex items-start gap-5">
                    <Network className="w-12 h-12 text-bsd-orange flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Peer Networking</h3>
                      <p className="text-gray-700 text-lg">
                        Meet future classmates and like-minded creators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Attend Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                  Why Attend
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                    <div className="w-10 h-10 bg-bsd-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Clarity Before Choosing</h3>
                      <p className="text-muted-foreground">
                        Get a complete understanding of our programs, faculty, and campus environment before making your decision.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                    <div className="w-10 h-10 bg-bsd-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Early Career Decision</h3>
                      <p className="text-muted-foreground">
                        Take the first step towards your design career with expert guidance and personalized counseling.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                    <div className="w-10 h-10 bg-bsd-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Scholarships and Fee Guidance</h3>
                      <p className="text-muted-foreground">
                        Learn about available scholarships, fee structures, and financial assistance options for your education.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                    <div className="w-10 h-10 bg-bsd-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">On Spot Admission and Early Bird Benefits</h3>
                      <p className="text-muted-foreground">
                        Avail exclusive early bird discounts and complete your admission process on the same day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Registration CTA Section */}
          <section className="py-16 md:py-24 bg-bsd-orange">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Register Now
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                We look forward to welcoming you to our Open Day event and helping you take the first step toward a bright future in design. Join us and discover the opportunities that await you at BSDT!
              </p>
              <Button size="lg" className="bg-white text-bsd-orange hover:bg-white/90 font-semibold px-8 py-6 text-lg" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJHlSTNhMYjU9ulXi8JiPPJQW1Jw-C_JiUe7WGiIHIOpKe3Q/viewform" target="_blank" rel="noopener noreferrer">Register for Open Day</a>
              </Button>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-8">
                  If you have any questions or need further information, please feel free to reach out to our admissions team.
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

                <div className="mt-12 p-6 bg-muted/30 rounded-xl">
                   <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-bsd-orange" />
                      <span>April 18th, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-bsd-orange" />
                      <span>Bangalore School of Design and Technology</span>
                    </div>
                  </div>
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