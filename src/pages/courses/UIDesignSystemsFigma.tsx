import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const UIDesignSystemsFigma = () => {
  const courseData = {
    // SEO & Meta
    title: "UI Design Systems and Figma Mastery - 6 Week Course | BSD Design School",
    description: "Develop scalable design systems and master advanced Figma techniques for digital products. Learn Atomic Design, Auto-Layout, Micro-interactions, and Accessibility in 6 weeks.",
    
    // Banner Section
    courseTitle: "UI Design Systems and Figma Mastery",
    heroImage: "/lovable-uploads/ui-ux-design-hero.jpg",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Develop scalable design systems and master advanced Figma techniques for digital products. Learn to create consistent, accessible, and maintainable design systems that scale across teams and projects.",
    learningHighlights: [
      "Master atomic design methodology and component architecture",
      "Create advanced Figma components with auto-layout",
      "Design accessible and inclusive user interfaces",
      "Build comprehensive design system documentation",
      "Implement micro-interactions and advanced prototyping",
      "Develop professional design system workflows"
    ],
    keyFeatures: [
      "Industry-standard design system practices",
      "Advanced Figma techniques and shortcuts",
      "Accessibility compliance training",
      "Real-world project portfolio development",
      "Professional certificate upon completion",
      "Live instructor guidance and feedback sessions"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "March 15, 2025",
        endDate: "April 26, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded Sessions"
      },
      pricing: {
        originalPrice: 24999,
        discountedPrice: 16999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount available",
          "EMI options with 0% interest",
          "Student and group discounts"
        ]
      },
      certification: {
        provider: "BSD Design School & Industry Partners",
        type: "Professional Certificate in UI Design Systems",
        description: "Industry-recognized certificate validating your expertise in design systems and Figma mastery"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Design System Fundamentals",
        topics: [
          "Introduction to design systems and their importance",
          "Atomic design methodology and component hierarchy",
          "Design token creation and management",
          "Color systems and typography scales",
          "Setting up design system foundations in Figma"
        ],
        tools: ["Figma", "Design Tokens", "Color Theory", "Typography"]
      },
      {
        week: 2,
        title: "Advanced Figma Components",
        topics: [
          "Component properties and advanced variants",
          "Auto-layout mastery and responsive design",
          "Boolean operations and complex shapes",
          "Smart animate and micro-interactions",
          "Plugin development and workflow automation"
        ],
        tools: ["Figma Advanced", "Auto-layout", "Smart Animate", "Figma Plugins"]
      },
      {
        week: 3,
        title: "Accessibility & Inclusive Design",
        topics: [
          "WCAG guidelines and accessibility principles",
          "Color contrast and visual hierarchy",
          "Keyboard navigation and screen reader compatibility",
          "Inclusive design patterns and considerations",
          "Testing and validation techniques"
        ],
        tools: ["Accessibility Checkers", "Contrast Tools", "Screen Readers", "WCAG Guidelines"]
      },
      {
        week: 4,
        title: "Complex Component Systems",
        topics: [
          "Building data tables and complex forms",
          "Navigation systems and information architecture",
          "Modal and overlay component patterns",
          "State management in design components",
          "Component documentation and usage guidelines"
        ],
        tools: ["Figma Libraries", "Component Documentation", "Interaction Design", "State Management"]
      },
      {
        week: 5,
        title: "Prototyping & Micro-interactions",
        topics: [
          "Advanced prototyping techniques in Figma",
          "Micro-interaction design and implementation",
          "Animation principles for UI design",
          "User flow creation and validation",
          "Interactive component behaviors"
        ],
        tools: ["Figma Prototyping", "Animation Tools", "User Flow Mapping", "Interaction Design"]
      },
      {
        week: 6,
        title: "Design System Implementation & Handoff",
        topics: [
          "Design system documentation and maintenance",
          "Developer handoff and collaboration tools",
          "Version control for design systems",
          "Design system governance and scaling",
          "Portfolio presentation and case study development"
        ],
        tools: ["Documentation Tools", "Developer Handoff", "Version Control", "Portfolio Platforms"]
      }
    ],
    softwareTools: [
      "Figma",
      "Adobe Creative Suite",
      "Sketch",
      "InVision",
      "Zeplin",
      "Abstract",
      "Notion",
      "Miro"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is designed for UI/UX designers and design teams looking to create scalable design systems and master advanced Figma techniques.",
      audiences: [
        "UI/UX Designers wanting to specialize in design systems",
        "Product Designers working on multi-platform products",
        "Design Team Leads building organizational design standards",
        "Frontend Developers interested in design system implementation",
        "Freelancers looking to offer design system services",
        "Students preparing for advanced UI design careers"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Priya Malhotra",
      qualifications: "M.Des Interaction Design, B.Des Visual Communication",
      experience: "9+ years in UI/UX design and design system development",
      image: "/lovable-uploads/instructor-priya.jpg",
      bio: "Priya is a senior design systems architect who has built design systems for companies like Swiggy, Razorpay, and Paytm. She has led design teams of 15+ designers and has been instrumental in scaling design operations across multiple product lines. Priya is a Figma Community advocate and has contributed to popular design system resources used by thousands of designers worldwide."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Arjun Kumar",
        role: "Senior Product Designer",
        company: "Zomato",
        rating: 5,
        feedback: "This course completely transformed how I approach design systems. Priya's expertise in Figma and systematic thinking helped me build a design system that our entire team now relies on daily.",
        image: "/lovable-uploads/testimonial-arjun.jpg"
      },
      {
        name: "Sneha Reddy",
        role: "Design Lead",
        company: "PhonePe",
        rating: 5,
        feedback: "The advanced Figma techniques I learned here have made me 10x more efficient. The accessibility focus was especially valuable for building inclusive products.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Vikram Singh",
        role: "UX Designer",
        company: "CRED",
        rating: 5,
        feedback: "Incredible depth of knowledge and practical application. The portfolio projects from this course directly helped me land my current role at CRED.",
        image: "/lovable-uploads/testimonial-vikram.jpg"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior Figma experience?",
        answer: "Basic Figma knowledge is helpful but not required. We start with fundamentals and quickly move to advanced techniques. Having some UI design experience is beneficial for getting the most out of this course."
      },
      {
        question: "Will I get access to Figma Pro during the course?",
        answer: "We provide access to Figma's advanced features during the course period. We'll also guide you on team setups and subscription options for continued learning."
      },
      {
        question: "How is this different from other Figma courses?",
        answer: "Our course focuses specifically on design systems and advanced Figma techniques used in professional environments. We emphasize real-world projects and enterprise-level design system thinking."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 7-day money-back guarantee from the course start date. If you're not satisfied with the course content or delivery, you can get a full refund within this period."
      },
      {
        question: "How much time should I dedicate outside of live sessions?",
        answer: "We recommend 4-5 hours per week for practice and design system projects outside of the 2-hour live sessions. This includes working on your portfolio project."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default UIDesignSystemsFigma;