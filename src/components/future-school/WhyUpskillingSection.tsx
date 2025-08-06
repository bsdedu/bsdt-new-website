import React from 'react';
import { Card } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { TrendingUp, Zap, Target, Users, Globe, Brain } from 'lucide-react';

export const WhyUpskillingSection: React.FC = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Future-Proof Your Career',
      description: 'Stay ahead of industry trends and technological disruptions with cutting-edge skills that employers demand.',
      stat: '73% faster career growth'
    },
    {
      icon: Zap,
      title: 'Learn at Lightning Speed',
      description: 'Our intensive bootcamp format helps you master new skills in weeks, not years.',
      stat: '10x faster than traditional learning'
    },
    {
      icon: Target,
      title: 'Industry-Focused Curriculum',
      description: 'Learn exactly what industry professionals use in their daily work with real-world projects.',
      stat: '95% industry relevance'
    },
    {
      icon: Brain,
      title: 'AI-Enhanced Learning',
      description: 'Leverage artificial intelligence to personalize your learning journey and optimize skill acquisition.',
      stat: 'Personalized for each learner'
    },
    {
      icon: Globe,
      title: 'Global Career Opportunities',
      description: 'Open doors to remote work and international opportunities with globally recognized skills.',
      stat: '200+ countries hiring remotely'
    },
    {
      icon: Users,
      title: 'Expert-Led Mentorship',
      description: 'Learn directly from industry veterans and get personalized guidance throughout your journey.',
      stat: '15+ years average experience'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">THE FUTURE IS NOW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Why Upskilling is the Futr
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              In today's rapidly evolving digital landscape, continuous learning isn't just an advantage—it's a necessity. 
              The skills that got you here won't get you there. Futr School bridges the gap between where you are and where you want to be.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <RevealSection key={index} delay={index * 100}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <reason.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {reason.stat}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={200}>
          <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              The Skills Gap is Real
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">87%</div>
                <div className="text-sm text-foreground/70">of companies report skill shortages</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50%</div>
                <div className="text-sm text-foreground/70">of jobs will be disrupted by 2030</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3x</div>
                <div className="text-sm text-foreground/70">higher salary for upskilled professionals</div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};