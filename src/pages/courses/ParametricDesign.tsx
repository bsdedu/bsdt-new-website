import React from 'react';
import { CourseLandingTemplate } from '@/components/course/CourseLandingTemplate';
import parametricDesignImage from '@/assets/programs/parametric-design.jpg';

const ParametricDesign: React.FC = () => {
  const courseData = {
    // SEO & Basic Info
    title: "Parametric Design with Rhino & Grasshopper",
    description: "Learn computational design techniques for architecture and product development. Master Rhino 3D, Grasshopper, parametric modeling, and algorithmic design.",
    metaTitle: "Parametric Design with Rhino & Grasshopper - 3 Week Course | BSD Design School",
    metaDescription: "Learn computational design techniques for architecture and product development. Master Rhino 3D, Grasshopper, and algorithmic design in 3 weeks.",
    
    // Hero Section
    courseName: "Parametric Design with Rhino & Grasshopper",
    duration: "3 Weeks",
    startDate: "Apr 2025",
    rating: "4.5",
    ratingCount: "500+",
    heroImage: parametricDesignImage,
    studentCount: "15k+",
    studentCountLabel: "Architects Trained",
    
    // Course Details
    highlights: [
      "Master Rhino 3D & Grasshopper",
      "Computational design thinking",
      "Algorithmic modeling techniques", 
      "Architecture & product applications",
      "Industry-standard workflows",
      "Professional portfolio projects",
      "Advanced NURBS modeling",
      "Parametric optimization",
      "Fabrication-ready designs"
    ],
    
    curriculum: [
      {
        week: 1,
        title: "Rhino 3D Fundamentals",
        topics: [
          "NURBS modeling basics and surface operations",
          "Precision modeling techniques",
          "File organization and workflow setup",
          "Basic 3D modeling principles",
          "Surface continuity and quality control"
        ]
      },
      {
        week: 2,
        title: "Grasshopper Introduction",
        topics: [
          "Visual programming concepts",
          "Data trees and lists management",
          "Basic parametric definitions",
          "Component workflows and connections",
          "Mathematical operations in design"
        ]
      },
      {
        week: 3,
        title: "Advanced Parametric Applications",
        topics: [
          "Complex geometric algorithms",
          "Optimization techniques and form-finding",
          "Real-world design challenges",
          "Portfolio development strategies",
          "Integration with fabrication processes"
        ]
      }
    ],
    
    // Tools & Skills
    tools: [
      { name: "Rhino 3D", icon: "/api/placeholder/64/64" },
      { name: "Grasshopper", icon: "/api/placeholder/64/64" },
      { name: "Kangaroo", icon: "/api/placeholder/64/64" },
      { name: "Galapagos", icon: "/api/placeholder/64/64" },
      { name: "LunchBox", icon: "/api/placeholder/64/64" },
      { name: "Weaverbird", icon: "/api/placeholder/64/64" }
    ],
    
    // Instructors
    instructors: [
      {
        name: "Alex Rodriguez",
        experience: "8+ years of exp.",
        bio: "Computational Designer specializing in parametric architecture and advanced fabrication techniques at leading design firms.",
        image: "/api/placeholder/120/120",
        companies: ["Zaha Hadid", "Foster + Partners", "AECOM"],
        linkedIn: "#"
      },
      {
        name: "Sarah Chen",
        experience: "6+ years of exp.",
        bio: "Parametric Design Expert with extensive experience in algorithmic design and digital fabrication workflows.",
        image: "/api/placeholder/120/120",
        companies: ["UNStudio", "Grimshaw", "Arup"],
        linkedIn: "#"
      }
    ],
    
    // Case Studies
    caseStudies: [
      {
        title: "Parametric Pavilion Design",
        author: "Michael Zhang",
        institution: "MIT Architecture",
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        title: "Algorithmic Facade System",
        author: "Emma Johnson", 
        institution: "Harvard GSD",
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        title: "Computational Tower Design",
        author: "David Kim",
        institution: "AA School London",
        image: "/api/placeholder/300/200",
        link: "#"
      }
    ],
    
    // Call to Actions
    ctaTitle: "Ready to Master Computational Design?",
    ctaDescription: "Join the future of architecture and product design with parametric tools",
    
    // Additional Props
    skillsOffered: [
      "20+ Projects in Portfolio",
      "Software Proficiency",
      "Industry-Focused Curriculum", 
      "Assignments by Module",
      "Industry Recognized Certificate",
      "Instructor-Guided Sessions",
      "Peer Networking",
      "Interview Opportunities"
    ]
  };

  return <CourseLandingTemplate {...courseData} />;
};

export default ParametricDesign;