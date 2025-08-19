import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const careerPaths = [
  {
    category: "Senior Design Roles",
    positions: [
      { title: "Senior Interior Designer", experience: "5-8 years", salary: "₹8-15 LPA" },
      { title: "Design Director", experience: "7-12 years", salary: "₹15-25 LPA" },
      { title: "Principal Designer", experience: "10+ years", salary: "₹20-35 LPA" },
      { title: "Creative Director", experience: "8-15 years", salary: "₹18-30 LPA" }
    ]
  },
  {
    category: "Leadership & Management",
    positions: [
      { title: "Project Manager", experience: "4-7 years", salary: "₹10-18 LPA" },
      { title: "Design Team Lead", experience: "6-10 years", salary: "₹12-22 LPA" },
      { title: "Studio Manager", experience: "8-12 years", salary: "₹15-25 LPA" },
      { title: "Operations Director", experience: "10+ years", salary: "₹20-35 LPA" }
    ]
  },
  {
    category: "Entrepreneurship & Consulting",
    positions: [
      { title: "Design Consultant", experience: "5-8 years", salary: "₹12-25 LPA" },
      { title: "Studio Founder", experience: "7-12 years", salary: "₹15-50+ LPA" },
      { title: "Design Strategist", experience: "6-10 years", salary: "₹14-28 LPA" },
      { title: "Industry Expert", experience: "10+ years", salary: "₹25-45+ LPA" }
    ]
  },
  {
    category: "Specialized Domains",
    positions: [
      { title: "Sustainable Design Specialist", experience: "5-8 years", salary: "₹10-20 LPA" },
      { title: "Technology Integration Expert", experience: "6-10 years", salary: "₹12-22 LPA" },
      { title: "Hospitality Design Director", experience: "8-12 years", salary: "₹15-28 LPA" },
      { title: "Corporate Design Strategist", experience: "7-11 years", salary: "₹14-25 LPA" }
    ]
  }
];

const industryInsights = [
  { metric: "Annual Growth Rate", value: "18-22%" },
  { metric: "Market Size by 2026", value: "₹45,000 Cr" },
  { metric: "Senior Design Positions", value: "25,000+" },
  { metric: "Leadership Role Growth", value: "35% YoY" }
];

export const CareerPathsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bsd-gray mb-4">Advanced Career Opportunities</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Master Diploma graduates are positioned for senior leadership roles in interior design, with pathways to executive positions, independent practice, and industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {industryInsights.map((insight, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-bsd-orange mb-2">{insight.value}</div>
                <p className="text-sm text-foreground/70">{insight.metric}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {careerPaths.map((path, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-bsd-gray">{path.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {path.positions.map((position, posIndex) => (
                    <div key={posIndex} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-sm">{position.title}</h4>
                        <p className="text-xs text-foreground/60">{position.experience}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{position.salary}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">Career Support & Leadership Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-bsd-gray mb-2">Executive Mentorship</h4>
                <p className="text-sm text-foreground/70">One-on-one guidance from industry leaders and successful design entrepreneurs</p>
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray mb-2">Leadership Training</h4>
                <p className="text-sm text-foreground/70">Advanced workshops on team management, client relations, and business strategy</p>
              </div>
              <div>
                <h4 className="font-semibold text-bsd-gray mb-2">Industry Networks</h4>
                <p className="text-sm text-foreground/70">Access to exclusive professional networks and high-level industry connections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};