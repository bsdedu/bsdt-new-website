
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Card, CardContent } from "@/components/ui-elements/Card";
import { BrainCircuit, Code, Database, PieChart, ShieldCheck, Lock, Network, Activity } from "lucide-react";

export const LearningOutcomesTab: React.FC = () => {
  return (
    <RevealSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Code className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Programming Proficiency</h3>
            <p className="text-sm text-foreground/70">
              Master multiple programming languages including Python, Java, and C++, and understand advanced software development concepts.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Database className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Database Management</h3>
            <p className="text-sm text-foreground/70">
              Design, implement, and optimize database systems, with expertise in both SQL and NoSQL technologies for diverse data needs.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <PieChart className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Data Analysis</h3>
            <p className="text-sm text-foreground/70">
              Apply statistical methods and data visualization techniques to extract insights from complex datasets using advanced analytics tools.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <BrainCircuit className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Machine Learning Basics</h3>
            <p className="text-sm text-foreground/70">
              Understand fundamental machine learning algorithms and apply them to solve predictive modeling and classification problems.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <ShieldCheck className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Security Fundamentals</h3>
            <p className="text-sm text-foreground/70">
              Apply core cybersecurity principles to identify vulnerabilities, implement protective measures, and develop secure software.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Lock className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Ethical Hacking</h3>
            <p className="text-sm text-foreground/70">
              Learn ethical hacking methodologies to identify and address security vulnerabilities in systems, networks, and applications.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Network className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Network Security</h3>
            <p className="text-sm text-foreground/70">
              Understand network architecture and implement robust security protocols to protect data in transit and prevent unauthorized access.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-bsd-orange/20 to-bsd-orange/5">
              <Activity className="w-6 h-6 text-bsd-orange" />
            </div>
            <h3 className="text-lg font-semibold text-bsd-gray mb-2">Incident Response</h3>
            <p className="text-sm text-foreground/70">
              Develop skills to detect, analyze, and respond to security incidents efficiently, minimizing damage and restoring normal operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
};
