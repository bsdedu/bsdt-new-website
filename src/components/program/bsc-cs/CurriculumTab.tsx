
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
              The BCA program is a 3-year full-time undergraduate course divided into 6 semesters. Each semester focuses on practical application development with specialized tracks in data analytics and cybersecurity.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-medium text-bsd-gray flex items-center">
                <GraduationCap className="w-5 h-5 text-bsd-orange mr-2" />
                First Year: Application Development Fundamentals
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-7">
                <div>
                  <h5 className="font-medium text-bsd-gray/80 mb-2">Semester 1</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Programming Fundamentals with C</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Computer Fundamentals & Organization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Digital Logic & Computer Design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Mathematics for Computing I</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Communication Skills & Professional Ethics</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-bsd-gray/80 mb-2">Semester 2</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Object-Oriented Programming with C++</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Database Management Systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Mathematics for Computing II</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Environmental Studies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <BookOpen className="w-5 h-5 text-bsd-orange mr-2" />
                Second Year: Application Development & Web Technologies
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-7">
                <div>
                  <h5 className="font-medium text-bsd-gray/80 mb-2">Semester 3</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Java Programming & Application Development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Operating Systems & System Programming</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Web Development with HTML, CSS & JavaScript</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Software Engineering & Project Management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Computer Graphics & Multimedia</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-bsd-gray/80 mb-2">Semester 4</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Advanced Java & Enterprise Applications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Computer Networks & Data Communication</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Python Programming & Data Structures</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Introduction to Data Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cyber Security Fundamentals</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="font-medium text-bsd-gray flex items-center">
                <Code className="w-5 h-5 text-bsd-orange mr-2" />
                Third Year: Specialization & Professional Development
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-7">
                <div>
                  <h5 className="font-medium text-bsd-gray/80 mb-2">Semester 5</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Advanced Data Analytics & Machine Learning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Network Security & Ethical Hacking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Mobile Application Development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cloud Computing & DevOps</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Elective I (AI/ML or Cybersecurity)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-bsd-gray/80 mb-2">Semester 6</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Industry Project & Internship</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Digital Forensics & Incident Response</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Big Data Analytics & Visualization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Entrepreneurship & Innovation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Elective II & Capstone Project</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
        <CardHeader>
          <h3 className="text-xl font-semibold text-bsd-gray">Program Highlights</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-bsd-orange/5 rounded-lg p-4">
              <h4 className="font-semibold text-bsd-gray mb-2 flex items-center">
                <Database className="w-5 h-5 text-bsd-orange mr-2" />
                Industry-Aligned Curriculum
              </h4>
              <p className="text-sm text-foreground/70">
                Curriculum designed with industry partners to ensure graduates are job-ready with current market skills.
              </p>
            </div>
            
            <div className="bg-bsd-orange/5 rounded-lg p-4">
              <h4 className="font-semibold text-bsd-gray mb-2 flex items-center">
                <Server className="w-5 h-5 text-bsd-orange mr-2" />
                Hands-on Learning
              </h4>
              <p className="text-sm text-foreground/70">
                70% practical learning through labs, projects, and industry internships.
              </p>
            </div>
            
            <div className="bg-bsd-orange/5 rounded-lg p-4">
              <h4 className="font-semibold text-bsd-gray mb-2 flex items-center">
                <Shield className="w-5 h-5 text-bsd-orange mr-2" />
                Industry Certifications
              </h4>
              <p className="text-sm text-foreground/70">
                Integrated certifications in AWS, Microsoft, Cisco, and ethical hacking.
              </p>
            </div>
            
            <div className="bg-bsd-orange/5 rounded-lg p-4">
              <h4 className="font-semibold text-bsd-gray mb-2 flex items-center">
                <BrainCircuit className="w-5 h-5 text-bsd-orange mr-2" />
                Specialization Tracks
              </h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• Data Analytics & Business Intelligence</li>
                <li>• Cybersecurity & Digital Forensics</li>
                <li>• Application Development & DevOps</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
