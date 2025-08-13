import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const BIMInteriorsSmallProjects = () => {
  const courseData = {
    // SEO & Meta
    title: "BIM for Interiors and Small Projects - 6 Week Course | BSD Design School",
    description: "Master Building Information Modeling (BIM) for interior design projects and small-scale architectural works using Revit and related tools. Learn BIM Workflows, LOD Standards, Space Planning, and VR Walkthroughs in 6 weeks.",
    
    // Banner Section
    courseTitle: "BIM for Interiors and Small Projects",
    heroImage: "/lovable-uploads/a099e6b1-b172-4f43-a849-8bedf9a2d449.png",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Master Building Information Modeling (BIM) for interior design projects and small-scale architectural works using Revit and related tools. Learn to create efficient workflows for space planning, documentation, and visualization.",
    learningHighlights: [
      "Master BIM workflows for interior design projects",
      "Understand LOD (Level of Detail) standards and implementation",
      "Develop efficient space planning methodologies",
      "Create immersive VR walkthroughs and presentations",
      "Learn collaborative BIM practices for small teams",
      "Build professional BIM project portfolios"
    ],
    keyFeatures: [
      "Industry-standard BIM software training",
      "Small project focus and practical applications",
      "VR integration and visualization techniques",
      "Collaborative workflow development",
      "Professional certificate upon completion",
      "Expert instructor guidance and mentorship"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "February 15, 2025",
        endDate: "March 29, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded Sessions"
      },
      pricing: {
        originalPrice: 22999,
        discountedPrice: 15999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount available",
          "EMI options with 0% interest",
          "Student and group discounts"
        ]
      },
      certification: {
        provider: "BSD Design School & Industry Partners",
        type: "Professional Certificate in BIM for Interiors",
        description: "Industry-recognized certificate validating your expertise in BIM workflows for interior design"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "BIM Fundamentals & Revit Basics",
        topics: [
          "Introduction to BIM methodology and benefits",
          "Revit interface and basic navigation",
          "Creating and managing BIM projects",
          "Understanding families, types, and instances",
          "Basic modeling techniques for interiors"
        ],
        tools: ["Autodesk Revit", "BIM 360", "Project Templates", "Family Libraries"]
      },
      {
        week: 2,
        title: "Space Planning & LOD Standards",
        topics: [
          "Level of Detail (LOD) standards and implementation",
          "Space planning methodologies in BIM",
          "Room and area calculations",
          "Building program and space requirements",
          "Efficient modeling techniques for interiors"
        ],
        tools: ["Revit Architecture", "Room & Area Tools", "LOD Standards", "Space Planning"]
      },
      {
        week: 3,
        title: "Interior Design Elements & Families",
        topics: [
          "Creating and modifying furniture families",
          "Lighting design and fixture placement",
          "Material creation and application",
          "Custom interior elements development",
          "Family management and organization"
        ],
        tools: ["Family Editor", "Material Browser", "Lighting Tools", "Custom Families"]
      },
      {
        week: 4,
        title: "Documentation & Annotation",
        topics: [
          "Creating professional construction documents",
          "Dimensioning and annotation best practices",
          "Detail views and section creation",
          "Sheet composition and title blocks",
          "Drawing coordination and consistency"
        ],
        tools: ["Documentation Tools", "Annotation", "Sheet Composition", "Detail Views"]
      },
      {
        week: 5,
        title: "Visualization & VR Walkthroughs",
        topics: [
          "Rendering setup and material assignment",
          "Creating photorealistic visualizations",
          "VR walkthrough preparation and export",
          "Animation and camera path creation",
          "Presentation techniques and client communication"
        ],
        tools: ["Enscape", "VR Technology", "Rendering Engines", "Animation Tools"]
      },
      {
        week: 6,
        title: "Collaboration & Project Delivery",
        topics: [
          "BIM collaboration workflows and file sharing",
          "Cloud-based project management with BIM 360",
          "Quality control and model checking",
          "Final project delivery and documentation",
          "Portfolio development and case study creation"
        ],
        tools: ["BIM 360", "Collaboration Tools", "Model Checking", "Portfolio Platforms"]
      }
    ],
    softwareTools: [
      "Autodesk Revit",
      "BIM 360",
      "Enscape",
      "Navisworks",
      "AutoCAD",
      "SketchUp",
      "3ds Max",
      "Lumion"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is designed for interior designers, architects, and design professionals looking to implement BIM workflows in their practice.",
      audiences: [
        "Interior Designers transitioning to BIM workflows",
        "Architects working on small-scale projects",
        "Design Professionals seeking BIM certification",
        "Students preparing for BIM-integrated careers",
        "Freelancers expanding their service offerings",
        "Small design firms implementing BIM practices"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Arjun Mehta",
      qualifications: "M.Arch, BIM Professional Certification",
      experience: "8+ years in BIM implementation and interior design",
      image: "/lovable-uploads/instructor-arjun.jpg",
      bio: "Arjun is a BIM specialist and architect who has implemented BIM workflows for over 100 interior design projects. He has worked with leading architecture firms and has been instrumental in training design teams on BIM adoption. Arjun holds professional certifications from Autodesk and has been featured in architectural publications for his innovative BIM implementations."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Neha Gupta",
        role: "Interior Designer",
        company: "Livspace",
        rating: 5,
        feedback: "This course revolutionized how I approach interior design projects. The BIM workflows have made my documentation so much more efficient and professional.",
        image: "/lovable-uploads/testimonial-neha.jpg"
      },
      {
        name: "Rohit Sharma",
        role: "Design Manager",
        company: "HomeLane",
        rating: 5,
        feedback: "The VR walkthrough techniques I learned here have completely transformed how we present designs to clients. It's a game-changer for our business.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Priyanka Singh",
        role: "Architect",
        company: "Space Matrix",
        rating: 5,
        feedback: "Excellent course structure and practical approach. Arjun's expertise in small project BIM implementation is exactly what I needed for my practice.",
        image: "/lovable-uploads/testimonial-priyanka.jpg"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior BIM or Revit experience?",
        answer: "No prior BIM experience is required. We start with fundamentals and gradually build up to advanced techniques. Basic CAD knowledge or interior design background is helpful but not mandatory."
      },
      {
        question: "Will I get access to Revit during the course?",
        answer: "We provide guidance on accessing Revit through educational licenses or trial versions. We'll also help you understand subscription options for professional use."
      },
      {
        question: "Is this course suitable for small interior design firms?",
        answer: "Absolutely! The course is specifically designed for small projects and teams. We focus on practical BIM implementation that doesn't require large infrastructure investments."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 7-day money-back guarantee from the course start date. If you're not satisfied with the course content or delivery, you can get a full refund within this period."
      },
      {
        question: "How much time should I dedicate outside of live sessions?",
        answer: "We recommend 4-5 hours per week for practice and BIM project development outside of the 2-hour live sessions. This includes working on your portfolio project."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default BIMInteriorsSmallProjects;