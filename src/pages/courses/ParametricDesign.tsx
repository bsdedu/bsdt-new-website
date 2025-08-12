import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const ParametricDesign = () => {
  const courseData = {
    // SEO & Meta
    title: "Parametric Design with Rhino & Grasshopper - 3 Week Course | BSD Design School",
    description: "Learn computational design techniques for architecture and product development. Master Rhino 3D, Grasshopper, and algorithmic design in 3 weeks.",
    
    // Banner Section
    courseTitle: "Parametric Design with Rhino & Grasshopper",
    heroImage: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
    duration: "3 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Master computational design techniques for architecture and product development using industry-standard parametric tools.",
    learningHighlights: [
      "Master Rhino 3D modeling fundamentals",
      "Advanced Grasshopper scripting techniques",
      "Parametric design thinking and methodology",
      "Real-world architectural applications",
      "Advanced surface modeling and analysis",
      "Plugin integration and optimization"
    ],
    keyFeatures: [
      "Beginner-friendly approach",
      "Industry-relevant projects",
      "Live instructor support",
      "Recorded sessions for review",
      "Certificate upon completion",
      "Portfolio development guidance"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "April 15, 2025",
        endDate: "May 5, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded"
      },
      pricing: {
        originalPrice: 15999,
        discountedPrice: 7999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount",
          "EMI options available",
          "Student discounts"
        ]
      },
      certification: {
        provider: "BSD Design School",
        type: "Professional Certificate",
        description: "Industry-recognized certificate validating your parametric design skills"
      }
    },
    
    // Curriculum
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
        ],
        tools: ["Rhino 7", "Basic Modeling Tools"]
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
        ],
        tools: ["Grasshopper", "Data Management", "Mathematical Components"]
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
        ],
        tools: ["Advanced Grasshopper", "Optimization Tools", "Portfolio Tools"]
      }
    ],
    softwareTools: [
      "Rhino 7",
      "Grasshopper",
      "Kangaroo Physics",
      "Galapagos",
      "LunchBox",
      "Weaverbird"
    ],
    
    // Instructor
    instructor: {
      name: "Alex Rodriguez",
      qualifications: "M.Arch Computational Design, B.Arch",
      experience: "8+ years in parametric design and digital architecture",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      bio: "Alex is a computational designer specializing in parametric architecture and advanced fabrication techniques. He has worked at leading design firms including Zaha Hadid Architects and Foster + Partners, bringing extensive real-world experience to the classroom."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Architect",
        company: "DLF Group",
        rating: 5,
        feedback: "This course transformed my approach to design. The parametric skills I learned have made me invaluable at my firm.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Rohit Kumar",
        role: "Product Designer",
        company: "Tata Motors",
        rating: 5,
        feedback: "Excellent course structure and amazing instructors. Now I can create complex parametric models with confidence.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Anita Verma",
        role: "Interior Designer",
        company: "Freelancer",
        rating: 5,
        feedback: "The hands-on approach and real projects helped me build an impressive portfolio. Highly recommended!",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior experience with Rhino or Grasshopper?",
        answer: "No prior experience is required. This course is designed for beginners and starts with the fundamentals of both Rhino 3D and Grasshopper."
      },
      {
        question: "What software do I need for this course?",
        answer: "You'll need Rhino 7 (educational license available) and Grasshopper (included with Rhino). We'll guide you through the installation process."
      },
      {
        question: "Will I get lifetime access to course materials?",
        answer: "Yes, you'll have lifetime access to all recorded sessions, project files, and course materials."
      },
      {
        question: "What kind of certificate will I receive?",
        answer: "You'll receive a BSD Design School Certificate in Parametric Design upon successful completion of all assignments and projects."
      },
      {
        question: "Is there any refund policy?",
        answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default ParametricDesign;