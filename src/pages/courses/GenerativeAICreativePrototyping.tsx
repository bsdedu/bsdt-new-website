import React from 'react';
import { CourseLandingPageTemplate } from '@/components/course/CourseLandingPageTemplate';

const GenerativeAICreativePrototyping = () => {
  const courseData = {
    // SEO & Meta
    title: "Generative AI for Creative Prototyping - 3 Week Course | BSD Design School",
    description: "Master AI tools for rapid creative ideation and prototyping across design disciplines. Learn Midjourney, DALL-E, Stable Diffusion, and AI prompting in 3 weeks.",
    
    // Banner Section
    courseTitle: "Generative AI for Creative Prototyping",
    heroImage: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
    duration: "3 Weeks",
    format: "Live + Recorded Sessions",
    
    // Course Overview
    courseIntro: "Master the art of AI-powered creative prototyping and transform your design workflow with cutting-edge generative AI tools. Learn to harness the power of AI for rapid ideation, concept development, and visual prototyping.",
    learningHighlights: [
      "Master advanced AI prompting techniques for creative output",
      "Generate high-quality visual concepts using Midjourney and DALL-E",
      "Create consistent brand aesthetics with AI tools",
      "Develop rapid prototyping workflows for design projects",
      "Learn ethical AI practices and copyright considerations",
      "Build a professional portfolio of AI-generated creative work"
    ],
    keyFeatures: [
      "Beginner-friendly approach to AI tools",
      "Industry-relevant creative projects",
      "Live instructor guidance and feedback",
      "Access to premium AI tools during course",
      "Professional certificate upon completion",
      "Portfolio development and review sessions"
    ],
    
    // Key Details
    details: {
      schedule: {
        startDate: "February 15, 2025",
        endDate: "March 8, 2025",
        sessionTimings: "7:00 PM - 9:00 PM IST",
        format: "Live Online + Recorded Sessions"
      },
      pricing: {
        originalPrice: 12999,
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
        type: "Professional Certificate in AI Creative Prototyping",
        description: "Industry-recognized certificate validating your expertise in AI-powered creative design and prototyping"
      }
    },
    
    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "AI Fundamentals & Prompt Engineering",
        topics: [
          "Introduction to generative AI and its creative applications",
          "Understanding different AI models and their strengths",
          "Master prompt engineering techniques for visual generation",
          "Creating effective prompts for different design styles",
          "Ethics and best practices in AI-generated content"
        ],
        tools: ["ChatGPT", "Basic Prompting", "AI Ethics Guidelines"]
      },
      {
        week: 2,
        title: "Advanced Visual AI Tools Mastery",
        topics: [
          "Midjourney advanced techniques and style consistency",
          "DALL-E 3 for precise visual concept generation",
          "Stable Diffusion workflows and customization",
          "Image-to-image transformations and editing",
          "Creating cohesive visual narratives with AI"
        ],
        tools: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Image Editing AI"]
      },
      {
        week: 3,
        title: "Creative Workflow Integration & Portfolio Development",
        topics: [
          "Building efficient AI-powered design workflows",
          "Integrating AI tools with traditional design software",
          "Quality control and refinement techniques",
          "Portfolio development strategies for AI creative work",
          "Client presentation and commercial applications"
        ],
        tools: ["Adobe Creative Suite", "Figma", "Portfolio Platforms", "Workflow Automation"]
      }
    ],
    softwareTools: [
      "Midjourney",
      "DALL-E 3",
      "Stable Diffusion",
      "ChatGPT",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "RunwayML"
    ],
    
    // Instructor
    instructor: {
      name: "Sarah Chen",
      qualifications: "M.Des Digital Art, B.F.A Visual Communications",
      experience: "7+ years in AI-powered creative design and digital art",
      image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png",
      bio: "Sarah is a pioneering creative technologist who has been at the forefront of AI-powered design since 2018. She has worked with leading brands like Nike, Adobe, and Google to integrate AI into their creative workflows. Sarah has trained over 3000 designers in AI tools and has been featured in Design Week and Creative Review for her innovative AI art projects."
    },
    
    // Testimonials
    testimonials: [
      {
        name: "Rahul Kapoor",
        role: "Creative Director",
        company: "Leo Burnett",
        rating: 5,
        feedback: "This course completely transformed how our creative team approaches ideation. The AI techniques Sarah taught us have cut our concept development time by 70% while increasing creative output quality.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Priya Sharma",
        role: "UX Designer",
        company: "Flipkart",
        rating: 5,
        feedback: "Incredible course! I went from being AI-curious to confidently using these tools in my daily workflow. The hands-on approach and real projects made all the difference.",
        isVideo: true,
        videoUrl: "#"
      },
      {
        name: "Amit Patel",
        role: "Freelance Designer",
        company: "Independent",
        rating: 5,
        feedback: "The AI skills I learned here have made me 10x more competitive as a freelancer. My clients are amazed by the speed and quality of concepts I can now deliver.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Kavya Nair",
        role: "Brand Designer",
        company: "Tata Digital",
        rating: 5,
        feedback: "Perfect blend of technical training and creative application. The instructor's industry experience really shows in the practical tips and real-world examples.",
        image: "/lovable-uploads/c83c596d-add8-4ab2-a74f-1dc8c849424e.png"
      },
      {
        name: "Rohan Gupta",
        role: "Art Director",
        company: "Ogilvy",
        rating: 5,
        feedback: "This course is a must for any creative professional. The AI tools we learned are now essential parts of our agency's creative process.",
        isVideo: true,
        videoUrl: "#"
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: "Do I need any prior AI or technical experience?",
        answer: "No prior AI experience is required! This course is designed for creative professionals from all backgrounds. We start with the basics and gradually build up to advanced techniques. Basic computer skills and familiarity with design concepts are helpful."
      },
      {
        question: "What AI tools will I get access to during the course?",
        answer: "We provide temporary access to premium versions of Midjourney, DALL-E 3, and other AI tools during the course period. We'll also guide you on free alternatives and help you choose the right subscription plans for your needs."
      },
      {
        question: "Will I need to purchase any software?",
        answer: "Most AI tools offer free tiers or trial periods. For traditional design software like Adobe Creative Suite, we'll work with free alternatives like Canva and Figma during the course, though having Adobe access is beneficial."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 7-day money-back guarantee from the course start date. If you're not satisfied with the course content or delivery, you can get a full refund within this period, no questions asked."
      },
      {
        question: "How much time should I dedicate outside of live sessions?",
        answer: "We recommend 3-4 hours per week for practice and assignments outside of the 2-hour live sessions. All sessions are recorded, so you can catch up at your own pace if you miss a live session."
      },
      {
        question: "Will I get ongoing support after the course ends?",
        answer: "Yes! You'll get lifetime access to course materials, recordings, and updates. Plus, you'll join our exclusive alumni community where you can share work, get feedback, and stay updated on new AI tools and techniques."
      },
      {
        question: "Can I use the AI-generated work in my professional projects?",
        answer: "We cover the legal and ethical aspects of AI-generated content extensively. Most AI-generated work can be used commercially, but we'll teach you best practices for attribution, licensing, and ensuring your work meets professional standards."
      },
      {
        question: "Is this course suitable for teams or corporate training?",
        answer: "Absolutely! We offer special corporate packages with customized curriculum, team projects, and bulk discounts. Contact us directly to discuss corporate training options tailored to your organization's needs."
      }
    ],
    
    // CTAs
    enrollmentUrl: "https://apply.bsd.edu.in/",
    brochureUrl: "#"
  };

  return <CourseLandingPageTemplate {...courseData} />;
};

export default GenerativeAICreativePrototyping;