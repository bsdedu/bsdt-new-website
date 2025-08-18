import React, { useState } from 'react';
import { Card } from '@/components/ui-elements/Card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Clock, Users, Calendar, ArrowRight, GraduationCap } from 'lucide-react';

// Import images
import generativeAIImage from '@/assets/programs/generative-ai-creative.jpg';
import vrArImage from '@/assets/programs/vr-ar-prototyping.jpg';
import parametricDesignImage from '@/assets/programs/parametric-design.jpg';
import motionDesignImage from '@/assets/programs/motion-design.jpg';
import uxResearchImage from '@/assets/programs/ux-research.jpg';
import lightingDesignImage from '@/assets/programs/lighting-design.jpg';
import interiorDesignImage from '@/assets/programs/interior-design.jpg';
import uiUxDesignImage from '@/assets/programs/ui-ux-design.jpg';
import gameEnvironmentImage from '@/assets/programs/game-environment.jpg';
import fashionTechImage from '@/assets/programs/fashion-tech.jpg';
import motionGraphicsImage from '@/assets/programs/motion-graphics.jpg';
import aiOptimizationImage from '@/assets/programs/ai-optimization.jpg';
import designCareerImage from '@/assets/programs/design-career.jpg';
import aiCybersecurityImage from '@/assets/programs/ai-cybersecurity.jpg';
import roboticsImage from '@/assets/programs/robotics.jpg';
import bimInteriorsImage from '/lovable-uploads/a099e6b1-b172-4f43-a849-8bedf9a2d449.png';

