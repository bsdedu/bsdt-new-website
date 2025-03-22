
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, GraduationCap, BookOpen, Code, Database, Shield, Globe, Server, BrainCircuit } from "lucide-react";

export const CurriculumTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-foreground/70">
              The B.Sc Computer Science program is a 3-year full-time undergraduate course divided into 6 semesters. Each semester builds upon previous knowledge, combining core computer science with specialized tracks in data analytics and cybersecurity.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-medium text-bsd-gray flex items-center">
                <GraduationCap className="w-5 h-5 text-bsd-orange mr-2" />
                First Year: Core Computing Fundamentals
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Introduction to Programming & Problem Solving</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Computer Organization & Architecture</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Data Structures & Algorithms</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mathematics for Computing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Database Management Systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Web Technologies</span>
                </li>
              </ul>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <BookOpen className="w-5 h-5 text-bsd-orange mr-2" />
                Second Year: Advanced Core & Specialization Foundations
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Object-Oriented Programming</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Operating Systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Computer Networks & Security</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Introduction to Data Analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Introduction to Cyber Security</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Software Engineering Principles</span>
                </li>
              </ul>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <Code className="w-5 h-5 text-bsd-orange mr-2" />
                Third Year: Specialization & Integration
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced Data Analytics & Visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Network Security & Ethical Hacking</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Artificial Intelligence & Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Security Operations & Incident Response</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Capstone Project</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span>Industry Internship</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Specialization Tracks</h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-5">
            <li className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-9 h-9 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mr-3">
                  <Database className="w-5 h-5 text-bsd-orange" />
                </div>
                <h4 className="font-semibold text-bsd-gray">Data Analytics Track</h4>
              </div>
              <ul className="space-y-2 pl-12">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Statistical Methods for Data Analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Big Data Technologies</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Data Visualization & Reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Predictive Analytics & Modeling</span>
                </li>
              </ul>
            </li>
            
            <li>
              <div className="flex items-center mb-3">
                <div className="w-9 h-9 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mr-3">
                  <Shield className="w-5 h-5 text-bsd-orange" />
                </div>
                <h4 className="font-semibold text-bsd-gray">Cyber Security Track</h4>
              </div>
              <ul className="space-y-2 pl-12">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Network & System Security</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Cryptography & Secure Communications</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Security Operations & Incident Response</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ethical Hacking & Penetration Testing</span>
                </li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
