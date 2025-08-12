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
    
    // Hero Section
    courseName: "Applied AI for Design Automation",
    duration: "6 Weeks",
    startDate: "Jul 2025",
    rating: "4.7",
    ratingCount: "800+",
    heroImage: aiOptimizationImage,
    studentCount: "5k+",
    studentCountLabel: "AI Specialists",
    
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
    
    // Call to Actions
    ctaTitle: "Ready to Automate Your Design Workflow?",
    ctaDescription: "Master the AI tools that are revolutionizing the design industry",
    
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