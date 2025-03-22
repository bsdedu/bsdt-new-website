import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui-elements/Card";
import { TreeDeciduous, PenTool, Leaf, Mountain, CheckCircle2 } from "lucide-react";

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-bsd-light-gray rounded-xl p-6">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-bsd-gray mb-3">{title}</h3>
        <p className="text-foreground/70">
          {description}
        </p>
      </div>
    </div>
  );
};

interface CurriculumCardProps {
  title: string;
  modules: string[];
  moduleNumber: number;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ title, modules, moduleNumber }) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-bsd-gray mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-bsd-orange text-white flex items-center justify-center mr-3 text-sm">{moduleNumber}</span>
        {title}
      </h3>
      <ul className="space-y-3">
        {modules.map((module, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-bsd-orange mr-2 mt-0.5 flex-shrink-0" />
            <span>{module}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const CurriculumTabContent: React.FC = () => {
  return (
    <TabsContent value="curriculum" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CurriculumCard
          title="Foundation Modules"
          moduleNumber={1}
          modules={[
            "History & Theory of Landscape Architecture",
            "Plant Materials & Ecology",
            "Landscape Design Fundamentals",
            "Site Analysis & Planning",
            "Drawing & Visual Communication",
            "Digital Tools for Landscape Design",
          ]}
        />
        <CurriculumCard
          title="Advanced Modules"
          moduleNumber={2}
          modules={[
            "Urban Landscape Design",
            "Sustainable Landscape Practices",
            "Landscape Construction & Materials",
            "Grading, Drainage & Stormwater Management",
            "Professional Practice & Project Management",
            "Capstone Design Project",
          ]}
        />
      </div>
    </TabsContent>
  );
};

interface LearningOutcomeProps {
  title: string;
  description: string;
}

const LearningOutcome: React.FC<LearningOutcomeProps> = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4 flex-shrink-0">
        <CheckCircle2 className="w-5 h-5 text-bsd-orange" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-bsd-gray mb-1">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

const LearningOutcomesTabContent: React.FC = () => {
  return (
    <TabsContent value="learning-outcomes" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <LearningOutcome
            title="Design Proficiency"
            description="Create comprehensive landscape designs that integrate aesthetics, function, and sustainability principles."
          />
          <LearningOutcome
            title="Plant Knowledge"
            description="Select and apply appropriate plant materials based on site conditions, design intent, and ecological considerations."
          />
          <LearningOutcome
            title="Technical Expertise"
            description="Develop technical documentation including grading plans, planting plans, and construction details."
          />
        </div>

        <div className="space-y-6">
          <LearningOutcome
            title="Visual Communication"
            description="Express design ideas effectively through hand drawing, digital rendering, and 3D visualization techniques."
          />
          <LearningOutcome
            title="Sustainable Design Approach"
            description="Apply ecological principles and sustainable strategies to create environmentally responsible landscapes."
          />
          <LearningOutcome
            title="Professional Portfolio"
            description="Create a professional design portfolio showcasing a range of landscape design projects and skills."
          />
        </div>
      </div>
    </TabsContent>
  );
};

interface CareerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  salary: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, description, icon, salary }) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-bsd-orange/5 to-white border-bsd-orange/20">
      <div className="w-12 h-12 rounded-xl bg-bsd-orange/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-bsd-gray mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <div className="text-sm text-bsd-orange font-medium">
        Average Salary: {salary}
      </div>
    </Card>
  );
};

const CareerPathsTabContent: React.FC = () => {
  return (
    <TabsContent value="career-paths" className="mt-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CareerCard
          title="Landscape Designer"
          description="Create functional and aesthetically pleasing outdoor spaces for residential, commercial, or public projects."
          icon={<TreeDeciduous className="w-6 h-6 text-bsd-orange" />}
          salary="₹5-10 LPA"
        />
        <CareerCard
          title="Urban Designer"
          description="Plan and design public spaces, streetscapes, and urban environments with focus on community needs."
          icon={<PenTool className="w-6 h-6 text-bsd-orange" />}
          salary="₹6-12 LPA"
        />
        <CareerCard
          title="Landscape Consultant"
          description="Provide specialized expertise on plant selection, sustainable landscaping, and ecological restoration projects."
          icon={<Leaf className="w-6 h-6 text-bsd-orange" />}
          salary="₹7-15 LPA"
        />
      </div>
    </TabsContent>
  );
};

export const ProgramOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Post Graduate Diploma in Landscape Design
            </h2>
            <p className="mt-4 text-foreground/70">
              A comprehensive program that equips students with the knowledge and skills to design sustainable, functional, and aesthetically pleasing outdoor spaces across various scales and contexts.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <OverviewCard
              icon={<PenTool className="w-6 h-6 text-bsd-orange" />}
              title="Design Principles"
              description="Master the fundamental principles of landscape architecture, spatial composition, and visual aesthetics essential for creating harmonious outdoor environments."
            />
            <OverviewCard
              icon={<Leaf className="w-6 h-6 text-bsd-orange" />}
              title="Ecological Knowledge"
              description="Develop understanding of plant materials, ecosystems, and sustainable practices for environmentally responsible landscape design solutions."
            />
            <OverviewCard
              icon={<Mountain className="w-6 h-6 text-bsd-orange" />}
              title="Technical Skills"
              description="Learn site analysis, grading, drainage, construction methods, and digital visualization tools used in professional landscape design practice."
            />
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="learning-outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
              </TabsList>
            </div>

            <CurriculumTabContent />

            <LearningOutcomesTabContent />

            <CareerPathsTabContent />
          </Tabs>
        </RevealSection>
      </div>
    </section>
  );
};
