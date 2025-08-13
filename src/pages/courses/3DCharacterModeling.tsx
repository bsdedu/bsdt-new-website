import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const ThreeDCharacterModeling = () => {
  const courseData = {
    // SEO & Meta
    title: "3D Character Modeling for Games - 6 Week Course | BSD Design School",
    description: "Create game-ready 3D characters with Indian aesthetics using Blender and ZBrush. Master anatomy, costume sculpting, PBR texturing, and UE5 integration in 6 weeks.",
    
    // Banner Section
    courseTitle: "3D Character Modeling for Games",
    heroImage: "/lovable-uploads/8259c7b2-4ba9-4f25-b0db-d58a47f1f432.png",
    duration: "6 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Create game-ready 3D characters with Indian aesthetics using industry-standard tools like Blender and ZBrush. Master the complete pipeline from concept to final implementation.",
    learningHighlights: [
      "Master anatomy and base mesh creation",
      "Learn advanced costume sculpting techniques",
      "Develop PBR texturing skills",
      "Integrate characters into UE5",
      "Understand game optimization workflows",
      "Create culturally authentic character designs"
    ],
    keyFeatures: [
      "Industry-standard tools training",
      "Cultural design integration",
      "Game engine optimization",
      "Portfolio development",
      "Professional certificate",
      "Live instructor feedback"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "April 15, 2025",
        endDate: "May 27, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded"
      },
      pricing: {
        originalPrice: 29999,
        discountedPrice: 19999,
        currency: "₹",
        paymentOptions: [
          "Full payment discount",
          "EMI options available",
          "Corporate discounts"
        ]
      },
      certification: {
        provider: "BSD Design School",
        type: "Professional 3D Character Artist Certificate",
        description: "Industry-recognized certificate in 3D Character Modeling for Games"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Anatomy & Base Meshes",
        topics: [
          "Human anatomy fundamentals for 3D artists",
          "Base mesh creation in Blender",
          "Proportions and reference gathering",
          "Cultural body type considerations",
          "Mesh topology best practices"
        ],
        tools: ["Blender", "Anatomy References", "MakeHuman"]
      },
      {
        week: 2,
        title: "Costume Sculpting",
        topics: [
          "Traditional Indian costume elements",
          "Fabric simulation and draping",
          "Jewelry and accessory modeling",
          "Cultural authenticity in design",
          "Detail sculpting techniques"
        ],
        tools: ["ZBrush", "Blender Sculpting", "Cultural References"]
      },
      {
        week: 3,
        title: "Advanced Sculpting",
        topics: [
          "Facial feature sculpting",
          "Hair and textile details",
          "Armor and weapon creation",
          "Surface detail enhancement",
          "Character expression development"
        ],
        tools: ["ZBrush", "Hair Techniques", "Detail Brushes"]
      },
      {
        week: 4,
        title: "PBR Texturing",
        topics: [
          "UV mapping optimization",
          "PBR workflow understanding",
          "Skin texture creation",
          "Fabric and material texturing",
          "Weathering and wear techniques"
        ],
        tools: ["Substance Painter", "UV Mapping", "Texture Libraries"]
      },
      {
        week: 5,
        title: "Rigging & Animation Prep",
        topics: [
          "Basic character rigging",
          "Weight painting fundamentals",
          "Facial rig setup",
          "Animation-ready mesh preparation",
          "Export optimization"
        ],
        tools: ["Blender Rigging", "Weight Painting", "Animation Tools"]
      },
      {
        week: 6,
        title: "UE5 Integration",
        topics: [
          "Unreal Engine 5 import workflow",
          "Character optimization for games",
          "Material setup in UE5",
          "Performance optimization",
          "Final portfolio presentation"
        ],
        tools: ["Unreal Engine 5", "Optimization Tools", "Performance Analysis"]
      }
    ],
    
    // Software Tools
    softwareTools: [
      "Blender - Primary 3D modeling and sculpting software",
      "ZBrush - Advanced digital sculpting and detail work",
      "Substance Painter - Professional PBR texturing and material creation",
      "Unreal Engine 5 - Game engine integration and optimization"
    ],
    
    // Target Audience
    targetAudience: {
      title: "Who Should Enroll",
      description: "This course is designed for aspiring 3D artists and game developers who want to specialize in character creation.",
      audiences: [
        "3D Art Beginners looking to focus on character creation",
        "Game Development Students needing character modeling skills",
        "Traditional Artists transitioning to 3D character modeling",
        "Cultural Content Creators interested in authentic Indian characters",
        "Freelance Artists wanting to expand into gaming",
        "Students preparing for careers in game art and animation"
      ]
    },
    
    // Instructor
    instructor: {
      name: "Arjun Sharma",
      qualifications: "Senior Character Artist, Epic Games India",
      experience: "8+ years in AAA game development",
      bio: "Arjun has worked on major game titles including Fortnite character assets and has extensive experience in creating culturally authentic characters for global gaming audiences. He specializes in combining traditional Indian aesthetics with modern game development pipelines.",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Priya Menon",
        role: "3D Artist",
        company: "Ubisoft India",
        rating: 5,
        feedback: "This course gave me the skills to land my dream job as a character artist. Arjun's expertise in cultural design elements was invaluable.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Raj Patel",
        role: "Indie Game Developer",
        company: "Independent Studio",
        rating: 5,
        feedback: "The UE5 integration module was exactly what I needed for my game project. My characters now look professional and run smoothly."
      },
      {
        name: "Sneha Kumar",
        role: "Freelance 3D Artist",
        company: "Freelance",
        rating: 5,
        feedback: "Learning to create authentic Indian characters opened up so many opportunities. My portfolio stands out now.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need prior 3D modeling experience?",
        answer: "While helpful, it's not required. We start with fundamentals and gradually progress to advanced techniques. Basic computer skills and artistic passion are more important."
      },
      {
        question: "What software will I need?",
        answer: "We'll primarily use Blender (free), ZBrush (educational license available), and Unreal Engine 5 (free). Detailed software setup instructions will be provided."
      },
      {
        question: "Will I create a complete character portfolio?",
        answer: "Yes! You'll create 2-3 complete game-ready characters that showcase different aspects of Indian culture and gaming aesthetics for your portfolio."
      },
      {
        question: "How culturally authentic will the characters be?",
        answer: "We work with cultural consultants and reference authentic traditional wear, jewelry, and design elements while adapting them for modern gaming contexts."
      },
      {
        question: "Can I use these skills for film/animation?",
        answer: "Absolutely! While focused on games, the skills transfer directly to film, animation, and other 3D applications. We cover industry-standard workflows."
      }
    ],
    
    // CTA
    enrollmentUrl: "https://forms.gle/3dcharactermodeling",
    brochureUrl: "https://drive.google.com/file/3dcharactermodeling/brochure"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default ThreeDCharacterModeling;