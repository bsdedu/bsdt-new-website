import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const VRARPrototyping = () => {
  const courseData = {
    // SEO & Meta
    title: "VR/AR Prototyping with Unity & Unreal - 3 Week Course | BSD Design School",
    description: "Build immersive VR/AR experiences using Unity and Unreal Engine. Learn VR development, AR frameworks, and industry-standard workflows in 3 weeks.",
    
    // Banner Section
    courseTitle: "VR/AR Prototyping with Unity & Unreal",
    heroImage: "/lovable-uploads/62066645-d54b-4f11-b55f-c29a82cb07c5.png",
    duration: "3 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Build immersive VR/AR experiences using industry-standard development platforms. Master Unity 3D and Unreal Engine to create cutting-edge extended reality applications.",
    learningHighlights: [
      "Master Unity 3D for VR/AR development",
      "Learn Unreal Engine XR workflows",
      "Build interactive VR experiences with hand tracking",
      "Create marker-based and markerless AR applications",
      "Understand XR hardware optimization techniques",
      "Deploy applications across multiple VR/AR platforms"
    ],
    keyFeatures: [
      "Hands-on VR/AR project development",
      "Industry-standard development tools",
      "Cross-platform deployment strategies",
      "Hardware optimization techniques",
      "Professional certificate upon completion",
      "Portfolio-ready VR/AR applications"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "October 6, 2025",
        endDate: "October 24, 2025",
        sessionTimings: "7:00 PM - 8:30 PM IST",
        format: "Live Online + Recorded Sessions"
      },
      pricing: {
        originalPrice: 9999,
        discountedPrice: 7999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount available",
          "EMI options with 0% interest",
          "Student and group discounts"
        ]
      },
      certification: {
        provider: "BSD Design School & Industry Partners",
        type: "Professional Certificate in VR/AR Development",
        description: "Industry-recognized certificate validating your expertise in immersive technology development"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "VR/AR Fundamentals & Unity Setup",
        topics: [
          "Introduction to XR technologies and market overview",
          "Unity 3D interface mastery for XR development",
          "XR SDK installation and project setup",
          "Basic VR scene creation and optimization",
          "Understanding VR hardware and specifications"
        ],
        tools: ["Unity 3D", "XR Toolkit", "Oculus SDK", "SteamVR"]
      },
      {
        week: 2,
        title: "Interactive VR Development",
        topics: [
          "Hand tracking and controller integration",
          "Spatial UI design principles and implementation",
          "Physics interactions in virtual environments",
          "Teleportation and locomotion systems",
          "Audio spatialization and haptic feedback"
        ],
        tools: ["Unity XR Interaction Toolkit", "Hand Tracking SDK", "Spatial Audio"]
      },
      {
        week: 3,
        title: "AR Applications & Deployment",
        topics: [
          "ARFoundation workflows and best practices",
          "Marker-based and markerless AR development",
          "Occlusion, lighting, and environmental understanding",
          "Multi-platform deployment strategies",
          "Performance optimization and testing"
        ],
        tools: ["ARFoundation", "ARCore", "ARKit", "Deployment Tools"]
      }
    ],
    softwareTools: [
      "Unity 3D",
      "Unreal Engine",
      "ARFoundation",
      "Oculus SDK",
      "SteamVR",
      "ARCore",
      "ARKit",
      "Blender"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is designed for developers and designers looking to enter the exciting world of VR/AR development and create immersive experiences.",
      audiences: [
        "Game Developers expanding into VR/AR",
        "Mobile App Developers exploring immersive tech",
        "3D Artists transitioning to interactive media",
        "Product Designers interested in spatial computing",
        "Students pursuing XR development careers",
        "Tech Entrepreneurs building VR/AR products"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Karthik Raj",
      qualifications: "M.Tech Computer Graphics, B.E Computer Science",
      experience: "6+ years in VR/AR development and immersive technology",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      bio: "Karthik is a VR/AR specialist with extensive experience in developing immersive applications for leading tech companies. He has worked on projects for Meta, Microsoft HoloLens, and has built VR training simulations used by Fortune 500 companies. His expertise spans from Unity 3D development to advanced spatial computing."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Sanjay Patel",
        role: "VR Developer",
        company: "Tata Consultancy Services",
        rating: 5,
        feedback: "This course gave me the practical skills to transition from web development to VR. The hands-on projects and industry insights were invaluable.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Meera Shah",
        role: "Product Designer",
        company: "Myntra",
        rating: 5,
        feedback: "Excellent introduction to VR/AR development. The instructor's real-world experience and practical examples made complex concepts easy to understand.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Arjun Nair",
        role: "Freelance Developer",
        company: "Independent",
        rating: 5,
        feedback: "The VR/AR skills I learned here opened up completely new opportunities. I'm now working on exciting immersive projects for international clients.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior game development experience?",
        answer: "Basic programming knowledge is helpful but not required. We'll cover Unity fundamentals as part of the curriculum. Familiarity with C# is beneficial but we'll provide learning resources."
      },
      {
        question: "What VR/AR hardware do I need?",
        answer: "You don't need VR/AR hardware to start learning. We'll provide access to development tools and simulators. However, having access to devices like Oculus Quest or HoloLens enhances the learning experience."
      },
      {
        question: "Will I be able to publish my VR/AR apps?",
        answer: "Yes! We'll guide you through the entire process from development to deployment on platforms like Oculus Store, Steam VR, and mobile app stores."
      },
      {
        question: "What's the difference between VR and AR development?",
        answer: "We cover both! VR creates completely immersive virtual environments, while AR overlays digital content on the real world. You'll learn to develop for both platforms."
      },
      {
        question: "Are there job opportunities in VR/AR?",
        answer: "Absolutely! The XR industry is rapidly growing with opportunities in gaming, education, healthcare, training simulations, and enterprise applications. We provide career guidance and industry connections."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default VRARPrototyping;