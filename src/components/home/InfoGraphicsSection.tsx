
import React, { useState } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Building, 
  PieChart, 
  BarChart4, 
  Globe, 
  TrendingUp,
  Briefcase
} from "lucide-react";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { Card, CardContent } from "../ui-elements/Card";
import CountUp from '../ui-elements/CountUp';

export const InfoGraphicsSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  // Stats to display
  const stats = [
    { label: 'Years of Excellence', value: 30, icon: <Award className="w-6 h-6 text-bsd-orange" />, suffix: '+' },
    { label: 'Students Enrolled', value: 500, icon: <Users className="w-6 h-6 text-bsd-orange" />, suffix: '+' },
    { label: 'Placement Rate', value: 92, icon: <Briefcase className="w-6 h-6 text-bsd-orange" />, suffix: '%' },
    { label: 'Industry Partners', value: 50, icon: <Building className="w-6 h-6 text-bsd-orange" />, suffix: '+' },
  ];

  // Career opportunity data
  const careerData = [
    { field: 'UX/UI Design', growth: 85, color: 'bg-bsd-orange' },
    { field: 'Interior Design', growth: 72, color: 'bg-bsd-gray' },
    { field: 'Game Design', growth: 78, color: 'bg-bsd-orange/80' },
    { field: 'Architectural Design', growth: 65, color: 'bg-bsd-gray/90' },
    { field: 'Graphic Design', growth: 70, color: 'bg-bsd-orange/60' },
  ];

  return (
    <section id="insights" className="py-[30px]">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="bsdOrange" className="mb-4">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-bsd-gray">
              Making a Difference in Design Education
            </h2>
            <p className="mt-4 text-foreground/70">
              Our achievements reflect our commitment to excellence in design education and student success.
            </p>
          </div>
        </RevealSection>

        {/* Key Stats Section */}
        <RevealSection delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center py-6 border-bsd-orange/10 hover:border-bsd-orange/30 transition-all duration-500"
                isHoverable
              >
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-bsd-gray mb-2 flex items-center justify-center">
                    <CountUp end={stat.value} duration={2.5} /> 
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-sm md:text-base text-foreground/70">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>

        {/* Career Opportunities Section */}
        <RevealSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-bsd-gray">
                Career Growth in Design Fields
              </h3>
              <p className="text-foreground/70 mb-6">
                The design industry is experiencing rapid growth, offering lucrative opportunities for our graduates across various specializations.
              </p>
              <div className="space-y-5">
                {careerData.map((career, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-bsd-gray font-medium">{career.field}</span>
                      <span className="text-bsd-gray font-bold">{career.growth}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${career.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${animate ? career.growth : 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-bsd-orange/10 to-bsd-gray/5 rounded-2xl p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-bsd-orange mr-3" />
                  <h3 className="text-xl md:text-2xl font-display font-bold text-bsd-gray">
                    Placement Success
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-bsd-gray">Average Starting Salary</span>
                    <span className="font-bold text-bsd-gray">₹5.2 LPA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bsd-gray">Highest Package</span>
                    <span className="font-bold text-bsd-gray">₹12.8 LPA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bsd-gray">Internship Conversion Rate</span>
                    <span className="font-bold text-bsd-gray">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bsd-gray">Students with Multiple Offers</span>
                    <span className="font-bold text-bsd-gray">65%</span>
                  </div>
                </div>
                <div className="mt-8">
                  <AnimatedButton 
                    variant="outline" 
                    className="w-full border-bsd-orange/30 text-bsd-gray hover:bg-bsd-orange/10 hover:text-bsd-orange"
                    hoverEffect="scale"
                  >
                    Download Placement Report
                  </AnimatedButton>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-bsd-orange/10 rounded-full blur-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-bsd-gray/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </RevealSection>

        {/* Call to Action */}
        <RevealSection delay={300}>
          <div className="text-center mt-8">
            <AnimatedButton 
              size="lg" 
              className="bg-bsd-orange text-white hover:bg-bsd-orange/90"
              hoverEffect="glow"
            >
              Schedule a Career Counseling Session
            </AnimatedButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
