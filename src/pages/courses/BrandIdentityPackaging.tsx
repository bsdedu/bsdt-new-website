import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const BrandIdentityPackaging = () => {
  const courseData = {
    // SEO & Meta
    title: "Brand Identity and Packaging Design - 6 Week Course | BSD Design School",
    description: "Develop complete brand systems and commercial packaging for Indian markets. Learn Brand Strategy, Visual Identity, Packaging Design, and Brand Guidelines in 6 weeks.",
    
    // Banner Section
    courseTitle: "Brand Identity and Packaging Design",
    heroImage: "/lovable-uploads/c8fcc582-5196-4c26-8020-688dde63ac20.png",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Develop complete brand systems and commercial packaging for Indian markets. Master the art of creating memorable brand identities that resonate with Indian consumers and stand out in competitive marketplaces.",
    learningHighlights: [
      "Master comprehensive brand strategy development",
      "Create memorable visual identity systems",
      "Design commercial packaging for Indian markets",
      "Develop complete brand guideline documents",
      "Understand cultural nuances in Indian branding",
      "Build professional brand identity portfolios"
    ],
    keyFeatures: [
      "India-focused brand strategy training",
      "Commercial packaging design projects",
      "Cultural sensitivity in design approach",
      "Real client brief simulations",
      "Professional certificate upon completion",
      "Industry mentor guidance and feedback"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "May 15, 2025",
        endDate: "June 26, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded Sessions"
      },
      pricing: {
        originalPrice: 26999,
        discountedPrice: 18999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount available",
          "EMI options with 0% interest",
          "Student and group discounts"
        ]
      },
      certification: {
        provider: "BSD Design School & Industry Partners",
        type: "Professional Certificate in Brand Identity & Packaging Design",
        description: "Industry-recognized certificate validating your expertise in brand development and packaging design"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Brand Strategy & Research",
        topics: [
          "Brand positioning and strategy fundamentals",
          "Market research and competitor analysis",
          "Target audience identification and personas",
          "Cultural considerations in Indian markets",
          "Brand positioning statement development"
        ],
        tools: ["Research Methodologies", "Market Analysis", "Persona Development", "Strategy Frameworks"]
      },
      {
        week: 2,
        title: "Visual Identity Development",
        topics: [
          "Logo design principles and methodology",
          "Typography selection and hierarchy",
          "Color psychology and cultural significance",
          "Visual language development",
          "Iconography and supporting elements"
        ],
        tools: ["Adobe Illustrator", "Typography Tools", "Color Theory", "Logo Design"]
      },
      {
        week: 3,
        title: "Brand System Architecture",
        topics: [
          "Brand architecture and sub-brand relationships",
          "Scalable identity system development",
          "Application guidelines and usage rules",
          "Digital and print application considerations",
          "Brand voice and messaging integration"
        ],
        tools: ["Brand Architecture", "System Design", "Guidelines Creation", "Brand Voice"]
      },
      {
        week: 4,
        title: "Packaging Design Fundamentals",
        topics: [
          "Packaging design principles and functionality",
          "Material selection and sustainability",
          "Indian retail environment considerations",
          "Structural packaging design basics",
          "Label design and information hierarchy"
        ],
        tools: ["Packaging Design", "Material Knowledge", "Structural Design", "Adobe Creative Suite"]
      },
      {
        week: 5,
        title: "Advanced Packaging & Production",
        topics: [
          "3D packaging visualization and mockups",
          "Print production and finishing techniques",
          "Cost optimization and material efficiency",
          "Regulatory compliance and labeling requirements",
          "Sustainable packaging solutions"
        ],
        tools: ["3D Mockup Tools", "Print Production", "Packaging Software", "Sustainability Guidelines"]
      },
      {
        week: 6,
        title: "Brand Guidelines & Portfolio",
        topics: [
          "Comprehensive brand guideline creation",
          "Brand implementation across touchpoints",
          "Portfolio development and case study creation",
          "Client presentation techniques",
          "Brand maintenance and evolution strategies"
        ],
        tools: ["Documentation Tools", "Portfolio Platforms", "Presentation Software", "Brand Management"]
      }
    ],
    softwareTools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
      "Sketch",
      "KeyShot",
      "Cinema 4D",
      "ArtiosCAD"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is designed for designers and marketing professionals looking to specialize in brand identity and packaging design for Indian markets.",
      audiences: [
        "Graphic Designers wanting to specialize in branding",
        "Marketing Professionals developing brand strategies",
        "Packaging Designers entering the Indian market",
        "Entrepreneurs building their own brand identities",
        "Freelancers expanding into brand design services",
        "Students preparing for brand design careers"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Rajesh Menon",
      qualifications: "M.Des Brand Design, B.F.A Visual Communication",
      experience: "12+ years in brand identity and packaging design",
      image: "/lovable-uploads/instructor-rajesh.jpg",
      bio: "Rajesh is a renowned brand strategist and packaging designer who has created iconic brand identities for over 200 Indian and international brands. His work includes rebranding campaigns for major FMCG companies and startups. Rajesh has won multiple design awards including the India Design Mark and has been featured in Brand Equity and Campaign India for his innovative approach to culturally relevant brand design."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Kavya Iyer",
        role: "Brand Designer",
        company: "Godrej Consumer Products",
        rating: 5,
        feedback: "Rajesh's course gave me deep insights into Indian consumer psychology and cultural nuances in branding. The packaging projects were incredibly practical and directly applicable to my work.",
        image: "/lovable-uploads/testimonial-kavya.jpg"
      },
      {
        name: "Siddharth Agarwal",
        role: "Creative Director",
        company: "Wunderman Thompson",
        rating: 5,
        feedback: "The strategic approach to brand development in this course is unmatched. It changed how I think about brand positioning and visual identity systems.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Meera Krishnan",
        role: "Founder",
        company: "Organic Harvest Co.",
        rating: 5,
        feedback: "As an entrepreneur, this course helped me build a strong brand foundation for my startup. The packaging insights were particularly valuable for retail success.",
        image: "/lovable-uploads/testimonial-meera.jpg"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior branding experience?",
        answer: "Basic design knowledge is helpful but not required. We cover branding fundamentals and build up to advanced techniques. The course is designed for both beginners and experienced designers looking to specialize."
      },
      {
        question: "Will I work on real brand projects?",
        answer: "Yes, you'll work on simulated real client briefs and develop a complete brand identity project that can be added to your professional portfolio."
      },
      {
        question: "Is the focus specifically on Indian markets?",
        answer: "While we emphasize Indian market considerations and cultural nuances, the principles and techniques taught are globally applicable. The Indian focus provides valuable cultural design insights."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 7-day money-back guarantee from the course start date. If you're not satisfied with the course content or delivery, you can get a full refund within this period."
      },
      {
        question: "How much time should I dedicate outside of live sessions?",
        answer: "We recommend 5-6 hours per week for brand research, design work, and portfolio development outside of the 2-hour live sessions."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default BrandIdentityPackaging;