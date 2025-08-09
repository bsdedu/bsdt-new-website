import React, { useState } from 'react';
import { Card } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Clock, Users, Calendar, ArrowRight, GraduationCap } from 'lucide-react';

export const FutureSchoolPrograms: React.FC = () => {
  const threeWeekPrograms = [
    {
      title: 'Generative AI for Creative Prototyping',
      description: 'Master AI tools for rapid creative ideation and prototyping across design disciplines.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Feb 2025',
      skills: ['Midjourney', 'DALL-E', 'Stable Diffusion', 'AI Prompting'],
      href: '/continuing-studies/generative-ai-creative-prototyping'
    },
    {
      title: 'VR/AR Prototyping with Unity & Unreal',
      description: 'Build immersive experiences using industry-standard VR/AR development platforms.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Mar 2025',
      skills: ['Unity 3D', 'Unreal Engine', 'VR Development', 'AR Frameworks'],
      href: '/continuing-studies/vr-ar-prototyping'
    },
    {
      title: 'Parametric Design with Rhino & Grasshopper',
      description: 'Learn computational design techniques for architecture and product development.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Apr 2025',
      skills: ['Rhino 3D', 'Grasshopper', 'Parametric Modeling', 'Algorithmic Design'],
      href: '/continuing-studies/parametric-design'
    },
    {
      title: 'Motion Design Essentials',
      description: 'Create compelling animations and motion graphics for digital media.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'May 2025',
      skills: ['After Effects', 'Cinema 4D', 'Motion Graphics', 'Animation Principles'],
      href: '/continuing-studies/motion-design-essentials'
    },
    {
      title: 'UX Research Sprint',
      description: 'Master user research methodologies and data-driven design decisions.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Jun 2025',
      skills: ['User Interviews', 'Usability Testing', 'Data Analysis', 'Research Methods'],
      href: '/continuing-studies/ux-research-sprint'
    }
  ];

  const threeMonthPrograms = [
    {
      title: 'Interior Lighting Design Specialist',
      description: 'Comprehensive program covering lighting design principles for residential and commercial spaces.',
      duration: '3 Months',
      format: 'Live Online',
      nextBatch: 'Feb 2025',
      skills: ['Lighting Design', 'DIALux', 'Photometry', 'Smart Lighting'],
      href: '/continuing-studies/interior-lighting-design'
    },
    {
      title: 'Basic Interior Design',
      description: 'Foundation course covering interior design principles, space planning, and design software.',
      duration: '3 Months',
      format: 'Live Online',
      nextBatch: 'Mar 2025',
      skills: ['AutoCAD', 'SketchUp', 'Space Planning', 'Design Principles'],
      href: '/continuing-studies/basic-interior-design'
    },
    {
      title: 'UI/UX Product Design',
      description: 'Complete product design program from research to prototyping to user testing.',
      duration: '3 Months',
      format: 'Live Online',
      nextBatch: 'Feb 2025',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      href: '/continuing-studies/ui-ux-product-design'
    },
    {
      title: 'Game Environment Art (Unreal Engine 5)',
      description: 'Learn to create stunning game environments using the latest Unreal Engine technologies.',
      duration: '3 Months',
      format: 'Live Online',
      nextBatch: 'Apr 2025',
      skills: ['Unreal Engine 5', '3D Modeling', 'Texturing', 'Level Design'],
      href: '/continuing-studies/game-environment-art'
    },
    {
      title: 'Fashion Tech & Wearables',
      description: 'Explore the intersection of fashion and technology through wearable design.',
      duration: '3 Months',
      format: 'Live Online',
      nextBatch: 'May 2025',
      skills: ['Arduino', 'Wearable Tech', 'Smart Textiles', 'IoT Design'],
      href: '/continuing-studies/fashion-tech-wearables'
    },
    {
      title: 'Motion Graphics & Visual Storytelling',
      description: 'Advanced course in creating compelling visual narratives through motion design.',
      duration: '3 Months',
      format: 'Live Online',
      nextBatch: 'Mar 2025',
      skills: ['After Effects', 'Cinema 4D', 'Storytelling', 'Brand Animation'],
      href: '/continuing-studies/motion-graphics'
    },
    {
      title: 'AI for Design Optimization',
      description: 'Leverage artificial intelligence to enhance and optimize design workflows.',
      duration: '3 Months',
      format: 'Live Online',
      nextBatch: 'Jun 2025',
      skills: ['Machine Learning', 'Design Automation', 'AI Tools', 'Data Visualization'],
      href: '/continuing-studies/ai-design-optimization'
    }
  ];

  const schoolWorkshops = [
    {
      title: 'Exploring Design as a career',
      description: 'Intensive workshop on design thinking methodology and creative problem-solving techniques.',
      duration: '2 Days',
      format: 'In-Person',
      nextBatch: 'Mar 2025',
      skills: ['Design Thinking', 'Ideation', 'Prototyping', 'User-Centered Design'],
      href: '/workshops/design-thinking-bootcamp'
    },
    {
      title: 'Exploring AI & Cyber Security',
      description: 'Master digital sketching techniques using iPad Pro and professional design apps.',
      duration: '1 Day',
      format: 'Hybrid',
      nextBatch: 'Apr 2025',
      skills: ['Procreate', 'Digital Sketching', 'Concept Art', 'Visual Communication'],
      href: '/workshops/digital-sketching'
    },
    {
      title: 'Exploring Robotics',
      description: 'Learn eco-friendly design principles and sustainable material selection.',
      duration: '3 Days',
      format: 'In-Person',
      nextBatch: 'May 2025',
      skills: ['Sustainable Design', 'Green Materials', 'Life Cycle Assessment', 'Circular Design'],
      href: '/workshops/sustainable-design'
    },
  ];

  const ProgramCard = ({ program, index }: { program: any; index: number }) => (
    <RevealSection delay={index * 100}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 group">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Badge variant="outline" className="text-xs">
              {program.duration}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {program.format}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {program.title}
          </h3>
          
          <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
            {program.description}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Calendar className="h-4 w-4" />
              <span>Next Batch: {program.nextBatch}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Users className="h-4 w-4" />
              <span>Limited Seats Available</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-6">
            {program.skills.slice(0, 3).map((skill: string, skillIndex: number) => (
              <Badge key={skillIndex} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {program.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{program.skills.length - 3} more
              </Badge>
            )}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full group/btn"
            onClick={() => {
              const enquirySection = document.getElementById('enquiry-form');
              enquirySection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </RevealSection>
  );

  return (
    <section id="programs-section" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">OUR PROGRAMS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Choose Your Learning Path
            </h2>
            <p className="mt-4 text-foreground/70">
              Flexible duration options designed to fit your schedule and career goals
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <Tabs defaultValue="3-weeks" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="3-weeks" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                3 Weeks Programs
              </TabsTrigger>
              <TabsTrigger value="3-months" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                3 Months Programs
              </TabsTrigger>
              <TabsTrigger value="workshops" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                School Workshops
              </TabsTrigger>
            </TabsList>

            <TabsContent value="3-weeks">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {threeWeekPrograms.map((program, index) => (
                  <ProgramCard key={index} program={program} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="3-months">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {threeMonthPrograms.map((program, index) => (
                  <ProgramCard key={index} program={program} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schoolWorkshops.map((program, index) => (
                  <ProgramCard key={index} program={program} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => {
                const enquirySection = document.getElementById('enquiry-form');
                enquirySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Program Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};