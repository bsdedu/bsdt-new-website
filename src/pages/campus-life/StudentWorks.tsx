import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight, User, GraduationCap } from 'lucide-react';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

interface StudentProject {
  id: string;
  title: string;
  description?: string;
  student: string;
  year: string;
  semester?: string;
  image: string;
  images?: string[];
  program: string;
}

const StudentWorks: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [lightboxStudent, setLightboxStudent] = useState("");

  const openLightbox = (project: StudentProject, startIndex = 0) => {
    const imageArray = project.images?.length ? project.images : [project.image];
    setLightboxImages(imageArray);
    setLightboxTitle(project.title);
    setLightboxStudent(project.student);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  // All student projects organized by program
  const projectsByProgram: Record<string, StudentProject[]> = {
    "graphic-design": [
      { 
        id: "gd-1", 
        title: "Community Water Distribution in Bangalore", 
        description: "A design research project analyzing water scarcity and distribution conflicts in Bangalore.",
        student: "Mayur Deep", 
        year: "2022", 
        semester: "BVA GD71", 
        image: "/lovable-uploads/gd-water-distribution-mayur.jpg",
        program: "BVA Graphic Design"
      },
      { 
        id: "gd-2", 
        title: "World of Gears - Brand Identity",
        description: "Comprehensive branding for sustainable supply chains, bridging local practices and global standards.",
        student: "World of Gear Team", 
        year: "2022", 
        semester: "BVA GD6", 
        image: "/lovable-uploads/gd-world-of-gears.jpg",
        program: "BVA Graphic Design"
      },
      { 
        id: "gd-3",
        title: "Dino Twist - Brand Identity", 
        description: "A playful beverage brand identity featuring cute dinosaur mascots and vibrant neon-line patterns.",
        student: "Syed Umar", 
        year: "2024", 
        semester: "3rd Semester", 
        image: "/lovable-uploads/dino-twist-branding.jpg",
        program: "BVA Graphic Design"
      },
      { 
        id: "gd-4",
        title: "G-Shock Advertisement", 
        description: "A product advertisement for Casio G-Shock watches, shot, edited and composed with overlay effects.",
        student: "Diploma Student", 
        year: "2024", 
        semester: "2nd Semester", 
        image: "/lovable-uploads/gd-ad-commercial-1.jpg",
        images: [
          "/lovable-uploads/gd-ad-commercial-1.jpg",
          "/lovable-uploads/gd-ad-commercial-2.jpg",
          "/lovable-uploads/gd-ad-commercial-3.jpg",
          "/lovable-uploads/gd-ad-commercial-4.jpg",
          "/lovable-uploads/gd-ad-commercial-5.jpg",
          "/lovable-uploads/gd-ad-commercial-6.jpg"
        ],
        program: "Diploma Visual Communication"
      },
      { 
        id: "gd-5",
        title: "MBTI Personality Magazine", 
        description: "A magazine based on Myers-Briggs 16 personality types with original illustrations and a digital quiz.",
        student: "Diploma Student", 
        year: "2024", 
        semester: "2nd Semester", 
        image: "/lovable-uploads/gd-magazine-1.jpg",
        images: [
          "/lovable-uploads/gd-magazine-1.jpg",
          "/lovable-uploads/gd-magazine-2.jpg",
          "/lovable-uploads/gd-magazine-3.jpg",
          "/lovable-uploads/gd-magazine-4.jpg",
          "/lovable-uploads/gd-magazine-5.jpg",
          "/lovable-uploads/gd-magazine-6.jpg",
          "/lovable-uploads/gd-magazine-7.jpg"
        ],
        program: "Diploma Visual Communication"
      },
      { 
        id: "gd-6",
        title: "RE: Managing Plastics in Bengaluru", 
        description: "A design research project exploring sustainable packaging solutions in Bengaluru cafes.",
        student: "Winola Caroline", 
        year: "2022", 
        semester: "BVA GD7", 
        image: "/lovable-uploads/gd-plastics-winola.jpg",
        program: "BVA Graphic Design"
      },
    ],
    "interior-design": [
      { 
        id: "int-1", 
        title: "Community Cultural Centre", 
        description: "A cultural centre design featuring traditional wood carving details, floor plans, and waiting area designs.",
        student: "Sanajana R", 
        year: "2024", 
        semester: "6th Semester",
        image: "/lovable-uploads/sanajana-community-cultural-centre.jpg",
        program: "BVA Interior & Spatial Design"
      },
      { 
        id: "int-2", 
        title: "Interior Detailing - Residential Project", 
        description: "Comprehensive interior working drawings including master bedroom sections, elevations, and material palettes.",
        student: "BVA ISD Students", 
        year: "2024", 
        semester: "5th-6th Semester",
        image: "/lovable-uploads/interior-detailing-project.jpg",
        program: "BVA Interior & Spatial Design"
      },
      { 
        id: "int-3", 
        title: "Interior Design Renovation: Hotel Design", 
        description: "A comprehensive hotel interior renovation project showcasing spatial planning and design solutions.",
        student: "Sahana Kashyap", 
        year: "2024", 
        semester: "6th Semester",
        image: "/lovable-uploads/sahana-hotel-design.jpg",
        program: "BVA Interior & Spatial Design"
      },
      { 
        id: "int-4", 
        title: "Resort Sattva - Japandi Design", 
        description: "A Japandi-inspired resort interior featuring reflected ceiling plan, furniture layout, and ground floor design.",
        student: "Interior Design Student", 
        year: "2024",
        image: "/lovable-uploads/interior-sattva-japandi-1.jpg",
        program: "BVA Interior & Spatial Design"
      },
      { 
        id: "int-5", 
        title: "6th Semester Portfolio", 
        description: "Comprehensive interior design portfolio showcasing institutional, commercial, and museum projects.",
        student: "Vidhi Pareek", 
        year: "2024", 
        semester: "6th Semester", 
        image: "/lovable-uploads/vidhi-pratt-institute-project.jpg",
        images: [
          "/lovable-uploads/vidhi-pratt-institute-project.jpg",
          "/lovable-uploads/vidhi-vocational-training-center.jpg",
          "/lovable-uploads/vidhi-film-cinematic-arts-site.jpg",
          "/lovable-uploads/vidhi-film-cinematic-arts-concept.jpg",
          "/lovable-uploads/vidhi-reception-design.jpg",
          "/lovable-uploads/vidhi-flooring-layout.jpg",
          "/lovable-uploads/vidhi-reflected-ceiling-plan.jpg",
          "/lovable-uploads/vidhi-lecture-hall.jpg",
          "/lovable-uploads/vidhi-soundstage.jpg",
          "/lovable-uploads/vidhi-digital-lab.jpg",
          "/lovable-uploads/vidhi-seminar-hall.jpg",
          "/lovable-uploads/vidhi-impact-hub.jpg",
          "/lovable-uploads/vidhi-kempegowda-museum.jpg",
          "/lovable-uploads/vidhi-moritzburg-museum.jpg",
          "/lovable-uploads/vidhi-mysore-gallery.jpg"
        ],
        program: "BVA Interior & Spatial Design"
      },
    ],
    "animation": [
      { 
        id: "anim-1", 
        title: "Character Animation Showreel", 
        description: "A collection of character animation work showcasing movement, expressions, and storytelling.",
        student: "Animation Student", 
        year: "2024",
        image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop",
        program: "BVA Animation & Game Design"
      },
      { 
        id: "anim-2", 
        title: "Game Environment Design", 
        description: "Detailed game environment concept art and 3D modeling for an adventure game project.",
        student: "Game Design Student", 
        year: "2024",
        image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&auto=format&fit=crop",
        program: "BVA Animation & Game Design"
      },
    ],
    "bca": [
      { 
        id: "bca-1", 
        title: "Mobile App UI Design", 
        description: "User interface design for a mobile banking application with focus on accessibility and usability.",
        student: "Kiran Kumar", 
        year: "2023",
        image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop",
        program: "BCA UI/UX & AI/ML"
      },
      { 
        id: "bca-2", 
        title: "E-commerce Website Redesign", 
        description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
        student: "Aisha Khan", 
        year: "2023",
        image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format&fit=crop",
        program: "BCA UI/UX & AI/ML"
      },
    ],
  };

  const tabs = [
    { id: "all", label: "All Works" },
    { id: "graphic-design", label: "Graphic Design" },
    { id: "interior-design", label: "Interior Design" },
    { id: "animation", label: "Animation & Games" },
    { id: "bca", label: "BCA UI/UX" },
  ];

  const getAllProjects = (): StudentProject[] => {
    return Object.values(projectsByProgram).flat();
  };

  const getProjectsForTab = (tabId: string): StudentProject[] => {
    if (tabId === "all") {
      return getAllProjects();
    }
    return projectsByProgram[tabId] || [];
  };

  const renderProjectCard = (project: StudentProject) => {
    const hasMultipleImages = project.images && project.images.length > 1;
    
    return (
      <div 
        key={project.id} 
        className="cursor-pointer"
        onClick={() => openLightbox(project)}
      >
        <Card isHoverable className="overflow-hidden h-full">
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
            />
            {hasMultipleImages && (
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {project.images?.length} images
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 pointer-events-none">
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 line-clamp-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5 text-white/90">
                <User className="w-3 h-3" />
                <span className="text-xs font-medium">{project.student}</span>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="bsdOrange" className="text-xs">{project.program}</Badge>
              {project.semester && (
                <span className="text-xs text-bsd-gray/60">{project.semester}</span>
              )}
              <span className="text-xs text-bsd-gray/60">{project.year}</span>
            </div>
            {project.description && (
              <p className="text-sm text-bsd-gray/80 line-clamp-2">{project.description}</p>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Student Works | BSDT Campus Life</title>
        <meta 
          name="description" 
          content="Explore exceptional student projects from BSDT across Interior Design, Graphic Design, Animation, Game Design, and more." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-bsd-light-gray to-white">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <RevealSection>
              <div className="text-center max-w-3xl mx-auto">
                <Badge variant="bsdOrange" className="mb-4">Campus Life</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bsd-gray mb-6">
                  Student Works Gallery
                </h1>
                <p className="text-lg text-bsd-gray/70">
                  Discover the exceptional creativity and talent of BSDT students through their remarkable projects across various design disciplines.
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <RevealSection>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-8 flex flex-wrap justify-center gap-2 h-auto bg-transparent">
                  {tabs.map((tab) => (
                    <TabsTrigger 
                      key={tab.id} 
                      value={tab.id}
                      className="data-[state=active]:bg-bsd-orange data-[state=active]:text-white px-4 py-2 rounded-full border border-bsd-gray/20"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {tabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {getProjectsForTab(tab.id).map(renderProjectCard)}
                    </div>
                    {getProjectsForTab(tab.id).length === 0 && (
                      <div className="text-center py-12">
                        <GraduationCap className="w-12 h-12 mx-auto text-bsd-gray/30 mb-4" />
                        <p className="text-bsd-gray/60">No projects available in this category yet.</p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </RevealSection>
          </div>
        </section>

        <EnquiryFormSection />
      </main>
      
      <Footer />

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-[100] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full h-[85vh] flex items-center justify-center">
            <img
              src={lightboxImages[lightboxIndex]}
              alt={`${lightboxTitle} ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {lightboxImages.length > 1 && (
              <>
                <button
                  onClick={() => setLightboxIndex(prev => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-[100]"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={() => setLightboxIndex(prev => (prev + 1) % lightboxImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-[100]"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>
          
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {lightboxImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === lightboxIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
          
          <div className="absolute top-4 left-4 text-white">
            <h3 className="text-lg font-semibold">{lightboxTitle}</h3>
            <p className="text-sm text-white/70">by {lightboxStudent}</p>
            {lightboxImages.length > 1 && (
              <span className="text-sm text-white/70">{lightboxIndex + 1} / {lightboxImages.length}</span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StudentWorks;
