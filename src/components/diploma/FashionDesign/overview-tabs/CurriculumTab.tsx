import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export const CurriculumTab: React.FC = () => {
  const modules = [
    {
      title: "Module 1: Fashion Design Fundamentals",
      duration: "6 Weeks",
      topics: [
        "Fashion History & Cultural Influences",
        "Elements & Principles of Design",
        "Color Theory in Fashion",
        "Fashion Terminology & Industry Overview",
        "Basic Fashion Illustration Techniques"
      ]
    },
    {
      title: "Module 2: Fashion Illustration & Digital Design",
      duration: "6 Weeks", 
      topics: [
        "Advanced Fashion Illustration",
        "Fashion Croquis Development",
        "Digital Fashion Design (Adobe Illustrator)",
        "Technical Flat Drawing",
        "Presentation & Portfolio Techniques"
      ]
    },
    {
      title: "Module 3: Pattern Making & Garment Construction",
      duration: "6 Weeks",
      topics: [
        "Basic Pattern Making Techniques",
        "Draping Fundamentals",
        "Sewing Techniques & Construction Methods",
        "Fitting & Alteration Principles",
        "Garment Finishing Techniques"
      ]
    },
    {
      title: "Module 4: Textiles & Fashion Business",
      duration: "6 Weeks",
      topics: [
        "Textile Science & Fabric Properties",
        "Sustainable Fashion Practices",
        "Fashion Merchandising & Retail",
        "Brand Development & Marketing",
        "Final Portfolio Development & Presentation"
      ]
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        {/* Program Structure */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Program Structure</h3>
          <div className="grid gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <Badge variant="secondary">{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Portfolio Project */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Fashion Design Portfolio Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The final portfolio project showcases your complete fashion design journey, demonstrating 
              technical skills, creativity, and industry readiness through a cohesive collection.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Portfolio Requirements</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Complete fashion collection (5-7 looks)</li>
                  <li>• Fashion illustrations & technical flats</li>
                  <li>• Constructed garment samples</li>
                  <li>• Mood boards & inspiration research</li>
                  <li>• Professional presentation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Skills Demonstrated</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Creative design development</li>
                  <li>• Technical fashion illustration</li>
                  <li>• Pattern making & construction</li>
                  <li>• Professional presentation</li>
                  <li>• Industry-standard documentation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};