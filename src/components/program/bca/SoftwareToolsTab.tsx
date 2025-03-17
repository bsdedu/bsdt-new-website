
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Code, Layout, Database, Cpu, Brain, Figma, LineChart, Palette } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const SoftwareToolsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-semibold text-bsd-gray">Software & AI Tools</h3>
        <p className="text-foreground/70">
          Students gain hands-on experience with industry-standard tools and platforms relevant to their specialization.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Core Programming Tools */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <Code className="w-5 h-5 text-bsd-orange mr-2" />
              Core Programming Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Code className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Python</h5>
                </div>
                <p className="text-sm text-foreground/70">Primary language for data science, AI/ML, and general development</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">HTML/CSS/JavaScript</h5>
                </div>
                <p className="text-sm text-foreground/70">Web development foundations and front-end implementation</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Database className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">SQL & NoSQL</h5>
                </div>
                <p className="text-sm text-foreground/70">Database management and data modeling concepts</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-200" />
          
          {/* UI/UX Tools Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <Palette className="w-5 h-5 text-bsd-orange mr-2" />
              UI/UX Design Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Figma className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Figma</h5>
                </div>
                <p className="text-sm text-foreground/70">Collaborative interface design and prototyping</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Adobe XD</h5>
                </div>
                <p className="text-sm text-foreground/70">UX/UI design tool for creating interactive prototypes</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Code className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">React & React Native</h5>
                </div>
                <p className="text-sm text-foreground/70">UI implementation for web and mobile applications</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Sketch</h5>
                </div>
                <p className="text-sm text-foreground/70">Digital design toolkit for creating UI elements</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <LineChart className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Hotjar & Analytics</h5>
                </div>
                <p className="text-sm text-foreground/70">User behavior tracking and UX analytics</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-200" />
          
          {/* AI/ML Tools Section */}
          <div>
            <h4 className="text-lg font-medium text-bsd-gray mb-4 flex items-center">
              <Brain className="w-5 h-5 text-bsd-orange mr-2" />
              AI/ML Tools & Frameworks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Cpu className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">TensorFlow</h5>
                </div>
                <p className="text-sm text-foreground/70">End-to-end machine learning and deep learning platform</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Brain className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">PyTorch</h5>
                </div>
                <p className="text-sm text-foreground/70">Deep learning framework for research and production</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Database className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Pandas & NumPy</h5>
                </div>
                <p className="text-sm text-foreground/70">Data manipulation and numerical computing libraries</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <LineChart className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Scikit-Learn</h5>
                </div>
                <p className="text-sm text-foreground/70">Machine learning library with comprehensive algorithms</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Jupyter Notebooks</h5>
                </div>
                <p className="text-sm text-foreground/70">Interactive computing environment for data visualization</p>
              </div>
              
              <div className="p-4 bg-bsd-orange/5 rounded-lg border border-bsd-orange/10 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <Brain className="w-5 h-5 text-bsd-orange mr-2" />
                  <h5 className="font-medium">Hugging Face</h5>
                </div>
                <p className="text-sm text-foreground/70">Platform for working with state-of-the-art NLP models</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gray-50 p-6 rounded-xl mt-8">
            <h4 className="text-lg font-medium text-bsd-gray mb-4">Industry Advantage</h4>
            <p className="mb-4">Our graduates enter the job market with practical experience using the exact tools and technologies that leading tech companies demand, making them immediately valuable to employers.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">45%</h5>
                <p className="text-sm text-foreground/70">Higher hiring rates for graduates with hands-on tool experience</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">12+</h5>
                <p className="text-sm text-foreground/70">Industry certification opportunities</p>
              </div>
              <div className="p-3">
                <h5 className="text-xl font-semibold text-bsd-orange">100%</h5>
                <p className="text-sm text-foreground/70">Access to professional software licenses during studies</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
