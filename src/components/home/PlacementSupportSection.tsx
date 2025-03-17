
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Handshake, Trophy, UserCheck } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui-elements/Card";

interface SupportFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SupportFeature: React.FC<SupportFeatureProps> = ({
  icon,
  title,
  description
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      isHoverable 
      className={`h-full transition-all duration-500 ${isHovered ? 'shadow-lg shadow-bsd-orange/10 -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${isHovered ? 'bg-bsd-orange text-white' : 'bg-bsd-orange/10'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 transition-all duration-500 ${isHovered ? 'text-bsd-orange' : 'text-bsd-gray'}`}>
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export const PlacementSupportSection: React.FC = () => {
  const supportFeatures = [
    {
      icon: <Briefcase className="w-6 h-6 text-bsd-orange" />,
      title: "Dedicated Career Cell",
      description: "Our in-house placement team works year-round to secure the best opportunities for students and alumni."
    },
    {
      icon: <Handshake className="w-6 h-6 text-bsd-orange" />,
      title: "Industry Partnerships",
      description: "Exclusive tie-ups with 200+ top companies ensure priority access to internships and job openings."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-bsd-orange" />,
      title: "Career Coaching",
      description: "Personalized guidance, portfolio development, and interview preparation throughout your career journey."
    },
    {
      icon: <Trophy className="w-6 h-6 text-bsd-orange" />,
      title: "Skill Enhancement",
      description: "Free lifetime access to workshops and certificate courses to help you stay industry-relevant."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-bsd-orange" />,
      title: "Alumni Network",
      description: "Join our thriving community of professionals for mentorship, referrals, and collaborative opportunities."
    }
  ];

  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "₹6.8L", label: "Average Starting Package" },
    { value: "200+", label: "Recruiting Companies" },
    { value: "15+", label: "Years of Support" }
  ];

  return (
    <section id="placement-support" className="bg-white relative overflow-hidden py-[30px]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-bsd-orange/5 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-bsd-gray/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <RevealSection scale={true} duration={900} easing="ease-in-out">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">Lifetime Support</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray mb-4">
              Your Career Success Is Our Priority
            </h2>
            <p className="text-foreground/70">
              At BSDT, our commitment to your professional growth extends well beyond graduation with our Lifetime Placements Support.
            </p>
          </div>
        </RevealSection>

        {/* Stats Section */}
        <RevealSection delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <RevealSection key={index} delay={index * 100} direction="up" distance={20}>
                <div className="text-center p-4 rounded-lg transition-all duration-500 hover:bg-white hover:shadow-md transform hover:-translate-y-1 border border-border/30">
                  <div className="text-3xl font-display font-bold text-bsd-orange">{stat.value}</div>
                  <div className="text-sm text-bsd-gray mt-2">{stat.label}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </RevealSection>

        {/* Features Grid */}
        <RevealSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {supportFeatures.map((feature, index) => (
              <RevealSection key={index} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'} distance={30}>
                <SupportFeature 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description} 
                />
              </RevealSection>
            ))}
          </div>
        </RevealSection>

        {/* Success Stories */}
        <RevealSection delay={300} scale={true}>
          <div className="bg-bsd-light-gray rounded-2xl p-8 shadow-sm border border-border/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Badge variant="bsdOrange" className="mb-3">Alumni Success</Badge>
                <h3 className="text-2xl font-display font-bold text-bsd-gray mb-4">Our Graduates Excel Globally</h3>
                <p className="text-foreground/70 mb-4">
                  Our alumni are making waves in leading organizations across the globe, from design studios to tech giants and creative agencies.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Adobe", "Google", "Accenture", "Microsoft", "Infosys", "TCS", "Wipro"].map((company, idx) => (
                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-bsd-gray border border-border/50">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-border/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-bsd-orange/10 rounded-full flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Priya Sharma</h4>
                      <p className="text-xs text-bsd-gray">UI/UX Designer, Google</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    "The career support from BSDT was exceptional. Even 3 years after graduation, they helped me secure my dream job at Google."
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-border/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-bsd-orange/10 rounded-full flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Vikram Mehta</h4>
                      <p className="text-xs text-bsd-gray">Interior Designer, Studio XYZ</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    "From portfolio workshops to interview preparation, BSDT's placement team went above and beyond to ensure my career success."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
