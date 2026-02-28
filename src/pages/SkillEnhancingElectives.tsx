import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from 'react-helmet-async';
import { EnquiryFormSection } from "@/components/home/EnquiryFormSection";
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Check, BookOpen, Award, GraduationCap, Clock, Users, Target, Calendar } from "lucide-react";
import { electivesData, electiveSchedule } from "@/data/electivesData";
import electiveFigma from "@/assets/elective-figma.jpg";
import electiveEntrepreneurship from "@/assets/elective-entrepreneurship.jpg";
import electiveBems from "@/assets/elective-bems.jpg";
import electiveBim from "@/assets/elective-bim.jpg";
import electiveVfx from "@/assets/elective-vfx.jpg";
import elective3dAsset from "@/assets/elective-3d-asset.jpg";
import electiveHero from "@/assets/skill-electives-cover.jpg";
import electiveCertificate from "@/assets/elective-certificate.jpg";
import electiveSketching from "@/assets/elective-hands-sketching.jpg";
import electivePresentation from "@/assets/elective-presentation.jpg";

const electiveImages: Record<string, string> = {
  "elective-1": electiveFigma,
  "elective-2": electiveEntrepreneurship,
  "elective-3": electiveBems,
  "elective-4": electiveBim,
  "elective-5": electiveVfx,
  "elective-6": elective3dAsset,
};

