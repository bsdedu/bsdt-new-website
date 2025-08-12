import React from 'react';
import { CourseLandingTemplate } from '@/components/course/CourseLandingTemplate';
import aiOptimizationImage from '@/assets/programs/ai-optimization.jpg';

const AppliedAIDesignAutomation: React.FC = () => {
  const courseData = {
    // SEO & Basic Info
    title: "Applied AI for Design Automation",
    description: "Implement AI tools to streamline design workflows and enhance creativity. Master prompt engineering, AI-assisted 3D modeling, legal considerations, and custom AI assistants.",
    metaTitle: "Applied AI for Design Automation - 6 Week Course | BSD Design School",
    metaDescription: "Implement AI tools to streamline design workflows and enhance creativity. Learn prompt engineering, AI-assisted 3D modeling, and custom AI solutions in 6 weeks.",
    
    // Hero Banner Section
    courseName: "Applied AI for Design Automation",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    startDate: "Jul 2025",
    originalPrice: "₹24,999",
    discountedPrice: "₹14,999",
    discount: "40%",
    rating: "4.7",
    ratingCount: "800+",
    heroImage: aiOptimizationImage,
    
    // Course Overview
    overview: "Step into the future of design with our comprehensive Applied AI course. Learn to harness the power of artificial intelligence to automate design processes, generate innovative solutions, and transform your creative workflow with cutting-edge AI tools and techniques.",
    features: [
      "Master AI design tools and automation workflows",
      "Legal & ethical AI use in professional practice",
      "Custom AI assistant creation for design studios",
      "Industry-ready applications and portfolio projects",
      "Advanced prompt engineering techniques",
      "AI-powered visualization and presentation tools"
    ],
    
    // Key Details
    schedule: {
      startDate: "July 15, 2025",
      endDate: "August 26, 2025",
      sessionTimings: "7:00 PM - 9:00 PM IST",
      totalSessions: "18 Sessions"
    },
    certification: "BSD Design School Certificate in Applied AI for Design",
    
    // Course Details
    highlights: [
      "Master AI design tools",
      "Implement automation workflows",
      "Legal & ethical AI use",
      "Custom AI assistant creation",
      "Industry-ready applications",
      "Portfolio automation projects",
      "Advanced prompt engineering",
      "AI-powered visualization",
      "Workflow optimization"
    ],
    
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      }
    ],
    
    // Tools & Skills
    tools: [
      { name: "MidJourney", icon: "/api/placeholder/64/64" },
      { name: "DALL·E", icon: "/api/placeholder/64/64" },
      { name: "ChatGPT", icon: "/api/placeholder/64/64" },
      { name: "Stable Diffusion", icon: "/api/placeholder/64/64" },
      { name: "RunwayML", icon: "/api/placeholder/64/64" },
      { name: "Kaedim", icon: "/api/placeholder/64/64" }
    ],
    
    // Instructors
    instructors: [
      {
        name: "Dr. Maria Santos",
        experience: "10+ years of exp.",
        bio: "AI Research Scientist and Design Technologist specializing in machine learning applications for creative industries.",
        image: "/api/placeholder/120/120",
        companies: ["Google AI", "Adobe", "MIT Media Lab"],
        linkedIn: "#"
      },
      {
        name: "James Wilson",
        experience: "7+ years of exp.",
        bio: "Creative Technologist with expertise in AI automation and computational design workflows.",
        image: "/api/placeholder/120/120",
        companies: ["IDEO", "Autodesk", "Nvidia"],
        linkedIn: "#"
      }
    ],
    
    // Case Studies
    caseStudies: [
      {
        title: "AI-Generated Building Facade",
        author: "Lisa Chen",
        institution: "Stanford University",
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        title: "Automated Design Process",
        author: "Marcus Thompson",
        institution: "Royal College of Art",
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        title: "AI Design Assistant Bot",
        author: "Sophia Rodriguez",
        institution: "Parsons School of Design",
        image: "/api/placeholder/300/200",
        link: "#"
      }
    ],
    
    // Testimonials
    testimonials: [
      {
        name: "Arjun Mehta",
        role: "Creative Director",
        company: "Ogilvy",
        content: "This course revolutionized how I approach design. The AI automation techniques have increased my team's productivity by 300%.",
        rating: 5,
        image: "/api/placeholder/60/60"
      },
      {
        name: "Sneha Gupta",
        role: "UX Designer",
        company: "Swiggy",
        content: "Amazing insights into AI tools for design. The hands-on projects and real-world applications made all the difference.",
        rating: 5,
        image: "/api/placeholder/60/60"
      },
      {
        name: "Vikram Joshi",
        role: "Freelance Designer",
        content: "The AI skills I learned here have made me stand out in the market. My clients are amazed by the quality and speed of delivery.",
        rating: 5,
        image: "/api/placeholder/60/60"
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
      },
      {
        question: "Is there ongoing support after the course?",
        answer: "Yes, you'll get lifetime access to course materials, updates on new AI tools, and access to our alumni community for continued learning."
      }
    ],
    
    // Additional Props
    skillsOffered: [
      "20+ AI Tools Mastery",
      "Automation Workflows",
      "Custom AI Development",
      "Legal Compliance",
      "Industry Certification",
      "Portfolio Projects",
      "Expert Mentorship",
      "Career Support"
    ]
  };

  return <CourseLandingTemplate {...courseData} />;
};

export default AppliedAIDesignAutomation;