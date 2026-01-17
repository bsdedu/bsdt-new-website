import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, BookOpen, Building, MessageCircle, Mail, Phone, Presentation, Briefcase, FolderOpen, Network } from 'lucide-react';
import openDayHero from '@/assets/open-day-hero.jpg';
import openDayOverview from '@/assets/open-day-overview.jpg';
import openDay2018 from '@/assets/open-day-2018.mp4';
import openDay2019 from '@/assets/open-day-2019.mp4';
import openDay2020 from '@/assets/open-day-2020.mp4';
import openDay2023 from '@/assets/open-day-2023.mp4';

const OpenDay = () => {
  return <>
      <Helmet>
        <title>Open Day 2026 | Bangalore School of Design & Technology</title>
        <meta name="description" content="Join us for BSDT Open Day on 5th February 2026. Tour our campus, meet faculty, explore design programs and discover opportunities at Bangalore's premier design school." />
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
                  Saturday, 24th January 2026
                </p>
                <p className="text-lg md:text-xl opacity-90">VENUE : Bangalore School of Design and Technology</p>
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
                    alt="Student viewing design projects at BSDT Open Day" 
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-bsd-orange mb-6">
                    Open Day 2026
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We are delighted to announce our upcoming Open Day Event, scheduled for Saturday, 24th January 2026. This special occasion is designed for prospective students and their families, providing a unique opportunity to explore all that BSDT has to offer.
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
                Relive the excitement from our previous Open Day events
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Open Day 2018 */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <video 
                    src={openDay2018} 
                    controls 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="bg-background p-3">
                    <p className="font-semibold text-foreground">Open Day 2018</p>
                  </div>
                </div>
                {/* Open Day 2019 */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <video 
                    src={openDay2019} 
                    controls 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="bg-background p-3">
                    <p className="font-semibold text-foreground">Open Day 2019</p>
                  </div>
                </div>
                {/* Open Day 2020 */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <video 
                    src={openDay2020} 
                    controls 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="bg-background p-3">
                    <p className="font-semibold text-foreground">Open Day 2020</p>
                  </div>
                </div>
                {/* Open Day 2023 */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <video 
                    src={openDay2023} 
                    controls 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="bg-background p-3">
                    <p className="font-semibold text-foreground">Open Day 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-bsd-orange">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Why Attend
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

          {/* Highlights Section */}
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
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Explore Your Interests</h3>
                      <p className="text-muted-foreground">
                        Discover the wide range of academic programs and majors we offer to help you pursue your passions and career goals in design and technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                    <div className="w-10 h-10 bg-bsd-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Experience Campus Life</h3>
                      <p className="text-muted-foreground">
                        Picture yourself as a student on our campus. Explore the facilities and resources available to support your academic journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                    <div className="w-10 h-10 bg-bsd-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Get Personalized Advice</h3>
                      <p className="text-muted-foreground">
                        Whether you're a high school student or looking to upskill, our experts will be here to provide tailored guidance for your design career.
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
                <a href="https://forms.gle/eBseES87FVJ3u1tx8" target="_blank" rel="noopener noreferrer">Register for Open Day</a>
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
                      <span>Saturday, 24th January 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-bsd-orange" />
                      <span>10:00 AM - 4:00 PM</span>
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