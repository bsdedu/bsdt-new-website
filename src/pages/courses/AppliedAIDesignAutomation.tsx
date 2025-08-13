import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const AppliedAIDesignAutomation = () => {
  const courseData = {
    // SEO & Meta
    title: "Applied AI for Design Automation - 6 Week Course | BSD Design School",
    description: "Implement AI tools to streamline design workflows and enhance creativity. Learn prompt engineering, AI-assisted 3D modeling, and custom AI solutions in 6 weeks.",
    
    // Banner Section
    courseTitle: "Applied AI for Design Automation",
    heroImage: "/lovable-uploads/cff48d66-ff3f-4995-8601-0591e0c8149a.png",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Transform your design workflow with cutting-edge AI tools and automation techniques. Learn to implement AI solutions that enhance creativity and streamline production.",
    learningHighlights: [
      "Master AI prompt engineering for design",
      "Implement AI-assisted 3D modeling workflows",
      "Develop custom AI solutions for design tasks",
      "Understand legal and ethical considerations",
      "Build automated design generation systems",
      "Create AI-powered design validation tools"
    ],
    keyFeatures: [
      "Hands-on AI implementation",
      "Industry-relevant case studies",
      "Legal and ethical guidance",
      "Custom AI solution development",
      "Professional certificate",
      "Portfolio project completion"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "July 15, 2025",
        endDate: "August 26, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded"
      },
      pricing: {
        originalPrice: 24999,
        discountedPrice: 14999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount",
          "EMI options available",
          "Corporate discounts"
        ]
      },
      certification: {
        provider: "BSD Design School",
        type: "Professional AI Certificate",
        description: "Industry-recognized certificate in Applied AI for Design Automation"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Prompt Engineering",
        topics: [
          "Mastering MidJourney/DALL·E for design briefs",
          "Advanced prompt techniques and optimization",
          "Style consistency across AI outputs",
          "Brand-specific AI outputs and guidelines",
          "Creative prompting strategies"
        ],
        tools: ["MidJourney", "DALL-E", "Prompt Engineering Tools"]
      },
      {
        week: 2,
        title: "AI-Assisted 3D Modeling",
        topics: [
          "Kaedim and NVIDIA Omniverse workflows",
          "AI mesh generation and optimization",
          "Texture synthesis and material creation",
          "Optimization techniques for 3D assets",
          "Integration with traditional modeling tools"
        ],
        tools: ["Kaedim", "NVIDIA Omniverse", "3D AI Tools"]
      },
      {
        week: 3,
        title: "Automated CAD Processes",
        topics: [
          "AI-generated Grasshopper scripts",
          "Parametric automation strategies",
          "Design optimization algorithms",
          "Workflow integration techniques",
          "Custom automation development"
        ],
        tools: ["Grasshopper AI", "CAD Automation", "Optimization Tools"]
      },
      {
        week: 4,
        title: "Legal & Ethical Considerations",
        topics: [
          "Copyright and IP protection for AI outputs",
          "Ethical AI use in design practice",
          "Commercial licensing frameworks",
          "Attribution standards and best practices",
          "Risk management strategies"
        ],
        tools: ["Legal Frameworks", "Ethics Guidelines", "Documentation Tools"]
      },
      {
        week: 5,
        title: "AI for Presentations",
        topics: [
          "ChatGPT-powered client decks",
          "Automated documentation generation",
          "Visual storytelling with AI",
          "Client communication enhancement",
          "Presentation optimization techniques"
        ],
        tools: ["ChatGPT", "Presentation AI", "Documentation Tools"]
      },
      {
        week: 6,
        title: "Custom AI Assistants",
        topics: [
          "Building studio-specific GPTs",
          "Custom training data preparation",
          "API integrations and workflows",
          "Deployment strategies and maintenance",
          "Performance monitoring and optimization"
        ],
        tools: ["Custom GPTs", "API Development", "Deployment Tools"]
      }
    ],
    softwareTools: [
      "MidJourney",
      "DALL-E",
      "ChatGPT",
      "Stable Diffusion",
      "RunwayML",
      "Kaedim",
      "Custom AI Tools"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who is it for?",
      description: "This course is ideal for design professionals and teams looking to implement AI automation and streamline their creative workflows.",
      audiences: [
        "Design Teams seeking workflow automation solutions",
        "Creative Directors implementing AI strategies",
        "UX/UI Designers exploring AI-assisted design",
        "Product Managers integrating AI into design processes",
        "Design Agency Owners scaling creative operations",
        "Technology Leaders in creative organizations"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Dr. Maria Santos",
      qualifications: "PhD AI & Machine Learning, M.Tech Computer Science",
      experience: "10+ years in AI research and design automation",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      bio: "Dr. Maria Santos is a leading AI Research Scientist and Design Technologist specializing in machine learning applications for creative industries. She has worked at Google AI, Adobe, and MIT Media Lab, bringing cutting-edge AI research to practical design applications."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Arjun Mehta",
        role: "Creative Director",
        company: "Ogilvy",
        rating: 5,
        feedback: "This course revolutionized how I approach design. The AI automation techniques have increased my team's productivity by 300%.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Sneha Gupta",
        role: "UX Designer",
        company: "Swiggy",
        rating: 5,
        feedback: "Amazing insights into AI tools for design. The hands-on projects and real-world applications made all the difference.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Vikram Joshi",
        role: "Freelance Designer",
        company: "Independent",
        rating: 5,
        feedback: "The AI skills I learned here have made me stand out in the market. My clients are amazed by the quality and speed of delivery.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need programming experience for this course?",
        answer: "No programming experience is required. We focus on practical applications and tools that designers can use without coding. However, basic computer literacy is helpful."
      },
      {
        question: "Which AI tools will be covered in the course?",
        answer: "We cover major AI tools including MidJourney, DALL·E, ChatGPT, Stable Diffusion, RunwayML, Kaedim, and various other design-focused AI platforms."
      },
      {
        question: "Will I need to purchase AI tool subscriptions?",
        answer: "We provide access to most tools during the course. Some premium features may require subscriptions, but we'll guide you on free alternatives and trial options."
      },
      {
        question: "How is this different from other AI courses?",
        answer: "Our course is specifically designed for designers, focusing on practical applications rather than technical theory. We emphasize real-world projects and design workflows."
      },
      {
        question: "What kind of projects will I work on?",
        answer: "You'll work on diverse projects including brand identity automation, UI/UX design assistance, 3D asset generation, and complete design workflow automation."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default AppliedAIDesignAutomation;