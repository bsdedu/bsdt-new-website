import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ToolItemProps {
  name: string;
  description: string;
}

const ToolItem: React.FC<ToolItemProps> = ({ name, description }) => (
  <div className="border-l-2 border-primary/20 pl-3 mb-3">
    <h4 className="font-semibold text-sm">{name}</h4>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

export const SoftwareToolsTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Software & Tools Covered</h3>
          <p className="text-muted-foreground mb-8">
            Master the essential tools and platforms used in AI service design, from prototyping to deployment and analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI & Machine Learning Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                AI & ML Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ToolItem 
                name="TensorFlow"
                description="Open-source machine learning framework for building AI models"
              />
              <ToolItem 
                name="Hugging Face"
                description="Platform for natural language processing and pre-trained models"
              />
              <ToolItem 
                name="OpenAI API"
                description="Access to GPT models and AI capabilities for service integration"
              />
              <ToolItem 
                name="Google AI Platform"
                description="Cloud-based machine learning services and tools"
              />
            </CardContent>
          </Card>

          {/* Design & Prototyping Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Design & Prototyping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ToolItem 
                name="Figma"
                description="Collaborative interface design and prototyping platform"
              />
              <ToolItem 
                name="Adobe XD"
                description="User experience design and prototyping application"
              />
              <ToolItem 
                name="Principle"
                description="Advanced interaction design and animation tool"
              />
              <ToolItem 
                name="Framer"
                description="Interactive prototyping with code components"
              />
            </CardContent>
          </Card>

          {/* Service Design Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🗺️</span>
                Service Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ToolItem 
                name="Miro"
                description="Digital whiteboard for service blueprinting and journey mapping"
              />
              <ToolItem 
                name="ServiceTitan"
                description="Specialized service design and customer journey tools"
              />
              <ToolItem 
                name="UXPressia"
                description="Customer journey mapping and persona development"
              />
              <ToolItem 
                name="Lucidchart"
                description="Diagramming software for service architecture visualization"
              />
            </CardContent>
          </Card>

          {/* No-Code/Low-Code Platforms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                No-Code/Low-Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ToolItem 
                name="Bubble"
                description="Visual programming platform for building web applications"
              />
              <ToolItem 
                name="Zapier"
                description="Automation platform connecting different apps and services"
              />
              <ToolItem 
                name="Airtable"
                description="Database and workflow management with AI integration"
              />
              <ToolItem 
                name="Dialogflow"
                description="Google's platform for building conversational interfaces"
              />
            </CardContent>
          </Card>

          {/* Analytics & Testing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Analytics & Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ToolItem 
                name="Google Analytics"
                description="Web analytics service for tracking user behavior"
              />
              <ToolItem 
                name="Mixpanel"
                description="Advanced analytics for user interaction tracking"
              />
              <ToolItem 
                name="Hotjar"
                description="Heatmaps and user session recording for UX insights"
              />
              <ToolItem 
                name="A/B Testing Tools"
                description="Platforms like Optimizely for testing service variations"
              />
            </CardContent>
          </Card>

          {/* Collaboration & Project Management */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ToolItem 
                name="Slack"
                description="Team communication and AI bot integration platform"
              />
              <ToolItem 
                name="Notion"
                description="All-in-one workspace for project documentation and planning"
              />
              <ToolItem 
                name="GitHub"
                description="Version control and collaboration for technical projects"
              />
              <ToolItem 
                name="Jira"
                description="Agile project management and issue tracking"
              />
            </CardContent>
          </Card>
        </div>

        {/* Technology Training Approach */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Hands-On Technology Training Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our technology training focuses on practical application rather than just theoretical knowledge. 
              You'll work with real AI APIs, build functional prototypes, and learn to evaluate and select 
              the right tools for specific service design challenges. The curriculum balances technical depth 
              with design thinking, ensuring you can communicate effectively with both technical teams and business stakeholders.
            </p>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};