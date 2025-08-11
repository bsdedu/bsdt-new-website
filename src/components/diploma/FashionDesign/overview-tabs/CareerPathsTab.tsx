import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, TrendingUp, Users, Target } from 'lucide-react';

export const CareerPathsTab: React.FC = () => {
  const careerPaths = [
    {
      category: "Design Roles",
      icon: Briefcase,
      positions: [
        { title: "Fashion Designer", level: "Entry-Mid Level", salary: "₹3-8 LPA" },
        { title: "Assistant Designer", level: "Entry Level", salary: "₹2.5-5 LPA" },
        { title: "Textile Designer", level: "Entry-Mid Level", salary: "₹3-7 LPA" },
        { title: "Fashion Illustrator", level: "Freelance/Full-time", salary: "₹2-6 LPA" }
      ]
    },
    {
      category: "Business & Marketing",
      icon: TrendingUp,
      positions: [
        { title: "Fashion Merchandiser", level: "Entry-Mid Level", salary: "₹3-7 LPA" },
        { title: "Fashion Buyer", level: "Mid Level", salary: "₹4-9 LPA" },
        { title: "Brand Manager", level: "Mid-Senior Level", salary: "₹5-12 LPA" },
        { title: "Fashion Marketing Specialist", level: "Entry-Mid Level", salary: "₹3-8 LPA" }
      ]
    },
    {
      category: "Entrepreneurship",
      icon: Target,
      positions: [
        { title: "Fashion Brand Owner", level: "Self-employed", salary: "Variable" },
        { title: "Fashion Consultant", level: "Freelance", salary: "₹50K-2L per project" },
        { title: "Fashion Blogger/Influencer", level: "Self-employed", salary: "Variable" },
        { title: "Custom Design Studio", level: "Business Owner", salary: "Variable" }
      ]
    },
    {
      category: "Production & Technical",
      icon: Users,
      positions: [
        { title: "Pattern Maker", level: "Entry-Mid Level", salary: "₹3-6 LPA" },
        { title: "Quality Control Specialist", level: "Entry-Mid Level", salary: "₹2.5-5 LPA" },
        { title: "Production Coordinator", level: "Mid Level", salary: "₹4-8 LPA" },
        { title: "Technical Designer", level: "Mid Level", salary: "₹4-9 LPA" }
      ]
    }
  ];

  const industryInsights = [
    {
      metric: "Growing at 8-10% annually",
      description: "Fashion industry growth in India"
    },
    {
      metric: "₹5.4 trillion by 2025",
      description: "Projected fashion market size"
    },
    {
      metric: "2.5 million+",
      description: "People employed in fashion sector"
    },
    {
      metric: "15-20%",
      description: "Average salary growth for skilled designers"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        {/* Career Overview */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Career Opportunities</h3>
          <p className="text-muted-foreground">
            The fashion industry offers diverse career paths from creative design roles to business management 
            and entrepreneurship. Our diploma prepares you for various opportunities in this dynamic field.
          </p>
        </div>

        {/* Industry Insights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {industryInsights.map((insight, index) => (
            <Card key={index} className="text-center border-0 bg-primary/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{insight.metric}</div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Paths */}
        <div className="grid md:grid-cols-2 gap-6">
          {careerPaths.map((path, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <path.icon className="h-5 w-5 text-primary" />
                  {path.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {path.positions.map((position, posIndex) => (
                    <div key={posIndex} className="border rounded-lg p-3 bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">{position.title}</h4>
                        <Badge variant="outline" className="text-xs">{position.salary}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{position.level}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Support */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Career Support & Placement Assistance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Portfolio Development</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Professional portfolio creation</li>
                  <li>• Industry-standard presentation</li>
                  <li>• Digital portfolio optimization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Industry Connections</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Fashion brand partnerships</li>
                  <li>• Alumni network access</li>
                  <li>• Industry mentor matching</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Job Placement Support</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Interview preparation</li>
                  <li>• Resume building workshops</li>
                  <li>• Direct company referrals</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};