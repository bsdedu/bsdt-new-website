
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, BriefcaseBusiness, Building2, Lightbulb, Users, Gamepad, Monitor, Film } from "lucide-react";
import { RevealSection } from "@/components/ui-elements/RevealSection";

export const AnimationCurriculumSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Comprehensive Animation & Game Design Education
            </h2>
            <p className="mt-4 text-foreground/70">
              Our BVA in Animation & Game Design program combines artistic creativity with technical skills, preparing you to excel in the dynamic world of animation, gaming, and interactive media.
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
                        The BVA Animation & Game Design program is a 4-year full-time undergraduate course divided into 8 semesters, each focusing on different aspects of animation and game design.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Drawing & Visual Principles</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Introduction to Digital Art & Animation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>History of Animation & Gaming</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Fundamentals of Game Design</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Second Year: Specialization</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>2D & 3D Animation Techniques</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Character Design & Development</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Game Mechanics & Level Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Storytelling for Interactive Media</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Third Year: Advanced Techniques</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Advanced 3D Modeling & Animation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Game Engine Development</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Motion Graphics & VFX</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Sound Design for Animation & Games</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Fourth Year: Professional Practice</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Industry Specialization Track</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Portfolio Development</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Capstone Project</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Professional Practice & Industry Internship</span>
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
                          <Gamepad className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry-Standard Labs</h4>
                          <p className="text-sm text-foreground/70">State-of-the-art game development and animation studios</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Monitor className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Professional Software Training</h4>
                          <p className="text-sm text-foreground/70">Maya, Blender, Unity, Unreal Engine, Adobe Creative Suite</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Expert Faculty</h4>
                          <p className="text-sm text-foreground/70">Learn from professional animators and game developers</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Internships</h4>
                          <p className="text-sm text-foreground/70">Guaranteed internship placements with leading animation and game studios</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Film className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Motion Capture Studio</h4>
                          <p className="text-sm text-foreground/70">Access to professional motion capture equipment for character animation</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lightbulb className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Demo Reel Development</h4>
                          <p className="text-sm text-foreground/70">Dedicated sessions for building a professional portfolio and demo reel</p>
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
                          <span>Comprehensive understanding of animation principles and techniques</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Knowledge of game design theories, mechanics, and player psychology</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Understanding of interactive storytelling and narrative development</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Familiarity with industry workflows and production pipelines</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">Skills & Abilities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Proficiency in 2D and 3D animation software</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Ability to develop engaging games and interactive experiences</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Expertise in character design, rigging, and animation</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Competence in game prototyping and level design</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4 md:col-span-2">
                      <h4 className="font-medium text-bsd-gray">Professional Development</h4>
                      <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Demo reel and portfolio development skills</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Understanding of project management in creative industries</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Ability to work collaboratively in multidisciplinary teams</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Critical thinking and problem-solving capabilities</span>
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
                      <h4 className="font-medium text-bsd-gray">Animation Industry</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Character Animator</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>3D Modeler</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Storyboard Artist</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Visual Effects Artist</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Animation Director</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">Game Development</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Game Designer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Level Designer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Game Environment Artist</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Character Artist</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Technical Artist</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-bsd-gray">Emerging Opportunities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>VR/AR Experience Developer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Interactive Media Designer</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Motion Graphics Artist</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Digital Content Creator</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span>Independent Game Developer</span>
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
                        <h5 className="text-3xl font-bold text-bsd-orange">27%</h5>
                        <p className="text-sm text-foreground/70">Industry Growth Rate</p>
                      </div>
                      <div className="text-center p-4">
                        <h5 className="text-3xl font-bold text-bsd-orange">$180B+</h5>
                        <p className="text-sm text-foreground/70">Global Gaming Market</p>
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