const SkillEnhancingElectives = () => {
  return (
    <>
      <Helmet>
        <title>Skill-Enhancing Electives | BSDT</title>
        <meta name="description" content="Explore skill-enhancing electives at BSDT — Digital Presentation & Figma, Design Entrepreneurship, BEMS, BIM, Digital VFX, and 3D Asset Creation. Bridge the gap between academic learning and real-world practice." />
        <link rel="canonical" href="/academics/skill-enhancing-electives" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative text-white pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={electiveHero} alt="Design school campus with students" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-bsd-gray/90 via-bsd-gray/70 to-transparent" />
          </div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <RevealSection>
              <div className="max-w-4xl">
                <Badge variant="bsdOrange" className="mb-4">UNDERGRADUATE CURRICULUM</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Skill-Enhancing Electives
                </h1>
                <p className="text-xl text-white/80 mb-4">
                  A Pathway to Future-Ready Designers
                </p>
                <p className="text-white/70 max-w-3xl">
                  At Bangalore School of Design and Technology, Skill-Enhancing Electives are embedded into the undergraduate curriculum to bridge the gap between academic learning and real-world practice. While a design degree builds strong conceptual foundations, industry-ready skills are what enhance confidence, specialization, and employability.
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-display font-bold text-bsd-gray mb-4">Program Structure & Requirements</h2>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Left: Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={electiveCertificate} alt="Students receiving certificates" className="w-full h-full object-cover" />
                </div>
                {/* Right: Info cards */}
                <div className="flex flex-col gap-6 justify-center">
                  <div className="flex items-start space-x-3 bg-bsd-light-gray rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-bsd-gray">2 Mandatory Electives</h4>
                      <p className="text-sm text-foreground/70 mt-1">One elective in the second year and one in the third year</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-bsd-light-gray rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-bsd-gray">Certificate on Completion</h4>
                      <p className="text-sm text-foreground/70 mt-1">Successfully complete the course and final assessment to earn a certificate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-bsd-light-gray rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-bsd-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-bsd-gray">45 Hours Each</h4>
                      <p className="text-sm text-foreground/70 mt-1">Each elective runs for one semester with a 3-week intensive structure</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Elective Schedule Table */}
            <RevealSection delay={200}>
              <Card className="mb-12">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-bsd-gray">Elective Schedule</h3>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 px-4 text-left font-semibold text-bsd-gray">Semester</th>
                          <th className="py-3 px-4 text-left font-semibold text-bsd-gray">Elective</th>
                          <th className="py-3 px-4 text-left font-semibold text-bsd-gray">Applicable Programs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {electiveSchedule.map((row, idx) =>
                          row.electives.map((elective, eIdx) => (
                            <tr key={`${idx}-${eIdx}`} className="border-b border-border/50">
                              {eIdx === 0 && (
                                <td className="py-3 px-4 font-medium text-bsd-gray" rowSpan={row.electives.length}>
                                  {row.semester}
                                </td>
                              )}
                              <td className="py-3 px-4 text-foreground/70">{elective}</td>
                              {eIdx === 0 && (
                                <td className="py-3 px-4 text-foreground/70" rowSpan={row.electives.length}>
                                  {row.programs}
                                </td>
                              )}
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          </div>
        </section>

        {/* Visual Break - Sketching */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img src={electiveSketching} alt="Student sketching design concepts" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-bsd-gray/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl md:text-3xl font-display font-bold text-center px-4">
              Where Creativity Meets Industry Skills
            </p>
          </div>
        </section>

        {/* Elective Details with Tabs */}
        <section className="py-16 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <Badge variant="bsdOrange" className="mb-4">ELECTIVE DETAILS</Badge>
                <h2 className="text-3xl font-display font-bold text-bsd-gray">
                  Explore Each Elective
                </h2>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <Tabs defaultValue="elective-1" className="w-full">
                <div className="flex justify-center mb-8 overflow-x-auto">
                  <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-4xl">
                    {electivesData.map((elective) => (
                      <TabsTrigger key={elective.id} value={elective.id} className="text-xs md:text-sm">
                        Elective {elective.number}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {electivesData.map((elective) => (
                  <TabsContent key={elective.id} value={elective.id} className="mt-0">
                    <div className="space-y-8">
                      {/* Elective Header */}
                      <Card className="overflow-hidden">
                        <div className="aspect-[3/1] w-full overflow-hidden">
                          <img 
                            src={electiveImages[elective.id]} 
                            alt={elective.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-6 md:p-8">
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <Badge variant="bsdOrange">{elective.semester}</Badge>
                            <Badge variant="outline">{elective.applicablePrograms}</Badge>
                            <Badge variant="outline" className="bg-bsd-gray/5">45 Hours • 3 Weeks</Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-bsd-gray mb-4">{elective.title}</h3>
                          <p className="text-foreground/70">{elective.overview}</p>
                        </CardContent>
                      </Card>

                      {/* Course Outcomes */}
                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-bsd-orange" />
                            <h3 className="text-xl font-semibold text-bsd-gray">Course Outcomes</h3>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {elective.courseOutcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="w-5 h-5 text-bsd-orange mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/70">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Weekly Structure */}
                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-bsd-orange" />
                            <h3 className="text-xl font-semibold text-bsd-gray">3-Week Course Structure</h3>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="w-full">
                            {elective.weeklyStructure.map((week) => (
                              <AccordionItem key={week.week} value={`week-${week.week}`}>
                                <AccordionTrigger className="text-left">
                                  <div>
                                    <span className="font-semibold text-bsd-gray">Week {week.week}: {week.title}</span>
                                    <span className="text-sm text-foreground/50 ml-2">({week.duration})</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-6 pt-2">
                                    {/* Topics */}
                                    <div>
                                      <h5 className="font-medium text-bsd-gray mb-3">Topics Covered</h5>
                                      <ul className="space-y-2">
                                        {week.topics.map((topic, idx) => (
                                          <li key={idx} className="flex items-start text-sm">
                                            <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground/70">{topic}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Software Learning */}
                                    {week.softwareLearning && (
                                      <div>
                                        <h5 className="font-medium text-bsd-gray mb-3">Software Learning</h5>
                                        <ul className="space-y-2">
                                          {week.softwareLearning.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm">
                                              <Check className="w-4 h-4 text-bsd-orange/70 mr-2 flex-shrink-0 mt-0.5" />
                                              <span className="text-foreground/70">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Assignments */}
                                    <div>
                                      <h5 className="font-medium text-bsd-gray mb-3">Assignments (Choose One)</h5>
                                      <ul className="space-y-2">
                                        {week.assignments.map((assignment, idx) => (
                                          <li key={idx} className="flex items-start text-sm">
                                            <span className="w-5 h-5 rounded-full bg-bsd-orange/10 text-bsd-orange text-xs flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                                              {idx + 1}
                                            </span>
                                            <span className="text-foreground/70">{assignment}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>

                      {/* Final Project */}
                      <Card className="bg-bsd-orange/5 border-bsd-orange/20">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-bsd-orange" />
                            <h3 className="text-xl font-semibold text-bsd-gray">Final Project</h3>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-medium text-bsd-gray mb-2">{elective.finalProject.title}</h4>
                          <p className="text-foreground/70 mb-4">{elective.finalProject.brief}</p>
                          
                          <h5 className="font-medium text-bsd-gray mb-2">Requirements</h5>
                          <ul className="space-y-2 mb-4">
                            {elective.finalProject.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/70">{req}</span>
                              </li>
                            ))}
                          </ul>

                          {elective.finalProject.deliverables && (
                            <>
                              <h5 className="font-medium text-bsd-gray mb-2">Final Deliverables</h5>
                              <ul className="space-y-2">
                                {elective.finalProject.deliverables.map((del, idx) => (
                                  <li key={idx} className="flex items-start text-sm">
                                    <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground/70">{del}</span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </CardContent>
                      </Card>

                      {/* Assessment */}
                      <Card>
                        <CardHeader>
                          <h3 className="text-lg font-semibold text-bsd-gray">Assessment Methods</h3>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {elective.assessmentMethods.map((method, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <Check className="w-4 h-4 text-bsd-orange mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/70">{method}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </RevealSection>
          </div>
        </section>

        {/* Visual Break - Presentation */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img src={electivePresentation} alt="Students presenting design projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-bsd-gray/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl md:text-3xl font-display font-bold text-center px-4">
              From Classroom to Career-Ready
            </p>
          </div>
        </section>

        <EnquiryFormSection />
      </main>

      <Footer />
    </>
  );
};

export default SkillEnhancingElectives;
