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
    
    // Hero Banner Section
    courseName: "Parametric Design with Rhino & Grasshopper",
    duration: "3 Weeks",
    format: "Live + Recorded Sessions",
    startDate: "Apr 2025",
    originalPrice: "₹15,999",
    discountedPrice: "₹7,999",
    discount: "50%",
    rating: "4.5",
    ratingCount: "500+",
    heroImage: parametricDesignImage,
    
    // Course Overview
    overview: "Master the art of computational design with our comprehensive Rhino & Grasshopper course. Learn to create complex parametric models, develop algorithmic thinking, and build industry-ready designs that push the boundaries of architecture and product development.",
    features: [
      "Beginner-friendly approach with step-by-step guidance",
      "Industry-relevant projects and real-world applications",
      "Master both Rhino 3D and Grasshopper in depth",
      "Build a professional portfolio of parametric designs",
      "Learn from certified industry experts",
      "Get lifetime access to course materials"
    ],
    
    // Key Details
    schedule: {
      startDate: "April 15, 2025",
      endDate: "May 5, 2025",
      sessionTimings: "7:00 PM - 9:00 PM IST",
      totalSessions: "12 Sessions"
    },
    certification: "BSD Design School Certificate in Parametric Design",
    
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
    
    // Testimonials
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Architect",
        company: "DLF Group",
        content: "This course transformed my approach to design. The parametric skills I learned have made me invaluable at my firm.",
        rating: 5,
        image: "/api/placeholder/60/60"
      },
      {
        name: "Rohit Kumar",
        role: "Product Designer",
        company: "Tata Motors",
        content: "Excellent course structure and amazing instructors. Now I can create complex parametric models with confidence.",
        rating: 5,
        image: "/api/placeholder/60/60"
      },
      {
        name: "Anita Verma",
        role: "Interior Designer",
        company: "Freelancer",
        content: "The hands-on approach and real projects helped me build an impressive portfolio. Highly recommended!",
        rating: 5,
        image: "/api/placeholder/60/60"
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
      },
      {
        question: "Can I pay in installments?",
        answer: "Yes, we offer EMI options. Contact us on WhatsApp for more details about payment plans."
      }
    ],
    
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