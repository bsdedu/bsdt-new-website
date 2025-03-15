
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, PenTool, Code, Users, BriefcaseBusiness, Bot, Lightbulb } from "lucide-react";

export const BCAOverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Comprehensive BCA Education
            </h2>
            <p className="mt-4 text-foreground/70">
              Our Bachelor of Computer Applications program with specializations in UI/UX Design or AI & Machine Learning combines technical development skills with creative design solutions, preparing you for the rapidly evolving digital landscape.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career">Career Opportunities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="curriculum" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Structure</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-foreground/70">
                        The Bachelor of Computer Applications program is a 3-year full-time undergraduate course divided into 6 semesters, with core computing subjects and specialized tracks in UI/UX Design or AI & Machine Learning.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Introduction to Computer Systems</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Programming Fundamentals</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Mathematics for Computing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Digital Design Basics</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Second Year: Core Concepts</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Object-Oriented Programming</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Web Technologies</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Database Management Systems</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Human-Computer Interaction</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Third Year: Specialization</h4>
                        <ul className="space-y-2">
                          <li className="font-medium text-bsd-orange">UI/UX Design Track:</li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>User Research & Testing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Interaction Design & Prototyping</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>UI Systems & Design Systems</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Accessibility & Inclusive Design</span>
                          </li>
                          
                          <li className="font-medium text-bsd-orange mt-4">AI & Machine Learning Track:</li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Machine Learning Algorithms</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Deep Learning & Neural Networks</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Natural Language Processing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Computer Vision</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-bsd-orange/5 border-bsd-orange/20">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Highlights</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <PenTool className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Specialized Tracks</h4>
                          <p className="text-sm text-foreground/70">Choose between UI/UX Design or AI & Machine Learning specialization</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Code className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Hands-on Project Work</h4>
                          <p className="text-sm text-foreground/70">Build real applications with modern frameworks and tools</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Expert Faculty</h4>
                          <p className="text-sm text-foreground/70">Learn from experienced professionals in UI/UX and AI/ML fields</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Internships</h4>
                          <p className="text-sm text-foreground/70">Guaranteed internship placements with leading tech companies</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">AI Lab</h4>
                          <p className="text-sm text-foreground/70">State-of-the-art AI and machine learning laboratory with specialized hardware</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lightbulb className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry-Relevant Projects</h4>
                          <p className="text-sm text-foreground/70">Work on real-world UI/UX challenges and AI applications</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="outcomes" className="mt-0">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-bsd-gray">Program Learning Outcomes</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">Knowledge & Understanding</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Comprehensive understanding of programming and software development</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Knowledge of UI/UX principles and design methodologies</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Understanding of artificial intelligence and machine learning algorithms</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Familiarity with industry-standard tools and frameworks</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">Skills & Abilities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Proficiency in multiple programming languages</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Ability to design intuitive user experiences or develop AI applications</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Expertise in creating wireframes, prototypes, or training ML models</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Competence in project management and problem-solving</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-medium text-bsd-gray">Professional Development</h4>
                      <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Portfolio development showcasing UI/UX projects or AI applications</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Understanding of tech industry ethics and professional practices</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Ability to work in cross-functional product development teams</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Critical thinking and analytical problem-solving</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="career" className="mt-0">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-bsd-gray">Career Opportunities</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">UI/UX Design Track</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>UI/UX Designer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Front-End Developer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>UX Researcher</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Interaction Designer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Product Designer</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">AI & ML Track</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Machine Learning Engineer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>AI Application Developer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Data Scientist</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>NLP Engineer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Computer Vision Specialist</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">Common Opportunities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Software Developer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Web Application Developer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Mobile App Developer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Technology Consultant</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>IT Project Manager</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-bsd-light-gray rounded-xl">
                    <h4 className="font-medium text-bsd-gray mb-4">Industry Insights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4">
                        <h5 className="text-3xl font-bold text-bsd-orange">₹4-12L</h5>
                        <p className="text-sm text-foreground/70">Average Starting Salary</p>
                      </div>
                      <div className="text-center p-4">
                        <h5 className="text-3xl font-bold text-bsd-orange">40%</h5>
                        <p className="text-sm text-foreground/70">UI/UX Industry Growth Rate</p>
                      </div>
                      <div className="text-center p-4">
                        <h5 className="text-3xl font-bold text-bsd-orange">2.5M+</h5>
                        <p className="text-sm text-foreground/70">Global Tech Job Openings</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
