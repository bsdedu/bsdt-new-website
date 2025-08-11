import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export const CurriculumTab: React.FC = () => {
  const modules = [
    {
      title: "Module 1: AI Foundations & Design Thinking",
      duration: "2 Months",
      topics: [
        "Introduction to Artificial Intelligence & Machine Learning",
        "Design Thinking Methodology & Human-Centered Design",
        "AI Ethics & Responsible Design Principles",
        "User Research in AI-Powered Services",
        "Service Design Fundamentals"
      ]
    },
    {
      title: "Module 2: AI Tools & Service Architecture",
      duration: "2 Months",
      topics: [
        "Machine Learning for Designers",
        "Natural Language Processing & Conversational AI",
        "Computer Vision & Image Recognition",
        "Service Blueprinting & Journey Mapping",
        "Data-Driven Design Decisions"
      ]
    },
    {
      title: "Module 3: Integrated Service Development",
      duration: "2 Months",
      topics: [
        "AI-Powered Service Prototyping",
        "Business Model Innovation",
        "Digital Transformation Strategy",
        "Agile Development for AI Services",
        "Testing & Validation of AI Solutions"
      ]
    },
    {
      title: "Module 4: Professional Practice & Capstone",
      duration: "2 Months",
      topics: [
        "Industry Collaboration Project",
        "Portfolio Development",
        "Presentation & Communication Skills",
        "Career Development & Networking",
        "Final Capstone Project Presentation"
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

        {/* Capstone Project */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              AI Service Design Capstone Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The capstone project is a comprehensive, real-world AI service design challenge that demonstrates 
              your ability to integrate artificial intelligence with human-centered design principles.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Project Requirements</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• End-to-end AI service solution</li>
                  <li>• User research & validation</li>
                  <li>• Technical feasibility assessment</li>
                  <li>• Business case development</li>
                  <li>• Working prototype</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Skills Demonstrated</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• AI integration in service design</li>
                  <li>• Strategic thinking & innovation</li>
                  <li>• Technical communication</li>
                  <li>• Project management</li>
                  <li>• Professional presentation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};