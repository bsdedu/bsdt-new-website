import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../ui-elements/Card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, User } from "lucide-react";

interface StudentProject {
  id: string;
  title: string;
  student: string;
  program: string;
  year: string;
  imageSrc: string | string[];
  description: string;
}

export const StudentSpotlightSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/campus-life/student-works');
  };

  const featuredProjects: StudentProject[] = [
    {
      id: "1",
      title: "Community Water Distribution in Bangalore",
      student: "Mayur Deep",
      program: "BVA Graphic Design",
      year: "2022",
      description: "A design research project analyzing water scarcity and distribution conflicts.",
      imageSrc: "/lovable-uploads/gd-water-distribution-mayur.jpg"
    },
    {
      id: "2",
      title: "Interior Design Renovation: Hotel Design",
      student: "Sahana Kashyap",
      program: "BVA Interior Design",
      year: "2024",
      description: "A comprehensive hotel interior renovation project showcasing spatial planning.",
      imageSrc: "/lovable-uploads/sahana-hotel-design.jpg"
    },
    {
      id: "3",
      title: "Dino Twist - Brand Identity",
      student: "Syed Umar",
      program: "BVA Graphic Design",
      year: "2024",
      description: "A playful beverage brand identity featuring cute dinosaur mascots.",
      imageSrc: "/lovable-uploads/dino-twist-branding.jpg"
    },
    {
      id: "4",
      title: "6th Semester Portfolio",
      student: "Vidhi Pareek",
      program: "BVA Interior & Spatial Design",
      year: "2024",
      description: "Comprehensive interior design portfolio showcasing institutional and commercial projects.",
      imageSrc: [
        "/lovable-uploads/vidhi-pratt-institute-project.jpg",
        "/lovable-uploads/vidhi-vocational-training-center.jpg",
        "/lovable-uploads/vidhi-reception-design.jpg"
      ]
    },
    {
      id: "5",
      title: "Community Cultural Centre",
      student: "Sanajana R",
      program: "BVA Interior & Spatial Design",
      year: "2024",
      description: "A cultural centre design featuring traditional wood carving details and rustic elements.",
      imageSrc: "/lovable-uploads/sanajana-community-cultural-centre.jpg"
    }
  ];

  const ImageCarousel = ({
    images,
    alt
  }: {
    images: string[];
    alt: string;
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);

    const goToPrev = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    };

    const goToNext = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex(prev => (prev + 1) % images.length);
    };

    return (
      <div className="relative w-full h-full group">
        <img 
          src={images[currentIndex]} 
          alt={`${alt} ${currentIndex + 1}`} 
          className="w-full h-full object-cover object-center transition-all duration-500" 
        />
        <button 
          onClick={goToPrev} 
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button 
          onClick={goToNext} 
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`} 
            />
          ))}
        </div>
      </div>
    );
  };

  const renderProjectCard = (project: StudentProject) => {
    const isCarousel = Array.isArray(project.imageSrc);
    
    return (
      <div 
        key={project.id} 
        className="block cursor-pointer"
        onClick={handleViewAllClick}
      >
        <Card isHoverable className="overflow-hidden">
          <div className="relative h-40 sm:h-48 overflow-hidden">
            {isCarousel ? (
              <ImageCarousel images={project.imageSrc as string[]} alt={project.title} />
            ) : (
              <img 
                src={project.imageSrc as string} 
                alt={project.title} 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 pointer-events-none">
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 line-clamp-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5 text-white">
                <User className="w-3 h-3" />
                <span className="text-xs font-medium">{project.student}</span>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">{project.program}</Badge>
              <span className="text-xs text-bsd-gray/60">{project.year}</span>
            </div>
            <p className="text-sm text-bsd-gray/80 line-clamp-2">{project.description}</p>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section id="student-spotlight" className="bg-[#F6F6F7] py-[30px]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <RevealSection>
          <div className="text-center mb-8">
            <Badge variant="bsdOrange" className="mb-2">
              Student Spotlight
            </Badge>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-bsd-gray">
              Celebrating Student Creativity
            </h2>
            <p className="mt-4 text-bsd-gray/70 max-w-2xl mx-auto">
              Explore exceptional projects from our talented students across Interior Design, Graphic Design, Animation, and more.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map(renderProjectCard)}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="group" onClick={handleViewAllClick}>
              View All Student Works
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
