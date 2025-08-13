import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const DigitalFashionTechPacks = () => {
  const courseData = {
    // SEO & Meta
    title: "Digital Fashion Illustration and Tech Packs - 6 Week Course | BSD Design School",
    description: "Master digital fashion design and create production-ready technical packages. Learn Digital Rendering, Technical Drawing, CLO3D, and Sustainable Materials in 6 weeks.",
    
    // Banner Section
    courseTitle: "Digital Fashion Illustration and Tech Packs",
    heroImage: "/lovable-uploads/fashion-tech-hero.jpg",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Master digital fashion design and create production-ready technical packages. Learn to bridge the gap between creative fashion design and commercial production through advanced digital tools and sustainable design practices.",
    learningHighlights: [
      "Master professional digital fashion illustration",
      "Create production-ready technical drawings",
      "Learn 3D fashion design with CLO3D",
      "Understand sustainable material selection",
      "Develop comprehensive tech pack creation skills",
      "Build professional fashion design portfolios"
    ],
    keyFeatures: [
      "Industry-standard digital fashion tools",
      "Sustainable fashion design focus",
      "Production-ready technical skills",
      "Real fashion brand project simulations",
      "Professional certificate upon completion",
      "Fashion industry mentor guidance"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "June 15, 2025",
        endDate: "July 27, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded Sessions"
      },
      pricing: {
        originalPrice: 28999,
        discountedPrice: 19999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount available",
          "EMI options with 0% interest",
          "Student and group discounts"
        ]
      },
      certification: {
        provider: "BSD Design School & Industry Partners",
        type: "Professional Certificate in Digital Fashion Design & Tech Packs",
        description: "Industry-recognized certificate validating your expertise in digital fashion design and technical documentation"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Digital Fashion Illustration Fundamentals",
        topics: [
          "Fashion figure drawing and proportions",
          "Digital sketching techniques and tools",
          "Fashion rendering styles and approaches",
          "Color theory in fashion illustration",
          "Building fashion illustration workflow"
        ],
        tools: ["Adobe Illustrator", "Procreate", "Fashion Templates", "Digital Drawing"]
      },
      {
        week: 2,
        title: "Advanced Digital Rendering",
        topics: [
          "Fabric texture rendering techniques",
          "Light and shadow in fashion illustration",
          "Print and pattern application",
          "Fashion accessories illustration",
          "Presentation board creation"
        ],
        tools: ["Advanced Illustrator", "Photoshop Rendering", "Texture Libraries", "Pattern Design"]
      },
      {
        week: 3,
        title: "Technical Drawing & Specifications",
        topics: [
          "Technical flat drawing principles",
          "Garment construction understanding",
          "Detail callouts and annotations",
          "Size grading visualization",
          "Technical drawing standards"
        ],
        tools: ["Technical Drawing", "CAD Software", "Measurement Tools", "Construction Knowledge"]
      },
      {
        week: 4,
        title: "3D Fashion Design with CLO3D",
        topics: [
          "CLO3D interface and basic operations",
          "3D garment pattern creation",
          "Virtual fabric simulation",
          "Fit testing and adjustments",
          "3D to 2D pattern extraction"
        ],
        tools: ["CLO3D", "3D Modeling", "Pattern Making", "Virtual Fitting"]
      },
      {
        week: 5,
        title: "Sustainable Materials & Tech Packs",
        topics: [
          "Sustainable fabric selection and properties",
          "Eco-friendly manufacturing processes",
          "Tech pack creation and documentation",
          "Cost calculation and material specifications",
          "Supply chain considerations"
        ],
        tools: ["Material Libraries", "Tech Pack Templates", "Sustainability Guidelines", "Cost Calculation"]
      },
      {
        week: 6,
        title: "Professional Portfolio & Production",
        topics: [
          "Fashion portfolio development strategies",
          "Client presentation techniques",
          "Production workflow optimization",
          "Industry networking and opportunities",
          "Fashion business fundamentals"
        ],
        tools: ["Portfolio Platforms", "Presentation Software", "Networking Tools", "Business Planning"]
      }
    ],
    softwareTools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CLO3D",
      "Procreate",
      "Optitex",
      "Gerber AccuMark",
      "KeyShot",
      "InDesign"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is designed for fashion designers, illustrators, and industry professionals looking to master digital fashion design and technical documentation.",
      audiences: [
        "Fashion Designers transitioning to digital workflows",
        "Fashion Illustrators enhancing technical skills",
        "Apparel Technicians improving design communication",
        "Fashion Students preparing for industry careers",
        "Freelancers expanding into fashion design services",
        "Entrepreneurs starting fashion brands"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Ananya Sharma",
      qualifications: "M.Des Fashion Design, B.Des Textile Design",
      experience: "10+ years in fashion design and digital illustration",
      image: "/lovable-uploads/instructor-ananya.jpg",
      bio: "Ananya is a senior fashion designer who has worked with leading Indian fashion brands including Fabindia, Biba, and W for Woman. She specializes in sustainable fashion design and has been instrumental in digitizing design processes for multiple fashion houses. Ananya has trained over 500 fashion professionals in digital design tools and sustainable practices."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Ravi Gupta",
        role: "Fashion Designer",
        company: "Myntra",
        rating: 5,
        feedback: "This course completely transformed my design process. The digital illustration and CLO3D skills have made me much more efficient and valuable to my team.",
        image: "/lovable-uploads/testimonial-ravi.jpg"
      },
      {
        name: "Priya Nair",
        role: "Technical Designer",
        company: "Aditya Birla Fashion",
        rating: 5,
        feedback: "The tech pack creation skills I learned here are exactly what the industry needs. Ananya's expertise in production processes was invaluable.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Kiran Patel",
        role: "Fashion Entrepreneur",
        company: "Eco Threads",
        rating: 5,
        feedback: "The sustainable fashion focus was perfect for my brand. I now have the skills to create professional tech packs and work effectively with manufacturers.",
        image: "/lovable-uploads/testimonial-kiran.jpg"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior fashion design experience?",
        answer: "Basic understanding of fashion design principles is helpful but not required. We cover fundamentals and build up to advanced digital techniques. Art or design background is beneficial."
      },
      {
        question: "Will I get access to CLO3D software?",
        answer: "We provide access to CLO3D during the course period. We'll also guide you on educational licenses and subscription options for continued learning."
      },
      {
        question: "Is this course focused on sustainable fashion?",
        answer: "Yes, we emphasize sustainable practices throughout the course, including eco-friendly materials, processes, and design decisions that minimize environmental impact."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 7-day money-back guarantee from the course start date. If you're not satisfied with the course content or delivery, you can get a full refund within this period."
      },
      {
        question: "How much time should I dedicate outside of live sessions?",
        answer: "We recommend 4-5 hours per week for design practice, tech pack development, and portfolio work outside of the 2-hour live sessions."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default DigitalFashionTechPacks;