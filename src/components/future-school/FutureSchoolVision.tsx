import React from 'react';
import { Card } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Lightbulb, Rocket, Heart, Award } from 'lucide-react';

export const FutureSchoolVision: React.FC = () => {
  const visionPoints = [
    {
      icon: Lightbulb,
      title: 'Innovation-First Approach',
      description: 'We believe in pushing the boundaries of traditional education with cutting-edge technologies and methodologies.'
    },
    {
      icon: Rocket,
      title: 'Accelerated Learning',
      description: 'Our intensive programs are designed to fast-track your career progression without compromising on quality.'
    },
    {
      icon: Heart,
      title: 'Human-Centered Design',
      description: 'Every course is crafted with empathy, understanding the real challenges professionals face in their careers.'
    },
    {
      icon: Award,
      title: 'Excellence in Outcomes',
      description: 'We measure our success by your success - career advancement, skill mastery, and personal growth.'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">OUR VISION</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Shaping Tomorrow's Professionals Today
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Future School was born from a simple belief: education should evolve as fast as technology. 
              We're not just teaching skills—we're creating the next generation of innovators, creators, and leaders 
              who will shape the future of design and technology.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visionPoints.map((point, index) => (
            <RevealSection key={index} delay={index * 100}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {point.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={200}>
          <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
                Our Story
              </h3>
              <div className="prose prose-lg max-w-none text-foreground/70">
                <p className="text-center leading-relaxed mb-6">
                  In 2020, as the world shifted to digital-first experiences, we recognized a critical gap: 
                  traditional education wasn't keeping pace with industry demands. Professionals were struggling 
                  to stay relevant, and companies couldn't find talent with the right skills.
                </p>
                <p className="text-center leading-relaxed mb-6">
                  Future School emerged as the solution—a place where ambitious professionals could rapidly acquire 
                  future-ready skills through immersive, industry-connected learning experiences. We partnered with 
                  leading companies and top practitioners to create programs that don't just teach theory, but build 
                  real-world expertise.
                </p>
                <p className="text-center leading-relaxed font-medium text-foreground">
                  Today, we're proud to have transformed thousands of careers and continue to be at the forefront 
                  of educational innovation, constantly evolving our programs to match the pace of technological advancement.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};