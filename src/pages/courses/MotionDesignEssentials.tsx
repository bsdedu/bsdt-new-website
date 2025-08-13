import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const MotionDesignEssentials = () => {
  const courseData = {
    // SEO & Meta
    title: "Motion Design Essentials - 3 Week Course | BSD Design School",
    description: "Create compelling animations and motion graphics for digital media. Master After Effects, Cinema 4D, and animation principles in 3 weeks.",
    
    // Banner Section
    courseTitle: "Motion Design Essentials",
    heroImage: "/lovable-uploads/b2c2c4f8-eaf1-4719-a0fa-8a988ef725d3.png",
    duration: "3 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Master the art of motion design and create compelling animations for digital media. Learn industry-standard tools and animation principles to bring your designs to life.",
    learningHighlights: [
      "Master After Effects for motion graphics",
      "Learn Cinema 4D for 3D animation",
      "Understand fundamental animation principles",
      "Create engaging social media animations",
      "Develop logo animations and brand motion",
      "Build a professional motion design portfolio"
    ],
    keyFeatures: [
      "Industry-standard software training",
      "Animation principles and theory",
      "Real-world project experience",
      "Portfolio development guidance",
      "Professional certificate upon completion",
      "Access to motion graphics libraries"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "May 15, 2025",
        endDate: "June 5, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded Sessions"
      },
      pricing: {
        originalPrice: 11999,
        discountedPrice: 6999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount available",
          "EMI options with 0% interest",
          "Student and group discounts"
        ]
      },
      certification: {
        provider: "BSD Design School & Industry Partners",
        type: "Professional Certificate in Motion Design",
        description: "Industry-recognized certificate validating your expertise in motion graphics and animation"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "After Effects Fundamentals & Animation Principles",
        topics: [
          "After Effects interface and workspace setup",
          "Understanding timelines, keyframes, and layers",
          "12 principles of animation applied to motion graphics",
          "Basic transitions and text animations",
          "Easing curves and timing fundamentals"
        ],
        tools: ["Adobe After Effects", "Animation Principles", "Typography Tools"]
      },
      {
        week: 2,
        title: "Advanced Motion Graphics & Cinema 4D",
        topics: [
          "Advanced After Effects techniques and expressions",
          "Cinema 4D interface and 3D animation basics",
          "Creating 3D motion graphics and transitions",
          "Integrating 3D elements with 2D compositions",
          "Color theory and visual hierarchy in motion"
        ],
        tools: ["Cinema 4D", "Advanced After Effects", "3D Integration Tools"]
      },
      {
        week: 3,
        title: "Brand Animation & Portfolio Development",
        topics: [
          "Logo animation techniques and brand motion",
          "Social media animation formats and optimization",
          "Sound design and audio synchronization",
          "Rendering and export optimization",
          "Building a professional motion design portfolio"
        ],
        tools: ["Brand Animation Tools", "Audio Sync", "Export Optimization", "Portfolio Platforms"]
      }
    ],
    softwareTools: [
      "Adobe After Effects",
      "Cinema 4D",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Audition",
      "Lottie Files",
      "Principle",
      "Figma"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is perfect for creative professionals looking to add motion design skills to their toolkit and create engaging animated content.",
      audiences: [
        "Graphic Designers expanding into motion graphics",
        "UI/UX Designers adding animation to interfaces",
        "Video Editors learning motion graphics",
        "Social Media Managers creating engaging content",
        "Marketing Professionals building animated campaigns",
        "Students pursuing animation and motion design careers"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Vikash Kumar",
      qualifications: "M.F.A Animation, B.Des Visual Communication",
      experience: "8+ years in motion design and animation industry",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      bio: "Vikash is a motion design specialist with extensive experience creating animations for top brands and agencies. He has worked with companies like Swiggy, Flipkart, and international advertising agencies. His work has been featured in motion design galleries and he's passionate about teaching the art of bringing designs to life through motion."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Priya Reddy",
        role: "Social Media Manager",
        company: "Byju's",
        rating: 5,
        feedback: "This course transformed how I create content for social media. The animation skills I learned have made our campaigns much more engaging and effective.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Rohit Sharma",
        role: "UI/UX Designer",
        company: "PhonePe",
        rating: 5,
        feedback: "Excellent course for adding motion to UI designs. The instructor's industry experience and practical examples made complex animation concepts easy to understand.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Sneha Jain",
        role: "Freelance Animator",
        company: "Independent",
        rating: 5,
        feedback: "The motion design skills I learned here have significantly increased my freelance rates. Clients love the professional animations I can now create.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior animation experience?",
        answer: "No prior animation experience is required. We start with fundamentals and gradually build up to advanced techniques. Basic design knowledge is helpful but not mandatory."
      },
      {
        question: "What software licenses do I need?",
        answer: "You'll need Adobe Creative Cloud (After Effects, Illustrator) and Cinema 4D. We'll guide you on getting student discounts and trial versions to get started."
      },
      {
        question: "Will I learn both 2D and 3D animation?",
        answer: "Yes! You'll master 2D motion graphics in After Effects and learn 3D animation basics in Cinema 4D, plus how to integrate both for stunning results."
      },
      {
        question: "What kind of projects will I create?",
        answer: "You'll work on logo animations, social media content, explainer video graphics, UI animations, and brand motion projects that you can add to your portfolio."
      },
      {
        question: "Is this course suitable for social media content creation?",
        answer: "Absolutely! We cover animation techniques specifically for social media platforms, including Instagram Stories, Facebook ads, and YouTube intro animations."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default MotionDesignEssentials;