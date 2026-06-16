import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Lightbulb, Cog, Award, Target, TrendingUp } from 'lucide-react';

const learningOutcomes = [
  {
    icon: <Target className="w-6 h-6 text-bsd-orange" />,
    title: "Advanced Design Expertise",
    description: "Develop mastery in sophisticated interior design principles, advanced space planning, and innovative design solutions for complex projects."
  },
  {
    icon: <Users className="w-6 h-6 text-bsd-orange" />,
    title: "Leadership & Management",
    description: "Build exceptional project management skills, team leadership capabilities, and client relationship management expertise."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-bsd-orange" />,
    title: "Innovation & Technology",
    description: "Master cutting-edge design technologies, sustainable practices, and innovative approaches to modern interior design challenges."
  },
  {
    icon: <Cog className="w-6 h-6 text-bsd-orange" />,
    title: "Technical Proficiency",
    description: "Achieve advanced proficiency in industry-standard software, BIM technologies, and emerging design tools."
  },
  {
    icon: <Award className="w-6 h-6 text-bsd-orange" />,
    title: "Professional Standards",
    description: "Understand industry regulations, professional ethics, and best practices for high-end interior design projects."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-bsd-orange" />,
    title: "Business Acumen",
    description: "Develop entrepreneurial skills, business development strategies, and financial management for design practice."
  }
];

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Post Graduate Diploma Learning Outcomes</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Upon completion of the Post Graduate Diploma in Residential Architecture and Design, graduates will possess advanced expertise and leadership capabilities to excel in senior design roles and establish successful design practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningOutcomes.map((outcome, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-bsd-orange/10 rounded-xl flex items-center justify-center mb-4">
                  {outcome.icon}
                </div>
                <CardTitle className="text-lg">{outcome.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">Portfolio Development & Professional Certification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-bsd-gray mb-3">Master-Level Technical Portfolio</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Advanced residential and commercial design projects</li>
                  <li>• Complex spatial problem-solving case studies</li>
                  <li>• Innovative material and technology applications</li>
                  <li>• Sustainable and accessibility-focused solutions</li>
                  <li>• High-end visualization and presentation materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray mb-3">Leadership & Professional Portfolio</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Project management and leadership documentation</li>
                  <li>• Client consultation and communication examples</li>
                  <li>• Team collaboration and mentoring experiences</li>
                  <li>• Business development and strategic planning</li>
                  <li>• Industry research and innovation initiatives</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};