export const FutureSchoolPrograms: React.FC = () => {
  const threeWeekPrograms = [
    {
      title: 'Generative AI for Creative Prototyping',
      description: 'Master AI tools for rapid creative ideation and prototyping across design disciplines.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Feb 2025',
      skills: ['Midjourney', 'DALL-E', 'Stable Diffusion', 'AI Prompting'],
      href: '/courses/generative-ai-creative-prototyping',
      image: '/lovable-uploads/795fe519-55eb-4d58-93f1-cb2b4dbb38f8.png'
    },
    {
      title: 'VR/AR Prototyping with Unity & Unreal',
      description: 'Build immersive experiences using industry-standard VR/AR development platforms.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Mar 2025',
      skills: ['Unity 3D', 'Unreal Engine', 'VR Development', 'AR Frameworks'],
      href: '/courses/vr-ar-prototyping',
      image: '/lovable-uploads/d193ede3-8300-4e5a-baf1-d4bf89f2b3a5.png'
    },
    {
      title: 'Parametric Design with Rhino & Grasshopper',
      description: 'Learn computational design techniques for architecture and product development.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Apr 2025',
      skills: ['Rhino 3D', 'Grasshopper', 'Parametric Modeling', 'Algorithmic Design'],
      href: '/courses/parametric-design',
      image: '/lovable-uploads/c78a5d5a-8108-4ba0-920c-d04b3d3ace91.png'
    },
    {
      title: 'Motion Design Essentials',
      description: 'Create compelling animations and motion graphics for digital media.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'May 2025',
      skills: ['After Effects', 'Cinema 4D', 'Motion Graphics', 'Animation Principles'],
      href: '/courses/motion-design-essentials',
      image: '/lovable-uploads/bcae81f7-dc14-4ae7-8802-362e21c8b7e3.png'
    },
    {
      title: 'UX Research Sprint',
      description: 'Master user research methodologies and data-driven design decisions.',
      duration: '3 Weeks',
      format: 'Live Online',
      nextBatch: 'Jun 2025',
      skills: ['User Interviews', 'Usability Testing', 'Data Analysis', 'Research Methods'],
      href: '/courses/ux-research-sprint',
      image: uxResearchImage
    }
  ];

  const sixWeekPrograms = [
    {
      title: 'BIM for Interiors and Small Projects',
      description: 'Master Building Information Modeling (BIM) for interior design projects and small-scale architectural works using Revit and related tools.',
      duration: '6 Weeks',
      format: 'Live Online',
      nextBatch: 'Feb 2025',
      skills: ['BIM Workflows', 'LOD Standards', 'Space Planning', 'VR Walkthroughs'],
      href: '/courses/bim-interiors-small-projects',
      image: bimInteriorsImage
    },
    {
      title: 'UI Design Systems and Figma Mastery',
      description: 'Develop scalable design systems and master advanced Figma techniques for digital products.',
      duration: '6 Weeks',
      format: 'Live Online',
      nextBatch: 'Mar 2025',
      skills: ['Atomic Design', 'Auto-Layout', 'Micro-interactions', 'Accessibility'],
      href: '/courses/ui-design-systems-figma',
      image: uiUxDesignImage
    },
    {
      title: '3D Character Modeling for Games',
      description: 'Create game-ready 3D characters with Indian aesthetics using Blender and ZBrush.',
      duration: '6 Weeks',
      format: 'Live Online',
      nextBatch: 'Apr 2025',
      skills: ['Anatomy & Base Meshes', 'Costume Sculpting', 'PBR Texturing', 'UE5 Integration'],
      href: '/courses/3d-character-modeling',
      image: gameEnvironmentImage
    },
    {
      title: 'Brand Identity and Packaging Design',
      description: 'Develop complete brand systems and commercial packaging for Indian markets.',
      duration: '6 Weeks',
      format: 'Live Online',
      nextBatch: 'May 2025',
      skills: ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Brand Guidelines'],
      href: '/courses/brand-identity-packaging',
      image: lightingDesignImage
    },
    {
      title: 'Digital Fashion Illustration and Tech Packs',
      description: 'Master digital fashion design and create production-ready technical packages.',
      duration: '6 Weeks',
      format: 'Live Online',
      nextBatch: 'Jun 2025',
      skills: ['Digital Rendering', 'Technical Drawing', 'CLO3D', 'Sustainable Materials'],
      href: '/courses/digital-fashion-tech-packs',
      image: fashionTechImage
    },
    {
      title: 'Applied AI for Design Automation',
      description: 'Implement AI tools to streamline design workflows and enhance creativity.',
      duration: '6 Weeks',
      format: 'Live Online',
      nextBatch: 'Jul 2025',
      skills: ['Prompt Engineering', 'AI-Assisted 3D', 'Legal Considerations', 'Custom AI'],
      href: '/courses/applied-ai-design-automation',
      image: aiOptimizationImage
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
      href: '/workshops/design-thinking-bootcamp',
      image: designCareerImage
    },
    {
      title: 'Exploring AI & Cyber Security',
      description: 'Master digital sketching techniques using iPad Pro and professional design apps.',
      duration: '1 Day',
      format: 'Hybrid',
      nextBatch: 'Apr 2025',
      skills: ['Procreate', 'Digital Sketching', 'Concept Art', 'Visual Communication'],
      href: '/workshops/digital-sketching',
      image: aiCybersecurityImage
    },
    {
      title: 'Exploring Robotics',
      description: 'Learn eco-friendly design principles and sustainable material selection.',
      duration: '3 Days',
      format: 'In-Person',
      nextBatch: 'May 2025',
      skills: ['Sustainable Design', 'Green Materials', 'Life Cycle Assessment', 'Circular Design'],
      href: '/workshops/sustainable-design',
      image: roboticsImage
    },
  ];

  const ProgramCard = ({ program, index }: { program: any; index: number }) => (
    <RevealSection delay={index * 100}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
        {program.image && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={program.image} 
              alt={program.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
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
              if (program.href) {
                window.location.href = program.href;
              } else {
                const enquirySection = document.getElementById('enquiry-form');
                enquirySection?.scrollIntoView({ behavior: 'smooth' });
              }
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
              <TabsTrigger value="6-weeks" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                6 Weeks Programs
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

            <TabsContent value="6-weeks">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sixWeekPrograms.map((program, index) => (
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