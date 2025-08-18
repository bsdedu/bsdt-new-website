import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const UXResearchSprint = () => {
  const courseData = {
    // SEO & Meta
    title: "UX Research Sprint - 3 Week Course | BSD Design School",
    description: "Master user research methodologies and data-driven design decisions. Learn user interviews, usability testing, and research methods in 3 weeks.",
    
    // Banner Section
    courseTitle: "UX Research Sprint",
    heroImage: "/lovable-uploads/eba009c8-7ee6-48b0-80a0-3e71ec2c0454.png",
    duration: "3 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Master user research methodologies and learn to make data-driven design decisions. Develop skills in user interviews, usability testing, and research analysis to create user-centered products.",
    learningHighlights: [
      "Master qualitative and quantitative research methods",
      "Conduct effective user interviews and surveys",
      "Design and execute usability testing sessions",
      "Analyze research data and extract actionable insights",
      "Create research reports and presentations",
      "Build a comprehensive UX research portfolio"
    ],
    keyFeatures: [
      "Hands-on research project experience",
      "Industry-standard research tools and methods",
      "Real user testing with live participants",
      "Data analysis and insight generation",
      "Professional certificate upon completion",
      "Portfolio of research case studies"
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
        type: "Professional Certificate in UX Research",
        description: "Industry-recognized certificate validating your expertise in user experience research methodologies"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Research Fundamentals & Planning",
        topics: [
          "Introduction to UX research and its importance",
          "Research methods overview: when to use what",
          "Research planning and goal setting",
          "Creating research questions and hypotheses",
          "Ethics in user research and consent protocols"
        ],
        tools: ["Research Planning Templates", "Ethics Guidelines", "Goal Setting Frameworks"]
      },
      {
        week: 2,
        title: "Data Collection & User Testing",
        topics: [
          "Conducting effective user interviews",
          "Survey design and distribution strategies",
          "Usability testing setup and moderation",
          "A/B testing and quantitative analysis",
          "Card sorting and tree testing methods"
        ],
        tools: ["Zoom", "Typeform", "Maze", "OptimalSort", "UserTesting"]
      },
      {
        week: 3,
        title: "Analysis & Insights Presentation",
        topics: [
          "Qualitative data analysis and affinity mapping",
          "Statistical analysis for quantitative data",
          "Creating personas and journey maps from research",
          "Research report writing and storytelling",
          "Presenting insights to stakeholders effectively"
        ],
        tools: ["Miro", "FigJam", "Google Analytics", "Presentation Tools", "Research Templates"]
      }
    ],
    softwareTools: [
      "Figma",
      "Miro",
      "Maze",
      "UserTesting",
      "Typeform",
      "Google Analytics",
      "Hotjar",
      "OptimalSort"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is designed for professionals who want to master user research and make data-driven design decisions in their work.",
      audiences: [
        "UX/UI Designers wanting to add research skills",
        "Product Managers seeking user insights expertise",
        "Marketing Professionals exploring user behavior",
        "Business Analysts interested in user research",
        "Students pursuing UX research careers",
        "Entrepreneurs building user-centered products"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Dr. Kavya Menon",
      qualifications: "PhD HCI, M.Des Interaction Design",
      experience: "9+ years in UX research and human-computer interaction",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      bio: "Dr. Kavya Menon is a UX research expert with extensive experience in both academic and industry settings. She has led research teams at companies like Microsoft, Amazon, and has published numerous papers on user behavior. Her research has directly influenced product decisions affecting millions of users worldwide."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Ankit Agarwal",
        role: "Product Manager",
        company: "Razorpay",
        rating: 5,
        feedback: "This course gave me the research skills to back up product decisions with solid user data. The insights we now generate have dramatically improved our product success rate.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Deepika Singh",
        role: "UX Designer",
        company: "Paytm",
        rating: 5,
        feedback: "Incredible depth of knowledge and practical application. I went from making design assumptions to creating user-validated designs that perform better.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Rahul Joshi",
        role: "UX Researcher",
        company: "Flipkart",
        rating: 5,
        feedback: "The research methodologies and analysis techniques I learned here are now core to my daily work. Highly recommend for anyone serious about UX research.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior UX design experience?",
        answer: "While UX design experience is helpful, it's not required. We cover research fundamentals from the ground up and welcome participants from various backgrounds."
      },
      {
        question: "Will I work with real users during the course?",
        answer: "Yes! You'll conduct actual user interviews and usability tests with real participants as part of your hands-on learning experience."
      },
      {
        question: "What tools and software will I learn?",
        answer: "You'll master industry-standard tools like Maze, UserTesting, Typeform, Miro, and Google Analytics for comprehensive research workflows."
      },
      {
        question: "How is this different from UX design courses?",
        answer: "This course focuses specifically on research methodologies, data collection, and analysis rather than visual design. It's perfect for developing evidence-based design skills."
      },
      {
        question: "Can I apply these skills immediately at work?",
        answer: "Absolutely! The methodologies and frameworks you learn can be applied immediately to improve product decisions and validate design choices in any organization."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default UXResearchSprint;