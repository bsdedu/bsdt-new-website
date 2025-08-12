import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const SampleCourse = () => {
  const courseData = {
    // SEO & Meta
    title: "Rhino Grasshopper Affordable Parametric Workshop | BSD",
    description: "Master parametric design with Rhino and Grasshopper in this comprehensive 6-week course. Learn from industry experts and build real-world projects.",
    
    // Banner Section
    courseTitle: "Rhino Grasshopper Affordable Parametric Workshop",
    heroImage: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Master the art of parametric design with Rhino and Grasshopper. This comprehensive workshop will take you from beginner to advanced level in computational design.",
    learningHighlights: [
      "Master Rhino 3D modeling fundamentals",
      "Advanced Grasshopper scripting techniques",
      "Parametric design thinking and methodology",
      "Real-world architectural applications",
      "Advanced surface modeling and analysis",
      "Plugin integration and automation"
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
        startDate: "March 15, 2024",
        endDate: "April 26, 2024",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded"
      },
      pricing: {
        originalPrice: 15000,
        discountedPrice: 9999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount",
          "EMI options available",
          "Student discounts"
        ]
      },
      certification: {
        provider: "Kaarwan & Industry Partners",
        type: "Professional Certificate",
        description: "Industry-recognized certificate validating your parametric design skills"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Introduction to Parametric Design",
        topics: [
          "Understanding parametric design principles",
          "Rhino interface and basic modeling",
          "Introduction to Grasshopper",
          "Basic geometric operations"
        ],
        tools: ["Rhino 7", "Grasshopper"]
      },
      {
        week: 2,
        title: "Advanced Grasshopper Scripting",
        topics: [
          "Data structures and management",
          "Mathematical operations",
          "Surface generation techniques",
          "Pattern creation and manipulation"
        ],
        tools: ["Grasshopper", "Mathematical Components"]
      },
      {
        week: 3,
        title: "Architectural Applications",
        topics: [
          "Building form generation",
          "Facade design systems",
          "Structural pattern analysis",
          "Environmental analysis integration"
        ],
        tools: ["Grasshopper", "Ladybug", "Honeybee"]
      },
      {
        week: 4,
        title: "Advanced Techniques",
        topics: [
          "Custom scripting with C#",
          "Plugin development basics",
          "Optimization algorithms",
          "Performance analysis"
        ],
        tools: ["Visual Studio", "Custom Components"]
      },
      {
        week: 5,
        title: "Real-world Projects",
        topics: [
          "Complex building design",
          "Manufacturing considerations",
          "File preparation for fabrication",
          "Project documentation"
        ],
        tools: ["Rhino", "Grasshopper", "CAM Software"]
      },
      {
        week: 6,
        title: "Portfolio Development",
        topics: [
          "Project presentation techniques",
          "Portfolio compilation",
          "Industry best practices",
          "Career guidance and networking"
        ],
        tools: ["Adobe Creative Suite", "Portfolio Tools"]
      }
    ],
    softwareTools: [
      "Rhino 7",
      "Grasshopper",
      "Ladybug Tools",
      "Honeybee",
      "Kangaroo Physics",
      "Visual Studio Code",
      "Adobe Creative Suite"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This comprehensive workshop is designed for professionals looking to master parametric design principles and computational modeling.",
      audiences: [
        "Architecture Professionals seeking advanced design skills",
        "Design Engineers exploring computational methods",
        "Students pursuing parametric design specialization",
        "CAD Professionals wanting to learn Grasshopper",
        "Designers interested in algorithmic workflows",
        "Professionals seeking Rhino certification"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Arjun Malhotra",
      qualifications: "M.Arch Computational Design, B.Arch",
      experience: "8+ years in parametric design and digital fabrication",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      bio: "Arjun is a leading expert in computational design with over 8 years of experience working with top architecture firms globally. He has worked on numerous award-winning projects and has trained over 2000 students in parametric design. His expertise spans from basic Grasshopper scripting to advanced algorithmic design and digital fabrication."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Architect",
        company: "Foster + Partners",
        rating: 5,
        feedback: "This course completely transformed my approach to design. The instructor's expertise and practical examples made complex concepts easy to understand.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Rahul Gupta",
        role: "Design Engineer",
        company: "Arup",
        rating: 5,
        feedback: "Excellent course structure and amazing instructor support. I'm now confidently using Grasshopper in my daily work.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Sneha Patel",
        role: "Computational Designer",
        company: "Zaha Hadid Architects",
        rating: 5,
        feedback: "The hands-on approach and real-world projects helped me build a strong portfolio. Highly recommended!",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer: "Basic knowledge of 3D modeling is helpful but not required. We'll start from fundamentals and gradually build up to advanced topics."
      },
      {
        question: "Do I need to purchase Rhino software?",
        answer: "Rhino offers a 90-day free trial which is sufficient for the course duration. Student licenses are also available at discounted rates."
      },
      {
        question: "What is the refund policy?",
        answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course content. No questions asked."
      },
      {
        question: "Will I get lifetime access to recordings?",
        answer: "Yes, you'll have lifetime access to all recorded sessions and course materials."
      },
      {
        question: "Is there any job placement assistance?",
        answer: "We provide career guidance, portfolio review, and connect you with our industry network for potential opportunities."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default SampleCourse;