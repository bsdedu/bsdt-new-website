
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, Palette, Monitor, Users, BriefcaseBusiness, PenTool, Layout, Home, Ruler, Lightbulb, Brush } from "lucide-react";

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Creating Functional & Aesthetic Spaces
            </h2>
            <p className="mt-4 text-foreground/70">
              Our B.Sc Interior Design program prepares students to transform spaces into beautiful, functional environments through a comprehensive curriculum that balances creativity with technical expertise.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="software">Software & Tools</TabsTrigger>
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
                        The B.Sc Interior Design program is a 4-year full-time undergraduate course divided into 8 semesters. Each semester builds upon the last, developing both theoretical knowledge and practical design skills.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-bsd-gray">First Year: Foundation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Design Fundamentals & Elements of Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Interior Design History & Theories</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Drawing & Visualization Techniques</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Color Theory & Material Studies</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Second Year: Core Design</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Residential Design Studio</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Computer-Aided Design (CAD)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Building Materials & Construction</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Lighting Design & Ergonomics</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Third Year: Advanced Applications</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Commercial Space Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>3D Visualization & Rendering</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Furniture Design & Detailing</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Sustainable Design Practices</span>
                          </li>
                        </ul>

                        <h4 className="font-medium text-bsd-gray">Fourth Year: Specialization & Portfolio</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Hospitality & Retail Design</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Professional Practice & Project Management</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-5 h-5 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span>Capstone Project & Portfolio Development</span>
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
                    <h3 className="text-xl font-semibold text-bsd-gray">Program Highlights</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Home className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Design Studios</h4>
                          <p className="text-sm text-foreground/70">Dedicated spaces for hands-on learning and project development</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Monitor className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Digital Design Labs</h4>
                          <p className="text-sm text-foreground/70">State-of-the-art computer labs with industry-standard software</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Ruler className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Material Library</h4>
                          <p className="text-sm text-foreground/70">Extensive collection of material samples for hands-on exploration</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <BriefcaseBusiness className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Industry Projects</h4>
                          <p className="text-sm text-foreground/70">Work on real client briefs and industry collaborations</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lightbulb className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Design Thinking Approach</h4>
                          <p className="text-sm text-foreground/70">Problem-solving methodology applied to all design challenges</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Brush className="w-4 h-4 text-bsd-orange" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-bsd-gray">Model Making Workshop</h4>
                          <p className="text-sm text-foreground/70">Facilities for creating physical models and prototypes</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="software" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="AutoCAD" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">AutoCAD</h3>
                  <p className="text-sm text-foreground/70 mt-2">2D drafting and documentation</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="SketchUp" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">SketchUp</h3>
                  <p className="text-sm text-foreground/70 mt-2">3D modeling and visualization</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="Revit" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">Revit</h3>
                  <p className="text-sm text-foreground/70 mt-2">Building information modeling</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="3ds Max" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">3ds Max</h3>
                  <p className="text-sm text-foreground/70 mt-2">Advanced 3D modeling and rendering</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="V-Ray" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">V-Ray</h3>
                  <p className="text-sm text-foreground/70 mt-2">Photorealistic rendering</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="Adobe Photoshop" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">Photoshop</h3>
                  <p className="text-sm text-foreground/70 mt-2">Image editing and presentation</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="Adobe Illustrator" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">Illustrator</h3>
                  <p className="text-sm text-foreground/70 mt-2">Vector graphics and diagrams</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                    <img src="/placeholder.svg" alt="Adobe InDesign" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold">InDesign</h3>
                  <p className="text-sm text-foreground/70 mt-2">Portfolio and presentation layouts</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="outcomes" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Design Expertise</h3>
                    <p className="text-foreground/70">Develop a strong foundation in design principles, color theory, and spatial planning to create harmonious and functional interior spaces.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <Ruler className="w-6 h-6 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                    <p className="text-foreground/70">Master industry-standard software and technical drawings required for professional interior design practice, from concept to execution.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
                    <p className="text-foreground/70">Learn to apply creative problem-solving to design challenges while balancing aesthetics, functionality, and client requirements.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <Layout className="w-6 h-6 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Material Knowledge</h3>
                    <p className="text-foreground/70">Develop expertise in selecting appropriate materials, finishes, and furnishings with consideration for aesthetics, durability, and sustainability.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Client Communication</h3>
                    <p className="text-foreground/70">Gain the ability to effectively communicate design concepts to clients through presentations, drawings, and 3D visualizations.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-bsd-orange/10 rounded-full flex items-center justify-center mb-4">
                      <BriefcaseBusiness className="w-6 h-6 text-bsd-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional Practice</h3>
                    <p className="text-foreground/70">Understand the business aspects of interior design including project management, costing, contracts, and professional ethics.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="career" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Residential Interior Designer</h3>
                    <p className="text-foreground/70 mb-4">Design homes and living spaces that reflect clients' personalities while maximizing functionality and aesthetics.</p>
                    <div className="flex items-center text-sm text-bsd-orange">
                      <span className="font-medium">Key Skills:</span>
                      <span className="ml-2">Space Planning, Client Communication, Material Selection</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Commercial Designer</h3>
                    <p className="text-foreground/70 mb-4">Create functional and memorable spaces for offices, retail stores, restaurants, and other business environments.</p>
                    <div className="flex items-center text-sm text-bsd-orange">
                      <span className="font-medium">Key Skills:</span>
                      <span className="ml-2">Branding Integration, Space Efficiency, Building Codes</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Hospitality Designer</h3>
                    <p className="text-foreground/70 mb-4">Specialize in creating memorable experiences in hotels, resorts, restaurants, and entertainment venues.</p>
                    <div className="flex items-center text-sm text-bsd-orange">
                      <span className="font-medium">Key Skills:</span>
                      <span className="ml-2">Experience Design, Lighting, Durability Planning</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Exhibition Designer</h3>
                    <p className="text-foreground/70 mb-4">Design temporary and permanent exhibitions for museums, galleries, trade shows, and retail displays.</p>
                    <div className="flex items-center text-sm text-bsd-orange">
                      <span className="font-medium">Key Skills:</span>
                      <span className="ml-2">Storytelling, Visual Communication, Visitor Flow</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Lighting Designer</h3>
                    <p className="text-foreground/70 mb-4">Specialize in creating lighting schemes that enhance spatial experiences, mood, and functionality.</p>
                    <div className="flex items-center text-sm text-bsd-orange">
                      <span className="font-medium">Key Skills:</span>
                      <span className="ml-2">Technical Lighting, Energy Efficiency, Mood Creation</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Furniture Designer</h3>
                    <p className="text-foreground/70 mb-4">Design custom furniture pieces that complement interior spaces and meet specific client needs.</p>
                    <div className="flex items-center text-sm text-bsd-orange">
                      <span className="font-medium">Key Skills:</span>
                      <span className="ml-2">Product Design, Material Selection, Ergonomics</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
